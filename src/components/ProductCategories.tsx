import { Button } from "@/components/ui/button";
import { Crown, Lamp, TreePine, Sparkles, ArrowRight } from "lucide-react";

const ProductCategories = () => {
  const categories = [
    {
      icon: Crown,
      title: "Crystal Chandeliers",
      description: "Magnificent crystal chandeliers with gold accents and premium finishes",
      products: "120+ Products",
      gradient: "from-gold-light to-gold-dark",
      iconColor: "text-gold-dark"
    },
    {
      icon: TreePine,
      title: "Garden Ornaments",
      description: "Elegant animal statues and decorative pieces for outdoor spaces",
      products: "85+ Products",
      gradient: "from-primary-light to-primary",
      iconColor: "text-primary-foreground"
    },
    {
      icon: Lamp,
      title: "Decorative Planters",
      description: "Ornate planters and urns with intricate designs and gold details",
      products: "150+ Products",
      gradient: "from-crystal to-crystal-dark",
      iconColor: "text-primary"
    },
    {
      icon: Sparkles,
      title: "Premium Accessories",
      description: "Luxury home accessories and decorative items for discerning taste",
      products: "200+ Products",
      gradient: "from-accent-light to-accent",
      iconColor: "text-primary-dark"
    }
  ];

  return (
    <section id="categories" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-glass-bg backdrop-blur-md border border-glass-border rounded-full px-6 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-gold mr-2" />
            <span className="text-sm font-medium text-gradient-gold">
              Product Categories
            </span>
          </div>
          
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-gradient-luxury mb-6">
            Discover Our Premium Collections
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Each category represents years of craftsmanship and attention to detail, 
            bringing you the finest decorative products for luxury living.
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
                <div className={`w-16 h-16 bg-gradient-to-br ${category.gradient} rounded-xl flex items-center justify-center mb-6 shadow-gold group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-8 h-8 ${category.iconColor}`} />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="font-playfair text-xl font-bold text-foreground group-hover:text-gradient-luxury transition-colors duration-300">
                    {category.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {category.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gradient-gold">
                      {category.products}
                    </span>
                    <ArrowRight className="w-4 h-4 text-gold group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
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