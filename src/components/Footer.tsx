import { Shield, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-8 bg-card/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-muted-foreground text-sm font-mono">
            <Shield className="w-4 h-4 text-primary" />
            <span>© {year} Nicholas Marji. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-4">
            <a href="https://linkedin.com/in/nick-marji" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="mailto:nicholasmarji@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
