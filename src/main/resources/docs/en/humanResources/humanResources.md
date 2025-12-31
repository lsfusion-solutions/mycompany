---
title: Human Resources — user documentation
---

This documentation describes the **“Human Resources”** section: recruitment (candidate applications, interviews, hiring decisions), attendance tracking (check in / check out), and payroll calculation/payment (payroll batches and payslips).

## Contents

- [Quick start](#quick-start)
- [Navigation](#navigation)
- [User roles and permissions](#user-roles-and-permissions)
- [Terms](#terms)

Sections:

- [Recruitment](recruitment.md)
- [Attendance](attendance.md)
- [Payroll: calculation and payment](payroll.md)
  - [Payslip batch](payroll-batch.md)
  - [Payslip](payslip.md)
  - [How the “Net wage” total is calculated](net-wage.md)
  - [Payment by time entries (Projects)](payroll-time-entries.md)
  - [Payroll payment and payment control](payroll-payments.md)
- [Settings](settings.md)

## Quick start

A typical scenario “receive a candidate application → schedule an interview → make a decision”:

1. Open **“Human Resources” → “Operations” → “Applications”**.
2. Create an application and fill the main details (subject/description, position, department, candidate contact details).
3. Attach files if needed (e.g., a resume).
4. Schedule an interview and select participants.
5. After the interview:
   - perform **“Hire”** to create an employee;
   - or perform **“Refuse”** and specify the refuse reason.

A typical scenario “record attendance”:

1. Open **“Human Resources” → “Operations” → “Attendance”**.
2. Register **“Check In”** and **“Check Out”** using one of the methods:
   - via mobile attendance (with geolocation, if used);
   - via the **attendance kiosk** by badge.

A typical scenario “calculate payroll and prepare payment”:

1. Open **“Human Resources” → “Operations” → “Payslip batches”**.
2. Create a batch, specify legal entity and period.
3. Run **“Generate”** — the system creates payslips for employees.
4. Review payslips and the **“Net wage”** total.
5. If payroll payments are registered in the system — register payment from the payslip.

## Navigation

The **“Human Resources”** section typically contains groups:

- **Operations** — daily work (applications, interviews, attendance, payslips and payslip batches).
- **Processes** — control and processing views (e.g., consolidated lists, processing incoming messages if connected).
- **Settings** — reference data and parameters.

The available menu items and actions depend on configuration and user permissions.

## User roles and permissions

The exact set of permissions depends on your organization settings. Typical responsibility distribution:

- **Recruiter** — maintains applications, schedules interviews, records results, prepares decisions.
- **Interview participant** — participates in interviews and records results (if allowed).
- **HR specialist** — handles employee onboarding and maintains HR data.
- **Employee** — records attendance (mobile or kiosk) and views own records (if allowed).
- **Accountant / payroll specialist** — generates payslip batches, reviews payslips and registers payments (if used).

If some actions are not available (e.g., “Hire”, “Refuse”, “Generate”, or payment registration), it is usually due to permission restrictions or section configuration.

## Terms

#### Application

A candidate card: contains candidate details, position, contact data, attached files and recruitment history.

#### Interview

A record of an interview with a candidate: stores participants and a summary/result.

#### Recruiter

Responsible for maintaining recruitment on an application.

#### Interview participant

A user who participates in the candidate interview.

#### Attendance

Recording employee check in / check out. Depending on settings, geolocation and/or photo may be captured.

#### Attendance kiosk

A screen/device for fast check in / check out when employees identify themselves by badge.

#### Payslip batch

A document for generating payslips for multiple employees for a period.

#### Payslip

An employee payroll calculation document for a period with the **“Net wage”** total.