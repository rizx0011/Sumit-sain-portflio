"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ProjectOverviewData, SideProjectItem } from "@/types";

const ProjectOverview = () => {
    const [projectData, setProjectData] = useState<ProjectOverviewData | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/api/page-data')
                if (!res.ok) throw new Error('Failed to fetch')
                const data = await res.json()
                setProjectData(data?.projectOverview)
            } catch (error) {
                console.error('Error fetching services:', error)
            }
        }

        fetchData()
    }, [])
    return (
        <section id="projects">
            <div className="container">
                <div className="">
                    <div className="flex flex-col max-w-3xl mx-auto gap-10 sm:gap-16 px-4 sm:px-7 py-9 md:py-16 ">
                        <div className="flex flex-col gap-8 w-full">
                            <p className="text-lg sm:text-2xl lg:text-3xl font-semibold text-primary">
                                We don&apos;t just write about technology. We build with it.
                            </p>

                            <div className="w-full mt-4">
                                <div className="flex overflow-x-auto gap-6 sm:gap-10 pb-6 w-full snap-x snap-mandatory" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                                    <style jsx>{`
                                        div::-webkit-scrollbar {
                                            display: none;
                                        }
                                    `}</style>
                                    {projectData?.sideProjects?.map((value: SideProjectItem, index: number) => {
                                        return (
                                            <a
                                                key={index}
                                                href={value?.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="snap-center flex-shrink-0 flex flex-col gap-3 group/card transition-transform duration-300 hover:-translate-y-1.5"
                                            >
                                                <div className="w-[280px] h-[180px] sm:w-[350px] sm:h-[220px] rounded-2xl overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_30px_-5px_rgba(0,0,0,0.08)] border border-primary/5 transition-all duration-500">
                                                    <Image
                                                        src={value?.image}
                                                        alt={value?.name}
                                                        width={350}
                                                        height={220}
                                                        className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-500"
                                                    />
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <h4 className="text-lg font-semibold text-primary">{value?.name}</h4>
                                                    <Image src="/images/icon/tile-arrow-icon.svg" alt="tile-icon" width={20} height={20} className="opacity-0 -translate-x-2 group-hover/card:opacity-100 group-hover/card:translate-x-0 group-hover/card:rotate-45 transition-all duration-300 ease-in" />
                                                </div>
                                            </a>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProjectOverview;