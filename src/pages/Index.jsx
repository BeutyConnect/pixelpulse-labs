import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Team from "@/components/Team";
import WhyChooseUs from "@/components/WhyChooseUs";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

import ScrollAnimations from "@/components/ScrollAnimations";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ScrollAnimations />

      {/* Hero Section */}
      <section id="home" className="relative">
        <Hero />
      </section>

      {/* About Section - Dark Gray */}
      <section id="about" className="relative bg-gray-900">
        <About />
      </section>

      {/* Services Section - Dark Blue */}
      <section id="services" className="relative ">
        <Services />
      </section>

      {/* Portfolio Section - Dark Red */}
      <section id="portfolio" className="relative bg-gray-900">
        <Portfolio />
      </section>

      {/* Team Section - Dark Blue */}
      <section id="team" className="relative ">
        <Team />
      </section>

      {/* Why Choose Us Section - Dark Gray */}
      <section id="why-choose-us" className="relative bg-gray-900">
        <WhyChooseUs />
      </section>

      {/* Contact Section - Dark Blue */}
      <section id="contact" className="relative ">
        <Contact />
      </section>

      {/* FAQ Section - Dark Gray */}
      <section id="faq" className="relative bg-gray-900">
        <FAQ />
      </section>

      <Footer />
    </div>
  );
};

export default Index;
