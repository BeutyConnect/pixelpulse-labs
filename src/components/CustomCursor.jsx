import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [trail, setTrail] = useState([]);
  const [currentSection, setCurrentSection] = useState("default");

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  // Unified blue-purple color theme
  const sectionThemes = {
    default: {
      primary: "#60a5fa",
      secondary: "#3b82f6",
      tertiary: "#1e40af",
      particles: "#e0e7ff",
    },
    home: {
      primary: "#a855f7",
      secondary: "#9333ea",
      tertiary: "#7c3aed",
      particles: "#f3e8ff",
    },
    about: {
      primary: "#06b6d4",
      secondary: "#0891b2",
      tertiary: "#0e7490",
      particles: "#cffafe",
    },
    services: {
      primary: "#8b5cf6",
      secondary: "#7c3aed",
      tertiary: "#6d28d9",
      particles: "#e9d5ff",
    },
    portfolio: {
      primary: "#6366f1",
      secondary: "#4f46e5",
      tertiary: "#4338ca",
      particles: "#e0e7ff",
    },
    team: {
      primary: "#a855f7",
      secondary: "#9333ea",
      tertiary: "#7c3aed",
      particles: "#f3e8ff",
    },
    contact: {
      primary: "#06b6d4",
      secondary: "#0891b2",
      tertiary: "#0e7490",
      particles: "#cffafe",
    },
  };

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);

      // Detect which section the cursor is in
      try {
        const elementUnderCursor = document.elementFromPoint(
          e.clientX,
          e.clientY
        );
        const section = elementUnderCursor?.closest("section");

        let newSection = "default";
        if (section && section.id && sectionThemes[section.id]) {
          newSection = section.id;
        }

        if (newSection !== currentSection) {
          setCurrentSection(newSection);
        }
      } catch (error) {
        // Fallback to default if DOM operations fail
        if (currentSection !== "default") {
          setCurrentSection("default");
        }
      }

      // Add new point to trail
      setTrail((prev) => [
        ...prev.slice(-15), // Keep last 15 points
        {
          x: e.clientX,
          y: e.clientY,
          id: Date.now() + Math.random(),
        },
      ]);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [cursorX, cursorY, currentSection]);

  if (!isVisible) return null;

  const theme = sectionThemes[currentSection] || sectionThemes.default;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999]">
      {/* Main Comet Head */}
      <motion.div
        className="absolute w-4 h-4 rounded-full"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          background: `radial-gradient(circle, ${theme.primary} 0%, ${theme.secondary} 50%, ${theme.tertiary} 100%)`,
          boxShadow: `0 0 20px ${theme.primary}, 0 0 40px ${theme.secondary}, 0 0 60px ${theme.tertiary}`,
        }}
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Comet Trail */}
      {trail.map((point, index) => {
        const delay = index * 0.03;
        const opacity = ((index + 1) / trail.length) * 0.7;
        const size = Math.max(2, ((index + 1) / trail.length) * 16);

        // Convert hex to rgba with safety checks
        const hexToRgba = (hex, alpha) => {
          if (!hex || typeof hex !== "string" || !hex.startsWith("#")) {
            return `rgba(96, 165, 250, ${alpha})`; // Fallback to blue
          }
          try {
            const r = parseInt(hex.slice(1, 3), 16) || 96;
            const g = parseInt(hex.slice(3, 5), 16) || 165;
            const b = parseInt(hex.slice(5, 7), 16) || 250;
            return `rgba(${r}, ${g}, ${b}, ${alpha})`;
          } catch (error) {
            return `rgba(96, 165, 250, ${alpha})`; // Fallback to blue
          }
        };

        return (
          <motion.div
            key={point.id}
            className="absolute rounded-full pointer-events-none"
            style={{
              left: point.x - size / 2,
              top: point.y - size / 2,
              width: size,
              height: size,
              background: `radial-gradient(circle, 
                ${hexToRgba(theme.primary, opacity)} 0%, 
                ${hexToRgba(theme.secondary, opacity * 0.8)} 50%, 
                ${hexToRgba(theme.tertiary, opacity * 0.6)} 100%)`,
              boxShadow: `0 0 ${size}px ${hexToRgba(theme.primary, opacity)}`,
            }}
            initial={{
              scale: 0,
              opacity: 0,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, opacity, 0],
            }}
            transition={{
              duration: 0.6,
              delay: delay,
              ease: "easeOut",
            }}
          />
        );
      })}

      {/* Sparkle Particles */}
      {trail.slice(-8).map((point, index) => (
        <motion.div
          key={`sparkle-${point.id}`}
          className="absolute w-2 h-2 rounded-full"
          style={{
            left: point.x + (Math.random() - 0.5) * 40,
            top: point.y + (Math.random() - 0.5) * 40,
            backgroundColor: theme.particles || "#ffffff",
            boxShadow: `0 0 8px ${theme.particles || "#ffffff"}`,
          }}
          initial={{
            scale: 0,
            opacity: 0,
            rotate: 0,
          }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 0.8, 0],
            rotate: 360,
            x: (Math.random() - 0.5) * 50,
            y: (Math.random() - 0.5) * 50,
          }}
          transition={{
            duration: 1,
            delay: index * 0.1,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
};

export default CustomCursor;
