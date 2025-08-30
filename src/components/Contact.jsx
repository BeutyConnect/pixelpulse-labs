import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Let's Work <span className="hero-text">Together</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Ready to transform your digital presence? Get in touch and let's discuss your next big project.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div 
            className="glass-card p-8 rounded-2xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.h3 
              className="text-2xl font-semibold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Send us a message
            </motion.h3>
            <form className="space-y-6">
              <motion.div 
                className="grid md:grid-cols-2 gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <div>
                  <label className="text-sm font-medium mb-2 block">Name</label>
                  <Input placeholder="Your full name" className="bg-background/50" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <Input type="email" placeholder="your.email@example.com" className="bg-background/50" />
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <label className="text-sm font-medium mb-2 block">Subject</label>
                <Input placeholder="What's this about?" className="bg-background/50" />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <label className="text-sm font-medium mb-2 block">Message</label>
                <Textarea 
                  placeholder="Tell us about your project..." 
                  className="bg-background/50 min-h-32"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button variant="hero" size="lg" className="w-full">
                    Send Message
                    <Send className="w-4 h-4" />
                  </Button>
                </motion.div>
              </motion.div>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.div 
              className="glass-card p-6 rounded-2xl"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6, type: "spring", bounce: 0.3 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            >
              <div className="flex items-start gap-4">
                <motion.div 
                  className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Mail className="w-6 h-6 text-primary-foreground" />
                </motion.div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Email</h4>
                  <p className="text-muted-foreground">hello@pixelpulselabs.com</p>
                  <p className="text-muted-foreground">support@pixelpulselabs.com</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="glass-card p-6 rounded-2xl"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.7, type: "spring", bounce: 0.3 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            >
              <div className="flex items-start gap-4">
                <motion.div 
                  className="w-12 h-12 gradient-secondary rounded-xl flex items-center justify-center"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Phone className="w-6 h-6 text-primary" />
                </motion.div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Phone</h4>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  <p className="text-muted-foreground">Mon-Fri 9AM-6PM EST</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="glass-card p-6 rounded-2xl"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8, type: "spring", bounce: 0.3 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            >
              <div className="flex items-start gap-4">
                <motion.div 
                  className="w-12 h-12 gradient-accent rounded-xl flex items-center justify-center"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <MapPin className="w-6 h-6 text-accent-foreground" />
                </motion.div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Office</h4>
                  <p className="text-muted-foreground">123 Innovation Drive</p>
                  <p className="text-muted-foreground">Tech Valley, CA 94025</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="glass-card p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.9, type: "spring", bounce: 0.3 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            >
              <motion.h4 
                className="text-lg font-semibold mb-3"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 1.1 }}
              >
                Why Choose Us?
              </motion.h4>
              <motion.ul 
                className="space-y-2 text-sm text-muted-foreground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                {["24/7 Support & Communication", "Agile Development Process", "100% Client Satisfaction Rate", "Post-Launch Support Included"].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 1.3 + (index * 0.1) }}
                  >
                    • {item}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;