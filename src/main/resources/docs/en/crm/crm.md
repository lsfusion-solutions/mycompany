---
title: User documentation for working with leads
---

This set of documents describes end-user work with leads: the lead card and list, the status board (kanban), handling calls and emails, creating related documents, reporting, and reference data setup.

## Getting started

1. Open the **“Leads”** section (in the navigation tree it is located in the **“Operations”** group).
2. Create a lead (the **“New”** button in the list).
3. Fill in the minimum so the lead is easy to maintain:
   - **Name**
   - **Sales person**
   - **Lead type** and **Lead status** (if the pipeline is configured)
   - if available — **[Partner](../masterdata/partners.md)**, **Phone**, **Email**
4. For control, use:
   - filters **“Opened”**, **“Closed”**, **“My leads”**;
   - the **[“Kanban”](kanban.md)** tab (columns by status, quick drag-and-drop between stages).

Detailed instructions:

- [Leads: list and card](leads.md)
- [Lead board (kanban)](kanban.md)
- [Communications: calls and emails](communications.md)
- [Orders and invoices from a lead](sales-and-documents.md)
- [Lead report](reports.md)
- [Settings and reference data](settings.md)

## Terms and guidance

#### Lead

A potential sale or inquiry that goes through work stages (statuses). A lead can be linked to a [partner](../masterdata/partners.md), an owner employee, a priority and a set of tags.

#### Lead type

Lead classification. The type affects which statuses are allowed for the lead.

#### Lead status

A stage of working with the lead. A status can be “closed” (such statuses are not shown on the lead board).

#### Lost and lost reason

A special way to close a lead: the user marks the lead as **Lost** and selects a **Lost reason**. After that, the lead receives the status configured in settings as “Lost”.

#### Lead priority

Lead importance. Priority may have color indication (for example, for quick visual search in the list).

#### Lead tags

Tags used to group leads (e.g., “exhibition”, “follow‑up”, “urgent”). Tags can also have colors.

## Typical scenarios

1. **An incoming call / email arrived** → create a lead from the communication or attach the communication to an existing lead → then move the lead through statuses.
2. **A document is needed** → from the lead, create a **[sales order](../sales/orders.md)** or an **[invoice](../sales/invoices.md)** (if configured) → control related documents in the lead card.
3. **You need to analyze the pipeline** → use the **[Lead report](reports.md)** and date interval filters.

## Notes

- The availability of tabs and actions depends on user permissions and configuration (for example, to create a [sales order](../sales/orders.md)/[invoice](../sales/invoices.md), the corresponding document types must be set).
- This documentation uses section/field/button names as they are shown in the UI.

## Roles and responsibilities

#### Sales person

Responsible for:

- creating and maintaining leads;
- keeping the status up to date;
- recording agreements in “Description”;
- closing the lead as successful or via **Lost** with a reason.

#### Manager

Responsible for:

- configuring the pipeline (statuses, types, lost reasons);
- controlling lead data quality;
- analyzing reports and manager workload.

## Daily routine

1. Open the “Leads” section and enable the “Opened” and “My leads” filters.
2. Review leads without expected closing and without a filled description — these are the first candidates for clarification.
3. Switch to the lead board and check whether any leads are “stuck” in one status.
4. Process the “Calls” and “Email” tabs (if available):
   - create leads from new inquiries;
   - attach communications to existing leads;
   - mark “Ignored” if the inquiry is not related to sales.
5. Record the next step in the lead description (what to do and when).

## FAQ

#### Why don’t I see the button to create a [sales order](../sales/orders.md) or an [invoice](../sales/invoices.md)?

Check in **“CRM → Configuration → Settings”** whether the **“Order type”** and **“Invoice type”** parameters are set. If the parameters are not set or you do not have permissions, the buttons are not shown.

#### Why can’t I save the lead after changing the type?

The lead type can restrict the allowed statuses. After changing the type, select a status that is allowed for that type.

#### Why is the lead board not shown?

Most often, the reason is that statuses are marked as “Closed”, or statuses are not allowed for the selected lead type.