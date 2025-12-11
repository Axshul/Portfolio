import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Twitter, Download, Sparkles } from "lucide-react";
import { Scene3D } from "./Scene3D";

const socialLinks = [
  { icon: Github, href: "https://github.com/Axshul", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/anshul-namdev-b149b5329/", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com/Axshul", label: "Twitter" },
  { icon: Mail, href: "mailto:anshul2006n@gmail.com", label: "Email" },
];

const letterVariants = {
  hidden: { opacity: 0, y: 50, rotateX: -90 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

const AnimatedText = ({ text, className }: { text: string; className?: string }) => {
  return (
    <span className={className}>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          custom={i}
          variants={letterVariants}
          initial="hidden"
          animate="visible"
          className="inline-block"
          style={{ transformStyle: "preserve-3d" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
};

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* 3D Background Scene */}
      <Scene3D />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background z-[1]" />
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent z-[1]" />
      
      {/* Animated grid lines */}
      <div className="absolute inset-0 z-[1] overflow-hidden opacity-20">
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(90deg, hsl(var(--primary) / 0.1) 1px, transparent 1px),
              linear-gradient(0deg, hsl(var(--primary) / 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
          animate={{
            backgroundPosition: ["0px 0px", "80px 80px"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 text-center">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full glass-morphism mb-10 border border-primary/20"
        >
          <motion.span 
            className="w-2.5 h-2.5 bg-primary rounded-full"
            animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <span className="text-sm font-medium text-foreground/80 tracking-wide">
            Open to opportunities
          </span>
          <Sparkles className="w-4 h-4 text-primary" />
        </motion.div>

        {/* Main heading with 3D text effect */}
        <div className="perspective-1000 mb-8">
          <motion.h1
            className="font-display font-black text-6xl md:text-8xl lg:text-9xl tracking-tighter leading-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative inline-block">
              <AnimatedText text="ANSHUL" className="gradient-text-hero block" />
              <motion.div
                className="absolute -inset-2 bg-primary/20 blur-3xl rounded-full -z-10"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-foreground/90 text-5xl md:text-7xl lg:text-8xl mt-2"
            >
              <span className="font-light tracking-wide">NAMDEV</span>
            </motion.div>
          </motion.h1>
        </div>

        {/* Subtitle with animated underline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-10"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
            <motion.span 
              className="font-mono text-lg md:text-xl text-primary font-semibold relative"
              whileHover={{ scale: 1.05 }}
            >
              Technical Architect
              <motion.span
                className="absolute bottom-0 left-0 h-0.5 bg-primary"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 1.2, duration: 0.8 }}
              />
            </motion.span>
            <span className="hidden sm:block w-1.5 h-1.5 bg-primary/50 rounded-full" />
            <span className="font-mono text-lg md:text-xl text-muted-foreground">
              AI Automation Expert
            </span>
          </div>
        </motion.div>

        {/* Description with highlight */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          Crafting <span className="text-foreground font-medium">innovative digital experiences</span> with 
          React, Java, Python & AI-powered automation solutions for{" "}
          <span className="text-primary">enhanced productivity</span>.
        </motion.p>

        {/* CTA Buttons with 3D hover */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <motion.a
            href="#projects"
            className="group relative px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl overflow-hidden"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10">View My Work</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%]"
              animate={{ backgroundPosition: ["0% 0%", "100% 0%", "0% 0%"] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-white/10" />
          </motion.a>
          <motion.a
            href="#contact"
            className="group px-8 py-4 glass-morphism font-semibold rounded-xl border border-border/50 hover:border-primary/50 transition-colors"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Get In Touch
          </motion.a>
          <motion.a
            href="/resume.pdf"
            download="Anshul_Namdev_Resume.pdf"
            className="group px-8 py-4 glass-morphism font-semibold rounded-xl border border-border/50 hover:border-primary/50 transition-colors flex items-center justify-center gap-2"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <Download size={18} />
            Resume
          </motion.a>
        </motion.div>

        {/* Social Links with stagger */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="flex justify-center gap-3"
        >
          {socialLinks.map((social, i) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 + i * 0.1 }}
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="p-4 glass-morphism rounded-xl text-muted-foreground hover:text-primary hover:border-primary/50 transition-all border border-border/50"
              aria-label={social.label}
            >
              <social.icon size={22} />
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
          <ArrowDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
};
