import { motion } from "framer-motion";
import { NeonButton } from "@/components/ui/NeonButton";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Contact() {
  return (
    <div className="container mx-auto px-6 py-32 min-h-screen flex flex-col justify-center">
      <motion.h1
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-4xl md:text-6xl font-orbitron font-bold text-primary mb-12 uppercase text-center"
      >
        Initialize Connection
      </motion.h1>

      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto w-full">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="p-8 bg-card/30 backdrop-blur-md border-primary/20">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-sm font-orbitron text-primary uppercase">Identity</label>
                <Input placeholder="ENTER NAME" className="bg-background/50 border-primary/20 focus:border-primary font-rajdhani" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-orbitron text-primary uppercase">Signal Source</label>
                <Input placeholder="ENTER EMAIL" type="email" className="bg-background/50 border-primary/20 focus:border-primary font-rajdhani" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-orbitron text-primary uppercase">Transmission</label>
                <Textarea placeholder="TYPE MESSAGE..." className="bg-background/50 border-primary/20 focus:border-primary font-rajdhani min-h-[150px]" />
              </div>
              <NeonButton variant="primary" className="w-full">
                Transmit Data
              </NeonButton>
            </form>
          </Card>
        </motion.div>

        {/* Socials */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col justify-center space-y-8"
        >
          <div className="space-y-4">
            <h3 className="text-2xl font-orbitron text-white">Direct Link</h3>
            <p className="text-muted-foreground font-rajdhani text-lg">
              Available for freelance contracts and collaborative projects. 
              Transmission channels are open.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Github, label: "GitHub", href: portfolioData.socials.github },
              { icon: Linkedin, label: "LinkedIn", href: portfolioData.socials.linkedin },
              { icon: Twitter, label: "Twitter", href: portfolioData.socials.twitter },
              { icon: Mail, label: "Email", href: portfolioData.socials.email },
            ].map((social, i) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 p-4 bg-card/20 border border-white/5 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
              >
                <social.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                <span className="font-orbitron text-sm text-muted-foreground group-hover:text-white transition-colors">
                  {social.label}
                </span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
