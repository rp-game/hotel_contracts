"use strict";
/**
 * Rate Plan Auto-Extension Types
 *
 * Cron auto-extends rate_plan_pricing rolling 365 days.
 * Run = 1 cron tick (heartbeat). Log = 1 row per (run, ratePlan).
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
exports.ExtensionHealthStatus = exports.ListExtensionRunsResponse = exports.ListExtensionRunsRequest = exports.ListExtensionLogsResponse = exports.ListExtensionLogsRequest = exports.GetCoverageResponse = exports.GetCoverageRequest = exports.RatePlanCoverageStatus = exports.UndoExtensionRequest = exports.ExtendRatePlanResponse = exports.ExtendRatePlanRequest = exports.RatePlanExtensionLog = exports.RatePlanExtensionRun = exports.CoverageSeverity = exports.RatePlanExtensionStatus = exports.RatePlanExtensionRunStatus = exports.RatePlanExtensionSource = void 0;
const swagger_1 = require("@nestjs/swagger");
var RatePlanExtensionSource;
(function (RatePlanExtensionSource) {
    RatePlanExtensionSource["CRON"] = "CRON";
    RatePlanExtensionSource["MANUAL"] = "MANUAL";
})(RatePlanExtensionSource || (exports.RatePlanExtensionSource = RatePlanExtensionSource = {}));
var RatePlanExtensionRunStatus;
(function (RatePlanExtensionRunStatus) {
    RatePlanExtensionRunStatus["RUNNING"] = "RUNNING";
    RatePlanExtensionRunStatus["COMPLETED"] = "COMPLETED";
    RatePlanExtensionRunStatus["PARTIAL"] = "PARTIAL";
    RatePlanExtensionRunStatus["FAILED"] = "FAILED";
})(RatePlanExtensionRunStatus || (exports.RatePlanExtensionRunStatus = RatePlanExtensionRunStatus = {}));
var RatePlanExtensionStatus;
(function (RatePlanExtensionStatus) {
    RatePlanExtensionStatus["SUCCESS"] = "SUCCESS";
    RatePlanExtensionStatus["PARTIAL"] = "PARTIAL";
    RatePlanExtensionStatus["FAILED"] = "FAILED";
    RatePlanExtensionStatus["UNDONE"] = "UNDONE";
    RatePlanExtensionStatus["SKIPPED_PLAN_INACTIVE"] = "SKIPPED_PLAN_INACTIVE";
    RatePlanExtensionStatus["SKIPPED_HOTEL_INACTIVE"] = "SKIPPED_HOTEL_INACTIVE";
    RatePlanExtensionStatus["SKIPPED_DERIVED"] = "SKIPPED_DERIVED";
    RatePlanExtensionStatus["SKIPPED_NOT_YET_VALID"] = "SKIPPED_NOT_YET_VALID";
    RatePlanExtensionStatus["SKIPPED_EXPIRED"] = "SKIPPED_EXPIRED";
    RatePlanExtensionStatus["SKIPPED_NO_ACTIVE_TEMPLATE"] = "SKIPPED_NO_ACTIVE_TEMPLATE";
    RatePlanExtensionStatus["SKIPPED_ALREADY_COVERED"] = "SKIPPED_ALREADY_COVERED";
})(RatePlanExtensionStatus || (exports.RatePlanExtensionStatus = RatePlanExtensionStatus = {}));
var CoverageSeverity;
(function (CoverageSeverity) {
    CoverageSeverity["RED"] = "red";
    CoverageSeverity["YELLOW"] = "yellow";
    CoverageSeverity["GREEN"] = "green";
})(CoverageSeverity || (exports.CoverageSeverity = CoverageSeverity = {}));
class RatePlanExtensionRun {
    id;
    source;
    status;
    totalPlans;
    successCount;
    skippedCount;
    failedCount;
    triggerNote;
    startedAt;
    completedAt;
    errorMessage;
}
exports.RatePlanExtensionRun = RatePlanExtensionRun;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], RatePlanExtensionRun.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: RatePlanExtensionSource }),
    __metadata("design:type", String)
], RatePlanExtensionRun.prototype, "source", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: RatePlanExtensionRunStatus }),
    __metadata("design:type", String)
], RatePlanExtensionRun.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], RatePlanExtensionRun.prototype, "totalPlans", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], RatePlanExtensionRun.prototype, "successCount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], RatePlanExtensionRun.prototype, "skippedCount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], RatePlanExtensionRun.prototype, "failedCount", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", Object)
], RatePlanExtensionRun.prototype, "triggerNote", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], RatePlanExtensionRun.prototype, "startedAt", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", Object)
], RatePlanExtensionRun.prototype, "completedAt", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", Object)
], RatePlanExtensionRun.prototype, "errorMessage", void 0);
class RatePlanExtensionLog {
    id;
    runId;
    tenantId;
    hotelId;
    ratePlanId;
    ratePlanCode;
    source;
    status;
    templatePricingId;
    templateLabel;
    templateSnapshot;
    createdPricingIds;
    extendedFrom;
    extendedTo;
    rowsCreated;
    performedBy;
    performedByName;
    reason;
    errorMessage;
    undoneAt;
    undoneBy;
    undoExpiresAt;
    startedAt;
    completedAt;
    createdAt;
}
exports.RatePlanExtensionLog = RatePlanExtensionLog;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], RatePlanExtensionLog.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], RatePlanExtensionLog.prototype, "runId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], RatePlanExtensionLog.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], RatePlanExtensionLog.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], RatePlanExtensionLog.prototype, "ratePlanId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], RatePlanExtensionLog.prototype, "ratePlanCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: RatePlanExtensionSource }),
    __metadata("design:type", String)
], RatePlanExtensionLog.prototype, "source", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: RatePlanExtensionStatus }),
    __metadata("design:type", String)
], RatePlanExtensionLog.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", Object)
], RatePlanExtensionLog.prototype, "templatePricingId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", Object)
], RatePlanExtensionLog.prototype, "templateLabel", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", Object)
], RatePlanExtensionLog.prototype, "templateSnapshot", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [String] }),
    __metadata("design:type", Array)
], RatePlanExtensionLog.prototype, "createdPricingIds", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", Object)
], RatePlanExtensionLog.prototype, "extendedFrom", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", Object)
], RatePlanExtensionLog.prototype, "extendedTo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], RatePlanExtensionLog.prototype, "rowsCreated", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", Object)
], RatePlanExtensionLog.prototype, "performedBy", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", Object)
], RatePlanExtensionLog.prototype, "performedByName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", Object)
], RatePlanExtensionLog.prototype, "reason", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", Object)
], RatePlanExtensionLog.prototype, "errorMessage", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", Object)
], RatePlanExtensionLog.prototype, "undoneAt", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", Object)
], RatePlanExtensionLog.prototype, "undoneBy", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", Object)
], RatePlanExtensionLog.prototype, "undoExpiresAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], RatePlanExtensionLog.prototype, "startedAt", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", Object)
], RatePlanExtensionLog.prototype, "completedAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], RatePlanExtensionLog.prototype, "createdAt", void 0);
class ExtendRatePlanRequest {
    tenantId;
    ratePlanId;
    performedBy;
    performedByName;
    reason;
}
exports.ExtendRatePlanRequest = ExtendRatePlanRequest;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ExtendRatePlanRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ExtendRatePlanRequest.prototype, "ratePlanId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], ExtendRatePlanRequest.prototype, "performedBy", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], ExtendRatePlanRequest.prototype, "performedByName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], ExtendRatePlanRequest.prototype, "reason", void 0);
class ExtendRatePlanResponse {
    log;
}
exports.ExtendRatePlanResponse = ExtendRatePlanResponse;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", RatePlanExtensionLog)
], ExtendRatePlanResponse.prototype, "log", void 0);
class UndoExtensionRequest {
    tenantId;
    logId;
    performedBy;
    performedByName;
}
exports.UndoExtensionRequest = UndoExtensionRequest;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], UndoExtensionRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], UndoExtensionRequest.prototype, "logId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], UndoExtensionRequest.prototype, "performedBy", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], UndoExtensionRequest.prototype, "performedByName", void 0);
class RatePlanCoverageStatus {
    ratePlanId;
    ratePlanCode;
    ratePlanName;
    latestEndDate;
    daysRemaining;
    severity;
    lastExtendedAt;
    lastStatus;
    hasGaps;
    gaps;
    totalRanges;
}
exports.RatePlanCoverageStatus = RatePlanCoverageStatus;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], RatePlanCoverageStatus.prototype, "ratePlanId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], RatePlanCoverageStatus.prototype, "ratePlanCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], RatePlanCoverageStatus.prototype, "ratePlanName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", Object)
], RatePlanCoverageStatus.prototype, "latestEndDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], RatePlanCoverageStatus.prototype, "daysRemaining", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: CoverageSeverity }),
    __metadata("design:type", String)
], RatePlanCoverageStatus.prototype, "severity", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", Object)
], RatePlanCoverageStatus.prototype, "lastExtendedAt", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", Object)
], RatePlanCoverageStatus.prototype, "lastStatus", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], RatePlanCoverageStatus.prototype, "hasGaps", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: 'array', items: { type: 'object' } }),
    __metadata("design:type", Array)
], RatePlanCoverageStatus.prototype, "gaps", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", Number)
], RatePlanCoverageStatus.prototype, "totalRanges", void 0);
class GetCoverageRequest {
    tenantId;
    hotelId;
}
exports.GetCoverageRequest = GetCoverageRequest;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], GetCoverageRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], GetCoverageRequest.prototype, "hotelId", void 0);
class GetCoverageResponse {
    items;
}
exports.GetCoverageResponse = GetCoverageResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ type: [RatePlanCoverageStatus] }),
    __metadata("design:type", Array)
], GetCoverageResponse.prototype, "items", void 0);
class ListExtensionLogsRequest {
    tenantId;
    hotelId;
    ratePlanId;
    source;
    status;
    dateFrom;
    dateTo;
    page;
    limit;
}
exports.ListExtensionLogsRequest = ListExtensionLogsRequest;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ListExtensionLogsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], ListExtensionLogsRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], ListExtensionLogsRequest.prototype, "ratePlanId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ enum: RatePlanExtensionSource }),
    __metadata("design:type", String)
], ListExtensionLogsRequest.prototype, "source", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ enum: RatePlanExtensionStatus }),
    __metadata("design:type", String)
], ListExtensionLogsRequest.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], ListExtensionLogsRequest.prototype, "dateFrom", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], ListExtensionLogsRequest.prototype, "dateTo", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", Number)
], ListExtensionLogsRequest.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", Number)
], ListExtensionLogsRequest.prototype, "limit", void 0);
class ListExtensionLogsResponse {
    items;
    total;
    page;
    limit;
}
exports.ListExtensionLogsResponse = ListExtensionLogsResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ type: [RatePlanExtensionLog] }),
    __metadata("design:type", Array)
], ListExtensionLogsResponse.prototype, "items", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], ListExtensionLogsResponse.prototype, "total", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], ListExtensionLogsResponse.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], ListExtensionLogsResponse.prototype, "limit", void 0);
class ListExtensionRunsRequest {
    dateFrom;
    dateTo;
    page;
    limit;
}
exports.ListExtensionRunsRequest = ListExtensionRunsRequest;
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], ListExtensionRunsRequest.prototype, "dateFrom", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], ListExtensionRunsRequest.prototype, "dateTo", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", Number)
], ListExtensionRunsRequest.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", Number)
], ListExtensionRunsRequest.prototype, "limit", void 0);
class ListExtensionRunsResponse {
    items;
    total;
    page;
    limit;
}
exports.ListExtensionRunsResponse = ListExtensionRunsResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ type: [RatePlanExtensionRun] }),
    __metadata("design:type", Array)
], ListExtensionRunsResponse.prototype, "items", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], ListExtensionRunsResponse.prototype, "total", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], ListExtensionRunsResponse.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], ListExtensionRunsResponse.prototype, "limit", void 0);
class ExtensionHealthStatus {
    isHealthy;
    lastRunAt;
    lastRunStatus;
    hoursSinceLastRun;
}
exports.ExtensionHealthStatus = ExtensionHealthStatus;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], ExtensionHealthStatus.prototype, "isHealthy", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", Object)
], ExtensionHealthStatus.prototype, "lastRunAt", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ enum: RatePlanExtensionRunStatus }),
    __metadata("design:type", Object)
], ExtensionHealthStatus.prototype, "lastRunStatus", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], ExtensionHealthStatus.prototype, "hoursSinceLastRun", void 0);
//# sourceMappingURL=rate-plan-extension.types.js.map