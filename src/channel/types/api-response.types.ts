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
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsUUID, IsOptional, IsNumber, IsArray, IsEnum, IsObject, IsBoolean, IsDateString, Min, Max, ValidateNested } from 'class-validator';
import { Type, Transform } from 'class-transformer';

/**
 * Sync Response DTO
 * Returned by inventory/rate sync operations
 */
export class SyncResponseDto {
  @IsUUID()
  @ApiProperty({ description: 'Sync operation ID' })
  syncId: string;

  @IsEnum(SyncStatus)
  @ApiProperty({ description: 'Sync status', enum: SyncStatus })
  status: SyncStatus;

  @IsString()
  @ApiProperty({ description: 'Response message (English)' })
  message: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional({ description: 'Response message (Vietnamese)' })
  messageVi?: string;

  @Type(() => Date)
  @ApiProperty({ description: 'Sync start timestamp', type: Date })
  startedAt: Date;

  @IsOptional()
  @Type(() => Date)
  @ApiPropertyOptional({ description: 'Sync completion timestamp', type: Date, required: false })
  completedAt?: Date;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional({ description: 'Total records to process', type: Number })
  totalRecords?: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional({ description: 'Records processed', type: Number })
  processedRecords?: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional({ description: 'Failed records count', type: Number })
  failedRecords?: number;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  @ApiPropertyOptional({ description: 'Error messages', type: [String] })
  errors?: string[];

  @IsOptional()
  @IsObject()
  @ApiPropertyOptional({ description: 'Additional metadata', type: Object })
  metadata?: Record<string, any>;
}

/**
 * Sync Status DTO
 * Returned by getSyncStatus operation
 */
export class SyncStatusDto {
  @IsUUID()
  @ApiProperty({ description: 'Sync operation ID' })
  syncId: string;

  @IsEnum(SyncStatus)
  @ApiProperty({ description: 'Sync status', enum: SyncStatus })
  status: SyncStatus;

  @IsEnum(SyncOperation)
  @ApiProperty({ description: 'Sync operation type', enum: SyncOperation })
  operation: SyncOperation;

  @IsEnum(SyncDirection)
  @ApiProperty({ description: 'Sync direction', enum: SyncDirection })
  direction: SyncDirection;

  @Type(() => Date)
  @ApiProperty({ description: 'Sync start timestamp', type: Date })
  startedAt: Date;

  @IsOptional()
  @Type(() => Date)
  @ApiPropertyOptional({ description: 'Sync completion timestamp', type: Date })
  completedAt?: Date;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional({ description: 'Progress percentage (0-100)', type: Number })
  progressPercentage?: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional({ description: 'Total records to process', type: Number })
  totalRecords?: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional({ description: 'Records processed so far', type: Number })
  processedRecords?: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional({ description: 'Failed records count', type: Number })
  failedRecords?: number;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  @ApiPropertyOptional({ description: 'Provider IDs involved in sync', type: [String] })
  providers?: string[];

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  @ApiPropertyOptional({ description: 'Error messages', type: [String] })
  errors?: string[];

  @IsOptional()
  @IsString()
  @ApiPropertyOptional({ description: 'Current step description' })
  currentStep?: string;

  @IsOptional()
  @IsObject()
  @ApiPropertyOptional({ description: 'Additional metadata', type: Object })
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
export class SyncHistoryDto {
  @ApiProperty({ description: 'Sync history ID' })
  id: string;

  @ApiProperty({ description: 'Provider ID' })
  providerId: string;

  @ApiProperty({ description: 'Provider name' })
  providerName: string;

  @ApiProperty({ description: 'Sync operation type', enum: SyncOperation })
  operation: string;

  @ApiProperty({ description: 'Sync direction', enum: SyncDirection })
  direction: string;

  @ApiProperty({ description: 'Sync status', enum: SyncStatus })
  status: string;

  @ApiProperty({ description: 'Sync start timestamp', type: Date })
  startedAt: Date;

  @ApiPropertyOptional({ description: 'Sync completion timestamp', type: Date })
  completedAt?: Date;

  @ApiPropertyOptional({ description: 'Sync duration in milliseconds', type: Number })
  durationMs?: number;

  @ApiProperty({ description: 'Total records processed', type: Number })
  recordsProcessed: number;

  @ApiProperty({ description: 'Successfully processed records', type: Number })
  recordsSuccessful: number;

  @ApiProperty({ description: 'Failed records', type: Number })
  recordsFailed: number;

