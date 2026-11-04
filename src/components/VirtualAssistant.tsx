import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Sparkles, ArrowRight, CornerDownLeft } from 'lucide-react';
import { PHONE_DISPLAY, PHONE_RAW, WHATSAPP_LINKS } from '../constants';
import assistantAvatarImg from '../assets/images/assistant_avatar_1793757503350.jpg';

const ASSISTANT_AVATAR = assistantAvatarImg;

interface Message {
  id: string;
  sender: 'assistant' | 'user';
  text: string;
  whatsappCta?: {
    label: string;
    url: string;
  };
}

export default function VirtualAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      sender: 'assistant',
      text: 'Olá! Sou a Sofia, assistente virtual do escritório do Dr. Lucas Beltrão da Silveira. Como posso te orientar hoje?',
      whatsappCta: {
        label: 'Falar direto com o Dr. Lucas no WhatsApp',
        url: WHATSAPP_LINKS.default,
      },
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickQuestions = [
    { label: 'Salário-Maternidade', topic: 'maternidade' },
    { label: 'Aposentadoria / INSS', topic: 'aposentadoria' },
    { label: 'BPC / LOAS', topic: 'bpc' },
    { label: 'Golpe do PIX / Banco', topic: 'banco' },
    { label: 'Nome no SPC / Serasa', topic: 'negativacao' },
    { label: 'Conta de App Bloqueada', topic: 'app' },
    { label: 'Como funciona o atendimento?', topic: 'atendimento' },
  ];

  useEffect(() => {
    if (isOpen) {
      setHasUnread(false);
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [isOpen, messages]);

  const getAssistantResponse = (query: string): { text: string; whatsappCta: { label: string; url: string } } => {
    const q = query.toLowerCase();

    if (q.includes('maternidade') || q.includes('gestante') || q.includes('gravida') || q.includes('grávida') || q.includes('parto')) {
      return {
        text: 'O salário-maternidade é um direito fundamental para seguradas do INSS (inclusive autônomas, desempregadas ou MEI). Se o seu pedido foi negado ou você tem dúvidas sobre o período de carência, o Dr. Lucas analisa seu caso e te orienta em cada etapa.',
        whatsappCta: {
          label: 'Analisar meu Salário-Maternidade no WhatsApp',
          url: WHATSAPP_LINKS.maternidade,
        },
      };
    }

    if (q.includes('aposent') || q.includes('tempo') || q.includes('inss') || q.includes('contribu') || q.includes('revisão') || q.includes('revisao')) {
      return {
        text: 'O Dr. Lucas realiza análise do tempo de contribuição, planejamento previdenciário e pedidos de aposentadoria (por idade ou tempo de contribuição), além de revisões de benefícios negados ou concedidos com valor menor.',
        whatsappCta: {
          label: 'Falar sobre Aposentadoria no WhatsApp',
          url: WHATSAPP_LINKS.aposentadoria,
        },
      };
    }

    if (q.includes('bpc') || q.includes('loas') || q.includes('deficien') || q.includes('idoso') || q.includes('assistencial')) {
      return {
        text: 'O BPC/LOAS garante 1 salário mínimo mensal para idosos a partir de 65 anos ou pessoas com deficiência de qualquer idade de baixa renda. Se seu benefício foi negado pelo INSS, é possível reverter pela via judicial.',
        whatsappCta: {
          label: 'Consultar BPC/LOAS no WhatsApp',
          url: WHATSAPP_LINKS.bpcLoas,
        },
      };
    }

    if (q.includes('pix') || q.includes('banco') || q.includes('golpe') || q.includes('fraude') || q.includes('cartao') || q.includes('cartão') || q.includes('consignado') || q.includes('desconto')) {
      return {
        text: 'Casos de fraudes bancárias, transferências PIX forçadas, empréstimos consignados não solicitados e compras não reconhecidas podem ser revertidos com a restituição dos valores e pedido de indenização pelo banco.',
        whatsappCta: {
          label: 'Resolver problema bancário no WhatsApp',
          url: WHATSAPP_LINKS.bancos,
        },
      };
    }

    if (q.includes('spc') || q.includes('serasa') || q.includes('negativ') || q.includes('nome sujo') || q.includes('protesto') || q.includes('divida') || q.includes('dívida')) {
      return {
        text: 'Se o seu nome foi inscrito indevidamente no SPC/Serasa por conta já paga ou dívida que você nunca fez, é possível solicitar a limpeza imediata do cadastro por tutela de urgência e indenização por danos morais.',
        whatsappCta: {
          label: 'Limpar Nome e Pedir Indenização no WhatsApp',
          url: WHATSAPP_LINKS.negativacao,
        },
      };
    }

    if (q.includes('uber') || q.includes('ifood') || q.includes('99') || q.includes('bloqueio') || q.includes('bloquead') || q.includes('desativ') || q.includes('app') || q.includes('aplicativo') || q.includes('motorista') || q.includes('entregador')) {
      return {
        text: 'O bloqueio ou desativação de conta de motorista ou entregador sem direito de resposta e sem justificativa clara é abusivo. O Dr. Lucas atua para reativar o seu cadastro e liberar valores retidos na plataforma.',
        whatsappCta: {
          label: 'Reativar Conta de App no WhatsApp',
          url: WHATSAPP_LINKS.motoristasEntregadores,
        },
      };
    }

    if (q.includes('atendimento') || q.includes('como funciona') || q.includes('online') || q.includes('digital') || q.includes('onde')) {
      return {
        text: 'O atendimento é 100% digital para todo o Brasil. Você envia fotos dos documentos pelo WhatsApp com total segurança, assina digitalmente no seu celular e acompanha o caso sem sair de casa.',
        whatsappCta: {
          label: 'Iniciar Atendimento Online no WhatsApp',
          url: WHATSAPP_LINKS.default,
        },
      };
    }

    if (q.includes('documento') || q.includes('preciso') || q.includes('levar') || q.includes('enviar')) {
      return {
        text: 'Geralmente são necessários RG/CPF, comprovante de residência e os documentos específicos do seu caso (ex: extrato do INSS, extrato bancário, prints de aplicativo ou comprovante da dívida). O Dr. Lucas orienta exatamente o que você precisará.',
        whatsappCta: {
          label: 'Enviar documentos pelo WhatsApp',
          url: WHATSAPP_LINKS.default,
        },
      };
    }

    if (q.includes('custo') || q.includes('valor') || q.includes('preço') || q.includes('preco') || q.includes('honorarios') || q.includes('honorários')) {
      return {
        text: 'A análise preliminar da viabilidade do seu caso é feita diretamente pelo WhatsApp. Em muitos casos, os honorários são combinados no êxito (pagos apenas se e quando você ganhar o benefício ou indenização).',
        whatsappCta: {
          label: 'Consultar condições no WhatsApp',
          url: WHATSAPP_LINKS.default,
        },
      };
    }

    // Default response
    return {
      text: `Entendi perfeitamente a sua dúvida. Como cada situação jurídica possui detalhes únicos que precisam ser analisados com cuidado, o ideal é conversar diretamente com o Dr. Lucas Beltrão pelo WhatsApp oficial (${PHONE_DISPLAY}).`,
      whatsappCta: {
        label: 'Conversar com o Dr. Lucas no WhatsApp',
        url: `https://wa.me/${PHONE_RAW}?text=${encodeURIComponent(`Olá Dr. Lucas, estava falando com a assistente virtual Sofia no site sobre: "${query}". Gostaria de orientações sobre o meu caso.`)}`,
      },
    };
  };

  const handleSend = (textToSend?: string) => {
    const query = textToSend || inputValue;
    if (!query.trim()) return;

    const userMsg: Message = {
      id: String(Date.now()),
      sender: 'user',
      text: query.trim(),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputValue('');

    // Simulate natural thinking delay
    setTimeout(() => {
      const resp = getAssistantResponse(query);
      const assistantMsg: Message = {
        id: String(Date.now() + 1),
        sender: 'assistant',
        text: resp.text,
        whatsappCta: resp.whatsappCta,
      };
      setMessages((prev) => [...prev, assistantMsg]);
    }, 450);
  };

  return (
    <>
      {/* Floating Trigger Button on Bottom-Left */}
      <div className="fixed bottom-6 left-6 z-50">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="group relative flex items-center gap-3 p-1.5 pr-4 rounded-full bg-[#0D182B]/95 hover:bg-[#12223D] border border-[#C9A227]/40 shadow-[0_8px_25px_rgba(0,0,0,0.5)] transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#C9A227]"
          aria-label="Abrir assistente virtual Sofia"
        >
          {/* Human photo avatar with active badge */}
          <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#D4AF37] shrink-0">
            <img
              src={ASSISTANT_AVATAR}
              alt="Sofia - Assistente Virtual"
              className="w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
            />
            <span className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-[#0D182B]" />
          </div>

          <div className="text-left hidden sm:block">
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-bold text-white tracking-wide">Sofia</span>
              <span className="text-[10px] px-1.5 py-0.2 rounded bg-[#C9A227]/20 text-amber-300 font-semibold uppercase">
                Online
              </span>
            </div>
            <p className="text-[11px] text-slate-300">Tirar dúvidas rápidas</p>
          </div>

          {hasUnread && (
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#C9A227] text-slate-950 font-bold text-[10px] rounded-full flex items-center justify-center animate-bounce">
              1
            </span>
          )}
        </button>
      </div>

      {/* Assistant Modal / Chat Box */}
      {isOpen && (
        <div className="fixed bottom-24 left-4 sm:left-6 z-50 w-[92vw] sm:w-[380px] max-h-[580px] h-[520px] rounded-3xl bg-[#080E1A] border border-[#C9A227]/30 shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-300">
          
          {/* Header */}
          <div className="px-5 py-4 bg-gradient-to-r from-[#0E1A2E] to-[#0A1220] border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-[#D4AF37] shrink-0">
                <img
                  src={ASSISTANT_AVATAR}
                  alt="Sofia - Assistente Virtual"
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 border-2 border-[#0E1A2E]" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="text-sm font-bold text-white">Sofia</h3>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-400/10 text-amber-300 border border-amber-400/20">
                    Concierge
                  </span>
                </div>
                <p className="text-[11px] text-slate-400">Beltrão Advocacia Digital</p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Fechar assistente"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3.5 text-xs">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`max-w-[85%] p-3.5 rounded-2xl leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-[#C9A227] text-slate-950 font-medium rounded-tr-none'
                      : 'bg-[#101B2E] text-slate-200 border border-slate-800/80 rounded-tl-none shadow-sm'
                  }`}
                >
                  <p>{msg.text}</p>
                </div>

                {/* WhatsApp Call to action inside assistant message */}
                {msg.whatsappCta && (
                  <div className="mt-2 w-full max-w-[88%]">
                    <a
                      href={msg.whatsappCta.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center justify-center gap-2 w-full p-2.5 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-[#D4AF37] to-[#C9A227] hover:brightness-110 transition-all shadow-md active:scale-95"
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-slate-950" />
                      <span className="truncate">{msg.whatsappCta.label}</span>
                      <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                    </a>
                  </div>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Suggestion Chips */}
          <div className="px-3 py-2 bg-[#0A111E] border-t border-slate-800/80 overflow-x-auto">
            <div className="flex items-center gap-1.5 whitespace-nowrap">
              {quickQuestions.map((q, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleSend(q.label)}
                  className="px-2.5 py-1 rounded-full text-[11px] bg-slate-900 border border-slate-700 hover:border-[#C9A227] hover:text-[#D4AF37] text-slate-300 transition-colors"
                >
                  {q.label}
                </button>
              ))}
            </div>
          </div>

          {/* Input Area */}
          <div className="p-3 bg-[#070B12] border-t border-slate-800 flex items-center gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleSend();
              }}
              placeholder="Digite sua dúvida aqui..."
              className="flex-1 px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#C9A227]"
            />
            <button
              type="button"
              onClick={() => handleSend()}
              disabled={!inputValue.trim()}
              className="p-2.5 rounded-xl bg-[#C9A227] text-slate-950 disabled:opacity-40 hover:brightness-110 transition-all"
              aria-label="Enviar mensagem"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>

        </div>
      )}
    </>
  );
}
