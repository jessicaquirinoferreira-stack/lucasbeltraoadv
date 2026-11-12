import { Zap, Eye, FileSearch, MessageCircle, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { DIGITAL_STEPS, WHATSAPP_LINKS } from '../constants';
import { CardSpotlight } from './ui/CardSpotlight';
import { BorderBeam } from './ui/BorderBeam';
import { ShimmerButton } from './ui/ShimmerButton';

export default function DigitalService() {
  const highlightCards = [
    {
      title: "Praticidade e agilidade",
      description: "Atendimento sem filas, sem trânsito e sem burocracia desnecessária. Todo o envio de fotos de documentos e consultas é feito com total comodidade pelo seu celular.",
      icon: Zap,
      accent: "from-amber-500/20 to-transparent",
    },
    {
      title: "Análise individualizada",
      description: "Seu caso não é tratado com soluções genéricas. Avaliamos a fundo suas particularidades fáticas e documentais para escolher a via jurídica mais favorável e rápida.",
      icon: FileSearch,
      accent: "from-[#C9A227]/25 to-transparent",
    },
    {
      title: "Acompanhamento transparente",
      description: "Você não fica no escuro. Recebe atualizações claras a cada nova movimentação, com linguagem simples e sem juridiquês difícil, sabendo exatamente onde está seu processo.",
      icon: Eye,
      accent: "from-blue-500/20 to-transparent",
    },
  ];

  return (
    <section id="atendimento" className="py-24 relative overflow-hidden bg-[#0A101D] border-t border-b border-slate-800/80">
      {/* Background subtle radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_40%,rgba(201,162,39,0.06),transparent_80%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#121E33] border border-[#C9A227]/30 text-xs font-semibold uppercase tracking-wider text-[#D4AF37] mb-4">
            Metodologia Moderna
          </div>
          
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Atendimento Jurídico Digital
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-light [text-wrap:balance]">
            Atendimento realizado de forma digital, com praticidade, transparência e acompanhamento jurídico individualizado, desde a análise inicial até as medidas administrativas ou judiciais cabíveis.
          </p>
        </motion.div>

        {/* 3 Highlight Cards with CardSpotlight */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {highlightCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <CardSpotlight
                key={idx}
                radius={280}
                color="rgba(201, 162, 39, 0.14)"
                className="relative rounded-2xl p-8 bg-[#0D1627]/90 border border-slate-800 hover:border-[#C9A227]/40 transition-all duration-300 group hover:-translate-y-1 shadow-xl flex flex-col justify-between"
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${card.accent} rounded-tr-2xl blur-xl opacity-60 group-hover:opacity-100 transition-opacity pointer-events-none`} />
                
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#C9A227]/15 border border-[#C9A227]/30 flex items-center justify-center text-[#D4AF37] mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  
                  <h3 className="font-display text-xl font-bold text-white mb-3 tracking-wide">
                    {card.title}
                  </h3>
                  
                  <p className="text-sm text-slate-300 leading-relaxed font-light">
                    {card.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs text-[#D4AF37]">
                  <CheckCircle2 className="w-4 h-4" />
                  <span className="font-medium">Padrão Beltrão Advocacia</span>
                </div>
              </CardSpotlight>
            );
          })}
        </div>

        {/* How It Works: Step-by-Step Flow */}
        <div className="relative overflow-hidden rounded-3xl p-8 sm:p-12 bg-gradient-to-b from-[#0F1B2E] via-[#0A1220] to-[#070B12] border border-[#C9A227]/25 shadow-2xl">
          {/* Magic UI Border Beam */}
          <BorderBeam size={280} duration={14} colorFrom="#D4AF37" colorTo="#F3E29F" />

          <div className="text-center max-w-2xl mx-auto mb-12 relative z-10">
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Como funciona o passo a passo?
            </h3>
            <p className="text-sm text-slate-400 mt-2">
              Processo simplificado, seguro e 100% transparente para resolver sua pendência jurídica.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {DIGITAL_STEPS.map((item, idx) => (
              <div
                key={idx}
                className="relative p-6 rounded-2xl bg-[#080E1A]/80 border border-slate-800/90 hover:border-[#C9A227]/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <span className="font-display text-3xl font-bold text-[#C9A227]/40 block mb-2">
                    {item.step}
                  </span>
                  <h4 className="text-base font-bold text-white mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-800/60 flex items-center gap-1.5 text-[11px] text-amber-200/80 font-medium">
                  <span>Passo {idx + 1} de 4</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex justify-center relative z-10">
            <ShimmerButton
              href={WHATSAPP_LINKS.default}
              target="_blank"
              rel="noopener noreferrer"
              shimmerColor="#FFFFFF"
              shimmerDuration="2.8s"
              className="py-4 px-8 text-sm font-bold tracking-wider"
            >
              <MessageCircle className="w-5 h-5 fill-slate-950" />
              <span>Iniciar Análise pelo WhatsApp</span>
            </ShimmerButton>
          </div>
        </div>

      </div>
    </section>
  );
}
