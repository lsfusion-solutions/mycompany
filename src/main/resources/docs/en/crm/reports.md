---
title: Reporting
---

## Lead report

### Where to find it

Open **“Reporting”**, then **“Lead report”**.

### Purpose

The report is intended for lead analysis by time and attributes. It helps answer questions such as:

- how many leads were created during a period;
- which types and statuses occur most often;
- what the expected revenue is and how it is distributed by sales person;
- which leads were expected to close in a certain period.

The report is built as a pivot table: you can change dimensions and groupings depending on your task.

### Available fields

The report typically includes:

- main attributes: **ID**, **Name**, **Lead status**, **Lead type**, **[Partner](../masterdata/partners.md)**, **Sales person**, **Lead priority**, **Lead tags**;
- forecast: **Probability**, **Expected closing**, **Expected revenue**;
- contacts: **Phone**, **Email**;
- description and additional data (address, website, contact person) — if filled.

### “Date interval” filter

In the **“Filters”** block, the **“Date interval”** parameter is available.

It limits the lead selection by lead date:

- not earlier than the selected “from” date;
- not later than the selected “to” date.

Recommendation: when analyzing a monthly pipeline, always set a date interval so the report is fast and comparable.

### Time dimensions

The report includes calculated time dimensions:

- by lead date: minute, hour, date, day of week, week, month, year;
- by expected closing: day of week, week, month, year.

This allows, for example, comparing expected closings by weeks or assessing manager workload by months.

### Examples of useful views

Below are examples of questions this report is convenient for:

1. **How many leads come in by week**
   - set a date interval;
   - group by week (by lead date);
   - count leads in each group.
2. **Planned closings by month**
   - set a date interval;
   - group by expected closing month;
   - analyze expected revenue.
3. **Workload by sales person**
   - group by sales person;
   - add dimension by lead status;
   - compare expected revenue and count.

### Data quality recommendations

To keep the report useful:

- fill “Expected revenue” and “Expected closing” at least for leads in progress;
- make sure a sales person is assigned;
- do not keep leads in one status without movement: move them through stages or close them.