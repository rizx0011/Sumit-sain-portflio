"use client";
import React, { useState } from "react";
import { X, Send, User, Mail, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
    const [submitting, setSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitting(true);
        // Simulate network request
        setTimeout(() => {
            setSubmitting(false);
            setSubmitted(true);
            setTimeout(() => {
                setSubmitted(false);
                onClose();
            }, 3000);
        }, 1500);
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            />

            <div className="relative w-full max-w-lg bg-card rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-300">
                <div className="p-6 sm:p-8">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h2 className="text-xl sm:text-3xl font-bold text-primary tracking-tight">Let&apos;s Talk</h2>
                            <p className="text-secondary text-sm sm:text-base mt-2">I&apos;d love to hear about your project.</p>
                        </div>
                        <button
                            onClick={onClose}
                            className="p-2 hover:bg-primary/5 rounded-full transition-colors text-secondary"
                        >
                            <X size={24} />
                        </button>
                    </div>

                    {/* Form */}
                    {!submitted ? (
                        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                            <div className="relative">
                                <label className="text-sm font-semibold text-primary mb-1 block">Your Name</label>
                                <div className="relative flex items-center">
                                    <div className="absolute left-3 text-secondary/60">
                                        <User size={18} />
                                    </div>
                                    <input
                                        type="text"
                                        required
                                        placeholder="John Doe"
                                        className="w-full bg-primary/5 border border-transparent focus:border-primary/20 hover:bg-primary/10 transition-colors rounded-xl py-3 pl-10 pr-4 text-primary outline-none focus:ring-2 focus:ring-primary/20"
                                    />
                                </div>
                            </div>

                            <div className="relative">
                                <label className="text-sm font-semibold text-primary mb-1 block">Email Address</label>
                                <div className="relative flex items-center">
                                    <div className="absolute left-3 text-secondary/60">
                                        <Mail size={18} />
                                    </div>
                                    <input
                                        type="email"
                                        required
                                        placeholder="john@example.com"
                                        className="w-full bg-primary/5 border border-transparent focus:border-primary/20 hover:bg-primary/10 transition-colors rounded-xl py-3 pl-10 pr-4 text-primary outline-none focus:ring-2 focus:ring-primary/20"
                                    />
                                </div>
                            </div>

                            <div className="relative">
                                <label className="text-sm font-semibold text-primary mb-1 block">Message</label>
                                <div className="relative">
                                    <div className="absolute left-3 top-3 text-secondary/60">
                                        <MessageSquare size={18} />
                                    </div>
                                    <textarea
                                        required
                                        rows={4}
                                        placeholder="How can I help you?"
                                        className="w-full bg-primary/5 border border-transparent focus:border-primary/20 hover:bg-primary/10 transition-colors rounded-xl py-3 pl-10 pr-4 text-primary outline-none focus:ring-2 focus:ring-primary/20 resize-none"
                                    />
                                </div>
                            </div>

                            <Button
                                type="submit"
                                disabled={submitting}
                                className="w-full py-6 mt-2 rounded-xl bg-primary text-primary-foreground font-semibold text-base hover:bg-primary/90 transition-all flex items-center justify-center gap-2"
                            >
                                {submitting ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                                        <span>Sending...</span>
                                    </>
                                ) : (
                                    <>
                                        <span>Send Message</span>
                                        <Send size={18} />
                                    </>
                                )}
                            </Button>
                        </form>
                    ) : (
                        <div className="flex flex-col items-center justify-center py-10 text-center animate-in fade-in zoom-in duration-500">
                            <div className="w-16 h-16 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mb-4">
                                <Send size={32} />
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold text-primary mb-2">Message Sent!</h3>
                            <p className="text-secondary mb-6">Thank you for reaching out. I will get back to you shortly.</p>
                            <Button
                                onClick={onClose}
                                className="px-8 rounded-full bg-primary/10 text-primary hover:bg-primary/20 hover:text-primary transition-colors"
                            >
                                Close
                            </Button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ContactModal;
