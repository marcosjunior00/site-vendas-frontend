export type Product = {
  id: string;
  name: string;
  category: string;
  description: string;
  price: number;
  installment: string;
  previewTone: string;
  headline: string;
  longDescription: string;
  benefits: string[];
  specifications: string[];
  includes: string[];
  stockLabel: string;
  shippingLabel: string;
};

export const products: Product[] = [
  {
    id: "aurora-headset",
    name: "Headset Aurora Pro",
    category: "Eletrônicos",
    description:
      "Áudio imersivo com cancelamento de ruído e bateria de longa duração.",
    price: 489.9,
    installment: "ou 10x de R$ 48,99 sem juros",
    previewTone: "from-sky-500/20 to-sky-700/10",
    headline: "Imersão total para trabalho, jogos e chamadas sem ruído.",
    longDescription:
      "O Aurora Pro foi pensado para quem precisa alternar entre foco, mobilidade e qualidade de áudio. A concha ergonômica reduz a pressão prolongada, enquanto o microfone com redução de ruído mantém a voz clara em reuniões e streams.",
    benefits: [
      "Bluetooth 5.4 com conexão estável",
      "Cancelamento híbrido de ruído",
      "Até 32 horas de bateria",
      "Microfone com captação direcional",
    ],
    specifications: [
      "Driver de 40 mm",
      "Peso de 245 g",
      "Carregamento USB-C",
      "Compatível com iOS, Android e desktop",
    ],
    includes: [
      "Headset Aurora Pro",
      "Cabo USB-C",
      "Estojo de transporte",
    ],
    stockLabel: "Pronto para envio",
    shippingLabel: "Entrega expressa disponível",
  },
  {
    id: "pulse-watch",
    name: "Smartwatch Pulse One",
    category: "Wearables",
    description: "Monitoramento de saúde, GPS integrado e acabamento leve.",
    price: 699.9,
    installment: "ou 12x de R$ 58,33 sem juros",
    previewTone: "from-cyan-500/20 to-cyan-700/10",
    headline: "Acompanhe treino, sono e rotina em um único painel.",
    longDescription:
      "O Pulse One combina leitura rápida de métricas com um visual discreto para o dia inteiro. Ele entrega monitoramento contínuo, GPS integrado e uma interface direta para notificações, treinos e objetivos de saúde.",
    benefits: [
      "Tela AMOLED de alto brilho",
      "Monitoramento cardíaco contínuo",
      "GPS integrado",
      "Até 7 dias de bateria",
    ],
    specifications: [
      "Caixa de alumínio",
      "Resistência IP68",
      "Pulseira removível",
      "Compatível com Android e iPhone",
    ],
    includes: ["Smartwatch", "Base magnética", "Pulseira extra"],
    stockLabel: "Últimas unidades",
    shippingLabel: "Frete grátis para capitais",
  },
  {
    id: "linen-chair",
    name: "Poltrona Linen",
    category: "Casa",
    description: "Poltrona compacta com tecido premium e estrutura em madeira.",
    price: 1290,
    installment: "ou 12x de R$ 107,50 sem juros",
    previewTone: "from-stone-400/25 to-stone-700/10",
    headline: "Conforto visual e físico para leitura, recepção e descanso.",
    longDescription:
      "A Poltrona Linen foi desenhada para valorizar ambientes sem exagero visual. O assento generoso, o tecido texturizado e a estrutura em madeira criam uma peça de presença forte, mas fácil de combinar com salas e escritórios.",
    benefits: [
      "Estrutura reforçada em madeira",
      "Tecido premium com toque macio",
      "Espuma de alta densidade",
      "Design compacto para ambientes menores",
    ],
    specifications: [
      "Altura de 82 cm",
      "Largura de 74 cm",
      "Profundidade de 78 cm",
      "Suporta até 140 kg",
    ],
    includes: ["Poltrona montada", "Manual de cuidado"],
    stockLabel: "Produção imediata",
    shippingLabel: "Entrega agendada",
  },
  {
    id: "brew-station",
    name: "Cafeteira Brew Station",
    category: "Cozinha",
    description: "Programação automática e jarra térmica para o café do dia.",
    price: 359.9,
    installment: "ou 8x de R$ 44,99 sem juros",
    previewTone: "from-amber-500/20 to-amber-700/10",
    headline: "Rotina mais simples com café pronto no momento certo.",
    longDescription:
      "A Brew Station resolve o básico muito bem: preparar café consistente, manter a temperatura e permitir agendamento antecipado. É um produto funcional para casas e pequenos escritórios que valorizam praticidade.",
    benefits: [
      "Timer programável",
      "Jarra térmica inclusa",
      "Capacidade para 1,2 litro",
      "Sistema antigotejamento",
    ],
    specifications: [
      "Potência de 900 W",
      "Filtro removível",
      "Desligamento automático",
      "Painel frontal simples",
    ],
    includes: ["Cafeteira", "Jarra térmica", "Colher medidora"],
    stockLabel: "Estoque regular",
    shippingLabel: "Despacho em 24 horas",
  },
  {
    id: "studio-lamp",
    name: "Luminária Studio Beam",
    category: "Decoração",
    description: "Luz ajustável com três temperaturas de cor para mesa ou quarto.",
    price: 219.9,
    installment: "ou 6x de R$ 36,65 sem juros",
    previewTone: "from-yellow-500/20 to-yellow-700/10",
    headline: "Iluminação ajustável para foco, leitura e ambientação.",
    longDescription:
      "A Studio Beam entrega luz pontual sem ocupar muito espaço. A base metálica dá estabilidade, e as três temperaturas de cor ajudam a adaptar o ambiente para trabalho, leitura noturna ou decoração.",
    benefits: [
      "Três temperaturas de cor",
      "Base metálica estável",
      "Braço articulado",
      "Baixo consumo energético",
    ],
    specifications: [
      "Altura máxima de 48 cm",
      "Lâmpada LED integrada",
      "Acabamento fosco",
      "Interruptor tátil",
    ],
    includes: ["Luminária", "Fonte de energia", "Manual"],
    stockLabel: "Pronta entrega",
    shippingLabel: "Frete econômico disponível",
  },
  {
    id: "urban-pack",
    name: "Mochila Urban Pack",
    category: "Lifestyle",
    description: "Mochila resistente à água com compartimentos internos organizados.",
    price: 279.9,
    installment: "ou 6x de R$ 46,65 sem juros",
    previewTone: "from-violet-500/20 to-violet-700/10",
    headline: "Organização, mobilidade e proteção para rotina urbana.",
    longDescription:
      "A Urban Pack foi pensada para deslocamentos frequentes. O tecido externo repele água leve, o espaço interno acomoda notebook e acessórios e o formato compacto mantém um visual limpo para trabalho ou estudo.",
    benefits: [
      "Compartimento acolchoado para notebook",
      "Tecido resistente à água",
      "Alças reforçadas",
      "Organização interna inteligente",
    ],
    specifications: [
      "Capacidade de 18 litros",
      "Compatível com notebook de 15 polegadas",
      "Bolso lateral oculto",
      "Zíper reforçado",
    ],
    includes: ["Mochila", "Etiqueta de identificação"],
    stockLabel: "Alta demanda",
    shippingLabel: "Envio no mesmo dia útil",
  },
  {
    id: "glass-bottle",
    name: "Garrafa Térmica Glass",
    category: "Cozinha",
    description: "Mantém a temperatura por horas com acabamento fosco e tampa segura.",
    price: 149.9,
    installment: "ou 4x de R$ 37,48 sem juros",
    previewTone: "from-emerald-500/20 to-emerald-700/10",
    headline: "Temperatura estável e visual limpo para uso diário.",
    longDescription:
      "A Glass é uma garrafa térmica prática para quem leva bebida para o trabalho, academia ou deslocamentos curtos. Ela une acabamento discreto, boa vedação e uma pegada confortável.",
    benefits: [
      "Conserva quente e frio por horas",
      "Tampa com vedação segura",
      "Acabamento fosco antiderrapante",
      "Formato fácil de transportar",
    ],
    specifications: [
      "Capacidade de 650 ml",
      "Corpo em aço inox",
      "Livre de BPA",
      "Peso de 320 g",
    ],
    includes: ["Garrafa térmica", "Manual de uso"],
    stockLabel: "Pronto para envio",
    shippingLabel: "Entrega expressa disponível",
  },
  {
    id: "desk-stand",
    name: "Suporte Desk Stand",
    category: "Acessórios",
    description: "Base para notebook em alumínio com ajuste confortável para uso diário.",
    price: 189.9,
    installment: "ou 5x de R$ 37,98 sem juros",
    previewTone: "from-slate-500/20 to-slate-700/10",
    headline: "Mais ergonomia e ventilação para a estação de trabalho.",
    longDescription:
      "O Desk Stand eleva a tela do notebook para uma postura mais confortável e melhora a circulação de ar na base do aparelho. É um acessório direto, útil e fácil de integrar ao setup.",
    benefits: [
      "Estrutura em alumínio",
      "Base antiderrapante",
      "Melhora a ventilação do notebook",
      "Visual discreto para setups limpos",
    ],
    specifications: [
      "Compatível com 11 a 16 polegadas",
      "Peso de 540 g",
      "Acabamento fosco",
      "Base com silicone",
    ],
    includes: ["Suporte", "Manual rápido"],
    stockLabel: "Pronta entrega",
    shippingLabel: "Envio em 24 horas",
  },
  {
    id: "flow-keyboard",
    name: "Teclado Flow Keys",
    category: "Eletrônicos",
    description: "Teclado compacto com conexão sem fio e digitação silenciosa.",
    price: 329.9,
    installment: "ou 6x de R$ 54,98 sem juros",
    previewTone: "from-blue-500/20 to-blue-700/10",
    headline: "Produtividade com digitação leve e layout compacto.",
    longDescription:
      "O Flow Keys foi projetado para setups minimalistas e longas horas de uso. A digitação silenciosa, o perfil baixo das teclas e a conexão sem fio deixam a mesa mais limpa e o uso mais confortável.",
    benefits: [
      "Conexão sem fio estável",
      "Teclas de perfil baixo",
      "Digitação silenciosa",
      "Formato compacto",
    ],
    specifications: [
      "Layout ABNT2",
      "Bateria recarregável",
      "Conector USB-C",
      "Compatível com Windows e macOS",
    ],
    includes: ["Teclado", "Cabo USB-C", "Guia rápido"],
    stockLabel: "Em estoque",
    shippingLabel: "Frete grátis acima de R$ 299",
  },
];

export function getProductById(id: string) {
  return products.find((product) => product.id === id);
}
