---
title: Assets and depreciation
---

## Where to find it

Open:

- **Accounting -> Operations -> Assets**
- **Accounting -> Operations -> Asset depreciations**

## Asset card

The asset card contains:

- **Number**
- **Item**
- **Company**
- **Type**
- **Acquisition date**
- **Depreciation start date**
- **Useful life, months**
- **Acquisition cost**
- **Salvage value**
- **Depreciable amount**
- **Monthly depreciation**
- **Depreciation end date**
- **Note**

Defaults filled by the system:

- **Company** defaults to the current default company;
- **Depreciation start date** defaults to the acquisition date;
- **Useful life, months** defaults from the selected asset type;
- **Number** is generated from the asset type numerator.

## Asset tabs

The asset card has tabs for:

- **Depreciation** - planned depreciation rows
- **Journal entries** - acquisition and depreciation postings linked to the asset
- **History** - audit trail of company/type changes
- **Files**
- **Comments**

## Depreciation calculation

Use **Calculate depreciation** on the asset card to build monthly depreciation rows.

The calculation:

- creates one row per month of useful life;
- prorates the first month from the depreciation start date to month end;
- adjusts the last month so the total matches the full depreciable amount.

The asset list also shows the current **Book value**.

## Journal entries for assets

Use **Generate** or **Regenerate** in the asset's **Journal entries** tab.

The module creates:

- one acquisition journal entry based on the asset's acquisition date and cost;
- depreciation journal entries for depreciation rows up to the current date.

Generation uses the journal and accounts defined on the asset type:

- **Fixed asset account**
- **Acquisition account**
- **Depreciation account**
- **Expense account**

If the lock date is set, generation skips acquisition or depreciation dates before that lock date.

## Asset depreciations list

The **Asset depreciations** list shows:

- asset number
- asset type
- asset name
- company
- depreciation date
- depreciation amount
- linked journal entry number
- posted status of the linked journal entry

## Creating an asset from a bill

If a bill type has an asset type assigned, bill lines can create assets automatically. See [Posting from source documents](source-documents.md).
