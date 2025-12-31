---
title: Invoicing — user documentation
---

This documentation describes the **“Invoicing”** section: [bills](bills.md) and [invoices](invoices.md), [payments](payments.md) ([incoming](incoming-payments.md)/[outgoing](outgoing-payments.md)), [debt](debt-and-calendar.md) control and [payment calendar](debt-and-calendar.md), [taxes](taxes.md), printing and reporting.

## Who this section is for

The **“Invoicing”** section is typically used by:

- **Sales manager / account manager** — creates [invoices](invoices.md), controls [payments](payments.md), works with accounts receivable by [partners](../masterdata/partners.md) and [contracts](../masterdata/contracts.md).
- **Accountant / finance specialist** — registers [payments](payments.md), matches payments with documents, controls debt closure, builds reports.
- **Logistics / warehouse** (if the warehouse contour is enabled) — creates and processes [shipments from invoices](shipments-from-invoice.md).

If some documents or menu items are missing in your configuration, that is normal: the available functionality depends on enabled modules and settings.

## Contents

- [Quick start](#quick-start)
- [Navigation](#navigation)
- [Terms](#terms)

Sections:

- [Bills](bills.md)
- [Invoices](invoices.md)
- [Shipments from invoice (if Inventory is used)](shipments-from-invoice.md)
- [Refunds and corrections](refunds-and-corrections.md)
- [Payments](payments.md)
  - [Incoming payments](incoming-payments.md)
  - [Outgoing payments](outgoing-payments.md)
- [Debt and payment calendar](debt-and-calendar.md)
- [Taxes](taxes.md)
- [Reports and printing](reports-and-printing.md)
- [Settings and directories](settings.md)

## Quick start

### Scenario: create an invoice and register an incoming payment

1. Open **“Invoicing” → “Operations” → “Invoices”**.
2. Create an invoice:
   - select a [partner](../masterdata/partners.md);
   - specify a [contract](../masterdata/contracts.md) (if used);
   - fill lines ([items](../masterdata/items.md)/services, quantity, price, [tax](taxes.md)).
3. Move the invoice to status **“To pay”** (if required by your configuration rules).
4. After the payment is received, register an **[incoming payment](incoming-payments.md)** and match it with the invoice.
5. Control [debt](debt-and-calendar.md) in reports and in the [payment calendar](debt-and-calendar.md).

### Scenario: create a bill and register a supplier payment

1. Open **“Invoicing” → “Operations” → “Bills”**.
2. Create a bill and fill lines.
3. Move the bill to status **“To pay”** (if required).
4. Register an **[outgoing payment](outgoing-payments.md)** and match it with the bill.

## End-to-end process “from amount due to debt closure”

Below are typical document chains. In a particular configuration, some steps may be disabled or replaced.

### Sales (customer)

1. **[Invoice](invoices.md)** — records the sale in accounting (revenue/taxes/customer debt).
2. **[Shipment](shipments-from-invoice.md)** (optional) — an inventory document that can be created from an invoice.
3. **[Incoming payment](incoming-payments.md)** — records money receipt and reduces debt (after matching with documents).

### Purchase (supplier)

1. **[Bill](bills.md)** — records the purchase in accounting (amounts/taxes/company payable to the supplier).
2. **[Outgoing payment](outgoing-payments.md)** — records payment to the supplier and reduces debt (after matching with documents).

Practical guideline:

- if debt accounting is maintained **by [invoices](invoices.md)**, match [incoming payments](incoming-payments.md) with invoices;
- if debt accounting is maintained **by [bills](bills.md)**, match [outgoing payments](outgoing-payments.md) with bills;
- if the **[payment calendar](debt-and-calendar.md)** is used, verify payment terms in documents and in [settings](settings.md).

## Navigation

The “Invoicing” section typically contains groups:

- **Operations** — bills, invoices, payments and correction documents.
- **Processes** — processing panels and lists (if enabled).
- **Reporting** — debt/payment/tax reports.
- **Settings** — parameters and directories.

## Terms

#### [Bill](bills.md)

A document that records receiving goods/services from a supplier and the amount due to the supplier.

#### [Invoice](invoices.md)

A document that records the sale in accounting (revenue, taxes, debt).

#### [Incoming payment](incoming-payments.md)

Receipt of funds (payment from a customer/partner).

#### [Outgoing payment](outgoing-payments.md)

Withdrawal of funds (payment to a supplier, refund, other payouts).

#### [Debt](debt-and-calendar.md)

The difference between document amounts and the amounts of payments matched with them.

## Statuses and editing (general principle)

Many documents in “Invoicing” follow a typical lifecycle:

- **Draft** — the document can be freely edited;
- **To pay** (or **Ready**, depending on the document) — the document is confirmed for further actions (printing, creating related documents, payments matching);
- **Done** — the document is completed (often means operations are closed);
- **Canceled** — the document is excluded from accounting/processes.

Exact behavior depends on configuration. As a rule, the “higher” the status, the more restrictions there are on changing fields and lines.

## Integrations and dependent contours (user level)

- **Bank/cash**: payments are linked to bank accounts/cash registers; movement and debt reports are built from them.
- **Inventory** (if used): invoices can create shipments; some fields (location, delivery address) become required.
- **Taxes**: taxes can be set manually in lines or substituted automatically based on settings.

## FAQ

#### Why doesn’t debt decrease after entering a payment?

Usually you need to:

1. Make sure the payment is **matched** with documents (bills/invoices).
2. Check document and payment statuses (they must not be Canceled).
3. Check currency and amounts (partial payment, overpayment).

See: [Payments](payments.md), [Incoming payments](incoming-payments.md), [Outgoing payments](outgoing-payments.md), [Debt and payment calendar](debt-and-calendar.md).

#### Why isn’t document printing available?

Printing most often depends on:

- document status (for example, printing is available only from “To pay” / “Ready”);
- the presence of a configured print template.

See: [Reports and printing](reports-and-printing.md), [Settings and directories](settings.md).