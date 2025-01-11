import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const portfolioItems = [
  {
    title: "Modernização de Linha de Produção",
    description: "Implementação de sistemas de segurança NR12 em indústria alimentícia",
    image: "https://www.engecondor.com.br/wp-content/uploads/2023/03/obra-ou-reformas-preciso-de-um-engenheiro-civil.png",
    client: "Indústria Alimentícia ABC",
    result: "Redução de 75% nos incidentes de segurança"
  },
  {
    title: "Certificação NR13",
    description: "Inspeção e certificação de vasos de pressão em planta petroquímica",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
    client: "Petroquímica XYZ",
    result: "Conformidade com normas regulatórias"
  },
  {
    title: "Automação Industrial",
    description: "Projeto e implementação de sistema automatizado de controle",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    client: "Manufatura Tech",
    result: "Aumento de 40% na eficiência produtiva"
  }
];

export const Portfolio = ({id}) => {
  const navigate = useNavigate();

  return (
    <div id={id} className="bg-gray-50 px-4 py-12">
      
        <h1 className="text-3xl font-bold text-center text-primary mb-12 animate-fade-down">
          Nossos Projetos
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <Card 
              key={index}
              className="overflow-hidden hover:shadow-lg transition-shadow duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="space-y-2">
                  <p className="text-sm"><strong>Cliente:</strong> {item.client}</p>
                  <p className="text-sm"><strong>Resultado:</strong> {item.result}</p>
                </div>
                <Button className="w-full mt-4 group hover:bg-primary-600" onClick={() => navigate(`/portfolio/${item.title.toLowerCase().replace(/\s+/g, "-")}`)}>
                  Ver Detalhes
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
    </div>
  );
};