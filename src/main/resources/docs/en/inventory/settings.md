---
title: Inventory settings
---

## Where to find it

Open **“Inventory” → “Configuration” → “Settings”**.

## What is typically configured

- [receipt](receipts.md) and [shipment](shipments.md) types (their numbering, default locations, maximum quantity);
- [transfer](transfers.md) usage (a [shipment](shipments.md) type with the **"Transfer"** flag);
- [adjustment](adjustments.md) and [scrap](scrap.md) types;
- whether **[lots](lots-and-packages.md)** are enabled (global toggle), and per-product lot/serial-number options;
- cross-cutting flags such as **Prohibit multiple root locations**, and the per-location toggles **Positive on hand only** and **Positive available only** (see ledgers below).

## Receipt types

Settings include a directory of **receipt types**. A receipt type defines how users work with the document.

Typically, a receipt type defines:

- **Numbering** — how the number is generated;
- **Default location** — which [location](locations.md) is set in new documents;
- **Maximum quantity** — the upper limit for the “Planned quantity” field in lines.

If the system has exactly one receipt type, it may be substituted automatically.

## Shipment types

Settings include a directory of **shipment types**.

Typically, a shipment type defines:

- **Numbering**;
- **Default source location**;
- **Default destination location** (relevant for transfers);
- **“Transfer” flag** — enables the “source location → destination location” mode;
- **Maximum quantity** — the upper limit for the “Planned quantity” field in lines.

Validation:

- for transfers, the source and destination locations cannot be the same.

## Ledger constraints (per location)

On each [location](locations.md) two optional constraints can be turned on:

- **Positive on hand only** — the system will not allow operations that drive the physical balance of an item at that location below zero.
- **Positive available only** — the system will not allow the available (on hand minus reserved) balance of an item at that location to go below zero.

When enabled, the corresponding postings to the inventory or reservation ledger are blocked with an explanatory message.

## Recommended setup order

1. Configure [locations](locations.md).
2. Configure document types ([receipts](receipts.md)/[shipments](shipments.md)/[transfers](transfers.md)/[scraps](scrap.md)/[adjustments](adjustments.md)).
3. If needed, enable [lots](lots-and-packages.md) globally and configure per-product lot/serial-number options.
4. Decide on the per-location ledger constraints (see above).
5. Review [reports and ledgers](reports-and-ledgers.md) and access rights.