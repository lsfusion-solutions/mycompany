---
title: Inventory SKUs
---

This section describes the mechanism for aggregate inventory accounting of several items through a single base item. This allows for efficient inventory management when the same physical product is represented in the system by different items (for example, supplied in different packages but stored and accounted for in common units).

## Core Mechanism: Item Substitution

The system distinguishes between the concepts of an **Item** (what we specify in orders, invoices, and delivery notes) and an **Inventory SKU** (what is actually used to track stock balances in the warehouse).

If an "Inventory SKU" is set for an item, the system performs automatic substitution when processing any inventory documents (receipt, shipment, transfer, scrap):
1.  **Item Replacement**: Instead of the original item, the selected base unit is recorded in the inventory ledger.
2.  **Quantity Conversion**: The quantity from the document is multiplied by the set coefficient.

As a result, balances in reports and storage locations are always displayed in terms of the base inventory SKUs, allowing you to see the real volume of product stock regardless of its form of receipt.

## Setup

All settings are configured in the item card on the **Inventory** tab.

*   **Inventory SKU**: The item that will act as the "face" for stock accounting. If this field is left empty, the item will be accounted for as an independent unit (itself).
*   **Coefficient**: A numerical multiplier for conversion into base units. 
    *   If the item is accounted for 1 to 1, specify **1**.
    *   If the item is a package of 10 units of the base item, specify **10**.
    *   By default (if not filled), the coefficient is assumed to be **1**.

## Scenario Examples

### 1. Group Packages (Accounting in Units)
You have items "Water Bottle 0.5L" and "Water Package 0.5L (12 pcs)". To avoid separate accounting for bottles and packages:
*   For the "Package" item, specify the inventory SKU "Water Bottle 0.5L" and a coefficient of **12**.
*   When purchasing 10 packages, **120 bottles** will be received at the warehouse.
*   When selling 1 bottle, **1 bottle** will be deducted from the warehouse.
*   In the stock report, you will always see the total amount in bottles.

### 2. Different Packings of One Product
The item "Sugar" is supplied in 50 kg bags and 1 kg packs.
*   For the "50 kg Bag", specify the inventory SKU "Sugar (kg)" and a coefficient of **50**.
*   This allows you to see the total stock of sugar in kilograms, regardless of the container it arrived in.

### 3. Merging Analogues
If you have temporarily created a new card for an item from another supplier but want it to be accounted for along with the old one:
*   Link the new card to the old one as an inventory SKU with a coefficient of **1**.

## Impact on Reporting and Inventory Operations

*   **Stock Reports**: In reports (e.g., "Current Stock Balances"), you will only see base inventory SKUs. Items that refer to them will not have balances in the list (their balance will always be zero, as all movements "go" to the base).
*   **Movement History**: When viewing the movement history for a base inventory SKU, the system will show all operations, including those originally recorded for linked package items.
*   **Physical Inventory**: When counting an item that has an inventory SKU, the result will be recorded against the base unit taking the coefficient into account.
*   **Cost**: Cost calculation is also performed per base units, which allows for averaging the cost of a product received in different containers.

## Features

*   **Copying**: When using the "Copy" function in the item card, the inventory SKU and coefficient settings are automatically transferred to the new card.
*   **Units of Measure**: It is recommended to choose a base inventory SKU so that its unit of measure (e.g., "kg", "pcs") is convenient for aggregate accounting.
*   **Verification**: Before starting to work with a new link, make sure the coefficient is specified correctly. An error in the coefficient will lead to incorrect reflection of balances at the very first operation.

## Alternative: Accounting in Packages (Units) in Documents

If you simply need to simplify data entry in documents (for example, specify quantity in boxes or pallets) without merging the balances of different items, you can use the packaging accounting mechanism.

Unlike "Inventory SKUs", this mechanism works within a single item card and only affects the convenience of filling out documents.

### Enabling the Mechanism
The functionality is enabled for each document type separately (for example, for a specific type of order or receipt). In the document type settings, you must set the **Show packages** flag.

### Item Setup

To use this mechanism, you must complete two steps in the item card:

1.  **Setting Coefficients (Units of measure tab)**:
    This tab maintains a list of all possible item packages (e.g., box, pallet, bag). For each package, the **Coefficient** column specifies how many base units of the item it contains. 
    *Example: for "Water" with a base unit "liter", for the "box" package a coefficient of 12 may be specified.*

2.  **Selecting Default Packaging (Purchases and Sales tabs)**:
    In these sections, you can select the **Unit of measure for purchase** and **Unit of measure for sale**. 
    The selected unit will be automatically suggested as the "Type of packaging" when adding the item to the corresponding document (purchase order, receipt, etc.). If necessary, it can be changed directly in the document line.

### Working in Documents
When the mechanism is enabled, additional fields appear in document lines (orders, receipts, shipments):
- **Type of packaging**: Choice of unit of measure (e.g., box, bag).
- **Number of packages**: The quantity of selected packages.
- **Quantity in package**: Conversion coefficient for the selected package (filled automatically).

When the number of packages changes, the system automatically recalculates the main quantity of the item. And vice-versa — when the main quantity changes, the number of packages is recalculated.

## Comparison of Mechanisms

| Feature | Inventory SKUs (Substitution) | Package Accounting (in Documents) |
| :--- | :--- | :--- |
| **Number of Cards** | Several (package = its own card) | One (package = unit of measure) |
| **Stock Accounting** | Aggregated by base card | In base units of one card |
| **Where conversion happens** | When recording in inventory ledger | In document line during entry |
| **Display in Reports** | Base unit only | Base unit of the item |
| **Main Goal** | Merging stock of different items | Convenience of data entry in documents |
