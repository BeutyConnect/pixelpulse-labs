import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 bg-gradient-to-t from-muted/30 to-background border-t border-border/50">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              <span className="hero-text">PixelPulse</span> Labs
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              Transforming businesses through innovative software development and strategic digital marketing solutions.
            </p>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-smooth"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-smooth"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-smooth"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-smooth"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link to="/services" className="hover:text-primary transition-smooth">Web Development</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-smooth">Mobile Apps</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-smooth">SEO Services</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-smooth">Google Ads</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-smooth">Facebook Ads</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link to="/about" className="hover:text-primary transition-smooth">About Us</Link></li>
              <li><Link to="/portfolio" className="hover:text-primary transition-smooth">Portfolio</Link></li>
              <li><Link to="/team" className="hover:text-primary transition-smooth">Team</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-smooth">Contact</Link></li>
              <li><Link to="/blog" className="hover:text-primary transition-smooth">Blog</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} PixelPulse Labs. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link to="/privacy-policy" className="hover:text-primary transition-smooth">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-primary transition-smooth">Terms of Service</Link>
            <Link to="/cookie-policy" className="hover:text-primary transition-smooth">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;