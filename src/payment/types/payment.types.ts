import { PaymentStatus } from '../enums';

export interface Payment {
  id: string;
  tenantId: string;
  hotelId: string;
  bookingId: string;
  amount: number;
  currency: string;
  status: PaymentStatus;
  method: string;
  transactionId?: string;
  createdAt: string;
  updatedAt: string;
}
