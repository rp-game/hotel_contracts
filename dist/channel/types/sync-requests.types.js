"use strict";
/**
 * Sync Request DTOs
 * Used for triggering sync operations from API Gateway
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
exports.PromotionSyncDto = exports.SyncFromProviderDto = exports.SyncRequestDto = exports.RateUpdateDto = exports.BulkInventoryUpdateDto = exports.InventoryUpdateDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const enums_1 = require("../enums");
/**
 * Inventory Update DTO
 * For updating single room inventory
 */
class InventoryUpdateDto {
    tenantId;
    hotelId;
    roomId;
    date;
    available;
    restrictions;
}
exports.InventoryUpdateDto = InventoryUpdateDto;
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], InventoryUpdateDto.prototype, "tenantId", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    __metadata("design:type", String)
], InventoryUpdateDto.prototype, "hotelId", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, swagger_1.ApiProperty)({ description: 'Room ID' }),
    __metadata("design:type", String)
], InventoryUpdateDto.prototype, "roomId", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    (0, swagger_1.ApiProperty)({ description: 'Date for inventory update (YYYY-MM-DD)' }),
    __metadata("design:type", String)
], InventoryUpdateDto.prototype, "date", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    (0, class_transformer_1.Transform)(({ value }) => parseInt(value)),
    (0, swagger_1.ApiProperty)({ description: 'Available inventory count' }),
    __metadata("design:type", Number)
], InventoryUpdateDto.prototype, "available", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsObject)(),
    (0, swagger_1.ApiPropertyOptional)({ description: 'Inventory restrictions' }),
    __metadata("design:type", Object)
], InventoryUpdateDto.prototype, "restrictions", void 0);
/**
 * Bulk Inventory Update DTO
 * For batch inventory updates across multiple dates
 */
class BulkInventoryUpdateDto {
    tenantId;
    hotelId;
    startDate;
    endDate;
    inventoryUpdates;
    targetProviders;
}
exports.BulkInventoryUpdateDto = BulkInventoryUpdateDto;
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], BulkInventoryUpdateDto.prototype, "tenantId", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    __metadata("design:type", String)
], BulkInventoryUpdateDto.prototype, "hotelId", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    (0, swagger_1.ApiProperty)({ description: 'Start date for bulk update (YYYY-MM-DD)' }),
    __metadata("design:type", String)
], BulkInventoryUpdateDto.prototype, "startDate", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    (0, swagger_1.ApiProperty)({ description: 'End date for bulk update (YYYY-MM-DD)' }),
    __metadata("design:type", String)
], BulkInventoryUpdateDto.prototype, "endDate", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => InventoryUpdateDto),
    (0, swagger_1.ApiProperty)({ description: 'List of inventory updates', type: [InventoryUpdateDto] }),
    __metadata("design:type", Array)
], BulkInventoryUpdateDto.prototype, "inventoryUpdates", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsUUID)(4, { each: true }),
    (0, swagger_1.ApiPropertyOptional)({ description: 'Target specific providers (optional)' }),
    __metadata("design:type", Array)
], BulkInventoryUpdateDto.prototype, "targetProviders", void 0);
/**
 * Rate Update DTO
 * For updating room rates
 */
class RateUpdateDto {
    tenantId;
    hotelId;
    roomId;
    ratePlanId;
    date;
    rate;
    currency;
    rateConfig;
}
exports.RateUpdateDto = RateUpdateDto;
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], RateUpdateDto.prototype, "tenantId", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    __metadata("design:type", String)
], RateUpdateDto.prototype, "hotelId", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, swagger_1.ApiProperty)({ description: 'Room ID' }),
    __metadata("design:type", String)
], RateUpdateDto.prototype, "roomId", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, swagger_1.ApiProperty)({ description: 'Rate plan ID' }),
    __metadata("design:type", String)
], RateUpdateDto.prototype, "ratePlanId", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    (0, swagger_1.ApiProperty)({ description: 'Date for rate update (YYYY-MM-DD)' }),
    __metadata("design:type", String)
], RateUpdateDto.prototype, "date", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    (0, class_transformer_1.Transform)(({ value }) => parseFloat(value)),
    (0, swagger_1.ApiProperty)({ description: 'Room rate' }),
    __metadata("design:type", Number)
], RateUpdateDto.prototype, "rate", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ description: 'Currency code (e.g., USD, EUR)' }),
    __metadata("design:type", String)
], RateUpdateDto.prototype, "currency", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsObject)(),
    (0, swagger_1.ApiPropertyOptional)({ description: 'Rate configuration options' }),
    __metadata("design:type", Object)
], RateUpdateDto.prototype, "rateConfig", void 0);
/**
 * Sync Request DTO
 * For triggering sync operations
 */
