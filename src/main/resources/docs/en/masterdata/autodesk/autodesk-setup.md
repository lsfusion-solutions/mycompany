---
title: Setup
---

This page explains how to connect MyCompany to **Autodesk Platform Services (APS)** so that the rest of the integration ([buckets, models, the viewer](autodesk-buckets-and-models.md)) becomes available.

The setup is one-time work for an administrator. Day-to-day users do **not** need to repeat these steps — they only need to tick the **Autodesk** flag on their own profile.

## 1. Create an APS application

1. Go to https://aps.autodesk.com/myapps/ and sign in with an Autodesk account.
2. Click **Create Application**.
3. Pick a name (it is shown only inside the APS console) and tick the APIs the integration needs:
   - **Data Management API** — for buckets and source-file uploads.
   - **Model Derivative API** — for translation to SVF2 and reading the object tree.

   You do **not** need BIM 360, Construction Cloud, Webhooks, Reality Capture, or Design Automation.
4. The integration uses 2-legged (server-to-server) OAuth, so you can leave the **Callback URL** field empty (or enter a placeholder like `http://localhost`).
5. Save the application. APS will show you a **Client ID** and a **Client Secret** — keep this page open, you will need both values in the next step.

#### Region

The integration uses Autodesk's **US** region by default. If you need EU / EMEA data residency, contact a developer — that requires an additional `x-ads-region` header on bucket creation and a change to the viewer JavaScript (`api: 'derivativeV2_EU'`). The current build is configured for US.

## 2. Enter credentials in MyCompany

1. In MyCompany, open the **integrations** configuration form (the location depends on the build — usually under **Administration → Integrations** or similar).
2. Find the **Autodesk** pane.
3. Paste:
   - **Key** = the Client ID from APS;
   - **Secret** = the Client Secret from APS.
4. Save.

The credentials are stored in MyCompany; users do not need to know them.

#### How tokens are obtained

You do not have to do anything more — every Autodesk action in MyCompany automatically requests a fresh OAuth token from APS before it talks to the API. Tokens are reused until they are within 60 seconds of expiring, then a new one is fetched.

If the very first action returns *“Token is not provided”* or **AUTH-010**, double-check:

- the Key / Secret values match the APS console exactly;
- the APS application has **Data Management API** and **Model Derivative API** ticked;
- there is no firewall blocking outbound HTTPS to `developer.api.autodesk.com`.

## 3. Enable Autodesk per user

The integration is opt-in per user.

1. Each user that needs the viewer opens **Edit profile**.
2. Tick the **Autodesk** flag.
3. Save and reload the page (the viewer JavaScript is loaded only on first page render after the flag is enabled).

Until the flag is set, the **Autodesk** tab is hidden on the Project / BoM / Manufacturing order forms.

## 4. Verify

A quick sanity check that the connection works:

1. Open **Master Data → Autodesk**.
2. Click **Get buckets** — if the credentials are valid, the response opens as a JSON file (it may be an empty list at this point — that is fine).
3. If it errors with **401 Unauthorized**: the credentials are wrong. Re-paste them.
4. If it errors with anything else: see [Buckets and models — troubleshooting](autodesk-buckets-and-models.md#troubleshooting).

You are now ready to [create a bucket and upload a model](autodesk-buckets-and-models.md). Once a model is translated and linked, end users will see it on the [Project / BoM / Manufacturing order](autodesk-viewer.md) forms.
