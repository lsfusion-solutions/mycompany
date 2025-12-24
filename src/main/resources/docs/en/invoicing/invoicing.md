# Invoicing — user documentation

This documentation describes the **“Invoicing”** section: bills and invoices, payments (incoming/outgoing), debt control, payment calendar, taxes, printing and reporting.

## Who this section is for

The **“Invoicing”** section is typically used by:

- **Sales manager / account manager** — creates invoices, controls payments, works with accounts receivable by partners and contracts.
- **Accountant / finance specialist** — registers payments, matches payments with documents, controls debt closure, builds reports.
- **Logistics / warehouse** (if the warehouse contour is enabled) — creates and processes shipments based on invoices.

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
   - select a partner;
   - specify a contract (if used);
   - fill lines (items/services, quantity, price, tax).
3. Move the invoice to status **“To pay”** (if required by your configuration rules).
4. After the payment is received, register an **incoming payment** and match it with the invoice.
5. Control debt in reports and in the payment calendar.

### Scenario: create a bill and register a supplier payment

1. Open **“Invoicing” → “Operations” → “Bills”**.
2. Create a bill and fill lines.
3. Move the bill to status **“To pay”** (if required).
4. Register an **outgoing payment** and match it with the bill.

## End-to-end process “from amount due to debt closure”

Below are typical document chains. In a particular configuration, some steps may be disabled or replaced.

### Sales (customer)

1. **Invoice** — records the sale in accounting (revenue/taxes/customer debt).
2. **Shipment** (optional) — an inventory document that can be created from an invoice.
3. **Incoming payment** — records money receipt and reduces debt (after matching with documents).

### Purchase (supplier)

1. **Bill** — records the purchase in accounting (amounts/taxes/company payable to the supplier).
2. **Outgoing payment** — records payment to the supplier and reduces debt (after matching with documents).

Practical guideline:

- if debt accounting is maintained **by invoices**, match incoming payments with invoices;
- if debt accounting is maintained **by bills**, match outgoing payments with bills;
- if the **payment calendar** is used, verify payment terms in documents and in settings.

## Navigation

The “Invoicing” section typically contains groups:

- **Operations** — bills, invoices, payments and correction documents.
- **Processes** — processing panels and lists (if enabled).
- **Reporting** — debt/payment/tax reports.
- **Settings** — parameters and directories.

## Terms

#### Bill

A document that records receiving goods/services from a supplier and the amount due to the supplier.

#### Invoice

A document that records the sale in accounting (revenue, taxes, debt).

#### Incoming payment

Receipt of funds (payment from a customer/partner).

#### Outgoing payment

Withdrawal of funds (payment to a supplier, refund, other payouts).

#### Debt

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
