import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";
import RevealAnimation from "./RevealAnimation";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const Portfolio = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  
  const projects = [
    {
      id: 1,
      title: "ECommerce Platform",
      description:
        "Full-stack e-commerce solution with advanced analytics and payment integration",
      image: project1,
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "Web Development",
    },
    {
      id: 2,
      title: "Mobile Shopping App",
      description:
        "Cross-platform mobile application for seamless shopping experience",
      image: project2,
      tags: ["React Native", "Firebase", "Redux", "PayPal"],
      category: "Mobile Development",
    },
    {
      id: 3,
      title: "Marketing Dashboard",
      description:
        "Real-time analytics dashboard for tracking marketing campaign performance",
      image: project3,
      tags: ["Vue.js", "Python", "PostgreSQL", "Chart.js"],
      category: "Digital Marketing",
    },
  ];

  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <RevealAnimation direction="up" delay={0.2} className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Our <motion.span 
              className="hero-text"
              initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.6, type: "spring", bounce: 0.4 }}
            >
              Portfolio
            </motion.span>
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Showcasing our expertise through successful projects that have
            transformed businesses
          </motion.p>
        </RevealAnimation>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="relative group cursor-pointer perspective-1000"
              onMouseEnter={() => setHoveredCard(project.id)}
              onMouseLeave={() => setHoveredCard(null)}
              initial={{ opacity: 0, y: 100, rotateX: 45 }}
              whileInView={{ 
                opacity: 1, 
                y: 0, 
                rotateX: 0,
                transition: {
                  duration: 0.8,
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100
                }
              }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{
                y: -20,
                rotateY: hoveredCard === project.id ? 5 : 0,
                transition: { duration: 0.3, type: "spring", stiffness: 300 }
              }}
              style={{
                transformStyle: "preserve-3d"
              }}
            >
              {/* Glow Effect */}
              <motion.div
                className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-cyan-500/20 -z-10"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: hoveredCard === project.id ? 1 : 0,
                  scale: hoveredCard === project.id ? 1.05 : 0.8,
                }}
                transition={{ duration: 0.3 }}
                style={{
                  filter: "blur(20px)",
                }}
              />
              
              <motion.div
                className="glass-card rounded-2xl overflow-hidden relative"
                whileHover={{
                  boxShadow: "0 40px 80px rgba(99, 102, 241, 0.3), 0 0 50px rgba(139, 92, 246, 0.2)",
                  transition: { duration: 0.3 }
                }}
                style={{
                  transform: hoveredCard === project.id 
                    ? "translateZ(50px)" 
                    : "translateZ(0px)",
                  transition: "transform 0.3s ease-out"
                }}
              >
                {/* Magnetic Border Effect */}
                <motion.div
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    background: "linear-gradient(45deg, transparent 30%, rgba(99, 102, 241, 0.3) 50%, transparent 70%)",
                    opacity: hoveredCard === project.id ? 1 : 0,
                  }}
                  animate={{
                    backgroundPosition: hoveredCard === project.id 
                      ? ["0% 0%", "100% 100%", "0% 0%"]
                      : "0% 0%"
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              
                  <div className="relative overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                      whileHover={{ scale: 1.15 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    />
                    
                    {/* Overlay with shimmer effect */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    {/* Floating category badge */}
                    <motion.div
                      className="absolute top-4 right-4"
                      initial={{ opacity: 0, scale: 0, rotate: -180 }}
                      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      <span className="glass-card px-3 py-1 text-xs font-medium rounded-full backdrop-blur-lg border border-white/20">
                        {project.category}
                      </span>
                    </motion.div>
                    
                    {/* Shimmer effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                      initial={{ x: "-200%" }}
                      animate={{
                        x: hoveredCard === project.id ? "200%" : "-200%"
                      }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                    />
                  </div>

                  <div className="p-6 relative">
                    <motion.h3 
                      className="text-xl font-semibold mb-3"
                      whileHover={{ 
                        color: "#6366f1",
                        x: 5,
                        transition: { duration: 0.2 }
                      }}
                    >
                      {project.title}
                    </motion.h3>
                    
                    <motion.p 
                      className="text-muted-foreground mb-4 leading-relaxed"
                      initial={{ opacity: 0.7 }}
                      whileHover={{ opacity: 1 }}
                    >
                      {project.description}
                    </motion.p>

                    <motion.div 
                      className="flex flex-wrap gap-2 mb-6"
                      initial="hidden"
                      whileInView="visible"
                      variants={{
                        hidden: { opacity: 0 },
                        visible: {
                          opacity: 1,
                          transition: {
                            staggerChildren: 0.1,
                            delayChildren: 0.3
                          }
                        }
                      }}
                    >
                      {project.tags.map((tag, tagIndex) => (
                        <motion.span
                          key={tagIndex}
                          className="px-2 py-1 bg-indigo-500/10 text-indigo-400 text-xs rounded-md border border-indigo-500/20"
                          variants={{
                            hidden: { opacity: 0, scale: 0, rotate: -180 },
                            visible: { 
                              opacity: 1, 
                              scale: 1, 
                              rotate: 0,
                              transition: { 
                                type: "spring", 
                                stiffness: 500, 
                                damping: 15 
                              }
                            }
                          }}
                          whileHover={{ 
                            scale: 1.1, 
                            backgroundColor: "rgba(99, 102, 241, 0.2)",
                            transition: { duration: 0.2 }
                          }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </motion.div>

                    <motion.div 
                      className="flex gap-3"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    >
                      <motion.div
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1"
                      >
                        <Button variant="outline" size="sm" className="w-full border-indigo-500/30 hover:border-indigo-500 hover:bg-indigo-500/10 transition-all duration-300">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </Button>
                      </motion.div>
                      
                      <motion.div
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1"
                      >
                        <Button variant="ghost" size="sm" className="w-full hover:bg-purple-500/10 hover:text-purple-400 transition-all duration-300">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </Button>
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
