import { Users, Target, Lightbulb, Shield } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Users,
      title: "4-Member Team",
      description: "CEO, CTO, Developers, and Marketing Specialist working in perfect harmony"
    },
    {
      icon: Lightbulb,
      title: "Creative Innovation",
      description: "We think outside the box to deliver unique solutions that set you apart"
    },
    {
      icon: Target,
      title: "Results-Driven",
      description: "Every project is measured by its impact on your business growth"
    },
    {
      icon: Shield,
      title: "Reliable Partnership",
      description: "Consistent communication and delivery you can count on"
    }
  ];

  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="hero-text">PixelPulse Labs</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're a passionate 4-member team dedicated to transforming your digital presence. 
            Our unique blend of technical expertise and creative vision delivers exceptional results.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div 
              key={index}
              className="glass-card p-6 rounded-2xl hover:bg-card/90 transition-smooth group"
            >
              <div className="mb-4">
                <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center group-hover:shadow-glow-primary transition-smooth">
                  <value.icon className="w-6 h-6 text-primary-foreground" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;