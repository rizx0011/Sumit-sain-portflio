import { Metadata } from "next";
import FeaturedWork from "../components/home/featured-work";

export const metadata: Metadata = {
    title: "Portfolio & Case Studies by Sumit Sain — Featured Projects",
    description: "Browse curated web applications, full-stack projects, and client work built by Sumit Sain.",
};

export default function WorkPage() {
    return (
        <main className="min-h-screen pt-20">
            <FeaturedWork showBackButton={true} />
        </main>
    );
}
