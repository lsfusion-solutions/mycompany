---
title: Manufacturing order process and statuses
---

A [manufacturing order](orders.md) goes through a set of statuses. The status affects which actions are available and which fields are required.

## Statuses

The following main statuses are typically used:

1. **Draft** — the order is created but not yet prepared to start.
2. **Waiting** — the order is filled in, but materials are not reserved yet (or replenishment is expected).
3. **Ready** — materials are reserved and the order is ready to start.
4. **In progress** — production has started; production and consumption are recorded.
5. **Done** — production is finished.
6. **Canceled** — the order is Canceled.

The exact set of statuses and rules may differ depending on configuration.

## What each status means

### Draft

Used to enter initial data:

- type, item, start date;
- [Bill of Materials](bom.md) selection;
- planned quantities.

To move the order to **Waiting**, run **Mark as Todo**.

### Waiting

Means the order is being prepared to be supplied with materials.

Actions:

- **Check availability**.

### Ready

Means materials are reserved.

Usually available:

- **Manufacture**;
- **Unreserve**.

### In progress

Actual quantities are recorded:

- produced;
- consumed.

### Done

Means completion.

Important:

- the **Execution date** is recorded;
- the finished goods storage location must be specified;
- the order usually becomes read-only.

### Canceled

Used if the order is no longer relevant.

Recommendation: **Unreserve** before cancelling.

## Typical issues

- **The order does not move to Ready** — material storage location is not selected or there is not enough available quantity.
- **Cannot mark as Done** — finished goods storage location is not selected.
- **Cannot save** — the Bill of Materials does not match the order item.