  @ApiPropertyOptional({ description: 'Error message if sync failed', type: String })
  errorMessage?: string;

  @ApiPropertyOptional({ description: 'Additional sync metadata', type: Object })
  metadata?: Record<string, any>;
}

/**
 * Sync History List Response DTO
 * Returned by getSyncHistory operation
 */
export class SyncHistoryListResponseDto {
  @ApiProperty({ description: 'List of sync history records', type: [SyncHistoryDto] })
  history: SyncHistoryDto[];

  @ApiProperty({ description: 'Total number of records', type: Number })
  total: number;

  @ApiProperty({ description: 'Current page number', type: Number })
  page: number;

  @ApiProperty({ description: 'Records per page', type: Number })
  limit: number;

  @ApiProperty({ description: 'Total number of pages', type: Number })
  totalPages: number;
}

/**
 * Provider Performance DTO
 * For analytics dashboard
 */
export class ProviderPerformanceDto {
  @IsUUID()
  @ApiProperty({ description: 'Provider ID' })
  providerId: string;

  @IsString()
  @ApiProperty({ description: 'Provider name' })
  providerName: string;

  @IsNumber()
  @ApiProperty({ description: 'Total bookings in period' })
  bookingVolume: number;

  @IsNumber()
  @Transform(({ value }) => parseFloat(value))
  @ApiProperty({ description: 'Total revenue generated' })
  revenue: number;

  @IsNumber()
  @Transform(({ value }) => parseFloat(value))
  @ApiProperty({ description: 'Average daily rate' })
  averageDailyRate: number;

  @IsNumber()
  @ApiProperty({ description: 'Average response time in milliseconds' })
  responseTime: number;

  @IsNumber()
  @Min(0)
  @Max(1)
  @Transform(({ value }) => parseFloat(value))
  @ApiProperty({ description: 'Error rate (0-1)' })
  errorRate: number;

  @IsNumber()
  @Min(0)
  @Max(1)
  @Transform(({ value }) => parseFloat(value))
  @ApiProperty({ description: 'Sync success rate (0-1)' })
  syncSuccessRate: number;

  @IsArray()
  @ApiProperty({ description: 'Top performing channels', type: [String] })
  topChannels: string[];

  @IsOptional()
  @IsObject()
  @ApiPropertyOptional({ description: 'Additional performance metrics' })
  additionalMetrics?: Record<string, any>;
}

/**
 * Real-time Metrics Summary for Analytics Dashboard
 */
export class RealTimeMetricsSummary {
  @IsNumber()
  @ApiProperty({ description: 'Total bookings processed today' })
  totalBookingsToday: number;

  @IsNumber()
  @Transform(({ value }) => parseFloat(value))
  @ApiProperty({ description: 'Total revenue processed today' })
  totalRevenueToday: number;

  @IsNumber()
  @ApiProperty({ description: 'Average system response time in ms' })
  averageResponseTime: number;

  @IsNumber()
  @Min(0)
  @Max(1)
  @Transform(({ value }) => parseFloat(value))
  @ApiProperty({ description: 'Overall sync success rate (0-1)' })
  overallSyncSuccessRate: number;
}

/**
 * Chart Data for Analytics Dashboard
 */
export class ChartDataDto {
  @IsArray()
  @ApiProperty({ description: 'Booking trends over time' })
  bookingTrends: Array<{ date: string; bookings: number; revenue: number }>;

  @IsArray()
  @ApiProperty({ description: 'Provider comparison data' })
  providerComparison: Array<{ providerId: string; bookings: number; revenue: number }>;

  @IsArray()
  @ApiProperty({ description: 'Sync status distribution' })
  syncStatusDistribution: Array<{ status: string; count: number }>;
}

/**
 * Alert DTO
 * Returned by listAlerts operation
 */
export class AlertDto {
  @IsUUID()
  @ApiProperty({ description: 'Alert ID' })
  id: string;

  @IsEnum(['LOW', 'MEDIUM', 'HIGH', 'CRITICAL'])
  @ApiProperty({ description: 'Alert severity level', enum: ['LOW', 'MEDIUM', 'HIGH', 'CRITICAL'] })
  severity: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';

  @IsString()
  @ApiProperty({ description: 'Alert message' })
  message: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional({ description: 'Alert message in Vietnamese' })
  messageVi?: string;

  @IsOptional()
  @IsUUID()
  @ApiPropertyOptional({ description: 'Related provider ID' })
  providerId?: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional({ description: 'Related provider name' })
  providerName?: string;

