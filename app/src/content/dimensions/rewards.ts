import type { Dimension } from "@/lib/types";

export const rewards: Dimension = {
  id: "rewards",
  label: "Rewards",
  description:
    "The alignment of employee goals with organizational goals through compensation, recognition, and growth opportunities.",
  guidelines: [
    {
      id: "multi-skill-value-system",
      title: "Guideline 12: Multi-skill Development — Value System",
      summary:
        "Create a system of human operations that values employees by a combination of personal and team accomplishments, values people who become multi-skilled specialists (highly valued) over single-skill deep specialists (average valued) or single-skill novices (low valued), and maintains a balance between deep specialists and generalists in the teams.",
      why: "A reward system that values narrow single-skill expertise encourages individuals to deepen one specialty, creating bottlenecks when that skill is in high demand. Valuing multi-skilled specialists creates the systemic incentive for people to grow in directions that improve team performance and flow.",
      antiPattern:
        "Career ladders reward increasing depth in a single technology specialty, creating a workforce of narrow experts who compete for specialized work, bottleneck when their skill is needed, and sit idle when work shifts — with no incentive to develop the broader skills their team needs.",
      concepts: [
        {
          term: "Multi-Skill Specialist",
          definition:
            "High specialization + high generalization. Highly Valued. The most valuable profile in an Agile team — deep expertise across multiple areas.",
        },
        {
          term: "Single Skill Deep Specialist",
          definition:
            "High specialization + low generalization. Average Valued. Deep in one area but unable to contribute across adjacent work.",
        },
        {
          term: "Multi-Skill Generalist",
          definition:
            "Low specialization + high generalization. Average Valued. Broad but shallow — useful for flexibility but not for deep problem-solving.",
        },
        {
          term: "Single Skill Novice",
          definition:
            "Low specialization + low generalization. Low Valued. Narrow and shallow — a profile to grow out of, not maintain.",
        },
      ],
      bookChapter: "Chapter 4: Agile Organizational Design",
    },
  ],
};
