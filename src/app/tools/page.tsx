import { Metadata } from "next";
import ToolsContent from "./tools-content";

export const metadata: Metadata = {
  title: "Free AI Tools by Sumit Sain",
  description:
    "Discover the best free AI tools for web building, design, coding, automation, and more — curated by Sumit Sain, Full Stack Developer.",
};

export default function ToolsPage() {
  return <ToolsContent />;
}
