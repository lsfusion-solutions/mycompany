---
title: Receipts for purchase orders
---

A receipt records the fact of receiving goods into a [location](../inventory/locations.md) and helps to control purchase order fulfillment: how much has already been received and how much remains.

## Where to find

Typically, working with receipts is available:

- from the **[purchase order](orders.md)** card — in the related documents block;
- in the [Inventory](../inventory/inventory.md) section (if it is used) — depends on your configuration.

## Link to a purchase order

A receipt can be created based on a confirmed purchase order. In this case:

- receipt fields ([vendor](../masterdata/partners.md), [location](../inventory/locations.md), Scheduled date) are usually filled in from the purchase order;
- receipt lines are created from purchase order lines;
- based on this link, the system calculates how much has been received and how much remains.

Practical meaning: one purchase order can be received **in multiple receipts** and **in parts**.

## When a receipt becomes available for a purchase order

As a rule, receipts are used when [Inventory](../inventory/inventory.md) is enabled.

Typically, a receipt becomes available after:

1. The purchase order is moved to the **“Confirmed”** status.
2. A **[location](../inventory/locations.md)** is specified in the purchase order.
3. The purchase order type is configured to use receipts (if required in your configuration).

If there is still something “to receive” for the purchase order, the system can create (or pick an already created) receipt that is ready to be processed.

Note: receipts are usually created **for goods [items](../masterdata/items.md)**. If the purchase order contains services, a receipt is usually not required for them.

## How to process a receipt based on a purchase order

1. Open the [purchase order](orders.md).
2. In the related documents block, open the required **receipt** (or create a new one, if supported in your configuration).
3. Check receipt fields:
   - vendor;
   - scheduled date;
   - [location](../inventory/locations.md).
4. Go to receipt lines and enter the actually received quantity.
5. Save/confirm the receipt according to your configuration rules.

Important: a receipt records the **fact of receiving into a [location](../inventory/locations.md)** and is used to control purchase order fulfillment (“how much has already been received”).

## Partial delivery and multiple receipts

If delivery comes in parts, create receipts as goods arrive:

- you can create multiple receipts for the same purchase order;
- in purchase order lines, the system usually shows the remaining quantity to receive (how much is still to be received);
- in the next receipt, enter only what actually arrived.

Usually, the system does not allow receiving more than ordered (taking into account already created receipts). If you need to receive more (over-delivery), this behavior depends on your configuration rules.

If you change the purchase order after confirmation (quantity, location, Scheduled date, etc.), the system may update the “ready-to-work” receipt and its lines. Therefore, before actual receiving, verify that the receipt matches the current purchase order.

## Line-level fulfillment control

In the purchase order card, line-level indicators are usually available:

- **“received”** — how much has already been received for the line;
- visual highlighting if it is not fully received;
- a list of receipts linked to the line (on click/open).

## Restrictions when closing/locking a purchase order

In some configurations, there are receipt-related restrictions, for example:

- a purchase order cannot be closed/locked if it has active receipts;
- a purchase order cannot be closed/locked if it is not fully received.

If you encounter such a restriction, check the receipt list in the purchase order and actual fulfillment for the lines.

See also: [Settings](settings.md).