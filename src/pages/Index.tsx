import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import ReviewsSection from "@/components/home/ReviewsSection";
import ServicesSection from "@/components/home/ServicesSection";
import StrengthsSection from "@/components/home/StrengthsSection";
import FAQSection from "@/components/home/FAQSection";
import ContactCTASection from "@/components/home/ContactCTASection";
import { SITE_CONFIG } from "@/config/siteConfig";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Update document title
    document.title = SITE_CONFIG.seo.title;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", SITE_CONFIG.seo.description);
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = SITE_CONFIG.seo.description;
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ReviewsSection />
        <ServicesSection />
        <StrengthsSection />
        <FAQSection />
        <ContactCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
