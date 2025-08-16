import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, Truck } from "lucide-react";

const FloatingContacts = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-3">
      {/* WhatsApp Button */}
      <Button
        variant="gold"
        size="lg"
        className="rounded-full shadow-luxury hover:scale-110 transition-all duration-300"
        onClick={() => window.open('https://wa.me/+917078136499', '_blank')}
      >
        <MessageCircle className="w-6 h-6 mr-2" />
        WhatsApp
      </Button>

      {/* Call Button */}
      <Button
        variant="luxury"
        size="lg"
        className="rounded-full shadow-luxury hover:scale-110 transition-all duration-300"
        onClick={() => window.open('tel:+917078136499', '_self')}
      >
        <Phone className="w-6 h-6 mr-2" />
        Call Now
      </Button>

      {/* Delivery Info */}
      <div className="card-glass p-3 max-w-xs">
        <div className="flex items-center space-x-2 mb-2">
          <Truck className="w-4 h-4 text-gold" />
          <span className="text-sm font-medium text-gradient-gold">
            All India Delivery
          </span>
        </div>
        <p className="text-xs text-muted-foreground">
          DTDC • GATI • VRL Transport
        </p>
      </div>
    </div>
  );
};

export default FloatingContacts;