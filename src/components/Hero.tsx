import { Button } from "@/components/ui/button";
import { Link } from "react-scroll";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

const heroImages = [
  {
    url: "https://www.institutodeengenharia.org.br/site/wp-content/uploads/2020/06/ed400562edd9d39528163ed135a86bd3.jpg",
    title: "Excelência em Engenharia",
    subtitle: "Soluções técnicas profissionais para suas necessidades industriais",
  },
  {
    url: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
    title: "Inovação & Segurança",
    subtitle: "Liderando os padrões de segurança industrial no Brasil",
  },
  {
    url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    title: "Expertise Técnica",
    subtitle: "Soluções completas em engenharia industrial",
  },
  {
    url: "https://www.cbinspecoes.com.br/template/imagens/palavras-chave/inspecao-de-equipamentos-industriais/1.jpg",
    title: "Inspeção de Equipamentos",
    subtitle: "Garantindo a confiabilidade e segurança dos equipamentos industriais",
  },
];

export const Hero = ({ id }) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % heroImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  const whatsappPhone = import.meta.env.VITE_WHATSAPP_PHONE;
  const whatsappLinkWithMessage = `https://wa.me/${whatsappPhone}?text=Ol%C3%A1,%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20de%20seus%20servi%C3%A7os.%20Poderia%20me%20ajudar%20com%20mais%20informa%C3%A7%C3%B5es%3F`;

  return (
    <div id={id} className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === currentImage ? "opacity-100" : "opacity-0"}`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center transform scale-110"
            style={{ backgroundImage: `url(${image.url})`, transform: `scale(1.1)` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70" />
        </div>
      ))}

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-down">
            {heroImages[currentImage].title}
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 animate-fade-up">
            {heroImages[currentImage].subtitle}
          </p>
          <div className="flex gap-4 justify-center animate-fade-up">
            <Button
              size="lg"
              className="bg-white text-primary border-2 border-white hover:bg-transparent hover:text-white transform hover:scale-105 transition-all duration-300"
            >
              <a href={whatsappLinkWithMessage} target="_blank">Solicitar Orçamento</a>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Link to="services" smooth={true} duration={700}>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent text-white border-2 border-white hover:bg-white hover:text-primary transform hover:scale-105 transition-all duration-300"
              >
                Saiba Mais
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <button
        onClick={prevImage}
        className="hidden md:block absolute z-10 left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
        aria-label="Imagem anterior"
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>
      <button
        onClick={nextImage}
        className="hidden md:block absolute z-10 right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
        aria-label="Próxima imagem"
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </button>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full animate-scroll" />
        </div>
      </div>
    </div>
  );
};
