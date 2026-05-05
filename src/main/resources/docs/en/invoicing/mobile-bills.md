---
title: Mobile bills
---

Mobile bills are a compact workflow for entering supplier [bills](bills.md) from a phone or tablet. The form is designed for quick expense or supplier-document entry: upload a file or photo, check the recognized data if recognition is configured, fill the amount or lines, and complete the bill when it is ready.

## Where to find it

Open **Mobile bill** from the dashboard or mobile menu.

The list shows bills assigned to the current user as the representative. If you do not see an expected bill, check who is assigned as its representative or open the regular [Bills](bills.md) list.

## Before you start

For the mobile flow to work smoothly:

- a bill type should be marked as **Mobile** in bill type settings;
- if only one mobile bill type is configured, it is selected automatically and the type field is hidden on the mobile card;
- for file recognition, the selected bill type must have an OpenAI import prompt configured;
- for completing the bill with an immediate outgoing payment, the current user must have a cash account configured.

If one of these options is missing, ask an administrator to check [Settings and directories](settings.md).

## Mobile bill list

The mobile list is intentionally short. It usually shows:

- date and time;
- vendor;
- amount;
- status.

Use the **Vendor** filter to narrow the list. Use **Add** to create a new mobile bill, **Edit** or double-click/tap a row to open an existing bill, and **Delete** for editable documents that were created by mistake.

## Creating a mobile bill

1. Open **Mobile bill**.
2. Click **Add**.
3. Check the bill header:
   - type, if it is shown;
   - date and time;
   - number;
   - vendor;
   - note.
4. Upload the supplier file/photo or fill the bill manually.
5. Check the amount, tax, and lines.
6. Confirm the form when the document is correct.

When a mobile bill type is selected automatically, the system also fills the current user as the representative and uses the user's company/cash settings where available.

## Uploading a file or photo

Use **Upload** on the mobile bill card to attach a supplier document.

Important details:

- the mobile card keeps one current file for the bill; uploading a new file replaces the previous attached file;
- if the bill type has an OpenAI prompt, upload also starts recognition from the selected file;
- after recognition, always review the vendor, number, dates, lines, taxes, and amount;
- if no prompt is configured, the file is attached, but the bill data must be entered manually.

Recognition uses existing master data. New vendors, items, currencies, or taxes are not created automatically.

## Lines and amount

The mobile card supports both quick amount entry and line entry:

- use **Untaxed amount** in the header for a simple bill with one amount;
- when the bill has several lines, enter amounts on the lines;
- each line can contain description, item/service, quantity, price, untaxed amount, and tax amount;
- add or delete lines as needed while the bill is editable.

If you enter a header untaxed amount on an empty bill, the system creates or updates the current bill line for that amount.

## Completing and payment

If the **Done** control is shown, it can complete the mobile bill and create a linked outgoing payment from the current user's cash account.

Use it only after checking:

- vendor;
- amount;
- tax;
- attached file;
- payment source.

When **Done** is selected, the system creates a completed [outgoing payment](outgoing-payments.md) for the remaining bill amount and matches it with the bill. If **Done** is cleared, the linked mobile outgoing payment is removed.

## Troubleshooting

#### I do not see the Mobile bill menu item

Your role or configuration may not include the mobile bill form. Ask an administrator to check access and enabled modules.

#### The type field is missing

This is normal when the system has a default mobile bill type. The type is selected automatically.

#### Upload does not recognize data

Check that the bill type has an OpenAI prompt configured, the OpenAI API key is set, and the file is readable. You can still enter the bill manually.

#### The Done control is missing

The current user may not have a cash account configured, or the bill may be read-only.

#### I cannot edit or delete a bill

Completed, canceled, or otherwise read-only bills cannot be edited from the mobile form. Use the regular [Bills](bills.md) workflow if the document needs correction.
