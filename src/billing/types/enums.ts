/**
 * Platform Billing Enums
 *
 * All enum types used in platform billing system
 */

/**
 * Platform Invoice Status
 */
export enum PlatformInvoiceStatus {
  DRAFT = 'DRAFT',
  ISSUED = 'ISSUED',
  PAID = 'PAID',
  OVERDUE = 'OVERDUE',
  CANCELLED = 'CANCELLED',
  FAILED = 'FAILED',
}

/**
 * Billing Cycle
 */
export enum BillingCycle {
  MONTHLY = 'MONTHLY',
  QUARTERLY = 'QUARTERLY',
  YEARLY = 'YEARLY',
}

/**
 * Payment Status
 */
export enum PaymentStatus {
  PENDING = 'PENDING',
  PROCESSING = 'PROCESSING',
  COMPLETED = 'COMPLETED',
  FAILED = 'FAILED',
  CANCELLED = 'CANCELLED',
  REFUNDED = 'REFUNDED',
  PARTIALLY_REFUNDED = 'PARTIALLY_REFUNDED',
}

/**
 * Platform Payment Method
 */
export enum PlatformPaymentMethod {
  CREDIT_CARD = 'CREDIT_CARD',
  BANK_TRANSFER = 'BANK_TRANSFER',
  PAYPAL = 'PAYPAL',
  STRIPE = 'STRIPE',
  MANUAL = 'MANUAL',
  ACH = 'ACH',
}

/**
 * Invoice Item Type
 */
export enum InvoiceItemType {
  SUBSCRIPTION_FEE = 'SUBSCRIPTION_FEE',
  USAGE_FEE = 'USAGE_FEE',
  SETUP_FEE = 'SETUP_FEE',
  ADDON_FEE = 'ADDON_FEE',
  DISCOUNT = 'DISCOUNT',
  TAX = 'TAX',
}
