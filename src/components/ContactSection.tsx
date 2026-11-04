import { useState } from 'react';
import { MessageCircle, Phone, Clock, ShieldCheck, Send, Check } from 'lucide-react';
import { PHONE_DISPLAY, PHONE_RAW, WHATSAPP_LINKS, LAWYER_NAME } from '../constants';

export default function ContactSection() {
  const [selectedCase, setSelectedCase] = useState<string>('Previdenciário (INSS / Aposentadoria)');
  const [userNote, setUserNote] = useState<string>('');

  const caseOptions = [
    'Previdenciário (INSS / Aposentadoria)',
    'Salário-Maternidade',
    'BPC / LOAS',
    'Golpe do PIX / Fraude Bancária',
    'Nome Negativado (SPC / Serasa)',
    'Bloqueio em Aplicativo (Uber / iFood / 99)',
    'Outro assunto cível / familiar',
  ];

  const handleCustomWhatsApp = () => {
    let message = `Olá Dr. Lucas, vim pelo site e gostaria de falar sobre o meu caso.\n\nÁrea: ${selectedCase}`;
    if (userNote.trim()) {
      message += `\nResumo da situação: ${userNote.trim()}`;
    }
    const url = `https://wa.me/${PHONE_RAW}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contato" className="py-24 relative overflow-hidden bg-gradient-to-b from-[#070B12] via-[#0A111E] to-[#070B12]">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[45rem] h-[30rem] bg-[#C9A227]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Main CTA Container */}
        <div className="rounded-3xl border border-[#C9A227]/30 bg-gradient-to-b from-[#0E1A2C] via-[#0A1322] to-[#070B12] p-8 sm:p-14 shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Direct Call to Action */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#121E33] border border-[#C9A227]/30 text-xs font-semibold uppercase tracking-wider text-[#D4AF37]">
                Atendimento Imediato
              </div>

              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight [text-wrap:balance]">
                Vamos conversar sobre o seu caso?
              </h2>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-light">
                Não deixe para depois a defesa dos seus direitos. Entre em contato agora mesmo para uma consulta preliminar rápida e sem compromisso.
              </p>

              {/* Highlighted Phone Display */}
              <div className="p-5 rounded-2xl bg-[#070B12]/80 border border-[#C9A227]/30 space-y-2">
                <span className="text-xs uppercase tracking-wider text-slate-400 block font-medium">
                  WhatsApp Oficial do Escritório:
                </span>
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-[#C9A227]/20 text-[#D4AF37]">
                    <Phone className="w-6 h-6" />
                  </div>
                  <a
                    href={WHATSAPP_LINKS.default}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-display text-2xl sm:text-3xl font-bold text-white hover:text-[#D4AF37] transition-colors tracking-wide"
                  >
                    {PHONE_DISPLAY}
                  </a>
                </div>
                <p className="text-xs text-amber-200/90 flex items-center gap-1.5 pt-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-ping" />
                  Atendimento digital e personalizado em todo o Brasil
                </p>
              </div>

              {/* Big Golden Primary WhatsApp Button */}
              <div>
                <a
                  href={WHATSAPP_LINKS.default}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 text-base font-bold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-[#D4AF37] via-[#F0D575] to-[#C9A227] rounded-xl hover:shadow-[0_0_35px_rgba(201,162,39,0.5)] hover:brightness-105 transition-all duration-300 active:scale-95"
                >
                  <MessageCircle className="w-5 h-5 fill-slate-950 transition-transform group-hover:scale-110" />
                  <span>Chamar no WhatsApp</span>
                </a>
              </div>

              <div className="flex items-center gap-6 text-xs text-slate-400 pt-2">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#D4AF37]" />
                  Resposta ágil
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                  Total sigilo profissional
                </span>
              </div>
            </div>

            {/* Right Column: Interactive Quick Case Selector */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl p-6 sm:p-7 bg-[#080E1A]/95 border border-slate-800 shadow-xl space-y-5">
                <div className="border-b border-slate-800 pb-3">
                  <h3 className="text-base font-bold text-white">
                    Agilizar atendimento no WhatsApp
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Selecione o tema para já abrir a conversa com o contexto certo:
                  </p>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-medium text-slate-300 block">
                    Tipo do seu problema ou benefício:
                  </label>
                  <div className="grid grid-cols-1 gap-2">
                    {caseOptions.map((option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => setSelectedCase(option)}
                        className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-medium transition-all flex items-center justify-between ${
                          selectedCase === option
                            ? 'bg-[#C9A227]/20 border border-[#C9A227] text-amber-200'
                            : 'bg-slate-900/60 border border-slate-800 text-slate-300 hover:border-slate-700'
                        }`}
                      >
                        <span>{option}</span>
                        {selectedCase === option && (
                          <Check className="w-4 h-4 text-[#D4AF37]" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="userNote" className="text-xs font-medium text-slate-300 block">
                    Algum detalhe adicional? (opcional)
                  </label>
                  <textarea
                    id="userNote"
                    rows={2}
                    value={userNote}
                    onChange={(e) => setUserNote(e.target.value)}
                    placeholder="Ex: Tive o benefício indeferido mês passado..."
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#C9A227]"
                  />
                </div>

                <button
                  type="button"
                  onClick={handleCustomWhatsApp}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-slate-950 bg-[#D4AF37] hover:bg-[#E5C358] transition-colors shadow-md active:scale-95"
                >
                  <Send className="w-3.5 h-3.5" />
                  Enviar caso direto para o WhatsApp
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
