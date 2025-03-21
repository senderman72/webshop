export interface ICustomer {
  id: number | null;
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  street_address: string;
  postal_code: string;
  city: string;
  country: string;
  created_at?: string;
}

export type CustomerUpdate = Omit<ICustomer, "created_at">;
export type CustomerCreate = Omit<ICustomer, "created_at">;
