import { Button } from "@/components/ui/button";
import { Crown, Lamp, TreePine, Sparkles, ArrowRight } from "lucide-react";

const ProductCategories = () => {
  const categories = [
    {
      icon: Crown,
      title: "Mandap Decorations",
      description: "Beautiful mandap setups with crystal chandeliers and traditional designs",
      products: "120+ Products",
      bgColor: "bg-gold-light",
      iconColor: "text-gold-dark"
    },
    {
      icon: TreePine,
      title: "Wedding Decorations",
      description: "Complete wedding décor including stage setups and floral arrangements",
      products: "200+ Products",
      bgColor: "bg-primary-light",
      iconColor: "text-primary-foreground"
    },
    {
      icon: Lamp,
      title: "Jhummar & Crystal Lights",
      description: "Premium jhummar lights and crystal chandeliers for grand celebrations",
      products: "150+ Products",
      bgColor: "bg-crystal",
      iconColor: "text-primary"
    },
    {
      icon: Sparkles,
      title: "Event Management",
      description: "Birthday parties, corporate events, and special celebration décor",
      products: "100+ Services",
      bgColor: "bg-accent-light",
      iconColor: "text-primary-dark"
    }
  ];

  return (
    <section id="categories" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-card backdrop-blur-md border border-border rounded-full px-6 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-gold mr-2" />
            <span className="text-sm font-medium text-gold">
              Product Categories
            </span>
          </div>
          
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-primary mb-6">
            Wedding & Event Décor Collections
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Specialized in wedding decorations, mandap setups, and event management. 
            Wholesale prices with All India delivery through DTDC, GATI, and VRL Transport.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className="group card-glass p-8 hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className={`w-16 h-16 ${category.bgColor} rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-8 h-8 ${category.iconColor}`} />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="font-playfair text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {category.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {category.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gold">
                      {category.products}
                    </span>
                    <ArrowRight className="w-4 h-4 text-gold group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button variant="luxury" size="xl" className="group">
            View All Categories
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;