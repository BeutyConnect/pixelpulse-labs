import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Home, User, Briefcase, Mail, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      
      // Show navbar after hero section (assuming hero is ~100vh)
      const heroHeight = window.innerHeight * 0.8; // 80% of viewport height
      setIsVisible(currentScrollY > heroHeight);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home', icon: Home },
    { name: 'About', href: '#about', icon: User },
    { name: 'Services', href: '#services', icon: Star },
    { name: 'Portfolio', href: '#portfolio', icon: Briefcase },
    { name: 'Contact', href: '#contact', icon: Mail },
  ];

  const handleNavClick = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          className="fixed top-0 left-0 right-0 z-50"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <motion.div
            className="backdrop-blur-xl bg-black/20 border-b border-white/10 shadow-2xl"
            style={{
              background: `linear-gradient(135deg, 
                rgba(0,0,0,${Math.min(0.4 + scrollY * 0.001, 0.8)}) 0%, 
                rgba(30,30,60,${Math.min(0.3 + scrollY * 0.0008, 0.7)}) 100%)`
            }}
          >
            <div className="container mx-auto px-6">
              <div className="flex items-center justify-between h-20">
                
                {/* Logo */}
                <motion.div
                  className="flex items-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >
                  <motion.div
                    className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  >
                    <span className="text-white font-bold text-xl">P</span>
                  </motion.div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
                    PixelPulse
                  </span>
                </motion.div>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center space-x-1">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.name}
                      onClick={() => handleNavClick(item.href)}
                      className="relative px-4 py-2 text-white/80 hover:text-white transition-colors duration-200 group"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <span className="relative z-10 flex items-center gap-2 font-medium">
                        <item.icon className="w-4 h-4" />
                        {item.name}
                      </span>
                      <motion.div
                        className="absolute inset-0 rounded-lg bg-white/10 backdrop-blur-sm"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileHover={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.2 }}
                      />
                    </motion.button>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="hidden lg:block">
                  <motion.div
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      onClick={() => handleNavClick('#contact')}
                      className="relative overflow-hidden bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold px-6 py-2 rounded-xl shadow-lg border border-white/20"
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                        animate={{ x: ['-200%', '200%'] }}
                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                      />
                      <span className="relative z-10">Get Started</span>
                    </Button>
                  </motion.div>
                </div>

                {/* Mobile Menu Button */}
                <motion.button
                  className="lg:hidden p-2 text-white"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <AnimatePresence mode="wait">
                    {isMobileMenuOpen ? (
                      <motion.div
                        key="close"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <X className="w-6 h-6" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="menu"
                        initial={{ rotate: 90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Menu className="w-6 h-6" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
              </div>

              {/* Mobile Menu */}
              <AnimatePresence>
                {isMobileMenuOpen && (
                  <motion.div
                    className="lg:hidden absolute top-full left-0 right-0 backdrop-blur-xl bg-black/40 border-b border-white/10"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 py-4 space-y-2">
                      {navItems.map((item, index) => (
                        <motion.button
                          key={item.name}
                          onClick={() => handleNavClick(item.href)}
                          className="flex items-center gap-3 w-full px-4 py-3 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          whileHover={{ x: 5 }}
                        >
                          <item.icon className="w-5 h-5" />
                          <span className="font-medium">{item.name}</span>
                        </motion.button>
                      ))}
                      
                      <motion.div
                        className="pt-4 border-t border-white/10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: navItems.length * 0.1 + 0.2 }}
                      >
                        <Button
                          onClick={() => handleNavClick('#contact')}
                          className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 rounded-xl"
                        >
                          Get Started
                        </Button>
                      </motion.div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default Navigation;