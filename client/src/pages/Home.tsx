import { motion } from "framer-motion";
import { Link } from "wouter";
import { useState } from "react";
import { HeroScene } from "@/components/three/HeroScene";
import { GlitchText } from "@/components/ui/GlitchText";
import { NeonButton } from "@/components/ui/NeonButton";
import { ProfilePanel } from "@/components/ProfilePanel";
import { portfolioData } from "@/data/portfolio";
import { ArrowRight, Mail } from "lucide-react";

export default function Home() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <div className="relative w-full h-screen overflow-hidden flex flex-col justify-center items-center text-center">
      <HeroScene />

      <ProfilePanel isOpen={isProfileOpen} onClose={() => setIsProfileOpen(false)} />

      <div className="absolute right-6 md:right-10 top-40 md:top-48 z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -6, 0],
          }}
          transition={{
            delay: 0.4,
            duration: 0.7,
            ease: "easeOut",
            y: { repeat: Infinity, duration: 6, ease: "easeInOut" },
          }}
          whileHover={{ scale: 2, rotate: 1 }}
          className="relative"
        >
          <motion.div
            className="absolute inset-0 blur-3xl bg-[radial-gradient(circle_at_30%_30%,rgba(255,225,0,0.45),transparent_45%),radial-gradient(circle_at_70%_70%,rgba(255,170,0,0.35),transparent_50%)] rounded-full scale-150 -z-20"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
          />
          <motion.div
            className="absolute inset-[-12%] rounded-full border border-yellow-300/60 opacity-80 -z-10 shadow-[0_0_35px_rgba(255,215,0,0.45)]"
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 22, ease: "linear" }}
          />
          <div className="rounded-full border-2 border-primary/60 shadow-[0_0_40px_rgba(0,243,255,0.35)] overflow-hidden w-28 h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 transition-transform duration-500">
            <img
              src="/profile.png"
              alt={`${portfolioData.name} portrait`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
      
      <div className="z-10 px-6 max-w-4xl mx-auto flex flex-col items-center gap-6 md:pr-28 lg:pr-0">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          {/* Clickable PROFILE Label */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
            onClick={() => setIsProfileOpen(true)}
            className="mb-4 px-4 py-2 bg-card/20 backdrop-blur-md border border-primary/40 rounded-full text-sm font-space-grotesk font-semibold text-primary uppercase tracking-wider shadow-[0_0_15px_rgba(0,243,255,0.2)] hover:scale-105 hover:shadow-[0_0_25px_rgba(0,243,255,0.4)] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
            aria-label="Open profile panel"
          >
            PROFILE
          </motion.button>

          <h1 className="text-5xl md:text-8xl font-black font-orbitron tracking-tighter mb-6 text-foreground drop-shadow-[0_0_15px_rgba(0,243,255,0.3)] whitespace-nowrap">
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
