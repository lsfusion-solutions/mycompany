---
title: Attendance
---

The “Attendance” section is used to record employee working time marks: **Check In** and **Check Out**. Depending on settings, geolocation and photo can be used.

## Check-in methods

### Mobile attendance

The employee records marks via the mobile UI:

- **“Check In”** — start of working time;
- **“Check Out”** — end of working time.

If geolocation control is enabled, coordinates (latitude and longitude) are recorded. In some organizations, **attendance without geolocation** can be allowed.

Recommendations:

- before recording, make sure location services are enabled on the device;
- with poor GPS signal, the mark may be unavailable or may require another attempt.

### Attendance kiosk

The kiosk is used when it is more convenient to record attendance on-site (e.g., at the office entrance or checkpoint).

Typical scenario:

1. The employee taps/scans a **badge**.
2. The system identifies the employee.
3. Depending on the current state, it records **“Check In”** or **“Check Out”**.
4. A photo may be captured if configured.

If the employee is not recognized, the message **“Employee not found”** is shown.

## Common situations

### Cannot record a mark due to geolocation

Possible reasons:

- geolocation is disabled on the device;
- the app has no access to geolocation;
- attendance without geolocation is disallowed in organization settings.

### The employee is not in the kiosk list

Check:

- badge correctness (barcode/number);
- that the employee is created in the system;
- permissions for attendance.