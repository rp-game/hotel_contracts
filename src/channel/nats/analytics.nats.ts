/**
 * Channel Analytics & A/B Testing NATS Contracts
 *
 * Patterns:
 * - channel.analytics.dashboard
 * - channel.analytics.real-time
 * - channel.alerts.list
 * - channel.abtest.create
 * - channel.abtest.list
 * - channel.abtest.status
 *
 * Handler: channel-service (ProvidersNatsController)
 * Called by: api-gateway
 */

import { NatsResponse } from '../../common';
import {
  AnalyticsDashboardDto,
  RealTimeMetricsDto,
  AlertDto,
} from '../rest';
import { ABTestConfigurationDto } from '../types';

/**
 * Get Analytics Dashboard Request
 * Pattern: channel.analytics.dashboard
 *
 * Retrieves comprehensive analytics dashboard with real-time metrics,
 * provider performance, recent syncs, and active alerts.
 *
 * Request fields:
 * - tenantId?: string (optional)
 * - hotelId?: string (optional)
 * - providerId?: string (optional)
 * - startDate?: string (optional)
 * - endDate?: string (optional)
 *
 * Response: AnalyticsDashboardDto with realtimeMetrics, providerPerformance[],
 * recentSyncs[], activeAlerts[], and optional chartData
 */
export interface GetAnalyticsDashboardNatsRequest {
  tenantId?: string;
  hotelId?: string;
  providerId?: string;
  startDate?: string;
  endDate?: string;
}

export type GetAnalyticsDashboardNatsResponse = NatsResponse<AnalyticsDashboardDto>;

/**
 * Get Real-Time Metrics Request
 * Pattern: channel.analytics.real-time
 *
 * Retrieves current real-time metrics including active syncs,
 * today's bookings/revenue, system health score, and provider statuses.
 *
 * Request fields:
 * - tenantId?: string (optional)
 * - hotelId?: string (optional)
 * - providerId?: string (optional)
 *
 * Response: RealTimeMetricsDto with 7 fields:
 * - activeSyncs, todayBookings, todayRevenue
 * - averageResponseTime, systemHealthScore
 * - providerStatuses[], unresolvedAlerts
 */
export interface GetRealTimeMetricsNatsRequest {
  tenantId?: string;
  hotelId?: string;
  providerId?: string;
}

export type GetRealTimeMetricsNatsResponse = NatsResponse<RealTimeMetricsDto>;

/**
 * List Alerts Request
 * Pattern: channel.alerts.list
 *
 * Retrieves list of alerts (failed syncs, errors, warnings) with pagination.
 *
 * Request fields:
 * - severity?: string (optional)
 * - limit?: number (optional)
 * - offset?: number (optional)
 *
 * Response: Array of AlertDto with full alert details including category, acknowledged status
 */
export interface ListAlertsNatsRequest {
  severity?: string;
  limit?: number;
  offset?: number;
}

export type ListAlertsNatsResponse = NatsResponse<AlertDto[]>;

/**
 * Create A/B Test Request
 * Pattern: channel.abtest.create
 *
 * Creates a new A/B test configuration for provider failover/comparison testing.
 * Matches API Gateway CreateABTestDto structure.
 *
 * Response: ABTestConfigurationDto with full test configuration including traffic split,
 * targeting, metrics, and optional success criteria and current results
 */
export interface CreateABTestNatsRequest {
  testName: string;
  description: string;
  startDate: string;
  endDate: string;
  controlProviderId: string;
  testProviderId: string;
  controlPercentage: number;
  targetSegments?: string[];
  targetRoomTypes?: string[];
  targetChannels?: string[];
  trackedMetrics: string[];
  successCriteria?: {
    primaryMetric: string;
    minimumDetectableEffect: number;
    confidenceLevel: number;
    statisticalPower: number;
  };
}

export type CreateABTestNatsResponse = NatsResponse<ABTestConfigurationDto>;

/**
 * List A/B Tests Request
 * Pattern: channel.abtest.list
 *
 * Retrieves list of all A/B tests (active and inactive).
 *
 * Request fields: None required
 *
 * Response: Array of ABTestConfigurationDto with full test details
 */
export interface ListABTestsNatsRequest {
  // No required fields - returns all tests
}

export type ListABTestsNatsResponse = NatsResponse<ABTestConfigurationDto[]>;

/**
 * Update A/B Test Status Request
 * Pattern: channel.abtest.status
 *
 * Updates the status of an existing A/B test (activate/deactivate).
 *
 * Request fields:
 * - testId: string (required)
 * - status: string (required)
 *
 * Response: ABTestConfigurationDto with updated status
 */
export interface UpdateABTestStatusNatsRequest {
  testId: string;
  status: string;
}

export type UpdateABTestStatusNatsResponse = NatsResponse<ABTestConfigurationDto>;
