---
title: Cash register and POS
---

This page describes how a cashier and an administrator work with a cash register: selecting a cash register, opening a **[session](sessions.md)**, creating a receipt, searching and scanning items, and the main actions in POS.

## Where to find it

- POS: **“Retail” → “Operations”**.
- Sessions: **“Retail” → “Operations” → “Sessions”**.

## Before you start

1. Make sure the cash register is configured and available on your computer (see [Settings](settings.md)).
2. Open a **[session](sessions.md)** for the selected cash register.

> If there is already an open session for the cash register, you will not be able to open a second session.

## Working with a receipt

In POS, you usually see:

- the current cash register and open **[session](sessions.md)**;
- the customer (if selected);
- receipt lines (item, quantity, price, discount);
- totals: amount, discount, To pay.

### Adding items

Available methods depend on your configuration. Most commonly used:

- **item search** (by name/code);
- **barcode scanning** — scan the code and the system will add the item to the receipt.

If a barcode is not recognized, the system will notify you.

### Changing quantity

You can change the line quantity manually (in the receipt line) or using the on-screen numeric keypad, if it is enabled in your configuration.

### Discounts

Depending on enabled modules and settings, the receipt line may provide:

- selecting a discount type;
- a manual discount;
- discount calculation by rules.

See also: [Discounts in sales](../sales/discounts.md).

### New receipt

POS provides the **“New receipt”** action — it clears the current receipt and creates a new one within the selected session.

## Customer

You can select a customer on the receipt (for example, by **[discount card](discount-cards.md)** or manually — depends on the configuration).
## Proceeding to payment

Payment is processed in a separate form. See details in [Retail payments](payments.md).

## Returns

A return is usually processed based on the original receipt: select a receipt in the list and run the **“Return”** action.

The detailed procedure (including return payment and typical restrictions): [Returns](returns.md).