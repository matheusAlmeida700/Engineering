import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Building, ArrowRight } from "lucide-react";


export const Achievements = () => {
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

  return (
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
  );
};
