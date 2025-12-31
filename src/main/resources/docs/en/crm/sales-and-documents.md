---
title: Orders and invoices from a lead
---

A lead can be “converted” into a document so you can continue work in the accounting contour while keeping a link to the original inquiry.

Depending on configuration, you can:

- create a **[sales order](../sales/orders.md)** from a lead;
- create an **[invoice](../sales/invoices.md)** from a lead;
- view already created related documents in the lead card.

## Preparation (one-time)

The availability of document creation buttons depends on parameters in **“CRM → Configuration → Settings”**:

- **“Order type”** — defines which type is prefilled when creating an order;
- **“Invoice type”** — defines which type is prefilled when creating an invoice.

If a parameter is not set, the corresponding button is not shown in the lead card.

See details in [Settings and reference data](settings.md).

## When you should create documents from a lead

Creating an order or an invoice is convenient when:

- the customer need is confirmed;
- key terms are clear (what you sell, to whom, where);
- you need to track further actions in documents.

If the request is still “raw”, it is better to clarify details first and move the lead through statuses.

## Creating an order from a lead

### How to create

1. Open the lead card.
2. Click **“Create Order”**.
3. The system creates a new order and opens it for further filling.

Before creating, it is recommended to check in the lead:

- whether the [partner](../masterdata/partners.md) is filled;
- whether phone and email are correct;
- whether address fields are filled (if delivery matters).

### What is filled automatically

As a rule, the following is transferred automatically:

- a link to the source lead;
- **[partner](../masterdata/partners.md)** from the lead;
- **type** = value of the **“Order type”** parameter;
- **delivery address** — built from the lead address data (if filled).

If some data is missing in the lead (for example, no [partner](../masterdata/partners.md)), you will need to fill it in the order manually.

### Where to see related orders

The lead card shows an **“Orders”** block:

- it shows only orders linked to the current lead;
- the list usually includes number, date/time, status, type, amount and other key fields;
- you can open an order for editing from the list.

The link is usually visible in the order itself (the “Lead” field), so you can also find the source lead “from the document”.

## Creating an invoice from a lead

### How to create

1. Open the lead card.
2. Click **“Create Invoice”**.
3. The system creates a new invoice and opens it.

Recommendation: create an invoice from a lead when it is already clear that [shipment](../sales/shipments.md)/service delivery will be registered soon.

Recommended article for the document: [Invoices for orders](../sales/invoices.md).

### What is filled automatically

As a rule, the following is transferred automatically:

- a link to the source lead;
- **[partner](../masterdata/partners.md)** from the lead;
- **type** = value of the **“Invoice type”** parameter;
- **delivery address** — built from the lead address data (if filled).

### Where to see related invoices

The lead card shows an **“Invoices”** block:

- it shows invoice documents created from the current lead;
- you can open an invoice for editing from the list.

## What to do if a document was created by mistake

1. Open the created document.
2. If the document is empty and was not used, you can delete it (if you have permissions).
3. If the document already participated in the process, coordinate actions with responsible users (e.g., cancellation/closure according to accounting rules).
4. Return to the lead and fix the source data ([partner](../masterdata/partners.md), address, type) so re-creation is correct.

## Typical situations

- **There is no create button** — “Order type” or “Invoice type” is not set in settings, or you do not have permissions.
- **Wrong [partner](../masterdata/partners.md)** — check the “Partner” field in the lead before creating the document.
- **Address was not filled** — fill address fields in the lead and create again (or fill the address in the document manually).