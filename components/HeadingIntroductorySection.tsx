import { GradientBackground } from "./GradientBackground";

export default function HeadingIntroductorySection () {
    return (
        <GradientBackground>
            <main>
                 <h1 className="font-sora font-bold text-[6em] text-background" 
                    style={{
                        textShadow: '0 4px 12px rgba(0, 0, 0, 0.8), 0 2px 4px rgba(0, 0, 0, 0.6)'
                    }}>
                    Hey, I'm Johnathan
                </h1>
            </main>
        </GradientBackground>
    )
}