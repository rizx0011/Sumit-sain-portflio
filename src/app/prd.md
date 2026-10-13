You are a senior Next.js + Tailwind developer. Work on my existing portfolio (Next.js, Tailwind, deployed on Vercel at sumitsain.vercel.app).

## HARD RULES (do not break)
1. DO NOT change the existing design language: keep the current colors, fonts, spacing scale, border radius, animations, dark/light theme behavior and component styles. Reuse existing components, CSS variables and Tailwind classes. Any new section must look like it was always part of the site.
2. DO NOT touch the Experience and Education sections (content, layout, code) at all.
3. DO NOT remove existing sections or change the navbar design. Only add nav links for new sections in the same style.
4. First read the whole codebase (app/ or pages/, components/, styles, data files) and follow its existing patterns and file structure. Do not add heavy new dependencies.
5. All new sections must be responsive, accessible (semantic HTML, alt text, focus states) and match the existing scroll/reveal animations.
6. Never invent fake client reviews, fake results or fake numbers. Use only the facts given below.

## MY DETAILS
- Name: Sumit Sain, Rajasthan, India
- WhatsApp: 919649732195 -> link: https://wa.me/919649732195?text=Hi%20Sumit%2C%20I%20want%20a%20website
- Email: sumitsain13698@email.com
- Booking link: none (skip any booking UI)
- Contact form provider: Formspree (key/endpoint in env variable NEXT_PUBLIC_FORMSPREE_ID), sends to the email above
- Real stats: 2 projects delivered, 2 years of coding
- Typical project delivery: about 1 week for small/medium sites
- Pricing: NOT public yet. Build the Pricing section fully, but hide it behind a flag `SHOW_PRICING = false` in a config file (data/config.ts). Also do not show any ₹ price anywhere else on the site for now. Use "Get a quote" instead.
- Resume: /public/resume.pdf (I will add the file; if missing, hide the button gracefully)

## PART 1: EDIT EXISTING SECTIONS

### Hero + About (positioning fix)
- About currently says "BCA 4th Semester Student" while the hero says "Expert". Rewrite About in 3-4 confident, honest lines: a developer with 2 years of hands-on experience who builds fast, clean websites for businesses, currently pursuing BCA. Keep the personal tone, no fluff, no exaggerated claims.
- Add a stats strip right below the hero in the existing UI style: "2 Projects Delivered", "2 Years Coding", "10+ Technologies", "1 Week Avg. Delivery".
- Hero CTAs: keep "Get in touch" and add a secondary button "Chat on WhatsApp". Add "Download Resume" as a subtle third link.

### Core Expertises
- Remove the percentage bars (90% etc.).
- Regroup the tech icons with small labels: "Main Stack" (HTML5, CSS3, JavaScript, React, Next.js, Tailwind CSS, Node.js, WordPress, MongoDB, MySQL), "Also Worked With" (Bootstrap, Express.js, PHP, Python, PostgreSQL), "Learning" (TypeScript, Vue.js, Laravel, Django). Remove Angular and Flask.
- Fix the duplicated icon list unless it is an intentional marquee. Keep icon style and animation.

### Services
- Replace the plain list of 10 overlapping items with 5 cards in the existing card style: WordPress Business Websites, Next.js / React Web Apps, E-commerce Development, Website Redesign and UI/UX, SEO and Speed Optimization.
- Each card: icon, one-line benefit, 3 bullets of what is included, delivery time (WordPress site: 5-7 days, Next.js app: 7-14 days, E-commerce: 10-15 days, Redesign: 5-7 days, SEO and speed: 3-5 days), and a "Get a quote" button scrolling to Contact. No prices.

### Free AI Tools
- Change "our hand-picked collection" to first person ("my").
- Rename the nav item "Components" to "Tools" so it matches the section.
- Move this section below the Contact/CTA block, above the footer.

### Projects
- Keep the existing filter and "Total Works" UI and existing projects.
- For each project card add (only if data exists, otherwise skip, never invent): one-line problem-solution, tech stack tags, "Live" and "Code" links. Put all project data in data/projects.ts.
- I have a one-week project ready to add: create a clearly marked entry in data/projects.ts with TODO fields (title, description, stack, live URL, repo URL, image) so I can fill it quickly, and hide it from the page until its title is filled.

### Contact
- Show email, a WhatsApp button and a working contact form (name, email, project type dropdown, budget range dropdown with "Not sure yet" as default, message) with validation, loading state and success/error message, using Formspree.
- Add a final CTA banner right before the footer: "Have a project in mind? Let's build it." with WhatsApp and email buttons.

### Footer
- Change "© 2016–2026" to "© 2026 Sumit Sain". Keep the Osho quote and video untouched.

## PART 2: NEW SECTIONS (match existing design and animations)
Order on the page: Hero, Stats strip, About, Services, Projects, Process, Pricing (hidden by flag), Testimonials, Core Expertises, FAQ, Contact + CTA, Free AI Tools, Footer. Experience and Education stay where they are.

1. **How I Work**: 4 steps with number and icon: Discuss, Design, Develop, Launch and Support, one line each.
2. **Pricing**: 3 cards (Starter: landing page/portfolio, Business: 5-8 page WordPress/Next.js site, Custom: web app/e-commerce), middle one marked "Most Popular". Use "Get a quote" buttons, no amounts. Render only when SHOW_PRICING is true. Content in data/pricing.ts.
3. **Testimonials**: visible. Data in data/testimonials.ts (empty array for now). When empty, show one honest card in the same style: "My first client reviews are on the way. Want to be next? Let's talk." with a WhatsApp button. When reviews exist, render a slider/grid with name, role and quote.
4. **FAQ**: accordion with 6 honest answers: how long does a website take (about 1 week for small sites), what do you need from me, who handles hosting and domain, how many revisions, support after launch, do you work with clients outside India.
5. **Resume button**: handled in Hero.

## PART 3: PERFORMANCE AND SEO
- Replace the heavy hero GIF (rizx.gif) with an optimized muted autoplay looping MP4/WebM with a poster, or a compressed image. Lazy-load below-the-fold images and set correct `sizes` on next/image (profile photo must not load at 3840px).
- Add JSON-LD: `Person` (name, jobTitle, url, sameAs = my 4 social links, address Rajasthan India) and `WebSite`.
- Add app/sitemap.ts and app/robots.ts if missing. Set metadataBase, canonical URL and per-page metadata for /blog and /tools.
- Update meta description: "Full Stack Developer & WordPress Expert from Rajasthan, India. I build fast, SEO-friendly websites and web apps for businesses."
- Fix layout shift (image dimensions), unused JS and missing aria-labels.

## OUTPUT
1. First show a short plan listing files to create or edit.
2. Keep all editable content (stats, services, FAQ, pricing, testimonials, projects) in data files, not hard-coded in JSX.
3. Finish with a summary: what changed, which TODO fields I must fill (new project, resume.pdf, Formspree ID), how to turn Pricing on (SHOW_PRICING), and confirm Experience and Education are untouched.