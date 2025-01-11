import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, Instagram, MapPin } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { SOCIAL_LINKS } from "@/lib/socialLinks";

export const Contact = ({ id }) => {
  const handleRequestService = () => {
    toast({
      title: "Mensagem Enviada com Sucesso",
      description: `Obrigado por entrar em contato conosco! Em breve, nossa equipe estará em contato para atender à sua solicitação.`,
    });
  };

  const emailAddress = import.meta.env.VITE_EMAIL_ADDRESS;
  const emailLink = `mailto:${emailAddress}`;
  const formSubmitLink = `https://formsubmit.co/${emailAddress}`;
  const whatsappPhone = import.meta.env.VITE_WHATSAPP_PHONE;
  const whatsappLink = `https://wa.me/${whatsappPhone}`;

  const filteredSocialLinks = SOCIAL_LINKS.filter(link => 
    link.ariaLabel === "Whatsapp" || 
    link.ariaLabel === "Email" || 
    link.ariaLabel === "Instagram"
  );

  const contactItems = [
    { icon: <Phone className="h-6 w-6 text-primary-600" />, title: "Whatsapp", content: <a href={whatsappLink} target="_blank" className="text-gray-600 hover:text-primary-600">+55 11 12345-6789</a> },
    { icon: <Mail className="h-6 w-6 text-primary-600" />, title: "Email", content: <a href={emailLink} target="_blank" className="text-gray-600 hover:text-primary-600">contato@engineering.com</a> },
    { icon: <Instagram className="h-6 w-6 text-primary-600" />, title: "Instagram", content: <a href={filteredSocialLinks[2]?.href} target="_blank" className="text-gray-600 hover:text-primary-600">@engineering_main</a> },
    { icon: <MapPin className="h-6 w-6 text-primary-600" />, title: "Endereço", content: <p className="text-gray-600">123 Engineering Street<br />Tech City, TC 12345</p> }
  ];

  return (
    <section id={id} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Contate-nos</h2>
            <p className="text-gray-600">Entre em contato com nossa equipe para soluções profissionais em engenharia.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <form action={formSubmitLink} method="POST" className="space-y-6" onSubmit={handleRequestService}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input placeholder="Seu Nome" name="name" required />
                  <Input type="email" placeholder="Seu Email" name="email" required />
                </div>
                <Textarea name="message" placeholder="Sua Mensagem" className="min-h-[150px] resize-none" maxLength={500} required />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value="http://localhost:8080/" />
                <Button type="submit" size="lg" className="w-full md:w-auto hover:bg-primary-600">Enviar</Button>
              </form>
            </div>
            <div className="space-y-6">
              {contactItems.map(({ icon, title, content }, index) => (
                <div key={index} className="flex items-start space-x-4">
                  {icon}
                  <div>
                    <h3 className="font-semibold mb-1">{title}</h3>
                    {content}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
