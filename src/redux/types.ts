export function typedAction(type: string, payload?: any) {
  return { type, payload };
}

export type Product = {
  id: number;
  title: string;
  price: number;
  slug?: string;
  image?: string;
  new?: string;
  recommend?: string;
  popular?: string;
  width?: number;
  parent?: string;
};

export type CartItem = {
  id: number;
  title: string;
  quantity: number;
  price: number;
  image?: string;
};

export interface CartState {
  cart: CartItem[];
}

export interface FiltersState {
  filterProducts: Product[];
}
