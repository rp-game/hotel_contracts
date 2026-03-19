"use strict";
/**
 * Audit Activity Event Contract
 * @description Shared types for cross-service audit logging
 * @usage Emitted by all services via NATS 'audit.activity', received by user-service
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
exports.AuditLogListResponseDto = exports.AuditLogResponseDto = exports.FindAuditLogsQueryDto = exports.SYSTEM_USER_NAME = exports.SYSTEM_USER_ID = exports.AuditSeverity = exports.AuditCategory = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
/** Categorize actions for filtering in admin UI */
var AuditCategory;
(function (AuditCategory) {
    AuditCategory["AUTH"] = "AUTH";
    AuditCategory["BOOKING"] = "BOOKING";
    AuditCategory["FINANCIAL"] = "FINANCIAL";
    AuditCategory["CONFIGURATION"] = "CONFIGURATION";
})(AuditCategory || (exports.AuditCategory = AuditCategory = {}));
/** Severity/importance level for visual distinction */
var AuditSeverity;
(function (AuditSeverity) {
    AuditSeverity["INFO"] = "INFO";
    AuditSeverity["ACTION"] = "ACTION";
    AuditSeverity["WARNING"] = "WARNING";
    AuditSeverity["CRITICAL"] = "CRITICAL";
})(AuditSeverity || (exports.AuditSeverity = AuditSeverity = {}));
/** Sentinel for automated/cron/system actions */
exports.SYSTEM_USER_ID = '00000000-0000-0000-0000-000000000000';
exports.SYSTEM_USER_NAME = 'System';
// --- REST DTOs for API Gateway ---
class FindAuditLogsQueryDto {
    userId;
    action;
    resource;
    service;
    category;
    severity;
    dateFrom;
    dateTo;
    page;
    limit;
}
exports.FindAuditLogsQueryDto = FindAuditLogsQueryDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter by user ID' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FindAuditLogsQueryDto.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter by action type (e.g. LOGIN, PAYMENT_CREATED)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FindAuditLogsQueryDto.prototype, "action", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter by resource (e.g. user, payment, rate_plan)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FindAuditLogsQueryDto.prototype, "resource", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter by service (e.g. auth, payment, pricing)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FindAuditLogsQueryDto.prototype, "service", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter by category', enum: AuditCategory }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(AuditCategory),
    __metadata("design:type", String)
], FindAuditLogsQueryDto.prototype, "category", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter by severity', enum: AuditSeverity }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(AuditSeverity),
    __metadata("design:type", String)
], FindAuditLogsQueryDto.prototype, "severity", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Start date (ISO string)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FindAuditLogsQueryDto.prototype, "dateFrom", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'End date (ISO string)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FindAuditLogsQueryDto.prototype, "dateTo", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Page number', default: 1 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], FindAuditLogsQueryDto.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Items per page', default: 20 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.Max)(100),
    __metadata("design:type", Number)
], FindAuditLogsQueryDto.prototype, "limit", void 0);
class AuditLogResponseDto {
    id;
    tenantId;
    hotelId;
    userId;
    userName;
    service;
    category;
    action;
    severity;
    resource;
    resourceId;
    resourceName;
    descriptionVi;
    descriptionEn;
    metadata;
    ipAddress;
    userAgent;
    createdAt;
}
exports.AuditLogResponseDto = AuditLogResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], AuditLogResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], AuditLogResponseDto.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], AuditLogResponseDto.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], AuditLogResponseDto.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], AuditLogResponseDto.prototype, "userName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], AuditLogResponseDto.prototype, "service", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: AuditCategory }),
    __metadata("design:type", String)
], AuditLogResponseDto.prototype, "category", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], AuditLogResponseDto.prototype, "action", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: AuditSeverity }),
    __metadata("design:type", String)
], AuditLogResponseDto.prototype, "severity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], AuditLogResponseDto.prototype, "resource", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], AuditLogResponseDto.prototype, "resourceId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], AuditLogResponseDto.prototype, "resourceName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], AuditLogResponseDto.prototype, "descriptionVi", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], AuditLogResponseDto.prototype, "descriptionEn", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", Object)
], AuditLogResponseDto.prototype, "metadata", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], AuditLogResponseDto.prototype, "ipAddress", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], AuditLogResponseDto.prototype, "userAgent", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], AuditLogResponseDto.prototype, "createdAt", void 0);
class AuditLogListResponseDto {
    data;
    total;
    page;
    limit;
    totalPages;
}
exports.AuditLogListResponseDto = AuditLogListResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ type: [AuditLogResponseDto] }),
    __metadata("design:type", Array)
], AuditLogListResponseDto.prototype, "data", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], AuditLogListResponseDto.prototype, "total", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], AuditLogListResponseDto.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], AuditLogListResponseDto.prototype, "limit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], AuditLogListResponseDto.prototype, "totalPages", void 0);
//# sourceMappingURL=audit-activity.event.js.map