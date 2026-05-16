---
title: Discount cards
---

A discount card identifies a customer at the [cash register](pos.md): when a card is entered on a receipt, the receipt’s customer is set from the card’s holder. A card does not carry a discount percentage of its own — any discount comes from the [discount rules](../sales/discounts.md) that apply to the linked customer.

## Where to find it

**“Retail” → “Configuration” → “Discount cards”**.

## Main card data

A discount card has:

- **number** — the card identifier; it is also the code scanned at the POS;
- **owner** — the customer the card belongs to;
- **issue date**;
- **block date** — set when the card is blocked.

## Issuing a card

A card can be created:

- in the **“Discount cards”** list — create a card and specify its owner;
- from a customer’s card — on the partner’s **“Discount cards”** tab, where a new card is created already linked to that customer.

The card number is assigned automatically by the numerator.

## Blocking a card

A card is blocked by setting a **block date**. The block date cannot be earlier than the issue date.

A blocked card cannot be used: at the POS the system shows **“Discount card blocked”** and does not attach it to the receipt; on an invoice the card fails validation.

## Using a card

- **At the POS** — enter or scan the card number in the barcode field. The card’s holder becomes the receipt customer (see [Cash register and POS](pos.md)).
- **On an invoice** — a discount card can be selected on a [sales invoice](../invoicing/invoices.md); selecting it fills in the customer, and the system checks that the card matches the customer and is not blocked.
