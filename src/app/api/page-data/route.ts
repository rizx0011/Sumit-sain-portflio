import { NextResponse } from "next/server";

const experienceData = [
    {
        icon: "/images/icon/tailwind-icon.svg",
        role: "Full Stack Developer",
        location: "Remote",
        startYear: "2025",
        endYear: "Present",
        bulletPoints: [
            "Developed scalable full-stack web applications using React, Node.js, Express, and MongoDB",
            "Built responsive and modern UI interfaces with Tailwind CSS for better user experience",
            "Collaborated with designers and developers to deliver high-performance features and reusable components"
        ]
    },
    {
        icon: "/images/icon/asana-icon.svg",
        role: "WordPress Developer",
        location: "Remote",
        startYear: "2024",
        endYear: "Present",
        bulletPoints: [
            "Developed custom WordPress websites with responsive and user-friendly designs",
            "Customized themes, plugins, and layouts to improve website functionality and performance",
            "Worked with clients and teams to deliver fast, SEO-friendly, and mobile-optimized websites"
        ]
    },
]

const educationData = [
    {
        date: "2024 — Present",
        title: "Bachelor of Computer Applications (BCA)",
        subtitle: "4th Semester",
        badge: "Present"
    },
    {
        date: "2024 — 2024",
        title: "Web Development Certification",
        subtitle: "Full Stack Mastery",
        badge: "Completed"
    },
    {
        date: "2023 — 2024",
        title: "Higher Secondary Education",
        subtitle: "Science & Mathematics"
    }
];


const projectOverview = {
    caseStudies: [
        { name: "Aurelis Salon", url: "https://aurleis-saloon.vercel.app/" },
        { name: "Pankaj Kumar", url: "https://pankajkumarr.vercel.app/" },
    ],
    sideProjects: [
        { name: "Aurelis Grooming Studio", url: "https://aurleis-saloon.vercel.app/", image: "/images/feature-work/aurleis-saloon.png" },
        { name: "Pankaj Kumar Portfolio", url: "https://pankajkumarr.vercel.app/", image: "/images/feature-work/pankaj-kumar.png" },
        { name: "Café Ivory Lounge", url: "https://cafeivory.vercel.app/", image: "/images/feature-work/cafe-ivory.png" },
        { name: "Anurag Bhati Portfolio", url: "https://anuragbhati.vercel.app/", image: "/images/feature-work/anurag-bhati.png" },
        { name: "Crazy Coffee", url: "https://crazy-cafe-demo.vercel.app/", image: "/images/feature-work/crazy-cafe.png" },
        { name: "Hindu Mythology AI", url: "https://hindu-mythology-ai.vercel.app/", image: "/images/feature-work/hindu-mythology.png" },
    ]
};


export const GET = async () => {
    return NextResponse.json({
        experienceData,
        educationData,
        projectOverview
    });
};