"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactSection() {
    return (
        <motion.section
            id="contact"
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="py-32 border-t border-zinc-900 text-center will-change-transform"
        >
            <div className="max-w-3xl mx-auto px-6">
                <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter">
                    Let's work together.
                </h2>

                <p className="text-zinc-400 text-xl mb-12">
                    Have a project in mind? I'm currently open to new opportunities.
                </p>

                <h3 className="inline-flex items-center gap-3 text-2xl md:text-3xl font-bold 
                               border-b-2 border-white hover:text-zinc-400 hover:border-zinc-400 
                               transition-all pb-1 mb-16">
                    Johnathanylee327@gmail.com
                </h3>

                <div className="flex justify-center gap-8">
                    <SocialLink href="https://github.com/Johnathanyes" icon={<Github />} label="GitHub" />
                    <SocialLink href="https://www.linkedin.com/in/johnathanylee/" icon={<Linkedin />} label="LinkedIn" />
                    <SocialLink href="mailto:johnathanylee327@gmail.com" icon={<Mail />} label="Email" />
                </div>
            </div>
        </motion.section>
    );
}

const SocialLink = ({ href, icon, label }: SocialLinkProps) => (
    <a
        href={href}
        target="_blank"
        className="w-12 h-12 flex items-center justify-center border border-zinc-800 rounded-full 
                  hover:bg-white hover:text-black transition-all duration-300 group"
        aria-label={label}
    >
        <span className="group-hover:scale-110 transition-transform">{icon}</span>
    </a>
);

interface SocialLinkProps {
    href: string;
    icon: React.ReactNode;
    label: string;
}