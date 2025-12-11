import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { User, Quote } from "lucide-react";

export const PhotoSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding relative overflow-hidden" ref={ref}>
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-[80px]" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-primary text-sm tracking-wider uppercase">
            Meet The Developer
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl mt-4 gradient-text-subtle">
            The Face Behind The Code
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Photo container with animated border */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative group"
          >
            {/* Animated rings */}
            <motion.div
              className="absolute -inset-4 rounded-full border border-primary/30"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute -inset-8 rounded-full border border-primary/20"
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute -inset-12 rounded-full border border-primary/10 border-dashed"
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            />

            {/* Floating decorative elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full flex items-center justify-center"
              animate={{ y: [-5, 5, -5], scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <span className="text-primary-foreground text-xs font-bold">AI</span>
            </motion.div>
            <motion.div
              className="absolute -bottom-4 -left-4 w-10 h-10 bg-accent rounded-lg flex items-center justify-center"
              animate={{ y: [5, -5, 5], rotate: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <span className="text-accent-foreground text-xs font-bold">&lt;/&gt;</span>
            </motion.div>

            {/* Main photo container */}
            <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden glass-morphism p-1">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-accent to-primary animate-spin-slow opacity-50" style={{ animationDuration: "8s" }} />
              <div className="relative w-full h-full rounded-full bg-card overflow-hidden">
                <img 
                  src="/myPhoto.jpg" 
                  alt="Anshul Namdev - Full Stack Developer & AI Automation Expert" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
                {/* Fallback placeholder */}
                <div className="w-full h-full bg-gradient-to-br from-secondary via-muted to-secondary flex items-center justify-center" style={{ display: 'none' }}>
                  <User className="w-24 h-24 text-muted-foreground/50" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="inline-block mb-6"
            >
              <Quote className="w-10 h-10 text-primary/50 rotate-180" />
            </motion.div>
            
            <p className="text-xl md:text-2xl text-foreground/90 font-light leading-relaxed mb-6">
              I believe in the power of{" "}
              <span className="text-primary font-medium">technology</span> to transform ideas 
              into impactful realities. Every line of code is an opportunity to{" "}
              <span className="text-primary font-medium">innovate</span>.
            </p>
            
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              A passionate developer from <span className="text-foreground">Bhopal, India</span>, 
              dedicated to creating solutions that bridge the gap between 
              cutting-edge technology and real-world needs.
            </p>

            {/* Quick facts */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              {[
                { label: "Based in", value: "Bhopal, India" },
                { label: "Focus", value: "AI & Full Stack" },
                { label: "Status", value: "Available" },
              ].map((fact, i) => (
                <motion.div
                  key={fact.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  className="px-4 py-2 glass rounded-xl"
                >
                  <span className="text-xs text-muted-foreground block">{fact.label}</span>
                  <span className="text-sm font-medium text-foreground">{fact.value}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
