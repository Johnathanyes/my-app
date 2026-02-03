"use client"

import { Code2, Cpu, Globe, Terminal } from "lucide-react";
import { motion } from "framer-motion";

export default function ProjectSection() {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.3 }}
      className="py-32 border-zinc-900"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-6xl font-bold mb-4">Projects</h2>
          <div className="w-20 h-1 bg-white"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
          <a target="_blank" href="www.usemado.tech">
            <ProjectCard
              title="Popsmart"
              desc="A B2B Saas that helps businesses create high conversion rate campaigns for any use case"
              tags={["Next.js", "Fastify", "Typescript", "Svelte", "Railway"]}
              icon={<Terminal size={20} />}
              mvpBadge={true}
            />

          </a>

        </div>
      </div>
    </motion.section>
  );
}

interface ProjectCardProps {
  title: string;
  desc: string;
  tags: string[];
  icon: React.ReactNode;
  mvpBadge?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, desc, tags, icon, mvpBadge }) => (
  <div className="group border border-zinc-800 bg-black p-8 hover:border-white/50 transition-all duration-300 cursor-pointer relative overflow-hidden">
    {/* Subtle gradient overlay on hover */}
    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
    
    {/* Subtle corner accent */}
    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

    {mvpBadge && (
      <motion.div
        className="absolute top-4 right-4 z-20"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/5 border border-white/30 rounded-full text-xs font-mono text-white backdrop-blur-sm shadow-[0_0_15px_rgba(255,255,255,0.3),0_0_30px_rgba(255,255,255,0.1)]">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]"></span>
          </span>
          MVP out
        </span>
      </motion.div>
    )}

    <div className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center mb-6 text-white group-hover:scale-110 group-hover:bg-zinc-800 transition-all duration-300 relative">
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="relative z-10">{icon}</div>
    </div>

    <h3 className="text-2xl font-bold mb-3 group-hover:text-zinc-300 transition-colors duration-300">{title}</h3>
    <p className="text-zinc-400 mb-6 leading-relaxed group-hover:text-zinc-300/80 transition-colors duration-300">{desc}</p>

    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span key={ tag} className="text-xs font-mono text-zinc-500 border border-zinc-800 px-2 py-1 rounded-sm group-hover:border-zinc-700 group-hover:text-zinc-400 transition-all duration-300">
          {tag}
        </span>
      ))}
    </div>
  </div>
);