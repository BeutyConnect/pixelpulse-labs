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
            50% { transform: translateY(-20px) rotate(180deg); }
          }
          @keyframes pulse-glow {
            0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.3); }
            50% { box-shadow: 0 0 40px rgba(59, 130, 246, 0.6); }
          }
          .float-animation { animation: float 6s ease-in-out infinite; }
          .glow-pulse { animation: pulse-glow 3s ease-in-out infinite; }
        `}
      </style>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Parallax Background */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBg})`, y: yBg }}
        />
        <div className="absolute inset-0 gradient-hero opacity-90" />

        {/* Animated Gradient Overlay */}
        <div className="absolute inset-0 opacity-20" style={gradientStyle} />

        {/* Modern Geometric Background */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Grid Pattern */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
              backgroundSize: "50px 50px",
              transform: `translate(${mousePosition.x * 10}px, ${
                mousePosition.y * 10
              }px)`,
            }}
          />

          {/* Floating Geometric Shapes */}
          {[...Array(8)].map((_, i) => {
            const size = 16 + (i % 3) * 8; // 16px, 24px, 32px
            const colors = [
              "rgba(59, 130, 246, 0.2)", // blue
              "rgba(168, 85, 247, 0.2)", // purple
              "rgba(236, 72, 153, 0.2)", // pink
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
                  left: `${10 + i * 12}%`,
                  top: `${20 + i * 8}%`,
                  animationDelay: `${i * 0.5}s`,
                }}
                animate={{
                  x: mousePosition.x * (20 + i * 5),
                  y: mousePosition.y * (20 + i * 5),
                }}
                transition={{ type: "spring", stiffness: 100, damping: 10 }}
              />
            );
          })}

          {/* Glassmorphism Cards */}
          <motion.div
            className="absolute top-1/4 right-1/4 w-64 h-32 backdrop-blur-sm bg-white/10 rounded-2xl border border-white/20 glow-pulse"
            animate={{
              x: mousePosition.x * 30,
              y: mousePosition.y * 30,
              rotateY: mousePosition.x * 10,
              rotateX: mousePosition.y * 10,
            }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          />

          <motion.div
            className="absolute bottom-1/3 left-1/5 w-48 h-48 backdrop-blur-sm bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full border border-white/10"
            animate={{
              x: mousePosition.x * -25,
              y: mousePosition.y * -25,
              scale: 1 + mousePosition.x * 0.1,
            }}
            transition={{ type: "spring", stiffness: 150, damping: 15 }}
          />

          {/* Particle System */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, -200],
                opacity: [0, 1, 0],
                scale: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            />
          ))}

          {/* Interactive Light Rays */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `radial-gradient(600px circle at ${
                50 + mousePosition.x * 20
              }% ${50 + mousePosition.y * 20}%, 
              rgba(59, 130, 246, 0.1) 0%, 
              transparent 70%)`,
            }}
          />
        </div>

        {/* Content */}
        <motion.div
          className="relative container mx-auto px-6 text-center"
          style={{ zIndex: 10, y: yContent }}
        >
          <div className="max-w-5xl mx-auto">
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 backdrop-blur-lg bg-white/10 border border-white/20 px-6 py-3 rounded-full mb-8 shadow-2xl"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: 0.2,
                type: "spring",
                bounce: 0.4,
              }}
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(255,255,255,0.15)",
                borderColor: "rgba(255,255,255,0.3)",
              }}
              style={{
                transform: `translateX(${mousePosition.x * 5}px) translateY(${
                  mousePosition.y * 5
                }px)`,
              }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-4 h-4 text-blue-400" />
              </motion.div>
              <span className="text-sm font-medium text-white">
                Digital Innovation Experts
              </span>
            </motion.div>

            {/* Main Headlines */}
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white drop-shadow-2xl"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{
                textShadow: "0 0 30px rgba(59, 130, 246, 0.5)",
              }}
            >
              <motion.span
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                We Build Software &{" "}
              </motion.span>
              <motion.span
                className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: 0.8,
                  type: "spring",
                  bounce: 0.3,
                }}
              >
                Digital Experiences
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                {" "}
                That Grow Businesses
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed drop-shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              From digital marketing to web & mobile app development, we help
              brands succeed with cutting-edge technology and creative
              solutions.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              <motion.div
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.button
                  className="relative overflow-hidden bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold px-8 py-4 rounded-2xl text-lg shadow-2xl border border-white/20 backdrop-blur-sm"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(59, 130, 246, 0.9), rgba(147, 51, 234, 0.9))",
                  }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                    animate={{ x: ["-200%", "200%"] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 3,
                    }}
                  />
                  <span className="relative z-10 flex items-center gap-2">
                    Get in Touch
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.div>
                  </span>
                </motion.button>
              </motion.div>

              <motion.div
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  backgroundColor: "rgba(255,255,255,0.15)",
                  borderColor: "rgba(255,255,255,0.4)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.button
                  className="relative backdrop-blur-lg bg-white/10 border border-white/20 text-white font-semibold px-8 py-4 rounded-2xl text-lg shadow-2xl"
                  whileHover={{
                    boxShadow: "0 20px 40px rgba(255, 255, 255, 0.1)",
                  }}
                >
                  View Our Work
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.8 }}
        >
          <motion.div
            className="w-1 h-16 bg-gradient-to-b from-white/80 via-blue-400 to-transparent rounded-full shadow-lg"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </section>
    </>
  );
};

export default Hero;
