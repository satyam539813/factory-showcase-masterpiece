import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Award, Star, Heart } from "lucide-react";
import heroMandap from "@/assets/luxury-mandap-wings.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-primary-dark">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroMandap}
          alt="Luxury wedding mandap with golden wings decoration"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-primary-dark opacity-80"></div>
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
                <span className="text-sm font-medium text-gold">
                  🚚 All India Delivery • Wholesale Prices • Full Stock Ready
                </span>
              </div>

              <h1 className="font-playfair text-5xl lg:text-7xl font-bold leading-tight">
                <span className="text-primary-foreground">Wedding &</span>
                <br />
                <span className="text-gold">Event Décor</span>
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
                <div className="text-3xl font-bold text-gold font-playfair">500+</div>
                <div className="text-sm text-primary-foreground/80">Wedding Products</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold font-playfair">🚚</div>
                <div className="text-sm text-primary-foreground/80">All India Delivery</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold font-playfair">💰</div>
                <div className="text-sm text-primary-foreground/80">Wholesale Prices</div>
              </div>
            </div>
          </div>

          {/* Featured Product Preview */}
          <div className="relative">
            {/* Floating decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gold/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-crystal/20 rounded-full blur-xl"></div>
            
            <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl hover:shadow-gold/20 transition-all duration-500 hover:scale-105 group">
              {/* Premium badge */}
              <div className="absolute -top-3 left-6 bg-gold px-4 py-1 rounded-full shadow-lg">
                <span className="text-xs font-bold text-primary-dark">PREMIUM</span>
              </div>
              
              <div className="relative overflow-hidden rounded-2xl bg-crystal-light shadow-inner">
                <img
                  src={heroMandap}
                  alt="Royal Wedding Mandap with Golden Wings"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/20"></div>
                
                {/* Floating price tag */}
                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md text-white px-3 py-1 rounded-full text-sm font-bold">
                  ₹2.85L
                </div>
              </div>
              
              <div className="mt-6 text-center space-y-4">
                <div>
                  <h3 className="font-playfair text-2xl font-bold text-gold mb-2">
                    Royal Wedding Mandap
                  </h3>
                  <p className="text-primary-foreground/80 text-sm">
                    Luxury golden wings design with LED lighting
                  </p>
                </div>
                
                <div className="flex items-center justify-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold text-gold drop-shadow-sm" />
                  ))}
                  <span className="ml-2 text-xs text-primary-foreground/60">(127 reviews)</span>
                </div>
                
                <div className="flex space-x-2">
                  <Button variant="gold" className="flex-1 rounded-xl shadow-lg hover:shadow-gold/30">
                    View Details
                  </Button>
                  <Button variant="crystal" size="icon" className="rounded-xl shadow-lg">
                    <Heart className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              
              {/* Subtle glow effect */}
              <div className="absolute inset-0 rounded-3xl bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;