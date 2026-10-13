import { Badge } from "@/components/ui/badge";

const AboutMe = () => {
    const servicesBedge = [
        "Frontend Development",
        "Backend Development",
        "Full Stack Development",
        "E-commerce Development",
        "UI/UX Design",
        "Website Redesign",
        "Responsive Web Design",
        "API Integration",
        "SEO Optimization",
        "WordPress Development"
    ];
    return (
        <section id="about">
            <div className="container">
                <div className="bg-[url('/images/about-me/about-me-bg.svg')] bg-cover bg-center bg-no-repeat">
                    <div className="flex flex-col gap-9 sm:gap-12 max-w-5xl mx-auto px-4 sm:px-7 py-0 md:py-0">
                        <div className="flex flex-col gap-5">
                            <p className="font-jost uppercase tracking-[3px] text-xs sm:text-sm font-semibold text-secondary/60">About Me</p>
                            <h2 className="font-instrument text-2xl sm:text-3xl md:text-4xl lg:text-[40px] leading-tight text-primary">
                                Hi, I&apos;m <span className="font-serif italic font-medium text-primary">Sumit Sain</span>, a web developer based in Hanumangarh (Rajasthan), India.
                            </h2>
                            <p className="font-inter text-sm sm:text-base md:text-lg text-secondary leading-relaxed font-normal mt-2">
                                With 2 years of hands-on coding experience, I build fast, clean, and responsive websites for businesses and founders. Currently pursuing my BCA, I combine modern tools like Next.js, React, and WordPress with clean design principles to create digital experiences that load quickly and help businesses grow online.
                            </p>
                        </div>
                        <div className="flex flex-col gap-5">
                            <p className="font-jost uppercase tracking-[3px] text-xs sm:text-sm font-semibold text-secondary/60">Services</p>
                            <div className="flex flex-wrap gap-2 sm:gap-3">
                                {servicesBedge?.map((value, index) => {
                                    return (
                                        <Badge key={index} variant="secondary" className="py-2 px-4 rounded-full border border-primary/5 shadow-none bg-primary/5 hover:bg-primary/10 transition-all duration-300">
                                            <span className="font-jost uppercase tracking-wider text-[10px] sm:text-[11px] font-semibold text-primary/80">{value}</span>
                                        </Badge>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMe