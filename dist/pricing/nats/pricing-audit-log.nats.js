"use strict";
/**
 * Pricing Audit Log NATS Contracts
 *
 * @nats_pattern pricing.audit-log.list
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
exports.ListPricingAuditLogResponse = exports.PricingAuditLogEntry = exports.ListPricingAuditLogRequest = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
/**
 * NATS Pattern: pricing.audit-log.list
 */
class ListPricingAuditLogRequest {
    tenantId;
    hotelId;
    resourceType;
    resourceId;
    from;
    to;
    page;
    limit;
}
exports.ListPricingAuditLogRequest = ListPricingAuditLogRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID', example: '550e8400-e29b-41d4-a716-446655440000' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ListPricingAuditLogRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Hotel ID filter', example: '550e8400-e29b-41d4-a716-446655440002' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ListPricingAuditLogRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Resource type filter', example: 'rate_plan' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ListPricingAuditLogRequest.prototype, "resourceType", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Resource ID filter', example: '550e8400-e29b-41d4-a716-446655440001' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ListPricingAuditLogRequest.prototype, "resourceId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Start date (ISO 8601)', example: '2026-01-01T00:00:00.000Z' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], ListPricingAuditLogRequest.prototype, "from", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'End date (ISO 8601)', example: '2026-12-31T23:59:59.999Z' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], ListPricingAuditLogRequest.prototype, "to", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Page number (1-based)', example: 1, default: 1 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], ListPricingAuditLogRequest.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Items per page (max 100)', example: 20, default: 20 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.Max)(100),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], ListPricingAuditLogRequest.prototype, "limit", void 0);
class PricingAuditLogEntry {
    id;
    tenantId;
    hotelId;
    resourceType;
    resourceId;
    resourceName;
    action;
    previousData;
    newData;
    performedBy;
    performedByName;
    createdAt;
}
exports.PricingAuditLogEntry = PricingAuditLogEntry;
__decorate([
    (0, swagger_1.ApiProperty)({ example: '550e8400-e29b-41d4-a716-446655440099' }),
    __metadata("design:type", String)
], PricingAuditLogEntry.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '550e8400-e29b-41d4-a716-446655440000' }),
    __metadata("design:type", String)
], PricingAuditLogEntry.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '550e8400-e29b-41d4-a716-446655440002' }),
    __metadata("design:type", String)
], PricingAuditLogEntry.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'rate_plan' }),
    __metadata("design:type", String)
], PricingAuditLogEntry.prototype, "resourceType", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: '550e8400-e29b-41d4-a716-446655440001' }),
    __metadata("design:type", Object)
], PricingAuditLogEntry.prototype, "resourceId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'Best Available Rate' }),
    __metadata("design:type", Object)
], PricingAuditLogEntry.prototype, "resourceName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'UPDATED' }),
    __metadata("design:type", String)
], PricingAuditLogEntry.prototype, "action", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Data before the change' }),
    __metadata("design:type", Object)
], PricingAuditLogEntry.prototype, "previousData", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Data after the change' }),
    __metadata("design:type", Object)
], PricingAuditLogEntry.prototype, "newData", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: '550e8400-e29b-41d4-a716-446655440010' }),
    __metadata("design:type", Object)
], PricingAuditLogEntry.prototype, "performedBy", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'Nguyen Van A' }),
    __metadata("design:type", Object)
], PricingAuditLogEntry.prototype, "performedByName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2026-04-20T08:00:00.000Z' }),
    __metadata("design:type", Date)
], PricingAuditLogEntry.prototype, "createdAt", void 0);
class ListPricingAuditLogResponse {
    data;
    total;
    page;
    limit;
}
exports.ListPricingAuditLogResponse = ListPricingAuditLogResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ type: [PricingAuditLogEntry] }),
    __metadata("design:type", Array)
], ListPricingAuditLogResponse.prototype, "data", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 42 }),
    __metadata("design:type", Number)
], ListPricingAuditLogResponse.prototype, "total", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1 }),
    __metadata("design:type", Number)
], ListPricingAuditLogResponse.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 20 }),
    __metadata("design:type", Number)
], ListPricingAuditLogResponse.prototype, "limit", void 0);
//# sourceMappingURL=pricing-audit-log.nats.js.map