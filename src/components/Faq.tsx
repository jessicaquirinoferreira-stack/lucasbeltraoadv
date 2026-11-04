import { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { FAQS, WHATSAPP_LINKS } from '../constants';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 relative bg-[#070B12] border-b border-slate-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#121E33] border border-[#C9A227]/30 text-xs font-semibold uppercase tracking-wider text-[#D4AF37] mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            Esclarecimentos Importantes
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Dúvidas Frequentes
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2 font-light">
            Respostas diretas para as principais dúvidas sobre atendimento digital e direitos.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-800/90 bg-[#0A1220]/80 overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none hover:bg-slate-800/30 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-semibold text-white tracking-wide">
                    {faq.question}
                  </span>
                  <div
                    className={`p-1.5 rounded-lg bg-slate-900 border border-slate-700 text-[#D4AF37] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#C9A227]/20 border-[#C9A227]/40' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-slate-300 leading-relaxed font-light border-t border-slate-800/60 animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                    <div className="mt-4 pt-3 flex items-center justify-between text-xs text-slate-400">
                      <span>Sua dúvida é diferente?</span>
                      <a
                        href={WHATSAPP_LINKS.default}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#D4AF37] hover:underline font-semibold flex items-center gap-1"
                      >
                        Perguntar ao advogado
                      </a>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
