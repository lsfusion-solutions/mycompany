---
title: Retail returns
---

This page describes a typical process of returning goods by a customer in **[POS](pos.md)**: how to find the original receipt, create a return by receipt lines, and pay out funds.

> If some actions or fields are missing in your configuration, this is normal: the set of available features depends on enabled modules and settings.

## Where to find it

- POS: **“Retail” → “Operations”**.

## Before processing a return

1. Make sure there is an open session for the cash register (see [Sessions](sessions.md)).
2. Prepare information about the original sale:
   - receipt number (if known);
   - purchase date/time;
   - purchased items and approximate quantities.

## Return by original receipt

This is the main scenario: the return is processed based on a previously issued sales receipt.

### Step 1. Find the original receipt

POS usually provides a list of receipts. Switch the list filter to see the required receipt:

- **by current session**;
- **by cash register**.

Select the original sales receipt in the list.

### Step 2. Create a return

Run the **“Return”** action.

The system will create a return for the selected receipt and typically:

- fills the customer from the original receipt;
- fills return lines with items from the original receipt;
- copies prices/discounts so that the return amount matches the selected items and quantities.

### Step 3. Adjust items and quantities being returned

Check the return lines:

1. If not everything is returned, decrease the quantity for the required lines.
2. If a line should not be returned, delete it from the return.

If return quantity control is enabled in your configuration, the system will not allow returning more than was sold in the original receipt.

### Step 4. Pay out funds (return payment)

The pay-out is processed in a separate return payment form:

1. Check the return amount.
2. Enter amounts for one or multiple payment methods.
3. Confirm the pay-out.

#### Important rule about payment methods

In some configurations, there is a restriction: **you cannot return more by a specific payment method than was paid by that payment method in the original receipt**.

Example: if the purchase was paid partly in cash and partly by bank card, then the return usually has to be split by the same payment methods within the paid amounts.

After confirming the return payment, POS usually creates a new receipt for further work.

## Common cases

### Cannot process a return: there is no open session

Open a session for the required cash register and try again. Returns are processed within a session.

### Cannot confirm the return payment amount

Check that:

- the total amount across all selected payment methods is **equal** to the return amount;
- for each payment method, the return amount does not exceed the amount paid by that payment method in the original receipt (if such restriction is enabled).

### No original receipt

In the basic scenario, a return is processed by the original receipt. If you do not have a receipt:

1. Try to find the sale by date/time and cash register.
2. If the sale is not in the list, contact an administrator (you may need additional permissions or a different return scenario in your configuration).