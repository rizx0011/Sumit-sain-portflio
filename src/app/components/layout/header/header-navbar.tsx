"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import {
    Search,
    Menu,
    X,
    Sun,
    Moon,
} from "lucide-react";
import ContactModal from "../../contact-modal";
import CommandPalette from "@/components/ui/command-palette";





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

const HeaderNavbar = () => {
    const router = useRouter();
    const pathname = usePathname();
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isContactOpen, setIsContactOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        // Read saved preference, fallback to system preference
        try {
            const saved = localStorage.getItem("theme");
            const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            const shouldBeDark = saved === "dark" || (!saved && prefersDark);
            if (shouldBeDark) {
                document.documentElement.classList.add("dark");
                setIsDarkMode(true);
            } else {
                document.documentElement.classList.remove("dark");
                setIsDarkMode(false);
            }
        } catch {
            const isDark = document.documentElement.classList.contains("dark");
            setIsDarkMode(isDark);
        }
    }, []);


    const toggleTheme = () => {
        const newMode = !isDarkMode;
        setIsDarkMode(newMode);
        if (newMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    };

    /* Ctrl+K search */
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key === "k") {
                e.preventDefault();
                setIsSearchOpen(true);
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    const handleNavClick = (
        e: React.MouseEvent<HTMLAnchorElement>,
        href: string,
        isContact?: boolean
    ) => {
        if (isContact) {
            e.preventDefault();
            setIsContactOpen(true);
            setIsMobileMenuOpen(false);
            return;
        }
        if (href.startsWith("#")) {
            e.preventDefault();
            const id = href.replace("#", "");
            setIsMobileMenuOpen(false);
            if (pathname !== "/") {
                router.push(`/#${id}`);
            } else {
                const el = document.getElementById(id);
                if (el) el.scrollIntoView({ behavior: "smooth" });
            }
        }
    };

    /* ── Nav links — same as samirsain.com ── */
    const navItems = [
        { label: "About", href: "#about" },
        { label: "Work", href: "#work" },
        { label: "Services", href: "#services" },
        { label: "Components", href: "/tools" },
        { label: "Blog", href: "/blog" },
        { label: "Resume", href: "#education" },
        { label: "Contact", href: "#contact", isContact: true },
    ];


    return (
        <>
            {/* ════════════ NAVBAR ════════════ */}
            <div className="fixed top-0 left-0 right-0 z-50 w-full bg-background/95 backdrop-blur-md border-b border-primary/5 shadow-[0_1px_0_0_rgba(0,0,0,0.05)] transition-shadow duration-300">
                <div className="container mx-auto">
                    <div className="grid grid-cols-[auto_1fr_auto] items-center h-[64px] sm:h-[72px] px-4 sm:px-7 gap-4">

                        {/* ── LEFT: Logo (Removed) ── */}
                        <div className="flex-shrink-0"></div>

                        {/* ── CENTER: Nav links (desktop) — starts from About ── */}
                        <nav className="hidden md:flex items-center justify-center gap-0.5">
                            {navItems.map((item) => (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    onClick={(e) => handleNavClick(e, item.href, item.isContact)}
                                    className="font-jost text-[12px] font-medium text-secondary hover:text-primary px-3 py-2 rounded-lg hover:bg-primary/5 transition-all duration-200 cursor-pointer tracking-wide whitespace-nowrap"
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </nav>

                        {/* ── RIGHT: Social + Theme + Search ── */}
                        <div className="hidden md:flex items-center gap-0.5">
                            {/* Vertical divider */}
                            <div className="w-px h-5 bg-primary/10 mx-2" />

                            {/* Theme toggle */}
                            <button
                                onClick={toggleTheme}
                                className="p-2 rounded-lg text-secondary hover:text-primary hover:bg-primary/5 transition-all duration-200 cursor-pointer"
                                aria-label="Toggle theme"
                            >
                                {isDarkMode ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
                            </button>

                            {/* Search */}
                            <button
                                onClick={() => setIsSearchOpen(true)}
                                className="p-2 rounded-lg text-secondary hover:text-primary hover:bg-primary/5 transition-all duration-200 cursor-pointer"
                                aria-label="Search"
                            >
                                <Search className="w-4 h-4" />
                            </button>
                        </div>

                        {/* ── MOBILE right ── */}
                        <div className="flex md:hidden items-center gap-1">
                            <button
                                onClick={() => setIsSearchOpen(true)}
                                className="p-2 rounded-lg text-secondary hover:text-primary hover:bg-primary/5 transition-colors cursor-pointer"
                                aria-label="Search"
                            >
                                <Search className="w-4.5 h-4.5" />
                            </button>
                            <button
                                onClick={toggleTheme}
                                className="p-2 rounded-lg text-secondary hover:text-primary hover:bg-primary/5 transition-colors cursor-pointer"
                                aria-label="Toggle theme"
                            >
                                {isDarkMode ? <Moon className="w-4.5 h-4.5" /> : <Sun className="w-4.5 h-4.5" />}
                            </button>
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="p-2 rounded-lg text-secondary hover:text-primary hover:bg-primary/5 transition-colors cursor-pointer"
                                aria-label="Toggle menu"
                            >
                                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* ── MOBILE DRAWER ── */}
                <div
                    className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out border-t border-primary/5 ${isMobileMenuOpen
                            ? "max-h-[480px] opacity-100"
                            : "max-h-0 opacity-0 pointer-events-none"
                        }`}
                >
                    <div className="px-5 py-5 flex flex-col gap-5 bg-background/97 backdrop-blur-xl">
                        <nav className="flex flex-col gap-0.5">
                            {navItems.map((item) => (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    onClick={(e) => handleNavClick(e, item.href, item.isContact)}
                                    className="font-jost text-sm font-medium text-secondary hover:text-primary py-2.5 px-3 rounded-lg hover:bg-primary/5 transition-all duration-200 cursor-pointer"
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </nav>

                        <div className="h-px bg-primary/5 w-full" />

                        {/* Social links in mobile drawer */}
                        <div className="flex items-center gap-2">
                            {socials.map((s) => (
                                <a
                                    key={s.label}
                                    href={s.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 rounded-lg text-secondary hover:text-primary hover:bg-primary/5 transition-all duration-200"
                                    aria-label={s.label}
                                >
                                    {s.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Modals */}
            <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
            <CommandPalette
                isOpen={isSearchOpen}
                onClose={() => setIsSearchOpen(false)}
                toggleTheme={toggleTheme}
                isDarkMode={isDarkMode}
                openContact={() => setIsContactOpen(true)}
            />
        </>
    );
};

export default HeaderNavbar;
