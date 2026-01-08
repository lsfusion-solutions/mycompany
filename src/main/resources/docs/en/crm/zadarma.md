---
title: "Zadarma IP Telephony Integration"
---

The Zadarma IP telephony integration module allows you to connect your cloud PBX with the system to automate call handling, maintain communication history with customers, and listen to call recordings.

## 1. Preparation in Zadarma Dashboard

Before configuring the system, you must perform the following actions in your Zadarma personal account:

1.  **Obtain API Keys**:
    *   Go to the **Settings -> API and integrations** section.
    *   Generate and copy the **Key** and **Secret** values.
2.  **Configure Notifications**:
    *   In the same section, find the field for the notification URL (Webhooks).
    *   Specify the address in the format: `https://<your_system_address>/exec/Zadarma.notify`.
    *   Enable notifications for events you want to track (e.g., call start, answer, end).

## 2. Connection Settings in the System

Connection parameters are specified in the integration settings section under the **Zadarma** tab.

Fill in the following fields:
*   **Url** — the address of the telephony server (defaults to `https://api.zadarma.com`).
*   **Key** — the API key obtained from your Zadarma account.
*   **Secret** — the API secret obtained from your Zadarma account.

## 3. PBX and Employee Setup

To ensure correct system operation, you need to load information about internal numbers and link them to employees.

1.  On the **PBX** tab, click the **Get PBX** button.
2.  The system will retrieve the PBX ID and the list of internal numbers from the cloud PBX.
3.  For each loaded number, select the corresponding person in the **Employee** column. This allows call history to be associated with specific individuals.

## 4. Call Handling

### Incoming Calls
When a call is received, the system performs several automatic actions:
*   **Customer Identification**: The system searches for records associated with the phone number.
*   **Call Routing**: If the caller is assigned to a specific manager, the system can inform the PBX to redirect the call to that manager's internal number.
*   **Registration**: A record is automatically created in the calls section, capturing the time, participants, and call result.

### Outgoing Calls
You can make calls directly from the system:
1.  Click the call button next to a phone number.
2.  The system initiates a **Callback**.
3.  Your phone (or softphone) will ring first.
4.  Once you answer, the system will dial the customer's number.

### WebRTC Widget
If WebRTC is enabled, you can make and receive calls directly in your browser without using external phones or applications. The widget will automatically load if an internal number is assigned to your user and the system successfully retrieves the WebRTC key from Zadarma.

## 5. Call Recordings

If your PBX is configured to record calls, you can listen to them directly in the system:

1.  In the calls list, use the request recording function.
2.  Depending on the settings, the system will either play the recording remotely or download the file for local playback.
3.  The **Play record remotely** setting in the Zadarma configuration determines the playback method.
