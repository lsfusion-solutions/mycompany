# Locations (warehouses and zones)

## Purpose

A location is a directory that describes **where goods are physically stored**. Depending on how warehouse accounting is configured, a location can be:

- a warehouse;
- a warehouse zone;
- a bin (addressed storage location).

## Where it is used

Locations are used in almost all Inventory documents:

- receipt — where goods are received;
- shipment — where goods are shipped from;
- transfer — where goods are moved from and to;
- scrap — where goods are written off from;
- adjustment — where inventory counting is performed.

## Location structure

Locations are usually organized hierarchically:

- top level — warehouse;
- inside — zones;
- inside zones — bins.

Recommendations:

1. If bin-level storage is not used, it is enough to create locations at the “warehouse” level.
2. If bin-level storage is used, create zones and bins so that users can conveniently select them in documents.

## Typical rules

- When selecting a location in a document, make sure it matches your process (for example, a shipment should not be done from a “receiving zone” if it is disallowed by your procedures).
- If a document cannot be posted because of a missing location, check that the warehouse/location in the document header is filled in.
