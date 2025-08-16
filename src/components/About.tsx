import { Button } from "@/components/ui/button";
import { Award, Users, Gem, Factory, ArrowRight, CheckCircle } from "lucide-react";
import factoryShowroom from "@/assets/factory-showroom.jpg";

const About = () => {
  const features = [
    "Premium quality materials and craftsmanship",
    "25+ years of manufacturing excellence",
    "Custom design and personalization services",
    "International shipping and installation",
    "Lifetime warranty on premium products",
    "Eco-friendly production processes"
  ];

  const stats = [
    {
      icon: Factory,
      value: "25,000",
      label: "Products Manufactured",
      suffix: "+"
    },
    {
      icon: Users,
      value: "1,500",
      label: "Happy Customers",
      suffix: "+"
    },
    {
      icon: Award,
      value: "50",
      label: "Design Awards",
      suffix: "+"
    },
    {
      icon: Gem,
      value: "100",
      label: "Premium Materials",
      suffix: "%"
    }
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-gradient-luxury">
                Crafting Luxury Since 1998
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                For over two decades, we have been at the forefront of luxury decorative 
                manufacturing, creating exquisite pieces that transform spaces into 
                works of art. Our commitment to excellence and attention to detail 
                has made us the preferred choice for discerning customers worldwide.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                From our state-of-the-art factory, we combine traditional craftsmanship 
                with modern technology to produce chandeliers, planters, and decorative 
                items that exceed expectations. Every piece is meticulously inspected 
                and finished to perfection.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="luxury" size="xl" className="group">
                Learn More
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="crystal" size="xl">
                Factory Tour
              </Button>
            </div>
          </div>

          {/* Image & Stats */}
          <div className="space-y-8">
            {/* Factory Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-luxury">
              <img
                src={factoryShowroom}
                alt="Luxe Décor Factory Showroom"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <h3 className="font-playfair text-2xl font-bold text-primary-foreground mb-2">
                  Our Premium Showroom
                </h3>
                <p className="text-primary-foreground/90">
                  Experience luxury in every detail
                </p>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className="card-glass p-6 text-center hover-lift"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-12 h-12 bg-gold-gradient rounded-xl flex items-center justify-center mx-auto mb-4 shadow-gold">
                      <Icon className="w-6 h-6 text-primary-dark" />
                    </div>
                    <div className="font-playfair text-2xl font-bold text-gradient-gold">
                      {stat.value}{stat.suffix}
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;