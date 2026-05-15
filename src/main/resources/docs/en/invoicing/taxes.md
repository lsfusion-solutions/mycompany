---
title: Taxes
---

In "Invoicing", taxes are used to calculate line amounts and document totals.

## Directories

The configuration uses two directories:

- **Taxes** — each tax has a **name** and a **rate** (the **"Value"** field, in percent). For example: "VAT 20%" with value 20.
- **Tax groups** — taxes are grouped so that only **one tax per group** can be applied to a given document line at the same time. This is the standard way of expressing mutually-exclusive tax variants (e.g., a "VAT" group containing rates 0%, 5%, 10%, 20% — only one can be selected per line).

Taxes can also be linked to [items](../masterdata/items.md)/services and to document types, so they are picked up automatically when those items appear in a [bill](bills.md) or [invoice](invoices.md).

## Computation

Tax amounts are computed automatically per line by the system; the user does not type them in directly. The mode is determined by the document type's **"Tax included"** flag:

- **Tax included = off** (default for B2B): the line **price** is the net (tax-exclusive) price, and the tax amount is added on top: `taxAmount = price × quantity × rate / 100`.
- **Tax included = on** (typical for retail / cash sales): the line **price** is the gross (tax-inclusive) price, and the tax amount is extracted from it: `taxAmount = price × quantity × rate / (100 + rate)`.

For each line the system also exposes the **net amount** (amount minus tax). Document totals roll up these values.

## Usage in documents

A tax can be set:

- automatically — based on the [item](../masterdata/items.md) settings or on the document type settings (see [Settings and directories](settings.md));
- manually in a line — by ticking the appropriate tax of the right group.

Because of the per-group rule, picking a different tax of the same group automatically unticks the previous one for that line.

## Restrictions

- a tax that has been used in line calculations is protected from deletion;
- taxes from the same group cannot coexist on one line.

## What is **not** modeled out of the box

The base configuration uses a single tax dimension (rate × base). It does **not** model input/output VAT separately, and does not ship dedicated VAT reports — VAT totals are visible inside [bill](bills.md) and [invoice](invoices.md) reports as line columns rather than as a standalone form.
