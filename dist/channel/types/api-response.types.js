"use strict";
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetSyncHistoryQueryDto = exports.GetAnalyticsQueryDto = exports.RealTimeMetricsDto = exports.ProviderStatusSummary = exports.MetricType = exports.TimeRange = exports.RecoveryAction = exports.ErrorSeverity = exports.ErrorType = exports.AnalyticsDashboardDto = exports.AlertDto = exports.ChartDataDto = exports.RealTimeMetricsSummary = exports.ProviderPerformanceDto = exports.SyncHistoryListResponseDto = exports.SyncHistoryDto = exports.ABTestStatus = exports.FailoverStatus = exports.FailoverTrigger = exports.SyncStatusDto = exports.SyncResponseDto = void 0;
const enums_1 = require("../enums");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
/**
 * Sync Response DTO
 * Returned by inventory/rate sync operations
 */
class SyncResponseDto {
    syncId;
    status;
    message;
    messageVi;
    startedAt;
    completedAt;
    totalRecords;
    processedRecords;
    failedRecords;
    errors;
    metadata;
}
exports.SyncResponseDto = SyncResponseDto;
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, swagger_1.ApiProperty)({ description: 'Sync operation ID' }),
    __metadata("design:type", String)
], SyncResponseDto.prototype, "syncId", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(enums_1.SyncStatus),
    (0, swagger_1.ApiProperty)({ description: 'Sync status', enum: enums_1.SyncStatus }),
    __metadata("design:type", String)
], SyncResponseDto.prototype, "status", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ description: 'Response message (English)' }),
    __metadata("design:type", String)
], SyncResponseDto.prototype, "message", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiPropertyOptional)({ description: 'Response message (Vietnamese)' }),
    __metadata("design:type", String)
], SyncResponseDto.prototype, "messageVi", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => Date),
    (0, swagger_1.ApiProperty)({ description: 'Sync start timestamp', type: Date }),
    __metadata("design:type", Date)
], SyncResponseDto.prototype, "startedAt", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Date),
    (0, swagger_1.ApiPropertyOptional)({ description: 'Sync completion timestamp', type: Date, required: false }),
    __metadata("design:type", Date)
], SyncResponseDto.prototype, "completedAt", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, swagger_1.ApiPropertyOptional)({ description: 'Total records to process', type: Number }),
    __metadata("design:type", Number)
], SyncResponseDto.prototype, "totalRecords", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, swagger_1.ApiPropertyOptional)({ description: 'Records processed', type: Number }),
    __metadata("design:type", Number)
], SyncResponseDto.prototype, "processedRecords", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, swagger_1.ApiPropertyOptional)({ description: 'Failed records count', type: Number }),
    __metadata("design:type", Number)
], SyncResponseDto.prototype, "failedRecords", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    (0, swagger_1.ApiPropertyOptional)({ description: 'Error messages', type: [String] }),
    __metadata("design:type", Array)
], SyncResponseDto.prototype, "errors", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsObject)(),
    (0, swagger_1.ApiPropertyOptional)({ description: 'Additional metadata', type: Object }),
    __metadata("design:type", Object)
], SyncResponseDto.prototype, "metadata", void 0);
/**
 * Sync Status DTO
 * Returned by getSyncStatus operation
 */
