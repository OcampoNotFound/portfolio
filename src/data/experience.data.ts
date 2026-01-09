export interface ExperienceData {
  id: number;
  company: string;
  role: string;
  period: string;
  title: string;
  description: string;
  responsibilities: string[];
  tech: string[];
  image?: string;
}

export const experience: ExperienceData[] = [
  {
    id: 1,
    company: "AndesBPO S.A.S",
    role: "Full Stack Developer",
    period: "February 2025 - Agoust 2025",
    title: "Full-Stack Developer at AndesBPO, La Ceja, Colombia",
    description:
      "Front-End developer using React.js, TypeScript, ChakraUI and CSS to create responsive web applications. Back-End developer using Python and FastAPI to build robust APIs and services.",
    responsibilities: [
      "Developing web applications using frameworks like Next.js and libraries like React.js, as well as back-end languages like Python.",
      "Developing responsive web applications, ensuring accessibility across various devices and screen sizes.",
      "Developing web interfaces from designs created in Figma.",
      "Creating complex components using drag and drop, and analyzing dashboards.",
      "Optimizing website performance and loading speed using techniques such as memorization and design patterns.",
      "Integrating with various APIs such as ChatGPT 3.5 and DeepSeek v2.",
      "Using GitHub as version control.",
    ],
    tech: [
      "React.js",
      "TypeScript",
      "ChakraUI",
      "CSS",
      "Python",
      "FastAPI",
      "Figma",
      "Git",
      "GitHub",
    ],
    image: "/img/andesbpo_logo.png",
  },
];
