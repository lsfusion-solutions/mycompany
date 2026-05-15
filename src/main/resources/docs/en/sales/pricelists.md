---
title: Pricelists and price types
---

Pricelists are used to store and apply prices in sales orders.

## Where to find

- **Pricelists** — **“Sales” → “Operations” → “Pricelists”**;
- **Price types** — **“Sales” → “Configuration” → “Price types”**;
- **Pricelist types** — in the **“Sales” → “Configuration” → “Settings”** form.

## Price types

A **price type** is a named price scale. Each price type has a currency and a “price includes taxes” flag, and can carry default markups per item category. Price types are used as the price columns of a pricelist and to choose which price fills in an order line.

## Pricelist

A pricelist card includes:

- **number** and an optional **note**;
- **pricelist type** — a category that organizes pricelists (for example, “Wholesale”, “Retail”, “Promotional”);
- **validity period** — start and end;
- the **price types** whose columns are editable in this pricelist;
- the list of **items and prices** — one price column per selected price type.

## Pricelist statuses

A pricelist usually goes through two statuses:

1. **Draft** — price values can be edited; the pricelist is not yet used as a price source.
2. **Done** — the pricelist is in effect; its values become a price source for its validity period.

The transition to “Done” is performed via the **“Mark as Done”** action on the pricelist card.

## Editing a pricelist

The pricelist card provides tools for filling in many prices at once:

- a **category tree and item search** to add the needed items as lines;
- a **Change prices** action that recalculates all editable prices in the pricelist using one of three modes — set markups from the previous prices, set markups from the price types, or take prices from the previous pricelist (optionally adjusted by a percentage);
- a **Copy** action that creates a new pricelist from the current one.

Each price column can also be compared with the item’s currently effective price.

## Using in an order

When you add an order line, the system fills in the price by **item**, **price type**, and the **order date/time**. The price type itself is derived from the customer or from the order type.

The price is taken from the most recent pricelist in the **“Done”** status whose validity period covers the document date. If no pricelist value is found, the system falls back to the item’s own sales price.