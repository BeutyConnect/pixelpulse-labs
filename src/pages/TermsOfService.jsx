import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Terms of Service Content */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
              Terms of <span className="hero-text">Service</span>
            </h1>
            
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-center mb-12 text-lg">
                Last updated: March 2024
              </p>

              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">1. Acceptance of Terms</h2>
                  <p>
                    By accessing and using PixelPulse Labs services, you accept and agree to be bound by 
                    the terms and provision of this agreement.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">2. Services Description</h2>
                  <p>
                    PixelPulse Labs provides software development, web development, mobile app development, 
                    and digital marketing services. We reserve the right to modify or discontinue services 
                    at any time without notice.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">3. User Responsibilities</h2>
                  <p>
                    Users are responsible for providing accurate information and maintaining the 
                    confidentiality of their account credentials.
                  </p>
                  <ul className="list-disc pl-6 mt-4 space-y-2">
                    <li>Provide accurate and complete information</li>
                    <li>Maintain the security of your account</li>
                    <li>Use services in compliance with applicable laws</li>
                    <li>Respect intellectual property rights</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">4. Payment Terms</h2>
                  <p>
                    Payment terms will be specified in individual service agreements. Late payments 
                    may result in service suspension or termination.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">5. Intellectual Property</h2>
                  <p>
                    All intellectual property rights in our services and deliverables remain with 
                    PixelPulse Labs unless otherwise specified in writing.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">6. Limitation of Liability</h2>
                  <p>
                    PixelPulse Labs shall not be liable for any indirect, incidental, special, 
                    or consequential damages resulting from the use of our services.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">7. Contact Information</h2>
                  <p>
                    For questions about these Terms of Service, please contact us at 
                    <a href="mailto:legal@pixelpulselabs.com" className="text-primary hover:text-primary/80 ml-1">
                      legal@pixelpulselabs.com
                    </a>
                  </p>
                </section>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TermsOfService;