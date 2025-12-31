---
title: Master Data — user documentation
---

The **“Master Data”** section contains base data used in documents and processes of other modules: **items**, **partners**, **categories**, **units of measure**, **countries**, **currencies and exchange rates**, **departments**, **contracts**.

If some menu items or fields are missing in your configuration, that is normal: availability depends on settings and permissions.

## Contents

- [Quick start](#quick-start)
- [Navigation](#navigation)
- [General rules for working with directories](#general-rules-for-working-with-directories)

Sections:

- [Partners](partners.md)
- [Items](items.md)
- [Categories](categories.md)
- [Units of measure](uom.md)
- [Departments](departments.md)
- [Countries](countries.md)
- [Currencies and exchange rates](currencies.md)
- [Contracts](contracts.md)

## Quick start

Below is a typical sequence for filling directories before you start working.

1. Fill **countries** if you use addresses with a country.
2. Fill **currencies** and specify the **default currency**.
3. Fill **exchange rates** (if you have settlements in different currencies).
4. Create **units of measure** and, if needed, **categories**.
5. Create **items** (products/services): specify a category and unit of measure.
6. Create **partners** (customers/suppliers, etc.) and fill contact data.
7. If needed, create **departments** for partners (locations, branches, addresses).
8. If needed, create **contracts** with partners.

## Navigation

Master data is usually available via the **“Master Data”** menu section. Most often, it contains:

- **Partners**
- **Items**
- **Categories**
- **Units of measure**
- **Departments**
- **Countries**
- **Currencies**
- **Exchange rates**
- **Contracts**

## General rules for working with directories

#### Creating and editing

As a rule, each directory has:

- a **list** of entries;
- a **card** (edit form) of the selected entry.

#### ID and numbering

In many directories, the **ID** is generated automatically when an entry is created (by numbering rules). Usually, it is enough to fill **Name** and key attributes.

#### Archive instead of delete

If an entry is already used in documents or linked to other directories, deletion may be forbidden.

Recommended practice:

- do not delete such entries; move them to **Archived**;
- in lists, use the **“Active”** / **“Archived”** filter (if available).

#### Typical reasons for errors

- **You cannot delete an entry** — it is used in documents or linked to other data. Solution: check links and use archiving.
- **You cannot select a department/contract** — selected values do not match the partner or company in the document. Solution: first check the partner/company in the document.