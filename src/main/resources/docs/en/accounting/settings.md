---
title: Settings and reference data
---

## Where to find it

Open:

- **Accounting -> Configuration -> Settings**
- **Accounting -> Configuration -> Chart of accounts**
- **Accounting -> Configuration -> Cash Flow Items**

## Settings

The **Settings** form contains:

- **Readonly posted journal entries** - if enabled, posted journal entries become read-only until they are unposted;
- the numerator used for manual [journal entries](journal-entries.md);
- tabs for **Journals** and **Asset types**.

The **Lock date** is maintained in the header of the [General ledger](reports.md). It is used as a hard boundary for editing journal entries.

## Chart of accounts

The chart of accounts is a tree. Each account has:

- **ID**
- **Name**
- **Type**
- **Parent**
- **Cash equivalent**
- **Cash Flow Item (Debit / Credit)**

Important rules:

- account type must be defined on the account itself or inherited from one of its parents;
- the **Cash equivalent** flag is used in the [cash flow statement](reports.md);
- cash flow item mappings are inherited from parent accounts if they are not set directly on the child account.

If the database is initialized without accounts, the module loads a default chart with the main groups:

- Assets
- Liabilities
- Equity
- Revenue
- Expenses

and common subaccounts such as Cash, Bank, Accounts Receivable, Accounts Payable, Fixed assets, Accumulated depreciation, Wages payable, and Taxes payable.

## Journals

Journals are used on document types and manual journal entries. A journal contains:

- **ID**
- **Name**
- **Numerator**

If the database is initialized without journals, the module creates default journals:

- Bank
- Cash
- Sales
- Purchase
- Miscellaneous

## Cash Flow Items

Cash Flow Items classify movements for the cash flow statement. Each item has:

- **Name**
- **Activity**: Operating, Investing, or Financing

These items are then assigned to GL accounts as the debit and/or credit classification.

## Asset types

Asset types are used when creating and depreciating assets. An asset type defines:

- **Name**
- **Numerator**
- **Journal**
- **Fixed asset account**
- **Acquisition account**
- **Depreciation account**
- **Expense account**
- **Useful life, months**

The module also creates a default asset type named **Asset** if the database is empty.

## What is configured outside this section

Posting rules for bills, invoices, payments, receipts, shipments, adjustments, scrap, and payslips are configured on the corresponding document type cards in other modules. See [Posting from source documents](source-documents.md).
