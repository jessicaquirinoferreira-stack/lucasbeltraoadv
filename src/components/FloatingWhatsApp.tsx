import { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { WHATSAPP_LINKS } from '../constants';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    // Show tooltip after 2 seconds
    const timer = setTimeout(() => {
      if (!hasInteracted) {
        setShowTooltip(true);
      }
    }, 2000);
    return () => clearTimeout(timer);
  }, [hasInteracted]);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Tooltip speech bubble */}
      {showTooltip && (
        <div className="relative hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-[#0D182B] border border-[#C9A227]/40 text-slate-100 text-xs font-medium shadow-2xl animate-in fade-in slide-in-from-right-3 duration-300">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
          <span>Fale comigo no WhatsApp</span>
          <button
            type="button"
            onClick={() => {
              setShowTooltip(false);
              setHasInteracted(true);
            }}
            className="text-slate-400 hover:text-white ml-1 p-0.5"
            aria-label="Fechar aviso"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          
          {/* Little triangle arrow pointing right */}
          <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-3 h-3 bg-[#0D182B] border-t border-r border-[#C9A227]/40 rotate-45" />
        </div>
      )}

      {/* Pulsing Floating Button */}
      <a
        href={WHATSAPP_LINKS.default}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com Dr. Lucas Beltrão no WhatsApp"
        className="group relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-[#25D366] to-[#128C7E] text-white shadow-[0_8px_25px_rgba(37,211,102,0.45)] hover:shadow-[0_10px_35px_rgba(37,211,102,0.65)] hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-emerald-400/50"
      >
        {/* Pulsing halo */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 animate-ping pointer-events-none opacity-75" />
        <span className="absolute -inset-2 rounded-full bg-[#25D366]/20 animate-pulse pointer-events-none" />

        <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 fill-white relative z-10 transition-transform group-hover:rotate-6" />
      </a>
    </div>
  );
}
