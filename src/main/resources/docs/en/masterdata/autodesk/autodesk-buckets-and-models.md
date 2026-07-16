---
title: Buckets and models
---

This page describes the day-to-day workflow for getting a 3D model into MyCompany so that it can be shown on a [Project, Bill of Materials, or Manufacturing order](autodesk-viewer.md). Setup of credentials is covered separately on the [Setup](autodesk-setup.md) page.

The standalone Autodesk page lives at **Master data → Autodesk**. The page has three areas:

- a **Bucket** selector at the top;
- a **Model** list (with the upload / transform actions) and, beside it, the **Viewables** list of the selected model;
- a **details** pane with the **element tree** and the 3D viewer.

## Buckets

A **bucket** is an Autodesk Platform Services storage container. All your source files (Revit, IFC, DWG, NWD, …) live inside one or more buckets.

:::warning
**Bucket keys are globally unique across all of APS, not just your tenant.** If you try to create a bucket called `models` or `test`, you will likely get a `409 Conflict — Bucket already exists` because someone else somewhere on APS already owns that key. Use a tenant-specific prefix such as `mycompany-prod-models`.
:::

#### Create a bucket

Buckets are managed on the **Objects** tab of the **integrations** form (the standalone **Master data → Autodesk** page only lets you *pick* an existing bucket).

1. Open the **integrations** form and switch to the **Objects** tab.
2. Click **+** to add a new bucket row (this only creates a local record in MyCompany).
3. Fill in:
   - **Key** — the globally unique name (lowercase, 3–128 chars, only `a-z 0-9 _ - .`);
   - **Policy** — how long APS keeps the source file:
     - **transient** — 24 hours (use for one-off translations);
     - **temporary** — 30 days;
     - **persistent** — kept indefinitely (use for production data).
4. Click **Create** — this is what actually creates the bucket in APS. The action does not display the APS response; if the request fails, an error is shown. To confirm the bucket exists, use **Get buckets**.

#### List existing buckets

Click **Get buckets** (on the same **Objects** tab). The button calls APS and opens the response (a JSON file) — handy when you want to confirm what is currently provisioned in your APS application. It does **not** fill the local bucket table: local rows and APS buckets are maintained separately.

#### Delete a bucket

On the **Objects** tab there are two identically named **Delete** controls: the **Delete** button inside the grid row calls APS and removes the bucket together with **everything inside it** — this is irreversible; the **Delete** button on the toolbar removes only the local row and does not touch APS.

## Models

A **model** is one source file uploaded into a bucket. Each model row tracks the file name (key), the binary, the URN APS assigned, and the current translation status.

#### Load a model (pick a file)

1. Select a bucket from the **Bucket** selector.
2. Click **Load model**.
3. Pick a file from your computer (Revit `.rvt`, IFC `.ifc`, AutoCAD `.dwg`, Navisworks `.nwd`, etc.).
4. A new model row appears with the file attached. The file is **not yet uploaded to APS** — it is only on the MyCompany side.

You can use **Open** at any time to download the source file back from MyCompany.

The **Delete** action on a model row removes only the local MyCompany record — it does not delete the already uploaded object from the APS bucket.

#### Put — upload to APS

Click **Put** on the model row. MyCompany then:

1. Asks APS for signed S3 upload URLs (one per chunk; large files are split into 50 MB chunks);
2. Uploads each chunk directly to S3;
3. Calls APS to finalize the upload.

When the action completes, the **URN** field is populated. The file now lives inside APS and can be translated.

:::note
Files up to ~10 GB are supported. The upload uses APS's modern *signed S3* approach, so the size is limited only by APS's per-bucket policy and your network.
:::

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
2. Click **Get** on the toolbar of the **Viewables** list next to the models.

MyCompany pulls the list of viewables from APS and shows their **Name**, **Role** (`3d`, `2d`, …) and **GUID**. Pick the viewable whose elements and properties you want to work with — the 3D scene itself always shows the model's default view.

## Elements and properties

Once a viewable is selected, you can extract its object tree (elements) and per-element metadata (properties).

#### Get elements

Click **Get** on the Elements toolbar. MyCompany asks APS for the object tree of the selected viewable, parses it into a hierarchy, and shows it on the left. Each element has:

