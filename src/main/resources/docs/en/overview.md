---
title: System Modules — Overview
slug: /
---

This document is an **overview of MyCompany functional modules**: what each section is responsible for, which user tasks it solves, how modules are linked into end‑to‑end processes, and where to go for detailed instructions.

If some menu items or actions are missing in your configuration, that is normal: the available functionality depends on enabled modules, settings, and user permissions.

## Quick navigation

- [Administration](administration/administration.md)
- [Master Data](#master-data)
- [Module map and end-to-end processes](#module-map-and-end-to-end-processes)
- [Modules](#modules)
  - [Master Data](#master-data)
  - [Inventory](#inventory)
  - [Invoicing](#invoicing)
  - [Purchase](#purchase)
  - [Manufacturing](#manufacturing)
  - [Sales](#sales)
  - [Retail](#retail)
  - [Project Management](#project-management)
  - [Human Resources](#human-resources)
  - [CRM](#crm)
  - [Transport](#transport)

## Module map and end-to-end processes

Below are typical “chains” between modules. In a particular organization, some steps may be disabled or configured differently.

### Sales (lead-to-cash)

1. **CRM** — working with the lead and communications.
2. **Sales** — customer order, shipment terms.
3. **Inventory** (if the warehouse contour is used) — shipment / goods movement.
4. **Retail** — POS, sessions, receipt, payment.
5. **Invoicing** — invoice and incoming payment → accounts receivable control.

### Purchase (procure-to-pay)

1. **Purchase** — supplier order and fulfillment control.
2. **Inventory** (if the warehouse contour is used) — receipt / warehouse movements.
3. **Invoicing** — bill and outgoing payment → accounts payable control.

### Manufacturing (plan-to-produce)

1. **Sales** — demand source (customer order) or internal plan.
2. **Manufacturing** — BOM → production order → production / consumption.
3. **Inventory** — raw materials / finished goods (stock, lots / packages — if enabled).
4. **Purchase** / **Invoicing** — replenishment and cost accounting (if the process is run end‑to‑end).

### Projects and time tracking

1. **Project Management** — project → tasks → time entries.
2. **Human Resources** (if time-based payroll is enabled) — using time entries in payroll calculation and payment.

### Transport and expenses

1. **Transport** — vehicles / drivers / services / contracts.
2. Related expenses can be reflected in **Invoicing** (bills / payments) and/or **Purchase** (supplier orders) — if enabled and used.

## Modules

### Master Data

Start documentation: [masterdata/masterdata.md](masterdata/masterdata.md)

**Purpose.** A section for maintaining base reference data used in documents and processes of other modules.

**Typical scenarios:**

- create items and keep them up to date;
- maintain partners, their contact details and addresses;
- maintain classification (categories), units of measure;
- maintain countries, currencies and exchange rates;
- register contracts with partners.

**Key objects:** partner, item, category, unit of measure, department, country, currency, exchange rate, contract.

**Who it’s useful for:** users responsible for maintaining reference data (administrators, accounting/finance, purchase/sales managers — depending on the process).

**Read next:**

- [Master Data](masterdata/masterdata.md)

### Inventory

Start documentation: [inventory/inventory.md](inventory/inventory.md)

**Purpose.** Warehouse contour: locations, receipts / shipments, transfers, scrap, adjustments, picking, lots and packages (if enabled), stock and movement reports.

**Typical scenarios:**

- create a receipt and complete the document;
- create a shipment for an order / invoice and close the movement;
- transfer between locations (warehouses / zones / bins);
- run an adjustment and record variances;
- organize picking, if used.

**Key objects/documents:** location, receipt, shipment, transfer, scrap, adjustment, lot, package.

**Who it’s useful for:** warehouse staff, logistics, warehouse managers; and in combination — sales / purchase.

**Integrations:** often the “physical” part of [Sales](#sales), [Purchase](#purchase), [Manufacturing](#manufacturing) processes and can be linked to [Invoicing](#invoicing) documents.

**Read next:**

- [Receipts](inventory/receipts.md)
- [Shipments](inventory/shipments.md)
- [Transfers](inventory/transfers.md)
- [Adjustments](inventory/adjustments.md)
- [Picking tasks](inventory/picking.md)
- [Inventory SKUs](inventory/product-sku.md)
- [Lots and packages](inventory/lots-and-packages.md)

### Invoicing

Start documentation: [invoicing/invoicing.md](invoicing/invoicing.md)

**Purpose.** Financial settlements contour: bills and invoices, payments (incoming / outgoing), debt, payment calendar, taxes, printing and reporting.

**Typical scenarios:**

- create an invoice and register an incoming payment with allocation;
- create a bill from a supplier and pay it (outgoing payment);
- control receivables / payables by partners, contracts and documents;
- manage the payment calendar (if used).

**Key objects/documents:** invoice, bill, incoming payment, outgoing payment, debt.

**Who it’s useful for:** managers (payment control), accounting / finance (payment registration and allocation, reporting).

**Integrations:**

- with [Sales](#sales) — invoices and customer payments;
- with [Purchase](#purchase) — bills and supplier payments;
- with [Inventory](#inventory) — an invoice can create a shipment (if enabled).

**Read next:**

- [Invoices](invoicing/invoices.md)
- [Bills](invoicing/bills.md)
- [Payments](invoicing/payments.md)
- [Incoming payments](invoicing/incoming-payments.md)
- [Outgoing payments](invoicing/outgoing-payments.md)
- [Debt and payment calendar](invoicing/debt-and-calendar.md)

### Purchase

Start documentation: [purchase/purchase.md](purchase/purchase.md)

**Purpose.** Purchase contour: supplier orders, supplier price lists, receipts / bills, and fulfillment control (what was ordered, what is received, what remains).

**Typical scenarios:**

- create a supplier order → confirm / send → receive goods (if inventory is used) → create a bill → pay;
- use price lists as a source of prices and terms;
- analyze fulfillment and lead times.

**Key objects/documents:** supplier order, receipt, bill, price list.

**Who it’s useful for:** purchase managers, warehouse / logistics, finance.

**Integrations:**

- with [Inventory](#inventory) — receipts / movements;
- with [Invoicing](#invoicing) — bills and outgoing payments.

**Read next:**

- [Supplier orders](purchase/orders.md)
- [Receipts for supplier orders](purchase/receipts.md)
- [Bills for supplier orders](purchase/bills.md)
- [Supplier price lists](purchase/pricelists.md)
- [Purchase reports](purchase/reports.md)

### Manufacturing

Start documentation: [manufacturing/manufacturing.md](manufacturing/manufacturing.md)

**Purpose.** Manufacturing contour: bills of materials, planning and execution of production orders, material reservation, production and consumption, scrap / waste, printing and reports.

**Typical scenarios:**

- create / verify a product bill of materials → create a production order → reserve materials → start → record production / consumption → complete;
- create production orders based on customer orders (if enabled);
- control costing and lots (if used).

**Key objects/documents:** bill of materials, production order, material reservation, production and consumption.

**Who it’s useful for:** production dispatchers, foremen, planners, warehouse (materials / finished goods).

**Integrations:** tightly connected to [Inventory](#inventory) (materials / output) and can be linked to [Sales](#sales) (demand) and [Purchase](#purchase) (material replenishment).

**Read next:**

- [Bills of materials](manufacturing/bom.md)
- [Production orders: list and card](manufacturing/orders.md)
- [Production order workflow and statuses](manufacturing/workflow.md)
- [Production and consumption](manufacturing/production-and-consumption.md)
- [Costing: how it is calculated](manufacturing/costing.md)

### Sales

Start documentation: [sales/sales.md](sales/sales.md)

**Purpose.** Sales management contour: customer orders, workflow / statuses, shipments and invoices for orders, price lists / price types, discounts and reporting.

**Typical scenarios:**

- create a customer order → confirm → create a shipment and/or invoice (depending on the process);
- manage pricing via price lists and price types;
- calculate and control discounts;
- analyze sales and order fulfillment.

**Key objects/documents:** customer order, order line, shipment, invoice.

**Who it’s useful for:** sales managers, sales leads, warehouse (for shipments).

**Integrations:**

- with [Inventory](#inventory) — shipment and reservation / availability (if enabled);
- with [Invoicing](#invoicing) — invoices and payment control.

**Read next:**

- [Customer orders](sales/orders.md)
- [Order workflow and statuses](sales/workflow-and-statuses.md)
- [Shipments for orders](sales/shipments.md)
- [Invoices for orders](sales/invoices.md)
- [Price lists and price types](sales/pricelists.md)
- [Discounts](sales/discounts.md)

### Retail

Start documentation: [retail/retail.md](retail/retail.md)

**Purpose.** Retail sales via POS: session management, sales and returns, discounts and discount cards, payment acceptance.

**Typical scenarios:**

- configure POS and payment methods → open a session → create a sale in POS → accept payment → close the session;
- create a return (by receipt or in “free” mode — depends on configuration);
- use discount cards and discounts;
- work with marked goods (if enabled).

**Key objects/documents:** POS, session, receipt, payment method, discount card.

**Who it’s useful for:** cashiers, senior cashiers / store administrators, configuration owners.

**Integrations:** depending on settings, it can send results to [Sales](#sales) and/or [Invoicing](#invoicing).

**Read next:**

- [POS](retail/pos.md)
- [Sessions](retail/sessions.md)
- [Retail payments](retail/payments.md)
- [Returns](retail/returns.md)
- [Discount cards](retail/discount-cards.md)

### Project Management

Start documentation: [projectManagement/projectManagement.md](projectManagement/projectManagement.md)

**Purpose.** Project contour: projects and tasks, team and roles, time entries and timesheets, control views (e.g., boards / Gantt) and reporting.

**Typical scenarios:**

- create a project → build a task plan → assign assignees and due dates;
- track progress via task statuses and comments;
- record effort using time entries;
- collect timesheets and actuals reports.

**Key objects:** project, task, assignment (role / participation), time entry, status / workflow.

**Who it’s useful for:** project managers, assignees, team leads.

**Integrations:** if time-based pay is enabled, it is used together with [Human Resources](#human-resources).

**Read next:**

- [Projects](projectManagement/projects.md)
- [Tasks](projectManagement/tasks.md)
- [Time entries](projectManagement/time-entries.md)
- [Timesheet](projectManagement/timesheets.md)
- [Project team and roles](projectManagement/team-and-roles.md)

### Human Resources

Start documentation: [humanResources/humanResources.md](humanResources/humanResources.md)

**Purpose.** HR module: recruitment, attendance tracking (check in / check out), payroll calculation and payment.

**Typical scenarios:**

- candidate application → questionnaire → interview → decision (hire / reject);
- track working time (mobile check‑in / kiosk — if used);
- create a payroll batch → get payslips → register payment (if maintained in the system).

**Key objects/documents:** candidate application, interview, attendance, payroll batch, payslip.

**Who it’s useful for:** recruiters, HR specialists, payroll accountants / finance, department managers.

**Integrations:** if time-based payroll logic is enabled, it may use time entries from [Project Management](#project-management).

**Read next:**

- [Recruitment](humanResources/recruitment.md)
- [Attendance](humanResources/attendance.md)
- [Payroll: calculation and payment](humanResources/payroll.md)
- [Payslip](humanResources/payslip.md)
- [How the “Net to pay” total is calculated](humanResources/net-wage.md)

### CRM

Start documentation: [crm/crm.md](crm/crm.md)

**Purpose.** A module for working with leads (pipeline): from the first contact to handing over to sales. The focus is a convenient lead card, status management, and interaction history.

**Typical scenarios:**

- handle an incoming call / email → create a lead or attach a communication to an existing one;
- move the lead through stages (statuses) on a kanban board;
- record agreements and the “next step”;
- create related documents (e.g., an order / an invoice), if configured.

**Key objects:** lead, lead type, lead status, lead priority, lead tags, communications.

**Who it’s useful for:** sales managers and sales leads (pipeline control and lead handling quality).

**Read next:**

- [Leads: list and card](crm/leads.md)
- [Lead board (kanban)](crm/kanban.md)
- [Communications: calls and emails](crm/communications.md)
- [Orders and invoices from a lead](crm/sales-and-documents.md)
- [Lead report](crm/reports.md)

### Transport

Start documentation: [transport/transport.md](transport/transport.md)

**Purpose.** Transport accounting: vehicles, driver assignments, services (work / expenses), vehicle contracts, and reference data settings.

**Typical scenarios:**

- create a vehicle card, fill reference data (model, fuel type, etc.);
- assign drivers to vehicles by periods;
- record services with date, type, mileage and cost;
- manage contracts (rent / leasing / insurance, etc.) and control due dates.

**Key objects:** vehicle, driver, vehicle service, vehicle contract, tags and files.

**Who it’s useful for:** transport specialists, accounting (expense control), administrators (reference data settings).

**Read next:**

- [Vehicles](transport/vehicles.md)
- [Drivers](transport/drivers.md)
- [Vehicle services](transport/service.md)
- [Vehicle contracts](transport/contracts.md)
- [Settings](transport/settings.md)