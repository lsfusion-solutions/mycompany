---
title: "Communications: calls and emails"
---

In the system, you can link communications to leads so you do not lose the work context:

- **calls**;
- **emails**.

The **“Calls”** tab is always present in the **“Leads”** section. The **“Email”** tab appears once an email account is configured (an account for leads or the current user’s email account). Both tabs become useful once the corresponding telephony and email integrations are set up.

## Calls

### Calling from the lead card

If IP telephony integration is configured and an internal PBX number is assigned to your user, the lead card shows the **“Call to”** button (when the **“Phone”** field is filled). Clicking it initiates an outgoing call to the lead’s phone number.

### What you can do in a call card

In the call card you can:

- open the linked **lead**;
- create a **lead** from the call (if none is linked yet);
- attach the call to one of the leads of the call’s [partner](../masterdata/partners.md) — the card shows the list of that partner’s leads.

When a call is linked to a lead that has no **Customer** yet, the customer is filled automatically from the partner identified for the call.

When creating a lead from a call, the system typically:

- transfers the caller number to the lead **“Phone”** field;
- sets the lead **“Sales person”** to the employee linked to the call;
- opens the lead card so you can fill in the remaining data.

If the lead already exists (for example, there was a prior contact with this number), link the call to the existing lead.

### “Calls” tab in the “Leads” section

The **“Leads”** section includes a **“Calls”** tab with the current user’s calls.

Typically available:

- the **“Ready”** filter — calls that require processing;
- main call details: time, parties, duration, result;
- open the lead for a call (if found/linked);
- call processing:
  - **“Create”** — create a lead from the call;
  - **“Attach”** — link the call to a found lead;
  - **“Ignored”** — mark the call as not requiring processing.

#### Recommended call processing scenario

1. Open the **“Calls”** tab.
2. Keep the **“Ready”** filter enabled.
3. For each row:
   - if the automatically found lead is correct — click **“Attach”** to link the call to it (open the lead first to check, if needed);
   - if the lead is not found — click **“Create”** and fill the lead;
   - if a different lead is needed — open the call card and link the call to one of the partner’s leads there;
   - if the call is not related to lead work — mark **“Ignored”**.

For more information on setting up specific telephony providers, see:
- [Zadarma IP Telephony](zadarma.md)

## Emails

### Write an email from a lead

In the lead card, the **“Write an email”** action is available if the **“Email”** field is filled.

Possible behavior:

- if email templates applicable to the lead (matched by its type and status) are configured, the system suggests choosing a template and generates the subject and body;
- otherwise, your default email client opens a new message with the recipient filled in and the lead name as the subject.

Recommendation: before sending, verify the address in the **“Email”** field.

### “Email” tab in the “Leads” section

If an email account is configured, the **“Leads”** section shows an **“Email”** tab with a list of messages to process.

Typically available:

- the **“Ready”** filter — messages that require processing;
- viewing subject, sender, date and message text;
- creating or linking a lead:
  - **“Create”** — create a lead from the email;
  - **“Attach”** — attach the email to a found lead;
- **“Ignored”** — mark the email as not requiring processing;
- viewing the original message and attachments (if present).

When creating a lead from an email, the system fills the lead automatically: the **name** from the email subject, the **description** from the message text, the **email** from the sender’s address; email attachments are saved as lead files. If the sender’s address matches a [partner](../masterdata/partners.md), it is set as the lead **Customer**. The **“Attach”** action also copies the email attachments to the files of the existing lead.

#### Recommended email processing scenario

1. Open the **“Email”** tab.
2. Keep the **“Ready”** filter enabled.
3. For each email:
   - if the automatically found lead is correct — click **“Attach”** to link the email to it (open the lead first to check, if needed);
   - if there is no lead — create one from the email;
   - if it does not require processing — mark **“Ignored”**.

### Emails in the lead card

The lead card can show a list of linked emails. This helps you see the correspondence history in the lead context.

## How to tell whether a communication requires processing

Usually, the **“Ready”** filter is used:

- **“Ready”** — the communication requires processing in the lead context (you need to create a lead, attach it to a lead, or explicitly mark that processing is not required).
- **“Ignored”** — the communication is not related to sales or does not require actions on leads.

Recommendation: do not leave communications in the **“Ready”** filter without a decision. Even if you do not have time now, open the lead and record the next step in “Description”.

## Practical tips

#### If the phone number matched the wrong lead

For a repeat call, the system automatically finds one lead by the phone number (the most recent open one). If it is not the right lead:

1. Open the call card.
2. Review the [partner](../masterdata/partners.md) and context.
3. Link the call to the correct lead from the list of the partner’s leads.

#### If an email came from a new contact

Create a lead from the email and make sure to fill:

- name (short: what the request is about);
- email;
- sales person;
- description (what the customer needs and when to reply).