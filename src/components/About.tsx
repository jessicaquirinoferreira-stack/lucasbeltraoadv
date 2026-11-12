import { MessageCircle, Award, BookOpen, ShieldCheck, CheckCircle2, UserCheck } from 'lucide-react';
import { motion } from 'motion/react';
import { LAWYER_NAME, WHATSAPP_LINKS, OFFICIAL_LOGO_URL } from '../constants';
import { BorderBeam } from './ui/BorderBeam';
import { CardSpotlight } from './ui/CardSpotlight';

export default function About() {
  const credentials = [
    {
      title: "Pós-graduando em Direito Previdenciário",
      description: "Estudo contínuo e aprofundado das regras do RGPS (INSS), revisões e planejamento previdenciário.",
      icon: BookOpen,
    },
    {
      title: "Especialista em Cível Contencioso",
      description: "Ampla vivência na defesa judicial e extrajudicial de direitos civis e relações de consumo.",
      icon: Award,
    },
    {
      title: "Atendimento Humanizado & Personalizado",
      description: "Cada cliente é tratado de forma única, com linguagem simples e acompanhamento em tempo real.",
      icon: UserCheck,
    },
    {
      title: "Defesa Ética e Transparente",
      description: "Atuação pautada estritamente pelo Código de Ética e Disciplina da OAB e total lealdade ao cliente.",
      icon: ShieldCheck,
    },
  ];

  return (
    <section id="sobre" className="py-24 relative overflow-hidden bg-[#0A101D]/70 border-t border-b border-slate-800/80">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#C9A227]/5 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />
      <div className="absolute top-0 right-10 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#D4AF37] mb-3">
            <span className="w-6 h-[1.5px] bg-[#D4AF37]" />
            Apresentação Profissional
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Quem sou eu?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Official Profile Text & Narrative (7 cols) */}
          <motion.div 
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-6"
          >
            
            <div className="p-7 sm:p-8 rounded-2xl bg-[#0F1A2D]/70 border border-[#C9A227]/20 shadow-xl relative">
              <div className="space-y-5 text-base sm:text-lg text-slate-200 leading-relaxed font-light">
                <p>
                  Sou <strong className="font-semibold text-white">{LAWYER_NAME}</strong>, advogado, pós-graduando em Direito Previdenciário e com atuação especializada em Direito Cível Contencioso.
                </p>
                <p>
                  Atuo nas áreas de <strong className="text-amber-200/90 font-medium">Direito Previdenciário</strong>, <strong className="text-amber-200/90 font-medium">Direito do Consumidor</strong>, <strong className="text-amber-200/90 font-medium">Direito de Família</strong> e <strong className="text-amber-200/90 font-medium">Responsabilidade Civil</strong>, oferecendo atendimento jurídico personalizado, com compromisso, transparência e dedicação na defesa dos direitos e interesses dos meus clientes.
                </p>
              </div>

              {/* Scope pillars */}
              <div className="mt-6 pt-6 border-t border-slate-700/60 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span>Direito Previdenciário (INSS)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span>Direito do Consumidor & Bancário</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span>Direito Digital & Apps</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span>Direito de Família & Cível</span>
                </div>
              </div>
            </div>

            {/* Credential Grid with CardSpotlight */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {credentials.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <CardSpotlight
                    key={idx}
                    radius={220}
                    color="rgba(201, 162, 39, 0.12)"
                    className="p-4 rounded-xl bg-slate-900/50 border-slate-800"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-[#C9A227]/10 text-[#D4AF37]">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="text-sm font-semibold text-white">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-xs text-slate-400 leading-normal">
                      {item.description}
                    </p>
                  </CardSpotlight>
                );
              })}
            </div>

            {/* Direct CTA */}
            <div className="pt-2">
              <a
                href={WHATSAPP_LINKS.default}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-[#D4AF37] to-[#C9A227] rounded-xl hover:brightness-110 transition-all duration-200 shadow-md active:scale-95 hover:scale-[1.02]"
              >
                <MessageCircle className="w-4 h-4 fill-slate-950" />
                <span>Falar comigo</span>
              </a>
            </div>

          </motion.div>

          {/* Right Column: Visual Card with Office Imagery and Official Emblem (5 cols) */}
          <motion.div 
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5"
          >
            <div className="relative group">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-[#C9A227]/20 via-transparent to-[#D4AF37]/20 blur-lg opacity-50 group-hover:opacity-80 transition duration-500" />
              
              <div className="relative rounded-2xl overflow-hidden border border-[#C9A227]/30 bg-[#0A1220] shadow-2xl">
                {/* Magic UI Border Beam on Lawyer Card */}
                <BorderBeam size={220} duration={12} colorFrom="#D4AF37" colorTo="#F3E29F" />

                {/* Visual Image - Retrato Profissional */}
                <div className="relative w-full overflow-hidden bg-[#070B12] flex items-center justify-center border-b border-slate-800/80">
                  <img
                    src="https://i.postimg.cc/mrJ7J7t8/Gemini-Generated-Image-izmkr1izmkr1izmk-jpg.jpg"
                    alt="Dr. Lucas Beltrão da Silveira"
                    className="w-full h-auto max-h-[580px] object-contain block transition-transform duration-500 group-hover:scale-[1.01]"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Floating badge inside image */}
                  <div className="absolute top-4 right-4 px-3 py-1.5 rounded-lg bg-[#070B12]/85 backdrop-blur-md border border-[#C9A227]/40 text-[11px] font-semibold text-amber-300 shadow-md">
                    Atendimento Online
                  </div>
                </div>

                {/* Content below image */}
                <div className="p-6 text-center space-y-4">
                  <div className="inline-block p-3 rounded-xl bg-[#070B12] border border-[#C9A227]/30 shadow-inner">
                    <img
                      src={OFFICIAL_LOGO_URL}
                      alt="Beltrão Advocacia"
                      className="h-12 w-auto mx-auto object-contain"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  <div>
                    <h3 className="font-display text-lg font-bold text-white">
                      {LAWYER_NAME}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">
                      Excelência jurídica com foco em resultados reais para você.
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-800 flex items-center justify-center gap-6 text-xs text-slate-300">
                    <div>
                      <span className="block font-bold text-amber-300 text-sm">100%</span>
                      <span>Digital</span>
                    </div>
                    <div className="h-6 w-[1px] bg-slate-800" />
                    <div>
                      <span className="block font-bold text-amber-300 text-sm">Brasil</span>
                      <span>Atuação Nacional</span>
                    </div>
                    <div className="h-6 w-[1px] bg-slate-800" />
                    <div>
                      <span className="block font-bold text-amber-300 text-sm">Ético</span>
                      <span>Conforme OAB</span>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
