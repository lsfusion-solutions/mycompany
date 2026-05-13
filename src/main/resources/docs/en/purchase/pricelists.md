---
title: Vendor pricelists
---

## Where to find

Forms for working with pricelists are usually located at **“Purchase” → “Operations” → “Pricelists”**.

## Purpose

A **pricelist** stores [vendor](../masterdata/partners.md) prices and is used for:

- preparing purchase prices;
- filling in prices when creating [purchase orders](orders.md);
- recording price changes by periods.

## Pricelist structure

In a pricelist, you typically specify:

- [vendor](../masterdata/partners.md);
- validity period (start/end date);
- note.

### Pricelist lines

In lines, you specify:

- [item](../masterdata/items.md);
- price;
- if needed — vendor name/SKU (if you maintain mapping).

## Comments and history

The pricelist card may contain a comment feed:

- add comments to record agreements and the source of prices;
- view the date/time and author of comments.

## Pricelist statuses

A pricelist usually goes through two statuses:

1. **Draft** — price values can be edited; the list of new pricelists is filtered to this status by default.
2. **Done** — the pricelist is in effect; prices become a source for substitutions into purchase orders.

The transition to “Done” is performed via the **“Mark as done”** action on the pricelist card.

## Importing prices from an external source

If the [vendor](../masterdata/partners.md) is configured with a **pricelist import type** (`Pricelist import type`), the pricelist card for this vendor shows an **“Import”** action:

1. In settings, create/select a pricelist import type and define its script (for example, an XLSX/CSV parser or an external-API call).
2. In the [vendor](../masterdata/partners.md) card, set this import type.
3. Create a pricelist for this vendor and click **“Import”** — the script populates the lines automatically.

The action appears only when an import script exists for the vendor’s import type; for a pricelist moved to “Done” (read-only) the action is disabled.

## Copying a pricelist

If you need to quickly create a new pricelist based on a previous one (for example, for a new period), use copying:

- a new pricelist is created;
- header fields and lines are copied;
- then you can update the validity period and adjust prices.