/**
 * Invoice NATS Contracts
 *
 * Patterns:
 * - billing.invoice.list (dashboard overview)
 * - billing.invoices.list (paginated list)
 * - billing.invoices.findOne
 * - billing.invoices.create
 *
 * Handler: financial-service (FinancialNatsController)
 * Called by: api-gateway (PlatformBillingService)
 */
import { NatsResponse } from '../../common';
import { PlatformInvoice, InvoiceListQuery, InvoiceListResponse, CreateInvoiceRequest } from '../types';
/**
 * Get Dashboard Overview Request
 * Pattern: billing.invoice.list
 *
 * Used for dashboard overview - simple invoice list without pagination
 */
export interface GetDashboardOverviewNatsRequest {
    tenantId?: string;
}
export type GetDashboardOverviewNatsResponse = NatsResponse<PlatformInvoice[]>;
/**
 * List Invoices Request
 * Pattern: billing.invoices.list
 *
 * Paginated invoice list with filters
 */
export type ListInvoicesNatsRequest = InvoiceListQuery;
export type ListInvoicesNatsResponse = NatsResponse<InvoiceListResponse>;
/**
 * Get Invoice By ID Request
 * Pattern: billing.invoices.findOne
 */
export interface GetInvoiceByIdNatsRequest {
    id: string;
}
export type GetInvoiceByIdNatsResponse = NatsResponse<PlatformInvoice>;
/**
 * Create Invoice Request
 * Pattern: billing.invoices.create
 */
export type CreateInvoiceNatsRequest = CreateInvoiceRequest;
export type CreateInvoiceNatsResponse = NatsResponse<PlatformInvoice>;
//# sourceMappingURL=invoices.nats.d.ts.map