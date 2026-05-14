---
title: Sales settings
---

## Where to find

Open **“Sales” → “Configuration” → “Settings”**.

## What is typically configured

### Order types

For each order type you can set:

- **numerator** — number format and counter;
- **default currency** and the “price includes taxes” flag;
- **shipment type** (if the Inventory module is enabled) — which document is created when the order is confirmed;
- **manufacturing order type** and/or **purchase order type** — for auto-creation of related documents;
- **mail template** — subject, body, and copy-to address for the “Send” action (see the [Sent status](workflow-and-statuses.md));
- **Forbid to lock orders with active shipments** and **Forbid to lock orders that are not fully shipped** — restrictions on the transition to the “Locked” status.

### Global module settings

The module settings form has top-level toggles:

- **“Do not automatically calculate discounts in the order”** — disables automatic discount recalculation on line changes (useful when you manage discounts manually);
- **“Do not automatically calculate discounts in the invoice”** — same for invoices.

See also: [Discounts](discounts.md#automatic-discount-recalculation).

### Pricelists

- **Pricelist types** — categories used to organize pricelists (for example, “Standard”, “Promo”);
- **Price types** — used in pricelist and order lines to determine prices;
- **Print templates** — for printing pricelists and price tags.

### Other

- print parameters (templates for orders and accompanying documents);
- availability of specific actions depending on statuses.

Recommendation: configure order types and numbering first, then price types and pricelists, and discounts last (they rely on price types and categories).