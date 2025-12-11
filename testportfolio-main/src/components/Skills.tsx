import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Frontend",
    icon: "< />",
    skills: [
      { name: "React.js", level: 85 },
      { name: "JavaScript", level: 85 },
      { name: "HTML/CSS", level: 95 },
      { name: "Tailwind CSS", level: 80 },
    ],
  },
  {
    title: "Backend",
    icon: "[ ]",
    skills: [
      { name: "Java", level: 85 },
      { name: "Python", level: 80 },
      { name: "Node.js", level: 80 },
      { name: "PostgreSQL", level: 85 },
    ],
  },
  {
    title: "AI & Database",
    icon: "⚡",
    skills: [
      { name: "AI Automation", level: 80 },
      { name: "Supabase", level: 80 },
      { name: "MongoDB", level: 75 },
      { name: "Workflow Optimization", level: 85 },
    ],
  },
  {
    title: "Tools & Others",
    icon: "{ }",
    skills: [
      { name: "Git/GitHub", level: 90 },
      { name: "System Design", level: 75 },
      { name: "Problem Solving", level: 90 },
      { name: "Project Management", level: 80 },
    ],
  },
];

const SkillBar = ({ name, level, delay, index }: { name: string; level: number; delay: number; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div 
      ref={ref} 
      className="space-y-2"
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: delay + index * 0.1, duration: 0.5 }}
    >
      <div className="flex justify-between text-sm">
        <span className="text-foreground font-medium">{name}</span>
        <motion.span 
          className="text-primary font-mono"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: delay + 0.5 }}
        >
          {level}%
        </motion.span>
      </div>
      <div className="h-2 bg-secondary/50 rounded-full overflow-hidden relative">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay, ease: [0.22, 1, 0.36, 1] as const }}
          className="h-full rounded-full relative overflow-hidden"
          style={{
            background: `linear-gradient(90deg, hsl(var(--primary)), hsl(var(--accent)))`,
          }}
        >
          {/* Shimmer effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 2, repeat: Infinity, delay: delay + 1 }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 dot-pattern opacity-30" />
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 left-0 w-80 h-80 bg-accent/5 rounded-full blur-[100px]" />
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
            Technical Expertise
          </motion.span>
          <h2 className="font-display font-bold text-4xl md:text-6xl mt-4">
            <span className="gradient-text-hero">Skills</span>
            <span className="text-foreground/90"> & Technologies</span>
          </h2>
        </motion.div>

        {/* Skills grid with 3D cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40, rotateX: -10 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.15 }}
              className="group"
            >
              <div className="p-6 md:p-8 glass-morphism rounded-2xl relative overflow-hidden card-3d border border-border/30 hover:border-primary/30 transition-colors">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full" />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center font-mono text-primary text-lg border border-primary/20 group-hover:bg-primary/20 transition-colors">
                      {category.icon}
                    </div>
                    <h3 className="font-display font-semibold text-xl text-foreground">
                      {category.title}
                    </h3>
                  </div>
                  <div className="space-y-5">
                    {category.skills.map((skill, skillIndex) => (
                      <SkillBar
                        key={skill.name}
                        name={skill.name}
                        level={skill.level}
                        delay={0.3 + categoryIndex * 0.15}
                        index={skillIndex}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16"
        >
          <p className="text-center text-muted-foreground mb-6 font-mono text-sm">Also familiar with</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Git/GitHub",
              "REST APIs",
              "GraphQL",
              "Docker",
              "CI/CD",
              "Agile",
              "System Design",
              "Microservices",
              "Linux",
              "Firebase",
            ].map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.9 + i * 0.05 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-4 py-2 text-sm glass-morphism rounded-full text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all cursor-default border border-border/30"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
