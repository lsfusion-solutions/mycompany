# Marked goods (marking codes)

In some configurations, working with marking codes is required for specific item categories: a cashier must scan a marking code, and the system must validate it.

## When scanning is required

The requirement is defined by settings per item categories. If scanning is mandatory for the selected item and the code was not scanned, the system may:

- show a message that scanning is required;
- not add the item to the receipt.

## How a cashier works

1. Add a marked item to the receipt.
2. Scan the marking code.
3. Make sure the code is displayed in the line details.
4. Complete the sale and take payment.

## Code validation

Depending on settings, the system can validate codes:

- **online** (through an external service);
- **offline** (through a local module installed in the company).

If validation fails, the system will show an error message and the operation cannot be completed until the cause is resolved.
