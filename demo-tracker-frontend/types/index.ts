export interface CurrencyPrice {
  id: number;
  currency: string;
  price: string;
  createdAt: string;
}

export interface CurrencyFormData {
  name: string;
  email: string;
  description: string;
}

export interface Currency extends CurrencyFormData {
  id: number;
  createdAt: string;
}
