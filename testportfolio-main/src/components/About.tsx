import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, GraduationCap, Briefcase, Sparkles, Code, Cpu, Server, Terminal } from "lucide-react";

const highlights = [
  {
    icon: Briefcase,
    title: "Available for Work",
    description: "Open to Freelance & Full-time Opportunities",
    accent: "from-emerald-500/20",
  },
  {
    icon: GraduationCap,
    title: "B.Tech CSE",
    description: "Currently in 3rd Semester (Computer Science)",
    accent: "from-cyan-500/20",
  },
  {
    icon: MapPin,
    title: "Based in",
    description: "Bhopal, Madhya Pradesh, India",
    accent: "from-orange-500/20",
  },
  {
    icon: Sparkles,
    title: "Specialization",
    description: "AI Automation & Integration Expert",
    accent: "from-pink-500/20",
  },
];

const techStack = [
  { icon: Code, label: "Full Stack" },
  { icon: Cpu, label: "AI/ML" },
  { icon: Server, label: "Backend" },
  { icon: Terminal, label: "DevOps" },
];

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 radial-gradient-top opacity-50" />
      <div className="absolute inset-0 grid-pattern opacity-10" />

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
            About Me
          </motion.span>
          <h2 className="font-display font-bold text-4xl md:text-6xl mt-4">
            <span className="gradient-text-hero">Building</span>
            <span className="text-foreground/90"> The Future</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
                I'm a passionate{" "}
                <span className="text-primary font-semibold">
                  full-stack developer
                </span>{" "}
                from Bhopal, Madhya Pradesh, India, specializing in creating engaging 
                digital experiences. I combine technical expertise in modern frameworks 
                with creative problem-solving to build clean, performant solutions.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My focus extends beyond traditional web development to include{" "}
                <span className="text-foreground">AI automation</span>,{" "}
                <span className="text-foreground">workflow optimization</span>, and{" "}
                <span className="text-foreground">business process automation</span>, helping 
                businesses leverage cutting-edge technology for enhanced efficiency.
              </p>
            </div>

            {/* Tech stack icons */}
            <div className="flex flex-wrap gap-4">
              {techStack.map((tech, i) => (
                <motion.div
                  key={tech.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  whileHover={{ y: -3, scale: 1.05 }}
                  className="flex items-center gap-2 px-4 py-2 glass rounded-xl border border-border/30"
                >
                  <tech.icon className="w-4 h-4 text-primary" />
                  <span className="text-sm text-muted-foreground">{tech.label}</span>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
            >
              {[
                { value: "37.5%", label: "B.Tech", sublabel: "Complete" },
                { value: "10+", label: "Projects", sublabel: "Built" },
                { value: "AI", label: "Automation", sublabel: "Expert" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  whileHover={{ y: -3 }}
                  className="relative p-5 glass-morphism rounded-xl border border-border/30 overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative z-10">
                    <div className="font-display font-bold text-2xl md:text-3xl text-primary">
                      {stat.value}
                    </div>
                    <div className="text-sm text-foreground mt-1">{stat.label}</div>
                    <div className="text-xs text-muted-foreground">{stat.sublabel}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Highlights grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + i * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group relative"
              >
                <div className="p-6 glass-morphism rounded-2xl border border-border/30 hover:border-primary/30 transition-all duration-300 h-full relative overflow-hidden">
                  {/* Gradient accent */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.accent} via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors border border-primary/20">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
