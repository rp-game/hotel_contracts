"use strict";
/**
 * Sales Dashboard REST DTOs
 * Used by api-gateway controllers for request validation and Swagger docs
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
exports.SalesDashboardResponseDto = exports.TopAccountDto = exports.TopPerformerDto = exports.ChannelBreakdownDto = exports.GetSalesDashboardQueryDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
class GetSalesDashboardQueryDto {
    hotelId;
    year;
    month;
}
exports.GetSalesDashboardQueryDto = GetSalesDashboardQueryDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Hotel ID (or "null" for chain-level)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetSalesDashboardQueryDto.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Year', example: 2026 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.Min)(2020),
    (0, class_validator_1.Max)(2100),
    __metadata("design:type", Number)
], GetSalesDashboardQueryDto.prototype, "year", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Month (1-12)', example: 3 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.Max)(12),
    __metadata("design:type", Number)
], GetSalesDashboardQueryDto.prototype, "month", void 0);
class ChannelBreakdownDto {
    source;
    revenue;
    roomNights;
    bookingCount;
    percentage;
}
exports.ChannelBreakdownDto = ChannelBreakdownDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ChannelBreakdownDto.prototype, "source", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], ChannelBreakdownDto.prototype, "revenue", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], ChannelBreakdownDto.prototype, "roomNights", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], ChannelBreakdownDto.prototype, "bookingCount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], ChannelBreakdownDto.prototype, "percentage", void 0);
class TopPerformerDto {
    salesPersonId;
    salesPersonName;
    revenue;
    roomNights;
    accountCount;
    achievementRate;
}
exports.TopPerformerDto = TopPerformerDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], TopPerformerDto.prototype, "salesPersonId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], TopPerformerDto.prototype, "salesPersonName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], TopPerformerDto.prototype, "revenue", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], TopPerformerDto.prototype, "roomNights", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], TopPerformerDto.prototype, "accountCount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], TopPerformerDto.prototype, "achievementRate", void 0);
class TopAccountDto {
    accountId;
    accountName;
    accountType;
    revenue;
    roomNights;
    bookingCount;
}
exports.TopAccountDto = TopAccountDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], TopAccountDto.prototype, "accountId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], TopAccountDto.prototype, "accountName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: ['CORPORATE', 'TRAVEL_AGENT'] }),
    __metadata("design:type", String)
], TopAccountDto.prototype, "accountType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], TopAccountDto.prototype, "revenue", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], TopAccountDto.prototype, "roomNights", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], TopAccountDto.prototype, "bookingCount", void 0);
class SalesDashboardResponseDto {
    hotelRevenue;
    salesAttributedRevenue;
    totalRoomNights;
    totalActiveAccounts;
    totalActivities;
    channelBreakdown;
    topPerformers;
    topAccounts;
}
exports.SalesDashboardResponseDto = SalesDashboardResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], SalesDashboardResponseDto.prototype, "hotelRevenue", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], SalesDashboardResponseDto.prototype, "salesAttributedRevenue", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], SalesDashboardResponseDto.prototype, "totalRoomNights", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], SalesDashboardResponseDto.prototype, "totalActiveAccounts", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], SalesDashboardResponseDto.prototype, "totalActivities", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [ChannelBreakdownDto] }),
    __metadata("design:type", Array)
], SalesDashboardResponseDto.prototype, "channelBreakdown", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [TopPerformerDto] }),
    __metadata("design:type", Array)
], SalesDashboardResponseDto.prototype, "topPerformers", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [TopAccountDto] }),
    __metadata("design:type", Array)
], SalesDashboardResponseDto.prototype, "topAccounts", void 0);
//# sourceMappingURL=sales-dashboard.dto.js.map