import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Award, Star } from "lucide-react";
import heroChandelier from "@/assets/hero-chandelier.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-hero-gradient">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroChandelier}
          alt="Luxury crystal chandelier"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-hero-gradient opacity-80"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <Sparkles className="w-8 h-8 text-gold opacity-60" />
      </div>
      <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: "2s" }}>
        <Award className="w-10 h-10 text-gold-light opacity-50" />
      </div>
      <div className="absolute bottom-40 left-20 animate-float" style={{ animationDelay: "4s" }}>
        <Star className="w-6 h-6 text-accent opacity-70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center bg-glass-bg backdrop-blur-md border border-glass-border rounded-full px-6 py-2">
                <Sparkles className="w-4 h-4 text-gold mr-2" />
                <span className="text-sm font-medium text-gradient-gold">
                  🚚 All India Delivery • Wholesale Prices • Full Stock Ready
                </span>
              </div>

              <h1 className="font-playfair text-5xl lg:text-7xl font-bold leading-tight">
                <span className="text-primary-foreground">Wedding &</span>
                <br />
                <span className="text-gradient-gold">Event Décor</span>
                <br />
                <span className="text-primary-foreground">Specialists</span>
              </h1>

              <p className="text-xl text-primary-foreground/90 leading-relaxed max-w-2xl">
                Crystal chandeliers, mandap decorations, jhummar lights, and premium event décor. 
                Wholesale prices with All India home delivery. Full stock ready for weddings, 
                events, and celebrations.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="gold" size="xl" className="group">
                WhatsApp: 7078136499
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="crystal" size="xl">
                Call: 7078136499
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient-gold font-playfair">500+</div>
                <div className="text-sm text-primary-foreground/80">Wedding Products</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient-gold font-playfair">🚚</div>
                <div className="text-sm text-primary-foreground/80">All India Delivery</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient-gold font-playfair">💰</div>
                <div className="text-sm text-primary-foreground/80">Wholesale Prices</div>
              </div>
            </div>
          </div>

          {/* Featured Product Preview */}
          <div className="relative">
            <div className="card-glass p-8 hover-lift">
              <div className="aspect-square rounded-xl overflow-hidden bg-crystal-gradient">
                <img
                  src={heroChandelier}
                  alt="Featured luxury chandelier"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-6 text-center">
                <h3 className="font-playfair text-2xl font-bold text-gradient-luxury mb-2">
                  Royal Crystal Chandelier
                </h3>
                <p className="text-muted-foreground mb-4">
                  Hand-cut crystals with 24k gold accents
                </p>
                <div className="flex items-center justify-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                  ))}
                  <span className="ml-2 text-sm text-muted-foreground">(127 reviews)</span>
                </div>
                <Button variant="luxury" className="w-full">
                  View Details
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;