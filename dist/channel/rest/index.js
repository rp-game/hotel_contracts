"use strict";
// Re-export REST DTOs from types for convenience
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetricType = exports.TimeRange = exports.GetSyncHistoryQueryDto = exports.GetAnalyticsQueryDto = exports.PromotionSyncDto = exports.SyncFromProviderDto = exports.SyncRequestDto = exports.RateUpdateDto = exports.BulkInventoryUpdateDto = exports.InventoryUpdateDto = exports.ChartDataDto = exports.ProviderStatusSummary = exports.ProviderPerformanceDto = exports.AlertDto = exports.RealTimeMetricsSummary = exports.RealTimeMetricsDto = exports.AnalyticsDashboardDto = exports.SyncStatusDto = exports.SyncResponseDto = exports.SyncHistoryListResponseDto = exports.SyncHistoryDto = void 0;
// Response DTO classes (export as values)
var api_response_types_1 = require("../types/api-response.types");
Object.defineProperty(exports, "SyncHistoryDto", { enumerable: true, get: function () { return api_response_types_1.SyncHistoryDto; } });
Object.defineProperty(exports, "SyncHistoryListResponseDto", { enumerable: true, get: function () { return api_response_types_1.SyncHistoryListResponseDto; } });
Object.defineProperty(exports, "SyncResponseDto", { enumerable: true, get: function () { return api_response_types_1.SyncResponseDto; } });
Object.defineProperty(exports, "SyncStatusDto", { enumerable: true, get: function () { return api_response_types_1.SyncStatusDto; } });
// Analytics DTOs
Object.defineProperty(exports, "AnalyticsDashboardDto", { enumerable: true, get: function () { return api_response_types_1.AnalyticsDashboardDto; } });
Object.defineProperty(exports, "RealTimeMetricsDto", { enumerable: true, get: function () { return api_response_types_1.RealTimeMetricsDto; } });
Object.defineProperty(exports, "RealTimeMetricsSummary", { enumerable: true, get: function () { return api_response_types_1.RealTimeMetricsSummary; } });
Object.defineProperty(exports, "AlertDto", { enumerable: true, get: function () { return api_response_types_1.AlertDto; } });
Object.defineProperty(exports, "ProviderPerformanceDto", { enumerable: true, get: function () { return api_response_types_1.ProviderPerformanceDto; } });
Object.defineProperty(exports, "ProviderStatusSummary", { enumerable: true, get: function () { return api_response_types_1.ProviderStatusSummary; } });
Object.defineProperty(exports, "ChartDataDto", { enumerable: true, get: function () { return api_response_types_1.ChartDataDto; } });
// Request DTO classes (export as values)
var sync_requests_types_1 = require("../types/sync-requests.types");
Object.defineProperty(exports, "InventoryUpdateDto", { enumerable: true, get: function () { return sync_requests_types_1.InventoryUpdateDto; } });
Object.defineProperty(exports, "BulkInventoryUpdateDto", { enumerable: true, get: function () { return sync_requests_types_1.BulkInventoryUpdateDto; } });
Object.defineProperty(exports, "RateUpdateDto", { enumerable: true, get: function () { return sync_requests_types_1.RateUpdateDto; } });
Object.defineProperty(exports, "SyncRequestDto", { enumerable: true, get: function () { return sync_requests_types_1.SyncRequestDto; } });
Object.defineProperty(exports, "SyncFromProviderDto", { enumerable: true, get: function () { return sync_requests_types_1.SyncFromProviderDto; } });
Object.defineProperty(exports, "PromotionSyncDto", { enumerable: true, get: function () { return sync_requests_types_1.PromotionSyncDto; } });
// Analytics Request DTO classes (export as values)
var api_response_types_2 = require("../types/api-response.types");
Object.defineProperty(exports, "GetAnalyticsQueryDto", { enumerable: true, get: function () { return api_response_types_2.GetAnalyticsQueryDto; } });
Object.defineProperty(exports, "GetSyncHistoryQueryDto", { enumerable: true, get: function () { return api_response_types_2.GetSyncHistoryQueryDto; } });
// Enums (export as values)
var api_response_types_3 = require("../types/api-response.types");
Object.defineProperty(exports, "TimeRange", { enumerable: true, get: function () { return api_response_types_3.TimeRange; } });
Object.defineProperty(exports, "MetricType", { enumerable: true, get: function () { return api_response_types_3.MetricType; } });
//# sourceMappingURL=index.js.map