---
title: Scrap
---

Within a [manufacturing order](orders.md), you can create a **Scrap** document linked to the order.

## When to use

Use **Scrap** if you need to record scrap of materials or products due to defects and it is important to keep the link to the [manufacturing order](orders.md).

## How to create a Scrap from a manufacturing order

In the [manufacturing order](orders.md) card there may be an action **Scrap**.

Specifics:

- the action is available if a **Scrap type** is specified for the manufacturing order type;
- the created document automatically contains the [manufacturing order](orders.md);
- the storage location is taken from the order’s material location.

## Effect on inventory and cost

A **Scrap** is a full [Inventory scrap](../inventory/scrap.md) document: when it is completed, it writes the scrapped items off the storage location through the inventory ledger. When the scrap is linked to a manufacturing order, its cost is also added to that order's cost, so the scrapped value is reflected in the cost of the produced goods.

## Where to see linked Scraps

The [manufacturing order](orders.md) card shows a block of linked **Scraps**. From it you can open the document for viewing and editing.

## Recommendations

- create the **Scrap** before marking the order as **Done** so actual data is consistent;
- make sure the correct material location is selected.