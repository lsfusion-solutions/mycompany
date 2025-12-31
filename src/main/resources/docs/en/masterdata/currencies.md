---
title: Currencies and exchange rates
---

The **“Currencies”** and **“Exchange rates”** directories are used for settlements in different currencies and correct amount conversion by dates.

## Currencies

### Currency card

Typical fields:

- **ID** (for example, a three‑character code);
- **Name**;
- **Default** — the currency that is prefilled automatically when creating new data, if the process implies it.

It is recommended to:

- have one currency marked as the **default currency**;
- avoid duplicates with the same currency code.

## Exchange rates

An exchange rate is stored as a set of lines with dates and values.

### Exchange rate card

The exchange rate card typically contains:

- **Name**;
- **Currency** for which the rate is maintained;
- the **Default** flag (for the selected currency).

Below is a table of exchange rate lines:

- **Currency** (the currency from which conversion is performed);
- **Date**;
- **Rate**.

### How the date is used

When converting by a document/operation date, the system selects the rate value for the **latest date that does not exceed the document date**. Therefore, it is important to regularly add new exchange rate lines when values change.

### Practical recommendations

- Enter exchange rates with correct effective dates.
- If the rate changes, add a new line with a new date (do not edit “historical” values without a clear need).