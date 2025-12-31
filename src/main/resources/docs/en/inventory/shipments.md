---
title: Shipments and transfers
---

## Where to find it

Open **“Inventory” → “Operations” → “Shipments”**.

## Purpose

The **Shipment** document is used for:

- shipping goods from a [location](locations.md) (regular shipment);
- creating a [transfer](transfers.md) between [locations](locations.md) (if a type with the “Transfer” flag is selected).

The same form is used for both shipments and transfers — the behavior depends on the selected **type**.

## Shipment list

The list typically shows:

- number;
- planned date and time;
- type;
- partner (for a regular shipment);
- source [location](locations.md) and (for transfers) destination location;
- note;
- number of lines.

### “Totals” tab in the list

If you **select** one or more shipments in the list, the **“Totals”** tab appears.

Purpose of the tab:

- show the list of items present in the selected shipments;
- show the total **planned quantity** per item across the selected documents;
- allow quickly adjusting the planned quantity for several shipments at once.

How editing works:

- the tab displays a table where **rows** are items, and **columns** are the selected shipments;
- you can **edit planned quantity** in a cell for the corresponding shipment and item;
- editing is available only for shipments in **Draft** or **Waiting**; for other statuses values are read-only.

Additionally, the tab may show hints about stock at the source [location](locations.md) and highlight if the total planned quantity exceeds available stock.

## Shipment card

### Document header

In the shipment header you typically specify:

- **Type** — affects numbering, default [locations](locations.md) and restrictions;
- **Planned date**;
- **Number**;
- **Partner** (for a regular shipment);
- **Source location** — required;
- **Destination location** — required for transfer;
- **Delivery address** (if used);
- **Customer reference** (if used);
- **Note**.

#### Shipment vs transfer

A shipment type can be marked as **Transfer** (i.e., the type has the “Transfer” flag enabled). In this case:

- the partner may be optional;
- destination location becomes required;
- the system does not allow selecting the same source and destination location.

### Shipment lines

Lines contain:

- **Item**;
- **Unit of measure**;
- **Barcode**, **internal code**, **reference/SKU** (if used);
- **Planned quantity** (see below).

#### “Planned quantity” field

For shipments that are not executed immediately, the line uses **“Planned quantity”**:

- this is the planned quantity to ship for the line;
- the field may be highlighted in Draft.

Restriction:

- the value must be within `0` and the **maximum quantity** specified in the shipment type;
- if exceeded, the document cannot be saved.

#### “One line per item” restriction

For some shipment types, a rule can be enabled:

- the same item cannot be added by two lines.

## Statuses (exactly as in the source code)

Below is the exact set of statuses defined in the source code.

1. **Draft** — data entry.
2. **Waiting** — the document is marked for processing (from Draft) and awaits availability.
3. **Ready** — availability/reservation is ensured for lines.
4. **Done** — the shipment fact is confirmed, completion date is recorded.
5. **Accepted** — [receipt](receipts.md) confirmation at the destination [location](locations.md).
   - this status is used when transfer requires destination confirmation;
   - after **Done**, the receipt confirmation action becomes available.
6. **Canceled** — the document is Canceled.

Important: there is no separate “Picking” status in the status list. Picking is implemented as a work mode by locations for shipment types with picking enabled (see below).

## Availability check and reservation

Before executing a shipment, the system typically checks availability by lines.

If reservation is enabled:

- some quantity can be reserved for the shipment;
- if stock is not sufficient, the shipment stays in Waiting/Ready until replenishment.

## Picking

If picking tasks are enabled:

- the shipment moves to a picking stage;
- tasks are created for a warehouse operator;
- based on completed tasks, the fact of picked quantity is recorded.

See details in [Picking tasks](picking.md).

### Picking by locations (shipment type mode)

The source code provides a shipment type flag that enables picking by specific locations.

How it looks to a user:

- the shipment card gets a “Picking” tab;
- for each line you can see availability and reservation by locations (including nested locations);
- you can specify from which locations the quantity is shipped.

At the same time, the document status remains one of the statuses listed above (e.g., Waiting, Ready, Done).

## Typical problems

- **Cannot save a line** — the “Planned quantity” value is out of range defined in the shipment type.
- **Cannot add the same item as a second line** — the “one line per item” rule is enabled for the shipment type.
- **Cannot move to execution** — not enough available stock or picking is not completed.
- **Cannot create a transfer** — the same source and destination location is selected.