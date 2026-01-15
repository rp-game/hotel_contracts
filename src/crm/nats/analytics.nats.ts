/**
 * Analytics NATS Contracts
 *
 * Patterns:
 * - crm.analytics.overview
 * - crm.analytics.customer_analytics
 * - crm.analytics.export_customer_analytics
 * - crm.analytics.calculate_customer
 * - crm.analytics.bulk_calculate
 * - crm.analytics.segments
 * - crm.analytics.churn_analysis
 * - crm.analytics.clv_analysis
 *
 * Handler: crm-service (AnalyticsNatsController)
 */

import { NatsResponse } from '../../common';

/**
 * Export Format Options
 */
export enum ExportFormatEnum {
  CSV = 'csv',
  XLSX = 'xlsx',
  PDF = 'pdf',
  JSON = 'json',
}

/**
 * Date Format Options
 */
export enum DateFormatEnum {
  ISO = 'iso',
  US = 'us',
  EU = 'eu',
  CUSTOM = 'custom',
}

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
 * Pattern: crm.analytics.customer_analytics
 */
export interface GetCustomerAnalyticsNatsRequest {
  tenantId: string;
  customerId?: string;
  hotelId?: string;
  startDate?: string;
  endDate?: string;
  segment?: string;
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

/**
 * Analytics Export File Result
 */
export interface AnalyticsExportFileNatsResponse {
  buffer: string;
  filename: string;
  mimeType: string;
  size: number;
}

/**
 * Export Customer Analytics Request
 * Pattern: crm.analytics.export_customer_analytics
 */
export interface ExportCustomerAnalyticsNatsRequest {
  tenantId: string;
  hotelId?: string;
  startDate?: string;
  endDate?: string;
  segment?: string;
  format: ExportFormatEnum;
  preserveDecimals?: boolean;
  dateFormat?: DateFormatEnum;
  includeCharts?: boolean;
  maxRows?: number;
}

/**
 * Export Customer Analytics Response
 */
export type ExportCustomerAnalyticsNatsResponse = NatsResponse<AnalyticsExportFileNatsResponse>;