class SyncStatusDto {
    syncId;
    status;
    operation;
    direction;
    startedAt;
    completedAt;
    progressPercentage;
    totalRecords;
    processedRecords;
    failedRecords;
    providers;
    errors;
    currentStep;
    metadata;
}
exports.SyncStatusDto = SyncStatusDto;
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, swagger_1.ApiProperty)({ description: 'Sync operation ID' }),
    __metadata("design:type", String)
], SyncStatusDto.prototype, "syncId", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(enums_1.SyncStatus),
    (0, swagger_1.ApiProperty)({ description: 'Sync status', enum: enums_1.SyncStatus }),
    __metadata("design:type", String)
], SyncStatusDto.prototype, "status", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(enums_1.SyncOperation),
    (0, swagger_1.ApiProperty)({ description: 'Sync operation type', enum: enums_1.SyncOperation }),
    __metadata("design:type", String)
], SyncStatusDto.prototype, "operation", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(enums_1.SyncDirection),
    (0, swagger_1.ApiProperty)({ description: 'Sync direction', enum: enums_1.SyncDirection }),
    __metadata("design:type", String)
], SyncStatusDto.prototype, "direction", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => Date),
    (0, swagger_1.ApiProperty)({ description: 'Sync start timestamp', type: Date }),
    __metadata("design:type", Date)
], SyncStatusDto.prototype, "startedAt", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Date),
    (0, swagger_1.ApiPropertyOptional)({ description: 'Sync completion timestamp', type: Date }),
    __metadata("design:type", Date)
], SyncStatusDto.prototype, "completedAt", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, swagger_1.ApiPropertyOptional)({ description: 'Progress percentage (0-100)', type: Number }),
    __metadata("design:type", Number)
], SyncStatusDto.prototype, "progressPercentage", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, swagger_1.ApiPropertyOptional)({ description: 'Total records to process', type: Number }),
    __metadata("design:type", Number)
], SyncStatusDto.prototype, "totalRecords", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, swagger_1.ApiPropertyOptional)({ description: 'Records processed so far', type: Number }),
    __metadata("design:type", Number)
], SyncStatusDto.prototype, "processedRecords", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, swagger_1.ApiPropertyOptional)({ description: 'Failed records count', type: Number }),
    __metadata("design:type", Number)
], SyncStatusDto.prototype, "failedRecords", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    (0, swagger_1.ApiPropertyOptional)({ description: 'Provider IDs involved in sync', type: [String] }),
    __metadata("design:type", Array)
], SyncStatusDto.prototype, "providers", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    (0, swagger_1.ApiPropertyOptional)({ description: 'Error messages', type: [String] }),
    __metadata("design:type", Array)
], SyncStatusDto.prototype, "errors", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiPropertyOptional)({ description: 'Current step description' }),
    __metadata("design:type", String)
], SyncStatusDto.prototype, "currentStep", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsObject)(),
    (0, swagger_1.ApiPropertyOptional)({ description: 'Additional metadata', type: Object }),
    __metadata("design:type", Object)
], SyncStatusDto.prototype, "metadata", void 0);
/**
 * Failover Trigger Enum
 */
var FailoverTrigger;
(function (FailoverTrigger) {
    FailoverTrigger["MANUAL"] = "MANUAL";
    FailoverTrigger["AUTOMATIC"] = "AUTOMATIC";
    FailoverTrigger["HEALTH_CHECK_FAILED"] = "HEALTH_CHECK_FAILED";
    FailoverTrigger["ERROR_RATE_EXCEEDED"] = "ERROR_RATE_EXCEEDED";
    FailoverTrigger["RESPONSE_TIME_EXCEEDED"] = "RESPONSE_TIME_EXCEEDED";
})(FailoverTrigger || (exports.FailoverTrigger = FailoverTrigger = {}));
/**
 * Failover Status Enum
 */
var FailoverStatus;
(function (FailoverStatus) {
    FailoverStatus["INITIATED"] = "INITIATED";
    FailoverStatus["IN_PROGRESS"] = "IN_PROGRESS";
    FailoverStatus["COMPLETED"] = "COMPLETED";
    FailoverStatus["FAILED"] = "FAILED";
    FailoverStatus["ROLLED_BACK"] = "ROLLED_BACK";
})(FailoverStatus || (exports.FailoverStatus = FailoverStatus = {}));
/**
 * A/B Test Status Enum
 */
var ABTestStatus;
(function (ABTestStatus) {
    ABTestStatus["DRAFT"] = "DRAFT";
    ABTestStatus["ACTIVE"] = "ACTIVE";
    ABTestStatus["PAUSED"] = "PAUSED";
    ABTestStatus["COMPLETED"] = "COMPLETED";
    ABTestStatus["CANCELLED"] = "CANCELLED";
})(ABTestStatus || (exports.ABTestStatus = ABTestStatus = {}));
/**
 * Sync History DTO
 * Individual sync history record
 */
