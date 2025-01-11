import { Award, Users, Zap, CheckCircle } from "lucide-react";

const features = [
  {
    title: "Time Especializado",
    description:
      "Profissionais altamente qualificados com anos de experiência na indústria",
    icon: Users,
  },
  {
    title: "Excelência Certificada",
    description: "Total conformidade com os padrões e certificações da indústria",
    icon: Award,
  },
  {
    title: "Atendimento Rápido",
    description: "Tempos de resposta rápidos e entrega de serviços eficientes",
    icon: Zap,
  },
  {
    title: "Qualidade Garantida",
    description: "Controle rigoroso de qualidade e relatórios detalhados",
    icon: CheckCircle,
  },
];

export const WhyChooseUs = ({id}) => {
  return (
    <section id={id} className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Por que nos escolher?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Nós combinamos expertise, inovação e dedicação para oferecer
            soluções de engenharia excepcionais.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="text-center group hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary-100 text-primary-600 mb-4 group-hover:bg-primary-200 transition-colors">
                <feature.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
