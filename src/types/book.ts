export type BookStatus = 'done' | 'reading' | 'want';
export interface Book {
  id: number;
  title: string;
  author: string;
  status: BookStatus;
  rating?: number;
  note?: string;
  coverUrl?: string;
}