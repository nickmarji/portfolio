import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, Linkedin, Loader2 } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://formspree.io/f/mbdzddnn", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("sent");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 3000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <section id="contact" className="py-24 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-12">
            <Mail className="w-5 h-5 text-primary" />
            <h2 className="text-2xl font-mono font-bold text-foreground">contact</h2>
            <div className="flex-1 cyber-line" />
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                Interested in working together or have a security question? I'm always open to 
                discussing new opportunities, projects, or connecting with fellow security professionals.
              </p>

              <div className="space-y-4">
                <a
                  href="mailto:nicholasmarji@gmail.com"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="w-4 h-4 text-primary" />
                  <span className="font-mono text-sm">nicholasmarji@gmail.com</span>
                </a>
                <a
                  href="https://linkedin.com/in/nick-marji"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-primary" />
                  <span className="font-mono text-sm">linkedin.com/in/nick-marji</span>
                </a>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-xs font-mono text-muted-foreground mb-2">name</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-card border border-border rounded-md text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-colors font-mono"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-mono text-muted-foreground mb-2">email</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-card border border-border rounded-md text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-colors font-mono"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-xs font-mono text-muted-foreground mb-2">message</label>
                <textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-card border border-border rounded-md text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-colors resize-none font-mono"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                className="flex items-center gap-2 px-6 py-3 cyber-gradient text-primary-foreground font-mono font-medium rounded-md hover:opacity-90 transition-opacity text-sm"
              >
                {status === "sending" ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                {status === "sending" ? "Sending..." : status === "sent" ? "Message Sent!" : status === "error" ? "Failed — Try Again" : "Send Message"}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
