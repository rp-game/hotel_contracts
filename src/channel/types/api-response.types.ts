/**
 * API Gateway Response DTO Types
 *
 * These types define the response structures that API Gateway expects
 * from channel-service NATS handlers. Channel-service should return
 * these DTO structures to ensure end-to-end type safety.
 *
 * These types match the API Gateway DTOs exactly to eliminate the need
 * for transformation layers.
 */

import { SyncStatus, SyncOperation, SyncDirection } from '../enums';

/**
 * Sync Response DTO
 * Returned by inventory/rate sync operations
 */
export interface SyncResponseDto {
  syncId: string;
  status: SyncStatus;
  message: string;
  messageVi?: string;
  startedAt: Date;
  completedAt?: Date;
  totalRecords?: number;
  processedRecords?: number;
  failedRecords?: number;
  errors?: string[];
  metadata?: Record<string, any>;
}

/**
 * Sync Status DTO
 * Returned by getSyncStatus operation
 */
export interface SyncStatusDto {
  syncId: string;
  status: SyncStatus;
  operation: SyncOperation;
  direction: SyncDirection;
  startedAt: Date;
  completedAt?: Date;
  progressPercentage?: number;
  totalRecords?: number;
  processedRecords?: number;
  failedRecords?: number;
  providers?: string[];
  errors?: string[];
  currentStep?: string;
  metadata?: Record<string, any>;
}

/**
 * Failover Trigger Enum
 */
export enum FailoverTrigger {
  MANUAL = 'MANUAL',
  AUTOMATIC = 'AUTOMATIC',
  HEALTH_CHECK_FAILED = 'HEALTH_CHECK_FAILED',
  ERROR_RATE_EXCEEDED = 'ERROR_RATE_EXCEEDED',
  RESPONSE_TIME_EXCEEDED = 'RESPONSE_TIME_EXCEEDED',
}

/**
 * Failover Status Enum
 */
export enum FailoverStatus {
  INITIATED = 'INITIATED',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
  FAILED = 'FAILED',
  ROLLED_BACK = 'ROLLED_BACK',
}

/**
 * Provider Failover DTO
 * Returned by executeFailover operation
 */
export interface ProviderFailoverDto {
  id: string;
  sourceProviderId: string;
  sourceProviderName: string;
  targetProviderIds: string[];
  targetProviderNames: string[];
  trigger: FailoverTrigger;
  status: FailoverStatus;
  initiatedAt: Date;
  completedAt?: Date;
  durationMs?: number;
  channelMappings: Array<{
    channelId: string;
    channelName: string;
    fromProvider: string;
    toProvider: string;
  }>;
  inventoryRecordsSynced: number;
  rateRecordsSynced: number;
  reason?: string;
  metadata?: Record<string, any>;
}

/**
 * Provider Comparison DTO
 * Returned by getProviderPerformance operation
 */
export interface ProviderComparisonDto {
  providers: Array<{
    providerId: string;
    providerName: string;
    bookingVolume: number;
    revenue: number;
    averageDailyRate: number;
    conversionRate: number;
    responseTime: number;
    errorRate: number;
    marketShare: number;
    customerSatisfaction: number;
    rank: number;
  }>;
  period: {
    startDate: string;
    endDate: string;
    totalDays: number;
  };
  marketSummary: {
    totalBookings: number;
    totalRevenue: number;
    averageADR: number;
    topPerformingProvider: string;
    mostImprovedProvider: string;
  };
  trends?: {
    bookingTrends: Array<{ date: string; provider: string; bookings: number }>;
    revenueTrends: Array<{ date: string; provider: string; revenue: number }>;
    performanceGaps: Array<{ provider: string; metric: string; gap: number }>;
  };
}

/**
 * A/B Test Status Enum
 */
export enum ABTestStatus {
  DRAFT = 'DRAFT',
  ACTIVE = 'ACTIVE',
  PAUSED = 'PAUSED',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED',
}

/**
 * A/B Test Configuration DTO
 * Returned by A/B test operations
 */
export interface ABTestConfigurationDto {
  id: string;
  testName: string;
  description: string;
  status: ABTestStatus;
  startDate: string;
  endDate: string;
  trafficSplit: {
    controlProvider: {
      providerId: string;
      providerName: string;
      percentage: number;
    };
    testProvider: {
      providerId: string;
      providerName: string;
      percentage: number;
    };
  };
  targetSegments: string[];
  targetRoomTypes: string[];
  targetChannels: string[];
  trackedMetrics: string[];
  successCriteria?: {
    primaryMetric: string;
    minimumDetectableEffect: number;
    confidenceLevel: number;
    statisticalPower: number;
  };
  currentResults?: {
    controlMetrics: Record<string, number>;
    testMetrics: Record<string, number>;
    statisticalSignificance: boolean;
    winningVariant?: 'control' | 'test';
  };
}

/**
 * Sync History DTO
 * Individual sync history record
 */
export interface SyncHistoryDto {
  id: string;
  providerId: string;
  providerName: string;
  operation: string;
  direction: string;
  status: string;
  startedAt: Date;
  completedAt?: Date;
  durationMs?: number;
  recordsProcessed: number;
  recordsSuccessful: number;
  recordsFailed: number;
  errorMessage?: string;
  metadata?: Record<string, any>;
}

/**
 * Sync History List Response DTO
 * Returned by getSyncHistory operation
 */
