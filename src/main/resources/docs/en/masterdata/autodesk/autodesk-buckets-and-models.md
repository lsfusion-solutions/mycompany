---
title: Buckets and models
---

This page describes the day-to-day workflow for getting a 3D model into MyCompany so that it can be shown on a [Project, Bill of Materials, or Manufacturing order](autodesk-viewer.md). Setup of credentials is covered separately on the [Setup](autodesk-setup.md) page.

The standalone Autodesk page lives at **Master Data → Autodesk**. The page has three areas:

- a **Bucket** selector at the top;
- a **Model** list (with the upload / transform actions);
- a **details** pane that shows **Viewables**, the **element tree**, and the 3D viewer for the selected model.

## Buckets

A **bucket** is an Autodesk Platform Services storage container. All your source files (Revit, IFC, DWG, NWD, …) live inside one or more buckets.

> ⚠️ **Bucket keys are globally unique across all of APS, not just your tenant.** If you try to create a bucket called `models` or `test`, you will likely get a `409 Conflict — Bucket already exists` because someone else somewhere on APS already owns that key. Use a tenant-specific prefix such as `mycompany-prod-models`.

#### Create a bucket

1. Open **Master Data → Autodesk** (or the **Objects** tab on the **integrations** form).
2. Click **+** to add a new bucket row.
3. Fill in:
   - **Key** — the globally unique name (lowercase, 3–128 chars, only `a-z 0-9 _ - .`);
   - **Policy** — how long APS keeps the source file:
     - **transient** — 24 hours (use for one-off translations);
     - **temporary** — 30 days;
     - **persistent** — kept indefinitely (use for production data).
4. Click **Create**. APS returns success (or an error you can read from the response).

#### List existing buckets

Click **Get buckets**. The button calls APS and opens the response (a JSON file) — handy when you want to confirm what is currently provisioned in your APS application.

#### Delete a bucket

Select the bucket row and click **Delete**. APS removes the bucket and **everything inside it**. This is irreversible.

## Models

A **model** is one source file uploaded into a bucket. Each model row tracks the file name (key), the binary, the URN APS assigned, and the current translation status.

#### Load a model (pick a file)

1. Select a bucket from the **Bucket** selector.
2. Click **Load model**.
3. Pick a file from your computer (Revit `.rvt`, IFC `.ifc`, AutoCAD `.dwg`, Navisworks `.nwd`, etc.).
4. A new model row appears with the file attached. The file is **not yet uploaded to APS** — it is only on the MyCompany side.

You can use **Open** at any time to download the source file back from MyCompany.

#### Put — upload to APS

Click **Put** on the model row. MyCompany then:

1. Asks APS for signed S3 upload URLs (one per chunk; large files are split into 50 MB chunks);
2. Uploads each chunk directly to S3;
3. Calls APS to finalize the upload.

When the action completes, the **URN** field is populated. The file now lives inside APS and can be translated.

> Files up to ~10 GB are supported. The upload uses APS's modern *signed S3* approach, so the size is limited only by APS's per-bucket policy and your network.

#### Transform — translate to SVF2

Pick a **Conversion method** (see below) and click **Transform**. APS starts translating the source file to SVF2 (the format the viewer reads).

Translation is **asynchronous** — the action returns immediately. Click **Get status** every now and then to refresh the manifest. While the job is running:

- **Transform status** is `inprogress` (or one of `pending`, `running`);
- **Transform progress** is a percentage / phase label.

When **Transform status** = `success`, the model is ready to view.

#### Conversion method

Used only for **IFC** sources (other formats ignore this field):

- **v4** — current Autodesk recommendation; matches the engine Autodesk Docs uses for new projects.
- **v3** — previous IFC engine; still supported.
- **modern** — older but widely used.
- **legacy** — older still; in maintenance mode.

Leave it blank to fall back to the platform default (`modern`). For new IFC content prefer **v4**.

## Viewables

A **viewable** is one renderable scene inside a translated model — a 3D view, a 2D sheet, etc. One Revit file can produce many viewables.

After translation succeeds:

1. Select the model.
2. In the **details** pane, click **Get** on the Viewables row.

MyCompany pulls the list of viewables from APS and shows their **Name**, **Role** (`3d`, `2d`, …) and **GUID**. Pick the one you want to look at.

## Elements and properties

Once a viewable is selected, you can extract its object tree (elements) and per-element metadata (properties).

#### Get elements

Click **Get** on the Elements toolbar. MyCompany asks APS for the object tree of the selected viewable, parses it into a hierarchy, and shows it on the left. Each element has:

- a numeric **ID** (the APS `objectid`);
- a **Name** (e.g. *Wall — Generic 200mm*);
- a parent / child relationship that mirrors the source file's hierarchy.

Selecting an element in the tree highlights the corresponding geometry in the 3D viewer (and vice-versa). The same tree↔scene linkage works on the [Project / BoM / Manufacturing order](autodesk-viewer.md) forms once you have linked the model.

#### Get properties

Click **Properties** on the Elements toolbar. MyCompany pulls the full property set for every element of the selected viewable and stores it. Properties are grouped into **categories** (Identity Data, Constraints, Materials, …) and shown as a tree under each element.

> Properties calls can take a while for large models. The first call after a translation may return an empty payload while APS is still preparing the data — wait a minute and click again.

## Linking to a Project

To make a model show up on a [project](../../projectManagement/projects.md)'s **Autodesk** tab:

1. Open the standalone **Master Data → Autodesk** page.
2. Select the model.
3. Set its **Project** field to the [project](../../projectManagement/projects.md) you want.

The 3D viewer will appear on the project form for any user with **Autodesk** enabled on their profile — see [Viewer in forms → On a project](autodesk-viewer.md#on-a-project) for what the user actually sees.

## Linking to a BoM

Same as above, but set the **[Bill of Materials](../../manufacturing/bom.md)** field instead of (or in addition to) the project. One model can be linked to both a [project](../../projectManagement/projects.md) and a [BoM](../../manufacturing/bom.md) at the same time. The result on the form is described in [Viewer in forms → On a Bill of Materials](autodesk-viewer.md#on-a-bill-of-materials).

When a [manufacturing order](../../manufacturing/orders.md) is opened, MyCompany automatically picks up the model that is linked to the order's BoM — there is no separate "Manufacturing order" link to set. See [Viewer in forms → On a manufacturing order](autodesk-viewer.md#on-a-manufacturing-order).

## Troubleshooting

| Symptom | Likely cause | What to do |
|---|---|---|
| **401 Unauthorized — *Token is not provided*** (`AUTH-010`) | Credentials missing or wrong. | Re-paste Key / Secret. Confirm the APS application has the right APIs enabled. |
| **409 Conflict — *Bucket already exists*** | The bucket key is taken globally on APS. | Pick a more unique key (prefix with your tenant). |
| Translation never finishes | Source file too complex or unsupported. | Check the manifest by clicking **Get status**; APS error messages appear in **Transform progress**. |
| Empty Viewables / Elements | Translation succeeded but the call landed before APS finished preparing the metadata. | Wait 30–60 seconds, click **Get** again. |
| Viewer shows a black canvas | The user's APS access token has expired and was not refreshed. | Reload the form. |
| Form has no **Autodesk** tab | The current user has **Autodesk** disabled on their profile, *or* nothing is linked yet. | See [Setup](autodesk-setup.md#3-enable-autodesk-per-user) and link a model. |
