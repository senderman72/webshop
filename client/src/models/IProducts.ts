export interface IProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  category: string;
  image: string;
  created_at: string;
  count?: number;
}

export type ProductUpdate = Omit<IProduct, "created_at">;
export type ProductCreate = Omit<IProduct, "created_at">;
