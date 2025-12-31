---
title: Creating manufacturing orders from sales orders
---

The system supports a scenario where **[manufacturing orders](orders.md) are created based on sales order lines**.

This is useful when you sell items that must be produced for a specific order.

## Conditions for creation

[Manufacturing orders](orders.md) are created from a sales order when all conditions are met:

1. The **sales order type** has a **[manufacturing order type](settings.md)** specified.
2. The sales order has the **confirmed** status.
3. The sales order contains lines where:
   - a **[Bill of Materials](bom.md)** is specified;
   - a [manufacturing order](orders.md) has not been created yet.

If any condition is not met, the creation button may not be shown, or the action will create nothing.

## How to select a [Bill of Materials](bom.md) in a sales order line

A sales order line has a [Bill of Materials](bom.md) field.

Rules:

- the Bill of Materials must match the line item (otherwise the system will not allow saving the line);
- if the item has a default [Bill of Materials](bom.md), it may be selected automatically.

## Manual creation

In the sales order card there is an action **“Manufacturing orders”**.

How it works:

1. The user runs the creation action.
2. The system iterates over order lines.
3. For each line where a [Bill of Materials](bom.md) is specified and no [manufacturing order](orders.md) exists yet, a new manufacturing order is created.

## What is filled in the created manufacturing order

A [manufacturing order](orders.md) is created **per sales order line**.

The following fields are filled automatically:

- link to the source sales order line;
- waiting status (the order is created as waiting);
- **[manufacturing order type](settings.md)** — taken from the sales order type;
- **start date** — taken from the sales order;
- **finished goods storage location** — taken from the sales order location/storage location;
- **item** — taken from the sales order line;
- **[Bill of Materials](bom.md)** — taken from the sales order line;
- material and output lines are generated based on the sales order line quantity.

Additionally, extra configurable filling may be performed (depending on your setup).

## Automatic creation on confirmation

The sales order type may have a setting for **automatic manufacturing order creation**.

If it is enabled, on sales order confirmation:

- the system automatically creates [manufacturing orders](orders.md) for order lines.

## Change synchronization

If automatic creation is enabled, changes in sales order lines are synchronized with the [manufacturing order](orders.md) until it is started:

- when line quantity changes — manufacturing order material and output lines are recalculated;
- when line item changes — the manufacturing order item is updated and lines are recalculated;
- when the Bill of Materials changes — the manufacturing order Bill of Materials is updated and lines are recalculated.

Restrictions:

- if the manufacturing order is already started, changing quantity/item/Bill of Materials in the source line is prohibited.

## Sales order cancellation

If the sales order is canceled and automatic creation is enabled:

- linked manufacturing orders are automatically moved to **Canceled**.

There is also a restriction:

- you cannot cancel a sales order if it has started manufacturing orders.

## Where to see linked manufacturing orders

The sales order card shows a block of linked manufacturing orders:

- number, start date, status, type;
- you can open the manufacturing order.

The manufacturing order itself contains a link to the source sales order.

## Typical mistakes

- **The creation button is not shown** — the sales order is not confirmed or the sales order type has no manufacturing order type specified.
- **Nothing is created** — no Bills of Materials are specified on lines or manufacturing orders already exist for the lines.
- **Cannot delete a line** — a manufacturing order has already been created from this line.
- **Cannot change quantity/item/Bill of Materials** — a manufacturing order has already been started for this line.