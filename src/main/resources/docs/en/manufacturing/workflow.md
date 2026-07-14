---
title: Manufacturing order process and statuses
---

A [manufacturing order](orders.md) goes through a set of statuses. The status affects which actions are available and which fields are required.

## Statuses

1. **Draft** — the order is created but not yet prepared to start.
2. **Waiting** — the order is confirmed for work, but materials are not reserved yet (or replenishment is expected).
3. **Ready** — materials are reserved and the order is ready to start.
4. **In progress** — production has started; production and consumption are recorded.
5. **Done** — production is finished.
6. **Canceled** — the order is canceled (a branch, not a sequential step: it can be applied from any status except Draft).

Statuses are implemented as cumulative stage flags: as the order advances, the flags of the passed stages are set, and the displayed status is the highest stage reached. Some actions can also take a stage back (for example, **Unreserve** clears the Ready stage, and **Cancel** clears In progress). The order card shows the stages as a chain of arrows.

In the orders list, rows are highlighted by status color: **Waiting** — pink, **Ready** and **In progress** — yellow, **Canceled** — bluish.

## What each status means

### Draft

Used to enter initial data:

- type, item, start date;
- [Bill of Materials](bom.md) selection;
- planned quantities — the **Create Lines** action (available only in Draft) generates material and output lines from the Bill of Materials.

To move the order to **Waiting**, run **Mark as Todo**.

### Waiting

Means the order is confirmed and is being prepared to be supplied with materials.

Actions:

- **Check availability** — reserves materials (per line, up to the available quantity). If **every** material line is fully reserved, the order moves to **Ready**; otherwise it stays in Waiting with partial reservations.
- **Unreserve** — clears the reservations made so far (shown when at least one line has a reservation).

The order cannot become Ready while the **Materials location** is empty.

### Ready

Means all materials are reserved.

Available actions:

- **Manufacture** — asks for the produced quantity and moves the order to **In progress**;
- **Unreserve** — clears reservations and returns the order to **Waiting**;
- **Check availability** — can be re-run if reservations were changed.

### In progress

Actual quantities are recorded:

- **Produced** on output lines;
- **Consumed** on material lines.

Entering the total **Produced** quantity (in the card header or in the list) distributes production and consumption across the lines proportionally to the plan.

### Done

Means completion. Run **Mark as Done**:

- the **Execution date** is recorded (defaults to the current moment);
- the **Products location** must be specified — otherwise the order cannot be saved as Done;
- actual stock movements and cost entries are created (see [Production and consumption](production-and-consumption.md) and [Costing](costing.md));
- the order usually becomes read-only (see [Settings](settings.md)).

**Shortcut:** **Mark as Done** is also available in the Draft, Waiting and Ready statuses. In that case the system automatically fills the actual **Produced** and **Consumed** quantities from the plan (if they are still empty) and passes the order through all intermediate stages at once.

### Canceled

Used if the order is no longer relevant.

- **Cancel** is available in any status except **Draft** and **Canceled** itself;
- cancelling clears the **In progress** flag, and a canceled order no longer affects stock, and its material consumption is not valued in costing (extra/labor/service components linked to the order still remain — see [Costing](costing.md));
- reservations are **not** cleared automatically — run **Unreserve** before cancelling.

## Read-only statuses

In **“Manufacturing” → “Configuration” → “Settings”** each status has a **Read-only** flag: orders in such a status cannot be edited. Typically **Done** and **Canceled** are locked this way. See [Settings](settings.md).

## Typical issues

- **The order does not move to Ready** — the materials location is not selected, or some material line cannot be fully reserved (not enough available quantity).
- **Cannot mark as Done** — the products location is not selected.
- **Cannot save** — the Bill of Materials does not match the order item.
- **The Cancel button is not shown** — the order is still in Draft (simply delete it) or is already canceled.
