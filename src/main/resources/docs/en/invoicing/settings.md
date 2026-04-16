---
title: Settings and directories
---

## Where to find it

Open **“Invoicing” → “Settings” → “Settings”**.

## What is typically configured

- document types ([bills](bills.md), [invoices](invoices.md), [payments](payments.md));
- numbering rules;
- bank accounts and cash registers;
- payment terms (see [Debt and payment calendar](debt-and-calendar.md));
- [taxes](taxes.md);
- OpenAI-based bill file import settings (if used);
- print templates (see [Reports and printing](reports-and-printing.md));
- payments matching rules (if enabled).

## Banks and accounts

Directories typically include:

- banks;
- bank accounts;
- cash registers;
- analytical accounts (if used for payments matching).

## Payment terms

Payment terms are used for:

- planned payment date calculation;
- [payment calendar](debt-and-calendar.md) generation;
- overdue control.

## Bill file import

If your configuration uses bill recognition from files, prepare two groups of settings in advance:

- in the global OpenAI integration settings, fill in the API key. You can optionally specify the **default model**; if it is not set, the service default model is used;
- in the **bill type** card, fill in the recognition **prompt**. For the initial setup, it is convenient to load the **default** text first and then adjust it to your documents if needed.

Before starting recognition, also check your master data:

- vendors and [items](../masterdata/items.md) must already exist and be active;
- [currencies](../masterdata/currencies.md) and [taxes](taxes.md) must already exist in the system.

The import action appears on the bill card only for bill types with a configured prompt.
