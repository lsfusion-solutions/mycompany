---
title: Transport — user documentation
---

This documentation describes how to work with the **“Fleet”** section: maintaining vehicles, assigning drivers, recording vehicle services and related expenses, and configuring reference directories.

## Contents

- [Quick start](#quick-start)
- [Navigation](#navigation)
- [User roles and permissions](#user-roles-and-permissions)
- [Terms](#terms)

Sections:

- [Vehicles](vehicles.md)
- [Drivers](drivers.md)
- [Vehicle services](service.md)
- [Vehicle contracts](contracts.md)
- [Configuration](settings.md)

## Quick start

A typical scenario “add a vehicle and start tracking”:

1. Open **“Fleet” → “Operations” → “Vehicles”**.
2. If required values are missing in selection lists (for example, a model, category, or fuel type), first fill in the directories under **“Fleet” → “Configuration”** (see [Configuration](settings.md)).
3. Click **New** and fill in the main fields (usually: vehicle model, license plate, company).
4. If needed, add **[tags](vehicles.md)** and attach **[files](vehicles.md)** (photos/scans of documents).
5. Assign a driver (see **“Fleet” → “Operations” → “Drivers”**) and specify the assignment period.
6. When work/service is performed, create a vehicle service record (see **“Fleet” → “Operations” → “Vehicle services”**) and record the date, **[Type](settings.md)**, and **[Odometer value](service.md)**.

A typical scenario “record service expenses”:

1. Click **New** to create a vehicle service record and enter the cost (price/amount).
2. If your system uses **[Bill](../invoicing/bills.md)** documents, specify the **[Vendor](../masterdata/partners.md)** and the **[Bill](../invoicing/bills.md)** (if it is used in your organization).
3. To review history, use the vehicle card: it collects driver assignments, services, and related contracts.

## Navigation

The **“Fleet”** section usually contains groups:

- **Operations** — day-to-day work (vehicles, drivers, services, contracts).
- **Reporting** — reports and views (the set depends on configuration).
- **Configuration** — parameters and directories of the section.

Menu items and available actions depend on configuration and user permissions.

## User roles and permissions

The exact set of permissions depends on your organization settings. A typical responsibility split:

- **Fleet specialist** — maintains vehicles, driver assignments, and records services.
- **Accountant / cost controller** — controls expense accounting and linking services to settlement documents (if used).
- **Administrator** — configures directories and section parameters.

If some actions are not available (new/edit/delete, attaching files), this is usually due to permission limitations or section settings.

Most often the restrictions look like this:

- there are no **New/Edit/Delete** buttons in lists;
- you cannot add or delete a file in a card;
- you cannot create related records (for example, a driver assignment or a vehicle service) from the vehicle card.

## Terms

#### [Vehicle](vehicles.md)

A vehicle card with the main characteristics and related history (driver assignments, services, contracts).

#### [Driver](drivers.md)

An employee assigned to a vehicle for a specific period.

#### [Vehicle service](service.md)

A record of works/services performed for a vehicle with the date, **Odometer value**, and cost.

#### [Vehicle service type](settings.md)

A directory for classifying services (for example, scheduled maintenance, repair, tire service, etc.).

#### [Odometer value](service.md)

The mileage value at the time of an event (for example, driver assignment or service).

#### [Vehicle tag](settings.md)

An additional tag for a vehicle (for example, “Leasing”, “Reserve”, “Company car”).

#### [Vehicle contract](contracts.md)

A contract document/record linked to a vehicle (for example, rent, leasing, insurance) with dates and amounts.

#### Card

A screen for viewing and editing a selected record (for example, a vehicle, a service, or a driver assignment card).