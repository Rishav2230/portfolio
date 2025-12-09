import { motion } from "framer-motion";
import React from "react";

interface GlitchTextProps {
  text: string;
  className?: string;
  as?: "span" | "div";
}

export function GlitchText({ text, className = "", as = "span" }: GlitchTextProps) {
  const Tag = as;
  return (
    <Tag className={`glitch-wrapper relative inline-block ${className}`} data-text={text}>
      {text}
    </Tag>
  );
}
