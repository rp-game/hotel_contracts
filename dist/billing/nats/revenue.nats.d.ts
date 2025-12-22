/**
 * Revenue NATS Contracts
 *
 * Patterns:
 * - billing.revenue.stats
 *
 * Handler: financial-service (FinancialNatsController)
 * Called by: api-gateway (PlatformBillingService)
 */
import { NatsResponse } from '../../common';
import { RevenueStatsQuery, RevenueStatsResponse } from '../types';
/**
 * Get Revenue Stats Request
 * Pattern: billing.revenue.stats
 *
 * Get revenue statistics and analytics with time grouping
 */
export type GetRevenueStatsNatsRequest = RevenueStatsQuery;
export type GetRevenueStatsNatsResponse = NatsResponse<RevenueStatsResponse>;
//# sourceMappingURL=revenue.nats.d.ts.map