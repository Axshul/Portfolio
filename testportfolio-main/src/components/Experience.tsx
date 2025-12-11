import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, ArrowUpRight } from "lucide-react";

const experiences = [
  {
    title: "Available for Opportunities",
    company: "Freelance & Full-time",
    period: "Currently Open",
    description:
      "Actively seeking opportunities in full-stack development, AI automation, and technical roles. Open to both freelance projects and full-time positions.",
    highlights: [
      "Full Stack Development",
      "AI Automation Solutions",
      "Technical Consultation",
    ],
    current: true,
  },
  {
    title: "Independent Developer",
    company: "Personal Projects",
    period: "2023 - Present",
    description:
      "Building innovative projects including Neural Notes, Shanks Share, and JiN Crypt. Focusing on practical solutions that solve real-world problems.",
    highlights: [
      "Project development",
      "Problem-solving",
      "Technology exploration",
    ],
    current: false,
  },
];

const education = {
  degree: "Bachelor of Technology",
  field: "Computer Science & Engineering",
  institution: "Sagar Institute of Research and Technology",
  period: "2024 - 2028",
  status: "Currently in 3rd Semester",
};

export const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="max-w-6xl mx-auto relative z-10" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-primary text-sm tracking-wider uppercase">
            Journey
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl mt-4 gradient-text-subtle">
            Experience & Education
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-display font-semibold text-2xl text-foreground mb-8 flex items-center gap-3"
            >
              <Briefcase className="w-6 h-6 text-primary" />
              Work Experience
            </motion.h3>

            <div className="space-y-6">
              {experiences.map((exp, i) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                  className="relative pl-6 border-l border-border hover:border-primary/50 transition-colors group"
                >
                  {/* Timeline dot */}
                  <div
                    className={`absolute left-0 top-0 w-3 h-3 rounded-full -translate-x-[7px] ${
                      exp.current
                        ? "bg-primary animate-pulse"
                        : "bg-muted-foreground"
                    }`}
                  />

                  <div className="p-6 glass-hover rounded-xl">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          {exp.title}
                        </h4>
                        <p className="text-primary font-medium">{exp.company}</p>
                      </div>
                      {exp.current && (
                        <span className="px-2 py-1 text-xs font-mono bg-primary/20 text-primary rounded-full">
                          Current
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                      <Calendar size={14} />
                      <span>{exp.period}</span>
                    </div>

                    <p className="text-muted-foreground text-sm mb-3 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="text-xs text-muted-foreground flex items-center gap-1"
                        >
                          <ArrowUpRight size={12} className="text-primary" />
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-display font-semibold text-2xl text-foreground mb-8 flex items-center gap-3"
            >
              <span className="text-2xl">🎓</span>
              Education
            </motion.h3>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="p-8 glass-hover rounded-2xl relative overflow-hidden"
            >
              {/* Decorative gradient */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full" />

              <div className="relative z-10">
                <h4 className="font-display font-semibold text-xl text-foreground mb-1">
                  {education.degree}
                </h4>
                <p className="text-primary font-medium mb-2">{education.field}</p>
                <p className="text-muted-foreground mb-4">
                  {education.institution}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar size={14} />
                    <span>{education.period}</span>
                  </div>
                  <span className="px-3 py-1 text-xs font-mono bg-secondary rounded-full text-muted-foreground">
                    {education.status}
                  </span>
                </div>

                {/* Progress bar */}
                <div className="mt-6">
                  <div className="flex justify-between text-xs text-muted-foreground mb-2">
                    <span>Progress</span>
                    <span>37.5% Complete</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: "37.5%" } : { width: 0 }}
                      transition={{ duration: 1, delay: 0.6 }}
                      className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Additional certifications or achievements could go here */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-6 p-6 glass rounded-xl"
            >
              <h4 className="font-semibold text-foreground mb-3">Focus Areas</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "AI/ML",
                  "System Design",
                  "Cloud Computing",
                  "Full Stack Development",
                ].map((area) => (
                  <span
                    key={area}
                    className="px-3 py-1 text-sm bg-secondary/50 rounded-full text-muted-foreground"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
