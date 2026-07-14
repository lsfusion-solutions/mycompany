---
title: Production and consumption
---

In a [manufacturing order](orders.md) there are two groups of lines:

- **output** lines, on the **Finished products** tab (what and how much is produced);
- **material** lines, on the **Materials** tab (what and how much is consumed).

## Plan and actual

The order contains planned quantities:

- **Manufacture** — the overall planned quantity in the order header;
- **Manufacture** on output lines;
- **To consume** on material lines.

During execution, actual quantities are recorded:

- **Produced** on output lines;
- **Consumed** on material lines.

The actual columns appear when the order is **In progress**.

## Entering actual production

The **Manufacture** action (and the **Produced** field in the header or in the list) asks for one total produced quantity. The system distributes it across the lines **proportionally to the plan**:

- Produced on each output line = planned line quantity × entered quantity / planned order quantity;
- Consumed on each material line = planned line quantity × entered quantity / planned order quantity.

After that you can adjust the actual quantities line by line.

For [unbuild](unbuild.md) orders, the header **Produced** quantity is the actually consumed quantity of the source item.

## Availability check and reservation

Before starting production, run **Check availability** for materials.

Material lines show the calculated stock columns for the **Materials location**:

- **On hand** — current stock;
- **Expected** — incoming stock expected;
- **Available** — stock available for reservation (including what is already reserved for this line);
- **Reserved** — quantity reserved for this line.

**Check availability** reserves, for every line, the available quantity up to the plan. If all lines are fully reserved, the order moves to **Ready**; otherwise the partial reservations are kept and the order stays in **Waiting**.

Reserved materials are excluded from the available stock of the location for other documents. The planned output is registered as expected incoming stock at the **Products location**.

## Unreserve

If the start is postponed or the order is going to be canceled, run **Unreserve** — it clears the reservations of all lines and, if the order was **Ready**, returns it to **Waiting**.

## What happens on completion

When the order becomes **Done** (and is not canceled):

- the actual **Consumed** quantities are written off the **Materials location**;
- the actual **Produced** quantities are received at the **Products location**;
- cost ledger records are created (see [Costing](costing.md)).

## Recommendations

- Always check that the **Materials location** is selected.
- On order completion, specify the **Products location**.
- If actual consumption differs from the plan, adjust material lines before completing the order.
