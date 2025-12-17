import { Code2, Rocket, Users2, Zap } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  const values = [
    {
      icon: Code2,
      title: "Expert Development",
      description: "Full-stack developers specializing in modern web and mobile technologies"
    },
    {
      icon: Rocket,
      title: "Cutting-Edge Solutions",
      description: "We leverage the latest technologies to build scalable, high-performance software"
    },
    {
      icon: Users2,
      title: "Collaborative Approach",
      description: "We work closely with clients throughout the development lifecycle"
    },
    {
      icon: Zap,
      title: "Rapid Delivery",
      description: "Agile development methodology ensuring faster time-to-market"
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            About <span className="hero-text">PixelPulse Labs</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-2 sm:px-0">
            We're a dedicated software development company specializing in creating innovative digital solutions. 
            From web applications to mobile apps, we turn your ideas into powerful, scalable software products.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {values.map((value, index) => (
            <motion.div 
              key={index}
              className="glass-card p-4 sm:p-6 rounded-2xl group cursor-pointer relative overflow-hidden"
              whileHover={{ 
                scale: 1.02,
                y: -5,
                boxShadow: "0 15px 30px rgba(6, 182, 212, 0.15)"
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 300,
                damping: 20
              }}
            >
              {/* Hover overlay */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-600/10 opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              
              <div className="relative z-10">
                <div className="mb-4">
                  <motion.div 
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center"
                    whileHover={{ 
                      rotate: 180,
                      boxShadow: "0 0 25px rgba(99, 102, 241, 0.5)"
                    }}
                    transition={{ duration: 0.4 }}
                  >
                    <value.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </motion.div>
                </div>
                <motion.h3 
                  className="text-lg sm:text-xl font-semibold mb-3"
                  whileHover={{ color: "#6366f1" }}
                >
                  {value.title}
                </motion.h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;