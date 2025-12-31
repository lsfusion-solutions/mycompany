---
title: Settings and reference data
---

## Where to find it

Open **“CRM”**, then **“Configuration”**, then **“Settings”**.

This section contains parameters and directories that define how users maintain leads: statuses, types, priorities, tags, and how a lead is marked as lost.

## Parameters

### Order type

The **“Order type”** parameter defines which type is prefilled when creating a [sales order](../sales/orders.md) from a lead.

If it is not set, the **“Create Order”** button is not shown in the lead card.

### Invoice type

The **“Invoice type”** parameter defines which type is prefilled when creating an [invoice](../sales/invoices.md) from a lead.

If it is not set, the **“Create Invoice”** button is not shown in the lead card.

## Reference data

### Lead statuses

Status defines the stage of work with a lead.

Important fields:

- **Name** — how the status is shown to users;
- **ID** — an internal code (used in settings and integrations);
- **Sorting order** — display order in lists and on the lead board;
- **Closed** — a closed status flag (closed statuses are not shown on the board);
- **Lost** — a flag for the status that should be set when the lead is marked as lost.

Recommendations:

1. Create at least 3–5 statuses so the pipeline is clear.
2. For closing statuses, mark **“Closed”**.
3. Choose one status and mark it as **“Lost”** — it will be set when closing a lead via the “Lost” action.
4. Set **sorting order** so the columns on the board go left to right according to the process.

### Lead types

Lead type is a classification of inquiries. The type affects which statuses are available.

How status restriction works:

- for a type, you can explicitly specify which statuses are allowed;
- when saving a lead, the system checks that the selected status is allowed for the type.

Recommendation: if you have multiple different pipelines (e.g., “wholesale”, “retail”, “service”), create separate types and define allowed statuses for each.

### Lead priorities

Priority helps highlight important leads.

Priority usually has:

- **name**;
- **color**.

Color can be shown in the list and in the lead card.

### Lead tags

Tags are labels that can be assigned to leads for convenient grouping.

In the tags directory, you typically set:

- **Name**;
- **ID**;
- **color**.

Recommendation: use tags for cross-cutting attributes (source, segment, request type) without duplicating statuses.

### Lost reasons

Lost reasons are used when closing a lead via the **“Lost”** action.

What it looks like to the user:

1. the user clicks **“Lost”** in the lead card;
2. selects a lost reason;
3. the reason is saved in the lead, and the lead is moved to the status that is marked as **“Lost”** in the statuses directory.

Recommendation: create reasons so you can draw conclusions from them (e.g., “too expensive”, “chose a competitor”, “no budget”, “could not reach”, “not relevant”).

## Recommended initial setup order

1. Create lead statuses and set sorting order.
2. Mark closing statuses and choose the lost status.
3. Create lead types and set allowed statuses.
4. Configure priorities and tags (if needed).
5. Fill lost reasons.
6. Set “Order type” and “Invoice type” if you plan to create documents from leads.