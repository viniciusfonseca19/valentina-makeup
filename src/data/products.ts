export interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  imageUrl: string;
  category: 'rosto' | 'labios' | 'olhos' | 'produtos-intimos' | 'presentes';
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Adesivo protetor tapa Seios',
    description: 'Confortável e discreto, ideal para usar com roupas decotadas.',
    price: 'R$ 15,90',
    imageUrl: '',
    category: 'produtos-intimos'
  },
  {
    id: '2',
    name: 'Blush da Playboy',
    description: 'Cor radiante e pigmentação na medida certa para um rubor natural.',
    price: 'R$ 18,90',
    imageUrl: 'https://images.unsplash.com/photo-1596462502278-27bf85033e5a?auto=format&fit=crop&w=600&q=80',
    category: 'rosto'
  },
  {
    id: '3',
    name: 'Pó solto Banana - Fenzza',
    description: 'Finalização impecável, sela a maquiagem e reduz a oleosidade.',
    price: 'R$ 22,90',
    imageUrl: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=600&q=80',
    category: 'rosto'
  },
  {
    id: '4',
    name: 'Mini Buquê de Maquiagem',
    description: 'O presente perfeito que reúne os itens essenciais em um lindo buquê.',
    price: 'R$ 99,90',
    imageUrl: '',
    category: 'presentes'
  },
  {
    id: '5',
    name: 'Espelho formato gatinho',
    description: 'Design fofo e super prático para carregar sempre na bolsa.',
    price: 'R$ 25,90',
    imageUrl: '',
    category: 'presentes'
  },
  {
    id: '6',
    name: 'Pó Banana',
    description: 'Pó solto ultrafino, não estoura no flash e proporciona efeito aveludado.',
    price: 'R$ 19,90',
    imageUrl: 'https://images.unsplash.com/photo-1629824647361-26ddaf526c45?auto=format&fit=crop&w=600&q=80',
    category: 'rosto'
  },
  {
    id: '7',
    name: 'Pó Playboy á Prova dágua',
    description: 'Resistente à água e ao suor, garantindo maquiagem intacta.',
    price: 'R$ 24,90',
    imageUrl: 'https://images.unsplash.com/photo-1608248597481-496100c80836?auto=format&fit=crop&w=600&q=80',
    category: 'rosto'
  },
  {
    id: '8',
    name: 'Fixador de Maquiagem Vizzela',
    description: 'Bruma fixadora que hidrata e faz a make durar horas.',
    price: 'R$ 45,90',
    imageUrl: 'https://images.unsplash.com/photo-1631730359575-38e4755d772b?auto=format&fit=crop&w=600&q=80',
    category: 'rosto'
  },
  {
    id: '9',
    name: 'Blindagem Poderosa Dapop',
    description: 'Transforma qualquer maquiagem em à prova dágua e alta fixação.',
    price: 'R$ 32,90',
    imageUrl: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80',
    category: 'rosto'
  },
  {
    id: '10',
    name: 'Bruma fixadora Melu Ruby Rose',
    description: 'Fixa, hidrata e ilumina a pele com um cheirinho incrível.',
    price: 'R$ 28,90',
    imageUrl: 'https://images.unsplash.com/photo-1596462502278-27bf85033e5a?auto=format&fit=crop&w=600&q=80',
    category: 'rosto'
  },
  {
    id: '11',
    name: '4 em 1 compacto',
    description: 'Blush, Contorno, Pó Compacto e Iluminador com espelho em um só produto.',
    price: 'R$ 39,90',
    imageUrl: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=600&q=80',
    category: 'rosto'
  },
  {
    id: '12',
    name: 'Cílios postiços - Make Lolita',
    description: 'Cílios exuberantes para um olhar marcante e poderoso.',
    price: 'R$ 12,90',
    imageUrl: 'https://images.unsplash.com/photo-1512496115851-a1c8f137e02c?auto=format&fit=crop&w=600&q=80',
    category: 'olhos'
  },
  {
    id: '13',
    name: 'Máscara para cílios á prova dágua',
    description: 'Volume e Alongamento perfeito, resistente à água.',
    price: 'R$ 35,90',
    imageUrl: 'https://images.unsplash.com/photo-1631214500515-e4cae42ffd1b?auto=format&fit=crop&w=600&q=80',
    category: 'olhos'
  },
  {
    id: '14',
    name: 'Lenços Demaquilantes',
    description: 'Pele limpa e hidratada de forma rápida e prática.',
    price: 'R$ 18,90',
    imageUrl: '',
    category: 'rosto'
  },
  {
    id: '15',
    name: 'Sabonete íntimo feminino 1L',
    description: 'Cuidado e proteção diária, rendimento prolongado.',
    price: 'R$ 49,90',
    imageUrl: '',
    category: 'produtos-intimos'
  },
  {
    id: '16',
    name: 'Sabonete íntimo feminino',
    description: 'Proteção suave e fragrância delicada para o seu dia a dia.',
    price: 'R$ 19,90',
    imageUrl: '',
    category: 'produtos-intimos'
  },
  {
    id: '17',
    name: 'Base Ruby Perfect Blend',
    description: 'Cobertura impecável com acabamento natural que se funde com a pele.',
    price: 'R$ 38,90',
    imageUrl: 'https://images.unsplash.com/photo-1596462502278-27bf85033e5a?auto=format&fit=crop&w=600&q=80',
    category: 'rosto'
  },
  {
    id: '18',
    name: 'Lip Gloss',
    description: 'Brilho espelhado e conforto absoluto nos lábios.',
    price: 'R$ 15,90',
    imageUrl: 'https://images.unsplash.com/photo-1629824647361-26ddaf526c45?auto=format&fit=crop&w=600&q=80',
    category: 'labios'
  },
  {
    id: '19',
    name: 'Lip Gloss Ruby Rose',
    description: 'Cores vibrantes, brilho intenso e fórmula não pegajosa.',
    price: 'R$ 22,90',
    imageUrl: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=600&q=80',
    category: 'labios'
  },
  {
    id: '20',
    name: 'Kit Pincéis',
    description: 'Conjunto completo de pincéis com cerdas super macias.',
    price: 'R$ 59,90',
    imageUrl: '',
    category: 'presentes'
  },
  {
    id: '21',
    name: 'Máscara Facial',
    description: 'Revitalização e hidratação profunda em minutos.',
    price: 'R$ 14,90',
    imageUrl: '',
    category: 'rosto'
  },
  {
    id: '22',
    name: 'Esponja',
    description: 'Textura macia que expande na água, para um acabamento perfeito.',
    price: 'R$ 10,90',
    imageUrl: '',
    category: 'rosto'
  },
  {
    id: '23',
    name: 'Esponja para aplicar base',
    description: 'Formato chanfrado e textura premium, não absorve produto.',
    price: 'R$ 18,90',
    imageUrl: '',
    category: 'presentes'
  },
  {
    id: '24',
    name: 'Kit Esponjas',
    description: 'Esponjas de diferentes tamanhos para todas as áreas do rosto.',
    price: 'R$ 35,90',
    imageUrl: '',
    category: 'presentes'
  },
  {
    id: '25',
    name: 'Esfoliante Corporal',
    description: 'Remove células mortas e hidrata a pele profundamente.',
    price: 'R$ 45,90',
    imageUrl: '',
    category: 'rosto'
  }
];
