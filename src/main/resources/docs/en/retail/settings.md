---
title: Retail settings
---

This page describes the basic settings that affect how the **[cash register](pos.md)** and **[POS](pos.md)** work.

## Where to find it

Settings are usually located in **“Retail” → “Configuration” → “Settings”**.

In most configurations, the main directories (cash registers, payment methods, discount cards) are available directly from this section.

## Cash registers

A cash register is a workplace from which sales and returns are processed.

Where to find: usually **“Retail” → “Configuration” → “Cash registers”**.

Typically configured:

- cash register **name** and **code**;
- **company**;
- linking the cash register to a **computer** (so that a specific computer suggests “its” cash register);
- **accounts per payment method** — on a separate cash-register tab you can specify, for each **[payment method](payments.md)**, the **account** that payments received with that method are posted to.

> **Cash account.** For the **“Deposit cash”** and **“Withdraw”** operations to work on the POS screen (and for the **“Cash at the checkout”** balance to show in the header), the cash register must have an **account** specified for the **“Cash”** payment method. Until the cash account is set, the cash deposit and withdrawal buttons on the POS screen stay **disabled**. In addition, the corresponding **payment types** (a deposit type and a withdrawal type) must be configured in the settings for the deposit/withdrawal operations themselves.

## Sessions

**[Sessions](sessions.md)** are numbered automatically. The session numerator is selected on the **“Main”** tab of the Settings form.

## Payment methods

The list of payment methods is maintained in the Settings form (see also: **[Retail payments](payments.md)**). For each method you specify:

- **name** and **code**;
- the **“Cash”** flag — marks the method as cash (used to calculate change);
- the **incoming payment type** and the **return payment type** — the payment types used when the method is received in a sale and refunded in a return.

## Discount cards

**[Discount cards](discount-cards.md)** are numbered automatically; the discount-card numerator is selected on the **“Main”** tab of the Settings form. The card list itself is in **“Retail” → “Configuration” → “Discount cards”**.