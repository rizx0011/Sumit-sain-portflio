import Link from "next/link";

const XIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
);

const socials = [
    {
        label: "Instagram",
        href: "https://instagram.com/sumitsxin01",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-[19px] h-[19px]">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4.5" />
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
            </svg>
        ),
    },
    {
        label: "X (Twitter)",
        href: "https://x.com/sumitsxin01",
        icon: <XIcon />,
    },
    {
        label: "LinkedIn",
        href: "https://linkedin.com/in/sumit-sain",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                <circle cx="4" cy="4" r="2" />
            </svg>
        ),
    },
    {
        label: "GitHub",
        href: "https://github.com/sumitsxin01",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-[19px] h-[19px]">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
        ),
    },
];

const footerNav = [
    { label: "Home", href: "/" },
    { label: "About", href: "/#about" },
    { label: "Work", href: "/#work" },
    { label: "Process", href: "/#process" },
    { label: "Tools", href: "/tools" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/#contact" },
];

const Footer = () => {
    return (
        <footer className="bg-background border-t border-primary/5 py-5 md:py-7">
            <div className="container mx-auto">
                <div className="flex flex-col items-center gap-4 px-4 text-center">

                    {/* Navigation links (including Blog, no Services) */}
                    <nav className="flex flex-wrap items-center justify-center gap-1 sm:gap-2">
                        {footerNav.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                className="font-sans text-xs sm:text-sm font-semibold text-secondary hover:text-primary px-3 py-2 rounded-full hover:bg-primary/5 transition-all min-h-[44px] flex items-center"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Social icons row */}
                    <div className="flex items-center gap-2 sm:gap-3">
                        {socials.map((s) => (
                            <a
                                key={s.label}
                                href={s.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={s.label}
                                className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-full flex items-center justify-center text-primary/80 hover:text-primary hover:bg-primary/10 transition-all duration-200 border border-primary/5"
                            >
                                {s.icon}
                            </a>
                        ))}
                    </div>

                    <div className="w-full max-w-sm h-px bg-primary/5" />

                    {/* Copyright */}
                    <p className="font-sans text-xs font-normal text-secondary/80 text-center tracking-wide">
                        © 2026. All rights reserved.
                    </p>

                </div>
            </div>
        </footer>
    );
};

export default Footer;