class SyncRequestDto {
    operation;
    tenantId;
    hotelId;
    targetProviders;
    startDate;
    endDate;
    parameters;
}
exports.SyncRequestDto = SyncRequestDto;
__decorate([
    (0, class_validator_1.IsEnum)(enums_1.SyncOperation),
    (0, swagger_1.ApiProperty)({ description: 'Type of sync operation', enum: enums_1.SyncOperation }),
    __metadata("design:type", String)
], SyncRequestDto.prototype, "operation", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], SyncRequestDto.prototype, "tenantId", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    __metadata("design:type", String)
], SyncRequestDto.prototype, "hotelId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsUUID)(4, { each: true }),
    (0, swagger_1.ApiPropertyOptional)({ description: 'Target specific providers (empty = all active)' }),
    __metadata("design:type", Array)
], SyncRequestDto.prototype, "targetProviders", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    (0, swagger_1.ApiPropertyOptional)({ description: 'Start date for sync (YYYY-MM-DD)' }),
    __metadata("design:type", String)
], SyncRequestDto.prototype, "startDate", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    (0, swagger_1.ApiPropertyOptional)({ description: 'End date for sync (YYYY-MM-DD)' }),
    __metadata("design:type", String)
], SyncRequestDto.prototype, "endDate", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsObject)(),
    (0, swagger_1.ApiPropertyOptional)({ description: 'Additional sync parameters' }),
    __metadata("design:type", Object)
], SyncRequestDto.prototype, "parameters", void 0);
/**
 * Sync From Provider DTO
 * For pulling data from external providers
 */
class SyncFromProviderDto {
    providerId;
    startDate;
    endDate;
    tenantId;
    hotelId;
    operation;
}
exports.SyncFromProviderDto = SyncFromProviderDto;
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, swagger_1.ApiProperty)({ description: 'Provider ID to sync from' }),
    __metadata("design:type", String)
], SyncFromProviderDto.prototype, "providerId", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    (0, swagger_1.ApiProperty)({ description: 'Start date for sync (YYYY-MM-DD)' }),
    __metadata("design:type", String)
], SyncFromProviderDto.prototype, "startDate", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    (0, swagger_1.ApiProperty)({ description: 'End date for sync (YYYY-MM-DD)' }),
    __metadata("design:type", String)
], SyncFromProviderDto.prototype, "endDate", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    (0, swagger_1.ApiPropertyOptional)({ description: 'Tenant ID filter' }),
    __metadata("design:type", String)
], SyncFromProviderDto.prototype, "tenantId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    (0, swagger_1.ApiPropertyOptional)({ description: 'Hotel ID filter' }),
    __metadata("design:type", String)
], SyncFromProviderDto.prototype, "hotelId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(enums_1.SyncOperation),
    (0, swagger_1.ApiPropertyOptional)({ description: 'Specific operation to sync', enum: enums_1.SyncOperation }),
    __metadata("design:type", String)
], SyncFromProviderDto.prototype, "operation", void 0);
/**
 * Promotion Sync DTO
 * For syncing promotional rates and packages
 */
class PromotionSyncDto {
    tenantId;
    hotelId;
    promotionCode;
    bookingStartDate;
    bookingEndDate;
    stayStartDate;
    stayEndDate;
    discountPercentage;
    targetRoomTypes;
    targetProviders;
}
exports.PromotionSyncDto = PromotionSyncDto;
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], PromotionSyncDto.prototype, "tenantId", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    __metadata("design:type", String)
], PromotionSyncDto.prototype, "hotelId", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ description: 'Promotion code' }),
    __metadata("design:type", String)
], PromotionSyncDto.prototype, "promotionCode", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    (0, swagger_1.ApiProperty)({ description: 'Promotion booking start date (YYYY-MM-DD)' }),
    __metadata("design:type", String)
], PromotionSyncDto.prototype, "bookingStartDate", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    (0, swagger_1.ApiProperty)({ description: 'Promotion booking end date (YYYY-MM-DD)' }),
    __metadata("design:type", String)
], PromotionSyncDto.prototype, "bookingEndDate", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    (0, swagger_1.ApiProperty)({ description: 'Promotion stay start date (YYYY-MM-DD)' }),
    __metadata("design:type", String)
], PromotionSyncDto.prototype, "stayStartDate", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    (0, swagger_1.ApiProperty)({ description: 'Promotion stay end date (YYYY-MM-DD)' }),
    __metadata("design:type", String)
], PromotionSyncDto.prototype, "stayEndDate", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.Max)(100),
    (0, swagger_1.ApiProperty)({ description: 'Discount percentage (0-100)' }),
    __metadata("design:type", Number)
], PromotionSyncDto.prototype, "discountPercentage", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsUUID)(4, { each: true }),
    (0, swagger_1.ApiPropertyOptional)({ description: 'Target specific room types' }),
    __metadata("design:type", Array)
], PromotionSyncDto.prototype, "targetRoomTypes", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsUUID)(4, { each: true }),
    (0, swagger_1.ApiPropertyOptional)({ description: 'Target specific providers' }),
    __metadata("design:type", Array)
], PromotionSyncDto.prototype, "targetProviders", void 0);
//# sourceMappingURL=sync-requests.types.js.map