class SyncHistoryDto {
    id;
    providerId;
    providerName;
    operation;
    direction;
    status;
    startedAt;
    completedAt;
    durationMs;
    recordsProcessed;
    recordsSuccessful;
    recordsFailed;
    errorMessage;
    metadata;
}
exports.SyncHistoryDto = SyncHistoryDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Sync history ID' }),
    __metadata("design:type", String)
], SyncHistoryDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Provider ID' }),
    __metadata("design:type", String)
], SyncHistoryDto.prototype, "providerId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Provider name' }),
    __metadata("design:type", String)
], SyncHistoryDto.prototype, "providerName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Sync operation type', enum: enums_1.SyncOperation }),
    __metadata("design:type", String)
], SyncHistoryDto.prototype, "operation", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Sync direction', enum: enums_1.SyncDirection }),
    __metadata("design:type", String)
], SyncHistoryDto.prototype, "direction", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Sync status', enum: enums_1.SyncStatus }),
    __metadata("design:type", String)
], SyncHistoryDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Sync start timestamp', type: Date }),
    __metadata("design:type", Date)
], SyncHistoryDto.prototype, "startedAt", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Sync completion timestamp', type: Date }),
    __metadata("design:type", Date)
], SyncHistoryDto.prototype, "completedAt", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Sync duration in milliseconds', type: Number }),
    __metadata("design:type", Number)
], SyncHistoryDto.prototype, "durationMs", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total records processed', type: Number }),
    __metadata("design:type", Number)
], SyncHistoryDto.prototype, "recordsProcessed", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Successfully processed records', type: Number }),
    __metadata("design:type", Number)
], SyncHistoryDto.prototype, "recordsSuccessful", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Failed records', type: Number }),
    __metadata("design:type", Number)
], SyncHistoryDto.prototype, "recordsFailed", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Error message if sync failed', type: String }),
    __metadata("design:type", String)
], SyncHistoryDto.prototype, "errorMessage", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Additional sync metadata', type: Object }),
    __metadata("design:type", Object)
], SyncHistoryDto.prototype, "metadata", void 0);
/**
 * Sync History List Response DTO
 * Returned by getSyncHistory operation
 */
class SyncHistoryListResponseDto {
    history;
    total;
    page;
    limit;
    totalPages;
}
exports.SyncHistoryListResponseDto = SyncHistoryListResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'List of sync history records', type: [SyncHistoryDto] }),
    __metadata("design:type", Array)
], SyncHistoryListResponseDto.prototype, "history", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total number of records', type: Number }),
    __metadata("design:type", Number)
], SyncHistoryListResponseDto.prototype, "total", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Current page number', type: Number }),
    __metadata("design:type", Number)
], SyncHistoryListResponseDto.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Records per page', type: Number }),
    __metadata("design:type", Number)
], SyncHistoryListResponseDto.prototype, "limit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total number of pages', type: Number }),
    __metadata("design:type", Number)
], SyncHistoryListResponseDto.prototype, "totalPages", void 0);
/**
 * Provider Performance DTO
 * For analytics dashboard
 */
class ProviderPerformanceDto {
    providerId;
    providerName;
    bookingVolume;
    revenue;
    averageDailyRate;
    responseTime;
    errorRate;
    syncSuccessRate;
    topChannels;
    additionalMetrics;
}
exports.ProviderPerformanceDto = ProviderPerformanceDto;
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, swagger_1.ApiProperty)({ description: 'Provider ID' }),
    __metadata("design:type", String)
], ProviderPerformanceDto.prototype, "providerId", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ description: 'Provider name' }),
    __metadata("design:type", String)
], ProviderPerformanceDto.prototype, "providerName", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, swagger_1.ApiProperty)({ description: 'Total bookings in period' }),
    __metadata("design:type", Number)
], ProviderPerformanceDto.prototype, "bookingVolume", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Transform)(({ value }) => parseFloat(value)),
    (0, swagger_1.ApiProperty)({ description: 'Total revenue generated' }),
    __metadata("design:type", Number)
], ProviderPerformanceDto.prototype, "revenue", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Transform)(({ value }) => parseFloat(value)),
    (0, swagger_1.ApiProperty)({ description: 'Average daily rate' }),
    __metadata("design:type", Number)
], ProviderPerformanceDto.prototype, "averageDailyRate", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, swagger_1.ApiProperty)({ description: 'Average response time in milliseconds' }),
    __metadata("design:type", Number)
], ProviderPerformanceDto.prototype, "responseTime", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.Max)(1),
    (0, class_transformer_1.Transform)(({ value }) => parseFloat(value)),
    (0, swagger_1.ApiProperty)({ description: 'Error rate (0-1)' }),
    __metadata("design:type", Number)
], ProviderPerformanceDto.prototype, "errorRate", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.Max)(1),
    (0, class_transformer_1.Transform)(({ value }) => parseFloat(value)),
    (0, swagger_1.ApiProperty)({ description: 'Sync success rate (0-1)' }),
    __metadata("design:type", Number)
], ProviderPerformanceDto.prototype, "syncSuccessRate", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, swagger_1.ApiProperty)({ description: 'Top performing channels', type: [String] }),
    __metadata("design:type", Array)
], ProviderPerformanceDto.prototype, "topChannels", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsObject)(),
    (0, swagger_1.ApiPropertyOptional)({ description: 'Additional performance metrics' }),
    __metadata("design:type", Object)
], ProviderPerformanceDto.prototype, "additionalMetrics", void 0);
/**
 * Real-time Metrics Summary for Analytics Dashboard
 */
