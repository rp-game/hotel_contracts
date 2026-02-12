"use strict";
/**
 * Room Type Base Rates NATS Contracts (5 patterns)
 *
 * @updated 2026-02-12 - Converted to classes with @ApiProperty for dual use (NATS + REST)
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
exports.BulkUpsertRoomTypeBaseRatesResponse = exports.BulkUpsertRoomTypeBaseRatesRequest = exports.BulkRateItem = exports.RemoveRoomTypeBaseRateResponse = exports.RemoveRoomTypeBaseRateRequest = exports.UpsertRoomTypeBaseRateResponse = exports.UpsertRoomTypeBaseRateRequest = exports.FindOneRoomTypeBaseRateResponse = exports.FindOneRoomTypeBaseRateRequest = exports.FindAllRoomTypeBaseRatesResponse = exports.FindAllRoomTypeBaseRatesRequest = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const types_1 = require("../types");
// ============================================================================
// Find All Room Type Base Rates
// ============================================================================
class FindAllRoomTypeBaseRatesRequest {
    tenantId;
    hotelId;
}
exports.FindAllRoomTypeBaseRatesRequest = FindAllRoomTypeBaseRatesRequest;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Tenant ID',
        example: '123e4567-e89b-12d3-a456-426614174000',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FindAllRoomTypeBaseRatesRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Hotel ID',
        example: '123e4567-e89b-12d3-a456-426614174001',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FindAllRoomTypeBaseRatesRequest.prototype, "hotelId", void 0);
class FindAllRoomTypeBaseRatesResponse {
    data;
}
exports.FindAllRoomTypeBaseRatesResponse = FindAllRoomTypeBaseRatesResponse;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'List of room type base rates',
        type: types_1.RoomTypeBaseRate,
        isArray: true,
    }),
    __metadata("design:type", Array)
], FindAllRoomTypeBaseRatesResponse.prototype, "data", void 0);
// ============================================================================
// Find One Room Type Base Rate
// ============================================================================
class FindOneRoomTypeBaseRateRequest {
    tenantId;
    hotelId;
    roomTypeId;
}
exports.FindOneRoomTypeBaseRateRequest = FindOneRoomTypeBaseRateRequest;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Tenant ID',
        example: '123e4567-e89b-12d3-a456-426614174000',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FindOneRoomTypeBaseRateRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Hotel ID',
        example: '123e4567-e89b-12d3-a456-426614174001',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FindOneRoomTypeBaseRateRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Room Type ID',
        example: '123e4567-e89b-12d3-a456-426614174002',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FindOneRoomTypeBaseRateRequest.prototype, "roomTypeId", void 0);
class FindOneRoomTypeBaseRateResponse {
    data;
}
exports.FindOneRoomTypeBaseRateResponse = FindOneRoomTypeBaseRateResponse;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Room type base rate data',
        type: Object, // RoomTypeBaseRate type
    }),
    __metadata("design:type", types_1.RoomTypeBaseRate)
], FindOneRoomTypeBaseRateResponse.prototype, "data", void 0);
// ============================================================================
// Upsert Room Type Base Rate
// ============================================================================
class UpsertRoomTypeBaseRateRequest {
    tenantId;
    hotelId;
    roomTypeId;
    baseRate;
    weekdayRate;
    weekendRate;
    useWeekdayWeekend;
    hourlyRate;
    currency;
    isActive;
}
exports.UpsertRoomTypeBaseRateRequest = UpsertRoomTypeBaseRateRequest;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Tenant ID',
        example: '123e4567-e89b-12d3-a456-426614174000',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpsertRoomTypeBaseRateRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Hotel ID',
        example: '123e4567-e89b-12d3-a456-426614174001',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpsertRoomTypeBaseRateRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Room Type ID',
        example: '123e4567-e89b-12d3-a456-426614174002',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpsertRoomTypeBaseRateRequest.prototype, "roomTypeId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Base rate per night',
        example: 1000000,
    }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpsertRoomTypeBaseRateRequest.prototype, "baseRate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Weekday rate (Mon-Thu)',
        example: 900000,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpsertRoomTypeBaseRateRequest.prototype, "weekdayRate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Weekend rate (Fri-Sun)',
        example: 1200000,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpsertRoomTypeBaseRateRequest.prototype, "weekendRate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Use weekday/weekend pricing',
        example: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], UpsertRoomTypeBaseRateRequest.prototype, "useWeekdayWeekend", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Hourly rate',
        example: 50000,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpsertRoomTypeBaseRateRequest.prototype, "hourlyRate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Currency code',
        example: 'VND',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpsertRoomTypeBaseRateRequest.prototype, "currency", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Is active',
        example: true,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], UpsertRoomTypeBaseRateRequest.prototype, "isActive", void 0);
class UpsertRoomTypeBaseRateResponse {
    data;
    message;
}
exports.UpsertRoomTypeBaseRateResponse = UpsertRoomTypeBaseRateResponse;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Upserted room type base rate',
        type: Object, // RoomTypeBaseRate type
    }),
    __metadata("design:type", types_1.RoomTypeBaseRate)
], UpsertRoomTypeBaseRateResponse.prototype, "data", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Success message',
        example: 'Room type base rate updated successfully',
    }),
    __metadata("design:type", String)
], UpsertRoomTypeBaseRateResponse.prototype, "message", void 0);
// ============================================================================
// Remove Room Type Base Rate
// ============================================================================
class RemoveRoomTypeBaseRateRequest {
    tenantId;
    hotelId;
    roomTypeId;
}
exports.RemoveRoomTypeBaseRateRequest = RemoveRoomTypeBaseRateRequest;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Tenant ID',
        example: '123e4567-e89b-12d3-a456-426614174000',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RemoveRoomTypeBaseRateRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Hotel ID',
        example: '123e4567-e89b-12d3-a456-426614174001',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RemoveRoomTypeBaseRateRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Room Type ID',
        example: '123e4567-e89b-12d3-a456-426614174002',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RemoveRoomTypeBaseRateRequest.prototype, "roomTypeId", void 0);
class RemoveRoomTypeBaseRateResponse {
    message;
}
exports.RemoveRoomTypeBaseRateResponse = RemoveRoomTypeBaseRateResponse;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Success message',
        example: 'Room type base rate removed successfully',
    }),
    __metadata("design:type", String)
], RemoveRoomTypeBaseRateResponse.prototype, "message", void 0);
// ============================================================================
// Bulk Upsert Room Type Base Rates
// ============================================================================
class BulkRateItem {
    roomTypeId;
    baseRate;
    currency;
}
exports.BulkRateItem = BulkRateItem;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Room Type ID',
        example: '123e4567-e89b-12d3-a456-426614174002',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], BulkRateItem.prototype, "roomTypeId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Base rate per night',
        example: 1000000,
    }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], BulkRateItem.prototype, "baseRate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Currency code',
        example: 'VND',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], BulkRateItem.prototype, "currency", void 0);
class BulkUpsertRoomTypeBaseRatesRequest {
    tenantId;
    hotelId;
    rates;
}
exports.BulkUpsertRoomTypeBaseRatesRequest = BulkUpsertRoomTypeBaseRatesRequest;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Tenant ID',
        example: '123e4567-e89b-12d3-a456-426614174000',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], BulkUpsertRoomTypeBaseRatesRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Hotel ID',
        example: '123e4567-e89b-12d3-a456-426614174001',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], BulkUpsertRoomTypeBaseRatesRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Array of rates to upsert',
        type: [BulkRateItem],
    }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => BulkRateItem),
    __metadata("design:type", Array)
], BulkUpsertRoomTypeBaseRatesRequest.prototype, "rates", void 0);
class BulkUpsertRoomTypeBaseRatesResponse {
    data;
    message;
}
exports.BulkUpsertRoomTypeBaseRatesResponse = BulkUpsertRoomTypeBaseRatesResponse;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'List of upserted room type base rates',
        type: [Object], // RoomTypeBaseRate type
        isArray: true,
    }),
    __metadata("design:type", Array)
], BulkUpsertRoomTypeBaseRatesResponse.prototype, "data", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Success message',
        example: 'Successfully upserted 5 room type base rates',
    }),
    __metadata("design:type", String)
], BulkUpsertRoomTypeBaseRatesResponse.prototype, "message", void 0);
//# sourceMappingURL=room-type-base-rates.nats.js.map