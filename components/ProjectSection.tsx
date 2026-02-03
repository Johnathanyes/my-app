"use client"

import { Code2, Cpu, ExternalLink, Globe, Terminal } from "lucide-react";
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
          <ProjectCard
            title="mado"
            desc="A B2B Saas that helps businesses create high conversion rate campaigns for any use case"
            tags={["Next.js", "Fastify", "Typescript", "Svelte", "Railway", "Docker"]}
            icon={<Terminal size={20} />}
          />

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
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, desc, tags, icon }) => (
  <div className="group border border-zinc-800 bg-black p-8 hover:border-white/50 transition-all duration-300 cursor-pointer relative overflow-hidden">
    <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity text-zinc-500">
      <ExternalLink size={20} />
    </div>

    <div className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform">
      {icon}
    </div>

    <h3 className="text-2xl font-bold mb-3 group-hover:text-zinc-300">{title}</h3>
    <p className="text-zinc-400 mb-6 leading-relaxed">{desc}</p>

    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span key={tag} className="text-xs font-mono text-zinc-500 border border-zinc-800 px-2 py-1 rounded-sm">
          {tag}
        </span>
      ))}
    </div>
  </div>
);