import { Globe, Instagram, MessageCircle, Mail, Briefcase, Sparkles } from "lucide-react";
import automaLogo from "@/assets/automa-logo.png";
import LinkCard from "@/components/LinkCard";

const Index = () => {
  const whatsappLink = "https://wa.me/5500000000000?text=Olá! Gostaria de saber mais sobre os serviços da Automa.";

  const links = [
    {
      title: "Nosso Site",
      description: "Conheça nossos serviços e soluções",
      href: "#",
      icon: <Globe className="h-5 w-5" />,
    },
    {
      title: "Instagram",
      description: "@automa",
      href: "#",
      icon: <Instagram className="h-5 w-5" />,
    },
    {
      title: "Portfólio",
      description: "Veja nossos projetos e cases",
      href: "#",
      icon: <Briefcase className="h-5 w-5" />,
    },
    {
      title: "E-mail",
      description: "contato@automa.com",
      href: "mailto:contato@automa.com",
      icon: <Mail className="h-5 w-5" />,
    },
  ];

  return (
    <div className="relative min-h-screen bg-background flex flex-col items-center overflow-hidden">
      {/* Background gradient orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-[hsl(200,100%,10%)] opacity-30 blur-[100px]" />
        <div className="absolute top-1/3 -right-20 h-60 w-60 rounded-full bg-[hsl(270,80%,12%)] opacity-25 blur-[80px]" />
        <div className="absolute bottom-20 left-1/4 h-40 w-40 rounded-full bg-[hsl(150,10%,88%)] opacity-10 blur-[60px]" />
      </div>

      <div className="relative z-10 flex w-full max-w-md flex-col items-center px-6 py-12">
        {/* Logo & Header */}
        <div className="mb-2 flex flex-col items-center">
          <img
            src={automaLogo}
            alt="Automa"
            className="h-12 mb-6 invert"
          />
          <div className="flex items-center gap-2 mb-1">
            <Sparkles className="h-3.5 w-3.5 text-muted-foreground" />
            <p className="text-xs text-muted-foreground tracking-widest uppercase">
              Automação & Tecnologia
            </p>
          </div>
        </div>

        {/* CTA Principal */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 mb-8 flex w-full items-center justify-center gap-3 rounded-xl gradient-brand py-4 px-6 font-medium text-foreground transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:shadow-accent/20 active:scale-[0.98]"
        >
          <MessageCircle className="h-5 w-5" />
          <span className="text-sm tracking-wide">Fale Conosco no WhatsApp</span>
        </a>

        {/* Links */}
        <div className="flex w-full flex-col gap-3">
          {links.map((link) => (
            <LinkCard key={link.title} {...link} />
          ))}
        </div>

        {/* Footer */}
        <p className="mt-12 text-[10px] text-muted-foreground/50 tracking-widest uppercase">
          © 2026 Automa — Todos os direitos reservados
        </p>
      </div>
    </div>
  );
};

export default Index;
