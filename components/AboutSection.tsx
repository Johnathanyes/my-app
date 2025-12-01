import TypeScriptSVG from "@/public/technologies/TypeScript.svg";
import PostgresqlSVG from "@/public/technologies/PostgresSQL.svg";
import NextjsSVG from "@/public/technologies/Next.js.svg";
import PythonSVG from "@/public/technologies/Python.svg";
import DockerSVG from "@/public/technologies/Docker.svg";
import FastifySVG from "@/public/technologies/Fastify.svg";
import AWSSVG from "@/public/technologies/AWS.svg";
import GitSVG from "@/public/technologies/Git.svg";
import GitHubSVG from "@/public/technologies/GitHub.svg";
import JavaSVG from "@/public/technologies/Java.svg";
import NodeJSSVG from "@/public/technologies/Node.js.svg";
import ReactSVG from "@/public/technologies/React.svg";
import RedisSVG from "@/public/technologies/Redis.svg";
import JavaScriptSVG from "@/public/technologies/JavaScript.svg";
import SpringSVG from "@/public/technologies/Spring.svg"
import TechStackWeb from "./TechStackComponent";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function AboutSection() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // First column animations (About Me)
  // Enter: 10% -> 30%
  // Exit:  70% -> 90%
  const opacity1 = useTransform(scrollYProgress, [0.1, 0.3, 0.7, 0.9], [0, 1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0.1, 0.3, 0.7, 0.9], [50, 0, 0, -50]);

  // Second column animations (Tech Stack) - slightly delayed/staggered feel
  // Enter: 20% -> 40%
  // Exit:  70% -> 90% (Sync exit with first column for cleaner look)
  const opacity2 = useTransform(scrollYProgress, [0.2, 0.4, 0.7, 0.9], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.2, 0.4, 0.7, 0.9], [50, 0, 0, -50]);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-32 bg-zinc-950 border-t border-zinc-900"
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row gap-16">
        {/* About Me Column */}
        <motion.div
          className="md:w-1/2"
          style={{ opacity: opacity1, y: y1 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8">About Me</h2>
          <p className="text-zinc-400 leading-loose mb-6">
            I am a passionate developer who believes that code is a tool to
            solve human problems. With a background in design and engineering, I
            bridge the gap between aesthetics and functionality.
          </p>
          <p className="text-zinc-400 leading-loose">
            Currently based in New York, I spend my days architecting scalable
            systems and my nights contributing to open source. I prefer dark
            mode, strong coffee, and clean git commits.
          </p>
        </motion.div>

        {/* Technical Stack Column */}
        <motion.div
          className="md:w-1/2"
          style={{ opacity: opacity2, y: y2 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Technical Stack
          </h2>
          <div>
            <TechStackWeb
              icons={[
                { name: "TypeScript", icon: <TypeScriptSVG /> },
                { name: "Next.js", icon: <NextjsSVG /> },
                { name: "Python", icon: <PythonSVG /> },
                { name: "PostgreSQL", icon: <PostgresqlSVG /> },
                { name: "Docker", icon: <DockerSVG /> },
                { name: "Node.js", icon: <NodeJSSVG /> },
                { name: "Redis", icon: <RedisSVG /> },
                { name: "AWS", icon: <AWSSVG /> },
                { name: "JavaScript", icon: <JavaScriptSVG /> },
                { name: "GitHub", icon: <GitHubSVG /> },
                { name: "Git", icon: <GitSVG /> },
                { name: "Java", icon: <JavaSVG /> },
                { name: "Fastify", icon: <FastifySVG /> },
                { name: "React", icon: <ReactSVG /> },
                { name: "Spring", icon: <SpringSVG /> }
              ]}
              onIconClick={(item) => console.log(`Clicked: ${item.name}`)}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}