import { useState, useEffect } from 'react';
import { MessageCircle, Menu, X, ArrowUpRight } from 'lucide-react';
import { OFFICIAL_LOGO_URL, WHATSAPP_LINKS } from '../constants';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Quem Sou Eu', href: '#sobre' },
    { label: 'Áreas de Atuação', href: '#areas' },
    { label: 'Atendimento Digital', href: '#atendimento' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#070B12]/95 backdrop-blur-md border-b border-[#C9A227]/20 py-2 sm:py-2.5 shadow-lg shadow-black/50'
          : 'bg-gradient-to-b from-[#070B12]/95 via-[#070B12]/85 to-transparent py-3 sm:py-4 border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6">
          {/* Brand Zone */}
          <a
            href="#inicio"
            className="flex items-center py-1 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A227] rounded-lg shrink-0"
            aria-label="Beltrão Advocacia - Voltar ao início"
          >
            <img
              src={OFFICIAL_LOGO_URL}
              alt="Logo Beltrão Advocacia"
              className="h-14 sm:h-16 md:h-20 lg:h-20 w-auto max-w-[240px] sm:max-w-[280px] object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-[0_3px_12px_rgba(201,162,39,0.4)]"
              referrerPolicy="no-referrer"
            />
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-[#D4AF37] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#D4AF37] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Header Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={WHATSAPP_LINKS.default}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-[#D4AF37] via-[#E5C358] to-[#C9A227] rounded-lg hover:brightness-110 transition-all duration-300 shadow-[0_4px_16px_rgba(201,162,39,0.35)] active:scale-95"
            >
              <MessageCircle className="w-4 h-4 fill-slate-950" />
              <span>Falar no WhatsApp</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={WHATSAPP_LINKS.default}
              target="_blank"
              rel="noopener noreferrer"
              className="sm:hidden inline-flex items-center justify-center p-2 rounded-lg bg-[#C9A227] text-slate-950"
              aria-label="Abrir WhatsApp"
            >
              <MessageCircle className="w-4 h-4 fill-slate-950" />
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/60 focus:outline-none focus:ring-2 focus:ring-[#C9A227]"
              aria-expanded={mobileMenuOpen}
              aria-label="Alternar menu de navegação"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#D4AF37]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 pb-4 border-t border-slate-800/80 bg-[#0A111E]/95 backdrop-blur-xl rounded-2xl px-4 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-3 py-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-slate-200 hover:text-[#D4AF37] hover:bg-slate-800/40 px-3 py-2.5 rounded-lg text-base font-medium transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2 mt-1 border-t border-slate-800">
                <a
                  href={WHATSAPP_LINKS.default}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 text-sm font-semibold text-slate-950 bg-gradient-to-r from-[#D4AF37] to-[#C9A227] rounded-xl shadow-md"
                >
                  <MessageCircle className="w-4 h-4 fill-slate-950" />
                  <span>Falar no WhatsApp (21) 96777-3206</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