  @IsString()
  @ApiProperty({ description: 'Alert category' })
  category: string;

  @Type(() => Date)
  @Transform(({ value }) => value instanceof Date ? value : new Date(value))
  @ApiProperty({ description: 'Alert creation timestamp', type: Date })
  createdAt: Date;

  @IsOptional()
  @Type(() => Date)
  @Transform(({ value }) => value instanceof Date ? value : new Date(value))
  @ApiPropertyOptional({ description: 'Alert resolution timestamp', type: Date })
  resolvedAt?: Date;

  @IsBoolean()
  @ApiProperty({ description: 'Whether alert is acknowledged' })
  acknowledged: boolean;

  @IsOptional()
  @IsObject()
  @ApiPropertyOptional({ description: 'Additional alert context' })
  context?: Record<string, any>;
}

/**
 * Analytics Dashboard DTO
 * Returned by getAnalyticsDashboard operation
 */
export class AnalyticsDashboardDto {
  @IsObject()
  @ValidateNested()
  @Type(() => RealTimeMetricsSummary)
  @ApiProperty({ description: 'Real-time metrics summary', type: RealTimeMetricsSummary })
  realtimeMetrics: RealTimeMetricsSummary;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ProviderPerformanceDto)
  @ApiProperty({ description: 'Provider performance data', type: [ProviderPerformanceDto] })
  providerPerformance: ProviderPerformanceDto[];

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SyncHistoryDto)
  @ApiProperty({ description: 'Recent sync history', type: [SyncHistoryDto] })
  recentSyncs: SyncHistoryDto[];

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => AlertDto)
  @ApiProperty({ description: 'Active alerts', type: [AlertDto] })
  activeAlerts: AlertDto[];

  @IsOptional()
  @IsObject()
  @ValidateNested()
  @Type(() => ChartDataDto)
  @ApiPropertyOptional({ description: 'Chart data for dashboard visualizations', type: ChartDataDto })
  chartData?: ChartDataDto;
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
/**
 * Provider Status Summary for Real-Time Metrics
 */
export class ProviderStatusSummary {
  @IsUUID()
  @ApiProperty({ description: 'Provider ID' })
  providerId: string;

  @IsString()
  @ApiProperty({ description: 'Provider name' })
  providerName: string;

  @IsEnum(['HEALTHY', 'WARNING', 'ERROR'])
  @ApiProperty({ description: 'Provider health status', enum: ['HEALTHY', 'WARNING', 'ERROR'] })
  status: 'HEALTHY' | 'WARNING' | 'ERROR';

  @ApiProperty({ description: 'Last sync timestamp', type: Date })
  lastSyncAt: Date;
}

/**
 * Real-Time Metrics DTO
 * Returned by getRealTimeMetrics operation
 */
export class RealTimeMetricsDto {
  @IsNumber()
  @ApiProperty({ description: 'Total active sync operations' })
  activeSyncs: number;

  @IsNumber()
  @ApiProperty({ description: 'Total bookings processed today' })
  todayBookings: number;

  @IsNumber()
  @Transform(({ value }) => parseFloat(value))
  @ApiProperty({ description: 'Total revenue processed today' })
  todayRevenue: number;

  @IsNumber()
  @ApiProperty({ description: 'Average system response time in ms' })
  averageResponseTime: number;

  @IsNumber()
  @Min(0)
  @Max(1)
  @Transform(({ value }) => parseFloat(value))
  @ApiProperty({ description: 'Overall system health score (0-1)' })
  systemHealthScore: number;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ProviderStatusSummary)
  @ApiProperty({ description: 'Provider status summary', type: [ProviderStatusSummary] })
  providerStatuses: ProviderStatusSummary[];

  @IsNumber()
  @ApiProperty({ description: 'Total unresolved alerts' })
  unresolvedAlerts: number;
}

/**
 * Get Analytics Query DTO
 * Request parameters for getAnalyticsDashboard
 */
export class GetAnalyticsQueryDto {
  @IsOptional()
  @IsEnum(TimeRange)
  @ApiPropertyOptional({ description: 'Time range for analytics', enum: TimeRange, default: TimeRange.LAST_7_DAYS })
  timeRange?: TimeRange;

  @IsOptional()
  @IsDateString()
  @ApiPropertyOptional({ description: 'Custom start date (required if timeRange is CUSTOM)' })
  startDate?: string;

