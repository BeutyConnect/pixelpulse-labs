import { motion } from "framer-motion";
import { useEffect } from "react";

const Preloader = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2000); // Show for 2 seconds

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center">
        {/* Simple Logo */}
        <motion.div
          className="text-4xl font-bold mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            background: "linear-gradient(45deg, #8b5cf6, #ec4899)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent"
          }}
        >
          PixelPulse Labs
        </motion.div>

        {/* Simple Spinner */}
        <motion.div
          className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full mx-auto"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
      </div>
    </motion.div>
  );
};

export default Preloader;