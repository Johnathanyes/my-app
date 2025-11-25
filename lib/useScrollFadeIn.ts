import { useEffect, useRef, useState } from "react";

export function useScrollFadeIn() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0); // 0 → 1

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const ratio = entry.intersectionRatio; // how much is visible
        setProgress(ratio);                    // store scroll progress
      },
      {
        threshold: Array.from({ length: 101 }, (_, i) => i / 100), // 0 → 1
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, progress };
}