import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Portfolio } from "@/components/Portfolio";
import {Contact} from "@/components/Contact";
import {Footer} from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Building, ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const clients = [
  {
    logo: "https://logodownload.org/wp-content/uploads/2014/07/suzano-logo-0.png",
    name: "Suzano",
  },
  {
    logo: "https://logospng.org/download/eletrobras/logo-eletrobras-2048.png",
    name: "Petrobras",
  },
  {
    logo: "https://humanhand.org/sites/default/files/styles/large/public/2021-11/basf%20empresa%20amiga%20human%20hand%20org.png?itok=0WaRIn2g",
    name: "BASF",
  },
  {
    logo: "https://logospng.org/download/engie/logo-engie-2048.png",
    name: "Engie",
  },
  {
    logo: "https://logodownload.org/wp-content/uploads/2014/05/vale-logo-0.png",
    name: "Vale",
  },
  {
    logo: "https://cdn.worldvectorlogo.com/logos/siemens-3.svg",
    name: "Siemens",
  },
];

const achievements = [
  {
    icon: Award,
    title: "Excelência Certificada",
    description: "Empresa certificada ISO 9001",
    count: "100%",
  },
  {
    icon: Users,
    title: "Equipe Especializada",
    description: "Mais de 20 anos de experiência combinada",
    count: "20+",
  },
  {
    icon: Building,
    title: "Projetos Realizados",
    description: "Projetos bem-sucedidos em todo o Brasil",
    count: "500+",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero id="hero" />
      <Services id="services" />
      <WhyChooseUs id="about" />
      <Portfolio id="portfolio" />

      {/* Achievements Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-primary mb-12 animate-fade-down">
            Conquistas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement) => (
              <Card
                key={achievement.title}
                className="text-center hover:shadow-lg transition-shadow duration-300 animate-fade-up hover:-translate-y-1"
              >
                <CardContent className="pt-6">
                  <div className="mb-4 flex justify-center">
                    <achievement.icon className="w-12 h-12 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">
                    {achievement.count}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-600">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-primary mb-12 animate-fade-down">
            Principais Clientes
          </h2>

          <Carousel
            className="w-full relative overflow-hidden"
            opts={{
              slidesToScroll: 1,
              loop: true,
              align: "start",
            }}
          >
            <CarouselContent>
              {clients.map((client) => (
                <CarouselItem
                  key={client.name}
                  className="w-full md:basis-1/4 shrink-0 grow-0"
                >
                  <div
                    key={client.name}
                    className="group relative h-44 overflow-hidden animate-fade-up mx-4"
                  >
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10" />
            <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10" />
          </Carousel>
        </div>
      </section>

      <Contact id="contact" />
      <Footer />
    </div>
  );
};

export default Index;
