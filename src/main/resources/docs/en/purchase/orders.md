---
title: Purchase orders
---

## Where to find

The main forms for working with purchase orders are usually located at **“Purchase” → “Operations” → “Purchase orders”**.

## Purpose

A **purchase order** records an agreement with a [vendor](../masterdata/partners.md) and is used for:

- planning purchases and delivery lead times;
- agreeing price and quantity;
- controlling fulfillment (how much has already been received/registered/paid — depending on enabled flows);
- creating related documents (bills, receipts, etc. — if the corresponding modules are enabled).

## Creating and filling in

When creating a purchase order, you typically fill in:

- **[vendor](../masterdata/partners.md)**;
- **[company](../masterdata/partners.md)**;
- **[location](../inventory/locations.md)** (if [Inventory](../inventory/inventory.md) is used);
- **[currency](../masterdata/currencies.md)** (if multi-currency is used);
- **[payment terms](../invoicing/settings.md#payment-terms)** (if used);
- **scheduled date** (expected delivery);
- **note** and vendor references (for example, vendor link/reference number).

### Order lines

In lines, you specify:

- [item](../masterdata/items.md);
- quantity and [unit of measure](../masterdata/uom.md);
- price;
- amount (usually calculated automatically);
- [taxes](../invoicing/taxes.md) (if used).

## Statuses and actions

Purchase orders typically use the following lifecycle:

1. **Draft** — the order can be edited freely.
2. **Sent** — the order has been sent to the vendor (if sending is used).
3. **Confirmed** — the order is confirmed for fulfillment.
4. **Canceled** — the order is excluded from further processing.

Status behavior may differ depending on settings. Usually, after confirmation there are more restrictions on changes.

### Sending a purchase order to a vendor

If sending is configured in your system, the purchase order card provides the **“Send”** action:

- a print form is generated using the selected template;
- an email is sent to the vendor;
- the purchase order is switched to **“Sent”**.

### Confirming a purchase order

The **“Confirm”** action records that the purchase order is ready for further operations.

After confirmation, related documents (for example, a receipt or a bill) and line-level fulfillment control can become available.

### Canceling a purchase order

The **“Cancel”** action marks the purchase order as Canceled.

Usually, Canceled purchase orders are excluded from further automatic operations and process selections.

## Related documents and fulfillment control

The set of related documents depends on enabled modules.

### Receipts (if [Inventory](../inventory/inventory.md) is used)

For a confirmed purchase order, the system may:

- show **how much has already been received** per line;
- maintain a list of related **receipts** in the purchase order card;
- create a “draft” / ready-to-work receipt so that the warehouse can start receiving goods.

For details, see: [Receipts for purchase orders](receipts.md).

### Bills and payment (if [“Invoicing”](../invoicing/invoicing.md) is used)

The purchase order card may show a list of related **bills**.

A bill can be created from a purchase order (if this is enabled in your configuration). For details, see: [Bills for purchase orders](bills.md).

The chain is usually as follows:

1. **Bill** — records the amount payable to the [vendor](../masterdata/partners.md).
2. **Outgoing payment** — records payment and reduces debt (after allocation).

See also: [Bills](../invoicing/bills.md), [Outgoing payments](../invoicing/outgoing-payments.md), [Payment allocation](../invoicing/payments.md).

## Additional capabilities

### Attachments

You can attach files to a purchase order (for example, bills of materials, correspondence, quotations) and view them in the document card.

### Copying a purchase order

To speed up work, you can create a new purchase order by copying an existing one and then adjusting the header fields and lines.