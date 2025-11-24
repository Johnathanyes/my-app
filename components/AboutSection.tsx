export default function AboutSection() {
    return (
        <section id="about" className="py-32 bg-zinc-950 border-t border-zinc-900">
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row gap-16">

                <div className="md:w-1/2">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8">About Me</h2>
                    <p className="text-zinc-400 leading-loose mb-6">
                        I am a passionate developer who believes that code is a tool to solve human problems. With a background in design and engineering, I bridge the gap between aesthetics and functionality.
                    </p>
                    <p className="text-zinc-400 leading-loose">
                        Currently based in New York, I spend my days architecting scalable systems and my nights contributing to open source. I prefer dark mode, strong coffee, and clean git commits.
                    </p>
                </div>

                <div className="md:w-1/2">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8">Technical Stack</h2>
                    <div className="grid grid-cols-2 gap-4">
                        {[
                            { cat: "Frontend", items: "React, Next.js, TypeScript, Tailwind" },
                            { cat: "Backend", items: "Node.js, Python, Go, PostgreSQL" },
                            { cat: "DevOps", items: "Docker, AWS, CI/CD, Linux" },
                            { cat: "Tools", items: "Git, Figma, Vercel, Postman" }
                        ].map((stack, idx) => (
                            <div key={idx} className="p-6 border border-zinc-800 bg-black/50 hover:border-zinc-600 transition-colors">
                                <h3 className="text-white font-bold mb-2">{stack.cat}</h3>
                                <p className="text-zinc-500 text-sm">{stack.items}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    )
}