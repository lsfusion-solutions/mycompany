---
title: Reports
---

## Where to find it

Open **Accounting -> Reporting -> General ledger**.

## General ledger

The General ledger is the main accounting workbench. In the header you can set:

- **Date interval**
- **Company**
- **Lock date**

Available actions:

- **Generate journal entries** - bulk creation of missing journal entries for the selected company and period
- **Delete journal entries** - bulk deletion of source-generated journal entries in the selected company and period

The ledger itself shows:

- the account tree;
- **Initial balance**, **Debit**, **Credit**, and **Final balance** for each account;
- a **Non-zero** filter enabled by default;
- journal entry lines for the selected account.

From the lines area you can:

- open the source document;
- open the journal entry itself.

Practical use:

1. Set company and period.
2. Generate missing entries if needed.
3. Review balances by account.
4. Drill down to journal entry lines and source documents.
5. Set the lock date after the period is checked and closed.

## Balance Sheet

The **Balance sheet** report is printed from the General ledger.

It shows balances as of the end date for:

- Asset accounts
- Liability accounts
- Equity accounts

## Profit and Loss

The **Profit and Loss** report is also printed from the General ledger for the selected date interval.

It shows:

- revenue accounts;
- expense accounts;
- totals for **Revenue**, **Expense**, and **Net income**.

## Cash Flow Statement

The **Cash flow statement** is printed from the General ledger for the selected date interval.

It shows:

- cash flow items by activity;
- calculated cash amount for each item;
- opening cash balance;
- closing cash balance.

The report depends on correct setup of:

- the **Cash equivalent** flag on GL accounts;
- **Cash Flow Item (Debit / Credit)** mappings on GL accounts.
