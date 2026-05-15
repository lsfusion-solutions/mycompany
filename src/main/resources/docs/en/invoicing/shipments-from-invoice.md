---
title: Shipments from invoice
---

The system may support a scenario where a [shipment](../inventory/shipments.md) is created **from an [invoice](invoices.md)**.

This is convenient when the invoice is the “main” document and the inventory shipment is created afterwards.

## When creation is available

The shipment creation button in the invoice card is typically available if:

- the invoice is active (not Canceled);
- a shipment type is set for the [invoice type](settings.md) (see [Inventory settings](../inventory/settings.md));
- the invoice has lines that need to be shipped (the “to ship” quantity is greater than zero).

If a shipment has already been created for all positions, the button is not shown.

## What the system does when creating

When creating a shipment from an invoice, the system:

1. Creates a new shipment document.
2. Copies key fields from the invoice:
   - [partner](../masterdata/partners.md);
   - [department](../masterdata/departments.md) (if used);
   - [location](../inventory/locations.md);
   - delivery address.
3. Creates shipment lines from invoice lines:
   - only item (goods) lines are included;
   - quantity in the shipment equals the “to ship” quantity in the invoice line;
   - the shipment line is linked to the invoice line.
4. Opens the created shipment for further work.

## Automatic shipment creation

An [invoice type](settings.md) can have an **“Automatically create shipment”** setting.

If enabled, when the invoice moves to a ready state (or when item lines appear), the system automatically creates a shipment.

## Change synchronization

If the shipment was created automatically, the system may keep the invoice and shipment synchronized in some cases:

- if the invoice is Canceled and there was only one shipment — the shipment is Canceled automatically;
- if the partner was changed and there was only one shipment — the partner is updated in the shipment;
- if the item or quantity in an invoice line was changed — the item and quantity are updated in the shipment line.

Practical meaning: the shipment stays consistent with the invoice while you work with the documents.

## Typical scenario

1. Open an invoice.
2. Click **"Create Shipment"**.
3. Verify the location and delivery address.
4. Verify line quantities (that exactly what is needed is shipped).
5. Post/confirm the shipment.

## Planned vs. immediate shipment

A shipment created from an invoice can be either **planned** or **immediate**. The mode is controlled by the **"Planned shipment"** flag on the [invoice type](settings.md):

- if the flag is **on**, the created shipment is a regular planned [shipment](../inventory/shipments.md) — it goes through the usual Waiting / Ready / Done workflow;
- if the flag is **off**, the created shipment is marked as immediate and is automatically moved to **Done** at the moment of creation. In this mode the shipment is essentially a passive record of what the invoice already declared as shipped.

## Reverse direction: invoice from shipments

The opposite flow is also supported — an [invoice](invoices.md) can be created from one or more already-existing shipments. The action lives on the shipments list and is typically called **"Create invoice"**:

1. Open the shipments list.
2. Select one or more shipments that belong to the same customer and are not yet linked to an invoice.
3. Run **"Create invoice"** — the system creates a new draft invoice whose lines reference the selected shipment lines.

This is convenient when the warehouse documents the shipment first and the invoice is issued afterwards.

See also: [Invoicing → Invoices](invoices.md); [Inventory → Shipments](../inventory/shipments.md).