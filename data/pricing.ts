export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  popular?: boolean;
  for: string;
  features: string[];
  cta: string;
}

export const pricingPlans: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter",
    tagline: "For individuals who need a clean online presence fast.",
    for: "Landing page or personal portfolio",
    features: [
      "Single-page responsive design",
      "Mobile-first & SEO ready",
      "Contact form integration",
      "Delivered in 3–5 days",
    ],
    cta: "Get a quote",
  },
  {
    id: "business",
    name: "Business",
    tagline: "Everything you need for a professional multi-page website.",
    popular: true,
    for: "5–8 page WordPress or Next.js site",
    features: [
      "Up to 8 fully designed pages",
      "WordPress CMS or Next.js",
      "SEO setup + speed optimisation",
      "Blog, gallery, or portfolio section",
      "3 rounds of revisions",
      "Delivered in 7–14 days",
    ],
    cta: "Get a quote",
  },
  {
    id: "custom",
    name: "Custom",
    tagline: "Complex projects built exactly to your requirements.",
    for: "Web app, SaaS, or e-commerce store",
    features: [
      "Full-stack web application",
      "Authentication & dashboard",
      "API integrations",
      "Payment gateway setup",
      "Dedicated support post-launch",
      "Timeline based on scope",
    ],
    cta: "Get a quote",
  },
];
