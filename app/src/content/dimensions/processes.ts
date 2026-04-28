import type { Dimension } from "@/lib/types";

export const processes: Dimension = {
  id: "processes",
  label: "Processes",
  description:
    "The flow of information — horizontal workflows, value delivery, and the coordination mechanisms that keep the organization aligned.",
  guidelines: [
    {
      id: "create-conditions-for-emergent-coordination",
      title: "Guideline 8: Create Conditions for Emergent Coordination",
      summary:
        "Because the people who do the work understand best what needs to be coordinated and how, create the conditions so that people know about what, with whom, and when they need to coordinate. Two key mechanisms: Communities (to attend to cross-unit concerns, alignment on skills, standards, shared tools, and processes) and Facilitation Processes (multi-team meetings to discover opportunities for coordination).",
      why: "A networked organizational structure that enables direct peer-to-peer coordination is faster and more adaptive than hierarchical coordination. Prescribing coordination mechanisms top-down removes the intelligence of the people closest to the work.",
      antiPattern:
        "Organizations establish dedicated coordination roles or integration managers to manage inter-team alignment, creating a parallel hierarchy that slows decisions and makes coordination a specialized function rather than a shared team responsibility.",
      concepts: [
        {
          term: "Community of practice",
          definition:
            "An informal, voluntary group of people from different teams who meet regularly to align on cross-cutting concerns, share learnings, and promote standardization — without appearing on the organizational chart.",
        },
        {
          term: "Facilitation processes",
          definition:
            "Multi-team meetings designed to surface and discover opportunities for coordination across teams, replacing top-down coordination prescription with bottom-up peer alignment.",
        },
        {
          term: "Networked organizational structure",
          definition:
            "An organizational design where self-organizing teams are directly linked to each other within and across groups, enabling peer-to-peer coordination without requiring hierarchical routing.",
        },
      ],
      bookChapter: "Chapter 4: Agile Organizational Design",
    },
  ],
};
