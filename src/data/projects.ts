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
      en: "Unofficial OWCS statistics platform with custom ELO ratings algorithm for the teams partecipating, interactive charts and hero bans stats for every single map played. Data synced in real-time every hour thanks to Liquipedia's official API.",
    },
    tech: [
      "Astro",
      "Svelte",
      "Supabase",
      "Github Actions",
      "Vercel",
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
        "Card TCG dei giocatori",
        "Pannello debug pubblico",
        "Sync real-time Liquipedia",
      ],
      en: [
        "Dynamic ELO rating",
        "TCG player cards",
        "Public debug panel",
        "Real-time Liquipedia sync",
      ],
    },
    status: "live",
    url: "https://owcs-wiki.vercel.app",
    github: "https://github.com/itsvladii/owcs-nexus",
    image: "src/assets/nexus.png",
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
    tech: ["Kotlin", "Flutter", "Dart", "Python", "Supabase", "GitHub Actions"],
    colors: {
      primary: "#7ec850",
      secondary: "#a3e635",
      glow: "rgba(126,200,80,0.15)",
      accent: "rgba(163,230,53,0.1)",
      border: "rgba(126,200,80,0.3)",
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
    image: "/projects/fuelly.webp",
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
      { name: "Tailwind CSS", level: "Proficient" },
      { name: "TypeScript", level: "Proficient" },
      { name: "React", level: "Proficient" },
      { name: "Svelte", level: "Learning" },
    ],
  },
  {
    category: "Backend & Systems",
    items: [
      { name: "C#", level: "Expert" },
      { name: "PHP", level: "Proficient" },
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
      { name: "MySQL", level: "Expert" },
      { name: "Git", level: "Expert" },
      { name: "PostgreSQL", level: "Proficient" },
      { name: "Github Actions", level: "Proficient" },
      { name: "Linux", level: "Proficient" },
      { name: "Figma", level: "Learning" },
    ],
  },
];