  @IsOptional()
  @IsDateString()
  @ApiPropertyOptional({ description: 'Custom end date (required if timeRange is CUSTOM)' })
  endDate?: string;

  @IsOptional()
  @IsArray()
  @IsUUID(4, { each: true })
  @ApiPropertyOptional({ description: 'Filter by specific providers' })
  providerIds?: string[];

  @IsOptional()
  @IsUUID()
  @ApiPropertyOptional({ description: 'Filter by tenant ID' })
  tenantId?: string;

  @IsOptional()
  @IsUUID()
  @ApiPropertyOptional({ description: 'Filter by hotel ID' })
  hotelId?: string;

  @IsOptional()
  @IsArray()
  @IsEnum(MetricType, { each: true })
  @ApiPropertyOptional({ description: 'Specific metrics to include', enum: MetricType })
  metrics?: MetricType[];
}

/**
 * Get Sync History Query DTO
 * Request parameters for getSyncHistory
 */
export class GetSyncHistoryQueryDto {
  @IsOptional()
  @IsUUID()
  @ApiPropertyOptional({ description: 'Filter by provider ID' })
  providerId?: string;

  @IsOptional()
  @IsUUID()
  @ApiPropertyOptional({ description: 'Filter by tenant ID' })
  tenantId?: string;

  @IsOptional()
  @IsUUID()
  @ApiPropertyOptional({ description: 'Filter by hotel ID' })
  hotelId?: string;

  @IsOptional()
  @IsEnum(SyncStatus)
  @ApiPropertyOptional({ description: 'Filter by sync status', enum: SyncStatus })
  status?: SyncStatus;

  @IsOptional()
  @IsEnum(SyncOperation)
  @ApiPropertyOptional({ description: 'Filter by operation type', enum: SyncOperation })
  operation?: SyncOperation;

  @IsOptional()
  @IsDateString()
  @ApiPropertyOptional({ description: 'Filter by start date (YYYY-MM-DD)' })
  startDate?: string;

  @IsOptional()
  @IsDateString()
  @ApiPropertyOptional({ description: 'Filter by end date (YYYY-MM-DD)' })
  endDate?: string;

  @IsOptional()
  @IsNumber()
  @Min(1)
  @Max(100)
  @Transform(({ value }) => parseInt(value) || 20)
  @ApiPropertyOptional({ description: 'Number of records to return', default: 20 })
  limit?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  @Transform(({ value }) => parseInt(value) || 0)
  @ApiPropertyOptional({ description: 'Number of records to skip', default: 0 })
  offset?: number;
}

/**
 * Get Errors Query DTO
 * Request parameters for querying sync and mapping errors
 */
export interface GetErrorsQueryDto {
  providerId?: string;
  errorType?: ErrorType;
  severity?: ErrorSeverity;
  resolved?: boolean;
  startDate?: string;
  endDate?: string;
  limit?: number;
  offset?: number;
}

/**
 * Mapping Error DTO
 * Represents a room/rate mapping error
 */
export interface MappingErrorDto {
  id: string;
  providerId: string;
  providerName: string;
  internalId: string;
  internalName: string;
  attemptedExternalId?: string;
  errorDescription: string;
  occurredAt: Date;
  resolved: boolean;
  suggestedMapping?: {
    externalId: string;
    externalName: string;
    confidence: number;
    reasoning: string;
  };
  availableOptions: Array<{
    externalId: string;
    externalName: string;
    similarity: number;
  }>;
}

/**
 * Retry Failed Operations DTO
 * Request to retry previously failed sync operations
 */
export interface RetryFailedOperationsDto {
  syncIds: string[];
  providerId?: string;
  maxRetries?: number;
  retryDelaySeconds?: number;
  useExponentialBackoff?: boolean;
}

/**
 * Retry Response DTO
 * Response from retry failed operations request
 */
export interface RetryResponseDto {
  queuedForRetry: number;
  alreadyInProgress: number;
  exceededMaxRetries: number;
  retryJobIds: string[];
  estimatedCompletionTime: string;
}

/**
 * Resolve Error DTO
 * Request to resolve a sync or mapping error
 */
export interface ResolveErrorDto {
  errorId: string;
  action: RecoveryAction;
  actionParameters?: Record<string, any>;
  resolutionNotes?: string;
}

/**
 * Error Resolution Response DTO
 * Response from error resolution request
 */
export interface ErrorResolutionResponseDto {
  errorId: string;
  resolved: boolean;
  message: string;
  messageVi?: string;
  followupActionId?: string;
  context?: Record<string, any>;
}
