/**
 * =============================================================================
 * FINANCIAL MODULE - TYPE ALIASES
 * Re-export invoice contracts from payment module to avoid duplication
 * =============================================================================
 */
/**
 * Re-export invoice contracts from payment module
 * Financial domain uses payment module's invoice contracts for billing operations
 * Note: These are exported with Financial-specific names for clarity
 */
export type { PaymentInvoice, PaymentInvoiceStatus, PaymentInvoiceItem, } from '../../payment/nats/invoice.nats';
//# sourceMappingURL=invoices.nats.d.ts.map