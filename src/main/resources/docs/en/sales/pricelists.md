---
title: Pricelists and price types
---

Pricelists are used to store and apply prices in sales orders.

## Price types

A price type defines how the price is calculated:

- fixed price;
- price with markup;
- other rules (depending on configuration).

## Pricelist

A pricelist typically includes:

- price type;
- validity period;
- list of items and prices.

## Pricelist statuses

A pricelist usually goes through two statuses:

1. **Draft** — price values can be edited; the pricelist is not yet used as a price source.
2. **Done** — the pricelist is in effect; its values become a price source for its validity period.

The transition to “Done” is performed via the **“Mark as done”** action on the pricelist card. A way back to “Draft” from “Done” can be set up separately (depends on configuration).

## Using in an order

When you add an order line, the system may fill in the price from the pricelist based on:

- price type;
- customer/terms;
- order date.

The price is taken from the most recent pricelist in the **“Done”** status that is valid on the document date.