class RealTimeMetricsSummary {
    totalBookingsToday;
    totalRevenueToday;
    averageResponseTime;
    overallSyncSuccessRate;
}
exports.RealTimeMetricsSummary = RealTimeMetricsSummary;
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, swagger_1.ApiProperty)({ description: 'Total bookings processed today' }),
    __metadata("design:type", Number)
], RealTimeMetricsSummary.prototype, "totalBookingsToday", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Transform)(({ value }) => parseFloat(value)),
    (0, swagger_1.ApiProperty)({ description: 'Total revenue processed today' }),
    __metadata("design:type", Number)
], RealTimeMetricsSummary.prototype, "totalRevenueToday", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, swagger_1.ApiProperty)({ description: 'Average system response time in ms' }),
    __metadata("design:type", Number)
], RealTimeMetricsSummary.prototype, "averageResponseTime", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.Max)(1),
    (0, class_transformer_1.Transform)(({ value }) => parseFloat(value)),
    (0, swagger_1.ApiProperty)({ description: 'Overall sync success rate (0-1)' }),
    __metadata("design:type", Number)
], RealTimeMetricsSummary.prototype, "overallSyncSuccessRate", void 0);
/**
 * Chart Data for Analytics Dashboard
 */
class ChartDataDto {
    bookingTrends;
    providerComparison;
    syncStatusDistribution;
}
exports.ChartDataDto = ChartDataDto;
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, swagger_1.ApiProperty)({ description: 'Booking trends over time' }),
    __metadata("design:type", Array)
], ChartDataDto.prototype, "bookingTrends", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, swagger_1.ApiProperty)({ description: 'Provider comparison data' }),
    __metadata("design:type", Array)
], ChartDataDto.prototype, "providerComparison", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, swagger_1.ApiProperty)({ description: 'Sync status distribution' }),
    __metadata("design:type", Array)
], ChartDataDto.prototype, "syncStatusDistribution", void 0);
/**
 * Alert DTO
 * Returned by listAlerts operation
 */
class AlertDto {
    id;
    severity;
    message;
    messageVi;
    providerId;
    providerName;
    category;
    createdAt;
    resolvedAt;
    acknowledged;
    context;
}
exports.AlertDto = AlertDto;
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, swagger_1.ApiProperty)({ description: 'Alert ID' }),
    __metadata("design:type", String)
], AlertDto.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(['LOW', 'MEDIUM', 'HIGH', 'CRITICAL']),
    (0, swagger_1.ApiProperty)({ description: 'Alert severity level', enum: ['LOW', 'MEDIUM', 'HIGH', 'CRITICAL'] }),
    __metadata("design:type", String)
], AlertDto.prototype, "severity", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ description: 'Alert message' }),
    __metadata("design:type", String)
], AlertDto.prototype, "message", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiPropertyOptional)({ description: 'Alert message in Vietnamese' }),
    __metadata("design:type", String)
], AlertDto.prototype, "messageVi", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    (0, swagger_1.ApiPropertyOptional)({ description: 'Related provider ID' }),
    __metadata("design:type", String)
], AlertDto.prototype, "providerId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiPropertyOptional)({ description: 'Related provider name' }),
    __metadata("design:type", String)
], AlertDto.prototype, "providerName", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ description: 'Alert category' }),
    __metadata("design:type", String)
], AlertDto.prototype, "category", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Alert creation timestamp', type: Date }),
    __metadata("design:type", Date)
], AlertDto.prototype, "createdAt", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiPropertyOptional)({ description: 'Alert resolution timestamp', type: Date }),
    __metadata("design:type", Date)
], AlertDto.prototype, "resolvedAt", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    (0, swagger_1.ApiProperty)({ description: 'Whether alert is acknowledged' }),
    __metadata("design:type", Boolean)
], AlertDto.prototype, "acknowledged", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsObject)(),
    (0, swagger_1.ApiPropertyOptional)({ description: 'Additional alert context' }),
    __metadata("design:type", Object)
], AlertDto.prototype, "context", void 0);
/**
 * Analytics Dashboard DTO
 * Returned by getAnalyticsDashboard operation
 */
