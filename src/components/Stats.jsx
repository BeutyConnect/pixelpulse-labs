import { motion } from "framer-motion";
import { TrendingUp, Users, Code, Zap } from "lucide-react";
import { useState, useEffect } from "react";

const Stats = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const stats = [
    {
      icon: Code,
      value: "500+",
      label: "Projects Delivered",
      gradient: "from-blue-500 to-cyan-400"
    },
    {
      icon: Users,
      value: "200+",
      label: "Happy Clients",
      gradient: "from-purple-500 to-pink-400"
    },
    {
      icon: TrendingUp,
      value: "99.9%",
      label: "Uptime Achieved",
      gradient: "from-green-500 to-emerald-400"
    },
    {
      icon: Zap,
      value: "24/7",
      label: "Support Available",
      gradient: "from-orange-500 to-yellow-400"
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "20px 20px",
          }}
        />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Built for <span className="hero-text">Scale</span>
          </motion.h2>
          <motion.p
            className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-2 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Trusted by startups and enterprises worldwide to deliver mission-critical software solutions
          </motion.p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="glass-card p-6 sm:p-8 rounded-2xl text-center relative overflow-hidden group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={isMobile ? {} : {
                y: -5,
                boxShadow: "0 20px 40px rgba(99, 102, 241, 0.1)"
              }}
            >
              {/* Gradient Background Effect */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0`}
                whileHover={{ opacity: 0.05 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Icon */}
              <motion.div 
                className={`w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 bg-gradient-to-br ${stat.gradient} rounded-xl flex items-center justify-center`}
                whileHover={isMobile ? {} : { 
                  rotate: 5,
                  scale: 1.1
                }}
                transition={{ duration: 0.3 }}
              >
                <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </motion.div>

              {/* Value */}
              <motion.div
                className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3 text-foreground"
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1 + 0.3,
                  type: "spring",
                  stiffness: 200 
                }}
              >
                {stat.value}
              </motion.div>

              {/* Label */}
              <motion.p
                className="text-sm sm:text-base text-muted-foreground font-medium"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
              >
                {stat.label}
              </motion.p>

              {/* Shine Effect */}
              {!isMobile && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 opacity-0"
                  whileHover={{ 
                    x: ["0%", "100%"],
                    opacity: [0, 1, 0] 
                  }}
                  transition={{ duration: 0.8 }}
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Logos */}
        <motion.div
          className="mt-16 sm:mt-20 md:mt-24 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-sm sm:text-base text-muted-foreground mb-8">
            Powered by modern technologies
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 opacity-60">
            {["React", "Node.js", "Python", "TypeScript", "AWS", "Docker"].map((tech, index) => (
              <motion.div
                key={tech}
                className="text-sm sm:text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
                whileHover={{ scale: 1.1 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;