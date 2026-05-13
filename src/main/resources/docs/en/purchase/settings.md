---
title: Purchase settings
---

## Where to find

Settings are usually located at **“Purchase” → “Configuration” → “Settings”**.

## Purchase order type

Most purchase behavior is configured on the **purchase order type**. For each type you can set:

### Basic fields

- **numerator** — number format and counter for orders;
- **default currency** and the “price includes taxes” flag;
- **default location** (if the [Inventory](../inventory/inventory.md) flow is enabled);
- **payment terms** (if the [Invoicing](../invoicing/invoicing.md) flow is enabled).

### Links to other documents

- **Receipt type** — which document is created as a reserve receipt when the order is confirmed (see [Receipts for purchase orders](receipts.md));
- **Bill type** — which document is created by the “Create bill” action (see [Bills for purchase orders](bills.md));
- **Bill control** — “Ordered quantity” or “Received quantity”; defines which quantity is transferred to the bill;
- **Manufacturing order type** — when a purchase order is confirmed, a manufacturing order may be auto-created for the relevant items.

### Sending a purchase order to a vendor

Fields used by the **“Send”** action:

- **attachment template** — the printable form attached to the email;
- **Topic** — email subject;
- **email body**;
- **Copy to** address (Cc).

Once configured, the **“Send”** action appears on the order card in the “Draft” status and moves the order to “Sent”.

### Lock restrictions

Three independent flags affect the **“Lock”** action:

- **“Forbid to lock orders with active receipts”** — prevents locking while a reserve receipt is in “Ready”;
- **“Forbid to lock orders that are not fully received”** — prevents locking while there is a remaining quantity to receive;
- **“Forbid to lock orders that are not fully paid”** — prevents locking while not all quantity is paid.

Without these flags, locking proceeds without checks (and the reserve receipt is simply deleted).

## Pricelist import type

A separate **Pricelist import type** (with a script) is configured globally; it powers the **“Import”** action on a vendor’s pricelist card. See [Vendor pricelists → Importing prices](pricelists.md#importing-prices-from-an-external-source).

## Other master data that affects purchase behavior

- **[vendors](../masterdata/partners.md)** — header fields, default location, pricelist import type, auto-order period;
- **[items](../masterdata/items.md)** and **purchase packages** — used by auto-order to round quantities;
- **[taxes](../invoicing/taxes.md)** and **[currencies](../masterdata/currencies.md)** — common master data.