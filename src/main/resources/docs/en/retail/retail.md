---
title: Retail — user documentation
---

This documentation describes how to work with the **“Retail”** section: configuring **[cash registers](settings.md)**, managing **[sessions](sessions.md)**, processing sales and returns in **[POS](pos.md)**, applying **[discounts](../sales/discounts.md)** and **[discount cards](discount-cards.md)**, and taking **[payments](payments.md)**.

If some menu items or actions are missing in your configuration, this is normal: available functionality depends on enabled modules and settings.

## Who this section is for

The **“Retail”** section is typically used by:

- **Cashier** — processes sales and returns, takes payment, prints/sends a receipt to the customer.
- **Senior cashier / administrator** — opens and closes sessions, monitors operations for a cash register.
- **System administrator / person responsible for settings** — configures cash registers, payment methods, discount cards, and POS parameters.

## Contents

- [Quick start](#quick-start)
- [Navigation](#navigation)
- [Terms](#terms)

Sections:

- [Cash register and POS](pos.md)
- [Returns](returns.md)
- [Sessions](sessions.md)
- [Retail payments](payments.md)
- [Discount cards](discount-cards.md)
- [Settings](settings.md)

## Quick start

### Scenario: open a session → process a sale → take payment → close the session

1. Open **“Retail” → “Configuration” → “Settings”** and make sure that:
   - **cash registers** are created and (if needed) linked to computers;
   - **payment methods** are configured.
2. Open **“Retail” → “Operations” → “Sessions”**.
3. Open a session for the required cash register using **“Open session”**.
4. Open **“Retail” → “Operations”** and start **POS**.
5. Add items to the receipt (search / barcode scanning); if needed, apply a discount / discount card.
6. Proceed to payment, enter amounts by payment methods and confirm.
7. When finished, run **“Close session”**.

### Scenario: process a customer return

Processing a return depends on your configuration (for example, a return by the original receipt or a “free return”). Typical steps:

1. Open POS.
2. Switch to return mode (if used).
3. Specify the items and quantities to return.
4. Process the return payment (cash-out) using the selected payment method.

Details: [Returns](returns.md).

## Navigation

The **“Retail”** section typically contains groups:

- **Operations** — POS, sessions, receipt/operation lists within a session.
- **Configuration** — directories and parameters that affect how the cash register and payments work.

Typical menu items:

- **“Retail” → “Operations” → “Sessions”** — open/close and monitor sessions.
- **“Retail” → “Operations”** — POS.
- **“Retail” → “Configuration” → “Settings”** — section parameters.

## Terms

#### Cash register

A **[cash register](settings.md)** is a workplace used to process sales and returns. As a rule, a cash register is linked to a specific computer/device.

#### Session

A **[session](sessions.md)** is a period of cash register operation between **opening a session** and **closing a session**. POS operations are performed within an open session.

#### POS

**[POS](pos.md)** is a cashier screen for processing sales and returns: creating a receipt, adding items, applying discounts, and proceeding to payment.

#### Receipt

The result of processing a sale or return (in **[POS](pos.md)**): list of lines, prices, discounts, To pay, and payment method(s).

#### Payment method

A **[payment method](payments.md)** is a rule by which money is received (for example, cash or bank card) and the related financial operations are formed.

#### Discount card

A **[discount card](discount-cards.md)** is a customer card that can be used to provide a discount and/or identify a customer on the receipt.