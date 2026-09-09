export interface Product {
  id: string;
  name: string;
  price: number;
  formattedPrice: string;
  description: string;
  category: string;
  imageUrl: string;
  paymentUrl: string;
  rating?: number;
  reviewsCount?: number;
  highlight?: string;
  features?: string[];
}

export type CategoryFilter = string;
export type SortOption = 'default' | 'price-asc' | 'price-desc' | 'name-asc';
