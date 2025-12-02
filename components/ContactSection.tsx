"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function ContactSection() {
    const ref = useRef<HTMLDivElement | null>(null);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const onScroll = () => {
            const rect = element.getBoundingClientRect();
            const h = window.innerHeight;

            // scroll progress (0 → 1)
            let p = 1 - rect.top / (h * 0.75);
            p = Math.min(Math.max(p, 0), 1);
            setProgress(p);
        };

        onScroll();
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const opacity = progress;
    const translateY = 40 - progress * 40;

    return (
        <section
            id="contact"
            ref={ref}
            style={{
                opacity,
                transform: `translateY(${translateY}px)`,
                transition: "opacity 0.1s linear, transform 0.1s linear",
            }}
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
                    <SocialLink href="#" icon={<Github />} label="GitHub" />
                    <SocialLink href="#" icon={<Linkedin />} label="LinkedIn" />
                    <SocialLink href="#" icon={<Mail />} label="Email" />
                </div>
            </div>
        </section>
    );
}

const SocialLink = ({ href, icon, label }: SocialLinkProps) => (
    <a
        href={href}
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