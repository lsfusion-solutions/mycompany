---
title: Transfers
---

Transfer (`Transfer`) is a document for moving goods between [locations](locations.md) (for example, between warehouses, zones or bins).

In fact, a transfer is a kind of **[Shipment](shipments.md)** document (it is stored in the system as a shipment with the **Transfer** type). Therefore, the list and the card are located in the common shipments section.

## How the system determines that a type is a transfer

There is no separate “transfer document type” in the system — a transfer is a **[shipment](shipments.md)** that uses a **shipment type** with the **Transfer** flag enabled.

This is a flag on the **Shipment type** directory.

What it changes for a user:

- the **Location (to)** field becomes available and required;
- the system does not allow selecting the same **Location (from)** and **Location (to)**;
- actions intended for transfers (for example, **“Create transfers”**, **“Mobile transfer”**) are available/work only for types with this flag enabled.

## Where to find it

- Document list: **“Inventory” → “Operations” → “Shipments”**.
- Create a new document: **Create** button in the list.
- Bulk creation: **“Create transfers”** action in the list actions.
- Mobile UI: **“Mobile transfer”**.

## Document fields

### Header

- **Type** — the shipment document type. For transfers, select a type marked as `Transfer`.
- **Planned date** — document date/time.
- **Number** — document number (may be filled automatically if numbering is configured for the selected type).
- **Location (from)** — source.
- **Location (to)** — destination.
- **Note** — free text comment.

### Lines

Each line is a transferred **item** and its **quantity**.

Columns and fields depend on configuration, but the basic set is:

- **Item**
- **UoM**
- **Barcode** (to simplify selection)
- **Planned quantity** (quantity to transfer)

## Statuses and completion

Transfers use the same statuses and completion logic as the [Shipment](shipments.md) document.

Practical rule:

- while the document is in **Draft**, you can freely edit it (header and lines);
- after completion (the document becomes closed/read-only), editing is restricted.

For a detailed status description, see [Shipments and transfers](shipments.md).

## Checks and restrictions

To create a correct transfer, the system checks:

- **Location (to)** is required for the `Transfer` document type;
- **Location (from)** and **Location (to)** cannot be the same.

If any condition is not met, the system shows a message and does not allow saving/completing the document.

## Typical scenario

1. Open the **Shipments** list and create a new document.
2. In the **Type** field select `Transfer`.
3. Specify **Location (from)** and **Location (to)**.
4. On the **Lines** tab add items and specify quantity in each line.
5. Complete the document (using the status change command available in your UI) — after that the transfer is considered executed.

## Bulk creation

A detailed instruction for the **“Create transfers”** action is available on a separate page: [Bulk transfer creation](transfer-bulk-create.md).

## Mobile transfer

The **Mobile transfer** form is designed for quickly creating a transfer based on actual stock.

Typical flow:

1. Open **Mobile transfer**.
2. Select **Type** (if the system has more than one transfer type).
3. Select **Location (from)**.
4. Select **Location (to)**.
5. In the item list, specify the quantity to transfer:
   - you can filter items by name/barcode/category (if such filters are available);
   - the list usually shows **Stock** and allows entering **Quantity**;
   - a command may be available to set quantity equal to stock.
6. Click the transfer action and confirm the operation.

After confirmation, the system creates a transfer document and immediately marks it as done (in the “immediate document” mode).