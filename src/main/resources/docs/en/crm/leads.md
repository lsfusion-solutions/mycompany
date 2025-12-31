---
title: Leads
---

## Where to find it

Open the **“Leads”** section (in the navigation tree it is located in the **“Operations”** group).

In this section you can typically access:

- the lead list;
- the lead card;
- state filters (**“Opened”** and **“Closed”**) and **“My leads”**;
- additional tabs with communications (calls, emails) — if enabled;
- a block of related documents ([sales orders](../sales/orders.md), [invoices](../sales/invoices.md)) — if the corresponding modules are enabled.

## Lead list

The list is intended for daily work: quickly see what is in progress, who is responsible, what needs to be closed, and where things are “stuck”.

### What data is shown in the list

The set of columns depends on configuration, but usually includes:

- **ID**, **Name**;
- **Lead status** (and the “open/closed” state);
- **Lead type**;
- **[Partner](../masterdata/partners.md)**;
- **Sales person**;
- **Lead priority** and **Lead tags**;
- forecast: **Expected revenue**, **Probability**, **Expected closing**;
- contacts: **Phone**, **Email**;
- if needed — address and contact fields.

Tip: the list can use priority color indication so “urgent” leads stand out.

### Filters

On the right, in the **“Filters”** panel, quick toggles are usually available:

- **“Opened”** — shows open leads;
- **“Closed”** — shows closed leads;
- **“My leads”** — shows leads where **Sales person** equals the current user.

Additional filters may also be available (depending on configuration):

- by lead type;
- by sales person;
- by priority;
- by [partner](../masterdata/partners.md).

Recommendation: for daily work it is usually convenient to keep **“Opened”** enabled and then narrow down to **“My leads”**.

### Opening the lead card

To open a lead card:

1. Find the required row in the list.
2. Open the lead for editing (usually by double‑clicking the row or using the edit button).

## Lead card

The lead card is used to maintain full information about the lead and perform actions: change status, mark as lost, and work with related communications and documents.

### Card structure

Typically, the top of the card shows:

- **ID** and **Name**;
- forecast block: **Date and time**, **Expected revenue**, **Probability**, **Expected closing**;
- main attributes: **Lead type**, **[Partner](../masterdata/partners.md)**, **Email**, **Phone**, **Sales person**, **Lead priority**, **Lead tags**.

Below are tabs such as:

- **“Description”** — a text description of the inquiry, agreements, next step;
- **“Other information”** — details, website, address fields, contact person (if used).

### Recommended filling order

1. Set **Name** — short and clear (what is requested and from whom).
2. Set **[Partner](../masterdata/partners.md)**, if known.
3. Assign **Sales person**.
4. Select **Lead type**.
5. Select **Lead status**.
6. Add contacts and description.

### Lead type and allowed statuses

The list of available statuses depends on the selected lead type:

- for each type, you can configure which statuses are allowed;
- if a type has no status list configured, then (depending on settings) all statuses can be allowed.

If the selected status is not allowed for the type, the system will not let you save the lead.

### Contacts and validation

- The **“Email”** field is validated by format. If the address is entered incorrectly, the system will show an error.
- The **“Phone”** field is used, among other things, for automatic lead lookup when processing calls.

### Closing a lead via “Lost”

If the lead is not closed yet, the **“Lost”** action is available in the lead card.

How it works:

1. Click **“Lost”**.
2. Select a **lost reason**.
3. The system saves the reason and sets the lead status that is configured in settings as “Lost”.

After that, the **“Lost reason”** field is shown in the card.

### History

The lead card can include a **“History”** tab:

- shows who changed the lead and when;
- records key events (including status changes).

The practical value of history is to quickly understand why the lead is in its current state and when the last contact happened.

### Related communications

If communications are enabled in your configuration, the lead card can show:

- a list of calls linked to the lead;
- a list of emails linked to the lead.

See details in [Communications: calls and emails](communications.md).

### Related documents: orders and invoices

If creating documents from a lead is enabled, the card can include a related documents block:

- **“Orders”** — documents created from the lead;
- **“Invoices”** — documents created from the lead.

See details in [Orders and invoices from a lead](sales-and-documents.md).

## Creating and deleting a lead

### Creating

Typically, a new lead is created from the lead list:

1. Open the “Leads” section.
2. Click “New”.
3. Fill required fields (at least “Name”).
4. Save.

Recommendation: assign “Sales person” and set “Expected closing” right away so the lead is not lost.

### Deleting

Delete a lead only if it was created by mistake or is an obvious duplicate.

Before deleting, check:

- there are no related [sales orders](../sales/orders.md) and [invoices](../sales/invoices.md);
- there are no related calls and emails.

If there are links, it is often better to close the lead via a status or via “Lost” rather than delete it.

## Lead maintenance practices

#### What to write in “Description”

A good description format:

- short: what the customer wants;
- what has already been done (call, email, proposal sent);
- next step and date (for example, “call back on 20 Dec”, “waiting for reply until 25 Dec”).

#### How to use tags

Tags are convenient for cross-cutting marks across statuses, for example:

- source: “exhibition”, “website”, “referral”;
- request type: “delivery”, “selection”, “urgent”.

Do not use tags instead of statuses: a status is a process stage, a tag is an additional attribute.

## Common mistakes

- **A lead cannot be saved** — a status was selected that is not allowed for the lead type.
- **Cannot write an email** — “Email” is not filled in or is invalid.
- **Leads get “lost”** — no sales person is assigned and/or expected closing is not set.