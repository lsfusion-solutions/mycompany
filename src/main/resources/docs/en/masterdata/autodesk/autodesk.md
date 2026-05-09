---
title: Autodesk integration — user documentation
---

This documentation describes how to use the **Autodesk** integration in MyCompany: how to connect to Autodesk Platform Services (APS), how to upload and translate 3D models, and how to view those models inside **[Projects](../../projectManagement/projects.md)**, **[Bills of Materials](../../manufacturing/bom.md)**, and **[Manufacturing orders](../../manufacturing/orders.md)**.

The integration is built on top of [Autodesk Platform Services](https://aps.autodesk.com) (formerly Autodesk Forge) and uses the APS Viewer to display SVF2 models in the browser.

## Contents

- [Quick start](#quick-start)
- [Navigation](#navigation)
- [Terms](#terms)

Sections:

- [Setup](autodesk-setup.md) — creating an APS application and entering credentials.
- [Buckets and models](autodesk-buckets-and-models.md) — uploading source files, translation to SVF2, viewables and elements.
- [Viewer in forms](autodesk-viewer.md) — showing the 3D model on a project, a BoM, or a manufacturing order.

## Quick start

A typical scenario *“connect APS → upload a model → see it on a project”*:

1. Create an Autodesk Platform Services application and copy its **Client ID** and **Client Secret**. See [Setup](autodesk-setup.md).
2. In MyCompany, open the **integrations** form, find the **Autodesk** pane, and paste the **Key** (Client ID) and **Secret** (Client Secret).
3. Enable Autodesk on your user profile: open **Edit profile**, tick **Autodesk**, save.
4. Create a **bucket** (a container for source files in APS) — see [Buckets and models](autodesk-buckets-and-models.md#buckets).
5. **Load** a Revit / IFC / DWG / NWD file into the bucket and **Put** it (upload binary to APS).
6. **Transform** the model to SVF2 and **Get status** until it shows *success*.
7. Link the model to a **[Project](../../projectManagement/projects.md)**, **[BoM](../../manufacturing/bom.md)**, or **[Manufacturing order](../../manufacturing/orders.md)** via the **Autodesk** tab on the corresponding form.
8. Open that form — the 3D viewer renders the model directly in the page.

## Navigation

The Autodesk feature appears in three places:

- **Master Data → Autodesk** — the standalone page where buckets, models, viewables, elements and properties live.
- **integrations** form (administration) — where the Client ID / Client Secret and bucket list are configured.
- An **Autodesk** tab on the **[Project](../../projectManagement/projects.md)**, **[BoM](../../manufacturing/bom.md)**, and **[Manufacturing order](../../manufacturing/orders.md)** forms — where end users actually look at the model.

The exact menu placement and visibility depend on user permissions and on whether the user has **Autodesk** enabled on their profile.

## User roles and permissions

- **Administrator** — sets up the APS application, enters credentials, creates buckets, uploads source files, kicks off translation. See [Setup](autodesk-setup.md) and [Buckets and models](autodesk-buckets-and-models.md).
- **Engineer / project participant** — links an existing model to a project / BoM / manufacturing order and views it through the embedded viewer. See [Viewer in forms](autodesk-viewer.md).
- **Read-only viewer** — sees the model on the form but does not change links or trigger translations.

If the **Autodesk** tab does not appear on a form, check: *(a)* the **Autodesk** flag on your user profile, *(b)* whether a model has been linked to the underlying object, *(c)* whether translation finished successfully (the model must have status *success*).

## Terms

#### Bucket

A **[bucket](autodesk-buckets-and-models.md#buckets)** is an APS storage container for source files. Bucket keys are unique across **all of APS** (not just your tenant), so they need a unique prefix.

#### Model

A **[model](autodesk-buckets-and-models.md#models)** is one source file (Revit, IFC, DWG, NWD, etc.) uploaded into a bucket. Each model has its own translation status and SVF2 derivative.

#### Viewable

A **[viewable](autodesk-buckets-and-models.md#viewables)** is one renderable view of a model — typically a 3D scene or a 2D sheet. A single Revit file can produce many viewables.

#### Element

A **[element](autodesk-buckets-and-models.md#elements-and-properties)** is one object inside a viewable — a wall, a column, a fixture. The element tree mirrors the Revit / IFC hierarchy.

#### Item

An **[item](../items.md)** can have one or more Autodesk models linked — see [Linking to an Item](autodesk-buckets-and-models.md#linking-to-an-item). This is the broadest linkage: an item-linked model automatically appears on the item form, on every BoM for that item, and on every manufacturing order for that item.

#### Bill of Materials (BoM)

A **[Bill of Materials](../../manufacturing/bom.md)** in MyCompany can be linked to one or more Autodesk models — see [Linking to a BoM](autodesk-buckets-and-models.md#linking-to-a-bom) — so that the corresponding 3D geometry is shown next to the BoM components. Models linked to the BoM's item also appear here.

#### Manufacturing order

A **[manufacturing order](../../manufacturing/orders.md)** displays the Autodesk model linked to its Bill of Materials **or** to its item, so a shop-floor user sees the geometry that matches the production order — see [On a manufacturing order](autodesk-viewer.md#on-a-manufacturing-order).

#### Project

A **[project](../../projectManagement/projects.md)** can have one or more Autodesk models linked, viewed under its Autodesk tab — see [On a project](autodesk-viewer.md#on-a-project).
