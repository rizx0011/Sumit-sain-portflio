"use client";
import React, { useState, useEffect, useRef } from "react";
import { 
    Search, 
    X, 
    ArrowRight, 
    Layout, 
    Server, 
    Globe, 
    BookOpen, 
    Terminal, 
    Moon, 
    Sun, 
    Mail, 
    ExternalLink 
} from "lucide-react";
import { useRouter } from "next/navigation";

interface CommandItem {
    id: string;
    title: string;
    description?: string;
    category: "Navigation" | "Projects" | "Pages" | "Actions";
    icon: React.ReactNode;
    action: () => void;
}

interface CommandPaletteProps {
    isOpen: boolean;
    onClose: () => void;
    toggleTheme: () => void;
    isDarkMode: boolean;
    openContact: () => void;
}

const CommandPalette: React.FC<CommandPaletteProps> = ({
    isOpen,
    onClose,
    toggleTheme,
    isDarkMode,
    openContact
}) => {
    const router = useRouter();
    const [search, setSearch] = useState("");
    const [selectedIndex, setSelectedIndex] = useState(0);
    const inputRef = useRef<HTMLInputElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    // Scroll section helper
    const handleScroll = (id: string) => {
        onClose();
        if (window.location.pathname !== "/") {
            router.push(`/#${id}`);
        } else {
            const el = document.getElementById(id);
            if (el) {
                el.scrollIntoView({ behavior: "smooth" });
            }
        }
    };

    const commands: CommandItem[] = [
        // Navigation / Sections
        {
            id: "nav-about",
            title: "About Me",
            description: "Learn more about Sumit Sain",
            category: "Navigation",
            icon: <Layout className="w-4.5 h-4.5 text-secondary" />,
            action: () => handleScroll("about")
        },
        {
            id: "nav-work",
            title: "Work / Experience",
            description: "View professional experience & roles",
            category: "Navigation",
            icon: <Server className="w-4.5 h-4.5 text-secondary" />,
            action: () => handleScroll("work")
        },
        {
            id: "nav-services",
            title: "Services Offered",
            description: "Skills and technologies Sumit specializes in",
            category: "Navigation",
            icon: <Globe className="w-4.5 h-4.5 text-secondary" />,
            action: () => handleScroll("services")
        },
        {
            id: "nav-education",
            title: "Education & Certifications",
            description: "Academic history and courses completed",
            category: "Navigation",
            icon: <BookOpen className="w-4.5 h-4.5 text-secondary" />,
            action: () => handleScroll("education")
        },
        {
            id: "nav-projects",
            title: "Featured Projects",
            description: "Browse major and minor side projects",
            category: "Navigation",
            icon: <Terminal className="w-4.5 h-4.5 text-secondary" />,
            action: () => handleScroll("projects")
        },
        // Pages
        {
            id: "page-tools",
            title: "Free Tools Page",
            description: "Browse 10 free tools built for the community",
            category: "Pages",
            icon: <Terminal className="w-4.5 h-4.5 text-secondary" />,
            action: () => {
                onClose();
                router.push("/tools");
            }
        },
        {
            id: "page-blog",
            title: "BCA & AI Tech Blog",
            description: "Read about benefits of BCA and Future of AI in Tech",
            category: "Pages",
            icon: <BookOpen className="w-4.5 h-4.5 text-secondary" />,
            action: () => {
                onClose();
                router.push("/education-blog");
            }
        },
        // Projects
        {
            id: "project-aurleis",
            title: "Aurelis Boys Grooming Studio",
            description: "aurleis-saloon.vercel.app (Live Project)",
            category: "Projects",
            icon: <ExternalLink className="w-4.5 h-4.5 text-secondary" />,
            action: () => {
                onClose();
                window.open("https://aurleis-saloon.vercel.app/", "_blank");
            }
        },
        {
            id: "project-pankaj",
            title: "Pankaj Kumar Portfolio",
            description: "pankajkumarr.vercel.app (Live Project)",
            category: "Projects",
            icon: <ExternalLink className="w-4.5 h-4.5 text-secondary" />,
            action: () => {
                onClose();
                window.open("https://pankajkumarr.vercel.app/", "_blank");
            }
        },
        {
            id: "project-cafeivory",
            title: "Café Ivory Lounge",
            description: "cafeivory.vercel.app (Live Project)",
            category: "Projects",
            icon: <ExternalLink className="w-4.5 h-4.5 text-secondary" />,
            action: () => {
                onClose();
                window.open("https://cafeivory.vercel.app/", "_blank");
            }
        },
        {
            id: "project-anurag",
            title: "Anurag Bhati Portfolio",
            description: "anuragbhati.vercel.app (Live Project)",
            category: "Projects",
            icon: <ExternalLink className="w-4.5 h-4.5 text-secondary" />,
            action: () => {
                onClose();
                window.open("https://anuragbhati.vercel.app/", "_blank");
            }
        },
        {
            id: "project-crazycafe",
            title: "Crazy Coffee Experience",
            description: "crazy-cafe-demo.vercel.app (Live Project)",
            category: "Projects",
            icon: <ExternalLink className="w-4.5 h-4.5 text-secondary" />,
            action: () => {
                onClose();
                window.open("https://crazy-cafe-demo.vercel.app/", "_blank");
            }
        },
        {
            id: "project-hindu-mythology",
            title: "Hindu Mythology AI",
            description: "hindu-mythology-ai.vercel.app (AI Project)",
            category: "Projects",
            icon: <ExternalLink className="w-4.5 h-4.5 text-secondary" />,
            action: () => {
                onClose();
                window.open("https://hindu-mythology-ai.vercel.app/", "_blank");
            }
        },
        // Actions
        {
            id: "action-theme",
            title: isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode",
            description: "Toggle theme preference across the site",
            category: "Actions",
            icon: isDarkMode ? <Sun className="w-4.5 h-4.5 text-secondary" /> : <Moon className="w-4.5 h-4.5 text-secondary" />,
            action: () => {
                toggleTheme();
                onClose();
            }
        },
        {
            id: "action-contact",
            title: "Get in touch / Contact Me",
            description: "Open contact modal to send a message",
            category: "Actions",
            icon: <Mail className="w-4.5 h-4.5 text-secondary" />,
            action: () => {
                onClose();
                openContact();
            }
        }
    ];

    // Filter commands based on search term
    const filteredCommands = commands.filter((cmd) => {
        const query = search.toLowerCase();
        return (
            cmd.title.toLowerCase().includes(query) ||
            cmd.description?.toLowerCase().includes(query) ||
            cmd.category.toLowerCase().includes(query)
        );
    });

    // Reset selected index when search changes
    useEffect(() => {
        setSelectedIndex(0);
    }, [search]);

    // Handle keypresses
    useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "ArrowDown") {
                e.preventDefault();
                setSelectedIndex((prev) => 
                    prev < filteredCommands.length - 1 ? prev + 1 : 0
                );
            } else if (e.key === "ArrowUp") {
                e.preventDefault();
                setSelectedIndex((prev) => 
                    prev > 0 ? prev - 1 : filteredCommands.length - 1
                );
            } else if (e.key === "Enter") {
                e.preventDefault();
                if (filteredCommands[selectedIndex]) {
                    filteredCommands[selectedIndex].action();
                }
            } else if (e.key === "Escape") {
                e.preventDefault();
                onClose();
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isOpen, filteredCommands, selectedIndex, onClose]);

    // Auto-focus input when opened
    useEffect(() => {
        if (isOpen) {
            setTimeout(() => {
                inputRef.current?.focus();
            }, 100);
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    // Close on click outside
    const handleBackdropClick = (e: React.MouseEvent) => {
        if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
            onClose();
        }
    };

    if (!isOpen) return null;

    // Group commands by category for display
    const categories: { [key: string]: CommandItem[] } = {};
    filteredCommands.forEach((cmd) => {
        if (!categories[cmd.category]) {
            categories[cmd.category] = [];
        }
        categories[cmd.category].push(cmd);
    });

    let overallIndex = 0;

    return (
        <div 
            className="fixed inset-0 z-[120] flex items-start justify-center p-4 pt-[12vh]"
            onClick={handleBackdropClick}
        >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/60 dark:bg-black/85 backdrop-blur-xs transition-opacity duration-300" />

            {/* Modal Container */}
            <div 
                ref={containerRef}
                className="relative w-full max-w-xl bg-card border border-primary/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[70vh] animate-in fade-in zoom-in-95 duration-200"
            >
                {/* Search Header */}
                <div className="flex items-center gap-3 px-4 border-b border-primary/5">
                    <Search className="w-5 h-5 text-secondary flex-shrink-0" />
                    <input
                        ref={inputRef}
                        type="text"
                        placeholder="Search sections, projects, tools, actions..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full py-4 text-primary bg-transparent border-none outline-none text-sm placeholder-secondary/50"
                    />
                    {search && (
                        <button 
                            onClick={() => setSearch("")}
                            className="p-1 hover:bg-primary/5 rounded-full text-secondary"
                        >
                            <X className="w-4 h-4" />
                        </button>
                    )}
                    <kbd className="hidden sm:inline-flex h-5 select-none items-center gap-0.5 rounded border border-primary/10 bg-primary/5 px-1.5 font-sans text-[10px] font-medium text-secondary">
                        ESC
                    </kbd>
                </div>

                {/* Commands List */}
                <div className="flex-1 overflow-y-auto p-2 scrollbar-thin">
                    {filteredCommands.length === 0 ? (
                        <div className="py-8 text-center text-secondary text-sm">
                            No results found for &ldquo;{search}&rdquo;
                        </div>
                    ) : (
                        Object.keys(categories).map((cat) => (
                            <div key={cat} className="mb-2">
                                <h5 className="px-3 py-2 text-[11px] font-semibold text-secondary/60 uppercase tracking-wider">
                                    {cat}
                                </h5>
                                <div className="flex flex-col gap-0.5">
                                    {categories[cat].map((cmd) => {
                                        const currentIndex = overallIndex++;
                                        const isSelected = currentIndex === selectedIndex;
                                        return (
                                            <button
                                                key={cmd.id}
                                                onClick={cmd.action}
                                                onMouseEnter={() => setSelectedIndex(currentIndex)}
                                                className={`w-full flex items-center justify-between text-left px-3 py-2.5 rounded-xl transition-all duration-150 ${
                                                    isSelected 
                                                        ? "bg-primary/5 dark:bg-primary/10 text-primary" 
                                                        : "text-secondary hover:text-primary"
                                                }`}
                                            >
                                                <div className="flex items-center gap-3 min-w-0">
                                                    <div className={`p-1.5 rounded-lg border transition-colors ${
                                                        isSelected ? "bg-card border-primary/10" : "bg-primary/5 border-transparent"
                                                    }`}>
                                                        {cmd.icon}
                                                    </div>
                                                    <div className="min-w-0">
                                                        <div className="text-[13px] font-semibold tracking-tight">{cmd.title}</div>
                                                        {cmd.description && (
                                                            <div className="text-[11px] text-secondary/70 truncate">{cmd.description}</div>
                                                        )}
                                                    </div>
                                                </div>
                                                {isSelected && (
                                                    <ArrowRight className="w-4 h-4 text-primary animate-in slide-in-from-left-2 duration-200" />
                                                )}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {/* Footer Help */}
                <div className="px-4 py-2 bg-primary/5 dark:bg-primary/10 border-t border-primary/5 flex justify-between items-center text-[10px] text-secondary/60">
                    <div className="flex gap-3">
                        <span><kbd className="border border-primary/10 bg-card px-1 rounded">↑↓</kbd> Navigate</span>
                        <span><kbd className="border border-primary/10 bg-card px-1 rounded">Enter</kbd> Select</span>
                    </div>
                    <span>Sumit Kumar Portfolio</span>
                </div>
            </div>
        </div>
    );
};

export default CommandPalette;
