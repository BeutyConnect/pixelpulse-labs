import { Users, Target, Lightbulb, Shield } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  const values = [
    {
      icon: Users,
      title: "4-Member Team",
      description: "CEO, CTO, Developers, and Marketing Specialist working in perfect harmony"
    },
    {
      icon: Lightbulb,
      title: "Creative Innovation",
      description: "We think outside the box to deliver unique solutions that set you apart"
    },
    {
      icon: Target,
      title: "Results-Driven",
      description: "Every project is measured by its impact on your business growth"
    },
    {
      icon: Shield,
      title: "Reliable Partnership",
      description: "Consistent communication and delivery you can count on"
    }
  ];

  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="hero-text">PixelPulse Labs</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're a passionate 4-member team dedicated to transforming your digital presence. 
            Our unique blend of technical expertise and creative vision delivers exceptional results.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div 
              key={index}
              className="glass-card p-6 rounded-2xl group cursor-pointer relative overflow-hidden"
              whileHover={{ 
                scale: 1.05,
                y: -10,
                boxShadow: "0 25px 50px rgba(6, 182, 212, 0.2)"
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
                className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-sky-500/10 opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              
              <div className="relative z-10">
                <div className="mb-4">
                  <motion.div 
                    className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-sky-500 rounded-xl flex items-center justify-center"
                    whileHover={{ 
                      rotate: 360,
                      boxShadow: "0 0 30px rgba(6, 182, 212, 0.6)"
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <value.icon className="w-6 h-6 text-white" />
                  </motion.div>
                </div>
                <motion.h3 
                  className="text-xl font-semibold mb-3"
                  whileHover={{ color: "#06b6d4" }}
                >
                  {value.title}
                </motion.h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;