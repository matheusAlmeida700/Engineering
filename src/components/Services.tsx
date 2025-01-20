import { useNavigate } from "react-router-dom";
import { Shield, Settings, Gauge, Cog } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const createService = (
  title: string,
  description: string,
  imageUrl: string,
  icon: any,
  longDescription: string,
  faqs: any[],
  testimonials: any[]
) => ({
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
    "https://workcursosetreinamentos.com.br/wp-content/uploads/2023/07/NR-12.jpeg",
    Shield,
    "Nosso serviço de conformidade com NR12 garante que suas máquinas atendam a todos os padrões de segurança. Realizamos avaliações detalhadas e fornecemos relatórios completos com recomendações.",
    [
      {
        question: "O que é a NR12?",
        answer:
          "A NR12 é uma norma regulamentadora brasileira que estabelece requisitos de segurança para máquinas e equipamentos.",
      },
      {
        question: "Com que frequência devem ser feitas as avaliações de NR12?",
        answer:
          "As avaliações devem ser feitas anualmente ou sempre que modificações significativas forem feitas nos equipamentos.",
      },
    ],
    [
      {
        text: "A avaliação da NR12 nos ajudou a identificar e resolver problemas críticos de segurança.",
        author: "John Smith",
        company: "Industrial Solutions Ltd",
      },
      {
        text: "Serviço profissional que garantiu nossa conformidade total com os padrões de segurança.",
        author: "Maria Garcia",
        company: "Manufacturing Co.",
      },
    ]
  ),
  createService(
    "Serviços NR13",
    "Inspeção e avaliação especializada com certificação para vasos de pressão",
    "https://www.officenr.com.br/blog/wp-content/uploads/2020/07/a-portrait-of-an-industrial-man-engineer-with-smar-BHPUKGA_3-scaled.jpg",
    Gauge,
    "Nossos serviços NR13 incluem inspeção e certificação abrangentes de vasos de pressão, garantindo segurança e conformidade com todos os requisitos regulamentares.",
    [
      {
        question: "Quais equipamentos precisam de certificação NR13?",
        answer:
          "Caldeiras, vasos de pressão e sistemas de tubulação precisam de certificação NR13.",
      },
      {
        question: "Qual é a validade da certificação NR13?",
        answer:
          "A validade da certificação varia de acordo com o tipo de equipamento e as condições de uso, geralmente de 12 a 24 meses.",
      },
    ],
    [
      {
        text: "Processo de inspeção minucioso com documentação detalhada.",
        author: "Carlos Rodriguez",
        company: "Energy Systems Inc",
      },
      {
        text: "Excelente serviço, com um processo bem estruturado e documentação clara.",
        author: "Fernanda Silva",
        company: "Tech Solutions Ltda",
      },
    ]
  ),
  createService(
    "Inspeção de Equipamentos",
    "Avaliação detalhada de equipamentos e serviços de manutenção",
    "https://nr12.schmersal.com.br/news_images/41.jpg",
    Settings,
    "Oferecemos inspeções detalhadas de equipamentos utilizando ferramentas diagnósticas avançadas para garantir desempenho e segurança ideais.",
    [
      {
        question: "Quais tipos de equipamentos vocês inspecionam?",
        answer:
          "Inspecionamos máquinas industriais, equipamentos de fabricação e sistemas de segurança.",
      },
      {
        question: "O que está incluído na inspeção?",
        answer:
          "Nossas inspeções cobrem componentes mecânicos, sistemas elétricos, recursos de segurança e eficiência operacional.",
      },
    ],
    [
      {
        text: "Inspeções regulares reduziram significativamente nossos custos de manutenção.",
        author: "Sarah Johnson",
        company: "Tech Manufacturing",
      },
      {
        text: "Com a inspeção de equipamentos, conseguimos antecipar problemas e evitar paradas inesperadas.",
        author: "Lucas Almeida",
        company: "Indústria Forte",
      },
    ]
  ),
  createService(
    "Soluções Técnicas",
    "Soluções de engenharia personalizadas para desafios complexos",
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    Cog,
    "Desenvolvemos soluções técnicas sob medida para enfrentar seus desafios específicos de engenharia, melhorando a eficiência e a segurança.",
    [
      {
        question: "Como vocês abordam soluções personalizadas?",
        answer:
          "Analisamos suas necessidades específicas, desenvolvemos um plano detalhado e implementamos soluções com suporte contínuo.",
      },
    ],
    [
      {
        text: "A solução personalizada deles aumentou nossa eficiência de produção em 30%.",
        author: "Michael Chang",
        company: "Innovation Corp",
      },
      {
        text: "A solução técnica implementada otimizou nossos processos e melhorou a qualidade em 20%.",
        author: "Tatiane Costa",
        company: "Tech Innovations Ltda",
      },
    ]
  ),
  createService(
    "Inspeção de Caldeiras",
    "Avaliação detalhada de caldeiras para garantir eficiência e segurança",
    "https://blog.mbxmaquinas.com.br/wp-content/uploads/2022/02/conheca-tudo-sobre-o-que-e-a-inspecao-nr-13-1024x597.png",
    Shield,
    "Nossos especialistas realizam inspeções completas em caldeiras, verificando segurança, eficiência e conformidade com as normas vigentes.",
    [
      {
        question: "Por que é importante inspecionar caldeiras regularmente?",
        answer:
          "As inspeções garantem a segurança operacional, evitando acidentes e melhorando a eficiência energética.",
      },
      {
        question: "Com que frequência as caldeiras devem ser inspecionadas?",
        answer:
          "A recomendação é realizar inspeções anuais ou conforme determinado pela legislação local.",
      },
    ],
    [
      {
        text: "O serviço foi rápido e eficaz, garantindo a segurança da nossa operação.",
        author: "Carlos Lima",
        company: "Indústria Caldeiraria",
      },
      {
        text: "Muito profissionais, identificaram problemas que ninguém tinha notado antes.",
        author: "Ana Souza",
        company: "Tech Boilers Ltda",
      },
    ]
  ),
  createService(
    "Calibração de Válvulas",
    "Ajuste preciso para garantir o funcionamento ideal das válvulas de segurança",
    "https://www.nepin.com.br/wp-content/uploads/2023/09/Como-e-feita-a-Calibracao-das-Valvulas-de-Seguranca.jpeg.jpg",
    Gauge,
    "Oferecemos calibração precisa de válvulas de segurança, assegurando que elas operem de acordo com os parâmetros técnicos exigidos.",
    [
      {
        question: "O que é a calibração de válvulas?",
        answer:
          "É o processo de ajuste das válvulas para garantir que funcionem corretamente em condições de pressão específicas.",
      },
      {
        question: "Com que frequência devo calibrar as válvulas de segurança?",
        answer:
          "Recomenda-se realizar a calibração anualmente ou após eventos que possam afetar sua operação.",
      },
    ],
    [
      {
        text: "Após a calibração, nossas válvulas estão funcionando perfeitamente.",
        author: "Pedro Silva",
        company: "Safety Systems Co.",
      },
      {
        text: "Serviço excelente, agora operamos com muito mais segurança.",
        author: "Laura Gomes",
        company: "Indústria Forte",
      },
    ]
  ),
  createService(
    "Apreciação de Risco NR12",
    "Identificação de riscos e recomendações para adequação às normas de segurança",
    "https://grupocsx.com.br/wp-content/uploads/2021/12/apreciacao-de-risco-1.png",
    Settings,
    "Realizamos uma análise detalhada de riscos em máquinas e equipamentos, identificando não conformidades e propondo medidas corretivas.",
    [
      {
        question: "O que é a apreciação de risco?",
        answer:
          "É o processo de análise para identificar e mitigar riscos em máquinas e equipamentos.",
      },
      {
        question: "Por que a apreciação de risco é importante?",
        answer:
          "Ela é essencial para prevenir acidentes, proteger trabalhadores e garantir conformidade com a legislação.",
      },
    ],
    [
      {
        text: "O relatório de apreciação de risco foi fundamental para nossa certificação.",
        author: "Lucas Almeida",
        company: "Tech Solutions Ltda.",
      },
      {
        text: "Um serviço detalhado e eficiente, nos ajudou muito na adequação à NR12.",
        author: "Mariana Santos",
        company: "Indústria Segura",
      },
    ]
  ),
  createService(
    "Laudo de Vasos de Pressão",
    "Certificação e análise técnica de vasos de pressão",
    "https://lh5.googleusercontent.com/proxy/CAj62I4V-GOj0ofS8hNU7y8Y86uvyo2XA4Fo2fiQq4sWJj4_-BghUQwqNNo8sGuOkr_jBKk7_zUmE4Vap5XotYmljsLxh5HEUR2VxVr0UqNvN5lPDAGsr3JnLFKxig",
    Cog,
    "Emitimos laudos técnicos para vasos de pressão, garantindo conformidade com as normas regulamentadoras e segurança operacional.",
    [
      {
        question: "O que é um laudo de vasos de pressão?",
        answer:
          "É um documento técnico que atesta a condição de segurança e conformidade dos vasos de pressão.",
      },
      {
        question: "Quem pode emitir o laudo de vasos de pressão?",
        answer:
          "Somente profissionais habilitados e credenciados podem emitir este tipo de laudo.",
      },
    ],
    [
      {
        text: "O laudo nos deu a tranquilidade de operar com segurança.",
        author: "Fernanda Oliveira",
        company: "Pressão Segura Ltda.",
      },
      {
        text: "Serviço técnico impecável e dentro do prazo prometido.",
        author: "Eduardo Lima",
        company: "Energy Solutions Co.",
      },
    ]
  ),
  createService(
    "Laudo de Calibração de Válvulas",
    "Documentação técnica para a calibração de válvulas de segurança",
    "https://www.awpengenharia.com.br/blog/doutor/uploads/0/blog/2024/09/blog-calibra-ccedil-atilde-o-de-v-aacute-lvulas-de-seguran-ccedil-a-o-guia-completo-para-um-funcionamento-confi-aacute-vel-a503c1a5ea.png",
    Gauge,
    "Fornecemos laudos detalhados após a calibração de válvulas de segurança, garantindo conformidade e rastreabilidade.",
    [
      {
        question: "Por que preciso de um laudo de calibração?",
        answer:
          "O laudo garante que as válvulas estão calibradas corretamente e em conformidade com as normas técnicas.",
      },
      {
        question: "Quando devo solicitar um laudo de calibração?",
        answer:
          "Sempre que uma válvula de segurança for calibrada, um laudo deve ser emitido.",
      },
    ],
    [
      {
        text: "O laudo foi entregue rapidamente e com todas as informações necessárias.",
        author: "Jorge Pereira",
        company: "Safety Equipamentos",
      },
      {
        text: "Excelente serviço técnico com documentação detalhada.",
        author: "Cláudia Martins",
        company: "Indústria Forte",
      },
    ]
  ),
  createService(
    "Apreciação de Risco de Máquinas",
    "Identificação e análise de riscos em máquinas industriais",
    "https://www.automasafety.com.br/imagens/informacoes/servico-inspecao-maquinas-equipamentos-01.webp",
    Shield,
    "Analisamos os riscos associados às máquinas industriais, recomendando melhorias para aumentar a segurança e eficiência.",
    [
      {
        question: "Quais máquinas precisam de apreciação de risco?",
        answer:
          "Todas as máquinas que apresentam risco para os operadores ou terceiros devem ser analisadas.",
      },
      {
        question: "Qual o principal objetivo da apreciação de risco?",
        answer:
          "Garantir a segurança dos operadores e a conformidade com as normas regulamentadoras.",
      },
    ],
    [
      {
        text: "O serviço foi essencial para identificar problemas e garantir a segurança da equipe.",
        author: "Ricardo Lopes",
        company: "Industrial Tech",
      },
      {
        text: "Ótima análise, nos ajudou a melhorar significativamente nossos processos.",
        author: "Joana Dias",
        company: "Fabricação Avançada",
      },
    ]
  ),
  createService(
    "Inspeção de Guindastes",
    "Avaliação técnica completa de guindastes e seus componentes",
    "https://highbras.com.br/wp-content/uploads/2023/08/Manutencao-e-inspecao-em-Guindastes-Onshore-e-Offshore-.jpg",
    Settings,
    "Realizamos inspeções detalhadas de guindastes, avaliando suas condições operacionais e garantindo conformidade com as normas de segurança.",
    [
      {
        question: "Por que é importante inspecionar guindastes?",
        answer:
          "As inspeções previnem falhas, garantem segurança e aumentam a vida útil dos equipamentos.",
      },
      {
        question: "Com que frequência devo inspecionar guindastes?",
        answer:
          "Inspeções regulares devem ser realizadas, conforme as normas e recomendações do fabricante.",
      },
    ],
    [
      {
        text: "A inspeção foi detalhada e nos trouxe total segurança na operação.",
        author: "Paulo Henrique",
        company: "Construção Forte",
      },
      {
        text: "Serviço profissional e eficiente, muito satisfeito com o resultado.",
        author: "Marcos Silva",
        company: "Logística Avançada",
      },
    ]
  ),
  createService(
    "Projeto de Linha de Vida",
    "Desenvolvimento de sistemas de segurança para trabalhos em altura",
    "https://ageseg.com.br/upl/servicos/gal_Projetos_de_Linha_de_Vida__NR35__NBR163251_e_2._459.jpg",
    Cog,
    "Projetamos e implementamos linhas de vida para trabalhos em altura, garantindo segurança e conformidade com as normas técnicas.",
    [
      {
        question: "O que é uma linha de vida?",
        answer:
          "É um sistema de segurança projetado para proteger trabalhadores em atividades realizadas em altura.",
      },
      {
        question: "Quem pode instalar linhas de vida?",
        answer:
          "Somente profissionais habilitados devem projetar e instalar linhas de vida.",
      },
    ],
    [
      {
        text: "O projeto foi executado com excelência e trouxe total segurança para a equipe.",
        author: "Bruna Costa",
        company: "Altura Segura Ltda.",
      },
      {
        text: "Muito satisfeito com o serviço, superou nossas expectativas.",
        author: "Roberto Nunes",
        company: "Construção Forte",
      },
    ]
  ),
  createService(
    "Treinamento de Operador de Caldeira",
    "Capacitação completa para operadores de caldeira",
    "https://www.institutosc.com.br/files/1708613881caldeira.jpg",
    Shield,
    "Oferecemos treinamentos teóricos e práticos para operadores de caldeira, garantindo segurança e eficiência nas operações.",
    [
      {
        question: "Quem pode fazer o treinamento?",
        answer:
          "Qualquer pessoa que opere ou pretenda operar caldeiras em ambiente industrial.",
      },
      {
        question: "O treinamento é obrigatório?",
        answer:
          "Sim, a capacitação é obrigatória para atender as exigências legais e garantir a segurança do operador.",
      },
    ],
    [
      {
        text: "O treinamento foi muito didático e os instrutores altamente qualificados.",
        author: "José Santos",
        company: "Indústria Forte",
      },
      {
        text: "Muito bom, me senti preparado para operar caldeiras com segurança.",
        author: "Thiago Oliveira",
        company: "Energy Systems",
      },
    ]
  ),
];

