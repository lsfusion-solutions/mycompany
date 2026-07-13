---
title: Picking tasks
---

Picking tasks are used to organize picking in a [location](locations.md) when executing a [shipment](shipments.md).

## When picking tasks appear

There are two related flags here, and they do different things:

- **Picking** (on the **shipment type**) — enables the **Picking** tab on the shipment card, where reservation and picked quantities are shown by source [location](locations.md).
- **Picking task** — actually creates a separate **picking task** record for the warehouse operator. This flag exists both on the **shipment type** and **on the shipment itself**. The type-level flag only **sets the default** for the shipment flag at the moment the type is selected; the system checks the **shipment-level** flag when deciding whether to generate a task. As a result, changing the type flag does not retroactively affect already-existing shipments, and you can also turn the flag off on a specific shipment to suppress the task.

A picking task is created automatically for a shipment that satisfies both of the following:

- the **shipment** has the **Picking task** flag on (defaulted from the type when the type is selected);
- the shipment has been moved to **Ready**.

If the shipment type has **Picking** on but **Picking task** off, the Picking tab is visible but no separate task record is generated.

So picking is not a separate menu item — it is a workflow that fires on top of an existing shipment.

## Structure

Each picking task contains one or more **picking lines**. A picking line carries:

- the product to be picked and its required quantity;
- the quantity already picked and the **remaining** quantity (required minus picked);
- the operator who performed the action and the time of the action;
- optionally, a barcode-resolved product reference for fast scanning.

## Typical flow

1. A warehouse operator opens the **Mobile picking** form from the **Processes** group (**Inventory → Processes → Mobile picking**).
2. They pick the task that matches the shipment they are working on.
3. For each line:
   - scan the bin/item barcode (if enabled);
   - enter the actual picked quantity.
4. When everything has been picked, the operator confirms the task with **Mark as Done**. The picked quantities are reflected on the source shipment.

Picked quantities can also be entered without the mobile form — directly on the shipment card.

## Where it interacts with the shipment

On the shipment card, the **Picking** tab shows reservation and picked quantities broken down by source [location](locations.md). The tab is visible from the moment the shipment is marked for processing (**Waiting** and all later statuses, including **Ready** and **Done**) when picking is enabled on the shipment type. When [lots](lots-and-packages.md) are used, the picked quantity within a location can additionally be detailed by lot.
