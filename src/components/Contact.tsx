import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, Send, Sparkles } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Service Areas",
      details: ["All India Home Delivery", "DTDC Courier Service", "GATI & VRL Transport"],
      gradient: "from-primary to-primary-light"
    },
    {
      icon: Phone,
      title: "Contact Numbers",
      details: ["Main: 7078136499", "Sameer: 9758504359", "WhatsApp: 7078136499"],
      gradient: "from-gold to-gold-dark"
    },
    {
      icon: Mail,
      title: "Quick Contact",
      details: ["WhatsApp: wa.me/+917078136499", "Call for instant quotes", "Wholesale pricing available"],
      gradient: "from-accent to-accent-dark"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Sunday: 9:00 AM - 9:00 PM", "Festival Season: Extended Hours", "Emergency: Call anytime"],
      gradient: "from-crystal to-crystal-dark"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-crystal-light/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-glass-bg backdrop-blur-md border border-glass-border rounded-full px-6 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-gold mr-2" />
            <span className="text-sm font-medium text-gradient-gold">
              Get In Touch
            </span>
          </div>
          
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-gradient-luxury mb-6">
            Contact Our Wedding Experts
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready for your dream wedding or event? Contact us for wholesale prices, 
            All India delivery, and expert decoration services.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="card-glass border-0 shadow-luxury">
              <CardContent className="p-8">
                <h3 className="font-playfair text-2xl font-bold text-gradient-luxury mb-6">
                  Send us a Message
                </h3>
                
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">
                        First Name *
                      </label>
                      <Input 
                        placeholder="Enter your first name"
                        className="border-glass-border bg-glass-bg backdrop-blur-md"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">
                        Last Name *
                      </label>
                      <Input 
                        placeholder="Enter your last name"
                        className="border-glass-border bg-glass-bg backdrop-blur-md"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">
                        Email Address *
                      </label>
                      <Input 
                        type="email"
                        placeholder="your.email@example.com"
                        className="border-glass-border bg-glass-bg backdrop-blur-md"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">
                        Phone Number
                      </label>
                      <Input 
                        placeholder="+1 (555) 123-4567"
                        className="border-glass-border bg-glass-bg backdrop-blur-md"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Subject *
                    </label>
                    <Input 
                      placeholder="How can we help you?"
                      className="border-glass-border bg-glass-bg backdrop-blur-md"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Message *
                    </label>
                    <Textarea 
                      placeholder="Tell us about your project or requirements..."
                      rows={6}
                      className="border-glass-border bg-glass-bg backdrop-blur-md resize-none"
                    />
                  </div>

                  <Button variant="luxury" size="xl" className="w-full group">
                    <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div
                  key={index}
                  className="card-glass p-6 hover-lift"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${info.gradient} rounded-xl flex items-center justify-center mb-4 shadow-gold`}>
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  
                  <h3 className="font-playfair text-lg font-bold text-foreground mb-3">
                    {info.title}
                  </h3>
                  
                  <div className="space-y-1">
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-sm text-muted-foreground">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              );
            })}

            {/* Quick Quote */}
            <div className="card-glass p-6 bg-gold-gradient">
              <h3 className="font-playfair text-lg font-bold text-primary-dark mb-3">
                WhatsApp for Quick Response
              </h3>
              <p className="text-primary-dark/80 text-sm mb-4">
                Get instant quotes and see our latest wedding collection on WhatsApp.
              </p>
              <Button 
                variant="crystal" 
                className="w-full"
                onClick={() => window.open('https://wa.me/+917078136499', '_blank')}
              >
                WhatsApp: 7078136499
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;