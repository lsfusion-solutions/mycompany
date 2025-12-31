---
title: Bills of Materials (item structure)
---

A Bill of Materials describes an item structure: which materials and in what quantities are required for production, as well as which by-products are generated.

In the system, a Bill of Materials is used as a source of planned norms: based on it, material and output lines are generated automatically in a manufacturing order.

## Location

Bills of Materials are usually available in the **“Manufacturing”** section (depending on your configuration — in **Operations** or **Settings**).

## What a Bill of Materials is used for

A Bill of Materials is used for:

- automatically filling material lines in a manufacturing order;
- calculating planned consumption and planned output;
- generating by-products during production;
- unbuild (disassembly) — usually using the same Bill of Materials;
- analyzing the item structure and planned norms.

## Bill of Materials card: main fields

In the Bill of Materials card you typically set:

- **Number** — Bill of Materials identifier;
- **Item** — the item the Bill of Materials applies to;
- **Quantity** and **Unit of measure** — the base quantity for which norms are defined (for example, 1 pc, 10 pcs, 100 kg);
- **Name** — a free name/comment;
- **Default** — indicates that the Bill of Materials should be selected automatically in a manufacturing order for this item;
- **Archived** — indicates that the Bill of Materials is no longer used.

Important:

- a Bill of Materials marked as **default** must be active (not archived);
- if an item has a default Bill of Materials, it may be selected automatically when you choose the item in a manufacturing order.

## Bill of Materials structure: tabs

### Components

The “Components” tab contains material lines (what is consumed during production).

Each line usually contains:

- **Item** (material/component);
- **Unit of measure**;
- **Quantity** — the consumption norm for the base quantity of the Bill of Materials;
- **Cost distribution coefficient** — used when the Bill of Materials is used for unbuild (see below).

#### How to read component quantity

Component quantity is defined for the base quantity of the Bill of Materials.

Example:

- Bill of Materials quantity = 10 pcs;
- component A = 2 kg.

This means: to produce 10 pcs of the item, you need 2 kg of component A.

If the manufacturing order is for 25 pcs, the component plan will be calculated proportionally: 2 × 25 / 10.

### By-products

The “By-products” tab defines by-products that are generated during production.

Each line usually contains:

- **Item** (what is additionally produced);
- **Unit of measure**;
- **Quantity** — the norm for the base quantity of the Bill of Materials.

How by-product quantities are calculated in the order — see [By-products](by-products.md).

## Using the Bill of Materials in a manufacturing order

### Bill of Materials auto-selection

If an item has a default Bill of Materials, the system may select it automatically when you choose the item in a manufacturing order.

### Item consistency check

In a manufacturing order, the system enforces that:

- the order item must match the Bill of Materials item.

If they do not match, the order cannot be saved.

### Generating lines from the Bill of Materials

In the manufacturing order card there is an action to generate lines (for example, “Create Lines”).

For regular production:

- Bill of Materials components generate material lines;
- the order item generates an output line;
- Bill of Materials by-products are added to output lines.

For unbuild (disassembly):

- Bill of Materials components generate output lines;
- the order item generates a material line;
- Bill of Materials by-products are added to material lines.

For details about unbuild, see [Unbuild (disassembly)](unbuild.md).

## Cost distribution coefficient in the Bill of Materials

Component lines in the Bill of Materials can store a cost distribution coefficient.

It is used for unbuild:

- when unbuild lines are generated, coefficients from Bill of Materials components are copied to output lines;
- then the total unbuild cost is distributed across output lines using these coefficients.

For details about cost distribution, see [Costing: how it is calculated](costing.md).

## Versioning and relevance

Recommendations:

1. Do not edit archived Bills of Materials.
2. When the item structure changes, create a new Bill of Materials (new number) and make it the default.
3. Archive the old Bill of Materials so it is not selected for new orders.

## Mass entry via tables (import/export)

The system provides actions to import/export Bills of Materials and their lines to a spreadsheet file.

Typically, separate operations are available:

- export/import Bills of Materials;
- export/import components;
- export/import by-products.

Typical scenario:

1. Export a template.
2. Fill in lines in the table.
3. Import the file back.

Important: during import the system validates that items and Bills of Materials exist for the provided codes. If unknown codes are specified, the import is canceled.

## Common mistakes

- **The Bill of Materials is not selected automatically** — the “Default” flag is not set or the Bill of Materials is archived.
- **The order cannot be saved after selecting a Bill of Materials** — the order item does not match the Bill of Materials item.
- **The norms in the order are “not what expected”** — check the base quantity of the Bill of Materials (often it is defined not for 1, but for 10/100 units).