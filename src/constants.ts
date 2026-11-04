export const LAWYER_NAME = "Lucas Beltrão da Silveira";
export const LAW_FIRM_NAME = "Beltrão Advocacia";
export const DOMAIN = "advbeltrao.com.br";
export const PHONE_DISPLAY = "(21) 96777-3206";
export const PHONE_RAW = "5521967773206";

export const OFFICIAL_LOGO_URL = "https://i.postimg.cc/VkLwqyyV/Logo-juridico-dourado-Beltrao-Advocacia.png";

export const WHATSAPP_LINKS = {
  default: `https://wa.me/${PHONE_RAW}?text=${encodeURIComponent("Olá Dr. Lucas, vim pelo site e gostaria de falar sobre o meu caso.")}`,
  previdenciario: `https://wa.me/${PHONE_RAW}?text=${encodeURIComponent("Olá Dr. Lucas, vim pelo site e gostaria de falar sobre um caso previdenciário.")}`,
  consumidor: `https://wa.me/${PHONE_RAW}?text=${encodeURIComponent("Olá Dr. Lucas, vim pelo site e gostaria de falar sobre um problema com banco/negativação.")}`,
  direitoDigital: `https://wa.me/${PHONE_RAW}?text=${encodeURIComponent("Olá Dr. Lucas, vim pelo site e gostaria de falar sobre bloqueio em aplicativo/plataforma.")}`,
  maternidade: `https://wa.me/${PHONE_RAW}?text=${encodeURIComponent("Olá Dr. Lucas, vim pelo site e gostaria de orientação sobre Salário-Maternidade.")}`,
  aposentadoria: `https://wa.me/${PHONE_RAW}?text=${encodeURIComponent("Olá Dr. Lucas, vim pelo site e gostaria de orientação sobre Aposentadoria e Planejamento Previdenciário.")}`,
  bpcLoas: `https://wa.me/${PHONE_RAW}?text=${encodeURIComponent("Olá Dr. Lucas, vim pelo site e gostaria de falar sobre o benefício BPC/LOAS.")}`,
  bancos: `https://wa.me/${PHONE_RAW}?text=${encodeURIComponent("Olá Dr. Lucas, vim pelo site e gostaria de ajuda com fraudes bancárias ou descontos indevidos.")}`,
  negativacao: `https://wa.me/${PHONE_RAW}?text=${encodeURIComponent("Olá Dr. Lucas, vim pelo site e gostaria de verificar uma negativação indevida no SPC/Serasa.")}`,
  motoristasEntregadores: `https://wa.me/${PHONE_RAW}?text=${encodeURIComponent("Olá Dr. Lucas, sou motorista/entregador de aplicativo e tive minha conta bloqueada indevidamente.")}`,
};

export interface PracticeSubItem {
  title: string;
  description: string;
  items: string[];
  ctaText: string;
  whatsappUrl: string;
}

