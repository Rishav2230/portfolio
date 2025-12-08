import { motion } from "framer-motion";
import { Link } from "wouter";
import { HeroScene } from "@/components/three/HeroScene";
import { GlitchText } from "@/components/ui/GlitchText";
import { NeonButton } from "@/components/ui/NeonButton";
import { portfolioData } from "@/data/portfolio";
import { ArrowRight, Mail } from "lucide-react";

export default function Home() {
  return (
    <div className="relative w-full h-screen overflow-hidden flex flex-col justify-center items-center text-center">
      <HeroScene />
      
      <div className="z-10 px-6 max-w-4xl mx-auto flex flex-col items-center gap-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-xl md:text-2xl font-rajdhani text-primary tracking-[0.5em] mb-4 uppercase">
            {portfolioData.role}
          </h2>
          <h1 className="text-5xl md:text-8xl font-black font-orbitron tracking-tighter mb-6 text-foreground drop-shadow-[0_0_15px_rgba(0,243,255,0.3)]">
            <GlitchText text={portfolioData.name.toUpperCase()} />
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8 font-rajdhani text-lg md:text-xl leading-relaxed">
            {portfolioData.about}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex flex-col md:flex-row gap-6"
        >
          <Link href="/projects">
            <NeonButton variant="primary">
              <span className="flex items-center gap-2">
                View Projects <ArrowRight className="w-4 h-4" />
              </span>
            </NeonButton>
          </Link>
          <Link href="/contact">
            <NeonButton variant="secondary">
              <span className="flex items-center gap-2">
                Contact Me <Mail className="w-4 h-4" />
              </span>
            </NeonButton>
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-xs font-rajdhani text-muted-foreground uppercase tracking-widest animate-bounce"
      >
        Scroll to Explore
      </motion.div>
    </div>
  );
}
