# Calendly Webhook Integration Setup

This guide explains how to set up Calendly webhooks to trigger automations when invitees schedule, cancel, or reschedule events.

---

## Overview

The webhook endpoint receives real-time notifications from Calendly when:
- **invitee.created**: An event is scheduled (or rescheduled)
- **invitee.canceled**: An event is canceled

---

## Webhook Endpoint

**URL**: `https://www.midtownvegascondos.com/api/calendly/webhook`  
**Method**: `POST`  
**Content-Type**: `application/json`

---

## Setup Instructions

### 1. Get Your Webhook Signing Key (Optional but Recommended)

1. Log in to your Calendly account
2. Go to **Settings** → **Integrations** → **Webhooks**
3. Create a new webhook subscription
4. Copy the **Signing Key** (you'll need this for verification)

### 2. Configure Environment Variables

Add to your `.env.local` or Vercel environment variables:

```bash
# Optional: Webhook signing key for security
CALENDLY_WEBHOOK_SIGNING_KEY=your_signing_key_here
```

### 3. Create Webhook Subscription in Calendly

1. Go to **Calendly Settings** → **Integrations** → **Webhooks**
2. Click **"Create Webhook Subscription"**
3. Enter your webhook URL:
   ```
   https://www.midtownvegascondos.com/api/calendly/webhook
   ```
4. Select the events you want to subscribe to:
   - ✅ **invitee.created** (when events are scheduled)
   - ✅ **invitee.canceled** (when events are canceled)
5. Save the webhook subscription

### 4. Test the Webhook

You can test the endpoint by making a GET request:
```bash
curl https://www.midtownvegascondos.com/api/calendly/webhook
```

This should return:
```json
{
  "message": "Calendly webhook endpoint is active",
  "endpoint": "/api/calendly/webhook",
  "method": "POST",
  "events": ["invitee.created", "invitee.canceled"]
}
```

---

## Webhook Payload Structure

### invitee.created Event

Triggered when an event is scheduled or rescheduled.

```json
{
  "event": "invitee.created",
  "invitee": {
    "uri": "https://api.calendly.com/invitees/...",
    "name": "John Doe",
    "email": "john@example.com",
    "text_reminder_number": "+1234567890",
    "timezone": "America/Los_Angeles",
    "event": "https://api.calendly.com/scheduled_events/...",
    "created_at": "2025-01-20T10:00:00.000000Z",
    "updated_at": "2025-01-20T10:00:00.000000Z",
    "canceled": false,
    "rescheduled": false,
    "questions_and_answers": [
      {
        "question": "What property are you interested in?",
        "answer": "The English Residences"
      }
    ],
    "tracking": {
      "utm_campaign": "google_ads",
      "utm_source": "google",
      "utm_medium": "cpc"
    }
  },
  "time": "2025-01-25T14:00:00.000000Z",
  "timezone": "America/Los_Angeles",
  "location": {
    "type": "physical",
    "location": "921 South Main Street, Las Vegas, NV 89101"
  },
  "canceled": false,
  "cancel_url": "https://calendly.com/cancellations/...",
  "reschedule_url": "https://calendly.com/reschedulings/...",
  "rescheduled": false
}
```

### invitee.canceled Event

Triggered when an event is canceled.

```json
{
  "event": "invitee.canceled",
  "invitee": {
    "uri": "https://api.calendly.com/invitees/...",
    "name": "John Doe",
    "email": "john@example.com",
    "canceled": true,
    "canceler_name": "John Doe",
    "cancel_reason": "Schedule conflict",
    "canceled_at": "2025-01-22T10:00:00.000000Z",
    "rescheduled": false
  },
  "canceled": true,
  "cancel_reason": "Schedule conflict",
  "canceled_at": "2025-01-22T10:00:00.000000Z"
}
```

---

## Key Payload Values

### Event Types
- `"event": "invitee.created"` - Event scheduled
- `"event": "invitee.canceled"` - Event canceled

### Status Values
- `"status": "active"` - Invitee will attend
- `"status": "canceled"` - Invitee will not attend

### Canceled Values
- `"canceled": false` - Event not canceled
- `"canceled": true` - Event canceled
- `"canceled_by"` - Who canceled (Calendly user or invitee)
- `"cancel_reason"` - Reason for cancellation (if provided)

### Rescheduled Values
- `"rescheduled": true` - Event has been rescheduled
- `"rescheduled": false` - Event has not been rescheduled
- `"old_invitee"` - URI of original invitee (if rescheduled)
- `"new_invitee"` - URI of new invitee (if rescheduled)

---

## Automation Ideas

### When Event is Scheduled (invitee.created)

1. **Send Welcome Email**
   - Confirm appointment details
   - Provide property information
   - Include directions/parking info

2. **Create CRM Record**
   - Add lead to Salesforce/HubSpot
   - Tag with property interest
   - Set follow-up tasks

3. **Send Team Notification**
   - Slack/Discord notification
   - Email to Dr. Jan
   - Calendar reminder

4. **Update Database**
   - Store appointment in database
   - Track conversion metrics
   - Update lead status

5. **Trigger Follow-up Automation**
   - Add to email sequence
   - Schedule reminder SMS
   - Set up pre-appointment survey

### When Event is Canceled (invitee.canceled)

1. **Send Cancellation Confirmation**
   - Acknowledge cancellation
   - Offer to reschedule
   - Provide alternative times

2. **Update CRM**
   - Mark appointment as canceled
   - Add cancellation reason
   - Update lead status

3. **Free Up Resources**
   - Release calendar slot
   - Notify team
   - Update availability

4. **Follow-up Automation**
   - Send rescheduling offer
   - Add to re-engagement sequence
   - Track cancellation reasons

---

## Security

### Webhook Signature Verification

The endpoint verifies webhook signatures if `CALENDLY_WEBHOOK_SIGNING_KEY` is set. This ensures the webhook is actually from Calendly.

**To enable:**
1. Get your signing key from Calendly webhook settings
2. Add to environment variables: `CALENDLY_WEBHOOK_SIGNING_KEY`
3. The endpoint will automatically verify all incoming webhooks

---

## Testing

### Test with Calendly Webhook Tester

1. Go to Calendly Settings → Integrations → Webhooks
2. Click on your webhook subscription
3. Use the "Send Test Event" feature
4. Check your server logs for the webhook payload

### Manual Testing

You can test the endpoint with curl:

```bash
curl -X POST https://www.midtownvegascondos.com/api/calendly/webhook \
  -H "Content-Type: application/json" \
  -H "calendly-webhook-signature: your_signature" \
  -d '{
    "event": "invitee.created",
    "invitee": {
      "email": "test@example.com",
      "name": "Test User"
    }
  }'
```

---

## Monitoring

### Logs

Webhook events are logged to the console with:
- Event type
- Invitee email
- Event status (scheduled/canceled/rescheduled)
- Timestamp

Check your Vercel logs or server logs to monitor webhook activity.

### Error Handling

The endpoint returns `200 OK` even on errors to prevent Calendly from retrying. Check logs for error details.

---

## Integration Examples

### Zapier Integration

Instead of building custom automations, you can use Zapier:
1. Connect Calendly to Zapier
2. Set up triggers for "New Event Scheduled" and "Event Canceled"
3. Connect to your apps (CRM, email, etc.)

### Custom Automation

Edit `app/api/calendly/webhook/route.ts` and add your automation logic in:
- `handleInviteeCreated()` - For new/rescheduled events
- `handleInviteeCanceled()` - For canceled events

---

## Troubleshooting

### Webhook Not Receiving Events

1. Verify webhook URL is correct in Calendly
2. Check that events are selected (invitee.created, invitee.canceled)
3. Verify endpoint is accessible (not behind firewall)
4. Check server logs for errors

### Signature Verification Failing

1. Verify `CALENDLY_WEBHOOK_SIGNING_KEY` is set correctly
2. Ensure signature header is being sent by Calendly
3. Check that raw body is being used for verification

### Events Not Processing

1. Check server logs for errors
2. Verify payload structure matches expected format
3. Test with Calendly's test event feature

---

## Next Steps

1. ✅ Set up webhook subscription in Calendly
2. ✅ Configure environment variables
3. ✅ Test webhook endpoint
4. ⚠️ Add your automation logic to `handleInviteeCreated()` and `handleInviteeCanceled()`
5. ⚠️ Set up monitoring and logging
6. ⚠️ Test with real events

---

**Last Updated**: January 2025  
**Status**: ✅ Webhook endpoint ready for integration
