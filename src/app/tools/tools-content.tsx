"use client";

import { useState } from "react";
import { Check, LayoutGrid, Settings, Star, Zap, Palette, MessageSquare, Code, PenTool, Cpu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    title: "Web Builders",
    icon: <Zap className="text-yellow-500 w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" />,
    tools: [
      {
        name: "Lovable AI",
        desc: "An AI-powered full-stack application builder to create web apps using natural language prompts.",
        url: "https://lovable.dev",
        logo: "https://www.google.com/s2/favicons?domain=lovable.dev&sz=128",
        type: "Freemium",
        rating: "4.8"
      },
      {
        name: "Bolt.new",
        desc: "AI-powered web development platform that lets you prompt, run, edit, and deploy full-stack apps directly in browser.",
        url: "https://bolt.new",
        logo: "https://www.google.com/s2/favicons?domain=bolt.new&sz=128",
        type: "Free",
        rating: "4.7"
      },
      {
        name: "Wix AI Website Builder",
        desc: "Build a professional website instantly using AI. Just answer a few questions and get a tailored site.",
        url: "https://www.wix.com/tools/ai-website-builder",
        logo: "https://www.google.com/s2/favicons?domain=wix.com&sz=128",
        type: "Freemium",
        rating: "4.5"
      },
      {
        name: "Framer AI",
        desc: "Generate a stunning website with AI in seconds. Customize designs, layouts, and copy effortlessly.",
        url: "https://www.framer.com/ai",
        logo: "https://www.google.com/s2/favicons?domain=framer.com&sz=128",
        type: "Freemium",
        rating: "4.9"
      },
      {
        name: "Hostinger AI Builder",
        desc: "Launch a custom website with Hostinger's AI builder. Includes hosting, a domain, and intelligent AI features.",
        url: "https://www.hostinger.com/ai-website-builder",
        logo: "https://www.google.com/s2/favicons?domain=hostinger.com&sz=128",
        type: "Paid",
        rating: "4.6"
      }
    ]
  },
  {
    title: "Art Generators",
    icon: <Palette className="text-orange-500 w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" />,
    tools: [
      {
        name: "Pykaso AI",
        desc: "AI content creation platform for consistent photorealistic characters and fast face swapping.",
        url: "https://pykaso.ai",
        logo: "https://www.google.com/s2/favicons?domain=pykaso.ai&sz=128",
        type: "Freemium",
        rating: "4.7"
      },
      {
        name: "Remaker AI",
        desc: "Browser-based AI suite for precise face swapping, image upscaling, and creative visuals.",
        url: "https://remaker.ai",
        logo: "https://www.google.com/s2/favicons?domain=remaker.ai&sz=128",
        type: "Freemium",
        rating: "4.6"
      }
    ]
  },
  {
    title: "Automation",
    icon: <Cpu className="text-blue-500 w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" />,
    tools: [
      {
        name: "Zapier",
        desc: "Connect your apps and automate workflows. Zapier moves info between your web apps automatically.",
        url: "https://zapier.com",
        logo: "https://www.google.com/s2/favicons?domain=zapier.com&sz=128",
        type: "Freemium",
        rating: "4.8"
      },
      {
        name: "Make",
        desc: "Visual platform for anyone to design, build, and automate anything—from tasks to workflows.",
        url: "https://www.make.com",
        logo: "https://www.google.com/s2/favicons?domain=make.com&sz=128",
        type: "Freemium",
        rating: "4.7"
      },
      {
        name: "Bardeen",
        desc: "No-code workflow automation to automate repetitive tasks without switching tabs.",
        url: "https://www.bardeen.ai",
        logo: "https://www.google.com/s2/favicons?domain=bardeen.ai&sz=128",
        type: "Free",
        rating: "4.8"
      },
      {
        name: "n8n",
        desc: "Fair-code workflow automation tool. Easily build complex automations and connect anything to everything.",
        url: "https://n8n.io",
        logo: "https://www.google.com/s2/favicons?domain=n8n.io&sz=128",
        type: "Freemium",
        rating: "4.6"
      }
    ]
  },
  {
    title: "Chatbot",
    icon: <MessageSquare className="text-green-500 w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" />,
    tools: [
      {
        name: "Chatbase",
        desc: "Custom ChatGPT for your data. Just connect your data sources and get a ChatGPT-like chatbot.",
        url: "https://www.chatbase.co",
        logo: "https://www.google.com/s2/favicons?domain=chatbase.co&sz=128",
        type: "Freemium",
        rating: "4.8"
      },
      {
        name: "Voiceflow",
        desc: "Build AI agents and conversational assistants collaboratively. Ideal for customer support bots.",
        url: "https://www.voiceflow.com",
        logo: "https://www.google.com/s2/favicons?domain=voiceflow.com&sz=128",
        type: "Freemium",
        rating: "4.7"
      },
      {
        name: "Botpress",
        desc: "The first next-generation chatbot builder powered by OpenAI. Build ChatGPT-like bots easily.",
        url: "https://botpress.com",
        logo: "https://www.google.com/s2/favicons?domain=botpress.com&sz=128",
        type: "Freemium",
        rating: "4.6"
      }
    ]
  },
  {
    title: "Coding",
    icon: <Code className="text-purple-500 w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" />,
    tools: [
      {
        name: "Cursor",
        desc: "The AI Code Editor. Built to make you extraordinarily productive, Cursor is the best way to code with AI.",
        url: "https://cursor.sh",
        logo: "https://www.google.com/s2/favicons?domain=cursor.sh&sz=128",
        type: "Freemium",
        rating: "4.9"
      },
      {
        name: "v0 by Vercel",
        desc: "Generative UI system by Vercel. Generate React components and UI designs using text prompts.",
        url: "https://v0.dev",
        logo: "https://www.google.com/s2/favicons?domain=v0.dev&sz=128",
        type: "Freemium",
        rating: "4.8"
      },
      {
        name: "GitHub Copilot",
        desc: "Your AI pair programmer. GitHub Copilot uses the OpenAI Codex to suggest code and entire functions in real-time.",
        url: "https://github.com/features/copilot",
        logo: "https://www.google.com/s2/favicons?domain=github.com&sz=128",
        type: "Paid",
        rating: "4.7"
      },
      {
        name: "Codeium",
        desc: "Free AI code completion and chat tool for developers. Supports over 70 languages and integrates with many IDEs.",
        url: "https://codeium.com",
        logo: "https://www.google.com/s2/favicons?domain=codeium.com&sz=128",
        type: "Free",
        rating: "4.8"
      }
    ]
  },
  {
    title: "Design",
    icon: <PenTool className="text-pink-500 w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" />,
    tools: [
      {
        name: "Canva AI",
        desc: "Magic Studio by Canva brings AI to your design process, offering text-to-image, magic edit, and more.",
        url: "https://www.canva.com/magic",
        logo: "https://www.google.com/s2/favicons?domain=canva.com&sz=128",
        type: "Freemium",
        rating: "4.8"
      },
      {
        name: "Looka",
        desc: "AI-powered platform to design a logo and build a brand you love in minutes.",
        url: "https://looka.com",
        logo: "https://www.google.com/s2/favicons?domain=looka.com&sz=128",
        type: "Freemium",
        rating: "4.6"
      },
      {
        name: "Midjourney",
        desc: "Independent research lab exploring new mediums of thought and expanding the imaginative powers of the human species.",
        url: "https://www.midjourney.com",
        logo: "https://www.google.com/s2/favicons?domain=midjourney.com&sz=128",
        type: "Paid",
        rating: "4.9"
      },
      {
        name: "Figma AI",
        desc: "Figma's AI tools help teams design faster, generate text, remove backgrounds, and automate tasks.",
        url: "https://www.figma.com",
        logo: "https://www.google.com/s2/favicons?domain=figma.com&sz=128",
        type: "Freemium",
        rating: "4.8"
      }
    ]
  }
];