export interface PracticeArea {
  id: string;
  title: string;
  shortDescription: string;
  iconName: string;
  whatsappUrl: string;
  ctaText: string;
  subCategories: PracticeSubItem[];
}

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: "previdenciario",
    title: "Direito Previdenciário",
    shortDescription: "Proteção completa para segurados do INSS. Garanta o melhor benefício para o seu futuro e de sua família.",
    iconName: "ShieldCheck",
    whatsappUrl: WHATSAPP_LINKS.previdenciario,
    ctaText: "Falar sobre caso Previdenciário",
    subCategories: [
      {
        title: "Salário-Maternidade",
        description: "Auxílio financeiro essencial para seguradas e gestantes no momento mais importante da vida familiar.",
        whatsappUrl: WHATSAPP_LINKS.maternidade,
        ctaText: "Consultar Salário-Maternidade",
        items: [
          "Orientação e requerimento de salário-maternidade para gestantes",
          "Análise detalhada do direito ao benefício para seguradas do INSS",
          "Atuação ágil em casos de benefício negado ou não concedido administrativamente"
        ]
      },
      {
        title: "Aposentadorias e Planejamento",
        description: "Conquiste sua aposentadoria com o maior valor possível e sem surpresas burocráticas.",
        whatsappUrl: WHATSAPP_LINKS.aposentadoria,
        ctaText: "Analisar minha Aposentadoria",
        items: [
          "Aposentadoria por tempo de contribuição (regras de transição)",
          "Aposentadoria por idade urbana e rural",
          "Análise aprofundada do tempo de contribuição e tempo especial",
          "Planejamento previdenciário preventivo e estratégico",
          "Revisão de benefícios e análise de períodos não reconhecidos pelo INSS"
        ]
      },
      {
        title: "BPC / LOAS",
        description: "Benefício assistencial de um salário mínimo mensal para quem realmente necessita de amparo.",
        whatsappUrl: WHATSAPP_LINKS.bpcLoas,
        ctaText: "Verificar Direito ao BPC/LOAS",
        items: [
          "Benefício assistencial à pessoa idosa (a partir de 65 anos)",
          "BPC para pessoa com deficiência de qualquer idade",
          "Orientação técnica sobre critérios de renda e documentação médica",
          "Atuação combativa em casos de indeferimento, corte ou suspensão do benefício"
        ]
      }
    ]
  },
  {
    id: "consumidor",
    title: "Direito do Consumidor",
    shortDescription: "Defesa enérgica contra abusos de instituições bancárias, negativações indevidas e cobranças ilegais.",
    iconName: "Scale",
    whatsappUrl: WHATSAPP_LINKS.consumidor,
    ctaText: "Falar sobre Direito do Consumidor",
    subCategories: [
      {
        title: "Problemas com Bancos e Instituições Financeiras",
        description: "Recuperação de prejuízos e anulação de cobranças causadas por fraudes ou falhas dos bancos.",
        whatsappUrl: WHATSAPP_LINKS.bancos,
        ctaText: "Resolver Fraude ou Cobrança",
        items: [
          "Fraudes bancárias e transferências via PIX não reconhecidas",
          "Empréstimos consignados ou pessoais não contratados",
          "Descontos indevidos em aposentadorias e benefícios do INSS",
          "Cobranças indevidas recorrentes em contas correntes e cartões",
          "Compras e transações fraudulentas não reconhecidas",
          "Problemas abusivos relacionados a faturas e limites de cartões de crédito"
        ]
      },
      {
        title: "Negativação Indevida – Nome Sujo",
        description: "Restabelecimento imediato do seu crédito com pedido de indenização justa por danos morais.",
        whatsappUrl: WHATSAPP_LINKS.negativacao,
        ctaText: "Limpar Nome e Pedir Indenização",
        items: [
          "Inscrição injusta ou irregular no SPC, Serasa e Boa Vista",
          "Cobranças abusivas de dívidas inexistentes ou forjadas",
          "Dívidas já quitadas que continuam sendo cobradas ou protestadas",
          "Manutenção indevida do nome nos cadastros de inadimplentes após pagamento",
          "Ação rápida para regularização cadastral e busca de indenização por danos morais"
        ]
      }
    ]
  },
  {
    id: "direito-digital",
    title: "Direito Digital e Aplicativos",
    shortDescription: "Reativação de contas suspensas e liberação de saldo bloqueado injustamente em plataformas e apps.",
    iconName: "Smartphone",
    whatsappUrl: WHATSAPP_LINKS.direitoDigital,
    ctaText: "Falar sobre Bloqueio de App",
    subCategories: [
      {
        title: "Para Entregadores e Motoristas de Aplicativo",
        description: "Defesa do seu ganha-pão contra desativações arbitrárias de Uber, 99, iFood e outras plataformas.",
        whatsappUrl: WHATSAPP_LINKS.motoristasEntregadores,
        ctaText: "Reativar Conta de Motorista/Entregador",
        items: [
          "Bloqueio, desativação ou banimento indevido de contas de trabalho",
          "Suspensão de conta sem justificativa clara ou sem prova concreta",
          "Cancelamento unilateral e arbitrário do cadastro profissional",
          "Restrições indevidas de acesso aos recursos da plataforma",
          "Retenção ilegal de valores, corridas e repasses pendentes",
          "Garantia ao amplo direito de defesa e revisão judicial imediata do bloqueio"
        ]
      },
      {
        title: "Para Clientes e Usuários de Serviços Digitais",
        description: "Recuperação do seu acesso, saldo retido e dados pessoais em redes sociais, e-commerces e apps.",
        whatsappUrl: WHATSAPP_LINKS.direitoDigital,
        ctaText: "Desbloquear Conta de Usuário",
        items: [
          "Bloqueio indevido de contas em redes sociais e e-commerces",
          "Suspensão repentina de acesso a serviços digitais pagos",
          "Cancelamento injustificado de cadastros com histórico de compras",
          "Retenção de saldo em carteiras digitais, milhas ou créditos de compras",
          "Falhas graves na prestação de serviços por plataformas online"
        ]
      }
    ]
  }
];

