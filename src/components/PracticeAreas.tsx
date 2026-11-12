import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShieldCheck, 
  Scale, 
  Smartphone, 
  Check, 
  MessageCircle, 
  ArrowRight,
  Baby,
  Hourglass,
  HeartHandshake,
  Landmark,
  FileWarning,
  Bike,
  UserX,
  ChevronRight
} from 'lucide-react';
import { PRACTICE_AREAS, WHATSAPP_LINKS } from '../constants';
import { CardSpotlight } from './ui/CardSpotlight';

export default function PracticeAreas() {
  const [activeTab, setActiveTab] = useState<string>('all');

  const filteredAreas = activeTab === 'all' 
    ? PRACTICE_AREAS 
    : PRACTICE_AREAS.filter(area => area.id === activeTab);

  const getSubCategoryIcon = (title: string) => {
    if (title.includes('Maternidade')) return Baby;
    if (title.includes('Aposentadorias')) return Hourglass;
    if (title.includes('BPC')) return HeartHandshake;
    if (title.includes('Bancos')) return Landmark;
    if (title.includes('Negativação')) return FileWarning;
    if (title.includes('Entregadores')) return Bike;
    return UserX;
  };

  return (
    <section id="areas" className="py-24 relative overflow-hidden bg-[#070B12]">
      {/* Background glow effects */}
      <div className="absolute top-1/4 right-0 w-[30rem] h-[30rem] bg-[#C9A227]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[24rem] h-[24rem] bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#121E33] border border-[#C9A227]/30 text-xs font-semibold uppercase tracking-wider text-[#D4AF37] mb-4">
            Especialidades Jurídicas
          </div>
          
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Áreas de Atuação
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-light [text-wrap:balance]">
            Atuação jurídica nas áreas Previdenciária e do Consumidor, com atendimento digital, análise individualizada de cada caso e orientação jurídica personalizada.
          </p>

          {/* Interactive Filter Tabs */}
          <div className="mt-8 inline-flex flex-wrap items-center justify-center p-1.5 rounded-xl bg-[#0D1626] border border-slate-800 shadow-inner gap-1">
            <button
              type="button"
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all duration-200 whitespace-nowrap ${
                activeTab === 'all'
                  ? 'bg-[#C9A227] text-slate-950 font-bold shadow-md'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              Todas as Áreas
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('previdenciario')}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all duration-200 whitespace-nowrap ${
                activeTab === 'previdenciario'
                  ? 'bg-[#C9A227] text-slate-950 font-bold shadow-md'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              Direito Previdenciário
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('consumidor')}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all duration-200 whitespace-nowrap ${
                activeTab === 'consumidor'
                  ? 'bg-[#C9A227] text-slate-950 font-bold shadow-md'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              Direito do Consumidor
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('direito-digital')}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all duration-200 whitespace-nowrap ${
                activeTab === 'direito-digital'
                  ? 'bg-[#C9A227] text-slate-950 font-bold shadow-md'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              Direito Digital & Apps
            </button>
          </div>
        </div>

        {/* Practice Areas List */}
        <div className="space-y-16">
          {filteredAreas.map((area) => {
            const isPrev = area.id === 'previdenciario';
            const isCons = area.id === 'consumidor';

            return (
              <div
                key={area.id}
                id={area.id}
                className="rounded-3xl border border-[#C9A227]/25 bg-gradient-to-b from-[#0D182B]/90 via-[#0A1220]/80 to-[#070B12]/90 p-6 sm:p-10 shadow-2xl relative"
              >
                {/* Header of Area */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
                  <div className="flex items-start sm:items-center gap-4">
                    <div className="p-3.5 rounded-2xl bg-[#C9A227]/15 border border-[#C9A227]/30 text-[#D4AF37] shrink-0">
                      {isPrev && <ShieldCheck className="w-7 h-7" />}
                      {isCons && <Scale className="w-7 h-7" />}
                      {!isPrev && !isCons && <Smartphone className="w-7 h-7" />}
                    </div>
                    <div>
                      <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
                        {area.title}
                      </h3>
                      <p className="text-sm text-slate-400 mt-1 max-w-2xl font-light">
                        {area.shortDescription}
                      </p>
                    </div>
                  </div>

                  <a
                    href={area.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-[#D4AF37] to-[#C9A227] hover:brightness-110 transition-all shadow-md active:scale-95 shrink-0 self-start md:self-auto"
                  >
                    <MessageCircle className="w-4 h-4 fill-slate-950" />
                    <span>{area.ctaText}</span>
                  </a>
                </div>

                {/* Subcategories Grid */}
                <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
                  {area.subCategories.map((sub, sIdx) => {
                    const SubIcon = getSubCategoryIcon(sub.title);
                    return (
                      <CardSpotlight
                        key={sIdx}
                        radius={260}
                        color="rgba(201, 162, 39, 0.14)"
                        className="rounded-2xl p-6 sm:p-7 bg-[#080E1A]/85 border border-slate-800 hover:border-[#C9A227]/35 transition-all duration-300 flex flex-col justify-between group shadow-lg"
                      >
                        <div>
                          {/* Title and Icon */}
                          <div className="flex items-start gap-3.5 mb-3">
                            <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-[#D4AF37] shrink-0 group-hover:border-[#C9A227]/50 transition-colors">
                              <SubIcon className="w-5 h-5" />
                            </div>
                            <div>
                              <h4 className="text-lg font-bold text-white tracking-wide group-hover:text-amber-200 transition-colors">
                                {sub.title}
                              </h4>
                              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                                {sub.description}
                              </p>
                            </div>
                          </div>

                          {/* Bullet points */}
                          <ul className="mt-5 space-y-2.5 text-xs text-slate-300">
                            {sub.items.map((bullet, bIdx) => (
                              <li key={bIdx} className="flex items-start gap-2.5 leading-relaxed">
                                <span className="p-0.5 rounded-full bg-[#C9A227]/20 text-[#D4AF37] shrink-0 mt-0.5">
                                  <Check className="w-3.5 h-3.5" />
                                </span>
                                <span>{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Subcategory specific WhatsApp link */}
                        <div className="mt-6 pt-4 border-t border-slate-800/80">
                          <a
                            href={sub.whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D4AF37] hover:text-amber-200 group-hover:translate-x-1 transition-all"
                          >
                            <span>{sub.ctaText}</span>
                            <ChevronRight className="w-3.5 h-3.5" />
                          </a>
                        </div>
                      </CardSpotlight>
                    );
                  })}
                </div>

                {/* Bottom reminder banner within each major category */}
                <div className="mt-8 p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#C9A227]" />
                    <span>Análise preliminar de viabilidade realizada diretamente pelo WhatsApp.</span>
                  </div>
                  <a
                    href={area.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#D4AF37] hover:underline font-medium inline-flex items-center gap-1"
                  >
                    Tirar dúvidas agora
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
