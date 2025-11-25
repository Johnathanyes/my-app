"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Github, Linkedin, ChevronDown } from "lucide-react";
import AnimatedBackground from "./AnimatedBackground";

interface HeroProps {
    scrollToSection: (id: string) => void;
}

const StatBox = ({ label, value }: { label: string; value: string }) => (
    <div className="flex flex-col items-center md:items-start px-6 py-3 border-l-2 border-[#F4F4F4]/20">
        <p className="text-[#F4F4F4]/60 text-xs uppercase tracking-widest font-medium mb-1">{label}</p>
        <p className="text-[#F4F4F4] text-2xl font-bold">{value}</p>
    </div>
);


const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
    const ref = useRef<HTMLElement>(null);

    // FIXED OFFSET → smoother scroll range, eliminates jitter
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end center"]
    });

    // Text moves up (0 → -180px) and fades out smoothly
    const contentY = useTransform(scrollYProgress, [0, 1], [0, -180]);
    const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    // Background fades to black (0 → 1 opacity)
    const bgOverlayOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

    // Scroll indicator fades out quickly
    const indicatorOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

    return (
        <section
            id="home"
            ref={ref}
            className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#1C1C1C]"
        >
            {/* Background Layer */}
            <div className="absolute inset-0 z-0">
                <AnimatedBackground />

                {/* Smooth background fade-to-black */}
                <motion.div
                    className="absolute inset-0 bg-black pointer-events-none"
                    style={{ opacity: bgOverlayOpacity }}
                />
            </div>

            {/* Content */}
            <motion.div
                className="relative z-10 container mx-auto px-6 flex flex-col items-center text-center scale-110"
                style={{ y: contentY, opacity: contentOpacity }}
            >
                <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter text-[#F4F4F4]">
                    Johnathan Lee.
                </h1>

                <p className="mt-8 text-xl md:text-2xl max-w-2xl leading-relaxed font-light text-[#F4F4F4]/70">
                    A third year computer science in love with shipping software.
                </p>

                <div className="mt-12 flex flex-col md:flex-row items-center gap-6">
                    <button
                        className="group relative overflow-hidden px-10 py-4 rounded-full font-bold flex items-center gap-3 transition-all duration-300 hover:scale-105"
                        style={{ backgroundColor: "#F4F4F4", color: "#1C1C1C" }}
                        onClick={() => scrollToSection("projects")}
                    >
                        <span>View Projects</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>

                    <div className="flex gap-4">
                        <button className="p-3 rounded-full border-2 hover:bg-[#F4F4F4] hover:text-[#1C1C1C]" style={{ borderColor: "#F4F4F4", color: "#F4F4F4" }}>
                            <Github className="w-5 h-5" />
                        </button>
                        <button className="p-3 rounded-full border-2 hover:bg-[#F4F4F4] hover:text-[#1C1C1C]" style={{ borderColor: "#F4F4F4", color: "#F4F4F4" }}>
                            <Linkedin className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                <div className="mt-20 grid grid-cols-2 md:flex md:flex-row gap-8 md:gap-12">
                    <StatBox label="Experience" value="20+ Years" />
                    <StatBox label="Deliveries" value="450+ Projects" />
                    <StatBox label="Focus" value="Full Stack | Cloud" />
                </div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-8 z-10"
                style={{ opacity: indicatorOpacity }}
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <ChevronDown className="w-8 h-8 opacity-50 text-[#F4F4F4]" />
            </motion.div>
        </section>
    );
};

export default Hero;
