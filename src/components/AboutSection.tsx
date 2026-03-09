import { motion } from "framer-motion";
import { Terminal } from "lucide-react";

const skills = [
  "Python", "Bash", "PowerShell", "SQL", "KQL", "C++",
  "CrowdStrike Falcon", "Splunk", "Wireshark", "BurpSuite",
  "M365 Admin", "Azure", "Intune", "Entra ID",
  "Linux", "Windows", "NIST", "ISO 27001"
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-12">
            <Terminal className="w-5 h-5 text-primary" />
            <h2 className="text-2xl font-mono font-bold text-foreground">about_me</h2>
            <div className="flex-1 cyber-line" />
          </div>

          <div className="grid md:grid-cols-5 gap-12">
            <div className="md:col-span-3 space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                I'm a cybersecurity and business administration student at Northeastern University with 
                nearly two years of hands-on IT security experience at Alkeus Pharmaceuticals. My work 
                spans enterprise identity management, cloud compliance automation, and security operations 
                all while balancing a full-time course load.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My journey into tech started early with building websites at All Star Code, bridging 
                the digital divide at STEM Alliance, and learning from Google engineers during their CSSI 
                program. These experiences shaped my passion for using technology to solve real problems 
                and protect people.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I thrive at the intersection of security and business, understanding that effective 
                cybersecurity isn't just technical, it's about enabling organizations to operate safely 
                and confidently. I'm seeking opportunities where I can continue making measurable security 
                impact.
              </p>
            </div>

            <div className="md:col-span-2">
              <h3 className="text-sm font-mono text-primary mb-4">&gt; core_skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs font-mono bg-secondary text-secondary-foreground rounded-sm border border-border hover:border-primary/40 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
