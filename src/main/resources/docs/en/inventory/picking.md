---
title: Picking tasks
---

Picking tasks are used to organize picking in a [location](locations.md) when executing a [shipment](shipments.md).

## General logic

1. Picking tasks are created for a [shipment](shipments.md).
2. A warehouse operator performs picking (often via the mobile UI):
   - scans a bin/item (if enabled);
   - enters the actual picked quantity.
3. Completed tasks update the [shipment](shipments.md) data.

## Mobile UI

In the mobile form, the following is typically available:

- the task list;
- barcode scanning;
- picking confirmation.