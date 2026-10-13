"use client";
import React from "react";
import { SITE_CONFIG } from "@data/config";
import { MessageCircle, Mail, ArrowUpRight } from "lucide-react";

const CtaBanner = () => {
  return (
    <section className="py-8 md:py-12">
      <div className="container relative z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-7">
          <div className="rounded-3xl p-8 sm:p-10 bg-card border border-primary/10 shadow-[0_8px_30px_-4px_rgba(0,0,0,0.06)] text-center relative overflow-hidden">
            <div className="relative z-10 max-w-xl mx-auto flex flex-col items-center">
              <span className="font-jost uppercase tracking-[3px] text-xs font-semibold text-secondary/70 mb-2">
                Ready to Start?
              </span>
              <h2 className="font-instrument text-3xl sm:text-4xl md:text-5xl text-primary font-normal leading-tight mb-4">
                Have a project in mind? <span className="font-serif italic text-primary">Let&apos;s build it.</span>
              </h2>
              <p className="font-inter text-sm sm:text-base text-secondary leading-relaxed mb-8">
                From simple business sites to complete web apps — let&apos;s bring your idea to life quickly and cleanly.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
                <a
                  href={SITE_CONFIG.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-jost text-xs font-semibold uppercase tracking-[1.5px] bg-primary text-primary-foreground px-6 py-3.5 rounded-full hover:bg-primary/85 transition-all duration-200 shadow-sm"
                >
                  <MessageCircle size={16} className="text-emerald-400" />
                  <span>Chat on WhatsApp</span>
                  <ArrowUpRight size={14} />
                </a>

                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="inline-flex items-center gap-2 font-jost text-xs font-semibold uppercase tracking-[1.5px] bg-secondary/10 hover:bg-secondary/20 text-primary px-6 py-3.5 rounded-full transition-all duration-200 border border-primary/10"
                >
                  <Mail size={15} />
                  <span>Send an Email</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;
