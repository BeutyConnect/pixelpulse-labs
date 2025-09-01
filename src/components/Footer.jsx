import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 sm:py-12 px-4 sm:px-6 bg-gradient-to-t from-muted/30 to-background border-t border-border/50">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Logo & Description */}
          <div className="sm:col-span-2 md:col-span-2 text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
              <span className="hero-text">PixelPulse</span> Labs
            </h3>
            <p className="text-muted-foreground mb-4 sm:mb-6 max-w-md mx-auto sm:mx-0">
              Transforming businesses through innovative software development and strategic digital marketing solutions.
            </p>
            <div className="flex gap-3 sm:gap-4 justify-center sm:justify-start">
              <a 
                href="#" 
                className="w-9 h-9 sm:w-10 sm:h-10 bg-secondary rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-smooth"
              >
                <Github className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a 
                href="#" 
                className="w-9 h-9 sm:w-10 sm:h-10 bg-secondary rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-smooth"
              >
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a 
                href="#" 
                className="w-9 h-9 sm:w-10 sm:h-10 bg-secondary rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-smooth"
              >
                <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a 
                href="#" 
                className="w-9 h-9 sm:w-10 sm:h-10 bg-secondary rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-smooth"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Services</h4>
            <ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-base text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-smooth">Web Development</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Mobile Apps</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">SEO Services</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Google Ads</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Facebook Ads</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Quick Links</h4>
            <ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-base text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-smooth">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Portfolio</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Team</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Contact</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Blog</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-6 sm:pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4 text-center md:text-left">
          <p className="text-muted-foreground text-xs sm:text-sm">
            © {currentYear} PixelPulse Labs. All rights reserved.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 text-xs sm:text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-smooth">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-smooth">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-smooth">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;