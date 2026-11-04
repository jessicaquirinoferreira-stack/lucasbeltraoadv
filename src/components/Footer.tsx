import { MessageCircle, ArrowUp } from 'lucide-react';
import { OFFICIAL_LOGO_URL, LAWYER_NAME, DOMAIN, PHONE_DISPLAY, WHATSAPP_LINKS } from '../constants';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05080E] text-slate-400 text-xs border-t border-[#C9A227]/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80 items-start">
          
          {/* Brand & Identity (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <a href="#inicio" className="inline-block" aria-label="Beltrão Advocacia">
              <img
                src={OFFICIAL_LOGO_URL}
                alt="Logo Beltrão Advocacia"
                className="h-14 w-auto object-contain drop-shadow-[0_2px_8px_rgba(201,162,39,0.3)]"
                referrerPolicy="no-referrer"
              />
            </a>
            
            <p className="text-sm font-semibold text-white tracking-wide">
              {LAWYER_NAME} – Advogado
            </p>
            
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Atendimento jurídico digital especializado em Direito Previdenciário, Direito do Consumidor e Direito Digital, com compromisso, ética e foco na solução ágil dos seus problemas.
            </p>

            <div className="pt-2 text-slate-300">
              <span className="text-slate-500 block text-[11px]">Portal Oficial</span>
              <a href={`https://${DOMAIN}`} className="text-amber-300 hover:underline font-mono">
                {DOMAIN}
              </a>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navegação
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="hover:text-[#D4AF37] transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-[#D4AF37] transition-colors">
                  Quem Sou Eu
                </a>
              </li>
              <li>
                <a href="#areas" className="hover:text-[#D4AF37] transition-colors">
                  Áreas de Atuação
                </a>
              </li>
              <li>
                <a href="#atendimento" className="hover:text-[#D4AF37] transition-colors">
                  Atendimento Digital
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-[#D4AF37] transition-colors">
                  Contato & Plantão
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Specializations (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Atendimento e Plantão
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Atendimento 100% online para todo o Brasil. Fale diretamente com o advogado através do canal oficial do WhatsApp:
            </p>
            
            <a
              href={WHATSAPP_LINKS.default}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-[#D4AF37] to-[#C9A227] hover:brightness-110 transition-all shadow-md active:scale-95"
            >
              <MessageCircle className="w-4 h-4 fill-slate-950" />
              <span>Chamar no WhatsApp {PHONE_DISPLAY}</span>
            </a>

            <div className="text-[11px] text-slate-500 pt-1">
              Horário de atendimento: Segunda a Sexta, das 08h às 19h (Casos urgentes sob plantão).
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & OAB Compliance Disclaimer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} {LAWYER_NAME}. Todos os direitos reservados. Domínio oficial: {DOMAIN}.
          </p>

          <p className="max-w-md text-center md:text-right text-[10px] text-slate-500 leading-tight">
            Este site tem caráter estritamente informativo e não substitui a consulta jurídica formal. Atuação em total conformidade com o Provimento nº 205/2021 e o Código de Ética e Disciplina da OAB.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-[#D4AF37] hover:border-[#C9A227]/40 transition-colors"
            aria-label="Voltar ao topo da página"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
