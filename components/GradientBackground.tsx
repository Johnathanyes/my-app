"use client";

import { MeshGradient } from "@paper-design/shaders-react";
import { motion } from "framer-motion";
import type React from "react";
import { useEffect, useState, useRef } from "react";

interface ShaderBackgroundProps {
  children: React.ReactNode;
}

// 1. UPDATE THE INTERFACE
// These are the correct prop names for the component
interface GradientParams {
  speed: number;
  distortion: number; // Replaces noise, amplitude, frequency
  swirl: number; // Replaces noise, amplitude, frequency
  offsetX: number;
  offsetY: number;
}

export function GradientBackground({ children }: ShaderBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // We can keep this state hook as-is
  const [params1, setParams1] = useState<GradientParams | null>(null);
  const [params2, setParams2] = useState<GradientParams | null>(null);
  const [params3, setParams3] = useState<GradientParams | null>(null);

  useEffect(() => {
    const random = (min: number, max: number) =>
      Math.random() * (max - min) + min;

    setParams1({
      speed: random(0.3, 1.2),
      distortion: random(-1.0, 1.0), // This controls the organic noise/shape
      swirl: random(0.3, 0.8), // This controls the vortex/movement
      offsetX: random(-0.5, 0.5),
      offsetY: random(-0.5, 0.5),
    });

    setParams2({
      speed: random(0.3, 1.5),
      distortion: random(-1.0, 1.0),
      swirl: random(-1, 0.6),
      offsetX: random(-0.3, 0.7),
      offsetY: random(-0.8, 0.9),
    });

    setParams3({
      speed: random(0.3, 0.5),
      distortion: random(0.1, 0.5),
      swirl: random(-0.1, 0.1),
      offsetX: random(-0.3, 0.3),
      offsetY: random(-0.1, 0.1),
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen w-full relative overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 w-full h-full"
      >
        {params1 && (
          <MeshGradient
            className="absolute inset-0 w-full h-full"
            colors={[
              "#030303",
              "#13161b",
              "#cecece",
              "#f7f5ee",
              "#030303",
              "#030303",
            ]}
            speed={params1.speed}
            distortion={params1.distortion} // Use 'distortion'
            swirl={params1.swirl} // Use 'swirl'
            offsetX={params1.offsetX} // Use 'offsetX'
            offsetY={params1.offsetY} // Use 'offsetY'
          />
        )}

        {params2 && (
          <MeshGradient
            className="absolute inset-0 w-full h-full opacity-60"
            colors={[
              "#030303",
              "#13161b",
              "#cecece",
              "#f7f5ee",
              "#030303",
              "#030303",
            ]}
            speed={params2.speed}
            distortion={params2.distortion}
            swirl={params2.swirl}
            offsetX={params2.offsetX}
            offsetY={params2.offsetY}
          />
        )}

        {params3 && (
          <motion.div
            className="absolute inset-0 w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            <MeshGradient
              colors={[
                "#030303",
                "#13161b",
                "#cecece",
                "#f7f5ee",
                "#030303",
                "#030303",
              ]}
              speed={params3.speed}
              distortion={params3.distortion}
              swirl={params3.swirl}
              offsetX={params3.offsetX}
              offsetY={params3.offsetY}
            />
          </motion.div>
        )}
      </motion.div>

      {children}
    </div>
  );
}
