import type { Dimension } from "@/lib/types";

export const structure: Dimension = {
  id: "structure",
  label: "Structure",
  description:
    "The units, roles, responsibilities, and relationships that form the skeleton of the organization.",
  guidelines: [
    {
      id: "organize-into-product-groups",
      title: "Guideline 1: Organize into Product Groups",
      summary:
        "A product group is the key structural unit. It is defined by its purpose or function within the organization, the organizational elements required to achieve that purpose (such as cross-functional teams), the senior manager who leads it and is accountable for product success, and a market focus and/or profit and loss responsibility.",
      why: "Functional hierarchies fragment product delivery across departments, creating long feedback loops and slow adaptation. A product group consolidates all essential elements under shared leadership and shared accountability, enabling fast learning and rapid response to customer needs.",
      antiPattern:
        "Organizations design teams around internal system architecture or business process steps, creating component or functional teams where most customer features require coordination across many teams — making fast delivery and customer focus structurally impossible.",
      concepts: [
        {
          term: "Product group",
          definition:
            "The key structural unit of an Agile organization: a collection of all people, roles, processes, and systems needed to take a product from idea to customer use, led by a senior manager accountable for product success.",
        },
        {
          term: "Outside-in design",
          definition:
            "Structuring an organization starting from customer problems, then determining which organizational elements are needed to create customer value.",
        },
      ],
      bookChapter: "Chapter 4: Agile Organizational Design",
    },
    {
      id: "decouple-unit-functions",
      title: "Guideline 2: Decouple Unit Functions",
      summary:
        "When unit functions are coupled, this leads to unnecessary coordination, goal conflicts, and poor agility. Therefore, decouple unit functions so that each unit can fulfil its function by making decisions and performing its tasks to reach its goals, without negatively affecting the ability of other units to fulfil their functions and attain their own goals.",
      why: "Coupling between unit functions creates coordination costs, goal conflicts, and dysfunctional governance. In an Agile organization, fast adaptation requires units to act with sufficient autonomy — coupling creates hidden dependencies that slow every change down.",
      antiPattern:
        "Sales departments sell more than development can deliver, or innovation units conflict with product development units over resource allocation — each unit rationally pursuing its own goal but collectively preventing the organization from delivering on its overall purpose.",
      concepts: [
        {
          term: "Design Structure Matrix (DSM)",
          definition:
            "A tool for visualizing the relationships and coupling between organizational units and their functions, used to identify where unit functions are incorrectly interlinked.",
        },
        {
          term: "Functional coupling",
          definition:
            "A situation where one unit's pursuit of its goal negatively impacts another unit's ability to achieve its own goal, creating conflict and coordination overhead.",
        },
      ],
      bookChapter: "Chapter 4: Agile Organizational Design",
    },
    {
      id: "merge-units-with-essential-interdependencies",
      title: "Guideline 3: Merge Units with Essential Interdependencies",
      summary:
        "A way to reduce coupling between unit functions is to merge them into a larger unit. Merge those unit functions that are essential parts of the broader product — where a unit provides a capability that is required for the product group to carry out its purpose.",
      why: "When essential interdependencies exist between separate units, constant cross-unit coordination introduces delays and reduces organizational flexibility. Merging essentially interdependent units creates shared goals, improves coordination through shared management, and enables shared processes to develop over time.",
      antiPattern:
        "Business and development are kept as separate units with independent management goals, forcing them into a contract game of negotiating scope, dates, and budgets instead of collaborating on what is best for the product and customer.",
      concepts: [
        {
          term: "Essential interdependency",
          definition:
            "A unit provides an essential capability if that capability is required for the product group to carry out its purpose. Neither unit can achieve the overall purpose independently.",
        },
        {
          term: "Nonessential part",
          definition:
            "A unit that can be omitted from the product group while the product group can still output successful product — such units may be organized as separate or shared services.",
        },
      ],
      bookChapter: "Chapter 4: Agile Organizational Design",
    },
    {
      id: "combine-authority-with-responsibility",
      title: "Guideline 4: Combine Authority with Responsibility",
      summary:
        "A classic approach divides responsibility for software development between IT and business units — IT is responsible for timely delivery, while business is responsible for financial success. The fundamental problem in this setup is the separation between authority and responsibility. Therefore, combine the authority to make development decisions with the responsibility to achieve the value outcomes.",
      why: "When authority and responsibility are separated, neither unit can optimize the whole. The result is a contract game focused on scope, budgets, and dates rather than customer value. Combining them enables the continuous dialogue that complex product development demands.",
      antiPattern:
        "A front-back model separates customer-facing units from development units, making sales sell features that don't exist and development optimize for efficiency rather than value — both locally rational, but globally destructive.",
      concepts: [
        {
          term: "Front-back model",
          definition:
            "An organizational design that separates customer-facing front-end units (profit centers) from product-developing back-end units (cost centers), creating misaligned goals.",
        },
        {
          term: "Authority–responsibility matrix",
          definition:
            "The four quadrants of authority vs. responsibility: Engaged (high/high), Tyrannical (high/low), Frustrated (low/high), Apathetic (low/low). The goal is the Engaged quadrant.",
        },
      ],
      bookChapter: "Chapter 4: Agile Organizational Design",
    },
    {
      id: "contain-reciprocal-task-interdependencies",
      title: "Guideline 5: Contain Reciprocal Task Interdependencies within the Same Unit",
      summary:
        "Design work based on the intensity of interdependence and introduce specific coordination techniques for each. For reciprocal interdependence, manage dependencies through constant information sharing and mutual adjustments — best achieved with an organizational design that contains the reciprocal interdependencies within the same formal unit.",
      why: "Coordination load increases dramatically when interdependence shifts from pooled to sequential to reciprocal. Containing reciprocal dependencies within a unit eliminates the overhead and lets teams take full accountability for complete work items.",
      antiPattern:
        "Component teams are organized around technical layers, creating mandatory cross-team coordination for almost every feature — coordination load multiplies and delivery slows with every team added.",
      concepts: [
        {
          term: "Pooled interdependence",
          definition:
            "The weakest form: units share resources (e.g. a common test environment) but work independently. Can be managed with rules.",
        },
        {
          term: "Sequential interdependence",
          definition:
            "A one-directional dependency where one team's output is the next team's input. Can be organized with proper planning.",
        },
        {
          term: "Reciprocal interdependence",
          definition:
            "A symmetrical, frequent two-way dependency where each team's work is input for the other. Requires constant mutual adjustment — best contained within the same formal unit.",
        },
      ],
      bookChapter: "Chapter 4: Agile Organizational Design",
    },
    {
      id: "group-by-common-customer",
      title: "Guideline 6: Group by Common Customer",
      summary:
        "It is not enough for front-end units to identify customer needs and hand them to back-end units for delivery. The Agile organization considers two options: creating shared customers and shared performance indicators for different units' managers, or merging market units with product units into a larger product group that builds, brings to market, and leverages feedback.",
      why: "Deep customer understanding is not transferable through handoffs. When development teams work directly with customers, they make more correct autonomous decisions and increase the organization's adaptability and flow.",
      antiPattern:
        "Sales and marketing own customer relationships and hand requirements to development, leaving development teams disconnected from customer context and unable to make fine-grained decisions about what to build.",
      concepts: [
        {
          term: "Shared performance indicators",
          definition:
            "Metrics shared across front-end and back-end unit managers so that both are accountable for the same customer outcome, eliminating local optimization incentives.",
        },
      ],
      bookChapter: "Chapter 4: Agile Organizational Design",
    },
    {
      id: "commodity-platform",
      title: "Guideline 9: Commodity Platform",
      summary:
        "When a shared platform contains product-specific functionality that can only be updated by the platform group, it becomes a bottleneck. Therefore, eliminate the interdependencies between platform and product groups by redesigning product-specific functionality out of the platform group and into the product group — leaving only commodity functionality in the platform.",
      why: "A commodity platform means product groups can develop their own differentiating features without requiring the platform team to act, converting reciprocal dependencies into manageable ones and restoring product group autonomy.",
      antiPattern:
        "A shared platform group accumulates product-specific functionality over time, becoming so central to all product deliveries that teams queue up for platform work — throttling all product groups simultaneously.",
      concepts: [
        {
          term: "Commodity functionality",
          definition:
            "Capabilities in the platform that are identical for all product groups and do not differentiate any product in the market — the only functionality that should remain in a shared platform.",
        },
        {
          term: "Product-specific function",
          definition:
            "Functionality that is unique to a particular product group's competitive offering; this should be moved out of the shared platform and into the product group's direct control.",
        },
      ],
      bookChapter: "Chapter 4: Agile Organizational Design",
    },
    {
      id: "design-shared-services-for-support",
      title: "Guideline 10: Design Shared Services for Support",
      summary:
        "Independent product groups duplicate roles and functions — but centralizing everything loses economies of scale. Therefore, consider the cost of development delay when the unit is a shared service, and the criticality and uncertainty of the dependency between the product group and the unit.",
      why: "Systematically evaluating dependency type and cost of delay ensures that the balance between independence and economies of scale supports rather than constrains agility.",
      antiPattern:
        "Organizations centralize all support functions to gain economies of scale, putting critical product success factors — UX, customer discovery, QA — outside the product group's control, creating uncertain dependencies that slow delivery.",
      concepts: [
        {
          term: "Cost of development delay",
          definition:
            "The economic cost incurred when a product group must wait for a shared service to deliver, used as a primary factor in deciding whether to centralize or embed a function.",
        },
        {
          term: "Uncertainty–criticality matrix",
          definition:
            "A 2×2 tool for deciding shared service design: high uncertainty + high criticality → contain within product group; low uncertainty + low criticality → shared service with information sharing.",
        },
      ],
      bookChapter: "Chapter 4: Agile Organizational Design",
    },
  ],
};
