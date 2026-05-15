---
title: "Costing: how it is calculated"
---

This section describes how the system calculates the cost of an item when a [manufacturing order](orders.md) is executed.

The description is based on the logic implemented in the [manufacturing order](orders.md) costing module.

## General idea

Cost is calculated **based on actuals**:

1. First, **actual material consumption** is recorded in the [manufacturing order](orders.md).
2. Based on actual consumption, the **material write-off cost** is calculated.
3. The sum of write-offs (plus additional and labor costs, if they are specified) forms the **manufacturing order cost**.
4. The order cost is **distributed across output** (output lines) using distribution coefficients.

## What is included in the calculation

### 1) Actual material consumption

The [manufacturing order](orders.md) has material lines. For each line, the actual **“Consumed”** quantity is recorded.

Only lines where:

- actual consumption is filled in;
- the item is a stock/material item (participates in inventory accounting)

are included in costing.

### 2) Material location and Execution date

Consumption cost is determined taking into account:

- the **Material location** (location used for write-off);
- the **Execution date** of the [manufacturing order](orders.md).

Practical meaning:

- if different locations have different costs, write-off is valued by the material location;
- the **Execution** date fixes the “valuation moment”, i.e. which date is used to take the cost.

### 3) Additional, labor and service costs

Beyond the material write-off, the manufacturing order cost may include three more components. They are **computed totals** shown read-only on the order — not fields you type into directly. Each is fed by a separate source:

- **Additional cost** — accumulates the cost of [scrap](scrap.md) documents linked to the order;
- **Labor cost** — accumulates labor amounts from [project](../projectManagement/projectManagement.md) time entries linked to the order (when the Project Management contour is used);
- **Service cost** — accumulates costs from supplier [bills](../invoicing/bills.md): a service line of a bill, distributed onto the order, contributes its share.

Each component appears only if the corresponding source data exists in your setup.

> Service costs from bills use the standard cost-allocation mechanism (see [Cost distribution](../invoicing/bill-cost.md) in Invoicing): a service line of a bill can be distributed onto manufacturing orders, and the share that lands on a given order becomes its service cost.

## Formulas

### Material cost

Material cost for the order is the sum of write-off costs for all material lines.

In other words:

- for each material line, the write-off amount is calculated;
- then these amounts are summed into the order cost.

### Total manufacturing order cost

**Total order cost** consists of:

1. material cost;
2. additional costs;
3. labor costs;
4. service costs (from attached [bills](../invoicing/bills.md)).

The **material cost** and the per-output-line costs are formed **when the order is moved to Done** — the cost ledger entries that value the material write-off are created only for completed (Done, non-Canceled) orders, so the material cost stays empty while the order is in Draft / Waiting / Ready / In progress. The additional, labor and service costs behave differently: they are accumulated from their linked records (scrap documents, time entries, bill allocations) regardless of the order status, so they — and therefore the total cost — can already be non-zero before the order is Done. Marking the order Done also fixes the **Execution date**, which determines the valuation moment for the material write-off.

## How cost is distributed across output

The order has output lines (which items/semi-finished goods are produced). The order cost is distributed between output lines.

### Distribution coefficient

An output line can have the **“Cost distribution coefficient”** filled in.

Line share calculation:

- if coefficients are filled in on at least one line, then line share = line coefficient / sum of coefficients for the order;
- if coefficients are not filled in, the whole cost is assigned to the main order item (the output line where the item matches the order item).

### Output line cost

The amount assigned to a specific output line:

**output line cost = total order cost × line share**

### Unit cost

To get unit cost for an output line:

**unit cost = output line cost / actual produced on the line**

If actual produced is zero, unit cost cannot be calculated — record production first.

## Where to see cost

Typically, cost is visible:

- in the [manufacturing orders](orders.md) list — fields like “Cost”, “Additional costs”, “Labor costs”, “Total cost”;
- in [manufacturing reports](reports.md) (for example, in an orders report if it is enabled in reporting).

## Typical situations and checks

#### Total cost is zero

Check:

- whether “Consumed” is filled in on material lines;
- whether the material storage location is selected;
- whether the **Execution date** is set (usually appears when the order is **Done**).

#### All cost was assigned to a single output line

This is normal if distribution coefficients are not filled in. Then the system assigns the whole amount to the main item.

#### Cost distribution is “not as expected”

Check:

- distribution coefficients on output lines;
- actual produced quantities;
- whether additional/labor costs were added.