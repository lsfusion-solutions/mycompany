---
title: Vehicles
---

The section is intended for maintaining the list of vehicles and viewing all related information: [driver assignments](drivers.md), [services](service.md), [contracts](contracts.md), and attached files.

A vehicle card is an “aggregation point” for a specific car: it is convenient to control who is currently assigned to the vehicle, what services were done, which contracts are active, and to store documents.

## Where to find it

Open **“Fleet” → “Operations” → “Vehicles”**.

To open a vehicle card, select a row in the list and use **Edit** (or open the record by double-clicking, if that is the practice in your organization).

## Vehicles list

The list usually shows the main vehicle data (vehicle model, license plate, company, vehicle category, fuel type, etc.).

Typical actions in the list:

- **New** — add a new vehicle.
- **Edit** — open the selected vehicle card.
- **Delete** — delete the record (if permitted by rights and there are no restrictions due to related data).

For quick search and control, use filters and sorting. In practice, they most often filter:

- by company;
- by vehicle category;
- by tags;
- by current driver (if it is displayed in the list).

## Creating a vehicle

1. Click **New**.
2. Fill in required and main fields (depending on configuration):
   - vehicle model;
   - license plate;
   - company;
   - vehicle category, fuel type, year of manufacture, and other characteristics.
3. Save the record.

### Filling recommendations

- **Vehicle model**. If the required model is missing, it is usually added under **“Fleet” → “Configuration”** (if you have permissions).
- **License plate**. Enter it in a single format accepted in the organization to simplify search.
- **VIN**. If used, fill it in according to documents, without spaces or extra symbols.
- **Category, fuel type, year of manufacture and other characteristics** help build reports and plan maintenance.

## Editing and deleting

To change data:

1. Select a vehicle in the list.
2. Click **Edit**.
3. Make changes and save the card.

Deletion is usually restricted by permissions and may be unavailable if the vehicle already has history (driver assignments, services, contracts, files). If deletion is prohibited, use your organizational rules (for example, a note or a “Not used” tag), if this is the practice in your company.

## Tags

Tags are used as additional labels for convenient filtering and control. The list of available tags is configured in [Configuration](settings.md).

To assign tags to a vehicle:

1. Open the vehicle card.
2. In the tags field, select the required values.

Examples of using tags:

- separating vehicles by purpose (company, reserve);
- status control (under repair, leasing/rent);
- quick selections in lists.

## Files

You can attach files to a vehicle (for example, photos, scans of documents).

Typical workflow:

1. Open the vehicle card.
2. Go to the **Files** block.
3. Click **File** to add a file and, if needed, fill in the description.

The ability to add/delete files depends on permissions.

Recommendations:

- attach documents that are important to find quickly (insurance, contract, powers of attorney, condition photos);
- in the file description, specify what the document is and for which period it is valid.

## Related data on the vehicle card

The vehicle card usually contains blocks:

- **[Drivers](drivers.md)** — driver assignments with dates.
- **[Vehicle services](service.md)** — service and expense history.
- **[Contracts](contracts.md)** — linked contracts.

To add a record in a related block, use **New** in the corresponding table.

For the **Contracts** block on the vehicle card, use **Add**.

### How to understand who the “current driver” is

The current driver is determined from driver assignments for the selected date (usually the current date). If an assignment is closed with an end date, after that date the driver is considered not assigned.

If the current driver is displayed incorrectly:

1. Open the **Drivers** block in the vehicle card.
2. Check the assignment start/end dates.
3. Make sure the periods do not overlap and that the previous assignment is closed with an end date.