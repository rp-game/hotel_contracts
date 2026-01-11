/**
 * Analytics NATS Contracts
 *
 * Patterns:
 * - (HTTP only - no NATS patterns found in controller)
 *
 * Handler: crm-service (AnalyticsController)
 * Note: This controller currently uses HTTP endpoints with header-based tenant identification
 * No NATS message patterns are implemented yet
 */

import { NatsResponse } from '../../common';

/**
 * Analytics Query Parameters
 */
export interface AnalyticsQueryNatsRequest {
  tenantId: string;
  period?: string;
  startDate?: string;
  endDate?: string;
}

/**
 * Analytics Overview Response
 */
export interface AnalyticsOverviewNatsResponse {
  tenantId: string;
  period: string;
  totalCustomers: number;
  activeCustomers: number;
  totalRevenue: string;
  averageClv: string;
  churnRate: number;
  retentionRate: number;
  segmentDistribution: Record<string, number>;
  revenueBySegment: Record<string, number>;
  [key: string]: any;
}

/**
 * Customer Analytics Response
 */
export interface CustomerAnalyticsNatsResponse {
  customerId: string;
  tenantId: string;
  totalSpent: string;
  totalBookings: number;
  averageBookingValue: string;
  lastBookingDate?: string | Date;
  churnProbability: number;
  segmentType: string;
  loyaltyStatus: string;
  [key: string]: any;
}

/**
 * Segment Analysis Response
 * Note: This is the analytics view of segments. For detailed segment analysis, see SegmentAnalysisNatsResponse in segmentation.nats
 */
export interface AnalyticsSegmentAnalysisNatsResponse {
  totalCustomers: number;
  segmentDistribution: Record<string, any>;
  revenueBySegment: Record<string, any>;
  [key: string]: any;
}

/**
 * Churn Analysis Response
 */
export interface ChurnAnalysisNatsResponse {
  churnRate: number;
  atRiskCustomers: number;
  retentionRate: number;
  predictedChurnNextMonth: number;
  recommendations: string[];
}

/**
 * Customer Lifetime Value (CLV) Analysis Response
 */
export interface ClvAnalysisNatsResponse {
  averageClv: string;
  totalCustomerValue: string;
  clvBySegment: Record<string, any>;
  clvGrowthRate: number;
  highValueCustomers: number;
  recommendations: string[];
}

/**
 * Get Analytics Overview Request
 * Pattern: crm.analytics.overview (potential)
 */
export interface GetAnalyticsOverviewNatsRequest extends AnalyticsQueryNatsRequest {}

/**
 * Get Analytics Overview Response
 */
export type GetAnalyticsOverviewNatsResponse = NatsResponse<AnalyticsOverviewNatsResponse>;

/**
 * Get Customer Analytics Request
 * Pattern: crm.analytics.customer (potential)
 */
export interface GetCustomerAnalyticsNatsRequest {
  tenantId: string;
  customerId: string;
}

/**
 * Get Customer Analytics Response
 */
export type GetCustomerAnalyticsNatsResponse = NatsResponse<CustomerAnalyticsNatsResponse>;

/**
 * Calculate Customer Analytics Request
 * Pattern: crm.analytics.customer.calculate (potential)
 */
export interface CalculateCustomerAnalyticsNatsRequest {
  tenantId: string;
  customerId: string;
}

/**
 * Calculate Customer Analytics Response
 */
export type CalculateCustomerAnalyticsNatsResponse = NatsResponse<{ message: string }>;

/**
 * Bulk Calculate Analytics Request
 * Pattern: crm.analytics.bulk-calculate (potential)
 */
export interface BulkCalculateAnalyticsNatsRequest {
  tenantId: string;
}

/**
 * Bulk Calculate Analytics Response
 */
export type BulkCalculateAnalyticsNatsResponse = NatsResponse<{ message: string }>;

/**
 * Get Customer Segments Request
 * Pattern: crm.analytics.segments (potential)
 */
export interface GetCustomerSegmentsNatsRequest extends AnalyticsQueryNatsRequest {
  segment?: string;
}

/**
 * Get Customer Segments Response
 */
export type GetCustomerSegmentsNatsResponse = NatsResponse<AnalyticsSegmentAnalysisNatsResponse>;

/**
 * Get Churn Analysis Request
 * Pattern: crm.analytics.churn (potential)
 */
export interface GetChurnAnalysisNatsRequest extends AnalyticsQueryNatsRequest {}

/**
 * Get Churn Analysis Response
 */
export type GetChurnAnalysisNatsResponse = NatsResponse<ChurnAnalysisNatsResponse>;

/**
 * Get CLV Analysis Request
 * Pattern: crm.analytics.clv (potential)
 */
export interface GetClvAnalysisNatsRequest extends AnalyticsQueryNatsRequest {}

/**
 * Get CLV Analysis Response
 */
export type GetClvAnalysisNatsResponse = NatsResponse<ClvAnalysisNatsResponse>;
