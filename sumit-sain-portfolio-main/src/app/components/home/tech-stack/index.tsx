"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const technologies = [
    { name: "HTML5", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" },
    { name: "CSS3", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" },
    { name: "JavaScript", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" },
    { name: "React", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" },
    { name: "Next.js", logo: "https://cdn.worldvectorlogo.com/logos/next-js.svg" },
    { name: "Vue.js", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original.svg" },
    { name: "Angular", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/angularjs/angularjs-original.svg" },
    { name: "Tailwind CSS", logo: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },
    { name: "Bootstrap", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original.svg" },
    { name: "Node.js", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" },
    { name: "Express.js", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg" },
    { name: "Python", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" },
    { name: "Django", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/django/django-plain.svg" },
    { name: "Flask", logo: "https://www.vectorlogo.zone/logos/pocoo_flask/pocoo_flask-icon.svg" },
    { name: "PHP", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg" },
    { name: "Laravel", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/laravel/laravel-original.svg" },
    { name: "WordPress", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/wordpress/wordpress-plain.svg" },
    { name: "MongoDB", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg" },
    { name: "MySQL", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg" },
    { name: "PostgreSQL", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg" }
];

const TechStack = () => {
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (isPaused) {
            const timeout = setTimeout(() => setIsPaused(false), 4000);
            return () => clearTimeout(timeout);
        }
    }, [isPaused]);

    const handleInteraction = () => {
        setIsPaused(true);
    };

    return (
        <section className="py-12 overflow-hidden">
            <div className="max-w-2xl mx-auto overflow-hidden">
                {/* Marquee Content */}
                <div
                    className={`flex items-center gap-12 sm:gap-20 overflow-hidden whitespace-nowrap cursor-pointer px-10 animate-marquee ${isPaused ? 'animate-paused' : ''}`}
                    style={{
                        WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
                        maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
                    }}
                    onClick={handleInteraction}
                    onMouseDown={handleInteraction}
                    onTouchStart={handleInteraction}
                >
                    {/* Double the items for seamless loop */}
                    {[...technologies, ...technologies].map((tech, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 flex flex-col items-center gap-2 transition-transform duration-300 hover:scale-110"
                            title={tech.name}
                        >
                            <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center p-1.5">
                                <Image
                                    src={tech.logo}
                                    alt={tech.name}
                                    width={56}
                                    height={56}
                                    className="w-full h-full object-contain filter drop-shadow-sm"
                                />
                            </div>
                            <span className="text-xs font-semibold text-secondary uppercase tracking-wider">{tech.name}</span>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    animation: marquee 20s linear infinite;
                    display: flex;
                    width: max-content;
                }
                .animate-paused {
                    animation-play-state: paused !important;
                }
            `}</style>
        </section>
    );
};

export default TechStack;
