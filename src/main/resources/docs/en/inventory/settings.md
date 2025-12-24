# Inventory settings

## Where to find it

Open **“Inventory” → “Configuration” → “Settings”**.

## What is typically configured

- receipt and shipment types;
- transfer usage (a shipment type with the “Transfer” flag);
- document statuses and action availability;
- reservation rules;
- lot and package usage;
- print forms.

## Receipt types

Settings include a directory of **receipt types**. A receipt type defines how users work with the document.

Typically, a receipt type defines:

- **Numbering** — how the number is generated;
- **Default location** — which location is set in new documents;
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

1. Configure locations.
2. Configure document types (receipts/shipments/transfers).
3. Configure statuses and transition rules.
4. Enable/configure lots and packages (if needed).
5. Configure reports and access rights.
