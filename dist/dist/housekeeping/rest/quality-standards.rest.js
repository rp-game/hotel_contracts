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
exports.GetQualityStandardsStatisticsQueryDto = exports.UpdateQualityStandardDto = exports.CreateQualityStandardDto = exports.GetAllQualityStandardsQueryDto = void 0;
/**
 * Quality Standards REST DTOs
 * Single source of truth for API Gateway request/query params
 */
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const quality_standards_nats_1 = require("../nats/quality-standards.nats");
class GetAllQualityStandardsQueryDto {
    tenantId;
    hotelId;
    roomTypeId;
    isActive;
    page;
    limit;
}
exports.GetAllQualityStandardsQueryDto = GetAllQualityStandardsQueryDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Tenant ID (defaults to user context)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], GetAllQualityStandardsQueryDto.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Hotel ID (defaults to user context)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], GetAllQualityStandardsQueryDto.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter by room type ID (UUID from inventory service)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], GetAllQualityStandardsQueryDto.prototype, "roomTypeId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter by active status' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], GetAllQualityStandardsQueryDto.prototype, "isActive", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Page number for pagination', minimum: 1, default: 1 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], GetAllQualityStandardsQueryDto.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Items per page', minimum: 1, maximum: 100, default: 10 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.Max)(100),
    __metadata("design:type", Number)
], GetAllQualityStandardsQueryDto.prototype, "limit", void 0);
class CreateQualityStandardDto {
    name;
    description;
    roomTypeId;
    items;
    passingScore;
    configuration;
    effectiveDate;
    expiryDate;
    isActive;
    createdBy;
}
exports.CreateQualityStandardDto = CreateQualityStandardDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Quality standard name' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateQualityStandardDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Description of the standard' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateQualityStandardDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room type ID from inventory service' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateQualityStandardDto.prototype, "roomTypeId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Quality standard items', type: [quality_standards_nats_1.QualityStandardItem] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => quality_standards_nats_1.QualityStandardItem),
    __metadata("design:type", Array)
], CreateQualityStandardDto.prototype, "items", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Minimum passing score (0-100)' }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.Max)(100),
    __metadata("design:type", Number)
], CreateQualityStandardDto.prototype, "passingScore", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Additional configuration' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", Object)
], CreateQualityStandardDto.prototype, "configuration", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Effective date (ISO string)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], CreateQualityStandardDto.prototype, "effectiveDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Expiry date (ISO string)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], CreateQualityStandardDto.prototype, "expiryDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Whether this standard is active', default: true }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateQualityStandardDto.prototype, "isActive", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'ID of user creating this standard' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateQualityStandardDto.prototype, "createdBy", void 0);
class UpdateQualityStandardDto {
    name;
    description;
    roomTypeId;
    items;
    passingScore;
    configuration;
    effectiveDate;
    expiryDate;
    updatedBy;
}
exports.UpdateQualityStandardDto = UpdateQualityStandardDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Quality standard name' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateQualityStandardDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Description of the standard' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateQualityStandardDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Room type ID from inventory service' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], UpdateQualityStandardDto.prototype, "roomTypeId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Quality standard items', type: [quality_standards_nats_1.QualityStandardItem] }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => quality_standards_nats_1.QualityStandardItem),
    __metadata("design:type", Array)
], UpdateQualityStandardDto.prototype, "items", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Minimum passing score (0-100)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.Max)(100),
    __metadata("design:type", Number)
], UpdateQualityStandardDto.prototype, "passingScore", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Additional configuration' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", Object)
], UpdateQualityStandardDto.prototype, "configuration", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Effective date (ISO string)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], UpdateQualityStandardDto.prototype, "effectiveDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Expiry date (ISO string)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], UpdateQualityStandardDto.prototype, "expiryDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'ID of user updating this standard' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateQualityStandardDto.prototype, "updatedBy", void 0);
class GetQualityStandardsStatisticsQueryDto {
    tenantId;
    hotelId;
    startDate;
    endDate;
    roomTypeId;
}
exports.GetQualityStandardsStatisticsQueryDto = GetQualityStandardsStatisticsQueryDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Tenant ID (defaults to user context)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], GetQualityStandardsStatisticsQueryDto.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Hotel ID (defaults to user context)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], GetQualityStandardsStatisticsQueryDto.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Start date for statistics period' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], GetQualityStandardsStatisticsQueryDto.prototype, "startDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'End date for statistics period' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], GetQualityStandardsStatisticsQueryDto.prototype, "endDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter by room type ID (UUID from inventory service)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], GetQualityStandardsStatisticsQueryDto.prototype, "roomTypeId", void 0);
//# sourceMappingURL=quality-standards.rest.js.map