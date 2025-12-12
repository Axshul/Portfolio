import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Sparkles, Zap, Database, Code, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Neural Notes",
    description:
      "A modern note-taking application built with HTML, CSS, and JavaScript. Features clean UI, local storage, and intuitive note management for enhanced productivity.",
    tags: ["HTML", "CSS", "JavaScript", "Local Storage"],
    icon: Sparkles,
    gradient: "from-emerald-500/20 via-emerald-500/10 to-transparent",
    accentColor: "emerald",
    live: "https://perchance.org/noteit-shanks",
    github: "https://github.com/Axshul",
    featured: true,
  },
  {
    title: "Shanks Share",
    description:
      "Local Wi-Fi file sharing platform with integrated chat functionality. Enables seamless file transfer and communication within local networks without internet dependency.",
    tags: ["Python", "Flask", "WebSocket", "File Transfer"],
    icon: Zap,
    gradient: "from-cyan-500/20 via-cyan-500/10 to-transparent",
    accentColor: "cyan",
    github: "https://github.com/Axshul/Shanks-Share",
    featured: true,
  },
  {
    title: "JiN Crypt",
    description:
      "Secure Python vault for password and text storage with advanced encryption. Features master password protection and secure data management for sensitive information.",
    tags: ["Python", "Encryption", "Security", "CLI"],
    icon: Database,
    gradient: "from-orange-500/20 via-orange-500/10 to-transparent",
    accentColor: "orange",
    github: "https://github.com/Axshul/JiN-Crypt",
  },
  {
    title: "AI Automation Solutions",
    description:
      "Intelligent business process automation using Python and AI models for enhanced productivity. Custom workflow solutions that streamline operations and reduce manual tasks.",
    tags: ["Python", "AI/ML", "Automation", "Workflow"],
    icon: Code,
    gradient: "from-pink-500/20 via-pink-500/10 to-transparent",
    accentColor: "pink",
    github: "https://github.com/Axshul",
  },
];

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 radial-gradient opacity-50" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.span 
            className="font-mono text-primary text-sm tracking-wider uppercase inline-block"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            Featured Work
          </motion.span>
          <h2 className="font-display font-bold text-4xl md:text-6xl mt-4">
            <span className="gradient-text-hero">Projects</span>
            <span className="text-foreground/90"> & Creations</span>
          </h2>
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className="group relative"
            >
              <div className="h-full p-6 md:p-8 glass-morphism rounded-2xl relative overflow-hidden border border-border/30 hover:border-primary/30 transition-all duration-500">
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Animated border glow */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-[-1px] rounded-2xl bg-gradient-to-r from-primary/50 via-accent/50 to-primary/50 blur-sm" />
                </div>

                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <motion.div 
                        className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors border border-primary/20"
                        whileHover={{ rotate: 5, scale: 1.05 }}
                      >
                        <project.icon className="w-7 h-7 text-primary" />
                      </motion.div>
                      {/* Featured badge - moved next to icon */}
                      {project.featured && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ delay: 0.5 + i * 0.1 }}
                          className="px-3 py-1 text-xs font-mono bg-primary/20 text-primary rounded-full border border-primary/30"
                        >
                          Featured
                        </motion.div>
                      )}
                    </div>
                    <div className="flex gap-2">
                      {project.github && (
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          className="p-2.5 rounded-lg glass hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
                          aria-label="View on GitHub"
                        >
                          <Github size={18} />
                        </motion.a>
                      )}
                      {project.live && (
                        <motion.a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          className="p-2.5 rounded-lg glass hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
                          aria-label="View live site"
                        >
                          <ExternalLink size={18} />
                        </motion.a>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="font-display font-semibold text-xl md:text-2xl text-foreground mb-3 group-hover:text-primary transition-colors flex items-center gap-2">
                    {project.title}
                    <ArrowUpRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 text-xs font-mono bg-secondary/50 rounded-lg text-muted-foreground border border-border/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View more CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/Axshul"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 px-8 py-4 glass-morphism rounded-xl text-foreground font-medium border border-border/30 hover:border-primary/50 transition-all group"
          >
            <Github size={20} />
            <span>View All Projects on GitHub</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