class AnalyticsDashboardDto {
    realtimeMetrics;
    providerPerformance;
    recentSyncs;
    activeAlerts;
    chartData;
}
exports.AnalyticsDashboardDto = AnalyticsDashboardDto;
__decorate([
    (0, class_validator_1.IsObject)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => RealTimeMetricsSummary),
    (0, swagger_1.ApiProperty)({ description: 'Real-time metrics summary', type: RealTimeMetricsSummary }),
    __metadata("design:type", RealTimeMetricsSummary)
], AnalyticsDashboardDto.prototype, "realtimeMetrics", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => ProviderPerformanceDto),
    (0, swagger_1.ApiProperty)({ description: 'Provider performance data', type: [ProviderPerformanceDto] }),
    __metadata("design:type", Array)
], AnalyticsDashboardDto.prototype, "providerPerformance", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => SyncHistoryDto),
    (0, swagger_1.ApiProperty)({ description: 'Recent sync history', type: [SyncHistoryDto] }),
    __metadata("design:type", Array)
], AnalyticsDashboardDto.prototype, "recentSyncs", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => AlertDto),
    (0, swagger_1.ApiProperty)({ description: 'Active alerts', type: [AlertDto] }),
    __metadata("design:type", Array)
], AnalyticsDashboardDto.prototype, "activeAlerts", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsObject)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => ChartDataDto),
    (0, swagger_1.ApiPropertyOptional)({ description: 'Chart data for dashboard visualizations', type: ChartDataDto }),
    __metadata("design:type", ChartDataDto)
], AnalyticsDashboardDto.prototype, "chartData", void 0);
/**
 * Error Type Enum
 */
var ErrorType;
(function (ErrorType) {
    ErrorType["RATE_LIMIT_EXCEEDED"] = "RATE_LIMIT_EXCEEDED";
    ErrorType["CONNECTION_TIMEOUT"] = "CONNECTION_TIMEOUT";
    ErrorType["AUTHENTICATION_FAILED"] = "AUTHENTICATION_FAILED";
    ErrorType["MAPPING_NOT_FOUND"] = "MAPPING_NOT_FOUND";
    ErrorType["VALIDATION_ERROR"] = "VALIDATION_ERROR";
    ErrorType["PROVIDER_ERROR"] = "PROVIDER_ERROR";
    ErrorType["DATA_CONFLICT"] = "DATA_CONFLICT";
    ErrorType["UNKNOWN_ERROR"] = "UNKNOWN_ERROR";
})(ErrorType || (exports.ErrorType = ErrorType = {}));
/**
 * Error Severity Enum
 */
var ErrorSeverity;
(function (ErrorSeverity) {
    ErrorSeverity["LOW"] = "LOW";
    ErrorSeverity["MEDIUM"] = "MEDIUM";
    ErrorSeverity["HIGH"] = "HIGH";
    ErrorSeverity["CRITICAL"] = "CRITICAL";
})(ErrorSeverity || (exports.ErrorSeverity = ErrorSeverity = {}));
/**
 * Recovery Action Enum
 */
