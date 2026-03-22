"use strict";
/**
 * Sales Target REST DTOs
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
exports.RecalculateSalesTargetsDto = exports.FindSalesTargetsQueryDto = exports.UpdateSalesTargetDto = exports.CreateSalesTargetDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
class CreateSalesTargetDto {
    hotelId;
    salesPersonId;
    salesPersonName;
    year;
    month;
    targetRevenue;
    targetRoomNights;
    targetNewAccounts;
    notes;
}
exports.CreateSalesTargetDto = CreateSalesTargetDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Hotel ID (null = chain-level target)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateSalesTargetDto.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Sales person ID' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateSalesTargetDto.prototype, "salesPersonId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Sales person name', example: 'Nguyen Van A' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(200),
    __metadata("design:type", String)
], CreateSalesTargetDto.prototype, "salesPersonName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Target year', example: 2026 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.Min)(2020),
    (0, class_validator_1.Max)(2100),
    __metadata("design:type", Number)
], CreateSalesTargetDto.prototype, "year", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Target month (1-12)', example: 3 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.Max)(12),
    __metadata("design:type", Number)
], CreateSalesTargetDto.prototype, "month", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Target revenue', example: 100000000 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], CreateSalesTargetDto.prototype, "targetRevenue", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Target room nights', example: 50 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], CreateSalesTargetDto.prototype, "targetRoomNights", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Target new accounts', example: 5 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], CreateSalesTargetDto.prototype, "targetNewAccounts", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Notes' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateSalesTargetDto.prototype, "notes", void 0);
class UpdateSalesTargetDto {
    targetRevenue;
    targetRoomNights;
    targetNewAccounts;
    notes;
}
exports.UpdateSalesTargetDto = UpdateSalesTargetDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Target revenue' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], UpdateSalesTargetDto.prototype, "targetRevenue", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Target room nights' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], UpdateSalesTargetDto.prototype, "targetRoomNights", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Target new accounts' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], UpdateSalesTargetDto.prototype, "targetNewAccounts", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Notes' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateSalesTargetDto.prototype, "notes", void 0);
class FindSalesTargetsQueryDto {
    hotelId;
    salesPersonId;
    year;
    month;
}
exports.FindSalesTargetsQueryDto = FindSalesTargetsQueryDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter by hotel ID' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], FindSalesTargetsQueryDto.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter by sales person ID' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], FindSalesTargetsQueryDto.prototype, "salesPersonId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter by year' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], FindSalesTargetsQueryDto.prototype, "year", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter by month (1-12)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.Max)(12),
    __metadata("design:type", Number)
], FindSalesTargetsQueryDto.prototype, "month", void 0);
class RecalculateSalesTargetsDto {
    hotelId;
    salesPersonId;
    year;
    month;
}
exports.RecalculateSalesTargetsDto = RecalculateSalesTargetsDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Hotel ID (null = recalculate chain-level targets)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], RecalculateSalesTargetsDto.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Sales person ID (recalculate for specific person)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], RecalculateSalesTargetsDto.prototype, "salesPersonId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Year (defaults to current year)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], RecalculateSalesTargetsDto.prototype, "year", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Month (defaults to current month)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.Max)(12),
    __metadata("design:type", Number)
], RecalculateSalesTargetsDto.prototype, "month", void 0);
//# sourceMappingURL=sales-target.dto.js.map