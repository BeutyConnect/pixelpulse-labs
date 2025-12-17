import Services from "@/components/Services";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Services Section */}
      <section className="relative">
        <Services />
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;