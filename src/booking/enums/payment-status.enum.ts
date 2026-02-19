export enum PaymentStatus {
  PENDING = 'PENDING',
  PAID = 'PAID',
  UNPAID = 'UNPAID',
  COMPLETED = 'COMPLETED',
  PARTIALLY_PAID = 'PARTIALLY_PAID',
  FAILED = 'FAILED',
  REFUNDED = 'REFUNDED',
  PARTIAL = 'PARTIAL',
}

// Re-export with domain-scoped name to avoid collision at root contracts level
export { PaymentStatus as BookingPaymentStatus };
