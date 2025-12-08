import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { NeonButton } from "@/components/ui/NeonButton";

export default function Projects() {
  return (
    <div className="container mx-auto px-6 py-32 min-h-screen">
      <motion.h1
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-4xl md:text-6xl font-orbitron font-bold text-accent mb-12 uppercase"
      >
        Projects
      </motion.h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioData.projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ y: -10, rotateX: 5, rotateY: 5, scale: 1.02 }}
            style={{ perspective: 1000 }}
          >
            <Card className="bg-card/40 backdrop-blur-sm border-primary/20 hover:border-primary/60 transition-colors duration-300 overflow-hidden h-full flex flex-col group">
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10" />
                <motion.img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <CardHeader>
                <CardTitle className="font-orbitron text-xl text-primary group-hover:text-glow transition-all">
                  {project.title}
                </CardTitle>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tech.map((t) => (
                    <Badge key={t} variant="outline" className="border-accent/50 text-accent font-rajdhani">
                      {t}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription className="text-muted-foreground font-rajdhani text-base">
                  {project.description}
                </CardDescription>
              </CardContent>
              <CardFooter className="flex justify-between gap-4">
                 <NeonButton variant="primary" className="w-full text-xs py-2 px-4">
                    Demo
                 </NeonButton>
                 <NeonButton variant="secondary" className="w-full text-xs py-2 px-4">
                    Code
                 </NeonButton>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
