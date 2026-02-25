---
title: "Work centers and work orders"
---

This section describes how to use **Work centers** and **Work orders** to plan and manage production operations.

## Work centers

**Work center** is a production unit (a machine, a group of machines, or a specific area) where manufacturing operations are performed.

### Managing work centers

To manage work centers, go to **Manufacturing** → **Settings** → **Work centers**.

For each work center, you can specify:
- **Name** — a descriptive name (e.g., "Assembly Line A", "CNC Machine 1").
- **ID** — a unique internal code for the work center.
- **Description** — detailed information about the center's capabilities or location.

### Practical Use
Work centers are used to group work orders and analyze the overall production load. By defining distinct work centers, you can identify bottlenecks and balance the workload across your facility.

---

## Work orders

A **Work order** represents a specific operation or task performed at a work center as part of a [manufacturing order](orders.md). While a manufacturing order defines *what* is being produced, work orders define *how* and *where* the work is executed.

### Creating work orders

Work orders can be entered manually, but they are also automatically generated from Bill of Materials operations when manufacturing order lines are generated or recalculated.

Work orders are typically created within the context of a **Manufacturing order**. You can break down a single production process into multiple sequential or parallel operations.

#### Steps to add a work order:
1. Open a **Manufacturing order** card.
2. Navigate to the **Work orders** tab.
3. Click **Add** (New) to create a new line.
4. Fill in the following details:
   - **Name** — name of the operation (e.g., "Cutting", "Welding").
   - **Work center** — select the unit where this operation will take place (Mandatory).
   - **Start date** — the day the operation is scheduled to begin (defaults to the manufacturing order's scheduled date).
   - **Start time** — the specific time of day the operation should start.
   - **Duration** — the estimated time required for the operation (in hours).
   - **Source operation** - a direct link to the Bill of Materials operation used to create the work order.

### Managing all work orders

To see a global view of all production tasks, go to **Manufacturing** → **Operations** → **Work orders**. This list allows supervisors to:
- Track the progress of operations across different manufacturing orders.
- Filter tasks by work center, start date, or item (from the manufacturing order).
- Bulk update work orders using multi-selection: select multiple lines and use **Start** or **Mark as Done** actions.
- Edit operation details without opening individual manufacturing orders.

### Work order statuses

Each work order follows a specific workflow to track its progress:
- **Ready**: Initial state for new work orders.
- **In Progress**: Active state when work has started (indicated by a yellow background).
- **Done**: Final state when the operation is completed.

#### Actions:
- **Start**: Moves a work order from *Ready* to *In Progress*.
- **Mark as Done**: Moves a work order from *In Progress* to *Done*.

These actions are available on both the work order form and in the global work orders list.

### Filtering and Selection

The **Work orders** list includes enhanced filtering:
- **Opened**: Displays work orders in *Ready* or *In Progress* status.
- **Closed**: Displays work orders in *Done* status.
- **Filters by Date, Work Center, and Item**: Use the filter panel to narrow down the list of operations.

**Multi-selection** is supported in the list view, enabling bulk operations on multiple work orders simultaneously.

### Synchronization and copy behavior

- When manufacturing order lines are generated/recalculated, existing work orders in that order are rebuilt from Bill of Materials operations.
- When a manufacturing order is copied, its work orders are copied as well, including operation link, start date/time, and duration.

---

## Work center load dashboard

The **Work center load** dashboard is a powerful tool for visual scheduling and capacity planning.

### Accessing the dashboard
Go to **Manufacturing** → **Dashboards** → **Work center load**.

### Interface overview

The dashboard features a matrix view:
- **Rows**: List of all configured **Work centers**.
- **Columns**: Days of the selected month.
- **Header**: Contains controls for navigation and filtering.

#### Navigation controls
- Use the **Interval** field to see the current date range.
- Click the `<` and `>` buttons to move between months.

#### Visual Indicators
The grid uses color coding to convey information at a glance:
- **Green background**: Represents the current date.
- **Pink background**: Indicates weekends (Saturday and Sunday).
- **Blue background**: Highlights work scheduled for the **Manufacturing order** currently selected in the dashboard header.
- **Bold numbers**: The duration of work for the selected manufacturing order.
- **Small numbers in brackets**: The total duration of *all* work orders for that work center on that day.

### Scheduling and editing from the dashboard

The dashboard is interactive and allows for quick adjustments:

#### Scenario A: Planning a specific Manufacturing order
1. Select a **Manufacturing order** in the dashboard header.
2. Find the intersection of the desired **Work center** and **Date**.
3. **Click on the cell**:
   - Enter a numeric value to set or update the **Duration**.
   - If no work order existed for this manufacturing order on this cell, a new one will be created automatically.
   - To **delete** a work order, enter `0` or clear the value.

#### Scenario B: General load management
1. Ensure **no manufacturing order** is selected in the header.
2. **Click on a cell** to open a pop-up window showing all work orders for that center/day.
3. From this window, you can view, edit, or delete existing work orders, or create new ones for any manufacturing order.

### Constraints and Validations
- **Closed Orders**: You cannot create or modify work orders for a manufacturing order that is already closed. The system will display a message: *"Manufacturing order is already closed"*.
- **Mandatory Work Center**: Every work order must be assigned to a work center.
