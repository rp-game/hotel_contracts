"use strict";
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
exports.SalesCommissionSummaryResponse = exports.SalesPersonCommissionSummary = exports.SalesCommissionSummaryRequest = exports.SalesCommissionRecordListResponse = exports.SalesCommissionRecordResponse = exports.FindSalesCommissionRecordsRequest = exports.DeleteSalesCommissionRuleResponse = exports.SalesCommissionRuleListResponse = exports.SalesCommissionRuleResponse = exports.DeleteSalesCommissionRuleRequest = exports.GetSalesCommissionRuleRequest = exports.FindSalesCommissionRulesRequest = exports.UpdateSalesCommissionRuleRequest = exports.UpdateSalesCommissionRuleDto = exports.CreateSalesCommissionRuleRequest = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const sales_enum_1 = require("../enums/sales.enum");
// === Commission Rule CRUD ===
class CreateSalesCommissionRuleRequest {
    tenantId;
    hotelId;
    salesPersonId;
    salesPersonName;
    commissionRate;
    appliesTo;
    isActive;
    createdBy;
    createdByName;
}
exports.CreateSalesCommissionRuleRequest = CreateSalesCommissionRuleRequest;
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateSalesCommissionRuleRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateSalesCommissionRuleRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Sales person ID' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateSalesCommissionRuleRequest.prototype, "salesPersonId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Sales person name (denormalized)' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateSalesCommissionRuleRequest.prototype, "salesPersonName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Commission rate percentage (0-100)' }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.Max)(100),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], CreateSalesCommissionRuleRequest.prototype, "commissionRate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Booking type this rule applies to', enum: sales_enum_1.SalesCommissionAppliesTo }),
    (0, class_validator_1.IsEnum)(sales_enum_1.SalesCommissionAppliesTo),
    __metadata("design:type", String)
], CreateSalesCommissionRuleRequest.prototype, "appliesTo", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ default: true }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateSalesCommissionRuleRequest.prototype, "isActive", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateSalesCommissionRuleRequest.prototype, "createdBy", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateSalesCommissionRuleRequest.prototype, "createdByName", void 0);
class UpdateSalesCommissionRuleDto {
    commissionRate;
    appliesTo;
    isActive;
    salesPersonName;
}
exports.UpdateSalesCommissionRuleDto = UpdateSalesCommissionRuleDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.Max)(100),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], UpdateSalesCommissionRuleDto.prototype, "commissionRate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ enum: sales_enum_1.SalesCommissionAppliesTo }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(sales_enum_1.SalesCommissionAppliesTo),
    __metadata("design:type", String)
], UpdateSalesCommissionRuleDto.prototype, "appliesTo", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], UpdateSalesCommissionRuleDto.prototype, "isActive", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateSalesCommissionRuleDto.prototype, "salesPersonName", void 0);
class UpdateSalesCommissionRuleRequest {
    tenantId;
    id;
    dto;
}
exports.UpdateSalesCommissionRuleRequest = UpdateSalesCommissionRuleRequest;
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], UpdateSalesCommissionRuleRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], UpdateSalesCommissionRuleRequest.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: UpdateSalesCommissionRuleDto }),
    __metadata("design:type", UpdateSalesCommissionRuleDto)
], UpdateSalesCommissionRuleRequest.prototype, "dto", void 0);
class FindSalesCommissionRulesRequest {
    tenantId;
    hotelId;
    salesPersonId;
    appliesTo;
    isActive;
    page;
    limit;
}
exports.FindSalesCommissionRulesRequest = FindSalesCommissionRulesRequest;
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], FindSalesCommissionRulesRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], FindSalesCommissionRulesRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], FindSalesCommissionRulesRequest.prototype, "salesPersonId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ enum: sales_enum_1.SalesCommissionAppliesTo }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(sales_enum_1.SalesCommissionAppliesTo),
    __metadata("design:type", String)
], FindSalesCommissionRulesRequest.prototype, "appliesTo", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], FindSalesCommissionRulesRequest.prototype, "isActive", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ default: 1 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], FindSalesCommissionRulesRequest.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ default: 50 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], FindSalesCommissionRulesRequest.prototype, "limit", void 0);
class GetSalesCommissionRuleRequest {
    tenantId;
    id;
}
exports.GetSalesCommissionRuleRequest = GetSalesCommissionRuleRequest;
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], GetSalesCommissionRuleRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], GetSalesCommissionRuleRequest.prototype, "id", void 0);
class DeleteSalesCommissionRuleRequest {
    tenantId;
    id;
}
exports.DeleteSalesCommissionRuleRequest = DeleteSalesCommissionRuleRequest;
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], DeleteSalesCommissionRuleRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], DeleteSalesCommissionRuleRequest.prototype, "id", void 0);
// === Rule Responses ===
class SalesCommissionRuleResponse {
    id;
    tenantId;
    hotelId;
    salesPersonId;
    salesPersonName;
    commissionRate;
    appliesTo;
    isActive;
    createdBy;
    createdByName;
    createdAt;
}
exports.SalesCommissionRuleResponse = SalesCommissionRuleResponse;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], SalesCommissionRuleResponse.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], SalesCommissionRuleResponse.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], SalesCommissionRuleResponse.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], SalesCommissionRuleResponse.prototype, "salesPersonId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], SalesCommissionRuleResponse.prototype, "salesPersonName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], SalesCommissionRuleResponse.prototype, "commissionRate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: sales_enum_1.SalesCommissionAppliesTo }),
    __metadata("design:type", String)
], SalesCommissionRuleResponse.prototype, "appliesTo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], SalesCommissionRuleResponse.prototype, "isActive", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ nullable: true }),
    __metadata("design:type", Object)
], SalesCommissionRuleResponse.prototype, "createdBy", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ nullable: true }),
    __metadata("design:type", Object)
], SalesCommissionRuleResponse.prototype, "createdByName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], SalesCommissionRuleResponse.prototype, "createdAt", void 0);
class SalesCommissionRuleListResponse {
    rules;
    total;
    page;
    limit;
    totalPages;
}
exports.SalesCommissionRuleListResponse = SalesCommissionRuleListResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ type: [SalesCommissionRuleResponse] }),
    __metadata("design:type", Array)
], SalesCommissionRuleListResponse.prototype, "rules", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], SalesCommissionRuleListResponse.prototype, "total", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], SalesCommissionRuleListResponse.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], SalesCommissionRuleListResponse.prototype, "limit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], SalesCommissionRuleListResponse.prototype, "totalPages", void 0);
class DeleteSalesCommissionRuleResponse {
    deleted;
}
exports.DeleteSalesCommissionRuleResponse = DeleteSalesCommissionRuleResponse;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], DeleteSalesCommissionRuleResponse.prototype, "deleted", void 0);
// === Commission Record (read-only, auto-created on checkout) ===
class FindSalesCommissionRecordsRequest {
    tenantId;
    hotelId;
    salesPersonId;
    dateFrom;
    dateTo;
    page;
    limit;
}
exports.FindSalesCommissionRecordsRequest = FindSalesCommissionRecordsRequest;
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], FindSalesCommissionRecordsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], FindSalesCommissionRecordsRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], FindSalesCommissionRecordsRequest.prototype, "salesPersonId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], FindSalesCommissionRecordsRequest.prototype, "dateFrom", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], FindSalesCommissionRecordsRequest.prototype, "dateTo", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ default: 1 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], FindSalesCommissionRecordsRequest.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ default: 50 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], FindSalesCommissionRecordsRequest.prototype, "limit", void 0);
class SalesCommissionRecordResponse {
    id;
    tenantId;
    hotelId;
    salesPersonId;
    salesPersonName;
    bookingId;
    bookingCode;
    commissionableAmount;
    commissionRate;
    commissionAmount;
    createdAt;
}
exports.SalesCommissionRecordResponse = SalesCommissionRecordResponse;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], SalesCommissionRecordResponse.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], SalesCommissionRecordResponse.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], SalesCommissionRecordResponse.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], SalesCommissionRecordResponse.prototype, "salesPersonId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], SalesCommissionRecordResponse.prototype, "salesPersonName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], SalesCommissionRecordResponse.prototype, "bookingId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], SalesCommissionRecordResponse.prototype, "bookingCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], SalesCommissionRecordResponse.prototype, "commissionableAmount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], SalesCommissionRecordResponse.prototype, "commissionRate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], SalesCommissionRecordResponse.prototype, "commissionAmount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], SalesCommissionRecordResponse.prototype, "createdAt", void 0);
class SalesCommissionRecordListResponse {
    records;
    total;
    page;
    limit;
    totalPages;
}
exports.SalesCommissionRecordListResponse = SalesCommissionRecordListResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ type: [SalesCommissionRecordResponse] }),
    __metadata("design:type", Array)
], SalesCommissionRecordListResponse.prototype, "records", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], SalesCommissionRecordListResponse.prototype, "total", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], SalesCommissionRecordListResponse.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], SalesCommissionRecordListResponse.prototype, "limit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], SalesCommissionRecordListResponse.prototype, "totalPages", void 0);
// === Summary ===
class SalesCommissionSummaryRequest {
    tenantId;
    hotelId;
    salesPersonId;
    dateFrom;
    dateTo;
}
exports.SalesCommissionSummaryRequest = SalesCommissionSummaryRequest;
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], SalesCommissionSummaryRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], SalesCommissionSummaryRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], SalesCommissionSummaryRequest.prototype, "salesPersonId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], SalesCommissionSummaryRequest.prototype, "dateFrom", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], SalesCommissionSummaryRequest.prototype, "dateTo", void 0);
class SalesPersonCommissionSummary {
    salesPersonId;
    salesPersonName;
    totalCommission;
    recordCount;
}
exports.SalesPersonCommissionSummary = SalesPersonCommissionSummary;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], SalesPersonCommissionSummary.prototype, "salesPersonId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], SalesPersonCommissionSummary.prototype, "salesPersonName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], SalesPersonCommissionSummary.prototype, "totalCommission", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], SalesPersonCommissionSummary.prototype, "recordCount", void 0);
class SalesCommissionSummaryResponse {
    totalCommission;
    recordCount;
    bySalesPerson;
}
exports.SalesCommissionSummaryResponse = SalesCommissionSummaryResponse;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], SalesCommissionSummaryResponse.prototype, "totalCommission", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], SalesCommissionSummaryResponse.prototype, "recordCount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [SalesPersonCommissionSummary] }),
    __metadata("design:type", Array)
], SalesCommissionSummaryResponse.prototype, "bySalesPerson", void 0);
//# sourceMappingURL=sales-commission.nats.js.map