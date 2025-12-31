---
title: Sales order workflow and statuses
---

In the **“Sales”** section, a sales order goes through statuses. Statuses define:

- whether an order can be edited;
- whether an order can be Canceled;
- whether related documents can be created (shipments, invoices, manufacturing/purchase orders).

## Typical workflow

1. **Draft**
   - the order can be edited;
   - lines can be added and removed.
2. **Confirmed**
   - the order is considered agreed;
   - shipments and invoices can be created for it;
   - depending on settings, manufacturing or purchase orders may be created automatically.
3. **Canceled**
   - the order is closed and will not be fulfilled.

Exact status names and restrictions depend on your configuration.

## Restrictions and checks

Common rules include:

- you cannot delete an order line if related documents have already been created for it;
- you cannot cancel an order if there are “started” processes for it (for example, active manufacturing orders).

## Recommendations

- confirm the order only after verifying prices, location, and delivery terms;
- if you need to close an order without fulfillment, use cancellation instead of deletion.