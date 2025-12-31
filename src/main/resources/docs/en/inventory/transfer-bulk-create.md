---
title: Bulk transfer creation
---

The **“Create transfers”** tool is designed to quickly create several [transfer](transfers.md) documents from one source.

## Where to find it

Open the list **“Inventory” → “Operations” → “Shipments”** (see [Shipments](shipments.md)).

The **“Create transfers”** action is located in the list actions.

## When to use it

Use bulk creation when you need to prepare several [transfers](transfers.md) **from one [location](locations.md) (from)** to multiple destination locations, and you plan to fill item lines later manually.

## Preconditions

Before running the action, make sure that:

1. In the [shipments](shipments.md) list, you selected a **type** that is a transfer type.
2. **[Location](locations.md) (from)** is specified.

## How it works

1. In the **[Shipments](shipments.md)** list select a document type — it must be a **Transfer** type.
2. Specify **[Location](locations.md) (from)** (source) for which transfers will be created.
3. Run the **“Create transfers”** action.
4. In the dialog, select several destination locations.

## Result

The system creates **a separate transfer document for each** selected destination location and fills in each document:

- **Type** — the selected Transfer type;
- **[Location](locations.md) (from)** — the selected source;
- **[Location](locations.md) (to)** — the corresponding selected destination.

Lines in the created documents are filled by the user.