const tabsList = ['Web Builders', 'Art Generators', 'Automation', 'Chatbot', 'Coding', 'Design'];

const ToolsPage = () => {
    const [activeTab, setActiveTab] = useState("Web Builders");

    return (
        <main className="min-h-screen bg-background">
            <div className="flex flex-col items-center justify-center pt-24 pb-12 px-4 text-center">
                <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-serif mb-6 text-primary tracking-tight" style={{ fontFamily: "Georgia, serif" }}>Free AI Tools</h1>
                <p className="text-sm sm:text-lg text-secondary max-w-2xl mx-auto flex flex-col items-center gap-4">
                    <span>Discover, compare and review the best AI tools for productivity, design, coding, video and more — all free to explore.</span>
                    <span className="inline-flex items-center bg-blue-600 text-white text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full shadow-sm">
                        <Settings className="w-4 h-4 mr-1.5" /> Machine Learning & Artificial Intelligence
                    </span>
                </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-16 px-4 max-w-4xl mx-auto">
                {tabsList.map((tab) => (
                    <button 
                        key={tab} 
                        onClick={() => setActiveTab(tab)}
                        className={`px-5 py-2.5 rounded-full font-medium text-sm flex items-center gap-2 shadow-sm transition-colors ${
                            activeTab === tab 
                            ? "bg-yellow-500 text-white" 
                            : "text-secondary hover:text-primary bg-transparent"
                        }`}
                    >
                        {tab === 'Web Builders' && <LayoutGrid size={16} />}
                        {tab === 'Art Generators' && <Palette size={16} />}
                        {tab === 'Automation' && <Cpu size={16} />}
                        {tab === 'Chatbot' && <MessageSquare size={16} />}
                        {tab === 'Coding' && <Code size={16} />}
                        {tab === 'Design' && <PenTool size={16} />}
                        {tab}
                    </button>
                ))}
            </div>

            <div className="w-full max-w-6xl mx-auto px-4 sm:px-7 pb-16 flex flex-col gap-16">
                {categories.filter(c => c.title === activeTab).map((category) => (
                    <div key={category.title} className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="flex items-center justify-between mb-8 border-b border-primary/5 pb-4">
                            <h3 className="text-xl sm:text-2xl font-serif text-primary flex items-center gap-2" style={{ fontFamily: "Georgia, serif" }}>
                                {category.icon} {category.title} <span className="text-xs sm:text-sm text-secondary font-sans mt-1 ml-1">{category.tools.length}</span>
                            </h3>
                            <Link href="#" className="text-sm text-secondary hover:text-primary font-medium transition-colors">View all &rarr;</Link>
                        </div>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                            {category.tools.map((tool) => (
                                <a href={tool.url} target="_blank" rel="noopener noreferrer" key={tool.name} className="flex flex-col bg-card/40 backdrop-blur-sm border border-primary/10 rounded-2xl p-5 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] dark:hover:shadow-[0_8px_30px_rgba(255,255,255,0.03)] hover:-translate-y-1 transition-all duration-300 group">
                                    <div className="relative mb-5 self-start">
                                        <div className="w-14 h-14 rounded-full border border-primary/10 bg-white flex items-center justify-center p-2 shadow-sm overflow-hidden">
                                            <Image src={tool.logo} alt={tool.name} width={56} height={56} className="w-full h-full object-contain" />
                                        </div>
                                        <div className="absolute top-0 right-0 -mr-1 -mt-1 bg-blue-500 rounded-full text-white p-0.5 border-2 border-background shadow-sm">
                                            <Check size={12} strokeWidth={4} />
                                        </div>
                                    </div>
                                    
                                    <h4 className="font-bold text-primary mb-2.5 text-[15px] leading-tight">{tool.name}</h4>
                                    <p className="text-[13px] text-secondary mb-6 line-clamp-3 leading-relaxed flex-grow">{tool.desc}</p>
                                    
                                    <div className="mt-auto flex items-center justify-between pt-4 border-t border-primary/5">
                                        <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${tool.type === 'Freemium' || tool.type === 'Free' ? 'text-blue-600 bg-blue-500/10 dark:text-blue-400' : 'text-purple-600 bg-purple-500/10 dark:text-purple-400'}`}>
                                            {tool.type}
                                        </span>
                                        <div className="flex items-center gap-1.5">
                                            <Star size={13} className="text-yellow-500 fill-yellow-500" />
                                            <span className="text-xs font-bold text-primary">{tool.rating}</span>
                                        </div>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                ))}

                {categories.filter(c => c.title === activeTab).length === 0 && (
                    <div className="text-center py-20 animate-in fade-in duration-500">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/5 text-primary/40 mb-4">
                            <Settings size={24} />
                        </div>
                        <h3 className="text-xl font-medium text-primary mb-2">No tools yet</h3>
                        <p className="text-secondary">We are currently curating the best tools for {activeTab}. Check back soon!</p>
                    </div>
                )}
            </div>
        </main>
    );
};

export default ToolsPage;
