import type { Dimension } from "@/lib/types";

export const strategy: Dimension = {
  id: "strategy",
  label: "Strategy",
  description:
    "The primary direction of the company — goals, values, markets served, and sources of competitive advantage.",
  guidelines: [
    {
      id: "derive-capabilities-from-strategic-focus",
      title: "Guideline 7: Derive Required Capabilities from the Strategic Focus",
      summary:
        "Combine the characteristics of the Agile organization with the organization's strategic focus to identify the required capabilities, metrics, and definition of adaptability. The strategic focus helps determine the appropriate trade-offs.",
      why: "Agile characteristics alone are necessary but insufficient to make specific design decisions. The strategic focus provides a decision filter so that every design choice reinforces the organization's competitive intent. Without this anchor, design decisions become arbitrary and misaligned with business needs.",
      antiPattern:
        "Organizations adopt Agile generically without connecting it to their strategic focus, resulting in designs that look Agile on paper but fail to build the specific capabilities — innovation speed, operational excellence, or customer intimacy — that the business actually needs to win.",
      concepts: [
        {
          term: "Product-centric focus",
          definition:
            "Focuses on innovation, new-product development, and time-to-market. Value lies in features competitors cannot yet offer.",
        },
        {
          term: "Operations-centric focus",
          definition:
            "Focuses on low cost, reliability, automation, and quality. Value lies in price, efficiency, and consistent delivery at high volume.",
        },
        {
          term: "Customer-centric focus",
          definition:
            "Focuses on delivering high customer satisfaction and nurturing long-term relationships with customers.",
        },
        {
          term: "Required organizational capabilities",
          definition:
            "The skills, competencies, and alignment of people that create a competitive advantage — derived by combining Agile characteristics with the organization's strategic focus.",
        },
      ],
      bookChapter: "Chapter 4: Agile Organizational Design",
    },
  ],
};
