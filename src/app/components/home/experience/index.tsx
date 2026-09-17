"use client";
import { useEffect, useState } from "react";
import { Briefcase } from "lucide-react";
import Image from "next/image";
import { ExperienceItem } from "@/types";

const Experience = () => {
    const [experienceData, setExperienceData] = useState<ExperienceItem[] | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/api/page-data')
                if (!res.ok) throw new Error('Failed to fetch')
                const data = await res.json()
                setExperienceData(data?.experienceData)
            } catch (error) {
                console.error('Error fetching experience data:', error)
            }
        }

        fetchData()
    }, [])

    return (
        <section id="work">
            <div className="container relative z-10">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="flex flex-col gap-2 mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
                        <div className="flex items-center gap-3 text-primary mb-2">
                            <div className="p-2 bg-primary/5 rounded-lg">
                                <Briefcase size={24} className="text-primary" />
                            </div>
                            <div>
                                <h2 className="text-lg sm:text-2xl font-semibold tracking-tight">Experience</h2>
                                <p className="text-secondary text-sm font-normal">Professional career & history</p>
                            </div>
                        </div>
                    </div>

                    {/* Timeline */}
                    <div className="relative pl-8 sm:pl-12">
                        {/* Vertical Line */}
                        <div className="absolute left-[15px] sm:left-[19px] top-4 bottom-4 w-[2px] bg-primary/5" />

                        <div className="flex flex-col gap-12">
                            {experienceData?.map((item: ExperienceItem, index: number) => (
                                <div
                                    key={index}
                                    className="relative transition-all duration-300 group"
                                    style={{ animationDelay: `${index * 150}ms` }}
                                >
                                    {/* Timeline Node */}
                                    <div className="absolute -left-[33px] sm:-left-[41px] top-0 z-10 p-1.5 sm:p-2 rounded-xl bg-card border border-primary/5 shadow-sm transition-transform duration-300 group-hover:scale-110">
                                        <Briefcase size={16} className="text-primary sm:w-[20px] sm:h-[20px]" />
                                    </div>

                                    {/* Content Card */}
                                    <div className="bg-card rounded-2xl p-6 sm:p-8 border border-primary/5 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)] transition-all duration-500 hover:shadow-[0_10px_30px_-5px_rgba(0,0,0,0.08)] hover:-translate-y-1 group">
                                        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                                            <div className="flex items-center gap-4">
                                                <div className="w-10 h-10 rounded-lg overflow-hidden border border-primary/5 bg-primary/5 flex items-center justify-center p-1.5">
                                                    <Image src={item.icon} alt={item.role ? `${item.role} at company logo` : "Company logo"} width={28} height={28} className="object-contain" />
                                                </div>
                                                <div className="flex flex-col gap-0.5">
                                                    <h3 className="text-base sm:text-xl font-semibold text-primary">{item.role}</h3>
                                                    <p className="text-secondary font-normal text-xs sm:text-sm">{item.location}</p>
                                                </div>
                                            </div>

                                            <div className="inline-flex items-center self-start text-primary text-xs font-semibold whitespace-nowrap bg-primary/5 px-3 py-1 rounded-full border border-primary/5">
                                                {item.startYear} – {item.endYear}
                                            </div>
                                        </div>

                                        <ul className="mt-6 flex flex-col gap-3">
                                            {item.bulletPoints?.map((point: string, idx: number) => (
                                                <li
                                                    key={idx}
                                                    className="flex items-start gap-2.5 text-sm sm:text-base font-normal text-secondary animate-in fade-in slide-in-from-bottom-2 duration-300"
                                                >
                                                    <span className="w-1.5 h-1.5 rounded-full bg-primary/30 mt-2 flex-shrink-0" />
                                                    {point}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience;