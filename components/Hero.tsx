"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { ArrowRight, Github, Linkedin, ChevronDown } from "lucide-react";
import AnimatedBackground from "./AnimatedBackground";

interface HeroProps {
  scrollToSection: (id: string) => void;
}

// 1. Define Animation Variants
// This creates a reusable animation logic for consistent rhythm
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      // Staggers the animation of children by 0.2s
      staggerChildren: 0.2,
      // Delays the whole sequence slightly so the user settles in
      delayChildren: 0.2, 
    },
  },
};

const itemVariants: Variants = {
  hidden: { 
    y: 25, // Start slightly down
    opacity: 0, 
    filter: "blur(15px)" // The "Cinematic" soft focus start
  },
  visible: {
    y: 0,
    opacity: 1,
    filter: "blur(0px)", // Sharpen into focus
    transition: {
      duration: 1.2,
      ease: [0.25, 0.4, 0.25, 1], // "Ease-out-quart" for a premium feel
    },
  },
};


const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  const ref = useRef<HTMLElement>(null);

  // Scroll Logic (Preserved)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end center"],
  });

  const contentY = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const bgOverlayOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#1C1C1C]"
    >
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <AnimatedBackground />
        <motion.div
          className="absolute inset-0 bg-black pointer-events-none"
          style={{ opacity: bgOverlayOpacity }}
        />
      </div>

      {/* Content Wrapper */}
      <motion.div
        className="relative z-10 container mx-auto px-6 flex flex-col items-center text-center scale-110"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        {/* Heading */}
        <motion.h1 
          variants={itemVariants}
          className="text-6xl md:text-8xl font-extrabold tracking-tighter text-[#F4F4F4]"
        >
          Johnathan Lee.
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          variants={itemVariants}
          className="mt-8 text-xl md:text-2xl max-w-2xl leading-relaxed font-light text-[#F4F4F4]/70"
        >
          A third year computer science student in love with shipping software.
        </motion.p>

        {/* Action Buttons */}
        <motion.div 
          variants={itemVariants}
          className="mt-12 flex flex-col md:flex-row items-center gap-6"
        >
          <button
            className="group relative overflow-hidden px-10 py-4 rounded-full font-bold flex items-center gap-3 transition-all duration-300 hover:scale-105 bg-[#F4F4F4] text-[#1C1C1C]"
            onClick={() => scrollToSection("projects")}
          >
            <span>View Projects</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <div className="flex gap-4">
            <button className="p-3 rounded-full border-2 border-[#F4F4F4] text-[#F4F4F4] hover:bg-[#F4F4F4] hover:text-[#1C1C1C] transition-colors">
              <Github className="w-5 h-5" />
            </button>
            <button className="p-3 rounded-full border-2 border-[#F4F4F4] text-[#F4F4F4] hover:bg-[#F4F4F4] hover:text-[#1C1C1C] transition-colors">
              <Linkedin className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;