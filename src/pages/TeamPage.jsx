import Team from "@/components/Team";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const TeamPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Team Section */}
      <section className="relative">
        <Team />
      </section>

      <Footer />
    </div>
  );
};

export default TeamPage;