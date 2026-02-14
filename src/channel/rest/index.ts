// Re-export REST DTOs from types for convenience

// Response DTO classes (export as values)
export {
  SyncHistoryDto,
  SyncHistoryListResponseDto,
  SyncResponseDto,
  SyncStatusDto,
} from '../types/api-response.types';

// Request DTO classes (export as values)
export {
  InventoryUpdateDto,
  BulkInventoryUpdateDto,
  RateUpdateDto,
  SyncRequestDto,
  SyncFromProviderDto,
  PromotionSyncDto,
} from '../types/sync-requests.types';

// Interfaces and types (export as types only)
export type {
  AnalyticsDashboardDto,
  RealTimeMetricsDto,
  AlertDto,
  ProviderPerformanceDto,
  GetAnalyticsQueryDto,
  GetSyncHistoryQueryDto,
  TimeRange,
  MetricType,
} from '../types/api-response.types';
