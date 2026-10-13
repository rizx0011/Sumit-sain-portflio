export interface Service {
  id: string;
  icon: string; // lucide icon name
  title: string;
  benefit: string;
  bullets: string[];
  delivery: string;
}

export const services: Service[] = [
  {
    id: "wordpress",
    icon: "Globe",
    title: "WordPress Business Websites",
    benefit: "A professional website that brings you clients — without the heavy cost.",
    bullets: [
      "Custom theme setup & full design",
      "SEO-optimised pages & speed tuning",
      "Contact forms, plugins & ongoing support",
    ],
    delivery: "5–7 days",
  },
  {
    id: "nextjs",
    icon: "Layers",
    title: "Next.js / React Web Apps",
    benefit: "Fast, scalable web applications built to grow with your business.",
    bullets: [
      "Full-stack Next.js with TypeScript & Tailwind",
      "REST API or server actions integration",
      "Auth, dashboard, and dynamic routes",
    ],
    delivery: "7–14 days",
  },
  {
    id: "ecommerce",
    icon: "ShoppingCart",
    title: "E-commerce Development",
    benefit: "Sell online with a store that looks great and converts visitors.",
    bullets: [
      "WooCommerce or custom cart setup",
      "Product pages, checkout & payment integration",
      "Mobile-first design & performance optimised",
    ],
    delivery: "10–15 days",
  },
  {
    id: "redesign",
    icon: "Paintbrush",
    title: "Website Redesign & UI/UX",
    benefit: "Turn an outdated site into a modern experience that builds trust.",
    bullets: [
      "Full visual redesign keeping your brand identity",
      "Improved layout, typography & responsiveness",
      "Better UX flow and accessibility",
    ],
    delivery: "5–7 days",
  },
  {
    id: "seo",
    icon: "Zap",
    title: "SEO & Speed Optimization",
    benefit: "Rank higher and load faster — keep visitors before they bounce.",
    bullets: [
      "Core Web Vitals & Lighthouse audit",
      "On-page SEO, meta tags & sitemap setup",
      "Image optimization, lazy loading & caching",
    ],
    delivery: "3–5 days",
  },
];
