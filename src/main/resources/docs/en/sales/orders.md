---
title: Sales orders
---

## Where to find

Open **“Sales” → “Operations” → “Sales orders”**.

## Purpose

A sales order records:

- the [customer](../masterdata/partners.md) and sales terms;
- the order contents (lines);
- prices, discounts, and taxes;
- the planned shipping date;
- links to shipments, invoices, manufacturing orders, and purchase orders (if such scenarios are enabled).

## Sales order list

In the list, you typically see:

- number and date;
- [customer](../masterdata/partners.md);
- status;
- amount;
- planned shipping date;
- [location](../inventory/locations.md).

Filters and the set of columns depend on your configuration.

## Sales order card

### Main fields

Typically, the card includes:

- **[Customer](../masterdata/partners.md)**;
- **Date** and **planned shipping date**;
- **[Location](../inventory/locations.md)**;
- **Delivery address** (if used);
- **Order type** (if multiple types are used);
- **Responsible person**.

### Order lines

In lines, you specify:

- [item](../masterdata/items.md);
- quantity;
- price;
- discount (if used);
- line amount.

Recommendation: fill in the customer and location first, then add lines — this helps the system select prices and availability more accurately.

## Confirmation and cancellation

An order usually goes through this lifecycle:

1. Draft.
2. Confirmed.
3. Canceled (if the order will not be fulfilled).

For details on statuses and restrictions, see: [Sales order workflow and statuses](workflow-and-statuses.md).

## Related documents

The order card may show blocks with related documents:

- [shipments](shipments.md);
- [invoices](invoices.md);
- manufacturing orders;
- purchase orders.

The available blocks depend on enabled modules.