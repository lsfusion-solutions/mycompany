---
title: Shipments for orders
---

A [shipment](../inventory/shipments.md) records the transfer of goods to a customer and inventory movement.

## Where to find

Usually available in **“Sales” → “Operations”** (or in the “Inventory” section — depending on configuration).

## Relation to an order

A shipment can be created based on a sales order. In this case:

- the [customer](../masterdata/partners.md) and delivery address are prefilled;
- the [location](../inventory/locations.md) is prefilled;
- shipment lines are formed from the order lines.

## Relation between shipments and sales orders: how it works in the system

Below is the logic of the “sales order ↔ shipments” link.

### Line-level relation

The link between a shipment and an order is stored not only on the “header”, but also **through the lines**:

- each shipment line is linked to a specific order line;
- based on this link, the system calculates:
  - how much is reserved for the order line;
  - how much has already been shipped;
  - how much remains to be shipped.

Practical meaning: one order can be shipped in multiple shipments and in parts.

### Remaining to ship

For an order line, the system calculates:

- **Shipped** — total across active shipments;
- **Remaining to ship** = order line quantity (taking packaging/UoM conversion into account) − shipped.

If more is shipped than ordered, the system will show an error.

### “Reserve” shipment for an order (status `Waiting`)

The system provides a mechanism of an automatic “reserve” shipment that is kept up to date for an order.

Conditions under which it is created/updated:

- the order is in the confirmed status;
- the order type has a shipment type set;
- a location is selected in the order;
- there is something to ship for the order (remaining to ship is greater than zero).

How it looks for the user:

1. You confirm an order.
2. The system creates (or finds) a reserve shipment for this order in status `Waiting`.
3. In this shipment, the system automatically keeps up to date:
   - [customer](../masterdata/partners.md);
   - department (if used);
   - planned date;
   - delivery address;
   - [location](../inventory/locations.md).

### How lines are formed in the reserve shipment

When creating/updating the reserve shipment, the system:

- adds shipment lines for those order lines that have remaining quantity to ship;
- fills in the item (taking item transformation into account, if used);
- stores the “initial demand” for the shipment line equal to the current remaining-to-ship value.

If remaining quantity for an order line becomes zero (everything is shipped), the corresponding shipment line is removed.
If there are no lines left in the reserve shipment, the shipment is deleted.

After forming lines, the system performs a preliminary availability check for the reserve shipment.

### Multiple shipments for one order

One order can be linked to multiple shipments. This happens, for example, for partial shipments or when splitting by location.

The order card shows a list of related shipments.
The shipment card also shows a list of related orders.

### Restrictions when locking an order

The order type may have additional restrictions enabled:

- forbid locking an order if it has active shipments;
- forbid locking an order if it is not fully shipped.

If restrictions are enabled, the system will not allow locking.

## Creating a shipment based on an invoice

The “shipment from invoice” scenario is described on a separate page: [Creating a shipment based on an invoice](../invoicing/shipments-from-invoice.md).

## Typical scenario

1. Open a sales order.
2. Create a shipment for the order.
3. Check quantities in lines.
4. Post/confirm the shipment according to your organization’s rules.