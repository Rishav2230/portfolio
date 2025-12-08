import { motion } from "framer-motion";
import React, { ReactNode } from "react";

interface NeonButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary";
}

export function NeonButton({ children, className = "", variant = "primary", ...props }: NeonButtonProps) {
  const colorClass = variant === "primary" ? "border-primary text-primary hover:bg-primary/10" : "border-secondary text-secondary hover:bg-secondary/10";
  const glowClass = variant === "primary" ? "shadow-[0_0_10px_rgba(0,243,255,0.5)] hover:shadow-[0_0_20px_rgba(0,243,255,0.8)]" : "shadow-[0_0_10px_rgba(255,0,255,0.5)] hover:shadow-[0_0_20px_rgba(255,0,255,0.8)]";

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`relative px-8 py-3 bg-transparent border-2 font-orbitron uppercase tracking-widest text-sm transition-all duration-300 ${colorClass} ${glowClass} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}