export const DIGITAL_STEPS = [
  {
    step: "01",
    title: "Contato Ágil no WhatsApp",
    description: "Você nos chama pelo WhatsApp oficial clicando nos botões do site e nos conta brevemente o que aconteceu."
  },
  {
    step: "02",
    title: "Análise Individualizada e Documental",
    description: "Você envia fotos ou PDFs dos documentos direto pelo celular, com total sigilo e comodidade."
  },
  {
    step: "03",
    title: "Estratégia Jurídica sob Medida",
    description: "Apresentamos o diagnóstico do seu caso, explicando claramente as opções administrativas ou judiciais cabíveis."
  },
  {
    step: "04",
    title: "Acompanhamento Contínuo",
    description: "Você recebe informações e atualizações regulares de cada andamento sem precisar sair de casa."
  }
];

export const FAQS = [
  {
    question: "Como funciona o atendimento jurídico 100% digital?",
    answer: "Todo o contato é feito com praticidade pelo WhatsApp, telefone ou e-mail. Você não precisa se deslocar nem faltar ao trabalho. Os documentos são enviados de forma segura em foto ou PDF pelo próprio smartphone e os contratos são assinados digitalmente com validade jurídica oficial."
  },
  {
    question: "Posso ser atendido mesmo estando em outro estado do Brasil?",
    answer: "Sim! Com a digitalização dos tribunais e do próprio INSS (Processo Judicial Eletrônico e Meu INSS), a atuação advocatícia ocorre de forma integrada em todo o território nacional, com agilidade e total respaldo legal."
  },
  {
    question: "Quanto tempo demora para analisar o meu caso?",
    answer: "Nosso primeiro retorno pelo WhatsApp é realizado com máxima agilidade. Após o envio dos documentos solicitados, fazemos uma análise técnica e individualizada para orientar os próximos passos."
  },
  {
    question: "O que fazer se meu nome foi colocado indevidamente no SPC/Serasa?",
    answer: "Se a dívida não existe, já foi paga ou resultou de golpe/fraude, trata-se de negativação indevida. É possível buscar judicialmente a exclusão liminar imediata do apontamento, além de pleitear indenização por danos morais."
  },
  {
    question: "Fui bloqueado na Uber, 99 ou iFood sem justificativa. Há solução?",
    answer: "Sim. A jurisprudência brasileira protege motoristas e entregadores contra bloqueios sumários sem direito de defesa prévio e sem justificativa plausível. É cabível notificação extrajudicial e, se necessário, ação com pedido de tutela de urgência (liminar) para reativação da conta e liberação de saldos retidos."
  }
];
