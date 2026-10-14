const AboutMe = () => {
    return (
        <section id="about" className="py-6 md:py-10">
            <div className="container relative z-10">
                <div className="bg-[url('/images/about-me/about-me-bg.svg')] bg-cover bg-center bg-no-repeat rounded-3xl p-6 sm:p-10 border border-primary/5 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_24px_-4px_rgba(0,0,0,0.2)] bg-card/60 backdrop-blur-xs">
                    <div className="flex flex-col gap-8 sm:gap-10 max-w-[820px] mx-auto">
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-2 font-sans uppercase tracking-[2.5px] text-xs font-semibold text-secondary/70">
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                                <span>About Me</span>
                            </div>
                            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[38px] leading-tight text-primary font-normal">
                                Hi, I&apos;m <span className="italic font-medium text-primary">Sumit Sain</span>, a web developer based in Hanumangarh (Rajasthan), India.
                            </h2>
                            <span className="block w-10 h-[2px] bg-primary/20 rounded-full" />
                            <p className="font-sans text-sm sm:text-base md:text-lg text-secondary leading-relaxed font-normal mt-1">
                                With 2 years of hands-on coding experience, I build fast, clean, and responsive websites for businesses and founders. Currently pursuing my BCA, I combine modern tools like Next.js, React, and WordPress with clean design principles to create digital experiences that load quickly and help businesses grow online.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;