- a numeric **ID** (the APS `objectid`);
- a **Name** (e.g. *Wall — Generic 200mm*);
- a parent / child relationship that mirrors the source file's hierarchy.

Selecting an element in the tree highlights the corresponding geometry in the 3D viewer (and vice-versa). The matching uses element external IDs, which are loaded together with the properties — so run **Properties** (below) once for the viewable to make the tree ↔ scene selection work. The same linkage then works on the [Item / Project / BoM / Manufacturing order](autodesk-viewer.md) forms once you have linked the model.

#### Get properties

Click **Properties** on the Elements toolbar. MyCompany pulls the full property set for every element of the selected viewable and stores it. Properties are grouped into **categories** (Identity Data, Constraints, Materials, …); open an element (edit it) to inspect its property list.

Fetching properties replaces the stored property set of the whole model: **Properties** first clears the previously loaded values and then imports those of the currently selected viewable. After switching to another viewable, run **Properties** again.

:::note
Properties calls can take a while for large models. The first call after a translation may return an empty payload while APS is still preparing the data — wait a minute and click again.
:::

## Linking to an Item

To make a model show up on an [item](../items.md)'s **Autodesk** tab:

1. Open the standalone **Master data → Autodesk** page.
2. Select the model.
3. Set its **Item** field to the item you want.

Linking to an item is the most powerful option: in addition to appearing on the item form itself, the same model is automatically surfaced on **every** [BoM](../../manufacturing/bom.md) and [manufacturing order](../../manufacturing/orders.md) for that item — without setting a separate BoM or order link. See [Viewer in forms → On an item](autodesk-viewer.md#on-an-item).

## Linking to a Project

To make a model show up on a [project](../../projectManagement/projects.md)'s **Autodesk** tab:

1. Open the standalone **Master data → Autodesk** page.
2. Select the model.
3. Set its **Project** field to the [project](../../projectManagement/projects.md) you want.

The 3D viewer will appear on the project form for any user with **Autodesk** enabled on their profile — see [Viewer in forms → On a project](autodesk-viewer.md#on-a-project) for what the user actually sees.

## Linking to a BoM

Set the **[Bill of Materials](../../manufacturing/bom.md)** field on the model when you want the model to be tied to one specific BoM (rather than every BoM that uses the same item). One model can be linked to a [project](../../projectManagement/projects.md), a [BoM](../../manufacturing/bom.md), and an [item](../items.md) simultaneously, but each form uses its own links: the project form shows models linked to the project, the item form — models linked to the item, a BoM — models linked to the BoM itself or to its item, and a manufacturing order — models linked to its BoM or its item. The result on the form is described in [Viewer in forms → On a Bill of Materials](autodesk-viewer.md#on-a-bill-of-materials).

When a [manufacturing order](../../manufacturing/orders.md) is opened, MyCompany automatically picks up the model linked to the order's BoM **or** to the order's item — there is no separate "Manufacturing order" link to set. See [Viewer in forms → On a manufacturing order](autodesk-viewer.md#on-a-manufacturing-order).

## Troubleshooting

| Symptom | Likely cause | What to do |
|---|---|---|
| **401 Unauthorized — *Token is not provided*** (`AUTH-010`) | Credentials missing or wrong. | Re-paste Key / Secret. Confirm the APS application has the right APIs enabled. |
| **409 Conflict — *Bucket already exists*** | The bucket key is taken globally on APS. | Pick a more unique key (prefix with your tenant). |
| Translation never finishes | Source file too complex or unsupported. | Click **Get status** — the form shows the manifest's overall status and progress (**Transform status** / **Transform progress**). For the detailed APS error an administrator has to check the manifest via the APS API. |
| Empty Viewables / Elements | Translation succeeded but the call landed before APS finished preparing the metadata. | Wait 30–60 seconds, click **Get** again. |
| Viewer shows a black canvas | The user's APS access token has expired and was not refreshed. | Reload the form. |
| Form has no **Autodesk** tab | The current user has **Autodesk** disabled on their profile. | See [Setup](autodesk-setup.md#3-enable-autodesk-per-user). |
| **Autodesk** tab is empty (no model to pick) | Nothing is linked to the object yet, or translation has not finished. | Link a model and wait until **Transform status** = `success`. |
