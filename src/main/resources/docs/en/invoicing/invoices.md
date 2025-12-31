---
title: Invoices
---

## Where to find it

Open **“Invoicing” → “Operations” → “Invoices”**.

## Purpose

An invoice records a sale in accounting:

- line amounts;
- taxes;
- customer debt;
- and, if the [Inventory](../inventory/inventory.md) contour is enabled — relationship with [shipments](shipments-from-invoice.md).

Depending on settings, an invoice can be:

- a document used to control **[debt](debt-and-calendar.md)** (if debt accounting is maintained by invoices);
- a basis for creating a **[shipment](shipments-from-invoice.md)** (if [Inventory](../inventory/inventory.md) is used);
- a document for printing primary forms (if print templates are enabled).

## Invoice card

### Main fields

- type;
- date and number;
- [partner](../masterdata/partners.md);
- [contract](../masterdata/contracts.md) (if used);
- [location](../inventory/locations.md)/address (if used);
- note.

If the [payment calendar](debt-and-calendar.md) is used, the invoice may include payment terms / due date (field names depend on configuration).

### Lines

- [item](../masterdata/items.md)/service;
- quantity;
- price;
- [tax](taxes.md);
- amount.

### Statuses

Typical status set:

- Draft;
- To pay;
- Done;
- Canceled.

As a rule:

- in **Draft**, you can change the header and lines;
- in **To pay**, the document is confirmed for further actions (printing, creating a shipment, payments matching);
- in **Done**, the document is considered closed;
- **Canceled** excludes the document from the process/settlements.

### Relationship with shipment

If [Inventory](../inventory/inventory.md) is used:

- an invoice can create a shipment;
- a shipment can be created automatically based on a type setting.

See: [Shipments from invoice](shipments-from-invoice.md).

Practical tip: if the shipment is created automatically from the invoice, first verify the lines (items, quantities, location/address), and only then move the invoice to the status that triggers auto creation.

## Payment

An invoice can be linked to [incoming payments](incoming-payments.md). [Debt](debt-and-calendar.md) is calculated based on matched payments.

If the payment amount is less than the invoice amount, it is a **partial payment**, and debt remains until full settlement.

### Quick payment from an invoice

In some configurations, an incoming payment can be created directly from an invoice.

Typical flow:

1. Move the invoice to status **“To pay”**.
2. Click **“Register Payment”**.
3. Review the created **incoming payment** card and save it.

The system typically:

- substitutes partner, company, accounts/cash registers and payment type (depending on settings);
- sets the amount equal to the remaining amount due;
- immediately performs **payments matching** with this invoice so that debt decreases.

See: [Incoming payments](incoming-payments.md).

See also: [Payments](payments.md), [Debt and payment calendar](debt-and-calendar.md).