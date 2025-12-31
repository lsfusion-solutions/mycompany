---
title: By-products
---

In the **“Manufacturing”** module, by-products are implemented through **[Bill of Materials](bom.md) by-products**.

From a user perspective this means:

- in a [Bill of Materials](bom.md) you can specify not only components (what is consumed), but also **by-products** (what is additionally produced);
- when [manufacturing order](orders.md) lines are generated, by-products automatically appear in output lines (and for [unbuild](unbuild.md) — in material lines).

## Where by-products are defined

By-products are defined in a **[Bill of Materials](bom.md)** on the **“By-products”** tab.

Each line includes:

- **Item** (what is produced as a by-product);
- **Unit of measure**;
- **Quantity** — the norm for the Bill of Materials quantity.

Example: if the Bill of Materials is defined for 1 unit of the item, then by-product quantity is the by-product norm per 1 unit.

## How by-products are transferred to a manufacturing order

In the [manufacturing order](orders.md) card, when you run the line generation action (for example, “Create Lines”), the system:

1. Takes the planned quantity (how much needs to be produced).
2. Calculates component lines.
3. Creates output lines:
   - the main item;
   - **by-products** from the [Bill of Materials](bom.md).

By-product quantity is calculated proportionally:

`by-product norm × order quantity / Bill of Materials quantity`

For example, if the Bill of Materials is defined for 10 units and the order is for 20 units, by-product norms are doubled.

## By-products in [unbuild](unbuild.md) (disassembly)

For unbuild, the logic is mirrored:

- Bill of Materials components become “output” (what is received);
- the source item becomes “material” (what is consumed);
- **Bill of Materials by-products are added to materials**, i.e. they are also consumed.

Practical meaning: by-products in unbuild are treated as additional losses/consumption that should be written off together with the unbuild.

## How by-products affect costing

Cost is calculated from actual material consumption and then distributed across output.

Important:

- by-product lines created from the Bill of Materials **do not have a cost distribution coefficient filled in automatically**;
- if distribution coefficients are not filled in, the total cost is usually assigned to the main item, and by-products get a zero share.

If you need part of the cost to be assigned to by-products:

1. Fill in cost distribution coefficients on output lines in the [manufacturing order](orders.md).
2. Recalculate/verify distribution.

For details about distribution see [Costing: how it is calculated](costing.md).

## Recommendations for by-product accounting

1. Separate “by-products” from “[scrap](scrap.md)”:
   - by-products are an expected result of the process (for example, offcuts, recyclable material) that can be received into stock;
   - scrap is an unplanned loss that is usually recorded by a separate **[Scrap](scrap.md)** document.
2. Configure by-product items as separate items so they can be stored, written off, and analyzed.
3. If by-products must affect the main item cost — keep the default distribution.
   If the cost should be split between the main output and by-products — use distribution coefficients.

## Typical mistakes

- **By-products do not appear in the order** — by-products are not filled in the Bill of Materials or line generation was not run.
- **By-products appear but the quantity is wrong** — check the Bill of Materials base quantity and the planned order quantity.
- **By-products do not affect costing** — this is expected with default distribution; fill in cost distribution coefficients on output lines.