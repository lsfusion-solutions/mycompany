---
title: Attendance
---

The **Attendance** feature is used to record employee working time marks:

- **Check In** — start of working time
- **Check Out** — end of working time

Each mark creates/updates an **Attendance** record. The system can also store **geolocation** (latitude/longitude) and **photos** depending on the used check-in method.

## What is recorded

For each attendance record, the system stores:

- **Employee** — automatically set to the currently logged-in employee when an attendance record is created.
- **Check In datetime** — required.
- **Check Out datetime** — optional until the employee checks out.
- **Worked hours** — calculated as the difference between check-in and check-out.
- **Check In / Check Out geolocation** — latitude and longitude values (if available).
- **Check In / Check Out photos** — stored when using the kiosk flow (if the device/camera is configured).

## Main rules (how the system decides what to do)

- The system considers the **last attendance record** of the employee.
- If the last record **has no check-out time yet**, it is treated as **opened**.
  - In this case, the next mark will be **Check Out**.
- If there is **no opened** record, the next mark will be **Check In**.

## Check-in methods

### Mobile attendance

The employee records marks via the mobile UI (**Attendance** dashboard).

The form shows:

- large buttons for **Start** (check-in) / **Stop** (check-out);
- current state (opened/closed) based on the last record;
- a list of recent attendance records for the current user (sorted by newest check-in);
- totals for **This week** and **This month**.

### Geolocation requirement (mobile)

On mobile, check-in/check-out buttons can be disabled when geolocation is not available.

- If **latitude/longitude are not received**, the **Start**/**Stop** buttons are disabled.
- Exception: if the employee is allowed to record attendance **without geolocation** (see “Settings and permissions”).

The geolocation block also shows:

- current **latitude** and **longitude** values;
- an **error** message (if the client cannot obtain the current position);
- a control to request the device to fetch the current position.

Notes:

- The mobile attendance form refreshes automatically (periodically) so the displayed “worked hours since check-in” is kept up to date.

### What happens on check-in (mobile)

When the employee taps **Start**:

1. A new attendance record is created.
2. **Check In** datetime is set to the current time.
3. If available, **check-in latitude/longitude** are stored.
4. The form navigates to the newly created record in the list.

### What happens on check-out (mobile)

When the employee taps **Stop**:

1. The system finds the employee’s **last attendance** record.
2. **Check Out** datetime is set to the current time.
3. If available, **check-out latitude/longitude** are stored.

The **Stop** action asks for confirmation.

Recommendations:

- before recording, make sure location services are enabled on the device;
- with poor GPS signal, the mark may be unavailable or may require another attempt.

### Attendance kiosk

The kiosk is used when it is more convenient to record attendance on-site (e.g., at the office entrance or checkpoint).

Typical scenario:

1. The employee scans a **badge / barcode**.
2. The system decodes the scanned value and tries to match it to an employee.
3. Depending on the employee’s current state, it records **Check In** or **Check Out**.
4. A **photo** is saved for the mark (if the kiosk device supports capturing a photo).

The kiosk uses a confirmation dialog showing the employee and a large message:

- **Check In** (green)
- **Check Out** (red)

If the employee is not recognized, the message **“Employee not found”** is shown.

### Kiosk specifics

- The kiosk prevents repeated processing of the same scanned value within a short time window (to avoid double-scans).
- The kiosk can display a list of employees who are currently **checked in nearby** (based on comparing the kiosk current coordinates with stored check-in coordinates).

## Settings and permissions

### Attendance without geolocation

There is an employee-level setting **Attendance without geolocation**.

- If enabled for an employee, they can use mobile attendance even when the system cannot obtain latitude/longitude.
- If disabled, the mobile **Start/Stop** buttons require a valid geolocation.

This option is available on the employee card in the **Attendance** section.

## Viewing and editing attendance (back office)

There are forms for working with attendance records:

- **Attendance** — view a single attendance record (including geolocation fields and photos if present).
- **Attendances** — list of attendance records with filters:
  - **Opened** (no check-out yet)
  - **Closed** (already checked out)

Depending on permissions, users can create/edit/delete records manually in the back office (for corrections).

## Common situations

### Cannot record a mark due to geolocation

Possible reasons:

- geolocation is disabled on the device;
- the app has no access to geolocation;
- the employee is not allowed to record attendance without geolocation.

What to do:

- enable location services on the device;
- grant geolocation permission to the app;
- if the organization allows it, ask an administrator to enable **Attendance without geolocation** for the employee.

### Worked hours are not shown / look incorrect

Worked hours are calculated from **check-in** and **check-out** times.

Check:

- that the employee has checked out (otherwise the record is “opened”);
- that the device time is correct;
- if corrections were made manually, verify the check-in/check-out datetimes.

### The employee is not in the kiosk list

Check:

- badge correctness (barcode/number);
- that the employee is created in the system;
- permissions for attendance.

If the kiosk shows nearby checked-in employees, also verify:

- that kiosk geolocation is available;
- that the employee’s check-in was recorded with geolocation.