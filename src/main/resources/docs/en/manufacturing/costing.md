---
title: "Costing: how it is calculated"
---

This section describes how the system calculates the cost of an item when a [manufacturing order](orders.md) is executed.

The description is based on the logic implemented in the [manufacturing order](orders.md) costing module.

## General idea

Cost is calculated **based on actuals**:

1. First, **actual material consumption** is recorded in the [manufacturing order](orders.md).
2. Based on actual consumption, the **material write-off cost** is calculated.
3. The sum of write-offs (plus additional cost components, if any) forms the **manufacturing order cost**.
4. The order cost is **distributed across output** (output lines) using cost ratios.

## What is included in the calculation

### 1) Actual material consumption

The [manufacturing order](orders.md) has material lines. For each line, the actual **“Consumed”** quantity is recorded.

Only lines where:

- actual consumption is filled in;
- the item is a stock/material item (participates in inventory accounting)

are included in costing. The material write-off amount of a line is shown in its **Cost** column.

### 2) Materials location and Execution date

Consumption cost is determined taking into account:

- the **Materials location** (location used for write-off);
- the **Execution date** of the [manufacturing order](orders.md).

Practical meaning:

- if different locations have different costs, write-off is valued by the materials location;
- the **Execution date** fixes the “valuation moment”, i.e. which date is used to take the cost.

### 3) Additional cost components (cost types)

Beyond the material write-off, the manufacturing order cost may include additional components. Internally they are unified as **cost types**: each type is a separate source that accumulates its amount on the order, and configurations can add their own types. They are **computed totals** shown read-only on the order — not fields you type into directly. The standard types are:

- **Extra cost** — accumulates the cost of [scrap](scrap.md) documents linked to the order;
- **Labor cost** — accumulates labor amounts from [project](../projectManagement/projectManagement.md) time entries linked to the order (when the Project Management contour is used);
- **Service cost** — accumulates costs from supplier [bills](../invoicing/bills.md): a service line of a bill, distributed onto the order, contributes its share.

Each component appears only if the corresponding source data exists in your setup.

> Service costs from bills use the standard cost-allocation mechanism (see [Cost distribution](../invoicing/bill-cost.md) in Invoicing): in the bill's cost distribution block there is a **Manufacturing orders** tab, where a service line of a bill can be marked **Distribute** onto open manufacturing orders; the allocation base can be the amount, cost, sales price, weight, volume or quantity of the order, and the **Distributed** share that lands on a given order becomes its service cost.

## Formulas

### Material cost

Material cost for the order (the **Cost** column) is the sum of write-off costs for all material lines.

In other words:

- for each material line, the write-off amount is calculated;
- then these amounts are summed into the order cost.

### Total manufacturing order cost

**Total cost** of the order consists of:

1. material cost (**Cost**);
2. plus all cost-type components: **Extra cost**, **Labor cost**, **Service cost** (and any types added in your configuration).

The **material cost** and the per-output-line costs are formed **when the order is moved to Done** — the cost ledger entries that value the material write-off are created only for completed (Done, non-Canceled) orders, so the material cost stays empty while the order is in Draft / Waiting / Ready / In progress. The additional components behave differently: they are accumulated from their linked records (scrap documents, time entries, bill allocations) regardless of the order status, so they — and therefore the total cost — can already be non-zero before the order is Done. Marking the order Done also fixes the **Execution date**, which determines the valuation moment for the material write-off.

## How cost is distributed across output

The order has output lines (which items/semi-finished goods are produced). The order cost is distributed between output lines.

### Cost ratio

An output line can have the **“Cost ratio”** (distribution coefficient) filled in.

Line share calculation:

- if cost ratios are filled in on at least one line, then line share = line ratio / sum of ratios for the order;
- if cost ratios are not filled in, the whole cost is assigned to the main order item (the output line where the item matches the order item). For [unbuild](unbuild.md) orders there is no such line, so without cost ratios the cost is not distributed to the components at all — fill in the ratios (they are copied from the Bill of Materials components).

### Output line cost

The amount assigned to a specific output line:

**output line cost = total order cost × line share**

### Unit cost

To get unit cost for an output line:

**unit cost = output line cost / actual produced on the line**

If actual produced is zero, unit cost cannot be calculated — record production first.

## Where to see cost

Typically, cost is visible:

- in the [manufacturing orders](orders.md) list — the read-only columns **Cost**, **Extra cost**, **Total cost**, plus **Labor cost** and **Service cost** when the corresponding contours are used;
- in the **Total** tab of the list (for selected orders) — the aggregated material **Cost** per item;
- in [manufacturing reports](reports.md) — the same cost measures in the pivot report.

## Typical situations and checks

#### Total cost is zero

Check:

- whether “Consumed” is filled in on material lines;
- whether the materials location is selected;
- whether the order is **Done** (the **Execution date** is set) — the material cost is valued only on completion.

#### All cost was assigned to a single output line

This is normal if cost ratios are not filled in. Then the system assigns the whole amount to the main item.

#### Cost distribution is “not as expected”

Check:

- cost ratios on output lines;
- actual produced quantities;
- whether extra/labor/service costs were added.
