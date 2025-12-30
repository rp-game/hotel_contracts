/**
 * Billing Service NATS Message Types
 * All billing-related NATS message payloads
 * Exported from user-service
 */

// ============= Subscription Message Payloads =============

export interface CreateSubscriptionPayload {
  tenantId: string;
  plan: string;
  billingCycle: string;
  stripeCustomerId?: string;
  stripePriceId?: string;
  trialEndsAt?: string;
}

export interface GetSubscriptionPayload {
  tenantId?: string;
  subscriptionId?: string;
}

export interface UpdateSubscriptionPayload {
  subscriptionId: string;
  [key: string]: any;
}

export interface ChangePlanPayload {
  subscriptionId: string;
  newPlan: string;
  newBillingCycle?: string;
  immediate?: boolean;
}

export interface CancelSubscriptionPayload {
  subscriptionId: string;
  cancelAtPeriodEnd?: boolean;
  reason?: string;
}

export interface ReactivateSubscriptionPayload {
  subscriptionId: string;
}

export interface ListSubscriptionsPayload {
  status?: string;
}

// ============= Usage Tracking Message Payloads =============

export interface TrackUsagePayload {
  tenantId: string;
  metric: string;
  quantity: number;
  metadata?: object;
}

export interface GetUsagePayload {
  tenantId: string;
  metric?: string;
  period?: string;
}

export interface CheckLimitsPayload {
  tenantId: string;
  metric: string;
}

export interface EnforceLimitsPayload {
  tenantId: string;
  metric: string;
  currentUsage: number;
}

// ============= Payment Method Message Payloads =============

export interface CreatePaymentMethodPayload {
  subscriptionId: string;
  type: string;
  stripePaymentMethodId?: string;
  isDefault?: boolean;
  billingInfo?: object;
}

export interface GetPaymentMethodsPayload {
  subscriptionId: string;
}

export interface SetDefaultPaymentMethodPayload {
  subscriptionId: string;
  paymentMethodId: string;
}

export interface DeletePaymentMethodPayload {
  paymentMethodId: string;
}

// ============= Invoice Message Payloads =============

export interface CreateInvoicePayload {
  subscriptionId: string;
  type: string;
  periodStart: string;
  periodEnd: string;
  items: object[];
  dueDate?: string;
  taxRate?: number;
}

export interface GetInvoicePayload {
  invoiceId: string;
}

export interface ListInvoicesPayload {
  subscriptionId?: string;
  status?: string;
  type?: string;
  startDate?: string;
  endDate?: string;
  page?: number;
  limit?: number;
}

export interface PayInvoicePayload {
  invoiceId: string;
  paymentMethod: string;
  amountPaid: number;
}

export interface InvoicePaymentFailedPayload {
  invoiceId: string;
  failureReason: string;
}

// ============= Stripe Webhook Payloads =============

export interface StripeSubscriptionUpdatedPayload {
  stripeSubscriptionId: string;
  status: string;
  currentPeriodStart: string;
  currentPeriodEnd: string;
}

export interface StripeInvoicePaymentSucceededPayload {
  stripeInvoiceId: string;
  amountPaid: number;
  paymentMethod: string;
}

export interface StripeInvoicePaymentFailedPayload {
  stripeInvoiceId: string;
  failureReason: string;
}

// ============= Event Payloads =============

export interface ResourceEventPayload {
  tenantId: string;
  hotelId?: string;
  roomId?: string;
  userId?: string;
  bookingId?: string;
}

export interface ApiCallPayload {
  tenantId: string;
  endpoint: string;
  method: string;
}
