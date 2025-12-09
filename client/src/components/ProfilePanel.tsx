import { motion, AnimatePresence } from "framer-motion";
import { X, User, Mail, Phone, MapPin, GraduationCap, Briefcase, FolderKanban, Award, Github, ExternalLink } from "lucide-react";
import { useEffect } from "react";

interface ProfilePanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ProfilePanel({ isOpen, onClose }: ProfilePanelProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  const panelVariantsDesktop = {
    hidden: {
      x: -400,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
    exit: {
      x: -400,
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  const panelVariantsMobile = {
    hidden: {
      y: "100%",
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
    exit: {
      y: "100%",
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            aria-hidden="true"
          />

          {/* Panel - Desktop */}
          <motion.div
            variants={panelVariantsDesktop}
            initial="hidden"
            animate="visible"
            exit="exit"
            role="dialog"
            aria-modal="true"
            aria-labelledby="profile-panel-title"
            className="hidden lg:block fixed left-0 top-1/2 -translate-y-1/2 w-[360px] max-h-[90vh] bg-card/95 backdrop-blur-xl border-r border-primary/30 shadow-[0_0_40px_rgba(0,243,255,0.2)] z-50 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-card/95 backdrop-blur-xl border-b border-primary/20 px-6 py-4 flex items-center justify-between z-10">
              <h2
                id="profile-panel-title"
                className="text-xl font-space-grotesk font-bold text-primary uppercase tracking-wider"
              >
                PROFILE
              </h2>
              <button
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-primary/10 text-muted-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
                aria-label="Close profile panel"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="p-6 space-y-8"
            >
              {/* Basic Info */}
              <motion.section variants={itemVariants}>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-primary">
                    <User className="w-4 h-4" />
                    <span className="text-sm font-space-grotesk font-semibold uppercase tracking-wider">Name:</span>
                  </div>
                  <p className="text-foreground font-sora ml-6">Rishav Kumar</p>
                </div>
                <div className="space-y-3 mt-4">
                  <div className="flex items-center gap-2 text-primary">
                    <Mail className="w-4 h-4" />
                    <span className="text-sm font-space-grotesk font-semibold uppercase tracking-wider">Email:</span>
                  </div>
                  <p className="text-foreground font-sora ml-6">rajvikash8297@gmail.com</p>
                </div>
                <div className="space-y-3 mt-4">
                  <div className="flex items-center gap-2 text-primary">
                    <Phone className="w-4 h-4" />
                    <span className="text-sm font-space-grotesk font-semibold uppercase tracking-wider">Phone:</span>
                  </div>
                  <p className="text-foreground font-sora ml-6">6203296161</p>
                </div>
                <div className="space-y-3 mt-4">
                  <div className="flex items-center gap-2 text-primary">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm font-space-grotesk font-semibold uppercase tracking-wider">Address:</span>
                  </div>
                  <p className="text-foreground font-sora ml-6">kadamkuan congress maidan</p>
                </div>
              </motion.section>

              {/* Education */}
              <motion.section variants={itemVariants}>
                <div className="flex items-center gap-2 text-primary mb-4">
                  <GraduationCap className="w-5 h-5" />
                  <h3 className="text-lg font-space-grotesk font-bold uppercase tracking-wider">EDUCATION</h3>
                </div>
                <ul className="space-y-3 ml-7">
                  <li className="text-foreground font-sora text-sm">• 10th: Oxbridge Convent High School — Percentage: 59.9</li>
                  <li className="text-foreground font-sora text-sm">• 12th: S.G.D. Patliputra — Percentage: 68</li>
                  <li className="text-foreground font-sora text-sm">• UG: BCA — Arcard Business College</li>
                </ul>
              </motion.section>

              {/* Work Experience */}
              <motion.section variants={itemVariants}>
                <div className="flex items-center gap-2 text-primary mb-4">
                  <Briefcase className="w-5 h-5" />
                  <h3 className="text-lg font-space-grotesk font-bold uppercase tracking-wider">WORK EXPERIENCE</h3>
                </div>
                <ul className="space-y-3 ml-7">
                  <li className="text-foreground font-sora text-sm">
                    • Job Title / Internship — Company — Year
                    <br />
                    <span className="text-muted-foreground ml-4">- Brief bullet (1–2 lines)</span>
                  </li>
                </ul>
              </motion.section>

              {/* Projects */}
              <motion.section variants={itemVariants}>
                <div className="flex items-center gap-2 text-primary mb-4">
                  <FolderKanban className="w-5 h-5" />
                  <h3 className="text-lg font-space-grotesk font-bold uppercase tracking-wider">PROJECTS</h3>
                </div>
                <ul className="space-y-4 ml-7">
                  <li className="text-foreground font-sora text-sm">
                    <div className="mb-2">• Project 1 — Short description (tech stack: Next.js, TypeScript, Three.js)</div>
                    <div className="flex gap-3 ml-4">
                      <a
                        href="#"
                        className="flex items-center gap-1 text-primary hover:text-accent transition-colors text-xs"
                      >
                        <Github className="w-3 h-3" />
                        GitHub
                      </a>
                      <a
                        href="#"
                        className="flex items-center gap-1 text-primary hover:text-accent transition-colors text-xs"
                      >
                        <ExternalLink className="w-3 h-3" />
                        Live Demo
                      </a>
                    </div>
                  </li>
                  <li className="text-foreground font-sora text-sm">
                    <div className="mb-2">• Project 2 — Short description</div>
                    <div className="flex gap-3 ml-4">
                      <a
                        href="#"
                        className="flex items-center gap-1 text-primary hover:text-accent transition-colors text-xs"
                      >
                        <Github className="w-3 h-3" />
                        GitHub
                      </a>
                      <a
                        href="#"
                        className="flex items-center gap-1 text-primary hover:text-accent transition-colors text-xs"
                      >
                        <ExternalLink className="w-3 h-3" />
                        Live Demo
                      </a>
                    </div>
                  </li>
                </ul>
              </motion.section>

              {/* Certificates */}
              <motion.section variants={itemVariants}>
                <div className="flex items-center gap-2 text-primary mb-4">
                  <Award className="w-5 h-5" />
                  <h3 className="text-lg font-space-grotesk font-bold uppercase tracking-wider">CERTIFICATES</h3>
                </div>
                <ul className="space-y-3 ml-7">
                  <li className="text-foreground font-sora text-sm">
                    <div className="mb-2">• Certificate 1</div>
                    <img
                      src="/certi.jpeg"
                      alt="Certificate 1"
                      className="ml-4 rounded-md border border-primary/30 shadow-[0_0_20px_rgba(0,243,255,0.25)] max-w-full h-auto"
                    />
                  </li>
                  <li className="text-foreground font-sora text-sm">
                    • Certificate 2 — Provider — Year
                  </li>
                </ul>
              </motion.section>
            </motion.div>
          </motion.div>

          {/* Panel - Mobile */}
          <motion.div
            variants={panelVariantsMobile}
            initial="hidden"
            animate="visible"
            exit="exit"
            role="dialog"
            aria-modal="true"
            aria-labelledby="profile-panel-title-mobile"
            className="lg:hidden fixed left-0 bottom-0 w-full max-h-[85vh] bg-card/95 backdrop-blur-xl border-t border-primary/30 shadow-[0_0_40px_rgba(0,243,255,0.2)] z-50 overflow-y-auto rounded-t-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-card/95 backdrop-blur-xl border-b border-primary/20 px-6 py-4 flex items-center justify-between z-10">
              <h2
                id="profile-panel-title-mobile"
                className="text-xl font-space-grotesk font-bold text-primary uppercase tracking-wider"
              >
                PROFILE
              </h2>
              <button
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-primary/10 text-muted-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
                aria-label="Close profile panel"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="p-6 space-y-8"
            >
              {/* Basic Info */}
              <motion.section variants={itemVariants}>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-primary">
                    <User className="w-4 h-4" />
                    <span className="text-sm font-space-grotesk font-semibold uppercase tracking-wider">Name:</span>
                  </div>
                  <p className="text-foreground font-sora ml-6">Rishav Kumar</p>
                </div>
                <div className="space-y-3 mt-4">
                  <div className="flex items-center gap-2 text-primary">
                    <Mail className="w-4 h-4" />
                    <span className="text-sm font-space-grotesk font-semibold uppercase tracking-wider">Email:</span>
                  </div>
                  <p className="text-foreground font-sora ml-6">rajvikash8297@gmail.com</p>
                </div>
                <div className="space-y-3 mt-4">
                  <div className="flex items-center gap-2 text-primary">
                    <Phone className="w-4 h-4" />
                    <span className="text-sm font-space-grotesk font-semibold uppercase tracking-wider">Phone:</span>
                  </div>
                  <p className="text-foreground font-sora ml-6">6203296161</p>
                </div>
                <div className="space-y-3 mt-4">
                  <div className="flex items-center gap-2 text-primary">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm font-space-grotesk font-semibold uppercase tracking-wider">Address:</span>
                  </div>
                  <p className="text-foreground font-sora ml-6">kadamkuan congress maidan</p>
                </div>
              </motion.section>

              {/* Education */}
              <motion.section variants={itemVariants}>
                <div className="flex items-center gap-2 text-primary mb-4">
                  <GraduationCap className="w-5 h-5" />
                  <h3 className="text-lg font-space-grotesk font-bold uppercase tracking-wider">EDUCATION</h3>
                </div>
                <ul className="space-y-3 ml-7">
                  <li className="text-foreground font-sora text-sm">• 10th: Oxbridge Convent High School — Percentage: 59.9</li>
                  <li className="text-foreground font-sora text-sm">• 12th: S.G.D. Patliputra — Percentage: 68</li>
                  <li className="text-foreground font-sora text-sm">• UG: BCA — Arcard Business College</li>
                </ul>
              </motion.section>

              {/* Work Experience */}
              <motion.section variants={itemVariants}>
                <div className="flex items-center gap-2 text-primary mb-4">
                  <Briefcase className="w-5 h-5" />
                  <h3 className="text-lg font-space-grotesk font-bold uppercase tracking-wider">WORK EXPERIENCE</h3>
                </div>
                <ul className="space-y-3 ml-7">
                  <li className="text-foreground font-sora text-sm">
                    • Job Title / Internship — Company — Year
                    <br />
                    <span className="text-muted-foreground ml-4">- Brief bullet (1–2 lines)</span>
                  </li>
                </ul>
              </motion.section>

              {/* Projects */}
              <motion.section variants={itemVariants}>
                <div className="flex items-center gap-2 text-primary mb-4">
                  <FolderKanban className="w-5 h-5" />
                  <h3 className="text-lg font-space-grotesk font-bold uppercase tracking-wider">PROJECTS</h3>
                </div>
                <ul className="space-y-4 ml-7">
                  <li className="text-foreground font-sora text-sm">
                    <div className="mb-2">• Project 1 — Short description (tech stack: Next.js, TypeScript, Three.js)</div>
                    <div className="flex gap-3 ml-4">
                      <a
                        href="#"
                        className="flex items-center gap-1 text-primary hover:text-accent transition-colors text-xs"
                      >
                        <Github className="w-3 h-3" />
                        GitHub
                      </a>
                      <a
                        href="#"
                        className="flex items-center gap-1 text-primary hover:text-accent transition-colors text-xs"
                      >
                        <ExternalLink className="w-3 h-3" />
                        Live Demo
                      </a>
                    </div>
                  </li>
                  <li className="text-foreground font-sora text-sm">
                    <div className="mb-2">• Project 2 — Short description</div>
                    <div className="flex gap-3 ml-4">
                      <a
                        href="#"
                        className="flex items-center gap-1 text-primary hover:text-accent transition-colors text-xs"
                      >
                        <Github className="w-3 h-3" />
                        GitHub
                      </a>
                      <a
                        href="#"
                        className="flex items-center gap-1 text-primary hover:text-accent transition-colors text-xs"
                      >
                        <ExternalLink className="w-3 h-3" />
                        Live Demo
                      </a>
                    </div>
                  </li>
                </ul>
              </motion.section>

              {/* Certificates */}
              <motion.section variants={itemVariants}>
                <div className="flex items-center gap-2 text-primary mb-4">
                  <Award className="w-5 h-5" />
                  <h3 className="text-lg font-space-grotesk font-bold uppercase tracking-wider">CERTIFICATES</h3>
                </div>
                <ul className="space-y-3 ml-7">
                  <li className="text-foreground font-sora text-sm">
                    • Certificate 1 — Provider — Year
                  </li>
                  <li className="text-foreground font-sora text-sm">
                    • Certificate 2 — Provider — Year
                  </li>
                </ul>
              </motion.section>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
