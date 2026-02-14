// Re-export REST DTOs from types for convenience

// Response DTO classes (export as values)
export {
  SyncHistoryDto,
  SyncHistoryListResponseDto,
  SyncResponseDto,
  SyncStatusDto,
  // Analytics DTOs
  AnalyticsDashboardDto,
  RealTimeMetricsDto,
  RealTimeMetricsSummary,
  AlertDto,
  ProviderPerformanceDto,
  ProviderStatusSummary,
  ChartDataDto,
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

// Analytics Request DTO classes (export as values)
export {
  GetAnalyticsQueryDto,
  GetSyncHistoryQueryDto,
} from '../types/api-response.types';

// Enums (export as values)
export {
  TimeRange,
  MetricType,
} from '../types/api-response.types';
