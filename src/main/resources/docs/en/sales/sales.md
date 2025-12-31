---
title: Sales — user documentation
---

This documentation describes working in the **“Sales”** section: creating [sales orders](orders.md), generating [invoices](invoices.md), processing [shipments](shipments.md), calculating [discounts](discounts.md), working with [pricelists](pricelists.md), and [reporting](reports.md).

## Contents

- [Quick start](#quick-start)
- [Navigation](#navigation)
- [Terms](#terms)

Sections:

- [Sales orders](orders.md)
- [Sales order workflow and statuses](workflow-and-statuses.md)
- [Shipments for orders](shipments.md)
- [Invoices for orders](invoices.md)
- [Pricelists and price types](pricelists.md)
- [Discounts](discounts.md)
- [Reports](reports.md)
- [Settings](settings.md)

## Quick start

Typical scenario “create an order → ship → create an invoice”:

1. Open **“Sales” → “Operations” → “Sales orders”**.
2. Create a new order and fill in:
   - [customer](../masterdata/partners.md);
   - date and planned shipping date;
   - [location](../inventory/locations.md) and delivery address (if used);
   - order lines ([items](../masterdata/items.md), quantity, price).
3. Check amounts and taxes.
4. Confirm the order.
5. Create a [shipment](shipments.md) and/or [invoice](invoices.md) for the order (depending on your process).

## Navigation

The **“Sales”** section usually includes groups:

- **Operations** — daily work (orders, shipments, invoices).
- **Processes** — control and processing dashboards (if enabled).
- **Reporting** — sales reports.
- **Configuration** — parameters and master data.

## Terms

#### [Sales order](orders.md)

A document that records a customer’s intent to purchase goods/services, delivery terms, and the calculated amount.

#### [Order line](orders.md)

An item position in an order: what is sold, in what quantity, and at what price.

#### [Shipment](shipments.md)

A document that records the transfer of goods to the customer (physical inventory movement).

#### [Invoice](invoices.md)

A document that records the sale in accounting terms (revenue, taxes, totals, etc.).