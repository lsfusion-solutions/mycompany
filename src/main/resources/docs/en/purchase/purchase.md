---
title: Purchase — user documentation
---

This documentation describes how to use the **“Purchase”** section: creating [purchase orders](orders.md), working with [vendor pricelists](pricelists.md), creating related documents ([bills](bills.md), [receipts](receipts.md), [outgoing payments](../invoicing/outgoing-payments.md)) and controlling fulfillment.

If some menu items or actions are missing in your configuration, that is normal: available features depend on enabled modules and settings.

## Who this section is for

The **“Purchase”** section is typically used by:

- **Purchasing manager** — creates purchase orders, sends them to vendors, controls lead times and fulfillment.
- **Warehouse / logistics** (if [Inventory](../inventory/inventory.md) is used) — processes [receipts](receipts.md) and links them to purchase orders.
- **Accountant / finance specialist** — creates [bills](bills.md) and [outgoing payments](../invoicing/outgoing-payments.md), controls payables to [vendors](../masterdata/partners.md).

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
   - [vendor](../masterdata/partners.md);
   - [company](../masterdata/partners.md);
   - [location](../inventory/locations.md) (if used);
   - [payment terms](../invoicing/settings.md#payment-terms) (if used);
   - order lines ([items](../masterdata/items.md), quantity, price, [taxes](../invoicing/taxes.md)).
3. If needed, send the purchase order to the vendor using **“Send”**.
4. Confirm the purchase order using **“Confirm”**.
5. If [Inventory](../inventory/inventory.md) is used — process a [receipt](receipts.md) and link it to the purchase order.
6. Create a [bill](bills.md) (a financial document) for the purchase order / based on the actual delivery.
7. Register an [outgoing payment](../invoicing/outgoing-payments.md) to the [vendor](../masterdata/partners.md) and allocate it to the bill (if [payment allocation](../invoicing/payments.md) is used in your configuration).

See also: [“Invoicing”](../invoicing/invoicing.md) documentation — [Bills](../invoicing/bills.md), [Outgoing payments](../invoicing/outgoing-payments.md), [Debt and payment calendar](../invoicing/debt-and-calendar.md).

## Navigation

The **“Purchase”** section usually includes the following groups:

- **Operations** — purchase orders, vendor pricelists, and related actions.
- **Reporting** — reports on orders/fulfillment.
- **Configuration** — parameters and directories that affect purchasing.

## Terms

#### [Purchase order](orders.md)

A document that records an agreement with a [vendor](../masterdata/partners.md) to deliver goods/services ([items](../masterdata/items.md), quantity, price, due dates).

#### [Bill](bills.md)

A document that records the purchase in accounting and the amount payable to the [vendor](../masterdata/partners.md).

#### [Receipt](receipts.md)

An [Inventory](../inventory/inventory.md) document that records the fact of receiving goods into a [location](../inventory/locations.md). It can be linked to a purchase order and used to control “how much has already been received”.

#### [Pricelist](pricelists.md)

A [vendor](../masterdata/partners.md) price list that can be used as a source of prices when creating purchase orders.