export interface ExperienceEntry {
  id: string;
  title: string;
  role: string;
  date: string;
  description: string;
  logo: string;
  logoAlt: string;
  bullets: string[];
}

export const experiences: ExperienceEntry[] = [
  {
    id: "zenviq",
    title: "ZENVIQ Digital Agency",
    role: "Frontend Developer",
    date: "2024 — Present",
    description:
      "Working as a Frontend Developer at ZENVIQ (zenviqdigital.in), building fast, responsive and modern websites and web interfaces for clients.",
    logo: "/images/experience/zenviq.png",
    logoAlt: "ZENVIQ Digital Agency logo",
    bullets: [
      "Building modern, high-performance web applications using Next.js and Tailwind CSS",
      "Delivering responsive client websites with fast load times and clean UI",
      "Collaborating on client projects end-to-end from wireframe to deployment",
    ],
  },
  {
    id: "bca",
    title: "Bachelor of Computer Applications (BCA)",
    role: "Undergraduate, Maharaja Ganga Singh University, Bikaner",
    date: "2024 — Present",
    description:
      "Pursuing a degree in computer applications while actively building real-world web projects.",
    logo: "/images/experience/mgsu.png",
    logoAlt: "Maharaja Ganga Singh University logo",
    bullets: [
      "Studying core computer science subjects, programming, and database management",
      "Applying theoretical concepts directly to production web applications",
      "Balancing academic curriculum with hands-on client and open-source work",
    ],
  },
  {
    id: "rscit",
    title: "RS-CIT",
    role: "Certificate Course, Rajasthan Knowledge Corporation Limited (RKCL)",
    date: "2023",
    description:
      "Completed the RS-CIT computer literacy course covering core computer and IT fundamentals.",
    logo: "/images/experience/rscit.png",
    logoAlt: "RS-CIT / RKCL logo",
    bullets: [
      "Covered computer hardware, operating systems, and fundamental software concepts",
      "Learned office productivity suites and internet applications",
      "Certified by Rajasthan Knowledge Corporation Limited (RKCL)",
    ],
  },
  {
    id: "dexter-lab",
    title: "Dextor Lab, Hanumangarh",
    role: "Full Stack Development Course",
    date: "2024",
    description:
      "Completed full stack web development training at Dexter Lab, Hanumangarh, learning front-end and back-end fundamentals through hands-on projects.",
    logo: "/images/experience/dexter-lab.png",
    logoAlt: "Dexter Lab logo",
    bullets: [
      "Trained in HTML, CSS, JavaScript, and backend web technologies",
      "Built practical hands-on web projects and gained core coding foundations",
      "Practiced full stack workflows, problem-solving, and database basics",
    ],
  },
];
