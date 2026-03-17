/**
 * Group Payment NATS Contracts (unified: deposits + settlement payments)
 *
 * NATS Patterns:
 *   group-block.payment.create  — record a payment (deposit or settlement)
 *   group-block.payment.void    — void a payment
 *   group-block.payment.list    — list payments with optional type filter
 *
 * Handler: booking-service
 * Called by: api-gateway
 */

export interface RecordGroupPaymentNatsRequest {
  tenantId: string;
  hotelId: string;
  groupBlockId: string;
  amount: number;
  paymentMethod: string;
  type: 'DEPOSIT' | 'PAYMENT';
  reference?: string;
  notes?: string;
  userId: string;
  userName: string;
}

export interface VoidGroupPaymentNatsRequest {
  tenantId: string;
  hotelId: string;
  groupBlockId: string;
  paymentId: string;
  reason?: string;
  userId: string;
  userName: string;
}

export interface ListGroupPaymentsNatsRequest {
  tenantId: string;
  hotelId: string;
  groupBlockId: string;
  type?: 'DEPOSIT' | 'PAYMENT';
}

export interface GroupPaymentItem {
  id: string;
  groupBlockId: string;
  type: string; // DEPOSIT | PAYMENT | REFUND
  amount: number;
  paymentMethod: string;
  reference: string | null;
  notes: string | null;
  status: 'ACTIVE' | 'VOIDED';
  receivedBy: string;
  receivedByName: string | null;
  voidedAt: string | null;
  voidReason: string | null;
  createdAt: string;
}

export interface GroupPaymentListResult {
  payments: GroupPaymentItem[];
  totalDeposited: number;
  totalSettlementPaid: number;
  totalVoided: number;
  netPaid: number;
}
