import { motion } from "framer-motion";
import { FolderGit2, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Phishing Awareness Campaign",
    description: "Developed and deployed internal phishing simulations using KnowBe4 with custom HTML and JavaScript email templates modeled on real-world attack vectors including credential harvesting and malicious attachments, increasing employee phishing detection accuracy by 63% across three company-wide campaigns.",
    tech: ["KnowBe4", "HTML", "JavaScript", "CSS"],
    type: "Work Project",
  },
  {
    title: "Google Workspace Security & Data Migration",
    description: "Implemented zero-trust controls by configuring Entra ID Conditional Access and Google Workspace device management policies to restrict access to corporate-managed devices for 75+ users, then led migration of 500GB+ legacy data while establishing DLP policies and retention rules.",
    tech: ["Entra ID", "Google Workspace Admin", "Patronum"],
    type: "Work Project",
  },
  {
    title: "ADP Identity Provisioning System",
    description: "Developed an automated identity provisioning pipeline integrating ADP HR data via SFTP with Microsoft 365 to synchronize employee attributes, reporting structures, and access permissions across 75+ accounts, achieving 97% accuracy and eliminating manual onboarding errors.",
    tech: ["PowerShell", "Azure Blob Storage", "SFTP", "Microsoft Graph API"],
    type: "Work Project",
  },
  {
    title: "Enterprise Identity Compliance Automation",
    description: "Automated weekly compliance reporting by extracting Entra ID user data including MFA status, sign-in activity, manager relationships, and privileged access across 100+ accounts, integrating Microsoft Graph API with Managed Identity authentication to reduce manual review workload by 85%.",
    tech: ["PowerShell", "Azure Automation", "Microsoft Graph API"],
    type: "Work Project",
  },
  {
    title: "Enterprise Network Security & Adversary Simulation Lab",
    description: "Performed network reconnaissance using Nmap (TCP/UDP/SYN scans), OS fingerprinting, and service enumeration across 6+ networked systems. Simulated Man-in-the-Middle attacks and conducted vulnerability scanning using OpenVAS, exploiting Heartbleed and Shellshock to demonstrate real-world attack scenarios.",
    tech: ["Nmap", "Snort", "OpenVAS", "Wireshark", "Ettercap", "AIDE", "Fail2Ban"],
    type: "School Project",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <FolderGit2 className="w-5 h-5 text-primary" />
            <h2 className="text-2xl font-mono font-bold text-foreground">projects</h2>
            <div className="flex-1 cyber-line" />
          </div>

          <p className="text-sm text-muted-foreground mb-10 font-mono">
            &gt; Note: Most projects are proprietary and cannot be shared publicly.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group bg-card border border-border rounded-lg p-6 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all flex flex-col"
              >
                <div className="flex items-start justify-between mb-4">
                  <FolderGit2 className="w-8 h-8 text-primary opacity-70" />
                  <span className="text-[10px] font-mono px-2 py-1 rounded-sm bg-secondary text-muted-foreground">
                    {project.type}
                  </span>
                </div>

                <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 flex-1 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs font-mono text-primary/80">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
