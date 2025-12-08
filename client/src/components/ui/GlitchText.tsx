import { motion } from "framer-motion";
import React from "react";

interface GlitchTextProps {
  text: string;
  className?: string;
  as?: React.ElementType;
}

export function GlitchText({ text, className = "", as: Component = "span" }: GlitchTextProps) {
  return (
    <Component className={`glitch-wrapper relative inline-block ${className}`} data-text={text}>
      {text}
    </Component>
  );
}
