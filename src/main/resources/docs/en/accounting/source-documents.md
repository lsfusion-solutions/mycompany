---
title: Posting from source documents
---

The accounting module adds setup fields to document types and an **Accounting** tab to operational documents in other modules.

## Which document types are extended

The following type cards receive accounting settings:

- **Bills** and **Invoices**: journal plus debit/credit accounts for **Total amount**, **Netto amount**, and **Tax**
- **Incoming payments** and **Outgoing payments**: journal plus debit/credit accounts for **Amount**
- **Receipts**, **Shipments**, **Adjustments**, and **Scrap**: journal plus debit/credit accounts for **Cost**
- **Payslips**: journal plus debit/credit accounts for **Net wage**

In addition, **Bill type** can define an **Asset type** used for creating fixed assets from bill lines.

## What to configure on a type card

Open the type card of the document you use and review the **Accounting** tab.

At minimum, configure:

- the **Journal** where postings will be created;
- the required debit/credit account pairs for the amounts used by this type.

If the account pair is empty, the corresponding posting line is not created.

## Accounting tab on the document card

Source documents such as bills, invoices, payments, warehouse documents, and payslips get an **Accounting** tab in the document details.

This tab shows:

- **Generate** if no journal entry exists yet;
- **Regenerate** if a journal entry already exists;
- the generated journal entry header: posted flag, company, journal, number, date, description;
- the journal entry lines with account, debit, and credit.

`Regenerate` is disabled when the linked journal entry is locked by the lock date.

## How generation works

When you generate a journal entry from a document, the system copies:

- **Company**
- **Journal** from the document type
- **Date** (document date, execution date, or due date depending on document type)
- **Number**
- **Description**

The **Posted** flag of the created entry depends on the source document status used in the module:

- bills and invoices use the **Ready** status;
- incoming/outgoing payments, receipts, shipments, adjustments, and scrap use the **Done** status;
- payslips are considered active and can be posted immediately.

As a result, an entry can be generated but remain unposted if the source document is not yet in the final business status.

## Bulk generation

The **Generate journal entries** action in the [General ledger](reports.md) only creates missing entries for documents that already meet their required business status and belong to the selected company and period.

## Creating assets from bill lines

If a **Bill type** has an **Asset type**, a bill line can show the **Create asset** action.

The action is available when:

- the line item is a **Product**;
- line quantity is greater than the number of assets already linked to that line.

When the asset is created, the system fills:

- **Item**
- **Company**
- **Type** from the bill type
- **Acquisition date** from the bill date
- **Acquisition cost** from the line untaxed amount
- **Note** from the line description

The created asset is then shown next to the bill line.
