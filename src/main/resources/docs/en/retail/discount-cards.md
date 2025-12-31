---
title: Discount cards
---

A discount card is used to provide a **[discount](../sales/discounts.md)** and/or identify the customer during the sale.

## Where to find it

Usually: **“Retail” → “Configuration” → “Discount cards”**.

## Main card data

In a discount card, you typically specify:

- **card number**;
- **owner** (customer);
- **issue date**;
- **block date** (if the card is blocked).

## Issuing a card

1. Create a new discount card.
2. Specify the owner.
3. Check the card number (it is usually assigned automatically).

## Blocking a card

You can block a card by specifying a block date.

Restriction: the block date cannot be earlier than the issue date.

## Using it on a [receipt](pos.md)

How a discount card is used depends on your configuration:

- searching for a customer by number/card;
- selecting a customer manually;
- automatically applying a discount.

If a blocked card is selected, the system may disallow its use.