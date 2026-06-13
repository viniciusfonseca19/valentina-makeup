export interface Product {
  id: string;
  name: string;
  description: string;
  price?: string;
  imageUrl: string;
  category: 'rosto' | 'labios' | 'olhos' | 'produtos-intimos' | 'presentes';
  customizable?: boolean;
  whatsappMessage?: string;
  imageRotation?: number;
  imageCrop?: boolean;
}


export const products: Product[] = [
  {
    id: '42',
    name: 'Lip Gloss Hello Kit',
    description: 'Brilho labial intenso e confortável com toque gloss elegante.',
    price: 'R$ 17,99',
    imageUrl: '/img/lip-honey-hello-kit.jpeg',
    category: 'labios'
  },
  {
    id: '43',
    name: 'Body Splash Arabe Yara',
    description: 'Body splash com perfume suave e refrescante para o corpo.',
    price: 'R$ 30,00',
    imageUrl: '/img/bofy-splash-arabe-yara.jpeg',
    category: 'rosto'
  },
  {
    id: '44',
    name: 'Kit Perfume + Gloss Bobbi Rara',
    description: 'Conjunto perfumado com gloss labial e fragrância incrível.',
    price: 'R$ 35,00',
    imageUrl: '/img/kit-perfume+gloss-bobbi-rara.jpeg',
    category: 'presentes'
  },
  {
    id: '45',
    name: 'Espuma de Limpeza Facial Barbie',
    description: 'Espuma de limpeza facial delicada e eficiente para a pele.',
    price: 'R$ 24,99',
    imageUrl: '/img/espuma-limpeza-facial-barbie.jpeg',
    category: 'rosto'
  },
  {
    id: '46',
    name: 'Espelho Gatinho de Mesa',
    description: 'Espelho de mesa charmoso com formato de gatinho para maquiagem.',
    price: 'R$ 10,00',
    imageUrl: '/img/espelho-gatinho-mesa.jpeg',
    category: 'presentes'
  },
  {
    id: '37',
    name: 'Gloss Labial Honey - Inspiração Franciny',
    description: 'Brilho irresistível com efeito mel e hidratação intensa nos lábios.',
    price: 'R$ 9,99',
    imageUrl: '/img/gloss-labial-lip-honey-inspiraco-franciny.jpeg',
    category: 'labios'
  },
  {
    id: '38',
    name: 'Touca de Cetim',
    description: 'Protege os cabelos enquanto você dorme, reduzindo o frizz e preservando o penteado.',
    price: 'R$ 2,99',
    imageUrl: '/img/touca-cetim.jpeg',
    category: 'presentes'
  },
  {
    id: '39',
    name: 'Tiara Nuvem para Maquiagem & Skincare',
    description: 'Tiara macia e fofa que mantém o cabelo afastado do rosto durante a rotina de beleza.',
    price: 'R$ 6,99',
    imageUrl: '/img/tiara-nuvem-para-maquiagem-e-skin-care.jpeg',
    category: 'presentes'
  },
  {
    id: '40',
    name: 'Tiara de Maquiagem',
    description: 'Prática e estilosa, ideal para manter o cabelo preso durante a aplicação da make.',
    price: 'R$ 9,99',
    imageUrl: '/img/tiara-maquiagem.jpeg',
    category: 'presentes'
  },
  {
    id: '41',
    name: 'Frasco Espuma de Limpeza + Faixa Toalha',
    description: 'Kit completo para limpeza facial: frasco para espuma e faixa toalha para proteger o cabelo.',
    price: 'R$ 14,99',
    imageUrl: '/img/frasco-espuma-limpeza+faixa-toalha.jpeg',
    category: 'rosto'
  },
  {
    id: '1',
    name: 'Adesivo protetor tapa Seios',
    description: 'Confortável e discreto, ideal para usar com roupas decotadas.',
    price: 'R$ 5,99',
    imageUrl: '/img/adesivo-protetor-tapa-seios.jpg',
    category: 'produtos-intimos'
  },
  {
    id: '2',
    name: 'Blush da Playboy',
    description: 'Cor radiante e pigmentação na medida certa para um rubor natural.',
    price: 'R$ 13,99',
    imageUrl: '/img/blush-playboy.jpg',
    category: 'rosto',
    imageCrop: true
  },
  {
    id: '3',
    name: 'Pó solto Banana - Fenzza',
    description: 'Finalização impecável, sela a maquiagem e reduz a oleosidade.',
    price: 'R$ 9,99',
    imageUrl: '/img/po-solto-banana-fenzza.jpeg',
    category: 'rosto'
  },
  {
    id: '4',
    name: 'Mini Buquê de Maquiagem',
    description: 'O presente perfeito que reúne os itens essenciais em um lindo buquê.',
    // sem preço — opção personalizada que direciona para WhatsApp
    customizable: true,
    whatsappMessage: 'Olá! Gostaria de montar um Mini Buquê de Maquiagem, por favor.',
    imageUrl: '/img/mini-buque.jpg',
    category: 'presentes',
    imageCrop: true
  },
  {
    id: '5',
    name: 'Espelho formato gatinho',
    description: 'Design fofo e super prático para carregar sempre na bolsa.',
    price: 'R$ 9,99',
    imageUrl: '/img/espelho-formato-gatinho.jpg',
    category: 'presentes'
  },
  {
    id: '6',
    name: 'Pó Banana',
    description: 'Pó solto ultrafino, não estoura no flash e proporciona efeito aveludado.',
    price: 'R$ 9,99',
    imageUrl: '/img/po-banana.jpeg',
    category: 'rosto'
  },
  {
    id: '7',
    name: "Pó Playboy à prova d'água",
    description: 'Resistente à água e ao suor, garantindo maquiagem intacta.',
    price: 'R$ 11,99',
    imageUrl: '/img/pó-playboy-aprova-dagua.png',
    category: 'rosto'
  },
  {
    id: '8',
    name: 'Fixador de Maquiagem Vizzela',
    description: 'Bruma fixadora que hidrata e faz a make durar horas.',
    price: 'R$ 19,99',
    imageUrl: '/img/fixador-maquiagem-vizzela.png',
    category: 'rosto'
  },
  {
    id: '9',
    name: 'Blindagem Poderosa Dapop',
    description: 'Transforma qualquer maquiagem em à prova d água e alta fixação.',
    price: 'R$ 13,99',
    imageUrl: '/img/blindagem-poderosa-dapop.jpeg',
    category: 'rosto'
  },
  {
    id: '10',
    name: 'Bruma fixadora Melu Ruby Rose',
    description: 'Fixa, hidrata e ilumina a pele com um cheirinho incrível.',
    price: 'R$ 13,99',
    imageUrl: '/img/bruma-fixadora-melu-ruby-rose.png',
    category: 'rosto'
  },
  {
    id: '11',
    name: '4 em 1 compacto',
    description: 'Blush, Contorno, Pó Compacto e Iluminador com espelho em um só produto.',
    price: 'R$ 13,99',
    imageUrl: '/img/4-em-1-compacto.png',
    category: 'rosto'
  },
  {
    id: '12',
    name: 'Cílios postiços - Make Lolita',
    description: 'Cílios exuberantes para um olhar marcante e poderoso.',
    price: 'R$ 4,99',
    imageUrl: '/img/cilios-posticos.jpg',
    category: 'olhos'
  },
  {
    id: '13',
    name: "Máscara para cílios à prova d'água",
    description: 'Volume e Alongamento perfeito, resistente à água.',
    price: 'R$ 9,99',
    imageUrl: '/img/mascara-para-cilios.jpg',
    category: 'olhos',
    imageCrop: true
  },
  {
    id: '14',
    name: 'Lenços Demaquilantes',
    description: 'Pele limpa e hidratada de forma rápida e prática.',
    price: 'R$ 6,99',
    imageUrl: '/img/lencos-demaquilantes.jpg',
    category: 'rosto'
  },
  {
    id: '15',
    name: 'Sabonete íntimo feminino 1L',
    description: 'Cuidado e proteção diária, rendimento prolongado.',
    price: 'R$ 9,99',
    imageUrl: '/img/sabonete-intimo-feminino-1L.jpg',
    category: 'produtos-intimos',
    imageCrop: true
  },
  {
    id: '16',
    name: 'Sabonete íntimo feminino',
    description: 'Proteção suave e fragrância delicada para o seu dia a dia.',
    price: 'R$ 6,00',
    imageUrl: '/img/sabonete-feminino-intimo.jpg',
    category: 'produtos-intimos',
    imageRotation: 540
  },
  {
    id: '17',
    name: 'Base Ruby Perfect Blend',
    description: 'Cobertura impecável com acabamento natural que se funde com a pele.',
    price: 'R$ 14,99',
    imageUrl: '/img/base-ruby-rose-perfect-blend.jpg',
    category: 'rosto',
    imageRotation: 270
  },
  {
    id: '18',
    name: 'Lip Gloss',
    description: 'Brilho espelhado e conforto absoluto nos lábios (Com chaveiro de brinde).',
    price: 'R$ 9,99',
    imageUrl: '/img/lip-gloss.jpg',
    category: 'labios'
  },
  {
    id: '35',
    name: 'Lip Gloss Labial Melancia',
    description: 'Brilho suculento e hidratação com chaveiro para levar na bolsa.',
    price: 'R$ 11,99',
    imageUrl: '/img/lip-gloss-labial-melancia.png',
    category: 'labios'
  },
  {
    id: '19',
    name: 'Lip Gloss Ruby Rose',
    description: 'Cores vibrantes, brilho intenso e fórmula não pegajosa.',
    price: 'R$ 11,99',
    imageUrl: '/img/lip-gloss-ruby-rose.jpg',
    category: 'labios'
  },
  {
    id: '20',
    name: 'Kit Pincéis',
    description: 'Conjunto completo de pincéis com cerdas super macias.',
    price: 'R$ 13,99',
    imageUrl: '/img/kit-pinceis.jpeg',
    category: 'presentes'
  },
  {
    id: '21',
    name: 'Máscara Facial',
    description: 'Revitalização e hidratação profunda em minutos.',
    price: 'R$ 1,00',
    imageUrl: '/img/mascara-facial.jpg',
    category: 'rosto',
    imageRotation: 180
  },
  {
    id: '22',
    name: 'Esponja',
    description: 'Textura macia que expande na água, para um acabamento perfeito.',
    price: 'R$ 3,99',
    imageUrl: '/img/esponja.jpg',
    category: 'rosto'
  },
  {
    id: '23',
    name: 'Esponja para aplicar base',
    description: 'Formato chanfrado e textura premium, não absorve produto.',
    price: 'R$ 3,99',
    imageUrl: '/img/esponja-para-aplicar-base.png',
    category: 'presentes'
  },
  {
    id: '24',
    name: 'Kit Esponjas',
    description: 'Esponjas de diferentes tamanhos para todas as áreas do rosto.',
    price: 'R$ 9,99',
    imageUrl: '/img/kit-esponjas.jpg',
    category: 'presentes',
    imageCrop: true
  },
  {
    id: '25',
    name: 'Esfoliante Corporal',
    description: 'Remove células mortas e hidrata a pele profundamente.',
    price: 'R$ 9,99',
    imageUrl: '/img/esfoliante-corporal.jpg',
    category: 'rosto',
    imageCrop: true
  },
  {
    id: '26',
    name: 'Água Micelar Melu',
    description: 'Limpeza profunda e suave, remove maquiagem e impurezas.',
    price: 'R$ 12,99',
    imageUrl: '/img/água-micelar-melu.jpeg',
    category: 'rosto'
  },
  {
    id: '27',
    name: 'Fixador de Maquiagem PHALLBEAUTY',
    description: 'Fixação profissional que mantém sua maquiagem intacta o dia todo.',
    price: 'R$ 17,99',
    imageUrl: '/img/fixador-maquiagem-phallbeauty.png',
    category: 'rosto'
  },
  {
    id: '28',
    name: 'Sérum Facial Melu',
    description: 'Hidratação intensiva com ativos que renovam a pele.',
    price: 'R$ 12,99',
    imageUrl: '/img/serum-facial-melu.jpeg',
    category: 'rosto'
  },
  {
    id: '29',
    name: 'Skincare',
    description: 'Cuidado completo da pele com fórmula potente.',
    price: 'R$ 9,99',
    imageUrl: '/img/skincare.jpeg',
    category: 'rosto'
  },
  {
    id: '30',
    name: 'Pincel para Pó e Blush',
    description: 'Cerdas macias e retentivas para aplicação precisa.',
    price: 'R$ 11,99',
    imageUrl: '/img/pincel-para-po-blush.jpg',
    category: 'presentes'
  },
  {
    id: '31',
    name: 'Pó compacto',
    description: 'Acabamento perfeito e longa duração, sem criar linhas.',
    price: 'R$ 9,00',
    imageUrl: '/img/po-compacto.jpg',
    category: 'rosto'
  },
  {
    id: '32',
    name: 'Esponja para pó',
    description: 'Aplicação suave e uniforme do pó compacto.',
    price: 'R$ 2,99',
    imageUrl: '/img/esponja-para-po.jpg',
    category: 'rosto'
  },
  {
    id: '33',
    name: 'Base Mia Make',
    description: 'Cobertura média a alta com acabamento natural e duradouro.',
    price: 'R$ 14,99',
    imageUrl: '/img/base-mia-make.jpg',
    category: 'rosto',
    imageCrop: true
  },
  {
    id: '34',
    name: 'Kit Banho de Lua',
    description: 'Kit especial com os produtos essenciais para um banho de lua perfeito.',
    price: 'R$ 9,99',
    imageUrl: '/img/kit-banho-lua.jpg',
    category: 'presentes'
  },
  {
    id: '36',
    name: 'Lapis Preto - Luisance',
    description: 'Lápis preto para delineado preciso e acabamento intenso.',
    price: 'R$ 3,50',
    imageUrl: '/img/lapis-preto.jpg',
    category: 'olhos'
  },
];