/**
 * Tenant Billing NATS Contracts
 *
 * Patterns:
 * - billing.tenant.get
 *
 * Handler: financial-service (FinancialNatsController)
 * Called by: api-gateway (PlatformBillingService)
 */

import { NatsResponse } from '../../common';
import { TenantBillingSummary } from '../types';

/**
 * Get Tenant Billing Request
 * Pattern: billing.tenant.get
 *
 * Get billing summary for a specific tenant
 */
export interface GetTenantBillingNatsRequest {
  tenantId: string;
}

export type GetTenantBillingNatsResponse = NatsResponse<TenantBillingSummary>;
