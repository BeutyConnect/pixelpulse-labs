import { 
  Search, 
  Globe, 
  Facebook, 
  Smartphone, 
  Code, 
  TrendingUp 
} from "lucide-react";
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      category: "Digital Marketing",
      services: [
        {
          icon: Search,
          title: "SEO",
          description: "Boost your organic search rankings and drive qualified traffic to your website"
        },
        {
          icon: TrendingUp,
          title: "Google Ads",
          description: "Maximize ROI with targeted advertising campaigns that convert"
        },
        {
          icon: Facebook,
          title: "Facebook Ads",
          description: "Reach your ideal customers on the world's largest social platform"
        }
      ]
    },
    {
      category: "Development",
      services: [
        {
          icon: Globe,
          title: "Web Development",
          description: "Custom websites and web applications built with modern technologies"
        },
        {
          icon: Smartphone,
          title: "Mobile App Development",
          description: "Native and cross-platform mobile apps for iOS and Android"
        },
        {
          icon: Code,
          title: "Custom Software",
          description: "Tailored software solutions that streamline your business processes"
        }
      ]
    }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="hero-text">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We offer comprehensive digital solutions to help your business thrive in the modern marketplace
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {services.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-8">
              <h3 className="text-3xl font-bold text-center lg:text-left mb-8">
                {category.category}
              </h3>
              
              <div className="space-y-6">
                {category.services.map((service, serviceIndex) => (
                  <motion.div 
                    key={serviceIndex}
                    className="glass-card p-6 rounded-2xl group cursor-pointer relative overflow-hidden"
                    whileHover={{ 
                      scale: 1.02,
                      y: -5,
                      boxShadow: "0 20px 40px rgba(139, 92, 246, 0.2)"
                    }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, x: categoryIndex === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.5, 
                      delay: serviceIndex * 0.1,
                      type: "spring",
                      stiffness: 300,
                      damping: 20
                    }}
                  >
                    {/* Hover overlay */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-violet-500/10 to-purple-500/10 opacity-0"
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    <div className="relative z-10">
                      <div className="flex items-start gap-4">
                        <motion.div 
                          className="w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0"
                          whileHover={{ 
                            rotate: 360,
                            boxShadow: "0 0 25px rgba(139, 92, 246, 0.6)"
                          }}
                          transition={{ duration: 0.6 }}
                        >
                          <service.icon className="w-6 h-6 text-white" />
                        </motion.div>
                        <div>
                          <motion.h4 
                            className="text-xl font-semibold mb-2"
                            whileHover={{ color: "#8b5cf6" }}
                          >
                            {service.title}
                          </motion.h4>
                          <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;