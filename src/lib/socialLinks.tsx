import { Phone, Mail, Linkedin, Instagram } from "lucide-react";

export const SOCIAL_LINKS = [
    { href: `https://wa.me/${import.meta.env.VITE_WHATSAPP_PHONE}`, icon: <Phone className="h-6 w-6" />, ariaLabel: "Whatsapp" },
    { href: `mailto:${import.meta.env.VITE_EMAIL_ADDRESS}`, icon: <Mail className="h-6 w-6" />, ariaLabel: "Email" },
  ];
  