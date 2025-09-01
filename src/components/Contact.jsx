import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Form data state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    softwareType: "",
    timeline: "",
    budget: "",
    projectDescription: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Basic validation
    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.softwareType ||
      !formData.timeline ||
      !formData.budget ||
      !formData.message
    ) {
      setSubmitStatus({
        type: "error",
        message: "Please fill in all required fields.",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      // Replace with your actual EmailJS configuration
      const serviceID = "service_iu6qft9"; // Replace with your actual Service ID from EmailJS
      const templateID = "template_80logme"; // Replace with your actual Template ID from EmailJS
      const publicKey = "cactIDshzlkcm83yx"; // Replace with your actual Public Key from EmailJS

      // Check if EmailJS is loaded
      if (typeof window.emailjs === "undefined") {
        throw new Error(
          "EmailJS not loaded. Please add the EmailJS script to your HTML."
        );
      }

      // Send email to your Gmail
      const result = await window.emailjs.send(
        serviceID,
        templateID,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          company: formData.company,
          subject: formData.subject,
          software_type: formData.softwareType,
          timeline: formData.timeline,
          budget: formData.budget,
          project_description: formData.projectDescription,
          message: formData.message,
          reply_to: formData.email,
        },
        publicKey
      );

      console.log("Email sent successfully:", result);
      setSubmitStatus({
        type: "success",
        message:
          "Thank you! Your message has been sent successfully. We'll get back to you soon!",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        softwareType: "",
        timeline: "",
        budget: "",
        projectDescription: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus({
        type: "error",
        message:
          "Sorry, there was an error sending your message. Please try again or contact us directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6">
      <div className="container mx-auto max-w-4xl">
        {/* Section Header */}
        <motion.div
          className="text-center mb-8 sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Let's Work <span className="hero-text">Together</span>
          </motion.h2>
          <motion.p
            className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-2 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Ready to transform your digital presence? Get in touch and let's
            discuss your next big project.
          </motion.p>
        </motion.div>

        <div className="space-y-8 sm:space-y-12 md:space-y-16">
          {/* Contact Form */}
          <motion.div
            className="glass-card p-4 sm:p-6 md:p-8 rounded-2xl max-w-[800px] mx-auto border border-white/10"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.h3
              className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8 flex items-center gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Send className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              Send us a message
            </motion.h3>

            {/* Status Messages */}
            {submitStatus && (
              <motion.div
                className={`mb-6 p-4 rounded-lg ${
                  submitStatus.type === "success"
                    ? "bg-green-500/20 border border-green-500/30 text-green-400"
                    : "bg-red-500/20 border border-red-500/30 text-red-400"
                }`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {submitStatus.message}
              </motion.div>
            )}

            <div className="space-y-4 sm:space-y-6">
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                    className="bg-secondary/50 backdrop-blur-sm border-white/10 focus:border-primary/50"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    className="bg-secondary/50 backdrop-blur-sm border-white/10 focus:border-primary/50"
                  />
                </div>
              </motion.div>

              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Phone
                  </label>
                  <Input
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+94 XX XXX XXXX"
                    className="bg-secondary/50 backdrop-blur-sm border-white/10 focus:border-primary/50"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Company/Organization
                  </label>
                  <Input
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Your company name"
                    className="bg-secondary/50 backdrop-blur-sm border-white/10 focus:border-primary/50"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <label className="text-sm font-medium mb-2 block">
                  Subject <span className="text-red-500">*</span>
                </label>
                <Input
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Brief project title"
                  className="bg-secondary/50 backdrop-blur-sm border-white/10 focus:border-primary/50"
                />
              </motion.div>

              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Software Type <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="softwareType"
                    value={formData.softwareType}
                    onChange={handleInputChange}
                    className="w-full h-10 px-3 rounded-md bg-secondary/50 backdrop-blur-sm border border-white/10 focus:border-primary/50 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                  >
                    <option value="">Select software type</option>
                    <option value="Web Application">Web Application</option>
                    <option value="Mobile App (iOS/Android)">
                      Mobile App (iOS/Android)
                    </option>
                    <option value="Desktop Software">Desktop Software</option>
                    <option value="E-commerce Platform">
                      E-commerce Platform
                    </option>
                    <option value="CRM/ERP System">CRM/ERP System</option>
                    <option value="API/Backend Service">
                      API/Backend Service
                    </option>
                    <option value="AI/ML Solution">AI/ML Solution</option>
                    <option value="Game Development">Game Development</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Project Timeline <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    className="w-full h-10 px-3 rounded-md bg-secondary/50 backdrop-blur-sm border border-white/10 focus:border-primary/50 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                  >
                    <option value="">Select timeline</option>
                    <option value="ASAP (Rush)">ASAP (Rush)</option>
                    <option value="1-2 weeks">1-2 weeks</option>
                    <option value="1 month">1 month</option>
                    <option value="2-3 months">2-3 months</option>
                    <option value="3-6 months">3-6 months</option>
                    <option value="6+ months">6+ months</option>
                    <option value="Just exploring">Just exploring</option>
                  </select>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.0 }}
              >
                <label className="text-sm font-medium mb-2 block">
                  Budget Range <span className="text-red-500">*</span>
                </label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="w-full h-10 px-3 rounded-md bg-secondary/50 backdrop-blur-sm border border-white/10 focus:border-primary/50 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                >
                  <option value="">Select budget range</option>
                  <option value="Under $1,000">Under $1,000</option>
                  <option value="$1,000 - $5,000">$1,000 - $5,000</option>
                  <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                  <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                  <option value="$25,000 - $50,000">$25,000 - $50,000</option>
                  <option value="$50,000+">$50,000+</option>
                  <option value="Discuss in detail">Discuss in detail</option>
                </select>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.1 }}
              >
                <label className="text-sm font-medium mb-2 block">
                  Project Description
                </label>
                <Textarea
                  name="projectDescription"
                  value={formData.projectDescription}
                  onChange={handleInputChange}
                  placeholder="Describe your project goals, key features, target audience, and any specific requirements..."
                  className="bg-secondary/50 backdrop-blur-sm border-white/10 focus:border-primary/50 min-h-24"
                  rows={3}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 }}
              >
                <label className="text-sm font-medium mb-2 block">
                  Additional Message <span className="text-red-500">*</span>
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Any additional details, questions, or special requirements..."
                  className="bg-secondary/50 backdrop-blur-sm border-white/10 focus:border-primary/50 min-h-20"
                  rows={2}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.3 }}
              >
                <motion.div
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  <Button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 sm:py-4 h-auto text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <Send className="w-4 h-4 sm:w-5 sm:h-5 ml-2 sm:ml-3" />
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
          <motion.div
            className="glass-card p-4 sm:p-6 rounded-2xl bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-blue-500/10 border-purple-500/20 mt-8 sm:mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 text-center">
              <div className="flex items-center gap-2">
                <span className="text-xl sm:text-2xl">📧</span>
                <span className="text-xs sm:text-sm font-medium break-all sm:break-normal">
                  contactpixelpulselabs@gmail.com
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xl sm:text-2xl">📱</span>
                <span className="text-xs sm:text-sm font-medium">+94 76 482 337 2</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xl sm:text-2xl">⏰</span>
                <span className="text-xs sm:text-sm font-medium">Mon-Fri, 9AM-6PM</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
