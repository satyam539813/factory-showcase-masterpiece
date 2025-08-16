import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProductCategories from "@/components/ProductCategories";
import FeaturedProducts from "@/components/FeaturedProducts";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingContacts from "@/components/FloatingContacts";

const Index = () => {
  return (
    <div className="min-h-screen bg-background scrollbar-luxury">
      <Navigation />
      <Hero />
      <ProductCategories />
      <FeaturedProducts />
      <About />
      <Contact />
      <Footer />
      <FloatingContacts />
    </div>
  );
};

export default Index;
