import { motion } from "framer-motion";
import { Link, useLocation } from "wouter";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { GlitchText } from "@/components/ui/GlitchText";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/50 border-b border-primary/20">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold font-orbitron text-primary tracking-tighter hover:text-accent transition-colors">
            <GlitchText text="RISHAV" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className={`text-sm font-rajdhani font-medium uppercase tracking-widest hover:text-primary transition-colors relative group ${
                  location === link.href ? "text-primary" : "text-muted-foreground"
                }`}>
                {link.label}
                <span className={`absolute -bottom-1 left-0 w-full h-[2px] bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left ${location === link.href ? "scale-x-100" : ""}`} />
            </Link>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-primary"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden absolute top-full left-0 right-0 bg-background/95 border-b border-primary/20 p-6 flex flex-col gap-4"
        >
          {links.map((link) => (
            <Link key={link.href} href={link.href} className={`text-lg font-orbitron uppercase ${
                  location === link.href ? "text-primary" : "text-foreground"
                }`}
                onClick={() => setIsOpen(false)}>
                {link.label}
            </Link>
          ))}
        </motion.div>
      )}
    </nav>
  );
}
