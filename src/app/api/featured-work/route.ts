import { NextResponse } from "next/server";

const featureWork = [
    {
        title: "Aurelis Boys Grooming Studio",
        description: "A premium luxury men's grooming studio website with sophisticated animations, atmosphere mode toggle, and bespoke service showcase for the modern gentleman.",
        roles: ["Full Stack Developer", "UI Designer"],
        image: "/images/feature-work/aurleis-saloon.png",
        url: "https://aurleis-saloon.vercel.app/",
        category: "Salon & Beauty",
        techStack: ["Next.js", "TypeScript", "Tailwind CSS"]
    },
    {
        title: "Pankaj Kumar — Developer Portfolio",
        description: "A blazing-fast developer portfolio with precision aesthetics, 120 FPS animations, and a modern vibe-coding aesthetic for a BCA student and web developer.",
        roles: ["Full Stack Developer", "UI Designer"],
        image: "/images/feature-work/pankaj-kumar.png",
        url: "https://pankajkumarr.vercel.app/",
        category: "Portfolio",
        techStack: ["Next.js", "TypeScript", "Framer Motion"]
    },
    {
        title: "Café Ivory — Artisanal Coffee Lounge",
        description: "An elegant artisanal coffee and bakery lounge website featuring a premium warm aesthetic, full menu showcase, gallery, and customer reviews section.",
        roles: ["Full Stack Developer", "UI Designer"],
        image: "/images/feature-work/cafe-ivory.png",
        url: "https://cafeivory.vercel.app/",
        category: "Hospitality",
        techStack: ["Next.js", "TypeScript", "Tailwind CSS"]
    },
    {
        title: "Anurag Bhati — Full Stack Developer",
        description: "A dark-mode full stack developer portfolio with clean typographic hierarchy, services breakdown, project showcase, and technical skill visualization.",
        roles: ["Full Stack Developer", "UI Designer"],
        image: "/images/feature-work/anurag-bhati.png",
        url: "https://anuragbhati.vercel.app/",
        category: "Portfolio",
        techStack: ["Next.js", "Python", "Django"]
    },
    {
        title: "Crazy Coffee — Premium Cafe Experience",
        description: "A high-energy premium coffee shop website with bold typography, dark warm color scheme, menu exploration, and immersive atmospheric design.",
        roles: ["Full Stack Developer", "UI Designer"],
        image: "/images/feature-work/crazy-cafe.png",
        url: "https://crazy-cafe-demo.vercel.app/",
        category: "Hospitality",
        techStack: ["Next.js", "TypeScript", "Tailwind CSS"]
    },
    {
        title: "Hindu Mythology AI — Scripture Assistant",
        description: "An AI-powered divine scripture assistant providing guidance on Mahabharata, Ramayana, Puranas, Gods, and Astras with an intelligent conversational interface.",
        roles: ["Full Stack Developer", "AI Integration"],
        image: "/images/feature-work/hindu-mythology.png",
        url: "https://hindu-mythology-ai.vercel.app/",
        category: "AI & Technology",
        techStack: ["Next.js", "TypeScript", "Gemini AI"]
    }
]

export const GET = async () => {
    return NextResponse.json({
        featureWork
    });
};