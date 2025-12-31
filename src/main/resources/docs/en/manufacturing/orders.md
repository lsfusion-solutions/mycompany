---
title: "Manufacturing orders: list and card"
---

## Location

Open **“Manufacturing”** → **“Operations”** → **“Manufacturing orders”**.

## What a manufacturing order is used for

A manufacturing order is the main manufacturing document. It is used to:

- record **what** has to be produced (or [unbuilt/disassembled](unbuild.md));
- set the **planned quantity**;
- specify the **[Bill of Materials](bom.md)** (item structure) that is used to calculate materials;
- perform an **availability check** and reserve materials;
- record **actual production** and **actual consumption**;
- specify the **Products location** when the order is **Done**.

## Manufacturing orders list

The list is used to control current orders and quickly open the order card.

Typically, the list contains columns such as:

- **Number**
- **Start date**
- **Item** (what is produced)
- **Type**
- **Company** (if used)
- plan: **To produce** and **Unit of measure**
- **Bill of Materials**
- line counters: number of material lines and number of output lines

The list usually also allows:

- creating a new order;
- editing;
- deletion (if not restricted by status and permissions).

## Manufacturing order card

The manufacturing order card is used to run the process step by step.

### Main fields

At the top of the card you typically set:

- **Type** — affects behavior (for example, disassembly and related settings);
- **Start date** — planned start date and time;
- **Item** — the item being produced;
- **Responsible** — may default to the current user;
- **[Bill of Materials](bom.md)** — item structure;
- **Material storage location** — where materials will be consumed from.

### Bill of Materials item consistency check

If a [Bill of Materials](bom.md) is selected, the system checks that the item in the Bill of Materials matches the order item.

If the items do not match, the order cannot be saved.

### Quantity to produce

An order has a planned **To produce** quantity. Based on it, the system can:

- calculate planned material quantities;
- calculate planned output quantities;
- recalculate actual values proportionally if you enter production as a single number.

## Typical scenarios

### Create an order and prepare it to start

1. Create a new manufacturing order.
2. Fill in the type, item, and start date.
3. Select a [Bill of Materials](bom.md).
4. Make sure material and output lines are calculated.
5. Run availability check and reserve materials.

### Manufacture and mark as Done

1. Move the order “in progress”.
2. Enter actual production (adjust actual consumption if needed).
3. Run **Mark as Done** and specify the **Products location**.