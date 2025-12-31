---
title: Unbuild (item disassembly)
---

This section describes the unbuild (disassembly) logic implemented through a special type of **[manufacturing order](orders.md)**.

## General idea

Unbuild is “reverse manufacturing”:

- the **source item** is consumed from stock (as a material);
- the **components** from the [Bill of Materials](bom.md) are received to the finished goods location (as output).

In practice, the system records the operation as:

1) consume the source item;
2) receive a set of components calculated from the [Bill of Materials](bom.md).

## What is required to use unbuild

1. A manufacturing order type with the **“Unbuild”** flag must exist.
2. A [Bill of Materials](bom.md) must be specified for the item to be unbuilt — it defines what the item is disassembled into.

Note: in initial data there is usually an “Unbuild” type already configured as unbuild.

## How unbuild differs from regular production

### Which lines are “materials” and which are “output”

For regular production:

- **materials** = [Bill of Materials](bom.md) components;
- **output** = the finished item (and possible [by-products](by-products.md)).

For unbuild:

- **materials** = the source item itself (and additional items if they are specified as by-products in the [Bill of Materials](bom.md));
- **output** = [Bill of Materials](bom.md) components.

### Planned quantity

The **“To produce”** field is also used for unbuild, but the meaning changes:

- for unbuild it is the quantity of the source item that will be disassembled.

## Automatic line generation from the Bill of Materials

The order has a line generation action (usually “Create Lines”, available in “Draft”).

For unbuild, the system performs:

1. Clears existing material and output lines.
2. Creates **output** lines from [Bill of Materials](bom.md) components:
   - item = component;
   - the “to produce” quantity is calculated proportionally:
     - component quantity in Bill of Materials × unbuild quantity / Bill of Materials quantity;
   - if the component has a cost distribution coefficient, it is copied to the output line.
3. Creates one **material** line for the source item:
   - item = order item;
   - “to consume” quantity = unbuild quantity.
4. If the [Bill of Materials](bom.md) contains [by-products](by-products.md), they are added as additional **material** lines (also to be consumed).

## Reserving and starting unbuild

Unbuild goes through the same statuses as regular production:

1. Prepare the order: type “Unbuild”, item, [Bill of Materials](bom.md), quantity.
2. Check availability and reserve materials.
   - for unbuild, the material is the source item;
   - if the source item is not available in the material location, the order cannot move to the ready status.
3. Move the order “in progress”.
   - run **Manufacture**.
4. Record actual execution:
   - for unbuild, “produced” is typically derived from consuming the source item;
   - the system can automatically fill output components and consumption proportionally.
5. Run **Mark as Done** and specify the finished goods location where components will be received.

## Costing for unbuild

Valuation follows the same logic as for production:

- the basis of cost is actual consumption (for unbuild it is consumption of the source item and any additional material lines);
- the total amount is distributed across output lines (components) by cost distribution coefficients.

If distribution coefficients are not filled in, the whole cost may be assigned to one output line.

See details in [Costing: how it is calculated](costing.md).

## Common mistakes

- **Unbuild lines are not generated** — a Bill of Materials is not selected.
- **Reservation fails** — the source item is not available in the material location in the required quantity.
- **Components are received to the wrong location** — make sure the finished goods location is specified on completion.