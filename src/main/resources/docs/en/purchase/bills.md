# Bills for purchase orders

A bill records a purchase in accounting and the amount payable to the vendor. In practice, a bill is often created from a purchase order so that header fields and lines are carried over automatically.

## Where to find

Bills are usually available in **“Invoicing” → “Operations” → “Bills”**.

If linking to purchase orders is enabled in your configuration, you can also create a bill from a **purchase order** card.

## Link to a purchase order

A bill can be created based on a confirmed purchase order. In this case:

- header fields (company, vendor, currency, payment terms, etc.) are usually filled in from the purchase order;
- bill lines are created from purchase order lines;
- based on this link, the system calculates how much has already been covered by bills and how much remains.

Practical meaning: one purchase order can be covered by **multiple bills** and **in parts**.

## When creating a bill from a purchase order is available

Typically, a bill based on a purchase order is used when the financial flow (“Invoicing”) is enabled and you need to record the amount payable to the vendor.

As a rule, creating a bill is available when:

1. The purchase order is moved to the **“Confirmed”** status.
2. A bill type is configured for the purchase order type (if required in your configuration).
3. The purchase order has lines that are not yet covered by a bill.

## How to create a bill based on a purchase order

1. Open the purchase order.
2. Run the **“Create Bill”** action (if it is available in your configuration).
3. In the opened bill, check the header fields (usually filled in automatically from the purchase order):
   - company;
   - vendor;
   - currency;
   - payment terms;
   - vendor references / note (if they were filled in the purchase order).
4. Check bill lines:
   - item and description;
   - quantity (usually the “to be covered” quantity: ordered quantity minus what has already been covered by other bills);
   - price.
5. If needed, adjust quantities/prices to match the vendor documents.
6. Move the bill to the required status according to your configuration rules (for example, “to pay”).

## Multiple bills for one purchase order (partial coverage)

If delivery and/or vendor documents arrive in parts, multiple bills for one purchase order are possible:

- the first bill covers part of lines/quantities;
- the next bill is created for the remaining part;
- in the purchase order you can usually control “how much has already been covered” and “how much remains”.

## Paying a bill

The usual chain is:

1. **Bill** — records the amount payable to the vendor.
2. **Outgoing payment** — records payment and reduces debt (after allocation).

See also: [Bills](../invoicing/bills.md), [Outgoing payments](../invoicing/outgoing-payments.md), [Payment allocation](../invoicing/payments.md).

## Restrictions when closing/locking a purchase order

In some configurations, a rule may apply: “a purchase order cannot be closed/locked unless it is paid in full”.

If you encounter such a restriction:

1. Check whether bills have been created for all lines.
2. Check whether outgoing payments have been allocated to bills.
3. Make sure bills and payments are not cancelled.

See also: [Settings](settings.md).
