---
title: Scrap
---

Scrap is used to record stock decreases for reasons not related to sales:

- damage;
- losses;
- defects;
- expiry;
- internal consumption.

The reason for the write-off is represented by the **type** of the document (a directory of scrap types — for example, "Damage", "Loss", "Expiry") rather than by a per-line field.

The scrap document moves through the statuses **Draft → Done**, with **Canceled** as an alternative terminal state.

## Typical scenario

1. Create a scrap document.
2. Select the **Type** (this is what classifies the write-off reason).
3. Specify the [location](locations.md).
4. Fill lines: item and quantity. If [lots](lots-and-packages.md) are enabled for a product, also specify the lot per line.
5. Move the document to **Done**.

## Relationship with other modules

Scrap can be created based on other documents (for example, a production order, if the corresponding scenario is enabled).