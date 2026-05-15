---
title: Manufacturing settings and directories
---

## Location

Open **"Manufacturing"** → **"Configuration"** → **"Settings"**.

## Manufacturing order types

The configuration includes a directory of manufacturing order types. Typically, a type defines:

- name and identifier;
- numerator (number generation);
- materials location (the default storage location for materials);
- the **Unbuild** flag — orders of this type perform [disassembly](unbuild.md) instead of production;
- the **Scrap type** — the type of [scrap](scrap.md) document created from an order of this type.

If only one type exists, it is used as the default.

## Statuses and the "Read-only" flag

The set of manufacturing order statuses is fixed — Draft, Waiting, Ready, In progress, Done, Canceled (see [workflow](workflow.md)) — you cannot add new ones. However, the Settings form shows the list of statuses, and each status has an editable **"Read-only"** flag: when it is on, any order in that status becomes non-editable (header and lines locked). This is how administrators usually lock, for example, Done and Canceled orders.

In addition, each individual manufacturing order has its own **"Read-only"** flag that locks just that document regardless of its status.

## Other directories in Configuration

The **Configuration** group also contains:

- **[BoM operations](bom.md)** — the directory of operations that can be referenced from a Bill of Materials;
- **[Work centers](work-orders.md)** — the directory of work centers used by work orders.

## Recommended setup order

1. Create manufacturing order types and configure their numerators and materials locations.
2. If you use [disassembly](unbuild.md), create a type with the **Unbuild** flag.
3. If you record [scrap](scrap.md), set the **Scrap type** on the relevant order types.
4. If you use [work orders](work-orders.md), create work centers and BoM operations.
