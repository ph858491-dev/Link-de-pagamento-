import { Product } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'bola-pet',
    name: 'Bola pet',
    price: 20.16,
    formattedPrice: 'R$ 20,16',
    description: 'Bola interativa com corda',
    category: 'Brinquedos Interativos para Cães e Gatos',
    imageUrl: 'https://http2.mlstatic.com/D_NQ_NP_2X_735050-MLB115827212311_082026-F-bola-pet-inteligente-automatica-giratoria-e-recarregavel-usb.webp',
    paymentUrl: 'https://buy.stripe.com/test_28E3cw5yl06K2DNdbD4c801',
    rating: 4.8,
    reviewsCount: 142,
    highlight: 'Mais Vendido',
    features: [
      'Estimula a atividade física e mental',
      'Material resistente e seguro para mordidas',
      'Ideal para brincadeiras de arremesso e puxa-puxa',
      'Ajuda na limpeza mecânica dos dentes'
    ]
  },
  {
    id: 'cama-pet-porte-medio',
    name: 'Cama Pet porte medio',
    price: 39.86,
    formattedPrice: 'R$ 39,86',
    description: 'Impermeável / Tamanho G',
    category: 'Cama para Cães e Gatos',
    imageUrl: 'https://http2.mlstatic.com/D_NQ_NP_2X_731954-MLB114681150324_082026-F-cama-pet-cachorro-porte-grandemedio-impermeavel-tamanho-g.webp',
    paymentUrl: 'https://buy.stripe.com/test_4gM14od0N2eS4LVfjL4c802',
    rating: 4.9,
    reviewsCount: 89,
    highlight: 'Conforto Máximo',
    features: [
      'Tecido impermeável e de fácil higienização',
      'Bordas reforçadas com espuma de alta densidade',
      'Fundo antiderrapante resistente à umidade',
      'Excelente isolamento térmico contra pisos frios'
    ]
  },
  {
    id: 'coleira-peitoral',
    name: 'Coleita peitoral',
    price: 32.86,
    formattedPrice: 'R$ 32,86',
    description: 'Coleira peitoral H com guia inclusa',
    category: 'Coleira para cães',
    imageUrl: 'https://http2.mlstatic.com/D_NQ_NP_2X_652479-MLA113977906205_062026-F.webp',
    paymentUrl: 'https://buy.stripe.com/test_fZu14obWJaLo7Y7gnP4c803',
    rating: 4.7,
    reviewsCount: 63,
    highlight: 'Passeio Seguro',
    features: [
      'Modelo em H que não sufoca nem machuca o pescoço',
      'Acompanha guia resistente com mosquetão giratório',
      'Ajustes múltiplos no peito e pescoço',
      'Trava de segurança reforçada'
    ]
  },
  {
    id: 'comedouro-duplo-elevado',
    name: 'Comedouro duplo elevado P',
    price: 33.90,
    formattedPrice: 'R$ 33,90',
    description: 'Comedouro elevado duplo médio',
    category: 'Comedouro para cães',
    imageUrl: 'https://http2.mlstatic.com/D_NQ_NP_2X_678211-MLB91927210770_092025-F-comedouro-duplo-elevado-p-pet-dupla-funcionalidade-promocao.webp',
    paymentUrl: 'https://buy.stripe.com/test_9B6eVe9OBaLo2DN9Zr4c804',
    rating: 4.8,
    reviewsCount: 115,
    highlight: 'Postura Saudável',
    features: [
      'Altura elevada para melhor digestão e ergonomia',
      '2 recipientes removíveis fáceis de limpar',
      'Suporte firme com base estável',
      'Adequado para água e ração seca ou úmida'
    ]
  },
  {
    id: 'benebone',
    name: 'Benebone',
    price: 138.62,
    formattedPrice: 'R$ 138,62',
    description: 'Osso para interação e mastigação',
    category: 'Mordedor para cães',
    imageUrl: 'https://http2.mlstatic.com/D_NQ_NP_2X_741667-MLA100055798893_122025-F.webp',
    paymentUrl: 'https://buy.stripe.com/test_4gM28s9OB2eS5PZ7Rj4c805',
    rating: 5.0,
    reviewsCount: 204,
    highlight: 'Alta Durabilidade',
    features: [
      'Nylon super resistente para cães de mordida forte',
      'Design ergonômico fácil de segurar com as patas',
      'Satisfaz o instinto natural de roer e alivia o estresse',
      'Recomendado por veterinários e adestradores'
    ]
  }
];

export const CATEGORIES = [
  'Todas',
  'Brinquedos Interativos para Cães e Gatos',
  'Cama para Cães e Gatos',
  'Coleira para cães',
  'Comedouro para cães',
  'Mordedor para cães'
];
