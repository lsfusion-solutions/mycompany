# Adjustment

Adjustment (inventory counting) is used to compare the system stock with the actual quantity in a warehouse.

## Typical flow

Below is the recommended sequence of steps. It works both for a full warehouse adjustment (counting) and for counting a zone/bin.

1. **Preparation**
   - Define the **scope**: warehouse/zone/bin, item groups, whether you need lot/package accounting.
   - Fix the “snapshot” moment:
     - if possible, complete any open **receipts/shipments/transfers** for the selected location;
     - agree on operational rules for the counting period (e.g., do not post documents for that location, or record operations separately).
2. **Create the document**
   - Create an **adjustment** and specify the **location**.
   - If needed, set additional parameters (for example, enable lots).
3. **Move to status `In progress`**
   - Move the adjustment to **`In progress`**.
   - After that, use the selected counting method: via lists (see below) or manual entry.
4. **Enter actual quantities**
   - Fill in **counted quantities** for items.
   - If lot/serial accounting is enabled, enter quantities **by lot**.
   - If bin-level storage is used, make sure you enter quantities for the **required zone/bin**.
5. **Review and reconcile**
   - Check lines with zero/unexpected values.
   - If variances are large:
     - re-check **units of measure**;
     - verify that the selected **location** matches the physical one.
6. **Generate variances**
   - Calculate/generate **variances** (surplus/shortage).
   - If required, coordinate variances with the responsible person.
7. **Complete**
   - Complete the adjustment.
   - After completion, stock balances will be brought to the counted quantities (within the accounting rules of your configuration).

## Adjustment lists

The system may use a separate “adjustment lists” mechanism:

- prepare the list of items to be counted;
- record counting results;
- transfer the results to the adjustment document.

Recommended approach:

1. Generate a list (by location/zone/bin, optionally with an item group filter).
2. Print/share the list with performers and capture counted quantities.
3. Upload/enter results into the list.
4. Transfer results to the adjustment document and follow **“Review and reconcile” → “Generate variances” → “Complete”**.

## Typical problems

- **Cannot complete** — counted quantities are not filled in or variances are not calculated.
- **Variances are too large** — check units of measure and the selected location.
