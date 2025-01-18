import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Portfolio } from "@/components/Portfolio";
import { Achievements } from "@/components/Achievements";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
// import { Clients } from "@/components/Clients";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero id="hero" />
      <Services id="services" />
      <WhyChooseUs id="about" />
      <Portfolio id="portfolio" />
      <Achievements />
      {/* <Clients /> */}
      <Contact id="contact" />
      <Footer />
    </div>
  );
};

export default Index;
