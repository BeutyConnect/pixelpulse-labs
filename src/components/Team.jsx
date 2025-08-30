import { Linkedin, Twitter, Github } from "lucide-react";
import { motion } from "framer-motion";

const Team = () => {
  const team = [
    {
      name: "Kavindu Praneeth",
      role: "CEO & Founder",

      avatar: "/public/kavindu.jpg",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
    {
      name: "Nalin Sandaruwan",
      role: "CTO & Founder",

      avatar: "/public/nalin.avif",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
    {
      name: "Supun Kalhara",
      role: "CMO",

      avatar: "/public/supun.jpg",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
    {
      name: "Nipun Sachintha",
      role: "Lead Engineer",

      avatar: "/public/nipun.jpg",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
    {
      name: "Shanika Dilrukshi",
      role: "Business Analyst",

      avatar: "/public/shanika.jpg",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },

    {
      name: "Darshani Kumari",
      role: "Frontend Engineer",

      avatar: "/public/darshani.jpg",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
    {
      name: "Ernaga Madhushan",
      role: "Lead Mobile Developer",

      avatar: "/public/eranga.jpg",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
    {
      name: "Pasindu Iroshan",
      role: "Backend Engineer",

      avatar: "/public/pasindu.jpg",
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
              <div className="relative mb-8 flex justify-center">
                <div className="relative">
                  {/* Glowing background ring */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-lg group-hover:blur-xl group-hover:from-purple-500/40 group-hover:to-pink-500/40 transition-all duration-500"></div>

                  {/* Main avatar container */}
                  <div className="relative w-36 h-36 mx-auto rounded-full overflow-hidden border-4 border-white/20 group-hover:border-white/40 transition-all duration-500 shadow-2xl">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-full h-full object-cover object-center group-hover:scale-110 transition-all duration-700"
                    />

                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  </div>

                  {/* Status indicator */}
                  <div className="absolute -bottom-2 -right-2">
                    <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full border-4 border-background shadow-lg group-hover:scale-110 transition-all duration-300">
                      <div className="w-full h-full rounded-full bg-gradient-to-r from-green-400 to-emerald-500 animate-pulse"></div>
                    </div>
                  </div>
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
