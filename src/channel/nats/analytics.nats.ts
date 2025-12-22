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
  AnalyticsDashboard,
  RealTimeMetrics,
  Alert,
  ABTest,
  ABTestVariant,
  ABTestStatusUpdate,
} from '../types';

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
 * Response: AnalyticsDashboard with 4 nested objects:
 * - realtimeMetrics (4 fields)
 * - providerPerformance[] (13 fields each)
 * - recentSyncs[] (14 fields each)
 * - activeAlerts[] (8 fields each)
 */
export interface GetAnalyticsDashboardNatsRequest {
  tenantId?: string;
  hotelId?: string;
  providerId?: string;
  startDate?: string;
  endDate?: string;
}

export type GetAnalyticsDashboardNatsResponse = NatsResponse<AnalyticsDashboard>;

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
 * Response: RealTimeMetrics with 7 fields:
 * - activeSyncs, todayBookings, todayRevenue
 * - averageResponseTime, systemHealthScore
 * - providerStatuses[], unresolvedAlerts
 */
export interface GetRealTimeMetricsNatsRequest {
  tenantId?: string;
  hotelId?: string;
  providerId?: string;
}

export type GetRealTimeMetricsNatsResponse = NatsResponse<RealTimeMetrics>;

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
 * Response: Array of Alert (8 fields each)
 */
export interface ListAlertsNatsRequest {
  severity?: string;
  limit?: number;
  offset?: number;
}

export type ListAlertsNatsResponse = NatsResponse<Alert[]>;

/**
 * Create A/B Test Request
 * Pattern: channel.abtest.create
 *
 * Creates a new A/B test configuration for provider failover/comparison testing.
 *
 * Request fields:
 * - testName: string (required)
 * - variants: ABTestVariant[] (required)
 * - trafficSplit?: any (optional)
 *
 * Response: ABTest with 7 fields:
 * - testId, testName, variants, trafficSplit
 * - status, createdAt, updatedAt
 */
/**
 * Create A/B Test Request
 * Matches API Gateway CreateABTestDto structure
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

export type CreateABTestNatsResponse = NatsResponse<ABTest>;

/**
 * List A/B Tests Request
 * Pattern: channel.abtest.list
 *
 * Retrieves list of all A/B tests (active and inactive).
 *
 * Request fields: None required
 *
 * Response: Array of ABTest (7 fields each)
 */
export interface ListABTestsNatsRequest {
  // No required fields - returns all tests
}

export type ListABTestsNatsResponse = NatsResponse<ABTest[]>;

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
 * Response: ABTestStatusUpdate with 3 fields:
 * - testId, status, updatedAt
 */
export interface UpdateABTestStatusNatsRequest {
  testId: string;
  status: string;
}

export type UpdateABTestStatusNatsResponse = NatsResponse<ABTestStatusUpdate>;
