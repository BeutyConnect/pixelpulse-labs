import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Privacy Policy Content */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
              <span className="hero-text">Privacy</span> Policy
            </h1>
            
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-center mb-12 text-lg">
                Last updated: March 2024
              </p>

              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Information We Collect</h2>
                  <p>
                    We collect information you provide directly to us, such as when you create an account, 
                    contact us, or use our services. This may include your name, email address, phone number, 
                    and other contact information.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">How We Use Your Information</h2>
                  <p>
                    We use the information we collect to provide, maintain, and improve our services, 
                    communicate with you, and comply with legal obligations.
                  </p>
                  <ul className="list-disc pl-6 mt-4 space-y-2">
                    <li>To provide and maintain our services</li>
                    <li>To notify you about changes to our services</li>
                    <li>To provide customer support</li>
                    <li>To monitor the usage of our services</li>
                    <li>To detect, prevent and address technical issues</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Information Sharing</h2>
                  <p>
                    We do not sell, trade, or otherwise transfer your personal information to third parties 
                    without your consent, except as described in this policy.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Data Security</h2>
                  <p>
                    We implement appropriate security measures to protect your personal information against 
                    unauthorized access, alteration, disclosure, or destruction.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Us</h2>
                  <p>
                    If you have any questions about this Privacy Policy, please contact us at 
                    <a href="mailto:info@pixelpulselabs.com" className="text-primary hover:text-primary/80 ml-1">
                      info@pixelpulselabs.com
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

export default PrivacyPolicy;