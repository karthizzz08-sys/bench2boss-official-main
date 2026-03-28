import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => (
  <main>
    <Navbar />
    <HeroSection />
    <AboutSection />
    <ServicesSection />
    <PortfolioSection />
    <WhyChooseUs />
    <ContactSection />
    <Footer />
    <WhatsAppButton />
  </main>
);

export default Index;
