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
                    <div className="flex flex-col gap-9 sm:gap-12 max-w-3xl mx-auto px-4 sm:px-7 py-0 md:py-0">
                        <div className="flex flex-col gap-5">
                            <p className="font-jost uppercase tracking-[3px] text-xs sm:text-sm font-semibold text-secondary/60">About Me</p>
                            <h2 className="font-instrument text-2xl sm:text-3xl md:text-4xl lg:text-[40px] leading-tight text-primary">Hi, I&apos;m <span className="font-serif italic font-medium text-primary">Sumit Sain</span>, a passionate BCA 4th Semester Student, Full Stack Developer, and WordPress Expert.</h2>
                            <p className="font-inter text-sm sm:text-base md:text-lg text-secondary leading-relaxed font-normal mt-2">I enjoy turning ideas into real websites and web applications that look professional and work smoothly. My focus is on creating user-friendly designs, improving functionality, and learning modern technologies that help me grow as a developer.</p>
                        </div>
                        <div id="services" className="flex flex-col gap-5">
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