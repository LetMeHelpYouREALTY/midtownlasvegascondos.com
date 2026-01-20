# Follow Up Boss CRM Integration

This document explains how the Follow Up Boss CRM is integrated with Calendly webhooks to automatically create and update contacts when appointments are scheduled or canceled.

---

## Overview

When a visitor schedules an appointment through Calendly:
1. Calendly sends a webhook to our endpoint
2. The webhook handler creates a contact in Follow Up Boss
3. Contact includes appointment details, property interest, and tracking data
4. When appointments are canceled, notes are added to the contact

---

## API Key Configuration

### Environment Variable

Add your Follow Up Boss API key to your environment variables:

**Vercel Environment Variables:**
1. Go to your Vercel project settings
2. Navigate to **Settings** → **Environment Variables**
3. Add:
   ```
   FOLLOW_UP_BOSS_API_KEY=fka_0N4mnN3SvIsd5iQpoTwAbE21ySYkA3rxZD
   ```

**Local Development (.env.local):**
```bash
FOLLOW_UP_BOSS_API_KEY=fka_0N4mnN3SvIsd5iQpoTwAbE21ySYkA3rxZD
```

---

## How It Works

### When Appointment is Scheduled (invitee.created)

1. **Webhook Received**: Calendly sends webhook to `/api/calendly/webhook`
2. **Contact Created**: Follow Up Boss integration creates a new contact with:
   - Name and email from Calendly
   - Phone number (if provided)
   - Source: Website/UTM tracking data
   - Tags: "Calendly", "Website Lead", UTM source/campaign
   - Notes: Appointment time, property interest, Q&A responses
   - Custom Fields: UTM tracking data, appointment time

3. **Data Captured**:
   - Contact information (name, email, phone)
   - Appointment date/time
   - Property interest (from Calendly questions)
   - UTM tracking parameters (campaign, source, medium, etc.)
   - All Q&A responses from Calendly form

### When Appointment is Canceled (invitee.canceled)

1. **Webhook Received**: Calendly sends cancellation webhook
2. **Note Added**: Follow Up Boss integration adds a note to the existing contact:
   - Cancellation reason (if provided)
   - Cancellation date/time
   - Whether it was rescheduled
   - Who canceled (invitee or host)

---

## Contact Data Structure

### Created Contact Fields

```typescript
{
  firstName: "John",
  lastName: "Doe",
  email: "john@example.com",
  phone: "+1234567890",
  source: "Website" or "utm_source value",
  tags: ["Calendly", "Website Lead", "Source: google", "Campaign: spring_sale"],
  notes: "Scheduled Calendly appointment for 2025-01-25T14:00:00Z\nProperty Interest: The English Residences\nWhat property are you interested in?: The English Residences",
  customFields: {
    calendly_appointment_time: "2025-01-25T14:00:00Z",
    calendly_source: "Website",
    utm_campaign: "spring_sale",
    utm_source: "google",
    utm_medium: "cpc",
    utm_content: "ad_variant_1",
    utm_term: "las vegas condos"
  }
}
```

---

## Integration Files

### Core Integration
- **`lib/follow-up-boss.ts`**: Follow Up Boss API client
  - `createContact()`: Creates a new contact
  - `createContactFromCalendly()`: Creates contact from Calendly webhook data
  - `updateContact()`: Updates existing contact
  - `addNoteToContact()`: Adds note to contact
  - `testConnection()`: Tests API connection

### Webhook Handler
- **`app/api/calendly/webhook/route.ts`**: Calendly webhook endpoint
  - Receives webhooks from Calendly
  - Calls Follow Up Boss integration
  - Handles both scheduled and canceled events

---

## Testing the Integration

### Test API Connection

You can test the Follow Up Boss connection by creating a test endpoint or using the API directly:

```typescript
import { testConnection } from '@/lib/follow-up-boss'

const result = await testConnection()
console.log(result)
```

### Test with Calendly

1. Schedule a test appointment in Calendly
2. Check Vercel logs for webhook processing
3. Verify contact appears in Follow Up Boss
4. Cancel the appointment
5. Verify note is added in Follow Up Boss

---

## Customization

### Modify Contact Fields

Edit `lib/follow-up-boss.ts` → `createContactFromCalendly()` to:
- Add custom fields
- Change tag structure
- Modify notes format
- Add additional data sources

### Add More Automation

Edit `app/api/calendly/webhook/route.ts` to add:
- Email notifications
- Slack/Discord alerts
- Additional CRM updates
- Database logging
- SMS notifications

---

## Troubleshooting

### Contact Not Created

1. **Check API Key**: Verify `FOLLOW_UP_BOSS_API_KEY` is set correctly
2. **Check Logs**: Review Vercel function logs for errors
3. **Test API**: Use `testConnection()` to verify API access
4. **Check Webhook**: Verify Calendly webhook is sending events

### API Errors

Common errors:
- **401 Unauthorized**: Invalid API key
- **400 Bad Request**: Invalid contact data format
- **404 Not Found**: Contact not found (for updates/notes)

Check logs for specific error messages.

---

## Security

### API Key Protection

- API key is stored in environment variables (never in code)
- Only accessible server-side (not exposed to client)
- Rotate key if compromised

### Webhook Security

- Webhook signature verification (if configured)
- HTTPS only endpoints
- Error handling prevents data leaks

---

## Next Steps

1. ✅ API key configured
2. ✅ Integration code deployed
3. ⚠️ Test with real Calendly appointment
4. ⚠️ Verify contact creation in Follow Up Boss
5. ⚠️ Customize contact fields if needed
6. ⚠️ Set up additional automations

---

## Support

For Follow Up Boss API documentation:
- https://followupboss.com/api-docs/

For Calendly webhook documentation:
- See `docs/CALENDLY_WEBHOOK_SETUP.md`

---

**Last Updated**: January 2025  
**Status**: ✅ Integration ready - API key configured
