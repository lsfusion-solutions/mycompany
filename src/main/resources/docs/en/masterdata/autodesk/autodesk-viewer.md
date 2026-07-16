---
title: Viewer in forms
---

This page explains how end users interact with the 3D model from inside MyCompany. Setup of credentials is on the [Setup](autodesk-setup.md) page; the upload and translation flow is on [Buckets and models](autodesk-buckets-and-models.md).

## Prerequisites

Before the viewer becomes visible on any form:

1. The administrator has connected MyCompany to APS — see [Setup](autodesk-setup.md).
2. A model has been uploaded, translated to SVF2, and reached **Transform status** = `success` — see [Buckets and models](autodesk-buckets-and-models.md).
3. The model's **Viewables** and **Elements** have been fetched on the standalone **Master data → Autodesk** page (the embedded forms only display what was fetched there; they have no fetch buttons of their own). For tree ↔ scene selection to work, also fetch **Properties** — the matching uses element external IDs that come with the properties.
4. The model has been linked to the [item](../items.md) / [project](../../projectManagement/projects.md) / [BoM](../../manufacturing/bom.md) you intend to open.
5. **Your user profile has the Autodesk flag enabled.** Open **Edit profile**, tick **Autodesk**, save, and reload the page.

If the **Autodesk** tab still does not appear after the page reload, re-check the **Autodesk** flag on your profile. If the tab is visible but empty, no *ready* model is linked to the object you opened — link one on the standalone **Master data → Autodesk** page.

## On a project

1. Open a [project](../../projectManagement/projects.md) from **Projects → Operations → Projects**.
2. Switch to the **Autodesk** tab in the project's details area.

The tab is laid out in two rows:

- **Top row** — two PANEL selectors:
  - **Model** — picks among all *ready* models linked to this project. If only one model is linked, it is selected automatically.
  - **Viewable** — picks among the viewables fetched for the selected model; it determines which element tree is shown (the 3D scene itself always renders the model's default view).
- **Bottom row** — split horizontally:
  - **Element tree** on the left — hierarchical list of objects in the selected viewable;
  - **3D viewer** on the right — Autodesk's APS Viewer rendering the SVF2.

#### Picking and isolating elements

- Click an element in the tree → the viewer highlights and zooms to that element.
- Click an element directly in the 3D scene → the tree expands to that element and selects it.

#### What if I have multiple models on one project?

The **Model** selector lets you switch between them. Linking is many-to-one (many models → one project), so a project that combines architecture + structure + MEP can keep all three models linked and switch on demand. The link itself is set on the standalone Autodesk page — see [Linking to a Project](autodesk-buckets-and-models.md#linking-to-a-project).

## On an item

1. Open **Master data → Items** — see [Items](../items.md) for the underlying article.
2. Pick an item and open it.
3. Switch to the **Autodesk** tab.

This is the most useful linkage for catalogue / product-design work: link a model to an item once and it shows up on:

- the item's own **Autodesk** tab;
- every [BoM](../../manufacturing/bom.md) whose item matches;
- every [manufacturing order](../../manufacturing/orders.md) whose item matches.

The link itself is set on the standalone Autodesk page — see [Linking to an Item](autodesk-buckets-and-models.md#linking-to-an-item).

## On a Bill of Materials

1. Open **Manufacturing → Operations → Bills of Materials** — see [Bills of Materials](../../manufacturing/bom.md) for the underlying article.
2. Pick a [BoM](../../manufacturing/bom.md) and open it.
3. Switch to the **Autodesk** tab.

The layout matches the project form: **Model** selector on top, **Viewable** selector beside it, element tree on the left, 3D viewer on the right. The **Model** selector lists models linked **either directly to this BoM** (via the *Bill of Materials* field on the model) **or to the BoM's item** (via the *Item* field on the model). See [Linking to a BoM](autodesk-buckets-and-models.md#linking-to-a-bom) and [Linking to an Item](autodesk-buckets-and-models.md#linking-to-an-item) for how to set up either link.

#### Use case

Link the model that contains the assembly to the BoM (or to the BoM's item), then component lines on the BoM and elements in the model can be cross-referenced visually — useful for engineering reviews and for checking that the BoM matches what the design actually requires.

## On a manufacturing order

1. Open **Manufacturing → Operations → Manufacturing orders** — see [Manufacturing orders](../../manufacturing/orders.md) for the underlying article.
2. Pick an [order](../../manufacturing/orders.md) and open it.
3. Switch to the **Autodesk** tab.

The viewer picks up models that are linked **either to the [BoM](../../manufacturing/bom.md) the order is built against** **or to the order's item**. So a model appears here if any of the following is true:

- the model has its **Bill of Materials** field set to the order's BoM — see [Linking to a BoM](autodesk-buckets-and-models.md#linking-to-a-bom);
- the model has its **Item** field set to the order's item — see [Linking to an Item](autodesk-buckets-and-models.md#linking-to-an-item).

In practice the *Item* link is the cleanest path for catalogue items that get manufactured repeatedly: link once, every order for that item shows the model.

## What the viewer can do

The embedded viewer is the standard Autodesk APS Viewer (v7), so:

- **Orbit / pan / zoom** with the mouse and scroll wheel.
- **Section box** — slice the model with a clipping plane.
- **Properties panel** — opens APS's own panel with full metadata for the selected element.
- **Measure** — distance, angle, area between two picks.
- **Walk / first-person** mode for buildings.
- **Settings** — change background, ambient occlusion, lighting, etc.

These are Autodesk's tools, not MyCompany's — their availability depends on the viewer version Autodesk currently publishes. The MyCompany layer adds:

- The **Element tree** linked bidirectionally to the 3D scene.
- The **Model / Viewable** selectors filtered to what is relevant to the form you are on.
- The element selection event (clicking an element in the viewer expands and selects the corresponding row in the MyCompany element tree, so other modules built on top of `Autodesk.Element` can react).

## Performance tips

- **Use SVF2, not SVF.** The integration translates with `output.formats.type = svf2`; do not change this. SVF2 is dramatically faster on large models.
- **Large IFC?** Use `Conversion method = v4` for new IFC content (see [Buckets and models](autodesk-buckets-and-models.md#conversion-method)).
- **Caching.** APS caches the SVF2 derivatives at the URN level — once a model is translated, the viewer load is fast for everyone, regardless of who looks at it first.

## Permissions and what users see

Whether a user sees the **Autodesk** tab on a form depends on their own profile flag (**Autodesk** ticked on **Edit profile**). Whether a model can actually be picked inside the tab depends on:

1. Whether a relevant model is linked.
2. Whether the model finished translating successfully.

The tab does **not** depend on whether the user can edit the project / BoM / order — read-only users see the same viewer. They cannot change which model is linked unless they have edit rights on the standalone Autodesk page.
