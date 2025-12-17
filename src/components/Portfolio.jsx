import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import RevealAnimation from "./RevealAnimation";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const Portfolio = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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
    <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        <RevealAnimation
          direction="up"
          delay={0.2}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Our{" "}
            <motion.span
              className="hero-text"
              initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.6,
                type: "spring",
                bounce: 0.4,
              }}
            >
              Portfolio
            </motion.span>
          </motion.h2>
          <motion.p
            className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-2 sm:px-0"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Showcasing our expertise through successful projects that have
            transformed businesses
          </motion.p>
        </RevealAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="relative group cursor-pointer"
              onMouseEnter={() => !isMobile && setHoveredCard(project.id)}
              onMouseLeave={() => !isMobile && setHoveredCard(null)}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.6,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100,
                },
              }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={isMobile ? {} : {
                y: -10,
                transition: { duration: 0.3, type: "spring", stiffness: 300 },
              }}
            >
              {/* Glow Effect - Only on Desktop */}
              {!isMobile && (
                <motion.div
                  className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500/15 via-purple-500/15 to-cyan-500/15 -z-10"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: hoveredCard === project.id ? 1 : 0,
                    scale: hoveredCard === project.id ? 1.03 : 0.8,
                  }}
                  transition={{ duration: 0.3 }}
                  style={{
                    filter: "blur(15px)",
                  }}
                />
              )}

              <motion.div
                className="glass-card rounded-2xl overflow-hidden relative"
                whileHover={isMobile ? {} : {
                  boxShadow:
                    "0 20px 40px rgba(99, 102, 241, 0.2), 0 0 30px rgba(139, 92, 246, 0.15)",
                  transition: { duration: 0.3 },
                }}
              >
                {/* Magnetic Border Effect - Only on Desktop */}
                {!isMobile && (
                  <motion.div
                    className="absolute inset-0 rounded-2xl"
                    style={{
                      background:
                        "linear-gradient(45deg, transparent 30%, rgba(99, 102, 241, 0.2) 50%, transparent 70%)",
                      opacity: hoveredCard === project.id ? 1 : 0,
                    }}
                    animate={{
                      backgroundPosition:
                        hoveredCard === project.id
                          ? ["0% 0%", "100% 100%", "0% 0%"]
                          : "0% 0%",
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                )}

                <div className="relative overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-40 sm:h-48 object-cover"
                    whileHover={isMobile ? {} : { scale: 1.08 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  />

                  {/* Overlay with shimmer effect - Only on Desktop */}
                  {!isMobile && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}

                  {/* Floating category badge */}
                  <motion.div
                    className="absolute top-3 sm:top-4 right-3 sm:right-4"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={isMobile ? {} : { scale: 1.05 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <span className="glass-card px-2 sm:px-3 py-1 text-xs font-medium rounded-full backdrop-blur-lg border border-white/20">
                      {project.category}
                    </span>
                  </motion.div>

                  {/* Shimmer effect - Only on Desktop */}
                  {!isMobile && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -skew-x-12"
                      initial={{ x: "-200%" }}
                      animate={{
                        x: hoveredCard === project.id ? "200%" : "-200%",
                      }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                    />
                  )}
                </div>

                <div className="p-4 sm:p-6 relative">
                  <motion.h3
                    className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3"
                    whileHover={isMobile ? {} : {
                      color: "#6366f1",
                      x: 3,
                      transition: { duration: 0.2 },
                    }}
                  >
                    {project.title}
                  </motion.h3>

                  <motion.p
                    className="text-muted-foreground mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base"
                    initial={{ opacity: 0.8 }}
                    whileHover={isMobile ? {} : { opacity: 1 }}
                  >
                    {project.description}
                  </motion.p>

                  <motion.div
                    className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6"
                    initial="hidden"
                    whileInView="visible"
                    variants={{
                      hidden: { opacity: 0 },
                      visible: {
                        opacity: 1,
                        transition: {
                          staggerChildren: 0.1,
                          delayChildren: 0.3,
                        },
                      },
                    }}
                  >
                    {project.tags.map((tag, tagIndex) => (
                      <motion.span
                        key={tagIndex}
                        className="px-2 py-1 bg-indigo-500/10 text-indigo-400 text-xs rounded-md border border-indigo-500/20"
                        variants={{
                          hidden: { opacity: 0, scale: 0 },
                          visible: {
                            opacity: 1,
                            scale: 1,
                            transition: {
                              type: "spring",
                              stiffness: 400,
                              damping: 20,
                            },
                          },
                        }}
                        whileHover={isMobile ? {} : {
                          scale: 1.05,
                          backgroundColor: "rgba(99, 102, 241, 0.15)",
                          transition: { duration: 0.2 },
                        }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </motion.div>

                  <motion.div
                    className="flex gap-2 sm:gap-3"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <motion.div
                      whileHover={isMobile ? {} : { scale: 1.02, y: -1 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1"
                    >
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full text-xs sm:text-sm border-indigo-500/30 hover:border-indigo-500 hover:bg-indigo-500/10 transition-all duration-300"
                      >
                        <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                        Live Demo
                      </Button>
                    </motion.div>

                    <motion.div
                      whileHover={isMobile ? {} : { scale: 1.02, y: -1 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1"
                    >
                      <Button
                        variant="ghost"
                        size="sm"
                        className="w-full text-xs sm:text-sm hover:bg-purple-500/10 hover:text-purple-400 transition-all duration-300"
                      >
                        <Github className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                        Code
                      </Button>
                    </motion.div>
                  </motion.div>
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
