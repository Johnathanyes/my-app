import { Code2, Cpu, ExternalLink, Globe, Terminal } from "lucide-react";

export default function ProjectSection () {
    return (
        <section id="projects" className="py-32 border-t border-zinc-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Selected Works</h2>
            <div className="w-20 h-1 bg-white"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProjectCard 
              title="SaaS Dashboard"
              desc="A high-performance analytics dashboard for B2B clients featuring real-time data visualization."
              tags={['Next.js', 'TypeScript', 'Tailwind']}
              icon={<Terminal size={20} />}
            />
            <ProjectCard 
              title="E-Commerce API"
              desc="Headless e-commerce solution with stripe integration and inventory management."
              tags={['Node.js', 'PostgreSQL', 'Docker']}
              icon={<Globe size={20} />}
            />
            <ProjectCard 
              title="AI Content Editor"
              desc="Rich text editor enhanced with AI autocompletion and grammar checking capabilities."
              tags={['React', 'OpenAI', 'Zustand']}
              icon={<Cpu size={20} />}
            />
            <ProjectCard 
              title="Finance Tracker"
              desc="Personal finance application with budget forecasting and expense categorization."
              tags={['Vue', 'Firebase', 'Chart.js']}
              icon={<Code2 size={20} />}
            />
          </div>
        </div>
      </section>
    )
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


interface ProjectCardProps {
  title: string;
  desc: string;
  tags: string[];
  icon: React.ReactNode;
}