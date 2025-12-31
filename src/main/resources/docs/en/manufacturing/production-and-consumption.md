---
title: Production and consumption
---

In a [manufacturing order](orders.md) there are two groups of lines:

- **output** lines (what and how much is produced);
- **material** lines (what and how much is consumed).

## Plan and actual

The order usually contains planned quantities:

- **To produce** (overall planned quantity for the order);
- **To produce** on output lines;
- **To consume** on material lines.

During execution, actual quantities are recorded:

- **Produced** on output lines;
- **Consumed** on material lines.

## Entering actual production

In the “In progress” status you can enter the produced quantity. The system can distribute production and consumption proportionally to the plan.

## Availability check and reservation

Before starting production, run **Check availability** for materials.

Material lines typically show:

- on hand;
- expected;
- available;
- reserved.

If the required quantities can be reserved, the order moves to the ready state.

## Unreserve

If the start is postponed or the order is **Canceled**, you can run **Unreserve**.

## Recommendations

- Always check that the material location/storage location is selected.
- On order completion, specify the finished goods location/storage location.
- If actual consumption differs from the plan, adjust material lines before completing the order.