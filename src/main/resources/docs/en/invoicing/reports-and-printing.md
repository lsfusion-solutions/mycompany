---
title: Reports and printing
---

## Document printing

In “Invoicing”, print forms are typically available for:

- [bills](bills.md);
- [invoices](invoices.md);
- [payment documents](payments.md).

Printing availability depends on configuration and templates.

### Configuring print templates for “Invoices”

#### What is a print template

A print template is a print form that the system generates when you click **“Print”** in the **[Invoice](invoices.md)** card.

For each **invoice type**, you can enable one or more templates. If there are several templates, the user selects the required one when printing (see [Settings and directories](settings.md)).

A template can be:

- **predefined** (a built-in layout delivered with the system);
- **custom** (you upload your own layout file).

#### When printing is available in an Invoice

The **“Print”** button is shown in the [invoice](invoices.md) card only if at least one print template is enabled for its type.

#### Where the settings are performed

Printing setup consists of two steps:

1) **Create/configure an invoice template** — set its name and source (built-in layout or uploaded file).

2) **Enable the template for a specific invoice type** — link the template to the type so it appears in printing.

These actions are typically performed in the [Settings](settings.md) section:

- **Invoice templates** list (create/edit templates);
- **Invoice type** card (enable templates for a specific type).

> Menu placement may differ depending on configuration, but the logic is the same: templates are stored separately, and enabling is done in invoice types.

---

#### 1) Creating and configuring an invoice template

Open the **Invoice templates** list and create a new template (or open an existing one).

Fields and actions in the template card:

- **Name** — how the form will be named in the selection list when printing.
- **Template file name** — used for predefined layouts (when no file is uploaded).
- **Open** — opens the current template for viewing (predefined or uploaded).
- **Upload** — upload your layout file (after upload, it will be used).
- **Reset** — delete the uploaded file and return to the predefined layout (if it is specified).
- **Format** — determines how the printing result is generated.
- **Export file name** — file name when saving the result (if the selected format generates a file).

Recommendations:

- If you want to **replace the standard form** with your version — use **Upload**.
- If you need to **return to the standard form** — use **Reset**.

---

#### 2) Enabling a template for an invoice type

Open the **Invoice types** list, select the required type and open the tab with templates.

Then:

1. Find the required template in the list.
2. Enable it for the current type (usually a checkbox like “On”).

You can enable multiple templates — then when printing, the system will ask to select one.

---

#### 3) Printing from an Invoice card

Open the required [invoice](invoices.md) and click **“Print”**.

Two options are possible:

- **One template enabled** — printing starts immediately using it.
- **Multiple templates enabled** — a selection window opens and you choose the template.

If the selected format generates a file, the system will offer to open/save the result, taking into account the **Export file name** field.

---

#### Typical problems and how to fix them

**1) There is no “Print” button in the invoice.**

Check:

- the invoice has the correct type selected;
- at least one template is enabled for that type;
- the template has a predefined layout specified or an uploaded file.

**2) The wrong form is printed.**

Check:

- which invoice type is set in the document;
- whether multiple templates are enabled for that type (in this case you need to select the correct one when printing).

**3) You need to restore the standard print form.**

Open the template and click **Reset** (if a file was uploaded earlier).

---

#### Examples of predefined forms

Depending on the delivery, typical predefined print forms for an invoice may be available (for example, delivery note, invoice, universal transfer document, proforma invoice). You can use them as-is or replace them with your own files using **Upload**.

## Reports

Most commonly used:

- [bills](bills.md) reports;
- [invoices](invoices.md) reports;
- [payments](payments.md) reports;
- [debt](debt-and-calendar.md) reports.

Recommendations:

1. Use a date interval.
2. For debt analysis, group by [partner](../masterdata/partners.md) and [contract](../masterdata/contracts.md).