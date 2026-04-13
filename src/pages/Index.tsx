import { Globe, Briefcase, MessageCircle, Sparkles, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import automaLogo from "@/assets/automa-logo.png";

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
);

const XIcon = () => (
  <svg viewBox="0 0 24 24" className="h-[18px] w-[18px] fill-current" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
  </svg>
);

const Index = () => {
  const [form, setForm] = useState({ nome: "", email: "", telefone: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Olá! Meu nome é ${form.nome}, meu e-mail é ${form.email} e meu telefone é ${form.telefone}. Gostaria de saber mais!`;
    window.open(`https://wa.me/5500000000000?text=${encodeURIComponent(msg)}`, "_blank");
  };

  const links = [
    { title: "Nosso Site", description: "Conheça nossos serviços", href: "#", icon: <Globe className="h-5 w-5" /> },
    { title: "Portfólio", description: "Veja nossos cases", href: "#", icon: <Briefcase className="h-5 w-5" /> },
  ];

  const socials = [
    { icon: <InstagramIcon />, href: "#", label: "Instagram" },
    { icon: <XIcon />, href: "#", label: "X" },
    { icon: <LinkedInIcon />, href: "#", label: "LinkedIn" },
    { icon: <TikTokIcon />, href: "#", label: "TikTok" },
  ];

  const glassInput = "w-full rounded-2xl border border-white/[0.08] bg-white/[0.04] backdrop-blur-xl px-4 py-3.5 text-sm text-white/90 placeholder-white/25 outline-none transition-all duration-500 focus:border-white/20 focus:bg-white/[0.07] focus:shadow-[0_0_20px_rgba(221,228,225,0.05)]";

  return (
    <div
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse 80% 50% at 50% 0%, rgba(0,33,52,0.6) 0%, transparent 60%),
          radial-gradient(ellipse 60% 40% at 30% 20%, rgba(30,6,56,0.5) 0%, transparent 50%),
          radial-gradient(ellipse 50% 30% at 70% 80%, rgba(221,228,225,0.08) 0%, transparent 50%),
          linear-gradient(180deg, #020810 0%, #041420 8%, #002134 20%, #0f0525 40%, #1e0638 60%, #1a0a30 80%, #dde4e1 100%)
        `,
      }}
    >
      {/* Ambient light effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 h-[40vh] w-[80vw] max-w-[500px] rounded-full bg-[#002134] opacity-40 blur-[100px]" />
        <div className="absolute top-[15%] left-1/2 -translate-x-1/2 h-[20vh] w-[40vw] max-w-[300px] rounded-full bg-[#2a0a50] opacity-20 blur-[80px]" />
        <div className="absolute bottom-[5%] left-1/2 -translate-x-1/2 h-[15vh] w-[60vw] max-w-[400px] rounded-full bg-[#dde4e1] opacity-[0.06] blur-[60px]" />
      </div>

      <div className="relative z-10 flex w-full max-w-[380px] flex-col items-center px-6 py-14">
        {/* Logo */}
        <img src={automaLogo} alt="Automa" className="h-12 mb-4 invert" />
        <div className="flex items-center gap-2.5 mb-8">
          <Sparkles className="h-3 w-3 text-white/30" />
          <p className="text-[10px] text-white/30 tracking-[0.3em] uppercase font-light">
            Automação & Tecnologia
          </p>
          <Sparkles className="h-3 w-3 text-white/30" />
        </div>

        {/* Glass Form Card */}
        <div className="w-full rounded-3xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-2xl p-5 shadow-[0_8px_32px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.05)]">
          <p className="text-center text-xs text-white/40 tracking-widest uppercase mb-4 font-light">
            Entre em contato
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input
              type="text"
              placeholder="Nome"
              required
              value={form.nome}
              onChange={(e) => setForm({ ...form, nome: e.target.value })}
              className={glassInput}
            />
            <input
              type="email"
              placeholder="E-mail"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className={glassInput}
            />
            <input
              type="tel"
              placeholder="Telefone"
              required
              value={form.telefone}
              onChange={(e) => setForm({ ...form, telefone: e.target.value })}
              className={glassInput}
            />

            {/* CTA - Liquid Glass */}
            <button
              type="submit"
              className="group relative mt-2 flex w-full items-center justify-center gap-2.5 overflow-hidden rounded-2xl py-4 px-6 font-medium text-sm tracking-wide transition-all duration-500 hover:scale-[1.02] active:scale-[0.98] hover:shadow-[0_0_40px_rgba(221,228,225,0.15)]"
              style={{
                background: "linear-gradient(135deg, rgba(221,228,225,0.95) 0%, rgba(221,228,225,0.8) 50%, rgba(255,255,255,0.95) 100%)",
                color: "#0a0a12",
              }}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{
                background: "linear-gradient(135deg, rgba(255,255,255,1) 0%, rgba(221,228,225,0.9) 100%)",
              }} />
              <div className="absolute inset-0 rounded-2xl opacity-40" style={{
                background: "linear-gradient(180deg, rgba(255,255,255,0.6) 0%, transparent 50%)",
              }} />
              <MessageCircle className="h-4.5 w-4.5 relative z-10" />
              <span className="relative z-10 font-semibold">Fale Conosco</span>
            </button>
          </form>
        </div>

        {/* Links - Liquid Glass */}
        <div className="flex w-full flex-col gap-3 mt-6">
          {links.map((link) => (
            <a
              key={link.title}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex w-full items-center justify-between overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-2xl px-5 py-4 transition-all duration-500 hover:border-white/[0.15] hover:bg-white/[0.06] hover:shadow-[0_4px_24px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.06)] hover:scale-[1.01]"
            >
              {/* Glass reflection */}
              <div className="absolute inset-x-0 top-0 h-1/2 rounded-t-2xl opacity-[0.03] bg-gradient-to-b from-white to-transparent" />
              <div className="flex items-center gap-3.5 relative z-10">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/[0.06] bg-white/[0.05] text-white/60 group-hover:text-white/90 transition-colors duration-500">
                  {link.icon}
                </div>
                <div>
                  <h3 className="text-[13px] font-medium text-white/85 group-hover:text-white transition-colors duration-500">{link.title}</h3>
                  <p className="text-[11px] text-white/30 mt-0.5">{link.description}</p>
                </div>
              </div>
              <ArrowUpRight className="h-4 w-4 text-white/20 group-hover:text-white/50 transition-all duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 relative z-10" />
            </a>
          ))}
        </div>

        {/* Social Icons - Liquid Glass */}
        <div className="mt-10 flex items-center gap-3">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="group relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-white/[0.08] bg-white/[0.03] backdrop-blur-xl text-white/40 transition-all duration-500 hover:border-white/[0.2] hover:bg-white/[0.08] hover:text-white/90 hover:scale-110 hover:shadow-[0_0_20px_rgba(221,228,225,0.08)]"
            >
              <div className="absolute inset-x-0 top-0 h-1/2 rounded-t-full opacity-[0.04] bg-gradient-to-b from-white to-transparent" />
              <span className="relative z-10">{s.icon}</span>
            </a>
          ))}
        </div>

        <p className="mt-12 text-[9px] text-white/15 tracking-[0.3em] uppercase font-light">
          © 2026 Automa
        </p>
      </div>
    </div>
  );
};

export default Index;
