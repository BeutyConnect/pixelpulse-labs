import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Cookie Policy Content */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
              <span className="hero-text">Cookie</span> Policy
            </h1>
            
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-center mb-12 text-lg">
                Last updated: March 2024
              </p>

              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">What Are Cookies</h2>
                  <p>
                    Cookies are small text files that are stored on your computer or mobile device 
                    when you visit our website. They help us provide you with a better experience 
                    and allow certain features to work properly.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">How We Use Cookies</h2>
                  <p>
                    We use cookies for various purposes to enhance your browsing experience:
                  </p>
                  <ul className="list-disc pl-6 mt-4 space-y-2">
                    <li>Essential cookies: Required for the website to function properly</li>
                    <li>Analytics cookies: Help us understand how visitors use our website</li>
                    <li>Functionality cookies: Remember your preferences and settings</li>
                    <li>Performance cookies: Improve website speed and performance</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Types of Cookies We Use</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-medium text-foreground">Session Cookies</h3>
                      <p className="text-sm">
                        These cookies are temporary and are deleted when you close your browser.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-foreground">Persistent Cookies</h3>
                      <p className="text-sm">
                        These cookies remain on your device for a set period or until you delete them.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-foreground">Third-Party Cookies</h3>
                      <p className="text-sm">
                        These cookies are set by external services we use, such as analytics tools.
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Managing Cookies</h2>
                  <p>
                    You can control and manage cookies in various ways. Please note that removing 
                    or blocking cookies can impact your user experience and parts of our website 
                    may no longer be fully accessible.
                  </p>
                  <p className="mt-4">
                    Most browsers allow you to:
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>View what cookies are stored on your device</li>
                    <li>Delete cookies</li>
                    <li>Block cookies from specific websites</li>
                    <li>Block all cookies</li>
                    <li>Delete all cookies when you close your browser</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Updates to This Policy</h2>
                  <p>
                    We may update this Cookie Policy from time to time. We encourage you to 
                    review this policy periodically for any changes.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Us</h2>
                  <p>
                    If you have any questions about this Cookie Policy, please contact us at 
                    <a href="mailto:privacy@pixelpulselabs.com" className="text-primary hover:text-primary/80 ml-1">
                      privacy@pixelpulselabs.com
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

export default CookiePolicy;