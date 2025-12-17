import About from "@/components/About";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* About Section */}
      <section className="relative bg-gray-900">
        <About />
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;