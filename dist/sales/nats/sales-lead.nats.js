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
exports.PipelineSummaryResponse = exports.StageSummary = exports.PipelineSummaryRequest = exports.ConvertSalesLeadRequest = exports.SalesLeadListResponse = exports.SalesLeadResponse = exports.DeleteSalesLeadRequest = exports.GetSalesLeadRequest = exports.FindSalesLeadsRequest = exports.UpdateSalesLeadRequest = exports.UpdateSalesLeadDto = exports.CreateSalesLeadRequest = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
// --- Create ---
class CreateSalesLeadRequest {
    tenantId;
    hotelId;
    companyName;
    contactPerson;
    contactEmail;
    contactPhone;
    source;
    stage;
    estimatedRevenue;
    estimatedRoomNights;
    salesPersonId;
    salesPersonName;
    expectedCloseDate;
    notes;
    createdBy;
    createdByName;
}
exports.CreateSalesLeadRequest = CreateSalesLeadRequest;
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateSalesLeadRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateSalesLeadRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Prospect company name' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(200),
    __metadata("design:type", String)
], CreateSalesLeadRequest.prototype, "companyName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Primary contact person' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(200),
    __metadata("design:type", String)
], CreateSalesLeadRequest.prototype, "contactPerson", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateSalesLeadRequest.prototype, "contactEmail", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateSalesLeadRequest.prototype, "contactPhone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Lead source',
        enum: ['REFERRAL', 'COLD_CALL', 'WEBSITE', 'EVENT', 'OTHER'],
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateSalesLeadRequest.prototype, "source", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Pipeline stage',
        enum: ['INQUIRY', 'PROPOSAL', 'NEGOTIATION', 'WON', 'LOST'],
        default: 'INQUIRY',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateSalesLeadRequest.prototype, "stage", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], CreateSalesLeadRequest.prototype, "estimatedRevenue", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], CreateSalesLeadRequest.prototype, "estimatedRoomNights", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Assigned sales person ID' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateSalesLeadRequest.prototype, "salesPersonId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Sales person name (denormalized)' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateSalesLeadRequest.prototype, "salesPersonName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], CreateSalesLeadRequest.prototype, "expectedCloseDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateSalesLeadRequest.prototype, "notes", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateSalesLeadRequest.prototype, "createdBy", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateSalesLeadRequest.prototype, "createdByName", void 0);
