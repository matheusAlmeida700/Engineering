import { Link } from "react-scroll";
import { SOCIAL_LINKS } from "@/lib/socialLinks";

const MENU_ITEMS = [
  {
    title: "Serviços",
    items: [
      "Conformidade NR12",
      "Serviços NR13",
      "Inspeção de Equipamentos",
      "Soluções Técnicas",
    ],
  },
  {
    title: "Empresa",
    items: ["Sobre Nós", "Projetos", "Contato"],
  },
];

const getLinkTarget = (item: string) =>
  item === "Conformidade NR12" ||
  item === "Serviços NR13" ||
  item === "Inspeção de Equipamentos" ||
  item === "Soluções Técnicas"
    ? "services"
    : item === "Sobre Nós"
    ? "about"
    : item === "Projetos"
    ? "portfolio"
    : "contact";

const FooterMenu = ({ title, items }: { title: string; items: string[] }) => (
  <div>
    <h3 className="text-xl font-bold mb-4">{title}</h3>
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item}>
          <Link
            to={getLinkTarget(item)}
            smooth={true}
            duration={700}
            className="cursor-pointer text-gray-300 hover:text-white transition-colors"
          >
            {item}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const FooterSocialLinks = ({
  phone,
  email,
  linkedin,
  instagram,
}: {
  phone: string;
  email: string;
  linkedin: string;
  instagram: string;
}) => (
  <div>
    <h3 className="text-xl font-bold mb-4">Conectar</h3>
    <div className="flex space-x-4">
      {SOCIAL_LINKS.map(({ href, icon, ariaLabel }) => (
        <a
          key={ariaLabel}
          href={href}
          target="_blank"
          className="text-gray-300 hover:text-white transition-colors"
          aria-label={ariaLabel}
        >
          {icon}
        </a>
      ))}
    </div>
  </div>
);

export const Footer = () => {
  const { VITE_WHATSAPP_PHONE, VITE_EMAIL_ADDRESS, VITE_LINKEDIN_URL, VITE_INSTAGRAM_URL } = import.meta.env;

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Engineering</h3>
            <p className="text-gray-300">
              Serviços profissionais de engenharia com foco em segurança e
              excelência.
            </p>
          </div>

          {MENU_ITEMS.map(({ title, items }) => (
            <FooterMenu key={title} title={title} items={items} />
          ))}

          <FooterSocialLinks
            phone={VITE_WHATSAPP_PHONE}
            email={VITE_EMAIL_ADDRESS}
            linkedin={VITE_LINKEDIN_URL}
            instagram={VITE_INSTAGRAM_URL}
          />
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-300">
            © {new Date().getFullYear()} Engineering. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
