"use strict";
/**
 * Grid Pricing NATS Contracts
 *
 * Patterns:
 * - pricing.override.set / pricing.override.delete / pricing.override.list  (cell overrides)
 * - pricing.rate-room-type.set / pricing.rate-room-type.list                (rate × room ticks)
 * - pricing.grid.get                                                        (listed-price grid, batch)
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
exports.PricingGridCell = exports.GetPricingGridRequest = exports.SetRateRoomTypeActiveResult = exports.RateRoomTypeDto = exports.ListRateRoomTypeRequest = exports.SetRateRoomTypeRequest = exports.DeleteCellOverrideResult = exports.CellOverrideDto = exports.ListCellOverrideRequest = exports.DeleteCellOverrideRequest = exports.SetCellOverrideRequest = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
// ============================================================================
// Cell Override — Requests
// ============================================================================
/** Upsert one cell override (rate × room × date) — manual price overriding the formula. */
class SetCellOverrideRequest {
    tenantId;
    hotelId;
    ratePlanId;
    roomTypeId;
    date;
    price;
    currency;
}
exports.SetCellOverrideRequest = SetCellOverrideRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], SetCellOverrideRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], SetCellOverrideRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Rate plan ID (DERIVED)' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], SetCellOverrideRequest.prototype, "ratePlanId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room type ID' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], SetCellOverrideRequest.prototype, "roomTypeId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Date (YYYY-MM-DD)', example: '2026-06-14' }),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], SetCellOverrideRequest.prototype, "date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Override price (final, listed)', example: 1200000 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], SetCellOverrideRequest.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Currency (default VND)', example: 'VND' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SetCellOverrideRequest.prototype, "currency", void 0);
/** Delete a cell override → cell reverts to the formula. */
class DeleteCellOverrideRequest {
    tenantId;
    hotelId;
    ratePlanId;
    roomTypeId;
    date;
}
exports.DeleteCellOverrideRequest = DeleteCellOverrideRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], DeleteCellOverrideRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], DeleteCellOverrideRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Rate plan ID' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], DeleteCellOverrideRequest.prototype, "ratePlanId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room type ID' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], DeleteCellOverrideRequest.prototype, "roomTypeId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Date (YYYY-MM-DD)' }),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], DeleteCellOverrideRequest.prototype, "date", void 0);
/** List cell overrides for a hotel (+ optional rate plan) over a date range. */
class ListCellOverrideRequest {
    tenantId;
    hotelId;
    ratePlanId;
    dateFrom;
    dateTo;
}
exports.ListCellOverrideRequest = ListCellOverrideRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ListCellOverrideRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ListCellOverrideRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Rate plan ID (optional filter)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ListCellOverrideRequest.prototype, "ratePlanId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Range start (YYYY-MM-DD inclusive)' }),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], ListCellOverrideRequest.prototype, "dateFrom", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Range end (YYYY-MM-DD inclusive)' }),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], ListCellOverrideRequest.prototype, "dateTo", void 0);
// ============================================================================
// Cell Override — Response payloads
// ============================================================================
class CellOverrideDto {
    id;
    ratePlanId;
    roomTypeId;
    date;
    price;
    currency;
}
exports.CellOverrideDto = CellOverrideDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CellOverrideDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CellOverrideDto.prototype, "ratePlanId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CellOverrideDto.prototype, "roomTypeId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CellOverrideDto.prototype, "date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], CellOverrideDto.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CellOverrideDto.prototype, "currency", void 0);
class DeleteCellOverrideResult {
    deleted;
}
exports.DeleteCellOverrideResult = DeleteCellOverrideResult;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], DeleteCellOverrideResult.prototype, "deleted", void 0);
// ============================================================================
// Rate × Room ticks — Requests
// ============================================================================
/** Set a tick for (rate × room). Absence of a row = active; only OFF rows are stored. */
class SetRateRoomTypeRequest {
    tenantId;
    hotelId;
    ratePlanId;
    roomTypeId;
    isActive;
}
exports.SetRateRoomTypeRequest = SetRateRoomTypeRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], SetRateRoomTypeRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], SetRateRoomTypeRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Rate plan ID' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], SetRateRoomTypeRequest.prototype, "ratePlanId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room type ID' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], SetRateRoomTypeRequest.prototype, "roomTypeId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'true = rate applies to room (row removed); false = off (row stored)' }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], SetRateRoomTypeRequest.prototype, "isActive", void 0);
/** List rate × room ticks (only OFF rows; absence = active). */
class ListRateRoomTypeRequest {
    tenantId;
    hotelId;
    ratePlanId;
}
exports.ListRateRoomTypeRequest = ListRateRoomTypeRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ListRateRoomTypeRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ListRateRoomTypeRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Rate plan ID (optional filter)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ListRateRoomTypeRequest.prototype, "ratePlanId", void 0);
// ============================================================================
// Rate × Room ticks — Response payloads
// ============================================================================
class RateRoomTypeDto {
    id;
    ratePlanId;
    roomTypeId;
    isActive;
}
exports.RateRoomTypeDto = RateRoomTypeDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], RateRoomTypeDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], RateRoomTypeDto.prototype, "ratePlanId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], RateRoomTypeDto.prototype, "roomTypeId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], RateRoomTypeDto.prototype, "isActive", void 0);
class SetRateRoomTypeActiveResult {
    active;
}
exports.SetRateRoomTypeActiveResult = SetRateRoomTypeActiveResult;
__decorate([
    (0, swagger_1.ApiProperty)({ enum: [true] }),
    __metadata("design:type", Boolean)
], SetRateRoomTypeActiveResult.prototype, "active", void 0);
// ============================================================================
// Listed-price grid (batch)
// ============================================================================
/** Request the listed-price grid for a hotel over a date range. */
class GetPricingGridRequest {
    tenantId;
    hotelId;
    dateFrom;
    dateTo;
    roomTypeIds;
    ratePlanIds;
}
exports.GetPricingGridRequest = GetPricingGridRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], GetPricingGridRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], GetPricingGridRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Range start (YYYY-MM-DD inclusive)' }),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], GetPricingGridRequest.prototype, "dateFrom", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Range end (YYYY-MM-DD inclusive)' }),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], GetPricingGridRequest.prototype, "dateTo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room type IDs', type: [String] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayMinSize)(1),
    (0, class_validator_1.IsUUID)('all', { each: true }),
    __metadata("design:type", Array)
], GetPricingGridRequest.prototype, "roomTypeIds", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Rate plan IDs (default: all active)', type: [String] }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsUUID)('all', { each: true }),
    __metadata("design:type", Array)
], GetPricingGridRequest.prototype, "ratePlanIds", void 0);
class PricingGridCell {
    price;
    source;
}
exports.PricingGridCell = PricingGridCell;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], PricingGridCell.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'base | derived | override' }),
    __metadata("design:type", String)
], PricingGridCell.prototype, "source", void 0);
//# sourceMappingURL=grid-pricing.nats.js.map