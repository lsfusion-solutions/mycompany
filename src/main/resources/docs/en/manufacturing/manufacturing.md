---
title: Manufacturing — user documentation
---

The documentation describes how the **“Manufacturing”** section works: maintaining [Bills of Materials](bom.md), creating and executing [manufacturing orders](orders.md), reserving materials, producing finished goods, recording **[Scrap](scrap.md)**, printing and reports.

## Contents

- [Quick start](#quick-start)
- [Navigation](#navigation)
- [Terms](#terms)

Related documents:

- [Bills of Materials](bom.md)
- [Manufacturing orders: list and card](orders.md)
- [Creating manufacturing orders from sales orders](sales-orders.md)
- [Manufacturing order process and statuses](workflow.md)
- [Production and consumption](production-and-consumption.md)
- [Costing: how it is calculated](costing.md)
- [Unbuild (disassembly)](unbuild.md)
- [By-products](by-products.md)
- [Lots and printing](lots-and-printing.md)
- [Scrap](scrap.md)
- [Reports](reports.md)
- [Manufacturing settings and directories](settings.md)

## Quick start

Below is a typical scenario “from [Bill of Materials](bom.md) to [production and consumption](production-and-consumption.md)”.

1. Make sure a **Bill of Materials** exists for the item (see [Bill of Materials](bom.md)).
2. Create a **[Manufacturing order](orders.md)**:
   - select the order type;
   - specify the item to produce;
   - set the planned start date;
   - if needed, select a [Bill of Materials](bom.md).
3. Fill in planned quantities:
   - how many units to produce;
   - which materials will be consumed and in what quantities.
4. Check material availability and reserve:
   - run the **Check availability** action;
   - if the check is successful, the order moves to the ready state.
5. Run **Manufacture** (move the order to **In progress**) and record output.
6. Run **Mark as Done** and specify the **Products location** (finished goods storage location).

## Navigation

The section is located in the navigation tree as **“Manufacturing”** and usually contains groups:

- **Operations** — manufacturing orders and related actions.
- **Reporting** — manufacturing reports.
- **Settings** — manufacturing directories and parameters.

## Terms

#### [Manufacturing order](orders.md)

A document where you plan and record production of an item (or [unbuild/disassembly](unbuild.md), if the corresponding type is selected).

#### [Bill of Materials](bom.md)

A description of an item structure: which materials and in what quantities are required for production.

#### Material reservation

A procedure where the system records that the required quantity of materials will be used for a specific manufacturing order.

#### [Production and consumption](production-and-consumption.md)

Production is recording the produced quantity. Consumption is recording the actually consumed materials.