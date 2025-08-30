import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "ECommerce Platform",
      description: "Full-stack e-commerce solution with advanced analytics and payment integration",
      image: project1,
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "Web Development"
    },
    {
      id: 2,
      title: "Mobile Shopping App",
      description: "Cross-platform mobile application for seamless shopping experience",
      image: project2,
      tags: ["React Native", "Firebase", "Redux", "PayPal"],
      category: "Mobile Development"
    },
    {
      id: 3,
      title: "Marketing Dashboard",
      description: "Real-time analytics dashboard for tracking marketing campaign performance",
      image: project3,
      tags: ["Vue.js", "Python", "PostgreSQL", "Chart.js"],
      category: "Digital Marketing"
    }
  ];

  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="hero-text">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing our expertise through successful projects that have transformed businesses
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="glass-card rounded-2xl overflow-hidden hover:bg-card/90 transition-smooth group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-smooth"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-smooth">
                  <span className="glass-card px-3 py-1 text-xs font-medium rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="flex-1">
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </Button>
                  <Button variant="ghost" size="sm" className="flex-1">
                    <Github className="w-4 h-4" />
                    Code
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;