import { Metadata } from "next";
import FeaturedWork from "../components/home/featured-work";

export const metadata: Metadata = {
    title: "Portfolio & Case Studies by Sumit Sain — Featured Projects",
    description: "Browse curated web applications, full-stack projects, and client work built by Sumit Sain.",
    openGraph: {
        title: "Portfolio & Case Studies by Sumit Sain — Featured Projects",
        description: "Browse curated web applications, full-stack projects, and client work built by Sumit Sain.",
        url: "https://sumitsain.vercel.app/work",
        siteName: "Sumit Sain",
        images: [
            {
                url: "https://sumitsain.vercel.app/images/hero-sec/user-img.jpg",
                width: 1200,
                height: 630,
            },
        ],
        locale: "en_IN",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Portfolio & Case Studies by Sumit Sain — Featured Projects",
        description: "Browse curated web applications, full-stack projects, and client work built by Sumit Sain.",
        images: ["https://sumitsain.vercel.app/images/hero-sec/user-img.jpg"],
    },
};

export default function WorkPage() {
    return (
        <main className="min-h-screen pt-20">
            <FeaturedWork showBackButton={true} />
        </main>
    );
}