export interface SyncHistoryListResponseDto {
  history: SyncHistoryDto[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

/**
 * Provider Performance DTO
 * For analytics dashboard
 */
export interface ProviderPerformanceDto {
  providerId: string;
  providerName: string;
  bookingVolume: number;
  revenue: number;
  averageDailyRate: number;
  responseTime: number;
  errorRate: number;
  syncSuccessRate: number;
  topChannels: string[];
  additionalMetrics?: Record<string, any>;
}

/**
 * Analytics Dashboard DTO
 * Returned by getAnalyticsDashboard operation
 */
export interface AnalyticsDashboardDto {
  realtimeMetrics: {
    totalBookingsToday: number;
    totalRevenueToday: number;
    averageResponseTime: number;
    overallSyncSuccessRate: number;
  };
  providerPerformance: ProviderPerformanceDto[];
  recentSyncs: SyncHistoryDto[];
  activeAlerts: Array<{
    id: string;
    severity: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
    message: string;
    providerId?: string;
    createdAt: Date;
  }>;
  chartData?: {
    bookingTrends: Array<{ date: string; bookings: number; revenue: number }>;
    providerComparison: Array<{ providerId: string; bookings: number; revenue: number }>;
    syncStatusDistribution: Array<{ status: string; count: number }>;
  };
}

/**
 * Alert DTO
 * Returned by listAlerts operation
 */
export interface AlertDto {
  id: string;
  severity: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
  message: string;
  messageVi?: string;
  providerId?: string;
  providerName?: string;
  category: string;
  createdAt: Date;
  resolvedAt?: Date;
  acknowledged: boolean;
  context?: Record<string, any>;
}

/**
 * Error Type Enum
 */
export enum ErrorType {
  RATE_LIMIT_EXCEEDED = 'RATE_LIMIT_EXCEEDED',
  CONNECTION_TIMEOUT = 'CONNECTION_TIMEOUT',
  AUTHENTICATION_FAILED = 'AUTHENTICATION_FAILED',
  MAPPING_NOT_FOUND = 'MAPPING_NOT_FOUND',
  VALIDATION_ERROR = 'VALIDATION_ERROR',
  PROVIDER_ERROR = 'PROVIDER_ERROR',
  DATA_CONFLICT = 'DATA_CONFLICT',
  UNKNOWN_ERROR = 'UNKNOWN_ERROR',
}

/**
 * Error Severity Enum
 */
export enum ErrorSeverity {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH',
  CRITICAL = 'CRITICAL',
}

/**
 * Recovery Action Enum
 */
export enum RecoveryAction {
  RETRY = 'RETRY',
  SKIP = 'SKIP',
  MANUAL_INTERVENTION = 'MANUAL_INTERVENTION',
  FAILOVER = 'FAILOVER',
  QUEUE_FOR_LATER = 'QUEUE_FOR_LATER',
}

/**
 * Sync Error DTO
 * Individual error record
 */
export interface SyncErrorDto {
  id: string;
  syncId: string;
  providerId: string;
  providerName: string;
  errorType: ErrorType;
  severity: ErrorSeverity;
  message: string;
  messageVi?: string;
  stackTrace?: string;
  occurredAt: Date;
  httpStatusCode?: number;
  requestData?: Record<string, any>;
  responseData?: Record<string, any>;
  retryCount: number;
  maxRetries: number;
  resolved: boolean;
  resolvedAt?: Date;
  resolutionMethod?: string;
  suggestedActions: RecoveryAction[];
  context?: Record<string, any>;
}

/**
 * Error List Response DTO
 * Returned by getSyncErrors operation
 */
export interface ErrorListResponseDto {
  errors: SyncErrorDto[];
  total: number;
  page: number;
  limit: number;
  unresolvedCount: number;
  statistics: {
    byType: Record<string, number>;
    bySeverity: Record<string, number>;
    byProvider: Record<string, number>;
  };
}

/**
 * Time Range Enum
 * For analytics queries
 */
export enum TimeRange {
  LAST_24_HOURS = 'LAST_24_HOURS',
  LAST_7_DAYS = 'LAST_7_DAYS',
  LAST_30_DAYS = 'LAST_30_DAYS',
  LAST_90_DAYS = 'LAST_90_DAYS',
  CUSTOM = 'CUSTOM',
}

/**
 * Metric Type Enum
 * For analytics queries
 */
export enum MetricType {
  BOOKING_VOLUME = 'BOOKING_VOLUME',
  REVENUE = 'REVENUE',
  AVERAGE_DAILY_RATE = 'AVERAGE_DAILY_RATE',
  RESPONSE_TIME = 'RESPONSE_TIME',
  ERROR_RATE = 'ERROR_RATE',
  SYNC_SUCCESS_RATE = 'SYNC_SUCCESS_RATE',
}

/**
 * Real-Time Metrics DTO
 * Returned by getRealTimeMetrics operation
 */
export interface RealTimeMetricsDto {
  activeSyncs: number;
  todayBookings: number;
  todayRevenue: number;
  averageResponseTime: number;
  systemHealthScore: number;
  providerStatuses: Array<{
    providerId: string;
    providerName: string;
    status: 'HEALTHY' | 'WARNING' | 'ERROR';
    lastSyncAt: Date;
  }>;
  unresolvedAlerts: number;
}

/**
 * Get Analytics Query DTO
 * Request parameters for getAnalyticsDashboard
 */
export interface GetAnalyticsQueryDto {
  timeRange?: TimeRange;
  startDate?: string;
  endDate?: string;
  providerIds?: string[];
  tenantId?: string;
  hotelId?: string;
  metrics?: MetricType[];
}

/**
 * Get Sync History Query DTO
 * Request parameters for getSyncHistory
 */
export interface GetSyncHistoryQueryDto {
  providerId?: string;
  tenantId?: string;
  hotelId?: string;
  status?: string;
  operation?: string;
  startDate?: string;
  endDate?: string;
  limit?: number;
  offset?: number;
}
