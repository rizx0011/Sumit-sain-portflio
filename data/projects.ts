export interface Project {
  title: string;
  description: string;
  problem?: string; // one-line problem → solution
  roles: string[];
  image: string;
  url?: string;
  repoUrl?: string;
  category: string;
  techStack?: string[];
}

export const projects: Project[] = [
  {
    title: "Aurelis Boys Grooming Studio",
    description:
      "A premium luxury men's grooming studio website with sophisticated animations, atmosphere mode toggle, and bespoke service showcase for the modern gentleman.",
    problem: "Client needed a premium online presence to attract high-end customers — built a luxurious, animated site that reflects the brand.",
    roles: ["Full Stack Developer", "UI Designer"],
    image: "/images/feature-work/aurleis-saloon.png",
    url: "https://aurleis-saloon.vercel.app/",
    category: "Salon & Beauty",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Pankaj Kumar — Developer Portfolio",
    description:
      "A blazing-fast developer portfolio with precision aesthetics, 120 FPS animations, and a modern vibe-coding aesthetic for a BCA student and web developer.",
    problem: "Developer needed a portfolio that stands out — built with fluid 120 FPS animations and a distinctive dark aesthetic.",
    roles: ["Full Stack Developer", "UI Designer"],
    image: "/images/feature-work/pankaj-kumar.png",
    url: "https://pankajkumarr.vercel.app/",
    category: "Portfolio",
    techStack: ["Next.js", "TypeScript", "Framer Motion"],
  },
  {
    title: "Café Ivory — Artisanal Coffee Lounge",
    description:
      "An elegant artisanal coffee and bakery lounge website featuring a premium warm aesthetic, full menu showcase, gallery, and customer reviews section.",
    problem: "Café needed an inviting online presence to showcase its menu and ambience — designed a warm, immersive experience.",
    roles: ["Full Stack Developer", "UI Designer"],
    image: "/images/feature-work/cafe-ivory.png",
    url: "https://cafeivory.vercel.app/",
    category: "Hospitality",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Anurag Bhati — Full Stack Developer",
    description:
      "A dark-mode full stack developer portfolio with clean typographic hierarchy, services breakdown, project showcase, and technical skill visualization.",
    problem: "Developer needed a clean, technical portfolio — created a dark-mode site with strong typographic identity.",
    roles: ["Full Stack Developer", "UI Designer"],
    image: "/images/feature-work/anurag-bhati.png",
    url: "https://anuragbhati.vercel.app/",
    category: "Portfolio",
    techStack: ["Next.js", "Python", "Django"],
  },
  {
    title: "Crazy Coffee — Premium Cafe Experience",
    description:
      "A high-energy premium coffee shop website with bold typography, dark warm color scheme, menu exploration, and immersive atmospheric design.",
    problem: "Café needed bold digital identity to compete locally — built an immersive dark-themed site that commands attention.",
    roles: ["Full Stack Developer", "UI Designer"],
    image: "/images/feature-work/crazy-cafe.png",
    url: "https://crazy-cafe-demo.vercel.app/",
    category: "Hospitality",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Hindu Mythology AI — Scripture Assistant",
    description:
      "An AI-powered divine scripture assistant providing guidance on Mahabharata, Ramayana, Puranas, Gods, and Astras with an intelligent conversational interface.",
    problem: "Users wanted accessible scripture knowledge — built an AI chatbot that makes ancient texts approachable.",
    roles: ["Full Stack Developer", "AI Integration"],
    image: "/images/feature-work/hindu-mythology.png",
    url: "https://hindu-mythology-ai.vercel.app/",
    category: "AI & Technology",
    techStack: ["Next.js", "TypeScript", "Gemini AI"],
  },

  // ─── TODO: Fill in the fields below and set hidden: false to publish ───
  {
    title: "", // TODO: Add project title
    description: "", // TODO: Add short description
    problem: "", // TODO: one-line problem → solution
    roles: ["Full Stack Developer"],
    image: "/images/feature-work/placeholder.png", // TODO: Add screenshot
    url: "", // TODO: Add live URL
    repoUrl: "", // TODO: Add GitHub repo URL (optional)
    category: "Portfolio", // TODO: Change category if needed
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"], // TODO: Update tech stack
  },
];

// Filter out any project with no title (placeholder / WIP projects)
export const publishedProjects = projects.filter((p) => Boolean(p.title.trim()));
