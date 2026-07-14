# Cost distribution

Cost distribution allows you to include the cost of services (e.g., freight, customs, insurance) into the cost of products or manufacturing orders.

## Configuration

### Distribution base for services
For each service that needs to be distributed, you can specify a default **Distribution base**. This determines how the service cost will be proportionally divided among the targets.

1. Go to the **Item** card (for a Service).
2. In the **Distribution base** field, select one of the following:
    - **Amount** — distribution proportional to the untaxed amount of the target lines.
    - **Cost** — distribution proportional to the cost of the products.
    - **Sales price** — distribution proportional to the sales price of the products.
    - **Weight** — distribution proportional to the weight of the products.
    - **Volume** — distribution proportional to the volume of the products.
    - **Quantity** — distribution proportional to the quantity of the products or manufactured items.

## Distributing cost in a Bill

When you add a service line to a **[Bill](bills.md)**, you can distribute its cost to other documents.

1. Open the **Bill** and go to the **Cost distribution** tab (at the bottom of the form).
2. Select the service line in that tab's service-line grid to see its distribution settings.
3. The **Distribution base** is automatically filled from the service card, but you can change it for this specific bill line.
4. Use the sub-tabs to select the distribution targets:

### Distributing to other Bills
In the **Bills** tab:
- You can see a list of bills.
- Mark the **Distribute** checkbox for the bills you want to include in the distribution. Marking it at the bill level cascades to all of that bill's product lines.
- In the **Bill lines** list below, you can further refine which specific product lines should receive the cost.
- The **Distributed** column shows the amount allocated to each line based on the selected **Distribution base**.

### Distributing to Manufacturing Orders
In the **Manufacturing orders** tab:
- You can see a list of open manufacturing orders.
- Mark the **Distribute** checkbox for the orders you want to include.
- The cost will be distributed among the selected orders.

### Applying the distribution
- Click the **Distribute** button in the service lines toolbar to automatically calculate and fill the **Distributed** amounts for all selected targets.
- The system ensures that the total distributed amount does not exceed the untaxed amount of the service line.

## Impact on Costing
Distributed costs are included in the total cost of the target products or manufacturing orders, affecting the final inventory valuation or production cost.
