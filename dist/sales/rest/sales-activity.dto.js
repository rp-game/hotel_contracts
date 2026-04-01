"use strict";
/**
 * Sales Activity REST DTOs
 * Used by api-gateway controllers for request validation
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
exports.FindSalesActivitiesQueryDto = exports.UpdateSalesActivityDto = exports.CreateSalesActivityDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const sales_enum_1 = require("../enums/sales.enum");
class CreateSalesActivityDto {
    hotelId;
    salesPersonId;
    salesPersonName;
    activityType;
    subject;
    description;
    activityDate;
    corporateAccountId;
    travelAgentId;
    leadId;
    contactName;
    outcome;
    followUpDate;
}
exports.CreateSalesActivityDto = CreateSalesActivityDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID', example: 'uuid' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateSalesActivityDto.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Sales person ID' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateSalesActivityDto.prototype, "salesPersonId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Sales person name', example: 'Nguyen Van A' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(200),
    __metadata("design:type", String)
], CreateSalesActivityDto.prototype, "salesPersonName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Activity type', enum: sales_enum_1.SalesActivityType }),
    (0, class_validator_1.IsEnum)(sales_enum_1.SalesActivityType),
    __metadata("design:type", String)
], CreateSalesActivityDto.prototype, "activityType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Subject/title of the activity', example: 'Follow-up call with Vingroup' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(300),
    __metadata("design:type", String)
], CreateSalesActivityDto.prototype, "subject", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Detailed description' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateSalesActivityDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Activity date (YYYY-MM-DD)', example: '2026-03-19' }),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], CreateSalesActivityDto.prototype, "activityDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Corporate account ID' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateSalesActivityDto.prototype, "corporateAccountId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Travel agent ID' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateSalesActivityDto.prototype, "travelAgentId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Sales lead ID' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateSalesActivityDto.prototype, "leadId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Contact person name', example: 'Tran Thi B' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(200),
    __metadata("design:type", String)
], CreateSalesActivityDto.prototype, "contactName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Outcome/result of the activity' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(500),
    __metadata("design:type", String)
], CreateSalesActivityDto.prototype, "outcome", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Follow-up date (YYYY-MM-DD)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], CreateSalesActivityDto.prototype, "followUpDate", void 0);
class UpdateSalesActivityDto {
    activityType;
    subject;
    description;
    activityDate;
    corporateAccountId;
    travelAgentId;
    contactName;
    outcome;
    followUpDate;
}
exports.UpdateSalesActivityDto = UpdateSalesActivityDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Activity type', enum: sales_enum_1.SalesActivityType }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(sales_enum_1.SalesActivityType),
    __metadata("design:type", String)
], UpdateSalesActivityDto.prototype, "activityType", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Subject/title' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(300),
    __metadata("design:type", String)
], UpdateSalesActivityDto.prototype, "subject", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Detailed description' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateSalesActivityDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Activity date (YYYY-MM-DD)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], UpdateSalesActivityDto.prototype, "activityDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Corporate account ID' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], UpdateSalesActivityDto.prototype, "corporateAccountId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Travel agent ID' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], UpdateSalesActivityDto.prototype, "travelAgentId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Contact person name' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(200),
    __metadata("design:type", String)
], UpdateSalesActivityDto.prototype, "contactName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Outcome/result' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(500),
    __metadata("design:type", String)
], UpdateSalesActivityDto.prototype, "outcome", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Follow-up date (YYYY-MM-DD)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], UpdateSalesActivityDto.prototype, "followUpDate", void 0);
class FindSalesActivitiesQueryDto {
    hotelId;
    salesPersonId;
    activityType;
    corporateAccountId;
    travelAgentId;
    leadId;
    dateFrom;
    dateTo;
    search;
    page;
    limit;
}
exports.FindSalesActivitiesQueryDto = FindSalesActivitiesQueryDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter by hotel ID' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], FindSalesActivitiesQueryDto.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter by sales person ID' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], FindSalesActivitiesQueryDto.prototype, "salesPersonId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter by activity type', enum: sales_enum_1.SalesActivityType }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(sales_enum_1.SalesActivityType),
    __metadata("design:type", String)
], FindSalesActivitiesQueryDto.prototype, "activityType", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter by corporate account ID' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], FindSalesActivitiesQueryDto.prototype, "corporateAccountId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter by travel agent ID' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], FindSalesActivitiesQueryDto.prototype, "travelAgentId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter by sales lead ID' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], FindSalesActivitiesQueryDto.prototype, "leadId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Date from (YYYY-MM-DD)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], FindSalesActivitiesQueryDto.prototype, "dateFrom", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Date to (YYYY-MM-DD)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], FindSalesActivitiesQueryDto.prototype, "dateTo", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Search by subject or contact name' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FindSalesActivitiesQueryDto.prototype, "search", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Page number (1-indexed)', default: 1 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], FindSalesActivitiesQueryDto.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Items per page', default: 20 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.Max)(100),
    __metadata("design:type", Number)
], FindSalesActivitiesQueryDto.prototype, "limit", void 0);
//# sourceMappingURL=sales-activity.dto.js.map