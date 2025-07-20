export interface Payment {
  id: number;
  reference: string;
  amount: string;
  currency: string;
  method: string;
  status: string;
  paymentMethod: string;
  description: string;
}
