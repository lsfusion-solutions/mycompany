---
title: Locations (warehouses and zones)
---

## Purpose

A location is a directory entry that describes **where goods are physically stored**. The system stores all of them as a single **Location** entity organized in a parent–child tree of arbitrary depth — there are no separate "warehouse" / "zone" / "bin" classes. The role of a given node is just how your organization decides to use it; typically:

- top-level nodes represent warehouses;
- their children represent zones;
- the leaf nodes represent bins (addressed storage).

## Where it is used

Locations are used in almost all Inventory documents:

- [receipt](receipts.md) — where goods are received;
- [shipment](shipments.md) — where goods are shipped from;
- [transfer](transfers.md) — where goods are moved from and to;
- [scrap](scrap.md) — where goods are written off from;
- [adjustment](adjustments.md) — where inventory counting is performed.

## Location structure

Locations are organized hierarchically via a single **Parent** field that points to another location. Any node can have children, so the depth is arbitrary; the typical pattern is two or three levels:

- top level — warehouse;
- inside — zones;
- inside zones — bins.

The system also shows a **Tree** view next to the list view, which is the easiest way to navigate the hierarchy.

Recommendations:

1. If bin-level storage is not used, it is enough to create locations at the "warehouse" level.
2. If bin-level storage is used, create zones and bins so that users can conveniently select them in documents.

Optionally, the **Prohibit multiple root locations** setting can be enabled in **Inventory → Configuration → Settings**. With this setting on, the system rejects attempts to leave more than one location without a parent — the first (root) location can still be created without a parent, but every subsequent location must be attached to the existing tree.

## Other fields on a location

In addition to **Name**, **ID** and **Parent**, a location has:

- **For internal use** — flags purely-internal nodes (for example, transit zones).
- **Archived** — hides the location from the default list (the list filter "Active" is on by default).
- **Owner** (company) — the company that owns the storage.
- **Address / City / State / Postcode** — addressing fields. If they are empty on a child node, the system uses the values inherited from the nearest filled-in parent (canonical address).

## Typical rules

- When selecting a location in a document, make sure it matches your process (for example, a [shipment](shipments.md) should not be done from a "receiving zone" if it is disallowed by your procedures).
- If a document cannot be posted because of a missing location, check that the location in the document header is filled in.
- A location cannot be deleted while it has child locations.