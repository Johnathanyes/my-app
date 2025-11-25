"use client"
import React from 'react';
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
        <nav style={maskStyle}
        className={`fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent ${isScrolled ? 'bg-black/20 backdrop-blur-lg py-4' : 'bg-transparent py-6'
            }`}>

            <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
                <div className="text-xl font-bold tracking-tighter flex items-center gap-2">
                    <span>JLee</span>
                </div>

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
        </nav>
    );
};

export default Navigation;
