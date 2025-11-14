"use client"

import { GradientBackground } from "@/components/GradientBackground";
import HeadingIntroductorySection from "@/components/HeadingIntroductorySection";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <HeadingIntroductorySection />
    </div>
  );
}
