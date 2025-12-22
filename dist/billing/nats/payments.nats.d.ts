/**
 * Payment NATS Contracts
 *
 * Patterns:
 * - billing.payments.list
 * - billing.payments.create
 *
 * Handler: financial-service (FinancialNatsController)
 * Called by: api-gateway (PlatformBillingService)
 */
import { NatsResponse } from '../../common';
import { PlatformPayment, PaymentListQuery, PaymentListResponse, CreatePlatformPaymentRequest } from '../types';
/**
 * List Payments Request
 * Pattern: billing.payments.list
 *
 * Paginated payment list with filters
 */
export type ListPaymentsNatsRequest = PaymentListQuery;
export type ListPaymentsNatsResponse = NatsResponse<PaymentListResponse>;
/**
 * Create Payment Request
 * Pattern: billing.payments.create
 */
export type CreatePaymentNatsRequest = CreatePlatformPaymentRequest;
export type CreatePaymentNatsResponse = NatsResponse<PlatformPayment>;
//# sourceMappingURL=payments.nats.d.ts.map