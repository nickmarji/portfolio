import { motion } from "framer-motion";
import { Cpu, Award, BookOpen, Shield } from "lucide-react";

interface SkillItem {
  name: string;
  context?: string;
}

const skillCategories = [
  {
    category: "Security Tools",
    items: [
      { name: "CrowdStrike Falcon", context: "Endpoint detection & investigation" },
      { name: "Microsoft Defender", context: "Cloud app monitoring & session controls" },
      { name: "Splunk", context: "Log analysis & detection queries" },
      { name: "Wireshark", context: "Packet capture & protocol analysis" },
      { name: "BurpSuite", context: "Web application security testing" },
      { name: "Nmap", context: "Network scanning & enumeration" },
      { name: "Snort", context: "Network intrusion detection" },
      { name: "OpenVAS", context: "Vulnerability scanning" },
      { name: "KnowBe4", context: "Security awareness training" },
    ] as SkillItem[],
  },
  {
    category: "Scripting & Programming",
    items: [
      { name: "Python", context: "Scripting & automation" },
      { name: "PowerShell", context: "Admin automation & endpoint management" },
      { name: "Bash", context: "Linux administration & scripting" },
      { name: "KQL", context: "Threat hunting in Sentinel/Defender" },
      { name: "SQL", context: "Database querying & analysis" },
      { name: "JavaScript", context: "Web development" },
      { name: "C++", context: "Systems programming" },
      { name: "HTML/CSS", context: "Web development" },
    ] as SkillItem[],
  },
  {
    category: "Cloud & Identity Security",
    items: [
      { name: "Microsoft Azure", context: "Compute, storage & networking" },
      { name: "Microsoft Entra ID", context: "SSO, RBAC & Conditional Access" },
      { name: "Azure DevOps", context: "CI/CD & project management" },
      { name: "Azure Blob Storage", context: "Cloud data storage" },
    ] as SkillItem[],
  },
  {
    category: "Endpoint Management",
    items: [
      { name: "Microsoft Intune", context: "MDM & device compliance policies" },
      { name: "Google Workspace Admin", context: "SaaS user & policy management" },
      { name: "Azure Automation", context: "Runbooks for identity & device tasks" },
      { name: "Microsoft Graph API", context: "Automated user & device management" },
    ] as SkillItem[],
  },
  {
    category: "Networking",
    items: [
      { name: "TCP/IP", context: "Protocol analysis" },
      { name: "DNS Troubleshooting", context: "Resolution & record management" },
      { name: "VPN Configuration", context: "Secure remote access" },
      { name: "Firewall Configuration", context: "Rule management & policies" },
      { name: "IDS/IPS", context: "Intrusion detection & prevention" },
      { name: "Ettercap", context: "Network traffic analysis" },
    ] as SkillItem[],
  },
  {
    category: "Operating Systems",
    items: [
      { name: "Linux", context: "Kali, Ubuntu, Debian, Arch" },
      { name: "Windows", context: "7–11, Windows Server" },
      { name: "macOS / iOS", context: "Device support & administration" },
    ] as SkillItem[],
  },
];

const certifications = {
  certified: ["CompTIA Security+"],
  inProgress: ["SC-200", "Splunk Core Certified User"],
};

const frameworks = ["NIST CSF", "ISO/IEC 27001", "SOC 2", "CIS Controls", "GDPR"];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 scroll-mt-20 bg-cyber-surface/50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <Cpu className="w-5 h-5 text-primary" />
            <h2 className="text-2xl font-mono font-bold text-foreground">skills</h2>
            <div className="flex-1 cyber-line" />
          </div>
          <p className="text-sm text-muted-foreground font-mono mb-12">
            Tools and technologies used in security operations, cloud identity management, automation, and network analysis.
          </p>

          {/* Skills Grid — 6 cards, 3x2 */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {skillCategories.map((cat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="bg-card border border-border rounded-lg p-6 hover:border-primary/30 transition-colors"
              >
                <h3 className="font-mono text-sm text-primary mb-4 font-medium">
                  &gt; {cat.category.toLowerCase().replace(/ & /g, "_").replace(/ \/ /g, "_").replace(/ /g, "_")}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <div key={item.name} className="group relative">
                      <span className="px-3 py-1.5 text-xs bg-secondary text-secondary-foreground rounded-sm font-mono cursor-default block">
                        {item.name}
                      </span>
                      {item.context && (
                        <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs bg-foreground text-background rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                          {item.context}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certifications — full width */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="bg-card border border-primary/20 rounded-lg p-6 hover:border-primary/40 transition-colors shadow-[0_0_20px_-8px_hsl(var(--primary)/0.15)]"
          >
            <h3 className="font-mono text-sm text-primary mb-4 font-medium flex items-center gap-2">
              <Award className="w-4 h-4" />
              &gt; certifications
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <span className="text-xs font-mono text-muted-foreground mb-2 block">Certified</span>
                <div className="flex flex-wrap gap-2">
                  {certifications.certified.map((cert) => (
                    <span
                      key={cert}
                      className="px-3 py-1.5 text-xs bg-primary/15 text-primary border border-primary/30 rounded-sm font-mono"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <span className="text-xs font-mono text-muted-foreground mb-2 block">In Progress</span>
                <div className="flex flex-wrap gap-2">
                  {certifications.inProgress.map((cert) => (
                    <span
                      key={cert}
                      className="px-3 py-1.5 text-xs bg-secondary text-muted-foreground border border-border rounded-sm font-mono"
                    >
                      <BookOpen className="w-3 h-3 inline mr-1 -mt-0.5" />
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <span className="text-xs font-mono text-muted-foreground mb-2 block flex items-center gap-1">
                  <Shield className="w-3 h-3" /> Framework Knowledge
                </span>
                <div className="flex flex-wrap gap-2">
                  {frameworks.map((fw) => (
                    <span
                      key={fw}
                      className="px-3 py-1.5 text-xs bg-secondary text-muted-foreground border border-border rounded-sm font-mono"
                    >
                      {fw}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