var RecoveryAction;
(function (RecoveryAction) {
    RecoveryAction["RETRY"] = "RETRY";
    RecoveryAction["SKIP"] = "SKIP";
    RecoveryAction["MANUAL_INTERVENTION"] = "MANUAL_INTERVENTION";
    RecoveryAction["FAILOVER"] = "FAILOVER";
    RecoveryAction["QUEUE_FOR_LATER"] = "QUEUE_FOR_LATER";
})(RecoveryAction || (exports.RecoveryAction = RecoveryAction = {}));
/**
 * Time Range Enum
 * For analytics queries
 */
var TimeRange;
(function (TimeRange) {
    TimeRange["LAST_24_HOURS"] = "LAST_24_HOURS";
    TimeRange["LAST_7_DAYS"] = "LAST_7_DAYS";
    TimeRange["LAST_30_DAYS"] = "LAST_30_DAYS";
    TimeRange["LAST_90_DAYS"] = "LAST_90_DAYS";
    TimeRange["CUSTOM"] = "CUSTOM";
})(TimeRange || (exports.TimeRange = TimeRange = {}));
/**
 * Metric Type Enum
 * For analytics queries
 */
var MetricType;
(function (MetricType) {
    MetricType["BOOKING_VOLUME"] = "BOOKING_VOLUME";
    MetricType["REVENUE"] = "REVENUE";
    MetricType["AVERAGE_DAILY_RATE"] = "AVERAGE_DAILY_RATE";
    MetricType["RESPONSE_TIME"] = "RESPONSE_TIME";
    MetricType["ERROR_RATE"] = "ERROR_RATE";
    MetricType["SYNC_SUCCESS_RATE"] = "SYNC_SUCCESS_RATE";
})(MetricType || (exports.MetricType = MetricType = {}));
/**
 * Real-Time Metrics DTO
 * Returned by getRealTimeMetrics operation
 */
/**
 * Provider Status Summary for Real-Time Metrics
 */
class ProviderStatusSummary {
    providerId;
    providerName;
    status;
    lastSyncAt;
}
exports.ProviderStatusSummary = ProviderStatusSummary;
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, swagger_1.ApiProperty)({ description: 'Provider ID' }),
    __metadata("design:type", String)
], ProviderStatusSummary.prototype, "providerId", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ description: 'Provider name' }),
    __metadata("design:type", String)
], ProviderStatusSummary.prototype, "providerName", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(['HEALTHY', 'WARNING', 'ERROR']),
    (0, swagger_1.ApiProperty)({ description: 'Provider health status', enum: ['HEALTHY', 'WARNING', 'ERROR'] }),
    __metadata("design:type", String)
], ProviderStatusSummary.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Last sync timestamp', type: Date }),
    __metadata("design:type", Date)
], ProviderStatusSummary.prototype, "lastSyncAt", void 0);
/**
 * Real-Time Metrics DTO
 * Returned by getRealTimeMetrics operation
 */
class RealTimeMetricsDto {
    activeSyncs;
    todayBookings;
    todayRevenue;
    averageResponseTime;
    systemHealthScore;
    providerStatuses;
    unresolvedAlerts;
}
exports.RealTimeMetricsDto = RealTimeMetricsDto;
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, swagger_1.ApiProperty)({ description: 'Total active sync operations' }),
    __metadata("design:type", Number)
], RealTimeMetricsDto.prototype, "activeSyncs", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, swagger_1.ApiProperty)({ description: 'Total bookings processed today' }),
    __metadata("design:type", Number)
], RealTimeMetricsDto.prototype, "todayBookings", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Transform)(({ value }) => parseFloat(value)),
    (0, swagger_1.ApiProperty)({ description: 'Total revenue processed today' }),
    __metadata("design:type", Number)
], RealTimeMetricsDto.prototype, "todayRevenue", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, swagger_1.ApiProperty)({ description: 'Average system response time in ms' }),
    __metadata("design:type", Number)
], RealTimeMetricsDto.prototype, "averageResponseTime", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.Max)(1),
    (0, class_transformer_1.Transform)(({ value }) => parseFloat(value)),
    (0, swagger_1.ApiProperty)({ description: 'Overall system health score (0-1)' }),
    __metadata("design:type", Number)
], RealTimeMetricsDto.prototype, "systemHealthScore", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => ProviderStatusSummary),
    (0, swagger_1.ApiProperty)({ description: 'Provider status summary', type: [ProviderStatusSummary] }),
    __metadata("design:type", Array)
], RealTimeMetricsDto.prototype, "providerStatuses", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, swagger_1.ApiProperty)({ description: 'Total unresolved alerts' }),
    __metadata("design:type", Number)
], RealTimeMetricsDto.prototype, "unresolvedAlerts", void 0);
/**
 * Get Analytics Query DTO
 * Request parameters for getAnalyticsDashboard
 */
