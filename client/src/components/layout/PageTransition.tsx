import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "wouter";
import { ReactNode } from "react";

const variants = {
  initial: { opacity: 0, x: -20, filter: "blur(10px)" },
  animate: { opacity: 1, x: 0, filter: "blur(0px)" },
  exit: { opacity: 0, x: 20, filter: "blur(10px)" },
};

export function PageTransition({ children }: { children: ReactNode }) {
  const [location] = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={variants}
        transition={{ duration: 0.4, ease: "anticipate" }}
        className="w-full min-h-screen"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
