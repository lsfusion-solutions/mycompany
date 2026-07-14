---
title: Shipments from invoice
---

The system may support a scenario where a [shipment](../inventory/shipments.md) is created **from an [invoice](invoices.md)**.

This is convenient when the invoice is the “main” document and the inventory shipment is created afterwards.

## When creation is available

The **"Create Shipment"** button in the invoice card is available if:

- the invoice is **active** — i.e. in **To pay** or later and not Canceled (a **Draft** invoice does not show the button);
- a shipment type is set for the [invoice type](settings.md) (see [Inventory settings](../inventory/settings.md));
- the invoice has lines that need to be shipped (the “to ship” quantity is greater than zero).

If a shipment has already been created for all positions, the button is not shown.

Note on quantities: the “to ship” quantity is expressed in stock units. When an item's sales unit differs from its stock unit, the shipment quantity is the invoice quantity multiplied by the item's SKU coefficient, so invoice and shipment quantities can legitimately differ.

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

If enabled, the shipment is created automatically **when the invoice reaches “To pay”**. Adding item lines to an invoice that is already in “To pay” also triggers creation; adding lines to a Draft invoice does not (the invoice must already be in “To pay”).

## Change synchronization

When the shipment was created automatically (i.e. the type has **Automatically create shipment**) and the invoice is linked to a single shipment, the system keeps the two in sync:

- if the invoice is Canceled — the shipment is Canceled automatically;
- if the customer was changed — it is updated in the shipment;
- if an invoice line's quantity changes — the linked shipment line's shipped quantity is updated;
- if an invoice line's item changes — the linked shipment line's product is updated.

These rules apply to auto-created shipments only; a shipment created manually with **"Create Shipment"** is not re-synchronized.

Practical meaning: an auto-created shipment stays consistent with the invoice while you work with the documents.

## Typical scenario

1. Open an invoice.
2. Click **"Create Shipment"**.
3. Verify the location and delivery address.
4. Verify line quantities (that exactly what is needed is shipped).
5. Post/confirm the shipment.

## Planned vs. immediate shipment

A shipment created from an invoice can be either **planned** or **immediate**. The mode is controlled by the **"Create planned shipment"** flag on the [invoice type](settings.md):

- if the flag is **on**, the created shipment is a regular planned [shipment](../inventory/shipments.md) — the to-ship quantities become the shipment lines' **initial demand**, and it goes through the usual Waiting / Ready / Done workflow;
- if the flag is **off**, the created shipment is marked as immediate: the to-ship quantities are written straight to the lines as **done**, and the shipment is moved to **Done** at the moment of creation. In this mode the shipment is essentially a passive record of what the invoice already declared as shipped.

## Reverse direction: invoice from shipments

The opposite flow is also supported — an [invoice](invoices.md) can be created from one or more already-existing shipments. The action lives on the shipments list and is typically called **"Create invoice"**:

1. Open the shipments list.
2. Select one or more shipments that belong to the same customer.
3. Run **"Create Invoice"** — the system creates a new draft invoice. It aggregates the done quantities of the selected shipments **by product** and includes only shipment lines that are not already linked to an invoice line; the invoice header (customer, department, location) is taken from one of the selected shipments, so it is best to select shipments that share these values.

This is convenient when the warehouse documents the shipment first and the invoice is issued afterwards.

See also: [Invoicing → Invoices](invoices.md); [Inventory → Shipments](../inventory/shipments.md).