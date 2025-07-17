export interface Payment {
  id:string;
  reference: string;
  amount: string;
  currency: string;
  method: string;
  status: string;
  paymentMethod: string;
  description: string;
}
