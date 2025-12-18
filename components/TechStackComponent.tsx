import React from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';

// --- Types ---
type TechItem = {
  name: string;
  icon: React.ReactNode;
  color?: string; // Hex color for the "Liquid" glow effect (e.g., #61DAFB)
};

interface TechStackProps {
  icons: TechItem[];
  onIconClick: (item: TechItem) => void;
}

// --- Main Component ---
export default function TechStackWeb({ icons, onIconClick }: TechStackProps) {
  return (
    <div className="relative w-full max-w-7xl mx-auto">
      {/* The Liquid Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-10">
        {icons.map((item, index) => (
          <LiquidGlassItem
            key={index}
            item={item}
            onClick={() => onIconClick(item)}
          />
        ))}
      </div>
    </div>
  );
}

// --- Individual Liquid Item ---
function LiquidGlassItem({ item, onClick }: { item: TechItem; onClick: () => void }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring animation for the tilt effect
  const x = useSpring(0, { stiffness: 300, damping: 20 });
  const y = useSpring(0, { stiffness: 300, damping: 20 });

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const xPos = clientX - left;
    const yPos = clientY - top;

    mouseX.set(xPos);
    mouseY.set(yPos);

    // Calculate tilt (subtle)
    const rotateX = ((yPos - height / 2) / height) * -10;
    const rotateY = ((xPos - width / 2) / width) * 10;

    x.set(rotateX);
    y.set(rotateY);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  // The "Glow" follows the mouse
  const background = useMotionTemplate`radial-gradient(120px circle at ${mouseX}px ${mouseY}px, ${item.color ? item.color + '40' : 'rgba(255,255,255,0.15)'}, transparent 80%)`;

  return (
    <motion.div
      className="group relative flex flex-col items-center justify-center cursor-pointer"
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX: x, rotateY: y }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* THE LIQUID GLASS CONTAINER */}
      <div className="relative w-12 h-12 md:w-16 md:h-16 rounded-[1.5rem] flex items-center justify-center transition-all duration-500 ease-out z-10">

        {/* Layer 1: The Glass Body (Blur + Transparency) */}
        <div className="absolute inset-0 rounded-[1.5rem] bg-gradient-to-br from-white/10 to-white/0 backdrop-blur-[20px] shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all duration-500 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.6)]"></div>

        {/* Layer 2: The Specular Bezel (The "Thick" feel) */}
        {/* This creates the inner highlight that makes it look like a lens */}
        <div className="absolute inset-0 rounded-[1.5rem] border border-white/10 shadow-[inset_0_0_20px_rgba(255,255,255,0.05),inset_1px_1px_1px_rgba(255,255,255,0.4),inset_-1px_-1px_10px_rgba(0,0,0,0.5)]"></div>

        {/* Layer 3: Mouse Spotlight (Dynamic Color) */}
        <motion.div
          className="absolute inset-0 rounded-[1.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background }}
        />

        {/* Layer 4: The Gloss Reflection (Top Shine) */}
        {/* This is the white gradient at the top that screams "Liquid" */}
        <div className="absolute inset-0 rounded-[1.5rem] bg-gradient-to-b from-white/20 via-transparent to-transparent opacity-40 pointer-events-none mix-blend-overlay"></div>

        {/* ICON */}
        <div
          className="relative z-16 w-4 h-4 md:w-10 md:h-10 transition-all duration-500 group-hover:scale-110 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]"
          style={{ color: item.color || '#e5e5e5' }}
        >
          {/* Ensure SVG takes full size */}
          <div className="w-full h-full [&>svg]:w-full [&>svg]:h-full [&>svg]:fill-current">
            {item.icon}
          </div>
        </div>
      </div>

      {/* Label (Floating below) */}
      <div className="mt-4 opacity-60 group-hover:opacity-100 transition-all duration-500 transform group-hover:translate-y-1">
        <span className="text-sm font-medium text-white/90 tracking-wide font-sans shadow-black drop-shadow-md">
          {item.name}
        </span>
      </div>

      {/* Floor Reflection (Optional, adds 3D grounding) */}
      <div
        className="absolute -bottom-6 w-20 h-4 bg-white/20 blur-xl rounded-full opacity-0 group-hover:opacity-40 transition-all duration-500"
        style={{ backgroundColor: item.color }}
      />
    </motion.div>
  );
}