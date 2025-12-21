import { NatsResponse } from '../../common';
import { PaymentMethod } from '../enums';

/**
 * Payment Service - Request/Response Types for Booking Service
 */

export interface CreatePaymentRequest {
  tenantId: string;
  hotelId: string;
  bookingId: string;
  amount: number;
  paymentMethod: PaymentMethod;
  description: string;
  metadata?: Record<string, any>;
  returnUrl?: string;
}

export interface PaymentResponse extends NatsResponse {
  data?: {
    paymentId?: string;
    transactionId?: string;
    status?: string;
    amount?: number;
    redirectUrl?: string;
  };
}

export interface VerifyPaymentRequest {
  tenantId: string;
  hotelId: string;
  paymentId: string;
  transactionId?: string;
}

export interface RefundPaymentRequest {
  tenantId: string;
  hotelId: string;
  paymentId: string;
  amount: number;
  reason: string;
}

export interface PaymentStatusRequest {
  tenantId: string;
  hotelId: string;
  bookingId: string;
}

export interface PaymentStatusResponse {
  bookingId: string;
  totalAmount: number;
  paidAmount: number;
  remainingAmount: number;
  payments: {
    id: string;
    amount: number;
    paymentMethod: string;
    status: string;
    transactionId?: string;
    paymentDate: Date;
  }[];
}
