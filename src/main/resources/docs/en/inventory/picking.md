# Picking tasks

Picking tasks are used to organize picking in a warehouse when executing a shipment.

## General logic

1. Picking tasks are created for a shipment.
2. A warehouse operator performs picking (often via the mobile UI):
   - scans a bin/item (if enabled);
   - enters the actual picked quantity.
3. Completed tasks update the shipment data.

## Mobile UI

In the mobile form, the following is typically available:

- the task list;
- barcode scanning;
- picking confirmation.
