import Portfolio from "@/components/Portfolio";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const PortfolioPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Portfolio Section */}
      <section className="relative bg-gray-900">
        <Portfolio />
      </section>

      <Footer />
    </div>
  );
};

export default PortfolioPage;