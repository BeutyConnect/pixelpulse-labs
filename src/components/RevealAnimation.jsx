import { motion } from "framer-motion";

const RevealAnimation = ({ 
  children, 
  direction = "up", 
  delay = 0, 
  duration = 0.8,
  distance = 100,
  className = "",
  staggerChildren = false,
  ...props 
}) => {
  const directions = {
    up: { y: distance, x: 0 },
    down: { y: -distance, x: 0 },
    left: { x: distance, y: 0 },
    right: { x: -distance, y: 0 },
    scale: { scale: 0, x: 0, y: 0 },
    rotation: { rotate: 180, scale: 0.8, x: 0, y: 0 }
  };

  const containerVariants = staggerChildren ? {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: delay,
        staggerChildren: 0.1,
      }
    }
  } : {};

  const itemVariants = {
    hidden: {
      opacity: 0,
      ...directions[direction]
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      rotate: 0,
      transition: {
        duration,
        delay: staggerChildren ? 0 : delay,
        type: "spring",
        stiffness: 100,
        damping: 12,
      }
    }
  };

  const Component = staggerChildren ? motion.div : motion.div;

  return (
    <Component
      className={className}
      variants={staggerChildren ? containerVariants : itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      {...props}
    >
      {children}
    </Component>
  );
};

export default RevealAnimation;