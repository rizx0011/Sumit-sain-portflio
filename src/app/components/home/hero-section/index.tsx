"use client";
import Image from "next/image"
import { useEffect, useState } from "react";
import ContactModal from "../../contact-modal";
import { BadgeCheck, MapPin, ExternalLink, MessageCircle, FileDown } from "lucide-react";
import { SITE_CONFIG } from "@data/config";

// ─── Add more photo filenames here as you upload them to /public/images/hero-sec/
const profileImages = [
    "/images/hero-sec/user-img.jpg",
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
        <section className="pt-0! pb-6! md:pb-8!">
            <div className="container">
                <div className="max-w-5xl mx-auto px-4 sm:px-7">

                    {/* ── Banner image (rounded, contained) ── */}
                    <div className="relative">
                        <div className="w-full h-52 sm:h-64 md:h-[290px] rounded-2xl overflow-hidden shadow-sm bg-muted">
                            <Image
                                src="/images/hero-sec/rizx.gif"
                                alt="Sumit Sain - Full Stack Developer & WordPress Expert portfolio banner"
                                width={1024}
                                height={290}
                                sizes="(max-width: 1024px) 100vw, 1024px"
                                className="w-full object-cover object-top"
                                style={{ height: "115%", marginTop: 0 }}
                                priority
                            />
                        </div>

                        {/* ── Circular profile photo overlapping bottom-left ── */}
                        <div className="absolute -bottom-[52px] left-5 sm:left-7">
                            <div className="relative w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] rounded-full border-4 border-background shadow-md overflow-hidden bg-background">
                                <Image
                                    src={profileImages[currentIdx]}
                                    alt="Sumit Sain"
                                    fill
                                    sizes="120px"
                                    priority
                                    className="object-cover transition-opacity duration-500"
                                    style={{ opacity: fading ? 0 : 1, objectPosition: "50% 15%" }}
                                />
                                <Image
                                    src={profileImages[nextIdx]}
                                    alt="Sumit Sain Full Stack Developer profile photo"
                                    fill
                                    sizes="120px"
                                    className="object-cover absolute inset-0"
                                    style={{ opacity: fading ? 1 : 0, transition: "opacity 500ms", objectPosition: "50% 15%" }}
                                />
                            </div>
                        </div>
                    </div>

                    {/* ── Info block below banner ── */}
                    <div className="pt-[68px] sm:pt-[80px] pb-2 px-1">

                        {/* Name row */}
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                            <h1 className="font-instrument italic text-3xl sm:text-4xl md:text-[42px] font-normal leading-tight tracking-tight text-primary">
                                Sumit Sain
                            </h1>
                            <BadgeCheck className="w-6 h-6 sm:w-7 sm:h-7 text-blue-500 fill-blue-500 flex-shrink-0" style={{ fill: '#3b82f6' }} />
                            <span className="text-secondary/40 font-light text-lg select-none">•</span>
                            <span className="flex items-center gap-1.5 font-jost text-sm text-secondary/70">
                                <MapPin size={14} className="text-secondary/50" />
                                I am from Hanumangarh (Rajasthan)
                            </span>
                        </div>

                        {/* Role / Current badge (Interactive hover switch) */}
                        <div className="flex items-center gap-2 mt-3 mb-8">
                            <a
                                href="https://zenviqdigital.in"
                                target="_blank"
                                rel="noopener noreferrer"
                                title="Visit ZENVIQ Digital"
                                className="group relative inline-flex items-center gap-2 border border-primary/10 hover:border-primary/25 rounded-full px-3.5 py-1.5 bg-background hover:bg-primary/5 transition-all duration-300 shadow-sm cursor-pointer overflow-hidden"
                            >
                                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse flex-shrink-0" />
                                
                                <span className="relative flex items-center h-5 overflow-hidden font-jost text-xs font-semibold tracking-wide">
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
                        <div className="mb-5">
                            <h2 className="font-instrument italic text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-normal leading-[1.1] tracking-tight text-primary">
                                I build websites that
                            </h2>
                            <h2 className="font-instrument text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-normal leading-[1.1] tracking-tight text-secondary/40">
                                bring you clients.
                            </h2>
                        </div>

                        {/* Sub-text */}
                        <p className="font-inter text-sm sm:text-base text-secondary leading-relaxed max-w-[580px] mb-8">
                            Full Stack Developer &amp; WordPress Expert with a passion for building fast, beautiful, and scalable web experiences that help businesses grow online.
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                            <a
                                href={SITE_CONFIG.whatsapp}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 font-jost text-xs font-semibold uppercase tracking-[1.5px] bg-primary text-primary-foreground px-6 py-3.5 rounded-full hover:bg-primary/85 transition-all duration-200 shadow-sm hover:shadow-md"
                            >
                                <MessageCircle size={15} className="text-emerald-400" />
                                Chat on WhatsApp
                            </a>
                            {hasResume && (
                                <a
                                    href="/resume.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    download
                                    className="inline-flex items-center gap-1.5 font-jost text-xs font-semibold uppercase tracking-[1.2px] text-secondary hover:text-primary transition-colors py-2 px-3 border border-primary/10 rounded-full hover:bg-primary/5"
                                >
                                    <FileDown size={14} />
                                    Download Resume
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