// --- Update ---
class UpdateSalesLeadDto {
    companyName;
    contactPerson;
    contactEmail;
    contactPhone;
    source;
    stage;
    estimatedRevenue;
    estimatedRoomNights;
    salesPersonId;
    salesPersonName;
    expectedCloseDate;
    lostReason;
    notes;
}
exports.UpdateSalesLeadDto = UpdateSalesLeadDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(200),
    __metadata("design:type", String)
], UpdateSalesLeadDto.prototype, "companyName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(200),
    __metadata("design:type", String)
], UpdateSalesLeadDto.prototype, "contactPerson", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateSalesLeadDto.prototype, "contactEmail", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateSalesLeadDto.prototype, "contactPhone", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateSalesLeadDto.prototype, "source", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateSalesLeadDto.prototype, "stage", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], UpdateSalesLeadDto.prototype, "estimatedRevenue", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], UpdateSalesLeadDto.prototype, "estimatedRoomNights", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], UpdateSalesLeadDto.prototype, "salesPersonId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateSalesLeadDto.prototype, "salesPersonName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], UpdateSalesLeadDto.prototype, "expectedCloseDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateSalesLeadDto.prototype, "lostReason", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateSalesLeadDto.prototype, "notes", void 0);
class UpdateSalesLeadRequest {
    tenantId;
    id;
    dto;
}
exports.UpdateSalesLeadRequest = UpdateSalesLeadRequest;
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], UpdateSalesLeadRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], UpdateSalesLeadRequest.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: UpdateSalesLeadDto }),
    __metadata("design:type", UpdateSalesLeadDto)
], UpdateSalesLeadRequest.prototype, "dto", void 0);
// --- Find ---
class FindSalesLeadsRequest {
    tenantId;
    hotelId;
    stage;
    source;
    salesPersonId;
    search;
    page;
    limit;
    sortBy;
    sortOrder;
}
exports.FindSalesLeadsRequest = FindSalesLeadsRequest;
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], FindSalesLeadsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], FindSalesLeadsRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FindSalesLeadsRequest.prototype, "stage", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FindSalesLeadsRequest.prototype, "source", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], FindSalesLeadsRequest.prototype, "salesPersonId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FindSalesLeadsRequest.prototype, "search", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ default: 1 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], FindSalesLeadsRequest.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ default: 50 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], FindSalesLeadsRequest.prototype, "limit", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FindSalesLeadsRequest.prototype, "sortBy", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FindSalesLeadsRequest.prototype, "sortOrder", void 0);
// --- Get / Delete ---
class GetSalesLeadRequest {
    tenantId;
    id;
}
exports.GetSalesLeadRequest = GetSalesLeadRequest;
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], GetSalesLeadRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], GetSalesLeadRequest.prototype, "id", void 0);
class DeleteSalesLeadRequest {
    tenantId;
    id;
}
exports.DeleteSalesLeadRequest = DeleteSalesLeadRequest;
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], DeleteSalesLeadRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], DeleteSalesLeadRequest.prototype, "id", void 0);
// --- Response ---
class SalesLeadResponse {
    id;
    tenantId;
    hotelId;
    companyName;
    contactPerson;
    contactEmail;
    contactPhone;
    source;
    stage;
    estimatedRevenue;
    estimatedRoomNights;
    salesPersonId;
    salesPersonName;
    expectedCloseDate;
    lostReason;
    convertedAccountId;
    notes;
    createdBy;
    createdByName;
    createdAt;
    updatedAt;
}
exports.SalesLeadResponse = SalesLeadResponse;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], SalesLeadResponse.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], SalesLeadResponse.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], SalesLeadResponse.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], SalesLeadResponse.prototype, "companyName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], SalesLeadResponse.prototype, "contactPerson", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], SalesLeadResponse.prototype, "contactEmail", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], SalesLeadResponse.prototype, "contactPhone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], SalesLeadResponse.prototype, "source", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], SalesLeadResponse.prototype, "stage", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", Number)
], SalesLeadResponse.prototype, "estimatedRevenue", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", Number)
], SalesLeadResponse.prototype, "estimatedRoomNights", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], SalesLeadResponse.prototype, "salesPersonId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], SalesLeadResponse.prototype, "salesPersonName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], SalesLeadResponse.prototype, "expectedCloseDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], SalesLeadResponse.prototype, "lostReason", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], SalesLeadResponse.prototype, "convertedAccountId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], SalesLeadResponse.prototype, "notes", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], SalesLeadResponse.prototype, "createdBy", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], SalesLeadResponse.prototype, "createdByName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], SalesLeadResponse.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], SalesLeadResponse.prototype, "updatedAt", void 0);
class SalesLeadListResponse {
    leads;
    total;
    page;
    limit;
    totalPages;
}
exports.SalesLeadListResponse = SalesLeadListResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ type: [SalesLeadResponse] }),
    __metadata("design:type", Array)
], SalesLeadListResponse.prototype, "leads", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], SalesLeadListResponse.prototype, "total", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], SalesLeadListResponse.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], SalesLeadListResponse.prototype, "limit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], SalesLeadListResponse.prototype, "totalPages", void 0);
// --- Convert ---
class ConvertSalesLeadRequest {
    tenantId;
    leadId;
    convertedBy;
    convertedByName;
}
exports.ConvertSalesLeadRequest = ConvertSalesLeadRequest;
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ConvertSalesLeadRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ConvertSalesLeadRequest.prototype, "leadId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ConvertSalesLeadRequest.prototype, "convertedBy", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ConvertSalesLeadRequest.prototype, "convertedByName", void 0);
// --- Pipeline Summary ---
class PipelineSummaryRequest {
    tenantId;
    hotelId;
}
exports.PipelineSummaryRequest = PipelineSummaryRequest;
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], PipelineSummaryRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], PipelineSummaryRequest.prototype, "hotelId", void 0);
class StageSummary {
    stage;
    count;
    estimatedRevenue;
}
exports.StageSummary = StageSummary;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], StageSummary.prototype, "stage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], StageSummary.prototype, "count", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], StageSummary.prototype, "estimatedRevenue", void 0);
class PipelineSummaryResponse {
    stages;
    totalLeads;
    totalEstimatedRevenue;
    conversionRate;
}
exports.PipelineSummaryResponse = PipelineSummaryResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ type: [StageSummary] }),
    __metadata("design:type", Array)
], PipelineSummaryResponse.prototype, "stages", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], PipelineSummaryResponse.prototype, "totalLeads", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], PipelineSummaryResponse.prototype, "totalEstimatedRevenue", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], PipelineSummaryResponse.prototype, "conversionRate", void 0);
//# sourceMappingURL=sales-lead.nats.js.map