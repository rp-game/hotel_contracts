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
exports.MetricType = exports.TimeRange = exports.RecoveryAction = exports.ErrorSeverity = exports.ErrorType = exports.SyncHistoryListResponseDto = exports.SyncHistoryDto = exports.ABTestStatus = exports.FailoverStatus = exports.FailoverTrigger = exports.SyncStatusDto = exports.SyncResponseDto = void 0;
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
    (0, swagger_1.ApiPropertyOptional)({ description: 'Sync completion timestamp', type: Date }),
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
//# sourceMappingURL=api-response.types.js.map