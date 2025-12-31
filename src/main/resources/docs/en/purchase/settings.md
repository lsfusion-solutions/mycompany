---
title: Purchase settings
---

## Where to find

Settings are usually located at **“Purchase” → “Configuration” → “Settings”**.

## Parameters that affect purchase orders

The set of parameters depends on your configuration. In practice, purchase behavior is most often affected by:

- purchase order types (and related rules);
- whether [receipts](receipts.md) are used ([Inventory](../inventory/inventory.md) flow);
- whether [bills](bills.md) and [outgoing payments](../invoicing/outgoing-payments.md) are used ([“Invoicing”](../invoicing/invoicing.md) flow);
- print templates and rules for sending purchase orders to [vendors](../masterdata/partners.md).

### Restrictions when closing/locking a purchase order

In some configurations, restrictions may apply when completing (locking) a purchase order, for example:

- it is forbidden to complete a purchase order if it has active [receipts](receipts.md);
- it is forbidden to complete a purchase order if it is not fully received;
- it is forbidden to complete a purchase order if it is not paid in full.

If you encounter such a restriction, check related documents and actual line-level fulfillment.

## Templates and sending a purchase order

If sending a purchase order to a vendor is used, you usually configure:

- purchase order print template;
- **Topic** and email body;
- **Copy to** (BCC) address.

After configuration, the **“Send”** action will be available to users in the purchase order card.