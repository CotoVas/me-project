export interface NewBookType {
  id: number;
  title: string;
  author: string;
  rating: number;
  oldPrice: number;
  newPrice: number;
  discount: number;
  cover?: string;
}

