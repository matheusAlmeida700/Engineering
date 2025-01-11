import { Shield, Settings, Gauge, Cog } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const createService = (title: string, description: string, imageUrl: string, icon: any, longDescription: string, faqs: any[], testimonials: any[]) => ({
  title,
  description,
  imageUrl,
  icon,
  longDescription,
  faqs,
  testimonials,
});

export const services = [
  createService(
    "Conformidade com NR12",
    "Avaliações abrangentes de segurança de máquinas e soluções de conformidade",
    "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
    Shield,
    "Nosso serviço de conformidade com NR12 garante que suas máquinas atendam a todos os padrões de segurança. Realizamos avaliações detalhadas e fornecemos relatórios completos com recomendações.",
    [
      { question: "O que é a NR12?", answer: "A NR12 é uma norma regulamentadora brasileira que estabelece requisitos de segurança para máquinas e equipamentos." },
      { question: "Com que frequência devem ser feitas as avaliações de NR12?", answer: "As avaliações devem ser feitas anualmente ou sempre que modificações significativas forem feitas nos equipamentos." }
    ],
    [
      { text: "A avaliação da NR12 nos ajudou a identificar e resolver problemas críticos de segurança.", author: "John Smith", company: "Industrial Solutions Ltd" },
      { text: "Serviço profissional que garantiu nossa conformidade total com os padrões de segurança.", author: "Maria Garcia", company: "Manufacturing Co." }
    ]
  ),
  createService(
    "Serviços NR13",
    "Inspeção e avaliação especializada com certificação para vasos de pressão",
    "https://www.officenr.com.br/blog/wp-content/uploads/2020/07/a-portrait-of-an-industrial-man-engineer-with-smar-BHPUKGA_3-scaled.jpg",
    Gauge,
    "Nossos serviços NR13 incluem inspeção e certificação abrangentes de vasos de pressão, garantindo segurança e conformidade com todos os requisitos regulamentares.",
    [
      { question: "Quais equipamentos precisam de certificação NR13?", answer: "Caldeiras, vasos de pressão e sistemas de tubulação precisam de certificação NR13." },
      { question: "Qual é a validade da certificação NR13?", answer: "A validade da certificação varia de acordo com o tipo de equipamento e as condições de uso, geralmente de 12 a 24 meses." }
    ],
    [
      { text: "Processo de inspeção minucioso com documentação detalhada.", author: "Carlos Rodriguez", company: "Energy Systems Inc" },
      {text: "Excelente serviço, com um processo bem estruturado e documentação clara.", author: "Fernanda Silva", company: "Tech Solutions Ltda"}
    ]
  ),
  createService(
    "Inspeção de Equipamentos",
    "Avaliação detalhada de equipamentos e serviços de manutenção",
    "https://nr12.schmersal.com.br/news_images/41.jpg",
    Settings,
    "Oferecemos inspeções detalhadas de equipamentos utilizando ferramentas diagnósticas avançadas para garantir desempenho e segurança ideais.",
    [
      { question: "Quais tipos de equipamentos vocês inspecionam?", answer: "Inspecionamos máquinas industriais, equipamentos de fabricação e sistemas de segurança." },
      { question: "O que está incluído na inspeção?", answer: "Nossas inspeções cobrem componentes mecânicos, sistemas elétricos, recursos de segurança e eficiência operacional." }
    ],
    [
      { text: "Inspecções regulares reduziram significativamente nossos custos de manutenção.", author: "Sarah Johnson", company: "Tech Manufacturing" },
      {text: "Com a inspeção de equipamentos, conseguimos antecipar problemas e evitar paradas inesperadas.", author: "Lucas Almeida", company: "Indústria Forte"}
    ]
  ),
  createService(
    "Soluções Técnicas",
    "Soluções de engenharia personalizadas para desafios complexos",
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    Cog,
    "Desenvolvemos soluções técnicas sob medida para enfrentar seus desafios específicos de engenharia, melhorando a eficiência e a segurança.",
    [
      { question: "Como vocês abordam soluções personalizadas?", answer: "Analisamos suas necessidades específicas, desenvolvemos um plano detalhado e implementamos soluções com suporte contínuo." }
    ],
    [
      { text: "A solução personalizada deles aumentou nossa eficiência de produção em 30%.", author: "Michael Chang", company: "Innovation Corp" },
      { text: "A solução técnica implementada otimizou nossos processos e melhorou a qualidade em 20%.", author: "Tatiane Costa", company: "Tech Innovations Ltda" }
    ]
  )
];

export const Services = ({id}) => {
  const navigate = useNavigate();

  return (
    <section id={id} className="py-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-down">
          <h2 className="text-3xl font-bold text-primary mb-4">Nossos Serviços</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Oferecemos soluções completas em engenharia com foco em segurança,
            conformidade e excelência.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 animate-fade-up cursor-pointer overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => navigate(`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`)}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.imageUrl} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" 
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Button 
                  className="w-full group-hover:bg-primary-700 transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`);
                  }}
                >
                  Saiba Mais
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
