import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { services } from "@/components/Services";

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const service = services.find(
    (s) => s.title.toLowerCase().replace(/\s+/g, "-") === serviceId
  );

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Serviço não encontrado</h1>
          <Button onClick={() => navigate("/")}>Voltar para o Início</Button>
        </div>
      </div>
    );
  }

  const IconComponent = service.icon;

  const processSteps = [
    "Avaliação Inicial",
    "Inspeção Detalhada",
    "Documentação",
    "Implementação",
    "Acompanhamento",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto py-4">
        <Button
          variant="ghost"
          className="mb-8 flex items-center gap-2"
          onClick={() => navigate("/")}
        >
          <ArrowLeft className="h-4 w-4" />
          Voltar para Serviços
        </Button>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6 animate-fade-up">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-xl bg-primary-100 flex items-center justify-center">
                <IconComponent className="h-10 w-10 text-primary-600" />
              </div>
              <h1 className="text-3xl font-bold text-primary">{service.title}</h1>
            </div>

            <p className="text-md text-gray-600">{service.longDescription}</p>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Cronograma do Processo</h2>
              <div className="relative">
                <div className="absolute left-4 top-0 h-full w-0.5 bg-primary-100"></div>
                <div className="space-y-8">
                  {processSteps.map((step, index) => (
                    <div key={step} className="relative pl-12">
                      <div className="absolute left-0 top-1.5 h-8 w-8 rounded-full bg-primary-100 flex items-center justify-center">
                        <div className="h-4 w-4 rounded-full bg-primary-600"></div>
                      </div>
                      <h3 className="text-lg font-semibold">{step}</h3>
                      <p className="text-gray-600">Passo {index + 1} de nosso processo de serviço</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8 animate-fade-up" style={{ animationDelay: "200ms" }}>
            <div className="bg-white rounded-xl shadow-lg p-6 space-y-4">
              <h2 className="text-2xl font-semibold">Perguntas Frequentes</h2>
              <div className="space-y-4">
                {service.faqs.map((faq, index) => (
                  <div key={index} className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                    <h3 className="font-medium text-primary">{faq.question}</h3>
                    <p className="mt-2 text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 space-y-4">
              <h2 className="text-2xl font-semibold">Depoimentos de Clientes</h2>
              <Carousel className="w-full overflow-hidden md:overflow-visible">
                <CarouselContent>
                  {service.testimonials.map((testimonial, index) => (
                    <CarouselItem key={index}>
                      <div className="p-6 bg-primary-50 rounded-xl">
                        <p className="text-lg italic text-gray-600 mb-4">{testimonial.text}</p>
                        <div>
                          <p className="font-medium text-primary">{testimonial.author}</p>
                          <p className="text-sm text-gray-500">{testimonial.company}</p>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
