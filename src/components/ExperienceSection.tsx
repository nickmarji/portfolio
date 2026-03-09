import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "Alkeus Pharmaceuticals, Inc.",
    location: "Cambridge, MA",
    roles: [
      {
        title: "IT Security Associate",
        type: "Part-Time",
        dates: "Jan 2025 – Present",
        responsibilities: [
          "Executed 25+ remediation actions after identifying tenant misconfigurations through CloudCapsule assessments, raising Microsoft 365 compliance score from 54% to 87% in alignment with CIS Controls and NIST CSF",
          "Supported the rollout of Enterprise ChatGPT by integrating Entra ID for SSO, implementing RBAC and Conditional Access policies, and contributing to governance controls to mitigate AI-related data leakage risks",
          "Leveraged Microsoft Defender for Cloud Apps to monitor user activity and data movement across SaaS platforms, implementing real-time session controls to mitigate data exfiltration and unauthorized sharing risks",
          "Deployed and managed 100+ corporate devices through Microsoft Intune with automated enrollment, implementing device compliance policies, app protection rules, and conditional access controls to secure BYOD and corporate endpoints",
        ],
      },
      {
        title: "IT Operations Intern",
        type: "Full-Time Co-op",
        dates: "May 2024 – Jan 2025",
        responsibilities: [
          "Enhanced office connectivity and reliability by wiring network infrastructure and configuring access points, driving a 70%+ boost in Wi-Fi speed and user experience across the organization",
          "Maintained and documented IT asset inventory, software licenses, and configuration baselines to ensure compliance and improve audit readiness across 100+ devices",
        ],
      },
    ],
  },
  {
    company: "Google",
    location: "Remote",
    roles: [
       {
         title: "CSSI Scholar",
         type: "Internship",
         dates: "Jul 2022 – Aug 2022",
         responsibilities: [
           "Selected for Google's Computer Science Summer Institute, a competitive 4-week program for students pursuing careers in software engineering",
           "Completed a project-based curriculum in HTML, CSS, and JavaScript, building interactive web applications while collaborating with peers and receiving mentorship from Google engineers",
           "Participated in workshops on product design, resume development, and technical interview preparation led by Google professionals",
         ],
       },
    ],
  },
  {
    company: "STEM Alliance",
    location: "Yonkers, NY",
    roles: [
       {
         title: "Teaching and Technical Intern",
         type: "Part-Time",
         dates: "Oct 2021 – Jun 2022",
         responsibilities: [
           "Assisted with the deployment of home Wi-Fi and technology resources for low-income residents in Westchester County, helping expand internet access in underserved communities",
           "Provided hands-on troubleshooting for connectivity and device issues, helping community members resolve technical problems and improve digital literacy",
           "Supported instructors in technology education programs by managing class rosters, tracking attendance, and assisting with classroom activities",
         ],
       },
    ],
  },
  {
    company: "All Star Code",
    location: "New York, NY",
    roles: [
      {
        title: "Tech Entrepreneurship Incubator Program",
        type: "Internship",
        dates: "Feb 2021 – Jun 2021",
        responsibilities: [
          "Collaborated in a team environment to develop Inventure, a web platform designed to connect underrepresented startup founders with investors to support business growth",
          "Contributed to the design, development, and presentation of the platform while applying web development and product design concepts",
        ],
      },
      {
        title: "Student Recruitment Liaison",
        type: "Internship",
        dates: "Feb 2021 – Apr 2021",
        responsibilities: [
          "Supported recruitment for the All Star Code Class of 2021 by reviewing and evaluating program applications using internal program systems",
          "Hosted and facilitated virtual information sessions for prospective students, providing program overviews and assisting applicants through the enrollment process",
          "Collaborated with program staff to promote participation and increase awareness of technology education opportunities for underrepresented students",
        ],
      },
      {
        title: "Student Software Engineer",
        type: "Internship",
        dates: "Jul 2020 – Aug 2020",
        responsibilities: [
          "Selected for a competitive computer science summer intensive focused on empowering underrepresented students through technology and entrepreneurship",
          "Developed foundational skills in HTML, CSS, JavaScript, and API integration while building interactive web applications",
          "Collaborated with peers to design and develop EatRight, a web-based game promoting healthy lifestyle choices through interactive user experiences",
        ],
      },
    ],
  },
  {
    company: "Northeastern University Housing & Residential Life",
    location: "Boston, MA",
    roles: [
      {
        title: "Senior Resident Assistant",
        type: "Part-Time",
        dates: "Aug 2023 – Present",
        responsibilities: [
          "Managed a residential community of 50+ students (250+ over tenure) by conducting weekly one-on-one meetings, facilitating conflict resolution, ensuring policy compliance, and responding to emergencies while maintaining student confidentiality",
        ],
      },
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 scroll-mt-20 bg-cyber-surface/50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-12">
            <Briefcase className="w-5 h-5 text-primary" />
            <h2 className="text-2xl font-mono font-bold text-foreground">work_experience</h2>
            <div className="flex-1 cyber-line" />
          </div>

          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 border-l-2 border-border hover:border-primary/50 transition-colors"
              >
                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-background border-2 border-primary" />

                <div className="bg-card rounded-lg p-6 border border-border hover:border-primary/20 transition-colors">
                  {/* Company header */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <h3 className="text-lg font-semibold text-primary font-mono">{exp.company}</h3>
                    <span className="text-xs text-muted-foreground font-mono">{exp.location}</span>
                  </div>

                  {/* Roles within company */}
                  <div className="space-y-6">
                    {exp.roles.map((role, ri) => (
                      <div key={ri} className={ri > 0 ? "pt-4 border-t border-border/50" : ""}>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                          <div>
                            <h4 className="font-medium text-foreground">{role.title}</h4>
                            <span className="text-xs text-muted-foreground">{role.type}</span>
                          </div>
                          <span className="text-xs font-mono text-muted-foreground mt-1 sm:mt-0">
                            {role.dates}
                          </span>
                        </div>
                        <ul className="space-y-2">
                          {role.responsibilities.map((item, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex gap-2">
                              <span className="text-primary mt-1 shrink-0">▹</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
