import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const portfolioItems = [
  {
    title: "Modernização de Linha de Produção",
    description: "Modernização completa da linha de produção de uma indústria alimentícia, visando a conformidade total com a norma NR12. Incluímos a instalação de dispositivos de segurança avançados, reestruturação do layout das máquinas e treinamento da equipe para garantir um ambiente de trabalho seguro e eficiente. Como resultado, a empresa alcançou uma redução significativa nos incidentes operacionais e obteve certificação plena em segurança de máquinas.",
    image: "https://www.engecondor.com.br/wp-content/uploads/2023/03/obra-ou-reformas-preciso-de-um-engenheiro-civil.png",
    client: "Indústria Alimentícia ABC",
    result: "Redução de 75% nos incidentes de segurança"
  },
  {
    title: "Certificação NR13",
    description: "Inspeção técnica detalhada e certificação de vasos de pressão em uma das maiores plantas petroquímicas da região. O projeto incluiu testes não destrutivos, análises de integridade estrutural e adequação às normas regulamentadoras NR13. Após a implementação das correções necessárias, a planta garantiu conformidade total com as normas regulatórias e um aumento considerável na segurança operacional.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
    client: "Petroquímica XYZ",
    result: "Conformidade com normas regulatórias"
  },
  {
    title: "Automação Industrial",
    description: "Desenvolvimento e implementação de um sistema de automação industrial de ponta para uma planta de manufatura. Este sistema incluiu sensores inteligentes, integração de dados em tempo real e um painel de controle centralizado para otimização de processos. Como resultado, a planta aumentou sua eficiência produtiva em 40%, reduziu custos operacionais e passou a operar com maior previsibilidade e controle sobre os processos.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    client: "Manufatura Tech",
    result: "Aumento de 40% na eficiência produtiva"
  }
];

const ProjectDetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const project = portfolioItems.find(
    (item) => item.title.toLowerCase().replace(/\s+/g, "-") === projectId
  );

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Projeto não encontrado</h1>
          <Button onClick={() => navigate("/")}>Voltar para o Início</Button>
        </div>
      </div>
    );
  }

  const whatsappLinkWithMessage = `https://wa.me/${
    import.meta.env.VITE_WHATSAPP_PHONE
  }?text=Ol%C3%A1,%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20de%20seus%20servi%C3%A7os.%20Poderia%20me%20ajudar%20com%20mais%20informa%C3%A7%C3%B5es%3F`;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto py-4">
        <Button
          variant="ghost"
          className="mb-8 flex items-center gap-2"
          onClick={() => navigate("/")}
        >
          <ArrowLeft className="h-4 w-4" />
          Voltar para Projetos
        </Button>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-auto rounded-lg shadow-lg"
          />
          <div className="space-y-6">
            <h1 className="text-3xl font-bold">{project.title}</h1>
            <p className="text-gray-600">{project.description}</p>
            <div className="space-y-2">
              <p>
                <strong>Cliente:</strong> {project.client}
              </p>
              <p>
                <strong>Resultado:</strong> {project.result}
              </p>
            </div>
            <Button
              size="lg"
              className="w-full md:w-auto hover:bg-primary-600"
            >
              <a href={whatsappLinkWithMessage} target="_blank">Entre em Contato</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
