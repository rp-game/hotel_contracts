"use strict";
/**
 * Hotel Chain NATS Contracts
 *
 * Patterns:
 * - hotel-chains.findAll, findOne, create, update, remove
 * - hotel-chains.getHotels, addHotel, removeHotel
 * - hotel-chains.getAnalytics, getPerformance
 * - hotel-chains.setBrandStandards, getBrandStandards
 * - hotel-chains.syncLoyaltyPrograms
 *
 * Handler: user-service (HotelChainsNatsController)
 * Called by: api-gateway (HotelChainsService)
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
exports.HotelChainAnalyticsDto = exports.TopPerformingHotelDto = exports.QueryHotelChainDto = exports.SyncLoyaltyProgramsPayload = exports.GetBrandStandardsPayload = exports.SetBrandStandardsPayload = exports.GetChainPerformancePayload = exports.GetChainAnalyticsPayload = exports.RemoveHotelFromChainPayload = exports.AddHotelToChainPayload = exports.GetChainHotelsPayload = exports.RemoveHotelChainPayload = exports.FindHotelChainByIdPayload = exports.UpdateHotelChainNatsRequest = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const tenants_1 = require("../../tenants");
// ============= Existing Types (interface→class) =============
/**
 * Update Hotel Chain Request
 * Pattern: hotel-chains.update
 */
class UpdateHotelChainNatsRequest {
    id;
    updateDto;
}
exports.UpdateHotelChainNatsRequest = UpdateHotelChainNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel chain ID' }),
    __metadata("design:type", String)
], UpdateHotelChainNatsRequest.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Update data' }),
    __metadata("design:type", Function)
], UpdateHotelChainNatsRequest.prototype, "updateDto", void 0);
// ============= NATS Payload Classes =============
class FindHotelChainByIdPayload {
    id;
}
exports.FindHotelChainByIdPayload = FindHotelChainByIdPayload;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel chain ID' }),
    __metadata("design:type", String)
], FindHotelChainByIdPayload.prototype, "id", void 0);
class RemoveHotelChainPayload {
    id;
}
exports.RemoveHotelChainPayload = RemoveHotelChainPayload;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel chain ID' }),
    __metadata("design:type", String)
], RemoveHotelChainPayload.prototype, "id", void 0);
class GetChainHotelsPayload {
    chainId;
}
exports.GetChainHotelsPayload = GetChainHotelsPayload;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Chain ID' }),
    __metadata("design:type", String)
], GetChainHotelsPayload.prototype, "chainId", void 0);
class AddHotelToChainPayload {
    chainId;
    hotelId;
}
exports.AddHotelToChainPayload = AddHotelToChainPayload;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Chain ID' }),
    __metadata("design:type", String)
], AddHotelToChainPayload.prototype, "chainId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID to add' }),
    __metadata("design:type", String)
], AddHotelToChainPayload.prototype, "hotelId", void 0);
class RemoveHotelFromChainPayload {
    chainId;
    hotelId;
}
exports.RemoveHotelFromChainPayload = RemoveHotelFromChainPayload;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Chain ID' }),
    __metadata("design:type", String)
], RemoveHotelFromChainPayload.prototype, "chainId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID to remove' }),
    __metadata("design:type", String)
], RemoveHotelFromChainPayload.prototype, "hotelId", void 0);
class GetChainAnalyticsPayload {
    chainId;
}
exports.GetChainAnalyticsPayload = GetChainAnalyticsPayload;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Chain ID' }),
    __metadata("design:type", String)
], GetChainAnalyticsPayload.prototype, "chainId", void 0);
class GetChainPerformancePayload {
    chainId;
    startDate;
    endDate;
}
exports.GetChainPerformancePayload = GetChainPerformancePayload;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Chain ID' }),
    __metadata("design:type", String)
], GetChainPerformancePayload.prototype, "chainId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Start date' }),
    __metadata("design:type", String)
], GetChainPerformancePayload.prototype, "startDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'End date' }),
    __metadata("design:type", String)
], GetChainPerformancePayload.prototype, "endDate", void 0);
class SetBrandStandardsPayload {
    chainId;
    standards;
}
exports.SetBrandStandardsPayload = SetBrandStandardsPayload;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Chain ID' }),
    __metadata("design:type", String)
], SetBrandStandardsPayload.prototype, "chainId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Brand standards data' }),
    __metadata("design:type", tenants_1.BrandStandardsDto)
], SetBrandStandardsPayload.prototype, "standards", void 0);
class GetBrandStandardsPayload {
    chainId;
}
exports.GetBrandStandardsPayload = GetBrandStandardsPayload;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Chain ID' }),
    __metadata("design:type", String)
], GetBrandStandardsPayload.prototype, "chainId", void 0);
class SyncLoyaltyProgramsPayload {
    chainId;
}
exports.SyncLoyaltyProgramsPayload = SyncLoyaltyProgramsPayload;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Chain ID' }),
    __metadata("design:type", String)
], SyncLoyaltyProgramsPayload.prototype, "chainId", void 0);
// ============= DTOs =============
class QueryHotelChainDto {
    tenantId;
    status;
    region;
    marketSegment;
    page;
    limit;
}
exports.QueryHotelChainDto = QueryHotelChainDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter by tenant ID' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], QueryHotelChainDto.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter by status' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], QueryHotelChainDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter by region' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], QueryHotelChainDto.prototype, "region", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter by market segment' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], QueryHotelChainDto.prototype, "marketSegment", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Page number' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], QueryHotelChainDto.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Items per page' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], QueryHotelChainDto.prototype, "limit", void 0);
class TopPerformingHotelDto {
    hotelId;
    hotelName;
    revenue;
    occupancyRate;
}
exports.TopPerformingHotelDto = TopPerformingHotelDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    __metadata("design:type", String)
], TopPerformingHotelDto.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel name' }),
    __metadata("design:type", String)
], TopPerformingHotelDto.prototype, "hotelName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Revenue' }),
    __metadata("design:type", Number)
], TopPerformingHotelDto.prototype, "revenue", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Occupancy rate' }),
    __metadata("design:type", Number)
], TopPerformingHotelDto.prototype, "occupancyRate", void 0);
class HotelChainAnalyticsDto {
    totalRevenue;
    totalBookings;
    averageOccupancyRate;
    topPerformingHotels;
}
exports.HotelChainAnalyticsDto = HotelChainAnalyticsDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total revenue' }),
    __metadata("design:type", Number)
], HotelChainAnalyticsDto.prototype, "totalRevenue", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total bookings' }),
    __metadata("design:type", Number)
], HotelChainAnalyticsDto.prototype, "totalBookings", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Average occupancy rate' }),
    __metadata("design:type", Number)
], HotelChainAnalyticsDto.prototype, "averageOccupancyRate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Top performing hotels', type: [TopPerformingHotelDto] }),
    __metadata("design:type", Array)
], HotelChainAnalyticsDto.prototype, "topPerformingHotels", void 0);
//# sourceMappingURL=hotel-chain.nats.js.map