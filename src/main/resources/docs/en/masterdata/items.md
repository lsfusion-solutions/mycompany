---
title: Items
---

The **“Items”** directory contains products and services that are used in document lines (orders, shipments, invoices, bills, etc.).

## Products and services — what is the difference

Items are divided into two main types:

- **Products** — material items that usually participate in inventory accounting.
- **Services** — work and services that do not require storage and do not create stock.

The separation is needed to:

- correctly perform inventory operations (if the inventory contour is enabled);
- store product-specific attributes (e.g., weight, volume, country of origin — if used);
- simplify selection in documents and analysis.

#### When to create a “product”

Create a **product** if the item:

- is received into inventory and/or shipped from inventory;
- requires stock control, reservation, lots/serials (if used);
- has physical characteristics important for logistics (weight/volume).

Examples: raw materials, components, finished goods, consumables.

#### When to create a “service”

Create a **service** if the item:

- is work/service and is not stored in inventory;
- must not create inventory movements;
- is accounted for in documents as a service (the quantity unit is “hour”, “service”, “job”, “shift”, etc.).

Examples: delivery, installation, repair, consulting, rent.

## Before creating items

It is recommended to fill in advance:

- **Units of measure** (at least basic ones);
- **Categories** if you plan to group items.

## Item list

The list typically shows:

- **Name**;
- **ID**;
- **Type** (if used);
- **Category**;
- **Unit of measure**.

If archiving is available, use the **“Active”** / **“Archived”** filter.

## Item card

Typical fields:

- **Name**;
- **Type** (if used);
- **Full name** (if maintained);
- **Category**;
- **Unit of measure**;
- **ID** (can be filled automatically);
- **Reference** (if used);
- **Description**;
- **Archived**.

### Inventory settings

If the inventory contour is enabled in the system, additional parameters may be available in the item card on the **Inventory** tab:

- **Weight** and **Volume**;
- **Inventory SKU** and **Coefficient** (used for automatic recalculation and accounting of the current item's stock through another base item). For more details, see the [Inventory SKUs](../inventory/product-sku.md) section.

Also, conversion coefficients for packages can be configured for items (on the **Units of measure** tab), and default packages can be selected on the **Purchases** and **Sales** tabs. This allows for the use of the packaging accounting mechanism directly in documents.

### Filling recommendations for products

- Make sure **Category** and **Unit of measure** are selected (e.g., “pcs”, “kg”, “m”).
- If your configuration has **Weight**, **Volume**, **Country of origin** — fill them for products when those attributes are used in logistics, marking or reporting.

### Filling recommendations for services

- Choose a unit of measure that reflects the service scope (e.g., “hour”, “service”, “job”).
- It is convenient to include the delivery format/composition in the name (e.g., “City delivery”, “Installation (1 hour)”) so the service is unambiguous when selecting.

## Comments and history

If comments/history are enabled in the configuration, the card may contain a tab with comments and/or change history. This is useful for recording agreements and reasons for adjustments.

## Maintenance practice

- Use a consistent naming style for active items.
- If an item is no longer sold/purchased, archive it so it does not appear in selection for new documents.

## Typical mistakes

#### A service was created as a product

As a result, the service may start behaving like an inventory item (e.g., stock expectations or incorrect logic in documents).

Recommendation: create a correct item as a **service**, switch processes to it, and move the incorrect item to **Archived**.

#### A product was created as a service

As a result, you may miss stock control and inventory operations.

Recommendation: create a correct item as a **product** and use it in documents where inventory accounting is required.