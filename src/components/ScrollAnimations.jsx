import { motion, useScroll, useTransform, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";

const ScrollAnimations = () => {
  const { scrollY } = useScroll();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Dramatic parallax effects with larger ranges
  const y1 = useTransform(scrollY, [0, 2000], [0, -800]);
  const y2 = useTransform(scrollY, [0, 2000], [0, 400]);
  const y3 = useTransform(scrollY, [0, 1500], [0, -600]);
  const rotate = useTransform(scrollY, [0, 2000], [0, 720]);
  const scale = useTransform(scrollY, [0, 1000], [1, 1.5]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  
  // Mouse tracking for magnetic effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const updateScrollProgress = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <>
      {/* Animated Progress Ring */}
      <motion.div 
        className="fixed top-6 right-6 z-50"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 1, type: "spring", bounce: 0.6, delay: 0.5 }}
      >
        <svg width="60" height="60" className="transform -rotate-90">
          <circle
            cx="30"
            cy="30"
            r="25"
            fill="none"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="2"
          />
          <motion.circle
            cx="30"
            cy="30"
            r="25"
            fill="none"
            stroke="url(#progressGradient)"
            strokeWidth="3"
            strokeLinecap="round"
            style={{
              pathLength: scrollProgress / 100,
            }}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: scrollProgress / 100 }}
          />
          <defs>
            <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#60a5fa" />
              <stop offset="50%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xs font-bold text-white">
            {Math.round(scrollProgress)}%
          </span>
        </div>
      </motion.div>

      {/* Epic Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        
        {/* Massive Floating Orbs with Glow */}
        <motion.div
          className="absolute -top-1/4 -left-1/4 w-[800px] h-[800px] bg-gradient-radial from-blue-500/10 via-purple-500/5 to-transparent rounded-full"
          style={{ 
            y: y1,
            x: mousePosition.x * 50,
            scale: scale 
          }}
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            rotate: { duration: 50, repeat: Infinity, ease: "linear" }
          }}
        />
        
        <motion.div
          className="absolute -bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-gradient-radial from-cyan-500/10 via-blue-500/5 to-transparent rounded-full"
          style={{ 
            y: y2,
            x: mousePosition.x * -30,
            scale: scale
          }}
          animate={{
            rotate: [360, 0],
          }}
          transition={{
            rotate: { duration: 40, repeat: Infinity, ease: "linear" }
          }}
        />

        {/* Geometric Grid that Responds to Scroll */}
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 50%, rgba(96, 165, 250, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 40% 80%, rgba(6, 182, 212, 0.1) 0%, transparent 50%),
              linear-gradient(90deg, transparent 0%, rgba(96, 165, 250, 0.05) 50%, transparent 100%),
              linear-gradient(0deg, transparent 0%, rgba(139, 92, 246, 0.05) 50%, transparent 100%)
            `,
            y: y3,
            opacity: opacity
          }}
        />
        
        {/* Dynamic Shapes */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-40 h-40"
          style={{ 
            rotate: rotate,
            x: mousePosition.x * 100,
            y: mousePosition.y * 100
          }}
        >
          <div className="w-full h-full border-2 border-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-lg" 
               style={{ 
                 background: 'linear-gradient(45deg, transparent 30%, rgba(96, 165, 250, 0.1) 50%, transparent 70%)',
                 boxShadow: '0 0 50px rgba(96, 165, 250, 0.2)'
               }} 
          />
        </motion.div>

        <motion.div
          className="absolute bottom-1/3 left-1/6 w-32 h-32"
          style={{ 
            rotate: rotate,
            scale: scale,
            x: mousePosition.y * -80,
            y: mousePosition.x * 80
          }}
        >
          <div className="w-full h-full rounded-full border-2 border-cyan-500/40"
               style={{
                 background: 'radial-gradient(circle, rgba(6, 182, 212, 0.1) 0%, transparent 70%)',
                 boxShadow: '0 0 40px rgba(6, 182, 212, 0.3)'
               }}
          />
        </motion.div>

        {/* Particle Field */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              left: `${10 + (i * 4) % 80}%`,
              top: `${10 + (i * 7) % 80}%`,
              y: useTransform(scrollY, [0, 2000], [0, (i % 4 + 1) * -200]),
              x: mousePosition.x * (i % 3 + 1) * 20,
            }}
            animate={{
              scale: [0.5, 1.5, 0.5],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + (i % 3),
              repeat: Infinity,
              delay: i * 0.1,
            }}
          />
        ))}
      </div>

      {/* Futuristic Navigation Dots */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 space-y-4">
        {['home', 'about', 'services', 'portfolio', 'team', 'contact'].map((section, index) => (
          <motion.button
            key={section}
            className="group relative flex items-center"
            onClick={() => {
              document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
            }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            {/* Dot */}
            <motion.div 
              className="w-4 h-4 rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-sm"
              animate={{
                borderColor: scrollProgress > (index * 16.67) && scrollProgress < ((index + 1) * 16.67) 
                  ? '#6366f1' 
                  : 'rgba(255,255,255,0.3)',
                backgroundColor: scrollProgress > (index * 16.67) && scrollProgress < ((index + 1) * 16.67) 
                  ? '#6366f1' 
                  : 'rgba(255,255,255,0.1)',
                boxShadow: scrollProgress > (index * 16.67) && scrollProgress < ((index + 1) * 16.67) 
                  ? '0 0 20px #6366f1' 
                  : '0 0 0px transparent',
              }}
            />
            
            {/* Label */}
            <motion.div
              className="absolute right-full mr-4 px-3 py-1 bg-black/80 backdrop-blur-sm rounded-lg text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap"
              initial={{ x: 20 }}
              whileHover={{ x: 0 }}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </motion.div>
          </motion.button>
        ))}
      </div>
    </>
  );
};

export default ScrollAnimations;