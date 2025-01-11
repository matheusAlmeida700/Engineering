import React from 'react'
import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Menu, X, Mail, Linkedin, Instagram, Phone } from "lucide-react";
import { Button } from "./ui/button";
import { SOCIAL_LINKS } from "@/lib/socialLinks";

const NAV_ITEMS = [
  { to: "hero", label: "Home" },
  { to: "services", label: "Serviços" },
  { to: "about", label: "Sobre" },
  { to: "contact", label: "Contato" },
];

const navLinkClass =
  "cursor-pointer text-white uppercase font-semibold hover:text-primary-600 transition-colors";

const handleMobileMenuToggle = (
  setIsMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
) => {
  setIsMobileMenuOpen((prev) => !prev);
};

const whatsappLinkWithMessage = `https://wa.me/${
  import.meta.env.VITE_WHATSAPP_PHONE
}?text=Ol%C3%A1,%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20de%20seus%20servi%C3%A7os.%20Poderia%20me%20ajudar%20com%20mais%20informa%C3%A7%C3%B5es%3F`;

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isMobileMenuOpen || isScrolled
          ? "bg-slate-800 shadow-md py-3"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="cursor-pointer text-2xl font-bold text-white">
            Engineering
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                smooth
                duration={700}
                className={navLinkClass}
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            {SOCIAL_LINKS.map(({ href, icon, ariaLabel }) => (
              <a
                key={ariaLabel}
                href={href}
                target="_blank"
                className="text-white hover:text-primary-600 transition-colors"
                aria-label={ariaLabel}
              >
                {icon}
              </a>
            ))}
            <a
              href={whatsappLinkWithMessage}
              target="_blank"
              className="ml-4 text-white hover:text-primary-600 transition-colors"
            >
              <Button className="bg-trasparent border-2 border-white hover:bg-primary-600 hover:border-transparent transition-all">
                Solicitar orçamento
              </Button>
            </a>
          </div>

          <button
            className="md:hidden text-primary"
            onClick={() => handleMobileMenuToggle(setIsMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="text-white h-7 w-7" />
            ) : (
              <Menu className="text-white h-7 w-7" />
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-8 pb-4">
            <nav className="flex flex-col space-y-4">
              {NAV_ITEMS.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  smooth
                  duration={700}
                  className={`${navLinkClass} text-white`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {label}
                </Link>
              ))}
              <div className="flex items-center space-x-4 py-2">
                {SOCIAL_LINKS.map(({ href, icon, ariaLabel }) => (
                  <a
                    key={ariaLabel}
                    href={href}
                    target="_blank"
                    className="text-white hover:text-primary-600 transition-colors"
                    aria-label={ariaLabel}
                  >
                    {icon}
                  </a>
                ))}
              </div>
              <a href={whatsappLinkWithMessage} target="_blank">
                <Button className="w-full text-md text-primary bg-white border-2 border-white hover:bg-transparent hover:text-white transition-colors py-5">
                  Solicitar Orçamento
                </Button>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
