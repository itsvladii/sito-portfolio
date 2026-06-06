export const projects = [
  {
    id: "nexus",
    name: "OWCS Nexus",
    tagline: {
      it: "Statistiche fan-made per l'Overwatch Champions Series",
      en: "Fan-built statistics platform for the Overwatch Champions Series",
    },
    description: {
      it: "Piattaforma non-ufficiale di statistiche per l'OWCS con algoritmo di ELO rating per le squadre partecipanti, grafici interattivi e statistiche di hero bans per ogni mappa giocata. Dati sincronizzati ogni ora in tempo reale grazie all' API ufficiale di Liquipedia.",
      en: "Unofficial OWCS statistics platform with custom ELO ratings algorithm for the teams participating, interactive charts and hero bans stats for every single map played. Data synced in real-time every hour thanks to Liquipedia's official API.",
    },
    tech: [
      "Astro",
      "Svelte",
      "TypeScript",
      "PostgreSQL",
      "Vercel",
      "Github Actions",
      "Cloudinary",
    ],
    colors: {
      primary: "#085fff",
      secondary: "#ff7fde",
      glow: "rgba(8,95,255,0.2)",
      accent: "rgba(255,127,222,0.15)",
      border: "rgba(8,95,255,0.3)",
    },
    features: {
      it: [
        "ELO rating dinamico",
        "Stats di hero bans per ogni mappa",
        "Sync real-time Liquipedia",
      ],
      en: [
        "Dynamic ELO rating",
        "Hero bans stats for every map",
        "Real-time Liquipedia sync",
      ],
    },
    status: "live",
    url: "https://owcs-wiki.vercel.app",
    github: "https://github.com/itsvladii/owcs-nexus",
    image:
      "https://res.cloudinary.com/dm1bfprgq/image/upload/v1779130804/nexus_ghsd4q.png",
    type: "web",
  },
  {
    id: "fuelly",
    name: "Fuelly",
    tagline: {
      it: "Prezzi carburante in Italia, resi meno noiosi",
      en: "Italy fuel price finder, made less boring",
    },
    description: {
      it: "App mobile bilingue (Kotlin + Flutter) per trovare i distributori di carburante più economici in Italia. Backend Python con scraping giornaliero dal MIMIT, dati su Supabase. Include stazioni di ricarica EV da Open Charge Map.",
      en: "Bilingual mobile app (Kotlin + Flutter) to find the cheapest fuel stations in Italy. Python backend with daily scraping from MIMIT, data on Supabase. Includes EV charging stations from Open Charge Map.",
    },
    tech: [
      "Kotlin",
      "Flutter",
      "Dart",
      "PostgreSQL",
      "Python",
      "GitHub Actions",
    ],
    colors: {
      primary: "#D9FD0D",
      secondary: "#D9FD0D",
      glow: "rgba(217,253,13,0.15)",
      accent: "rgba(217,253,13,0.1)",
      border: "rgba(217,253,13,0.3)",
    },
    features: {
      it: [
        "Scraping giornaliero MIMIT",
        "Mappa interattiva con prezzi",
        "Stazioni EV da Open Charge Map",
        "Android + iOS (Flutter)",
      ],
      en: [
        "Daily MIMIT scraping",
        "Interactive price map",
        "EV stations from Open Charge Map",
        "Android + iOS (Flutter)",
      ],
    },
    status: "wip",
    url: null,
    github: "https://github.com/itsvladii/Fuelly_Kotlin",
    githubs: [
      { name: "Kotlin", url: "https://github.com/itsvladii/Fuelly_Kotlin" },
      { name: "Flutter", url: "https://github.com/itsvladii/Fuelly_Dart" },
    ],
    image:
      "https://res.cloudinary.com/dm1bfprgq/image/upload/v1779130804/fuelly_dkfkwe.jpg",
    type: "mobile",
  },
];

export const skills = [
  {
    category: "Web Frontend",
    items: [
      { name: "HTML", level: "Expert" },
      { name: "CSS", level: "Expert" },
      { name: "Astro", level: "Expert" },
      { name: "Bootstrap 5", level: "Expert" },
      { name: "TypeScript", level: "Expert" },
      { name: "Tailwind CSS", level: "Proficient" },
      { name: "React", level: "Learning" },
      { name: "Svelte", level: "Proficient" },
    ],
  },
  {
    category: "Backend & Systems",
    items: [
      { name: "C#", level: "Expert" },
      { name: "PHP", level: "Expert" },
      { name: "Python", level: "Proficient" },
      { name: "C", level: "Proficient" },
      { name: "Laravel", level: "Learning" },
    ],
  },
  {
    category: "Mobile",
    items: [
      { name: "Kotlin", level: "Expert" },
      { name: "Flutter", level: "Learning" },
      { name: "Dart", level: "Learning" },
    ],
  },
  {
    category: "Infrastructure & Tools",
    items: [
      { name: "Vercel", level: "Expert" },
      { name: "MySQL", level: "Expert" },
      { name: "Git", level: "Expert" },
      { name: "PostgreSQL", level: "Proficient" },
      { name: "Github Actions", level: "Proficient" },
      { name: "Linux", level: "Proficient" },
      { name: "Figma", level: "Learning" },
      { name: "Next.js", level: "Learning" },
    ],
  },
];

export const futureSkills = [
  {
    name: "Docker",
    slug: "docker",
    desc: "Containerization & reproducible dev environments",
  },
  {
    name: "Go",
    slug: "go",
    desc: "High-performance backend services and APIs",
  },
  {
    name: "Kubernetes",
    slug: "kubernetes",
    desc: "Container orchestration at scale",
  },
];
