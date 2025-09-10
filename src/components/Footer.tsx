import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/Bobbiehex",
      icon: Github
    },
    {
      name: "LinkedIn", 
      href: "https://www.linkedin.com/in/bobbiehex",
      icon: Linkedin
    },
    {
      name: "Email",
      href: "mailto:anthonyayomide2003@gmail.com",
      icon: Mail
    }
  ];

  return (
    <footer className="bg-card/50 backdrop-blur-sm border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo and tagline */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">A</span>
              </div>
              <span className="font-bold text-xl gradient-text">Ayomide</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Building the future, one line of code at a time
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-muted/50 hover:bg-primary/20 rounded-lg flex items-center justify-center transition-all duration-300 group"
                aria-label={link.name}
              >
                <link.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground flex items-center justify-center md:justify-end">
              © 2024 Made with React and vite
              by Ayomide
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;