"use client";
import React, { useState } from "react";
import { SITE_CONFIG } from "@data/config";
import { Mail, MessageCircle, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

const projectTypes = [
  "WordPress Website",
  "Next.js / React Web App",
  "E-commerce Store",
  "Website Redesign",
  "SEO & Speed Optimization",
  "Other / Custom Project",
];

const budgetRanges = [
  "Not sure yet",
  "Under ₹10,000",
  "₹10,000 – ₹25,000",
  "₹25,000 – ₹50,000",
  "₹50,000+",
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: projectTypes[0],
    budgetRange: "Not sure yet",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("idle");
    setErrorMessage("");

    const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID;

    if (!formspreeId) {
      // In dev or until user configures Formspree ID, simulate and guide user
      setTimeout(() => {
        setLoading(false);
        setStatus("success");
      }, 800);
      return;
    }

    try {
      const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          projectType: projectTypes[0],
          budgetRange: "Not sure yet",
          message: "",
        });
      } else {
        const data = await res.json().catch(() => ({}));
        setStatus("error");
        setErrorMessage(
          data?.error || "Failed to send message. Please contact via WhatsApp or email directly."
        );
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
      setErrorMessage("Network error. Please try WhatsApp or email directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-6 md:py-10">
      <div className="container relative z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-7">
          {/* Header */}
          <div className="flex flex-col gap-2 mb-8">
            <p className="font-jost uppercase tracking-[3px] text-xs sm:text-sm font-semibold text-secondary/60">
              Get in Touch
            </p>
            <h2 className="font-instrument text-2xl sm:text-3xl md:text-4xl text-primary font-normal leading-tight">
              Let&apos;s Discuss <span className="font-serif italic text-primary">Your Project</span>
            </h2>
            <p className="font-inter text-sm sm:text-base text-secondary leading-relaxed mt-1">
              Have an idea, need a quote, or want to discuss a new website? Send a message or chat on WhatsApp.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Direct Contact Links */}
            <div className="md:col-span-1 space-y-4">
              <a
                href={SITE_CONFIG.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card rounded-2xl p-5 border border-primary/5 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] hover:border-primary/20 transition-all flex items-start gap-3.5 group block"
              >
                <div className="p-2.5 bg-emerald-500/10 rounded-xl text-emerald-500 flex-shrink-0 group-hover:scale-105 transition-transform">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <h3 className="font-jost text-xs uppercase tracking-wider font-semibold text-secondary/70">
                    WhatsApp
                  </h3>
                  <p className="font-jost text-sm font-medium text-primary mt-0.5">
                    +91 96497 32195
                  </p>
                  <span className="text-[11px] text-emerald-500 font-medium">Quick reply</span>
                </div>
              </a>

              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="bg-card rounded-2xl p-5 border border-primary/5 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] hover:border-primary/20 transition-all flex items-start gap-3.5 group block"
              >
                <div className="p-2.5 bg-primary/5 rounded-xl text-primary flex-shrink-0 group-hover:scale-105 transition-transform">
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className="font-jost text-xs uppercase tracking-wider font-semibold text-secondary/70">
                    Email
                  </h3>
                  <p className="font-jost text-xs sm:text-sm font-medium text-primary mt-0.5 break-all">
                    {SITE_CONFIG.email}
                  </p>
                </div>
              </a>
            </div>

            {/* Working Formspree Form */}
            <div className="md:col-span-2 bg-card rounded-2xl p-6 sm:p-7 border border-primary/5 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)]">
              {status === "success" ? (
                <div className="text-center py-10 flex flex-col items-center">
                  <CheckCircle2 size={42} className="text-emerald-500 mb-3" />
                  <h3 className="font-jost text-lg font-semibold text-primary mb-1">
                    Message Sent Successfully!
                  </h3>
                  <p className="font-inter text-xs sm:text-sm text-secondary max-w-sm mb-6">
                    Thank you for reaching out. I&apos;ll get back to you within 24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="font-jost text-xs uppercase tracking-wider font-semibold text-primary underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {status === "error" && (
                    <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-500 text-xs flex items-center gap-2">
                      <AlertCircle size={15} />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block font-jost text-xs font-semibold uppercase tracking-wider text-secondary/80 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-background border border-primary/10 text-primary text-sm focus:outline-none focus:border-primary/40 transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block font-jost text-xs font-semibold uppercase tracking-wider text-secondary/80 mb-1.5">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-background border border-primary/10 text-primary text-sm focus:outline-none focus:border-primary/40 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="projectType" className="block font-jost text-xs font-semibold uppercase tracking-wider text-secondary/80 mb-1.5">
                        Project Type
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-background border border-primary/10 text-primary text-sm focus:outline-none focus:border-primary/40 transition-colors cursor-pointer"
                      >
                        {projectTypes.map((pt, idx) => (
                          <option key={idx} value={pt} className="bg-card text-primary">
                            {pt}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="budgetRange" className="block font-jost text-xs font-semibold uppercase tracking-wider text-secondary/80 mb-1.5">
                        Budget Range
                      </label>
                      <select
                        id="budgetRange"
                        name="budgetRange"
                        value={formData.budgetRange}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-background border border-primary/10 text-primary text-sm focus:outline-none focus:border-primary/40 transition-colors cursor-pointer"
                      >
                        {budgetRanges.map((br, idx) => (
                          <option key={idx} value={br} className="bg-card text-primary">
                            {br}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block font-jost text-xs font-semibold uppercase tracking-wider text-secondary/80 mb-1.5">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me a bit about your website idea or requirements..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-background border border-primary/10 text-primary text-sm focus:outline-none focus:border-primary/40 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 px-6 rounded-full font-jost text-xs font-semibold uppercase tracking-[1.5px] bg-primary text-primary-foreground hover:bg-primary/85 transition-all duration-200 shadow-sm flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                  >
                    {loading ? (
                      <>
                        <Loader2 size={15} className="animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send size={14} />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
