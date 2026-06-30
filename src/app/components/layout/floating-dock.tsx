"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
    Home,
    Notebook,
    Github,
    Linkedin,
    Instagram,
    Mail,
    Sun,
    Moon
} from "lucide-react";

const FloatingDock = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        // Check initial theme
        const isDark = document.documentElement.classList.contains("dark");
        setIsDarkMode(isDark);
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

    const navItems = [
        { icon: <Home size={22} strokeWidth={1.5} />, href: "/", label: "Home" },
        { icon: <Notebook size={22} strokeWidth={1.5} />, href: "#projects", label: "Projects" },
        { icon: <Github size={22} strokeWidth={1.5} />, href: "https://github.com/sumitsxin01", label: "Github" },
        { icon: <Linkedin size={22} strokeWidth={1.5} />, href: "https://linkedin.com/in/sumit-sain", label: "Linkedin" },
        { icon: <Instagram size={22} strokeWidth={1.5} />, href: "https://instagram.com/sumitsxin01", label: "Instagram" },
        { icon: <Mail size={22} strokeWidth={1.5} />, href: "mailto:sumitsain13698@gmail.com", label: "Email" },
    ];

    return (
        <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <div className="flex items-center gap-2 px-4 py-2.5 bg-card/70 dark:bg-black/40 backdrop-blur-2xl border border-primary/[0.06] rounded-full shadow-[0_8px_40px_rgba(0,0,0,0.08)] dark:shadow-[0_8px_40px_rgba(0,0,0,0.4)] transition-all duration-300">
                {navItems.map((item, index) => (
                    <Link
                        key={index}
                        href={item.href}
                        className="p-2.5 sm:p-3 rounded-full border border-transparent hover:border-primary/[0.08] hover:bg-primary/[0.02] dark:hover:bg-card/[0.05] text-secondary hover:text-primary transition-all duration-300 group relative hover:scale-110 active:scale-95"
                        aria-label={item.label}
                    >
                        {item.icon}
                        {/* Tooltip */}
                        <span className="absolute -top-14 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-[11px] px-3 py-1.5 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 scale-90 group-hover:scale-100 whitespace-nowrap pointer-events-none shadow-2xl border border-white/10">
                            {item.label}
                            {/* Tooltip Arrow */}
                            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-primary rotate-45" />
                        </span>
                    </Link>
                ))}

                {/* Subtle Divider */}
                <div className="w-[1px] h-6 bg-primary/[0.08] mx-1" />

                <button
                    onClick={toggleTheme}
                    className="p-2.5 sm:p-3 rounded-full border border-transparent hover:border-primary/[0.08] hover:bg-primary/[0.02] dark:hover:bg-card/[0.05] text-secondary hover:text-primary transition-all duration-300 group relative hover:scale-110 active:scale-95"
                    aria-label="Toggle theme"
                >
                    {isDarkMode ? <Sun size={22} strokeWidth={1.5} /> : <Moon size={22} strokeWidth={1.5} />}
                    {/* Tooltip */}
                    <span className="absolute -top-14 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-[11px] px-3 py-1.5 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 scale-90 group-hover:scale-100 whitespace-nowrap pointer-events-none shadow-2xl border border-white/10">
                        {isDarkMode ? "Light Mode" : "Dark Mode"}
                        <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-primary rotate-45" />
                    </span>
                </button>
            </div>
        </div>
    );
};

export default FloatingDock;
