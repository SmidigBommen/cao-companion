import type { Dimension } from "@/lib/types";

export const people: Dimension = {
  id: "people",
  label: "People",
  description:
    "How the organization develops, rotates, and recruits people — the capabilities and mindsets needed for agility.",
  guidelines: [
    {
      id: "separate-product-management-from-line-management",
      title: "Guideline 11: Separate Product Management from Line Management",
      summary:
        "Dual reporting lines and hierarchical competence managers lead to less team focus on the product group's priorities, encourage people to prioritise the goals of the hierarchical manager over the Product Owner (side steering), and encourage people to grow in narrow, single-skill career paths optimising individual performance rather than team performance. Therefore, design the product group so that line management decisions are separated from product management decisions — and teams only receive work and priorities from a single source.",
      why: "When performance appraisals come from a functional or chapter lead rather than the product group, teams naturally prioritize the appraiser's goals. Separating the two management functions ensures teams receive unambiguous priorities and that people development is oriented toward improving team performance.",
      antiPattern:
        "Chapter leads or functional managers do performance appraisals for team members, causing teams to prioritize chapter lead goals over product owner priorities — a 'side steering' dynamic that reduces focus and introduces task switching.",
      concepts: [
        {
          term: "Matrix organization",
          definition:
            "An organizational design with dual reporting lines — typically to both a functional/chapter lead and a product/area lead. Intended to synchronize operations but introduces priority conflicts in Agile contexts.",
        },
        {
          term: "Side steering",
          definition:
            "The dynamic where team members prioritize work assigned by their hierarchical manager over the product group's priorities, because the hierarchical manager controls their appraisal.",
        },
        {
          term: "Single-source priority",
          definition:
            "The design principle that teams should receive work and priorities from one place only — the Product Owner or product group lead — eliminating competing management channels.",
        },
      ],
      bookChapter: "Chapter 4: Agile Organizational Design",
    },
    {
      id: "multi-skill-development",
      title: "Guideline 12: Multi-skill Development",
      summary:
        "The team skills required are always changing — a top technology today may not be highly regarded in a few years. Teams frequently need to master new areas of expertise. Therefore, create a system of human operations that values multi-skilled specialists, maintains the right balance between deep specialists and generalists, and lets teams determine which skills to develop.",
      why: "Technology and business needs are always changing. Teams with an appropriate mix of specialists and generalists handle more work types with fewer bottlenecks. Giving teams responsibility for managing their own skill balance leverages their direct knowledge of what the product requires.",
      antiPattern:
        "Organizations hire and develop only deep single-skill experts, producing teams that bottleneck when their primary skill is in high demand, are unable to help colleagues in adjacent areas, and are left idle when work shifts to a different domain.",
      concepts: [
        {
          term: "T-shaped skills",
          definition:
            "A skill profile with deep expertise in one area (the vertical bar) and broad working knowledge across multiple areas (the horizontal bar), enabling both specialist contribution and cross-team collaboration.",
        },
        {
          term: "Single-skill bottleneck",
          definition:
            "A situation where a team depends on a scarce specialist, causing work to queue whenever that person is unavailable — a structural impediment to flow efficiency.",
        },
        {
          term: "Human operations system",
          definition:
            "The combination of career paths, team composition policies, and reward structures that together shape how people grow within an organization — the systemic lever for building multi-skilled teams.",
        },
      ],
      bookChapter: "Chapter 4: Agile Organizational Design",
    },
  ],
};
