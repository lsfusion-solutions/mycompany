# Inventory — user documentation

This documentation describes the **“Inventory”** section: locations, receipts, shipments, transfers, scrap, adjustments, picking tasks, lots and packages, as well as reports and ledgers.

## Contents

- [Quick start](#quick-start)
- [Navigation](#navigation)
- [Terms](#terms)

Sections:

- [Locations (warehouses and zones)](locations.md)
- [Receipts](receipts.md)
- [Shipments](shipments.md)
- [Transfers](transfers.md)
  - [Bulk transfer creation](transfer-bulk-create.md)
- [Scrap](scrap.md)
- [Adjustments](adjustments.md)
- [Picking tasks](picking.md)
- [Lots and packages](lots-and-packages.md)
- [Reports and ledgers](reports-and-ledgers.md)
- [Item costing](costing.md)
- [Settings](settings.md)

## Quick start

Below is a typical warehouse cycle.

1. Create/review **locations** (warehouse, zones, bins) if bin-level storage is required.
2. Create a **receipt**:
   - specify supplier (if used) and location;
   - add item lines and quantities;
   - move the receipt to execution and complete it.
3. Create a **shipment**:
   - specify customer (if used) and location;
   - add item lines and quantities;
   - run availability checks and reservation (if enabled);
   - perform picking (if used) and complete the shipment.
4. If needed, perform a **transfer** between locations (warehouses/zones).
5. Use **scrap** to record discrepancies (damage, losses, defects, expiry, etc.).
6. Periodically run **adjustments** and close them.

## Navigation

The “Inventory” section typically contains groups:

- **Operations** — documents (receipts, shipments, transfers, scrap, adjustments).
- **Processes** — tasks and processing panels (e.g., picking).
- **Reporting** — stock and movement reports.
- **Settings** — parameters and directories.

## Terms

#### Location

A warehouse, zone or bin where items are stored.

#### Receipt

A document that records goods coming into the location.

#### Shipment

A document that records goods going out of the location.

#### Transfer

A document that moves goods between locations.

#### Scrap

A document for writing off goods (damage, losses, defects, expiry, etc.).

#### Adjustment

A procedure for counting stock and recording variances.

#### Lot

A batch/serial identifier used for traceability.

#### Package

A packaging unit/container used for stock accounting.
