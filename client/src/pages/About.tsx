import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

export default function About() {
  return (
    <div className="container mx-auto px-6 py-32 min-h-screen flex flex-col justify-center">
      <motion.h1
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-4xl md:text-6xl font-orbitron font-bold text-primary mb-12 uppercase"
      >
        About Me
      </motion.h1>

      <div className="grid md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-card/50 backdrop-blur-sm border border-primary/20 p-8 rounded-lg relative overflow-hidden group hover:border-primary/50 transition-colors"
        >
          <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity">
            <div className="w-20 h-20 bg-primary/20 blur-3xl rounded-full" />
          </div>
          
          <h3 className="text-2xl font-orbitron text-white mb-6">Background</h3>
          <p className="text-muted-foreground font-rajdhani text-lg leading-relaxed mb-6">
            I am a student at the intersection of creativity and logic. My journey started with C programming,
            but my passion quickly evolved into building intelligent systems using AI.
            I believe code is modern magic, and I aim to be a wizard of the web.
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-transparent" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="space-y-8"
        >
           <h3 className="text-2xl font-orbitron text-white mb-6">Timeline</h3>
           <div className="border-l-2 border-primary/30 pl-8 space-y-12 relative">
             {[
               { year: "2025", title: "Building Future Tech", desc: "Focusing on Agentic AI and Automation" },
               { year: "2023", title: "Started BCA", desc: "Deep dive into Computer Science fundamentals" },
               { year: "2021", title: "First Line of Code", desc: "Discovered the world of programming" }
             ].map((item, i) => (
               <div key={i} className="relative">
                 <span className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-background border-2 border-primary" />
                 <span className="text-primary font-orbitron text-sm tracking-wider block mb-2">{item.year}</span>
                 <h4 className="text-xl font-bold text-white mb-1">{item.title}</h4>
                 <p className="text-muted-foreground font-rajdhani">{item.desc}</p>
               </div>
             ))}
           </div>
        </motion.div>
      </div>
    </div>
  );
}