export const Services = ({ id }) => {
  const navigate = useNavigate();

  return (
    <section id={id} className="py-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto md:px-16">
        <div className="text-center mb-12 animate-fade-down">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Nossos Serviços
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Oferecemos soluções completas em engenharia com foco em segurança,
            conformidade e excelência.
          </p>
        </div>
        <Carousel
          className="relative"
          opts={{
            slidesToScroll: 1,
            loop: true,
            align: "start",
          }}
        >
          <CarouselContent className="flex">
            {services.map((service, index) => (
              <CarouselItem
                key={service.title}
                className="w-full md:basis-1/3 shrink-0 grow-0"
              >
                <Card
                  className="group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 animate-fade-up cursor-pointer overflow-hidden"
                  style={{ animationDelay: `${index * 100}ms` }}
                  onClick={() =>
                    navigate(
                      `/services/${service.title
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`
                    )
                  }
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.imageUrl}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <Button
                      className="w-full group-hover:bg-primary-700 transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(
                          `/services/${service.title
                            .toLowerCase()
                            .replace(/\s+/g, "-")}`
                        );
                      }}
                    >
                      Saiba Mais
                    </Button>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2 md:-left-12" />
          <CarouselNext className="right-2 md:-right-12" />
        </Carousel>
      </div>
    </section>
  );
};
