import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Contact Section */}
      <section className="relative">
        <Contact />
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;