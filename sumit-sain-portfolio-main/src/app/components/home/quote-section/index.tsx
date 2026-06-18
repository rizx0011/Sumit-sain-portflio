"use client";

const QuoteSection = () => {
    return (
        <section className="flex items-center justify-center">
            {/* Background Wrapper */}
            <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
                <div
                    className="relative w-full max-w-5xl h-full mx-auto"
                    style={{ maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)' }}
                >
                    <div
                        className="absolute inset-0"
                        style={{ maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)' }}
                    >
                        <video
                            src="/videos/dearx.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover opacity-60 dark:opacity-30 grayscale contrast-125 rounded-xl"
                        />
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="container relative z-10 pointer-events-none">
                <div className="max-w-3xl mx-auto text-center flex flex-col items-center justify-center pt-4 pb-6">
                    <h2
                        className="text-xl md:text-3xl leading-snug md:leading-relaxed text-primary font-serif italic font-medium px-4 drop-shadow-sm"
                        style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}
                    >
                        &ldquo;The day you accept yourself completely, <br className="hidden md:block" /> life starts becoming beautiful.&rdquo;
                    </h2>
                    <p
                        className="mt-6 text-base md:text-xl text-primary font-serif italic font-medium tracking-wide drop-shadow-sm"
                        style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}
                    >
                        — Osho
                    </p>
                </div>
            </div>
        </section>
    );
};

export default QuoteSection;
