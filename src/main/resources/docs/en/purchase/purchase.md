# Purchase — user documentation

This documentation describes how to use the **“Purchase”** section: creating **purchase orders**, working with **vendor pricelists**, creating related documents (**bills**, **receipts**, **payments**) and controlling fulfillment.

If some menu items or actions are missing in your configuration, that is normal: available features depend on enabled modules and settings.

## Who this section is for

The **“Purchase”** section is typically used by:

- **Purchasing manager** — creates purchase orders, sends them to vendors, controls lead times and fulfillment.
- **Warehouse / logistics** (if Inventory is used) — processes receipts and links them to purchase orders.
- **Accountant / finance specialist** — creates bills and outgoing payments, controls payables to vendors.

## Contents

- [Quick start](#quick-start)
- [Navigation](#navigation)
- [Terms](#terms)

Sections:

- [Purchase orders](orders.md)
- [Receipts for purchase orders](receipts.md)
- [Bills for purchase orders](bills.md)
- [Vendor pricelists](pricelists.md)
- [Purchase reports](reports.md)
- [Settings](settings.md)

## Quick start

### Scenario: create a purchase order → receive goods → create a bill → pay

1. Open **“Purchase” → “Operations” → “Purchase orders”**.
2. Create a purchase order and fill in:
   - vendor;
   - company;
   - location (if used);
   - payment terms (if used);
   - order lines (items, quantity, price, taxes).
3. If needed, send the purchase order to the vendor using **“Send”**.
4. Confirm the purchase order using **“Confirm”**.
5. If Inventory is used — process a **receipt** and link it to the purchase order (see: [Receipts for purchase orders](receipts.md)).
6. Create a **bill** (a financial document) for the purchase order / based on the actual delivery (see: [Bills for purchase orders](bills.md)).
7. Register an **outgoing payment** to the vendor and allocate it to the bill (if payment allocation is used in your configuration).

See also: **“Invoicing”** documentation — [Bills](../invoicing/bills.md), [Outgoing payments](../invoicing/outgoing-payments.md), [Debt and payment calendar](../invoicing/debt-and-calendar.md).

## Navigation

The **“Purchase”** section usually includes the following groups:

- **Operations** — purchase orders, vendor pricelists, and related actions.
- **Reporting** — reports on orders/fulfillment.
- **Configuration** — parameters and directories that affect purchasing.

## Terms

#### Purchase order

A document that records an agreement with a vendor to deliver goods/services (items, quantity, price, due dates).

#### Bill

A document that records the purchase in accounting and the amount payable to the vendor.

#### Receipt

An Inventory document that records the fact of receiving goods into a location. It can be linked to a purchase order and used to control “how much has already been received”.

#### Pricelist

A vendor price list that can be used as a source of prices when creating purchase orders.
