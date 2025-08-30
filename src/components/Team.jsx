import { Linkedin, Twitter, Github } from "lucide-react";
import { motion } from "framer-motion";

const Team = () => {
  const team = [
    {
      name: "Alex Thompson",
      role: "CEO & Founder",
      bio: "Visionary leader with 10+ years in tech entrepreneurship",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
    {
      name: "Sarah Chen",
      role: "CTO",
      bio: "Full-stack architect passionate about scalable solutions",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
    {
      name: "Marcus Rodriguez",
      role: "Lead Developer",
      bio: "Expert in modern web technologies and mobile development",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
    {
      name: "Emma Wilson",
      role: "Marketing Specialist",
      bio: "Digital marketing strategist focused on growth and ROI",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Meet Our <span className="hero-text">Team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The passionate individuals behind every successful project
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              className="glass-card p-6 rounded-2xl text-center group cursor-pointer relative overflow-hidden"
              whileHover={{
                scale: 1.05,
                y: -10,
                boxShadow: "0 25px 50px rgba(139, 92, 246, 0.2)",
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
                damping: 20,
              }}
            >
              <div className="relative mb-6">
                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-primary/20 group-hover:border-primary/40 transition-smooth">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                  />
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                  <div className="w-4 h-4 gradient-primary rounded-full group-hover:shadow-glow-primary transition-smooth" />
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
              <p className="text-primary font-medium mb-3">{member.role}</p>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                {member.bio}
              </p>

              <div className="flex justify-center gap-3">
                <a
                  href={member.social.linkedin}
                  className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-smooth"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={member.social.twitter}
                  className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-smooth"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href={member.social.github}
                  className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-smooth"
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
