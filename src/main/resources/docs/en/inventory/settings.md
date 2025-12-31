---
title: Inventory settings
---

## Where to find it

Open **“Inventory” → “Configuration” → “Settings”**.

## What is typically configured

- [receipt](receipts.md) and [shipment](shipments.md) types;
- [transfer](transfers.md) usage (a [shipment](shipments.md) type with the “Transfer” flag);
- document statuses and action availability;
- reservation rules;
- [lot and package](lots-and-packages.md) usage;
- print forms.

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

## Recommended setup order

1. Configure [locations](locations.md).
2. Configure document types ([receipts](receipts.md)/[shipments](shipments.md)/[transfers](transfers.md)).
3. Configure statuses and transition rules.
4. Enable/configure [lots and packages](lots-and-packages.md) (if needed).
5. Configure [reports](reports-and-ledgers.md) and access rights.