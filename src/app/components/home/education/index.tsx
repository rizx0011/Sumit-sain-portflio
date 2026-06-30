"use client";
import { useEffect, useState } from "react";
import { GraduationCap } from "lucide-react";
import { EducationItem } from "@/types";

const Education = () => {
    const [educationData, setEducationData] = useState<EducationItem[] | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/api/page-data')
                if (!res.ok) throw new Error('Failed to fetch')
                const data = await res.json()
                setEducationData(data?.educationData)
            } catch (error) {
                console.error('Error fetching education data:', error)
            }
        }

        fetchData()
    }, [])

    return (
        <section id="education">
            <div className="container relative z-10">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="flex flex-col gap-2 mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
                        <div className="flex items-center gap-3 text-primary mb-2">
                            <div className="p-2 bg-primary/5 rounded-lg">
                                <GraduationCap size={24} className="text-primary" />
                            </div>
                            <div>
                                <h2 className="text-lg sm:text-2xl font-semibold tracking-tight">Education</h2>
                                <p className="text-secondary text-sm font-normal">Academic journey & certifications</p>
                            </div>
                        </div>
                    </div>

                    {/* Timeline */}
                    <div className="relative pl-8 sm:pl-12">
                        {/* Vertical Line */}
                        <div className="absolute left-[15px] sm:left-[19px] top-4 bottom-4 w-[2px] bg-primary/5" />

                        <div className="flex flex-col gap-12">
                            {educationData?.map((item: EducationItem, index: number) => (
                                <div
                                    key={index}
                                    className="relative transition-all duration-300 group"
                                    style={{ animationDelay: `${index * 150}ms` }}
                                >
                                    {/* Timeline Node */}
                                    <div className="absolute -left-[33px] sm:-left-[41px] top-0 z-10 p-1.5 sm:p-2 rounded-xl bg-card border border-primary/5 shadow-sm transition-transform duration-300 group-hover:scale-110">
                                        <GraduationCap size={16} className="text-primary sm:w-[20px] sm:h-[20px]" />
                                    </div>

                                    {/* Content Card */}
                                    <div className="bg-card rounded-2xl p-6 sm:p-8 border border-primary/5 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)] transition-all duration-500 hover:shadow-[0_10px_30px_-5px_rgba(0,0,0,0.08)] hover:-translate-y-1 group">
                                        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                                            <div className="flex flex-col gap-1">
                                                <h3 className="text-base sm:text-xl font-semibold text-primary">{item.title}</h3>
                                                <p className="text-secondary font-normal">{item.subtitle}</p>
                                            </div>

                                            {item.date && (
                                                <div className="inline-flex items-center self-start text-primary text-xs font-semibold whitespace-nowrap">
                                                    {item.date}
                                                </div>
                                            )}
                                        </div>

                                        {index === 0 && (
                                            <div className="mt-8 flex flex-col items-start gap-4">
                                                <p className="text-sm text-secondary font-normal max-w-lg italic">&ldquo;Currently pursuing my BCA and focusing on building solid foundations in software engineering and modern web technologies.&rdquo;</p>
                                            </div>
                                        )}
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

export default Education;