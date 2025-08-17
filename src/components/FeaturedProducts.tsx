import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Heart, Eye, ShoppingCart } from "lucide-react";
import decorativePlanters from "@/assets/decorative-planters.jpg";
import luxuryMandap from "@/assets/luxury-mandap-wings.jpg";
import crystalHorse from "@/assets/crystal-winged-horse.jpg";
import floralMandap from "@/assets/floral-mandap-arch.jpg";
import ledDeer from "@/assets/led-deer-decoration.jpg";
import goldenLotus from "@/assets/golden-lotus-lights.jpg";

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Royal Wedding Mandap",
      category: "Mandap Decorations",
      price: "₹2,85,000",
      originalPrice: "₹3,20,000",
      rating: 4.9,
      reviews: 127,
      image: luxuryMandap,
      badge: "Bestseller",
      badgeColor: "bg-gold text-primary-dark"
    },
    {
      id: 2,
      name: "Decorative Planters Set",
      category: "Garden Décor",
      price: "₹45,000",
      originalPrice: "₹55,000",
      rating: 4.8,
      reviews: 89,
      image: decorativePlanters,
      badge: "New",
      badgeColor: "bg-primary text-primary-foreground"
    },
    {
      id: 3,
      name: "Crystal Winged Horse",
      category: "Wedding Props",
      price: "₹1,25,000",
      originalPrice: "₹1,50,000",
      rating: 4.9,
      reviews: 156,
      image: crystalHorse,
      badge: "Limited",
      badgeColor: "bg-accent text-accent-foreground"
    },
    {
      id: 4,
      name: "LED Deer Decoration",
      category: "LED Decorations",
      price: "₹35,000",
      originalPrice: "₹42,000",
      rating: 4.7,
      reviews: 92,
      image: ledDeer,
      badge: "Premium",
      badgeColor: "bg-crystal-dark text-foreground"
    },
    {
      id: 5,
      name: "Floral Mandap Arch",
      category: "Wedding Backdrops",
      price: "₹2,50,000",
      originalPrice: "₹2,85,000",
      rating: 4.8,
      reviews: 73,
      image: floralMandap,
      badge: "Trending",
      badgeColor: "bg-gold-light text-primary-dark"
    },
    {
      id: 6,
      name: "Golden Lotus Lights",
      category: "Decorative Lighting",
      price: "₹85,000",
      originalPrice: "₹95,000",
      rating: 4.6,
      reviews: 148,
      image: goldenLotus,
      badge: "Sale",
      badgeColor: "bg-destructive text-destructive-foreground"
    }
  ];

  return (
    <section id="products" className="py-24 bg-crystal-light/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-gradient-luxury mb-6">
            Featured Premium Products
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Handpicked selections from our finest collections, each piece representing 
            the pinnacle of craftsmanship and luxury design.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group card-glass overflow-hidden hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image Container */}
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Badge */}
                <div className="absolute top-4 left-4">
                  <Badge className={`${product.badgeColor} font-medium shadow-md`}>
                    {product.badge}
                  </Badge>
                </div>

                {/* Action Buttons */}
                <div className="absolute top-4 right-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button size="icon" variant="crystal" className="w-10 h-10">
                    <Heart className="w-4 h-4" />
                  </Button>
                  <Button size="icon" variant="crystal" className="w-10 h-10">
                    <Eye className="w-4 h-4" />
                  </Button>
                </div>

                {/* Quick Add Button */}
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button variant="gold" className="w-full">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Quick Add
                  </Button>
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Product Info */}
              <div className="p-6 space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">{product.category}</p>
                  <h3 className="font-playfair text-lg font-bold text-foreground group-hover:text-gradient-luxury transition-colors duration-300">
                    {product.name}
                  </h3>
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-2">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating)
                            ? "fill-gold text-gold"
                            : "text-muted-foreground"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {product.rating} ({product.reviews})
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center space-x-3">
                  <span className="font-bold text-xl text-gradient-gold font-playfair">
                    {product.price}
                  </span>
                  <span className="text-muted-foreground line-through">
                    {product.originalPrice}
                  </span>
                </div>

                {/* Add to Cart */}
                <Button variant="luxury" className="w-full">
                  Add to Cart
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-16">
          <Button variant="crystal" size="xl">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;