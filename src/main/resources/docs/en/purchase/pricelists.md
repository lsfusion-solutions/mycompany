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

## Importing a pricelist

You can import pricelist lines from an external file using configurable **import types**.

### Import types

Open **"Administration" → "Application" → "Options"** and use the **Pricelist import types** block to manage import types. For each type you can specify:

- **Name** — what users see when selecting the type;
- **Script** — optional script executed by the generic import action;
- **Prompt** — instructions sent to GPT on the "Import (GPT)" tab (filled with a sensible default via the **Default** action).

On the import type edit form you can also:

- mark vendors for which this type should be used (the **Vendors** tab) — each vendor can have only one import type at a time;
- mark the type as **Default** (switch) — this is the fallback used for vendors that do not have their own import type assigned.

### Default import type

If a pricelist's vendor has no import type assigned, the system uses the import type marked as **Default** on the import type edit form. The **Import** button on the pricelist card appears whenever an import type (vendor-specific or default) is available.

### GPT-based import

When the import type has a GPT **Prompt** defined, the **Import (GPT)** action is available on the pricelist. It:

- sends the attached source file together with reference data (current vendor, other vendors, items, and previously used vendor names/SKUs) to [OpenAI](../administration/openai.md);
- reads the returned JSON and creates pricelist lines;
- stores the source file on the pricelist.

The default prompt instructs the model to include **every** line from the source file in the output, even when an item cannot be matched — in that case the `item` field is left empty while `vendorReference`, `vendorName`, and `price` are still filled. This way you do not lose lines that need manual item mapping after import.

## Copying a pricelist

If you need to quickly create a new pricelist based on a previous one (for example, for a new period), use copying:

- a new pricelist is created;
- header fields and lines are copied;
- then you can update the validity period and adjust prices.