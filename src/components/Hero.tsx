import { MessageCircle, ChevronDown, CheckCircle2, Shield, Sparkles, Scale, Clock, Globe } from 'lucide-react';
import { WHATSAPP_LINKS, LAWYER_NAME, OFFICIAL_LOGO_URL } from '../constants';
import heroDarkLawOffice from '../assets/images/hero_dark_law_office_1793756000843.jpg';

export default function Hero() {
  const trustPoints = [
    {
      icon: Globe,
      title: "Atendimento Digital",
      subtitle: "Em todo o Brasil sem sair de casa",
    },
    {
      icon: Shield,
      title: "Análise Individualizada",
      subtitle: "Exame minucioso de cada detalhe",
    },
    {
      icon: Scale,
      title: "Compromisso & Transparência",
      subtitle: "Comunicação clara e ética",
    },
  ];

  return (
    <section id="inicio" className="relative min-h-[92vh] flex items-center pt-32 sm:pt-36 pb-16 overflow-hidden">
      {/* Background with luxury law office backdrop and measured dark scrims */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <img
          src={heroDarkLawOffice}
          alt="Escritório de Advocacia Beltrão"
          className="w-full h-full object-cover object-center scale-105 opacity-25 filter brightness-75 contrast-125 transition-transform duration-10000 hover:scale-100"
          referrerPolicy="no-referrer"
        />
        {/* Gradients to blend smoothly into deep #070B12 */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#070B12] via-[#070B12]/80 to-[#070B12]/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(201,162,39,0.18),transparent_70%)]" />
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#C9A227_1px,transparent_1px),linear-gradient(to_bottom,#C9A227_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_35%,#000_70%,transparent_100%)] opacity-[0.03]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Core Value Proposition & CTAs (7 cols) */}
          <div className="lg:col-span-7 space-y-7 text-left">
            
            {/* Subtle Eyebrow / Trust kicker */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#121E33]/90 border border-[#C9A227]/30 backdrop-blur-md shadow-sm">
              <Sparkles className="w-4 h-4 text-[#D4AF37]" />
              <span className="text-xs font-semibold tracking-wider text-amber-200 uppercase">
                Advocacia Especializada &amp; 100% Online
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-white leading-[1.18] tracking-tight [text-wrap:balance]">
              Seus direitos protegidos com atendimento jurídico{' '}
              <span className="bg-gradient-to-r from-[#D4AF37] via-[#F3E29F] to-[#C9A227] bg-clip-text text-transparent">
                digital, transparente
              </span>{' '}
              e personalizado.
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl font-light">
              Advogado especializado em <strong className="text-white font-medium">Direito Previdenciário</strong>,{' '}
              <strong className="text-white font-medium">Direito do Consumidor</strong> e{' '}
              <strong className="text-white font-medium">Direito Digital</strong>. Atendimento 100% online com agilidade, foco em resultados e dedicação total ao seu caso.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href={WHATSAPP_LINKS.default}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 px-7 py-4 text-sm font-bold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-[#D4AF37] via-[#F0D575] to-[#C9A227] rounded-xl hover:shadow-[0_0_30px_rgba(201,162,39,0.45)] hover:brightness-105 transition-all duration-300 active:scale-[0.98]"
              >
                <MessageCircle className="w-5 h-5 fill-slate-950 transition-transform group-hover:scale-110" />
                <span>Falar com o Advogado</span>
              </a>

              <a
                href="#areas"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-semibold text-slate-200 hover:text-white bg-slate-900/80 hover:bg-slate-800/90 border border-slate-700/80 hover:border-[#C9A227]/50 rounded-xl transition-all duration-300 backdrop-blur-sm"
              >
                <span>Conhecer as Áreas de Atuação</span>
                <ChevronDown className="w-4 h-4 text-[#D4AF37]" />
              </a>
            </div>

            {/* Quick Micro-Trust bullet points */}
            <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                Sem necessidade de deslocamento
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                Envio seguro de documentos pelo WhatsApp
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                Sigilo profissional garantido
              </span>
            </div>

          </div>

          {/* Right Column: Visual Anchor & Official Identity Card (5 cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Golden Ambient Blur behind card */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#C9A227]/30 via-[#E5C358]/20 to-[#C9A227]/30 blur-xl opacity-60 animate-pulse-cta" />

              <div className="relative glass-panel rounded-2xl p-6 sm:p-8 border border-[#C9A227]/30 bg-gradient-to-b from-[#0F1B2E]/95 via-[#0A1220]/95 to-[#070B12]/95 text-center shadow-2xl">
                
                {/* Official Logo Spotlight */}
                <div className="flex justify-center mb-6">
                  <div className="p-4 rounded-2xl bg-[#070B12]/80 border border-[#C9A227]/25 shadow-inner">
                    <img
                      src={OFFICIAL_LOGO_URL}
                      alt="Brasão Oficial Beltrão Advocacia"
                      className="w-48 sm:w-56 h-auto object-contain drop-shadow-[0_4px_12px_rgba(201,162,39,0.35)]"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  <h2 className="font-display text-xl sm:text-2xl font-bold text-white tracking-wide">
                    {LAWYER_NAME}
                  </h2>
                  <p className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
                    Advocacia Especializada · Atendimento Digital
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 text-left p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 mb-6 text-xs">
                  <div>
                    <span className="text-slate-400 block text-[11px]">Especialidade</span>
                    <strong className="text-slate-200 font-medium">Previdenciário & Cível</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[11px]">Modalidade</span>
                    <strong className="text-amber-300 font-medium">100% Online</strong>
                  </div>
                  <div className="col-span-2 pt-2 border-t border-slate-800 flex items-center justify-between">
                    <span className="text-slate-400 text-[11px]">Plantão WhatsApp</span>
                    <span className="text-emerald-400 font-medium flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-ping" />
                      Atendimento Ativo
                    </span>
                  </div>
                </div>

                <a
                  href={WHATSAPP_LINKS.default}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-[#070B12] bg-[#D4AF37] hover:bg-[#E5C358] transition-colors shadow-md"
                >
                  <MessageCircle className="w-4 h-4 fill-slate-950" />
                  Iniciar Atendimento Imediato
                </a>

              </div>
            </div>
          </div>

        </div>

        {/* 3 Trust pillars row below hero */}
        <div className="mt-16 pt-10 border-t border-slate-800/80 grid grid-cols-1 md:grid-cols-3 gap-6">
          {trustPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <div
                key={index}
                className="glass-panel glass-panel-hover rounded-xl p-5 flex items-start gap-4 border border-[#C9A227]/15"
              >
                <div className="p-2.5 rounded-lg bg-[#C9A227]/10 text-[#D4AF37] border border-[#C9A227]/20 shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white tracking-wide">
                    {point.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {point.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
