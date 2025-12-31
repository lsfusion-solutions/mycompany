---
title: Vehicle services
---

The section is intended for accounting works/services performed for vehicles: date, service type, **[Vendor](../masterdata/partners.md)** (if used), **Odometer value**, and cost.

It is convenient to use vehicle services as an “event and cost log” for a vehicle: scheduled maintenance, repairs, seasonal replacement, tire service, etc. (the set of types depends on directories).

## Where to find it

Open **“Fleet” → “Operations” → “Vehicle services”**.

Service history is also usually available in the vehicle card in the corresponding block.

## Creating a service record

1. Click **New**.
2. Fill in the main fields:
   - date;
   - vehicle;
   - **[Type](settings.md)**;
   - **[Vendor](../masterdata/partners.md)** (if used in your organization);
   - **Odometer value**;
   - quantity and price (if applicable);
   - **Amount** and **Tax** (if maintained separately);
   - note and/or description (if needed).
3. Save the record.

### How to fill the cost

Depending on configuration, cost can be maintained:

- as **quantity** and **price** (with the amount calculated);
- as **Amount** (without quantity breakdown);
- with separate **Tax** tracking (if used).

If you maintain quantity and price, after changing them the amount may be recalculated automatically.

## Link to expense accounting

If your organization maintains **[Bill](../invoicing/bills.md)** documents for service expenses, a vehicle service can be linked to a **[Bill](../invoicing/bills.md)**. This allows you to:

- see which document the expense was posted by;
- control amounts by service.

The available fields and filling rules depend on configuration and permissions.

Practical recommendation: if a service is linked to a **[Bill](../invoicing/bills.md)**, fill in the date and **[Vendor](../masterdata/partners.md)** so that they match the **[Bill](../invoicing/bills.md)** — this makes control and search easier.

## Controlling Odometer value

**Odometer value** helps:

- track mileage history;
- plan maintenance by schedule;
- reconcile events (driver change, repairs, scheduled works).

If mileage is recorded in your organization, try to enter values consistently (without decreasing compared to previous events for the vehicle). If an error is made, correct the record or add an explanation in the note.

## Copying a service record

To quickly create a similar record (for example, a recurring service):

1. Open the vehicle service card.
2. Use the **Copy** action.
3. Change the date, **Odometer value**, and **Amount/Tax** as needed.

Copying is convenient for recurring services (for example, seasonal tire replacement) so that you do not fill in the same fields manually.