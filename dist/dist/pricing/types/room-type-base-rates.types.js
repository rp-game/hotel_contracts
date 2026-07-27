"use strict";
/**
 * Room Type Base Rates Types
 *
 * Shared types for room type base rate patterns.
 * Foundation layer - simple base pricing per room type.
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
exports.BulkUpsertRoomTypeBaseRatesRequestDto = exports.RoomTypeBaseRateItemDto = exports.UpsertRoomTypeBaseRateRequestDto = exports.BulkUpsertRoomTypeBaseRatesResponseDto = exports.UpsertRoomTypeBaseRateResponseDto = exports.GetRoomTypeBaseRatesResponseDto = exports.RoomTypeBaseRate = void 0;
const swagger_1 = require("@nestjs/swagger");
/**
 * Room type base rate entity
 */
class RoomTypeBaseRate {
    id;
    tenantId;
    hotelId;
    roomTypeId;
    baseRate;
    weekdayRate;
    weekendRate;
    hourlyRate;
    useWeekdayWeekend;
    currency;
    isActive;
    createdAt;
    updatedAt;
}
exports.RoomTypeBaseRate = RoomTypeBaseRate;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Base rate ID' }),
    __metadata("design:type", String)
], RoomTypeBaseRate.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], RoomTypeBaseRate.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    __metadata("design:type", String)
], RoomTypeBaseRate.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room type ID' }),
    __metadata("design:type", String)
], RoomTypeBaseRate.prototype, "roomTypeId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Base rate amount' }),
    __metadata("design:type", Number)
], RoomTypeBaseRate.prototype, "baseRate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Weekday rate' }),
    __metadata("design:type", Number)
], RoomTypeBaseRate.prototype, "weekdayRate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Weekend rate' }),
    __metadata("design:type", Number)
], RoomTypeBaseRate.prototype, "weekendRate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Hourly rate' }),
    __metadata("design:type", Number)
], RoomTypeBaseRate.prototype, "hourlyRate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Whether to use weekday/weekend pricing' }),
    __metadata("design:type", Boolean)
], RoomTypeBaseRate.prototype, "useWeekdayWeekend", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Currency code' }),
    __metadata("design:type", String)
], RoomTypeBaseRate.prototype, "currency", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Whether the rate is active' }),
    __metadata("design:type", Boolean)
], RoomTypeBaseRate.prototype, "isActive", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Creation timestamp' }),
    __metadata("design:type", String)
], RoomTypeBaseRate.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Last update timestamp' }),
    __metadata("design:type", String)
], RoomTypeBaseRate.prototype, "updatedAt", void 0);
// ============================================================================
// Response Wrapper DTOs
// ============================================================================
/**
 * Get room type base rates response
 */
class GetRoomTypeBaseRatesResponseDto {
    data;
}
exports.GetRoomTypeBaseRatesResponseDto = GetRoomTypeBaseRatesResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ type: [RoomTypeBaseRate], description: 'List of room type base rates' }),
    __metadata("design:type", Array)
], GetRoomTypeBaseRatesResponseDto.prototype, "data", void 0);
/**
 * Upsert room type base rate response
 */
class UpsertRoomTypeBaseRateResponseDto {
    data;
}
exports.UpsertRoomTypeBaseRateResponseDto = UpsertRoomTypeBaseRateResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ type: RoomTypeBaseRate, description: 'Upserted room type base rate' }),
    __metadata("design:type", RoomTypeBaseRate)
], UpsertRoomTypeBaseRateResponseDto.prototype, "data", void 0);
/**
 * Bulk upsert room type base rates response
 */
class BulkUpsertRoomTypeBaseRatesResponseDto {
    data;
}
exports.BulkUpsertRoomTypeBaseRatesResponseDto = BulkUpsertRoomTypeBaseRatesResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ type: [RoomTypeBaseRate], description: 'Upserted room type base rates' }),
    __metadata("design:type", Array)
], BulkUpsertRoomTypeBaseRatesResponseDto.prototype, "data", void 0);
// ============================================================================
// Request DTOs
// ============================================================================
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
/**
 * Upsert room type base rate request
 */
class UpsertRoomTypeBaseRateRequestDto {
    baseRate;
    weekdayRate;
    weekendRate;
    useWeekdayWeekend;
    hourlyRate;
    currency;
    isActive;
}
exports.UpsertRoomTypeBaseRateRequestDto = UpsertRoomTypeBaseRateRequestDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Base rate price', minimum: 0 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], UpsertRoomTypeBaseRateRequestDto.prototype, "baseRate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Weekday rate (Mon-Thu)', minimum: 0 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], UpsertRoomTypeBaseRateRequestDto.prototype, "weekdayRate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Weekend rate (Fri-Sun)', minimum: 0 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], UpsertRoomTypeBaseRateRequestDto.prototype, "weekendRate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Enable weekday/weekend pricing', default: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], UpsertRoomTypeBaseRateRequestDto.prototype, "useWeekdayWeekend", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Hourly rate for hourly bookings', minimum: 0 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], UpsertRoomTypeBaseRateRequestDto.prototype, "hourlyRate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Currency code', default: 'VND' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpsertRoomTypeBaseRateRequestDto.prototype, "currency", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Whether this rate is active', default: true }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], UpsertRoomTypeBaseRateRequestDto.prototype, "isActive", void 0);
/**
 * Room type base rate item for bulk operations
 */
class RoomTypeBaseRateItemDto {
    roomTypeId;
    baseRate;
    currency;
}
exports.RoomTypeBaseRateItemDto = RoomTypeBaseRateItemDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room type ID' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], RoomTypeBaseRateItemDto.prototype, "roomTypeId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Base rate price', minimum: 0 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], RoomTypeBaseRateItemDto.prototype, "baseRate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Currency code' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RoomTypeBaseRateItemDto.prototype, "currency", void 0);
/**
 * Bulk upsert room type base rates request
 */
class BulkUpsertRoomTypeBaseRatesRequestDto {
    rates;
}
exports.BulkUpsertRoomTypeBaseRatesRequestDto = BulkUpsertRoomTypeBaseRatesRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({ type: [RoomTypeBaseRateItemDto], description: 'Array of room type base rates to upsert' }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => RoomTypeBaseRateItemDto),
    __metadata("design:type", Array)
], BulkUpsertRoomTypeBaseRatesRequestDto.prototype, "rates", void 0);
//# sourceMappingURL=room-type-base-rates.types.js.map