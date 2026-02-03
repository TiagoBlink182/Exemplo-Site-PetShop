import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProductsSection from "@/components/ProductsSection";
import PromoBanner from "@/components/PromoBanner";
import PricingSection from "@/components/PricingSection";
import TeamSection from "@/components/TeamSection";
import GallerySection from "@/components/GallerySection";
import BlogSection from "@/components/BlogSection";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <AboutSection />
      <ServicesSection />
      <ProductsSection />
      <PromoBanner />
      <PricingSection />
      <TeamSection />
      <GallerySection />
      <BlogSection />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
