"use strict";
/**
 * Sales Win/Loss Report NATS Contracts
 *
 * Handler: booking-service
 * Called by: api-gateway
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
exports.GetPendingLeadsNatsRequest = exports.GetLossReasonsNatsRequest = exports.MarkLostNatsRequest = exports.MarkWonNatsRequest = exports.SalesReportNatsRequest = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
/**
 * Shared report filters request - wraps ReportFiltersDto with tenantId
 * Used by all 5 report endpoints
 */
class SalesReportNatsRequest {
    tenantId;
    startDate;
    endDate;
    hotelId;
    staffId;
}
exports.SalesReportNatsRequest = SalesReportNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID', example: 'tenant-001' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SalesReportNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Report start date (ISO 8601)', example: '2026-01-01' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], SalesReportNatsRequest.prototype, "startDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Report end date (ISO 8601)', example: '2026-12-31' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], SalesReportNatsRequest.prototype, "endDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter by hotel ID', example: '550e8400-e29b-41d4-a716-446655440000' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], SalesReportNatsRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter by staff ID', example: '550e8400-e29b-41d4-a716-446655440001' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], SalesReportNatsRequest.prototype, "staffId", void 0);
/**
 * Mark Won NATS request - wraps MarkWonDto with tenantId + leadId
 */
class MarkWonNatsRequest {
    tenantId;
    leadId;
    bookingId;
    wonValue;
    wonNotes;
}
exports.MarkWonNatsRequest = MarkWonNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID', example: 'tenant-001' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], MarkWonNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Sales Lead ID', example: '550e8400-e29b-41d4-a716-446655440000' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], MarkWonNatsRequest.prototype, "leadId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Booking ID that won the deal', example: '550e8400-e29b-41d4-a716-446655440001' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], MarkWonNatsRequest.prototype, "bookingId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total won deal value', example: 5000000 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], MarkWonNatsRequest.prototype, "wonValue", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Optional notes about the won deal', example: 'Corporate group booking' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], MarkWonNatsRequest.prototype, "wonNotes", void 0);
/**
 * Mark Lost NATS request - wraps MarkLostDto with tenantId + leadId
 */
class MarkLostNatsRequest {
    tenantId;
    leadId;
    lossReasonId;
    lostNotes;
}
exports.MarkLostNatsRequest = MarkLostNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID', example: 'tenant-001' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], MarkLostNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Sales Lead ID', example: '550e8400-e29b-41d4-a716-446655440000' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], MarkLostNatsRequest.prototype, "leadId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Loss reason ID', example: '550e8400-e29b-41d4-a716-446655440002' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], MarkLostNatsRequest.prototype, "lossReasonId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Optional notes about the lost deal', example: 'Client budget reduced' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], MarkLostNatsRequest.prototype, "lostNotes", void 0);
/**
 * Get Loss Reasons NATS request
 */
class GetLossReasonsNatsRequest {
    tenantId;
}
exports.GetLossReasonsNatsRequest = GetLossReasonsNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID', example: 'tenant-001' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetLossReasonsNatsRequest.prototype, "tenantId", void 0);
/**
 * Get Pending Leads NATS request
 */
class GetPendingLeadsNatsRequest {
    tenantId;
    hotelId;
    staffId;
}
exports.GetPendingLeadsNatsRequest = GetPendingLeadsNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID', example: 'tenant-001' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetPendingLeadsNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter by hotel ID', example: '550e8400-e29b-41d4-a716-446655440000' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], GetPendingLeadsNatsRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter by staff ID', example: '550e8400-e29b-41d4-a716-446655440001' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], GetPendingLeadsNatsRequest.prototype, "staffId", void 0);
//# sourceMappingURL=sales-report.nats.js.map