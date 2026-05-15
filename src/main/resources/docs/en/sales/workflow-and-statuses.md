---
title: Sales order workflow and statuses
---

In the **“Sales”** section, a sales order goes through statuses. Statuses define:

- whether an order can be edited;
- whether an order can be Canceled;
- whether related documents can be created (shipments, invoices, manufacturing/purchase orders).

## Typical workflow

1. **Draft**
   - the order can be edited; lines can be added and removed;
   - default status for a new order.
2. **Sent**
   - the order has been emailed to the customer via the **“Send”** action;
   - subject, body, attachment template, and copy-to address are configured in the order type;
   - reachable from “Draft”; from “Sent” you can go directly to “Confirmed”.
3. **Confirmed**
   - the order is considered agreed; reachable from “Draft” or “Sent”;
   - [shipments](shipments.md) and [invoices](invoices.md) can be created for it;
   - depending on settings, [manufacturing](../manufacturing/workflow.md) or [purchase](../purchase/purchase.md) orders may be created automatically (configured via “Manufacturing order type” and similar fields on the order type).
4. **Locked**
   - the order is closed for further work (e.g. after full fulfillment);
   - reachable only from “Confirmed”;
   - the order type can enable additional restrictions: **“Forbid to lock orders with active shipments”** and **“Forbid to lock orders that are not fully shipped”**.
5. **Canceled**
   - the order is closed and will not be fulfilled;
   - reachable from any status except “Draft” and “Canceled”.

Exact status names and restrictions depend on your configuration.

## Restrictions and checks

Common rules include:

- you cannot delete an order line if a manufacturing order has already been created from it;
- you cannot cancel an order if there are “started” processes for it (for example, active manufacturing orders);
- when locking an order, the system checks the order type’s restrictions (active shipments and/or incomplete shipping) and shows a message if locking is forbidden.

## Recommendations

- confirm the order only after verifying prices, location, and delivery terms;
- if you need to close an order without fulfillment, use cancellation instead of deletion.