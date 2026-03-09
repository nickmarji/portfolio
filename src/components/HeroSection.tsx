import { motion } from "framer-motion";
import { ArrowDown, Linkedin, Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 scan-line pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-mono text-primary text-sm mb-6 tracking-wider">
            &gt; initializing security_portfolio...
          </p>

          <h1 className="text-5xl md:text-7xl font-bold font-mono tracking-tight mb-4">
            <span className="text-foreground">Nicholas</span>{" "}
            <span className="text-primary text-glow">Marji</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground font-mono mb-8">
            Cybersecurity &amp; Business Administration{" "}
            <span className="text-primary">|</span> IT Security{" "}
            <span className="text-primary">|</span> Cloud Security
          </p>

          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Security-focused professional with hands-on experience in enterprise identity management, 
            SIEM operations, and cloud compliance. Currently pursuing a B.S. in Cybersecurity &amp; Business 
            Administration at Northeastern University, with real-world impact at Alkeus Pharmaceuticals.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href="#projects"
              className="px-8 py-3 cyber-gradient text-primary-foreground font-mono font-medium rounded-md hover:opacity-90 transition-opacity text-sm"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border border-primary/40 text-primary font-mono font-medium rounded-md hover:bg-primary/10 transition-colors text-sm"
            >
              Contact Me
            </a>
          </div>

          <div className="flex justify-center gap-4 mb-12">
            <a href="https://linkedin.com/in/nick-marji" target="_blank" rel="noopener noreferrer" className="p-2 text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:nicholasmarji@gmail.com" className="p-2 text-muted-foreground hover:text-primary transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
