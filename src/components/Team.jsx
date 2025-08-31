import { Linkedin, Twitter, Github } from "lucide-react";
import { motion } from "framer-motion";

const Team = () => {
  const team = [
    {
      name: "Kavindu Praneeth",
      role: "CEO & Founder",
      avatar: "/kavindu.jpg",
      social: {
        linkedin: "https://www.linkedin.com/in/kavindu-praneeth/",
        twitter: "#",
        github: "#",
      },
    },
    {
      name: "Nalin Sandaruwan",
      role: "CTO & Founder",
      avatar: "/nalin.avif",
      social: {
        linkedin: "https://www.linkedin.com/in/nalin-s-bandara/",
        twitter: "#",
        github: "#",
      },
    },
    {
      name: "Supun Kalhara",
      role: "CMO",
      avatar: "/supun.jpg",
      social: {
        linkedin: "https://www.linkedin.com/in/vsupun-kalhara/",
        twitter: "#",
        github: "#",
      },
    },
    {
      name: "Nipun Sachintha",
      role: "Lead Engineer",
      avatar: "/nipun.jpg",
      social: { linkedin: "#", twitter: "#", github: "#" },
    },
    {
      name: "Shanika Dilrukshi",
      role: "Business Analyst",
      avatar: "/shanika.jpg",
      social: {
        linkedin: "https://www.linkedin.com/in/shanika-dilrukshi-82aa6a295/",
        twitter: "#",
        github: "#",
      },
    },
    {
      name: "Darshani Kumari",
      role: "Frontend Engineer",
      avatar: "/darshani.jpg",
      social: {
        linkedin: "https://www.linkedin.com/in/darshani-kumari-149219308/",
        twitter: "#",
        github: "#",
      },
    },
    {
      name: "Ernaga Madhushan",
      role: "Lead Mobile Developer",
      avatar: "/eranga.jpg",
      social: {
        linkedin: "https://www.linkedin.com/in/erangamadhushan/",
        twitter: "#",
        github: "#",
      },
    },
    {
      name: "Pasindu Iroshan",
      role: "Backend Engineer",
      avatar: "/pasindu.jpg",
      social: {
        linkedin: "https://www.linkedin.com/in/pasindu-iroshan-9423a72b4/",
        twitter: "#",
        github: "#",
      },
    },
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Meet Our <span className="hero-text">Team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The passionate individuals behind every successful project
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {team.map((member, index) => (
            <motion.div
              key={index}
              className="glass-card w-full max-w-md mx-auto p-8  rounded-2xl text-center group cursor-pointer relative overflow-hidden"
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
              <div className="relative mb-10 flex justify-center">
                <div className="relative">
                  {/* Glowing background ring */}
                  <div className="absolute -inset-8 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl group-hover:blur-2xl group-hover:from-purple-500/40 group-hover:to-pink-500/40 transition-all duration-500"></div>

                  {/* Larger avatar */}
                  <div className="relative w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-white/20 group-hover:border-white/40 transition-all duration-500 shadow-2xl flex items-center justify-center">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-full h-full object-cover object-center group-hover:scale-110 transition-all duration-700  "
                    />

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  </div>

                  {/* Status indicator */}
                  {/* <div className="absolute -bottom-4 -right-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full border-4 border-background shadow-lg group-hover:scale-110 transition-all duration-300">
                      <div className="w-full h-full rounded-full bg-gradient-to-r from-green-400 to-emerald-500 animate-pulse"></div>
                    </div>
                  </div> */}
                </div>
              </div>

              <h3 className="text-2xl font-semibold mb-2 -mt-8">
                {member.name}
              </h3>
              <p className="text-primary font-medium mb-4">{member.role}</p>

              <div className="flex justify-center gap-4">
                <a
                  href={member.social.linkedin}
                  className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-smooth"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={member.social.twitter}
                  className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-smooth"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href={member.social.github}
                  className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-smooth"
                >
                  <Github className="w-5 h-5" />
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
