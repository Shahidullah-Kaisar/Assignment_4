export interface IBook {
  id: string;
  title: string;
  author: string;
  genre: string;
  isbn: string;
  copies: number;
  available: boolean;
}

export interface IBookForm {
  title: string;
  author: string;
  genre: string;
  isbn: string;
  description: string;
  copies: number;
  available: boolean;
}
export interface IBorrowSummary {
  id: string;
  title: string;
  isbn: string;
  totalBorrowed: number;
}