"use client";
import Image from "next/image"
import { useEffect, useState } from "react";
import ContactModal from "../../contact-modal";
import { BadgeCheck, MapPin, ExternalLink, MessageCircle, FileDown } from "lucide-react";
import { SITE_CONFIG } from "@data/config";

// ─── Add more photo filenames here as you upload them to /public/images/hero-sec/
const profileImages = [
    "/images/hero-sec/sumit-profile-full.jpg",
];

const INTERVAL_MS = 3000;

const HeroSection = () => {
    const [currentIdx, setCurrentIdx] = useState(0);
    const [nextIdx, setNextIdx] = useState(1 % profileImages.length);
    const [fading, setFading] = useState(false);
    const [isContactOpen, setIsContactOpen] = useState(false);
    const [hasResume, setHasResume] = useState(false);

    useEffect(() => {
        // Check if resume.pdf exists in public/
        fetch("/resume.pdf", { method: "HEAD" })
            .then((res) => {
                if (res.ok) setHasResume(true);
            })
            .catch(() => setHasResume(false));
    }, []);

    useEffect(() => {
        if (profileImages.length < 2) return;
        const timer = setInterval(() => {
            setFading(true);
            setTimeout(() => {
                setCurrentIdx(prev => {
                    const next = (prev + 1) % profileImages.length;
                    setNextIdx((next + 1) % profileImages.length);
                    return next;
                });
                setFading(false);
            }, 500);
        }, INTERVAL_MS);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="pt-0! pb-5! md:pb-8!">
            <div className="container">
                <div className="max-w-[860px] mx-auto">

                    {/* ── Banner image (rounded, cropped bottom to completely remove watermark) ── */}
                    <div className="relative">
                        <div className="w-full h-40 sm:h-52 md:h-[220px] rounded-3xl overflow-hidden shadow-sm bg-muted border border-primary/5 relative">
                            <Image
                                src="/images/hero-sec/rizx.gif"
                                alt="Full Stack Developer & WordPress Expert portfolio banner"
                                width={1024}
                                height={280}
                                sizes="(max-width: 1024px) 100vw, 1024px"
                                className="w-full h-auto min-h-full object-cover object-top -mb-8 scale-[1.03] origin-top"
                                priority
                            />
                        </div>

                        {/* ── Circular profile photo overlapping bottom-left ── */}
                        <div className="absolute -bottom-[52px] sm:-bottom-[68px] left-4 sm:left-7">
                            <div className="relative w-[105px] h-[105px] sm:w-[136px] sm:h-[136px] rounded-full border-4 border-background shadow-md overflow-hidden bg-background">
                                <Image
                                    src={profileImages[currentIdx]}
                                    alt="Sumit Sain"
                                    fill
                                    sizes="(max-width: 640px) 105px, 136px"
                                    priority
                                    className="object-cover transition-opacity duration-500"
                                    style={{ opacity: fading ? 0 : 1, objectPosition: "center" }}
                                />
                                <Image
                                    src={profileImages[nextIdx]}
                                    alt="Sumit Sain Full Stack Developer profile photo"
                                    fill
                                    sizes="(max-width: 640px) 105px, 136px"
                                    className="object-cover absolute inset-0"
                                    style={{ opacity: fading ? 1 : 0, transition: "opacity 500ms", objectPosition: "center" }}
                                />
                            </div>
                        </div>
                    </div>

                    {/* ── Info block below banner ── */}
                    <div className="pt-[64px] sm:pt-[84px] pb-2 px-1">

                        {/* Name row */}
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                            <h1 className="font-serif italic text-2xl sm:text-3xl md:text-[38px] font-normal leading-tight tracking-tight text-primary">
                                Sumit Sain
                            </h1>
                            <BadgeCheck className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500 fill-blue-500 flex-shrink-0" style={{ fill: '#3b82f6' }} />
                            <span className="text-secondary/40 font-light text-base select-none">•</span>
                            <span className="flex items-center gap-1.5 font-sans text-xs sm:text-sm text-secondary/80">
                                <MapPin size={13} className="text-secondary/60" />
                                Hanumangarh (Rajasthan), India
                            </span>
                        </div>

                        {/* Role / Current badge (Interactive hover switch) */}
                        <div className="flex items-center gap-2 mt-3 mb-6">
                            <a
                                href="https://zenviqdigital.in"
                                target="_blank"
                                rel="noopener noreferrer"
                                title="Visit ZENVIQ Digital"
                                className="group relative inline-flex items-center gap-2 border border-primary/10 hover:border-primary/25 rounded-full px-3.5 py-1.5 bg-background hover:bg-primary/5 transition-all duration-300 shadow-xs cursor-pointer overflow-hidden min-h-[36px]"
                            >
                                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse flex-shrink-0" />
                                
                                <span className="relative flex items-center h-5 overflow-hidden font-sans text-xs font-semibold tracking-wide">
                                    {/* Default state: Currently at ZENVIQ */}
                                    <span className="inline-flex items-center gap-1 text-secondary/85 transition-all duration-300 ease-out group-hover:-translate-y-full group-hover:opacity-0 whitespace-nowrap">
                                        <span>Currently at</span>
                                        <span className="text-primary font-bold">ZENVIQ</span>
                                    </span>

                                    {/* Hover state: Full Stack Developer & WordPress Expert */}
                                    <span className="absolute inset-0 inline-flex items-center text-primary transition-all duration-300 ease-out translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 whitespace-nowrap">
                                        Full Stack Developer &amp; WordPress Expert
                                    </span>
                                </span>

                                <ExternalLink size={11} className="text-secondary/40 group-hover:text-primary transition-colors ml-0.5 flex-shrink-0" />
                            </a>
                        </div>

                        {/* Big headline */}
                        <div className="mb-4">
                            <h2 className="font-serif italic text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-normal leading-[1.12] tracking-tight text-primary">
                                I build websites that
                            </h2>
                            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-normal leading-[1.12] tracking-tight text-secondary/40">
                                bring you clients.
                            </h2>
                        </div>

                        {/* Sub-text */}
                        <p className="font-sans text-sm sm:text-base text-secondary leading-relaxed max-w-[580px] mb-7">
                            Full Stack Developer &amp; WordPress Expert with a passion for building fast, beautiful, and scalable web experiences that help businesses grow online.
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                            <a
                                href={SITE_CONFIG.whatsapp}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 font-sans text-xs font-semibold uppercase tracking-[1.5px] bg-primary text-primary-foreground px-6 py-3.5 rounded-full hover:bg-primary/85 transition-all duration-200 shadow-sm hover:shadow-md min-h-[44px]"
                            >
                                <MessageCircle size={15} className="text-emerald-400" />
                                <span>Chat on WhatsApp</span>
                            </a>
                            {hasResume && (
                                <a
                                    href="/resume.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    download
                                    className="inline-flex items-center justify-center gap-1.5 font-sans text-xs font-semibold uppercase tracking-[1.2px] text-secondary hover:text-primary transition-colors py-2.5 px-4 border border-primary/10 rounded-full hover:bg-primary/5 min-h-[44px]"
                                >
                                    <FileDown size={14} />
                                    <span>Download Resume</span>
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <ContactModal
                isOpen={isContactOpen}
                onClose={() => setIsContactOpen(false)}
            />
        </section>
    );
};

export default HeroSection;
