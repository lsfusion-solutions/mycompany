---
title: "Communications: calls and emails"
---

In the system, you can link communications to leads so you do not lose the work context:

- **calls**;
- **emails**.

The availability of sections and tabs depends on whether the corresponding telephony and email subsystems are connected.

## Calls

### What you can do in a call card

If a call is already linked to a lead, in the call card you can:

- open the linked **lead**;
- create a **lead** from the call.

When creating a lead from a call, the system typically:

- transfers the caller number to the lead **“Phone”** field;
- opens the lead card so you can fill in the remaining data.

If the lead already exists (for example, there was a prior contact with this number), link the call to the existing lead.

### “Calls” tab in the “Leads” section

The **“Leads”** section can include a **“Calls”** tab with the current user’s calls.

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
   - if the lead is found and correct — open it and continue;
   - if the lead is not found — click **“Create”** and fill the lead;
   - if a different lead is needed — use **“Attach”**;
   - if the call is not related to lead work — mark **“Ignored”**.

## Emails

### Write an email from a lead

In the lead card, the **“Write an email”** action is available if the **“Email”** field is filled.

Possible behavior:

- if email templates are configured, the system suggests a template and generates subject and body;
- if there are no templates, your default email client opens with a prepared message.

Recommendation: before sending, verify the address in the **“Email”** field.

### “Email” tab in the “Leads” section

The **“Leads”** section can include an **“Email”** tab with a list of messages to process.

Typically available:

- the **“Ready”** filter — messages that require processing;
- viewing subject, sender, date and message text;
- creating or linking a lead:
  - **“Create”** — create a lead from the email;
  - **“Attach”** — attach the email to a found lead;
- **“Ignored”** — mark the email as not requiring processing;
- viewing the original message and attachments (if present).

#### Recommended email processing scenario

1. Open the **“Email”** tab.
2. Keep the **“Ready”** filter enabled.
3. For each email:
   - if it relates to an existing lead — open the lead and continue;
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

#### If multiple leads match one phone number

For repeat calls, the same phone number may match different leads. In that case:

1. Open the communication.
2. Review the [partner](../masterdata/partners.md) and context.
3. Attach it to the most relevant lead.

#### If an email came from a new contact

Create a lead from the email and make sure to fill:

- name (short: what the request is about);
- email;
- sales person;
- description (what the customer needs and when to reply).