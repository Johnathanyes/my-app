"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';

interface NavigationProps {
    activeSection: string;
    isScrolled: boolean;
    scrollToSection: (id: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection, isScrolled, scrollToSection }) => {
    const maskStyle = {
        WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 82%, transparent 800%)',
        maskImage: 'linear-gradient(to bottom, black 0%, black 82%, transparent 60%)',
    } as React.CSSProperties;


    return (
        <motion.nav
            style={maskStyle}
            initial={{ opacity: 0, y: -20, paddingTop: "1.5rem", paddingBottom: "1.5rem", backgroundColor: "rgba(0,0,0,0)", backdropFilter: "blur(0px)" }}
            animate={{
                opacity: 1,
                y: 0,
                paddingTop: isScrolled ? "1rem" : "1.5rem",
                paddingBottom: isScrolled ? "1rem" : "1.5rem",
                backgroundColor: isScrolled ? "rgba(0, 0, 0, 0.2)" : "rgba(0, 0, 0, 0)",
                backdropFilter: isScrolled ? "blur(12px)" : "blur(0px)"
            }}
            transition={{
                duration: 0.6,
                paddingTop: { duration: 0.3, ease: "easeInOut" },
                paddingBottom: { duration: 0.3, ease: "easeInOut" },
                backgroundColor: { duration: 0.3, ease: "easeInOut" },
                backdropFilter: { duration: 0.3, ease: "easeInOut" }
            }}
            className="fixed top-0 w-full z-50 border-b border-transparent"
        >

            <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">

                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
                    {['home', 'projects', 'about', 'contact'].map((item) => (
                        <button
                            key={item}
                            onClick={() => scrollToSection(item)}
                            className={`hover:text-white transition-colors uppercase tracking-widest ${activeSection === item ? 'text-white' : ''
                                }`}
                        >
                            {item}
                        </button>
                    ))}
                </div>

                {/* Mobile Menu Icon placeholder */}
                <div className="md:hidden text-white">
                    <Code2 />
                </div>
            </div>
        </motion.nav>
    );
};

export default Navigation;
