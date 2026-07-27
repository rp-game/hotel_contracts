/**
 * Customer Stats NATS Contracts
 *
 * Patterns:
 * - crm.customer.recalculateBookingStats
 * - crm.customer.recalculateAllBookingStats
 *
 * Handler: crm-service (CustomersController)
 * Called by: api-gateway (CrmController)
 */
import { NatsResponse } from '../../common';
import type { CustomerBookingStatsResult, BulkRecalculationResult } from '../types/customer-stats.types';
/**
 * Recalculate Booking Stats for Single Customer Request
 * Pattern: crm.customer.recalculateBookingStats
 *
 * Queries booking service for actual booking data and updates customer statistics.
 * Used for data correction and periodic sync verification.
 */
export interface RecalculateCustomerBookingStatsNatsRequest {
    tenantId: string;
    customerId: string;
    userId?: string;
}
export type RecalculateCustomerBookingStatsNatsResponse = NatsResponse<CustomerBookingStatsResult>;
/**
 * Recalculate Booking Stats for All Customers Request
 * Pattern: crm.customer.recalculateAllBookingStats
 *
 * Bulk recalculation of booking stats for all customers in tenant.
 * Useful for data migration or fixing sync issues.
 */
export interface RecalculateAllCustomerBookingStatsNatsRequest {
    tenantId: string;
    userId?: string;
}
export type RecalculateAllCustomerBookingStatsNatsResponse = NatsResponse<BulkRecalculationResult>;
//# sourceMappingURL=customer-stats.nats.d.ts.map