---
title: Adjustment
---

Adjustment (inventory counting) is used to compare the system stock with the actual quantity in a [location](locations.md).

The adjustment moves through the following statuses: **Draft** → **In progress** → **Done**, with **Canceled** as an alternative terminal state. The variance per line is recalculated automatically while the document is in **In progress** (as counted quantity minus theoretical quantity), and the corresponding inventory ledger postings are written when the document is moved to **Done**.

## Typical flow

Below is the recommended sequence of steps. It works both for a full location adjustment (counting) and for counting a zone/bin.

1. **Preparation**
   - Define the **scope**: [location](locations.md)/zone/bin, item groups, whether you need [lot/package](lots-and-packages.md) accounting.
   - Fix the “snapshot” moment:
     - if possible, complete any open **[receipts](receipts.md)/[shipments](shipments.md)/[transfers](transfers.md)** for the selected [location](locations.md);
     - agree on operational rules for the counting period (e.g., do not post documents for that location, or record operations separately).
2. **Create the document**
   - Create an **adjustment** and specify the **[location](locations.md)**.
   - If needed, set additional parameters (for example, enable [lots](lots-and-packages.md)).
3. **Move to status `In progress`**
   - Move the adjustment to **`In progress`**.
   - After that, use the selected counting method: via lists (see below) or manual entry.
4. **Enter actual quantities**
   - Fill in **counted quantities** for items.
   - If lot/serial accounting is enabled, enter quantities **by [lot](lots-and-packages.md)**.
   - If bin-level storage is used, make sure you enter quantities for the **required zone/bin**.
5. **Review and reconcile**
   - The system continuously shows the **variance** for each line — counted quantity minus theoretical quantity — and provides quick filters for **Surplus** and **Missing** lines.
   - Check lines with zero/unexpected values.
   - If variances are large:
     - re-check **units of measure**;
     - verify that the selected **[location](locations.md)** matches the physical one.
   - If required, coordinate variances with the responsible person.
6. **Complete (move to Done)**
   - Move the adjustment to **Done**.
   - At that moment the system posts the variances to the inventory ledger so that stock balances match the counted quantities (within the accounting rules of your configuration).

## Adjustment lists

The system may use a separate “adjustment lists” mechanism:

- prepare the list of items to be counted;
- record counting results;
- transfer the results to the adjustment document.

Recommended approach:

1. Generate a list (by location/zone/bin, optionally with an item group filter).
2. Print/share the list with performers and capture counted quantities.
3. Upload/enter results into the list.
4. Transfer results to the adjustment document and follow **"Review and reconcile" → "Complete (move to Done)"**.

## Typical problems

- **Cannot complete** — counted quantities are not filled in or variances are not calculated.
- **Variances are too large** — check units of measure and the selected [location](locations.md).