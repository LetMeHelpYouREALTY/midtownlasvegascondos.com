/**
 * Follow Up Boss API Integration
 * 
 * This module handles integration with Follow Up Boss CRM
 * to automatically create contacts and leads from Calendly webhooks
 */

interface FollowUpBossContact {
  firstName: string
  lastName: string
  email: string
  phone?: string
  source?: string
  tags?: string[]
  notes?: string
  customFields?: Record<string, any>
}

interface FollowUpBossAPIResponse {
  success: boolean
  data?: any
  error?: string
  message?: string
}

// Follow Up Boss API Base URL
// Note: Verify the correct API endpoint with Follow Up Boss documentation
// Common patterns: https://api.followupboss.com/v1 or https://api.followupboss.com/api/v1
const FUB_API_BASE_URL = process.env.FOLLOW_UP_BOSS_API_URL || 'https://api.followupboss.com/v1'

/**
 * Get Follow Up Boss API key from environment variables
 */
function getFUBAPIKey(): string {
  const apiKey = process.env.FOLLOW_UP_BOSS_API_KEY
  if (!apiKey) {
    throw new Error('FOLLOW_UP_BOSS_API_KEY environment variable is not set')
  }
  return apiKey
}

/**
 * Make authenticated request to Follow Up Boss API
 */
async function makeFUBRequest(
  endpoint: string,
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' = 'GET',
  body?: any,
): Promise<FollowUpBossAPIResponse> {
  try {
    const apiKey = getFUBAPIKey()
    const url = `${FUB_API_BASE_URL}${endpoint}`

    const options: RequestInit = {
      method,
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    }

    if (body && (method === 'POST' || method === 'PUT' || method === 'PATCH')) {
      options.body = JSON.stringify(body)
    }

    const response = await fetch(url, options)
    const data = await response.json()

    if (!response.ok) {
      console.error(`[Follow Up Boss] API Error:`, {
        status: response.status,
        statusText: response.statusText,
        data,
      })
      return {
        success: false,
        error: data.message || `HTTP ${response.status}: ${response.statusText}`,
        data,
      }
    }

    return {
      success: true,
      data,
    }
  } catch (error) {
    console.error('[Follow Up Boss] Request failed:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    }
  }
}

/**
 * Create a contact in Follow Up Boss
 */
export async function createContact(
  contact: FollowUpBossContact,
): Promise<FollowUpBossAPIResponse> {
  try {
    // Split name into first and last
    const nameParts = contact.firstName.trim().split(/\s+/)
    const firstName = nameParts[0] || contact.firstName
    const lastName = nameParts.slice(1).join(' ') || ''

    const payload = {
      firstName,
      lastName,
      email: contact.email,
      ...(contact.phone && { phone: contact.phone }),
      ...(contact.source && { source: contact.source }),
      ...(contact.tags && contact.tags.length > 0 && { tags: contact.tags }),
      ...(contact.notes && { notes: contact.notes }),
      ...(contact.customFields && { customFields: contact.customFields }),
    }

    console.log('[Follow Up Boss] Creating contact:', {
      email: contact.email,
      name: `${firstName} ${lastName}`,
    })

    return await makeFUBRequest('/people', 'POST', payload)
  } catch (error) {
    console.error('[Follow Up Boss] Error creating contact:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    }
  }
}

/**
 * Create a contact from Calendly webhook data
 */
export async function createContactFromCalendly(
  inviteeData: {
    name: string
    email: string
    phone?: string
    scheduledTime?: string
    questions?: Array<{ question: string; answer: string }>
    tracking?: {
      utm_campaign?: string
      utm_source?: string
      utm_medium?: string
      utm_content?: string
      utm_term?: string
    }
  },
): Promise<FollowUpBossAPIResponse> {
  try {
    // Extract property interest from questions
    const propertyInterest = inviteeData.questions?.find((q) =>
      q.question.toLowerCase().includes('property') ||
      q.question.toLowerCase().includes('interested') ||
      q.question.toLowerCase().includes('home')
    )?.answer

    // Build notes from appointment details
    const notes = [
      `Scheduled Calendly appointment for ${inviteeData.scheduledTime || 'TBD'}`,
      ...(propertyInterest ? [`Property Interest: ${propertyInterest}`] : []),
      ...(inviteeData.questions?.map((q) => `${q.question}: ${q.answer}`) || []),
    ].join('\n')

    // Build tags
    const tags = [
      'Calendly',
      'Website Lead',
      ...(inviteeData.tracking?.utm_source ? [`Source: ${inviteeData.tracking.utm_source}`] : []),
      ...(inviteeData.tracking?.utm_campaign ? [`Campaign: ${inviteeData.tracking.utm_campaign}`] : []),
    ]

    // Determine source
    const source = inviteeData.tracking?.utm_source || 'Website'

    const contact: FollowUpBossContact = {
      firstName: inviteeData.name,
      lastName: '', // Will be split from firstName if needed
      email: inviteeData.email,
      phone: inviteeData.phone,
      source: source,
      tags: tags,
      notes: notes,
      customFields: {
        calendly_appointment_time: inviteeData.scheduledTime,
        calendly_source: 'Website',
        ...(inviteeData.tracking && {
          utm_campaign: inviteeData.tracking.utm_campaign,
          utm_source: inviteeData.tracking.utm_source,
          utm_medium: inviteeData.tracking.utm_medium,
          utm_content: inviteeData.tracking.utm_content,
          utm_term: inviteeData.tracking.utm_term,
        }),
      },
    }

    return await createContact(contact)
  } catch (error) {
    console.error('[Follow Up Boss] Error creating contact from Calendly:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    }
  }
}

/**
 * Update contact in Follow Up Boss (e.g., when appointment is canceled)
 */
export async function updateContact(
  email: string,
  updates: Partial<FollowUpBossContact>,
): Promise<FollowUpBossAPIResponse> {
  try {
    // First, find the contact by email
    const searchResponse = await makeFUBRequest(`/people?email=${encodeURIComponent(email)}`, 'GET')
    
    if (!searchResponse.success || !searchResponse.data) {
      return {
        success: false,
        error: 'Contact not found',
      }
    }

    // Update the contact
    const contactId = searchResponse.data.id || searchResponse.data[0]?.id
    if (!contactId) {
      return {
        success: false,
        error: 'Contact ID not found',
      }
    }

    return await makeFUBRequest(`/people/${contactId}`, 'PATCH', updates)
  } catch (error) {
    console.error('[Follow Up Boss] Error updating contact:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    }
  }
}

/**
 * Add note to contact in Follow Up Boss
 */
export async function addNoteToContact(
  email: string,
  note: string,
): Promise<FollowUpBossAPIResponse> {
  try {
    // Find contact by email
    const searchResponse = await makeFUBRequest(`/people?email=${encodeURIComponent(email)}`, 'GET')
    
    if (!searchResponse.success || !searchResponse.data) {
      return {
        success: false,
        error: 'Contact not found',
      }
    }

    const contactId = searchResponse.data.id || searchResponse.data[0]?.id
    if (!contactId) {
      return {
        success: false,
        error: 'Contact ID not found',
      }
    }

    // Add note
    return await makeFUBRequest(`/people/${contactId}/notes`, 'POST', {
      note: note,
    })
  } catch (error) {
    console.error('[Follow Up Boss] Error adding note:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    }
  }
}

/**
 * Test Follow Up Boss API connection
 */
export async function testConnection(): Promise<FollowUpBossAPIResponse> {
  try {
    // Try to get user info or a simple endpoint to test connection
    return await makeFUBRequest('/people?limit=1', 'GET')
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    }
  }
}
