import { 
  Search, 
  Globe, 
  Facebook, 
  Smartphone, 
  Code, 
  TrendingUp 
} from "lucide-react";

const Services = () => {
  const services = [
    {
      category: "Digital Marketing",
      services: [
        {
          icon: Search,
          title: "SEO",
          description: "Boost your organic search rankings and drive qualified traffic to your website"
        },
        {
          icon: TrendingUp,
          title: "Google Ads",
          description: "Maximize ROI with targeted advertising campaigns that convert"
        },
        {
          icon: Facebook,
          title: "Facebook Ads",
          description: "Reach your ideal customers on the world's largest social platform"
        }
      ]
    },
    {
      category: "Development",
      services: [
        {
          icon: Globe,
          title: "Web Development",
          description: "Custom websites and web applications built with modern technologies"
        },
        {
          icon: Smartphone,
          title: "Mobile App Development",
          description: "Native and cross-platform mobile apps for iOS and Android"
        },
        {
          icon: Code,
          title: "Custom Software",
          description: "Tailored software solutions that streamline your business processes"
        }
      ]
    }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="hero-text">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We offer comprehensive digital solutions to help your business thrive in the modern marketplace
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {services.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-8">
              <h3 className="text-3xl font-bold text-center lg:text-left mb-8">
                {category.category}
              </h3>
              
              <div className="space-y-6">
                {category.services.map((service, serviceIndex) => (
                  <div 
                    key={serviceIndex}
                    className="glass-card p-6 rounded-2xl hover:bg-card/90 transition-smooth group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 gradient-secondary rounded-xl flex items-center justify-center group-hover:shadow-glow-primary transition-smooth flex-shrink-0">
                        <service.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
                        <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;