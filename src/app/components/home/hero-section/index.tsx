"use client";
import Image from "next/image"
import { useEffect, useState } from "react";
import ContactModal from "../../contact-modal";
import { BadgeCheck, MapPin, ExternalLink } from "lucide-react";

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
        <section className="pt-0! pb-10! md:pb-14!">
            <div className="container">
                <div className="max-w-[780px] mx-auto">

                    {/* ── Banner image (rounded, contained) ── */}
                    <div className="relative">
                        <div className="w-full h-52 sm:h-64 md:h-[270px] rounded-2xl overflow-hidden shadow-sm">
                            <Image
                                src="/images/hero-sec/rizx.gif"
                                alt="Sumit Sain - Full Stack Developer & WordPress Expert portfolio banner"
                                width={780}
                                height={270}
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
                                I am from Rajasthan, India
                            </span>
                        </div>

                        {/* Role badge */}
                        <div className="flex items-center gap-2 mt-3 mb-8">
                            <div className="flex items-center gap-2 border border-primary/10 rounded-full px-3 py-1.5 bg-background hover:bg-primary/3 transition-colors">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse flex-shrink-0" />
                                <span className="font-jost text-xs font-semibold text-secondary/80 tracking-wide">
                                    Full Stack Developer &amp; WordPress Expert
                                </span>
                                <ExternalLink size={11} className="text-secondary/40 ml-0.5" />
                            </div>
                        </div>

                        {/* Big headline — samirsain.com style italic + regular */}
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

                        {/* CTA */}
                        <button
                            onClick={() => setIsContactOpen(true)}
                            className="inline-flex items-center gap-2 font-jost text-xs font-semibold uppercase tracking-[1.5px] bg-primary text-primary-foreground px-6 py-3 rounded-full hover:bg-primary/85 transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer"
                        >
                            Get in touch
                        </button>
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
