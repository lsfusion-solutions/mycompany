---
title: Lots and printing
---

In manufacturing, lots and printing forms can be used.

## Lots

A lot allows you to link production output and subsequent stock movements to a specific production batch.

Lot tracking is enabled per item (see the master data settings); the lot panels appear in the [manufacturing order](orders.md) only for lot-tracked items.

### Lots on output lines

On the **Finished products** tab, the selected line has a lot panel with two quantity columns per lot:

- **Manufacture** — the planned quantity of the lot;
- **Produced** — the actually produced quantity of the lot.

Ways to fill lots:

- the **generate lots** action creates lot records for the planned quantity and assigns them identifiers/barcodes;
- scanning or entering a lot barcode adds the lot; if no lot with this barcode exists yet, it is created automatically;
- when the order is marked **Done** and the actual produced quantity of the line equals the plan, the produced-by-lot quantities are filled automatically from the planned ones.

The produced lots are received into stock together with the products, so subsequent shipments can be traced back to the production batch.

### Lots on material lines

On the **Materials** tab, the selected line has a lot panel where the **Consumed** quantity per lot is recorded — this is how you register exactly which incoming lots were consumed in production.

### Lot label printing

If a label print type is configured for the item, output lines with a produced lot show the **Label** action, which prints the lot label.

## Printing the order

The **Print** action of the [manufacturing order](orders.md) prints a simple production job form:

- order number, start date;
- the item and the quantity to produce;
- the list of materials with the quantity to consume and the source location.

Use it as a shop-floor task sheet. A print form is also available for the Bill of Materials structure and cost (see [Bills of Materials](bom.md)).