class GetAnalyticsQueryDto {
    timeRange;
    startDate;
    endDate;
    providerIds;
    tenantId;
    hotelId;
    metrics;
}
exports.GetAnalyticsQueryDto = GetAnalyticsQueryDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(TimeRange),
    (0, swagger_1.ApiPropertyOptional)({ description: 'Time range for analytics', enum: TimeRange, default: TimeRange.LAST_7_DAYS }),
    __metadata("design:type", String)
], GetAnalyticsQueryDto.prototype, "timeRange", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    (0, swagger_1.ApiPropertyOptional)({ description: 'Custom start date (required if timeRange is CUSTOM)' }),
    __metadata("design:type", String)
], GetAnalyticsQueryDto.prototype, "startDate", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    (0, swagger_1.ApiPropertyOptional)({ description: 'Custom end date (required if timeRange is CUSTOM)' }),
    __metadata("design:type", String)
], GetAnalyticsQueryDto.prototype, "endDate", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsUUID)(4, { each: true }),
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter by specific providers' }),
    __metadata("design:type", Array)
], GetAnalyticsQueryDto.prototype, "providerIds", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter by tenant ID' }),
    __metadata("design:type", String)
], GetAnalyticsQueryDto.prototype, "tenantId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter by hotel ID' }),
    __metadata("design:type", String)
], GetAnalyticsQueryDto.prototype, "hotelId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsEnum)(MetricType, { each: true }),
    (0, swagger_1.ApiPropertyOptional)({ description: 'Specific metrics to include', enum: MetricType }),
    __metadata("design:type", Array)
], GetAnalyticsQueryDto.prototype, "metrics", void 0);
/**
 * Get Sync History Query DTO
 * Request parameters for getSyncHistory
 */
class GetSyncHistoryQueryDto {
    providerId;
    tenantId;
    hotelId;
    status;
    operation;
    startDate;
    endDate;
    limit;
    offset;
}
exports.GetSyncHistoryQueryDto = GetSyncHistoryQueryDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter by provider ID' }),
    __metadata("design:type", String)
], GetSyncHistoryQueryDto.prototype, "providerId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter by tenant ID' }),
    __metadata("design:type", String)
], GetSyncHistoryQueryDto.prototype, "tenantId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter by hotel ID' }),
    __metadata("design:type", String)
], GetSyncHistoryQueryDto.prototype, "hotelId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(enums_1.SyncStatus),
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter by sync status', enum: enums_1.SyncStatus }),
    __metadata("design:type", String)
], GetSyncHistoryQueryDto.prototype, "status", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(enums_1.SyncOperation),
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter by operation type', enum: enums_1.SyncOperation }),
    __metadata("design:type", String)
], GetSyncHistoryQueryDto.prototype, "operation", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter by start date (YYYY-MM-DD)' }),
    __metadata("design:type", String)
], GetSyncHistoryQueryDto.prototype, "startDate", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter by end date (YYYY-MM-DD)' }),
    __metadata("design:type", String)
], GetSyncHistoryQueryDto.prototype, "endDate", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.Max)(100),
    (0, class_transformer_1.Transform)(({ value }) => parseInt(value) || 20),
    (0, swagger_1.ApiPropertyOptional)({ description: 'Number of records to return', default: 20 }),
    __metadata("design:type", Number)
], GetSyncHistoryQueryDto.prototype, "limit", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    (0, class_transformer_1.Transform)(({ value }) => parseInt(value) || 0),
    (0, swagger_1.ApiPropertyOptional)({ description: 'Number of records to skip', default: 0 }),
    __metadata("design:type", Number)
], GetSyncHistoryQueryDto.prototype, "offset", void 0);
//# sourceMappingURL=api-response.types.js.map