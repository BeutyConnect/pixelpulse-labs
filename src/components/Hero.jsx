import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { motion, useTransform, useScroll } from "framer-motion";
import { useEffect, useState } from "react";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();

  // Parallax transforms
  const yBg = useTransform(scrollY, [0, 1000], [0, -200]);
  const yContent = useTransform(scrollY, [0, 1000], [0, -100]);

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const gradientStyle = {
    background: "linear-gradient(-45deg, #667eea, #2e3a99, #764ba2, #3a1f63)",
    backgroundSize: "400% 400%",
    animation: "gradientShift 8s ease infinite",
  };

  // Detect if user is on mobile device
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <>
      <style>
        {`
          @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-10px) rotate(90deg); }
          }
          @keyframes float-mobile {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-5px); }
          }
          @keyframes pulse-glow {
            0%, 100% { box-shadow: 0 0 10px rgba(59, 130, 246, 0.2); }
            50% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.4); }
          }
          .float-animation { animation: ${isMobile ? 'float-mobile' : 'float'} 6s ease-in-out infinite; }
          .glow-pulse { animation: pulse-glow 3s ease-in-out infinite; }
          
          @media (max-width: 768px) {
            .hero-bg-parallax { transform: none !important; }
          }
        `}
      </style>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Parallax Background */}
        <motion.div
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat hero-bg-parallax`}
          style={{ 
            backgroundImage: `url(${heroBg})`, 
            y: isMobile ? 0 : yBg 
          }}
        />
        <div className="absolute inset-0 gradient-hero opacity-90" />

        {/* Animated Gradient Overlay */}
        <div className="absolute inset-0 opacity-20" style={gradientStyle} />

        {/* Modern Geometric Background - Simplified for Mobile */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Grid Pattern */}
          <div
            className={`absolute inset-0 ${isMobile ? 'opacity-5' : 'opacity-10'}`}
            style={{
              backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
              backgroundSize: isMobile ? "30px 30px" : "50px 50px",
              transform: isMobile ? "none" : `translate(${mousePosition.x * 5}px, ${mousePosition.y * 5}px)`,
            }}
          />

          {/* Floating Geometric Shapes - Reduced for Mobile */}
          {[...Array(isMobile ? 4 : 8)].map((_, i) => {
            const size = isMobile ? 12 + (i % 2) * 6 : 16 + (i % 3) * 8;
            const colors = [
              "rgba(59, 130, 246, 0.15)", // blue - reduced opacity
              "rgba(168, 85, 247, 0.15)", // purple
              "rgba(236, 72, 153, 0.15)", // pink
            ];

            return (
              <motion.div
                key={i}
                className="absolute float-animation"
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                  backgroundColor: colors[i % 3],
                  borderRadius: i % 2 === 0 ? "50%" : "8px",
                  left: `${15 + i * (isMobile ? 20 : 12)}%`,
                  top: `${25 + i * (isMobile ? 12 : 8)}%`,
                  animationDelay: `${i * 0.5}s`,
                }}
                animate={isMobile ? {} : {
                  x: mousePosition.x * (15 + i * 3),
                  y: mousePosition.y * (15 + i * 3),
                }}
                transition={{ type: "spring", stiffness: 100, damping: 15 }}
              />
            );
          })}

          {/* Glassmorphism Cards - Hidden on Mobile */}
          {!isMobile && (
            <>
              <motion.div
                className="absolute top-1/4 right-1/4 w-48 h-24 backdrop-blur-sm bg-white/10 rounded-2xl border border-white/20 glow-pulse hidden md:block"
                animate={{
                  x: mousePosition.x * 20,
                  y: mousePosition.y * 20,
                  rotateY: mousePosition.x * 5,
                  rotateX: mousePosition.y * 5,
                }}
                transition={{ type: "spring", stiffness: 200, damping: 25 }}
              />

              <motion.div
                className="absolute bottom-1/3 left-1/5 w-32 h-32 backdrop-blur-sm bg-gradient-to-br from-purple-500/15 to-pink-500/15 rounded-full border border-white/10 hidden md:block"
                animate={{
                  x: mousePosition.x * -15,
                  y: mousePosition.y * -15,
                  scale: 1 + mousePosition.x * 0.05,
                }}
                transition={{ type: "spring", stiffness: 150, damping: 20 }}
              />
            </>
          )}

          {/* Particle System - Reduced for Mobile */}
          {[...Array(isMobile ? 8 : 15)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute w-0.5 h-0.5 md:w-1 md:h-1 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -50, -100],
                opacity: [0, 0.8, 0],
                scale: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: isMobile ? 2 + Math.random() : 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            />
          ))}

          {/* Interactive Light Rays - Simplified for Mobile */}
          {!isMobile && (
            <motion.div
              className="absolute inset-0 pointer-events-none hidden md:block"
              style={{
                background: `radial-gradient(400px circle at ${
                  50 + mousePosition.x * 15
                }% ${50 + mousePosition.y * 15}%, 
                rgba(59, 130, 246, 0.08) 0%, 
                transparent 70%)`,
              }}
            />
          )}
        </div>

        {/* Content */}
        <motion.div
          className="relative container mx-auto px-4 sm:px-6 text-center"
          style={{ zIndex: 10, y: isMobile ? 0 : yContent }}
        >
          <div className="max-w-5xl mx-auto">
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 backdrop-blur-lg bg-gradient-to-r from-indigo-500/20 to-purple-600/20 border border-indigo-300/30 px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-6 sm:mb-8 shadow-2xl text-xs sm:text-sm"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: 0.2,
                type: "spring",
                bounce: 0.4,
              }}
              whileHover={isMobile ? {} : {
                scale: 1.05,
                backgroundColor: "rgba(99, 102, 241, 0.25)",
                borderColor: "rgba(99, 102, 241, 0.4)",
              }}
              style={{
                transform: isMobile ? "none" : `translateX(${mousePosition.x * 3}px) translateY(${mousePosition.y * 3}px)`,
              }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-indigo-300" />
              </motion.div>
              <span className="font-medium text-white">
                🚀 Full-Stack Development Experts
              </span>
            </motion.div>

            {/* Main Headlines */}
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight text-white drop-shadow-2xl px-2 sm:px-0"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{
                textShadow: "0 0 30px rgba(59, 130, 246, 0.5)",
              }}
            >
              <motion.span
                className="block sm:inline"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Build Software.{" "}
              </motion.span>
              <motion.span
                className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent block sm:inline"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: 0.8,
                  type: "spring",
                  bounce: 0.3,
                }}
              >
                Scale Systems.
              </motion.span>
              <motion.span
                className="block sm:inline"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                {" "}
                Deliver Results.
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed drop-shadow-lg px-2 sm:px-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              We architect, develop, and deploy high-performance web applications, mobile apps, and enterprise software solutions that scale with your business.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4 sm:px-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              <motion.div
                whileHover={isMobile ? {} : {
                  scale: 1.05,
                  y: -5,
                  boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)",
                }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto"
              >
                <motion.button
                  className="relative overflow-hidden bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-2xl text-base sm:text-lg shadow-2xl border border-white/20 backdrop-blur-sm w-full sm:w-auto"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(59, 130, 246, 0.9), rgba(147, 51, 234, 0.9))",
                  }}
                >
                  {!isMobile && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                      animate={{ x: ["-200%", "200%"] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 3,
                      }}
                    />
                  )}
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Start Your Project
                    <motion.div
                      animate={isMobile ? {} : { x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                    </motion.div>
                  </span>
                </motion.button>
              </motion.div>

              <motion.div
                whileHover={isMobile ? {} : {
                  scale: 1.05,
                  y: -5,
                  backgroundColor: "rgba(255,255,255,0.15)",
                  borderColor: "rgba(255,255,255,0.4)",
                }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto"
              >
                <motion.button
                  className="relative backdrop-blur-lg bg-white/10 border border-white/20 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-2xl text-base sm:text-lg shadow-2xl w-full sm:w-auto"
                  whileHover={isMobile ? {} : {
                    boxShadow: "0 20px 40px rgba(255, 255, 255, 0.1)",
                  }}
                >
                  View Case Studies
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.8 }}
        >
          <motion.div
            className="w-0.5 sm:w-1 h-10 sm:h-16 bg-gradient-to-b from-white/80 via-blue-400 to-transparent rounded-full shadow-lg"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </section>
    </>
  );
};

export default Hero;
