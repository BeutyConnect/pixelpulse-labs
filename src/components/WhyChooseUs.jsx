import { motion } from "framer-motion";

const WhyChooseUs = () => {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          className="max-w-[900px] mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Why Choose <span className="hero-text">Us?</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "🚀",
                title: "Lightning Fast",
                desc: "24/7 Support & Quick Response Time",
              },
              {
                icon: "⚡",
                title: "Agile Process",
                desc: "Modern Development Methods & Best Practices",
              },
              {
                icon: "💎",
                title: "Premium Quality",
                desc: "100% Client Satisfaction Rate Guaranteed",
              },
              {
                icon: "🛡️",
                title: "Long-term Support",
                desc: "Post-Launch Support & Maintenance Included",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="glass-card p-6 rounded-2xl hover:border-white/20 transition-all duration-300 group text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-all duration-300">
                  {item.icon}
                </div>
                <h4 className="font-semibold mb-3 text-lg group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Contact Info Bar */}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
