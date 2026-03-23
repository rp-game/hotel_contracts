"use strict";
/**
 * Rates Core NATS Contracts
 *
 * Handles base rate management, dynamic calculations, and bulk operations.
 * Core pricing module for room rates and restrictions.
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
exports.DeleteRateResponse = exports.DeleteRateRequest = exports.CreateRateResponse = exports.GetRateByIdResponse = exports.SyncRatesResponse = exports.SyncRatesData = exports.UpdateRateResponse = exports.CalculateRateResponse = exports.CalculateRateForPlansResponse = exports.CalculateRateForPlanItem = exports.CalculateRateForPlansRequest = exports.GetRatesResponse = exports.RoomRateResponse = exports.RateDetails = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const types_1 = require("../types");
class RateDetails {
    weekdayRate;
    weekendRate;
    extraPersonCharge;
}
exports.RateDetails = RateDetails;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Weekday rate' }),
    __metadata("design:type", Number)
], RateDetails.prototype, "weekdayRate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Weekend rate' }),
    __metadata("design:type", Number)
], RateDetails.prototype, "weekendRate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Extra person charge' }),
    __metadata("design:type", Number)
], RateDetails.prototype, "extraPersonCharge", void 0);
class RoomRateResponse {
    id;
    roomTypeId;
    roomTypeName;
    baseRate;
    currentRate;
    currency;
    availableRooms;
    rateDetails;
}
exports.RoomRateResponse = RoomRateResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Rate ID (null if no base rate configured)', nullable: true }),
    __metadata("design:type", Object)
], RoomRateResponse.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room type ID' }),
    __metadata("design:type", String)
], RoomRateResponse.prototype, "roomTypeId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room type name from inventory service' }),
    __metadata("design:type", String)
], RoomRateResponse.prototype, "roomTypeName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Base rate price' }),
    __metadata("design:type", Number)
], RoomRateResponse.prototype, "baseRate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Current calculated rate' }),
    __metadata("design:type", Number)
], RoomRateResponse.prototype, "currentRate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Currency code (e.g., VND, USD)' }),
    __metadata("design:type", String)
], RoomRateResponse.prototype, "currency", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of available rooms' }),
    __metadata("design:type", Number)
], RoomRateResponse.prototype, "availableRooms", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Detailed rate breakdown', type: RateDetails }),
    __metadata("design:type", RateDetails)
], RoomRateResponse.prototype, "rateDetails", void 0);
class GetRatesResponse {
    tenantId;
    hotelId;
    roomTypes;
}
exports.GetRatesResponse = GetRatesResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], GetRatesResponse.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    __metadata("design:type", String)
], GetRatesResponse.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [RoomRateResponse], description: 'List of room types with their rates' }),
    __metadata("design:type", Array)
], GetRatesResponse.prototype, "roomTypes", void 0);
/**
 * Batch calculate rates for multiple rate plans at once.
 * Used by frontend to display rate plan options with prices.
 * NOTE: Does NOT apply promotions — only base + seasonal + dynamic + LOS + derivation.
 */
class CalculateRateForPlansRequest {
    tenantId;
    hotelId;
    roomTypeId;
    checkIn;
    checkOut;
    guests;
    ratePlanIds;
    source;
}
exports.CalculateRateForPlansRequest = CalculateRateForPlansRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID', example: '550e8400-e29b-41d4-a716-446655440001' }),
    __metadata("design:type", String)
], CalculateRateForPlansRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID', example: '550e8400-e29b-41d4-a716-446655440010' }),
    __metadata("design:type", String)
], CalculateRateForPlansRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room type ID', example: '650e8400-e29b-41d4-a716-446655440101' }),
    __metadata("design:type", String)
], CalculateRateForPlansRequest.prototype, "roomTypeId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Check-in date (YYYY-MM-DD)', example: '2026-04-01' }),
    __metadata("design:type", String)
], CalculateRateForPlansRequest.prototype, "checkIn", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Check-out date (YYYY-MM-DD)', example: '2026-04-05' }),
    __metadata("design:type", String)
], CalculateRateForPlansRequest.prototype, "checkOut", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Number of guests', example: 2 }),
    __metadata("design:type", Number)
], CalculateRateForPlansRequest.prototype, "guests", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'List of rate plan IDs to calculate', type: [String] }),
    __metadata("design:type", Array)
], CalculateRateForPlansRequest.prototype, "ratePlanIds", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Booking source', example: 'DIRECT' }),
    __metadata("design:type", String)
], CalculateRateForPlansRequest.prototype, "source", void 0);
class CalculateRateForPlanItem {
    ratePlanId;
    ratePlanName;
    finalRate;
    perNightRate;
    derivation;
}
exports.CalculateRateForPlanItem = CalculateRateForPlanItem;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Rate plan ID' }),
    __metadata("design:type", String)
], CalculateRateForPlanItem.prototype, "ratePlanId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Rate plan name' }),
    __metadata("design:type", String)
], CalculateRateForPlanItem.prototype, "ratePlanName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total price after derivation (pre-tax)' }),
    __metadata("design:type", Number)
], CalculateRateForPlanItem.prototype, "finalRate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Price per night (pre-tax)' }),
    __metadata("design:type", Number)
], CalculateRateForPlanItem.prototype, "perNightRate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Derivation details (if DERIVED plan)' }),
    __metadata("design:type", Object)
], CalculateRateForPlanItem.prototype, "derivation", void 0);
class CalculateRateForPlansResponse {
    baseRate;
    nights;
    taxConfiguration;
    plans;
}
exports.CalculateRateForPlansResponse = CalculateRateForPlansResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Base rate without rate plan derivation (pre-tax)' }),
    __metadata("design:type", Number)
], CalculateRateForPlansResponse.prototype, "baseRate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of nights' }),
    __metadata("design:type", Number)
], CalculateRateForPlansResponse.prototype, "nights", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Tax configuration for frontend display' }),
    __metadata("design:type", Object)
], CalculateRateForPlansResponse.prototype, "taxConfiguration", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Calculated rates per plan', type: [CalculateRateForPlanItem] }),
    __metadata("design:type", Array)
], CalculateRateForPlansResponse.prototype, "plans", void 0);
class CalculateRateResponse {
    data;
}
exports.CalculateRateResponse = CalculateRateResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Calculated rate details', type: types_1.DynamicRateCalculation }),
    __metadata("design:type", types_1.DynamicRateCalculation)
], CalculateRateResponse.prototype, "data", void 0);
class UpdateRateResponse {
    data;
}
exports.UpdateRateResponse = UpdateRateResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Updated rate data', type: types_1.Rate }),
    __metadata("design:type", types_1.Rate)
], UpdateRateResponse.prototype, "data", void 0);
class SyncRatesData {
    synced;
    skipped;
    errors;
}
exports.SyncRatesData = SyncRatesData;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of synced rates' }),
    __metadata("design:type", Number)
], SyncRatesData.prototype, "synced", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of skipped rates' }),
    __metadata("design:type", Number)
], SyncRatesData.prototype, "skipped", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of errors' }),
    __metadata("design:type", Number)
], SyncRatesData.prototype, "errors", void 0);
class SyncRatesResponse {
    data;
}
exports.SyncRatesResponse = SyncRatesResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Sync status data', type: SyncRatesData }),
    __metadata("design:type", SyncRatesData)
], SyncRatesResponse.prototype, "data", void 0);
class GetRateByIdResponse {
    data;
}
exports.GetRateByIdResponse = GetRateByIdResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Rate data', type: types_1.Rate }),
    __metadata("design:type", types_1.Rate)
], GetRateByIdResponse.prototype, "data", void 0);
class CreateRateResponse {
    data;
}
exports.CreateRateResponse = CreateRateResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Created rate data', type: types_1.Rate }),
    __metadata("design:type", types_1.Rate)
], CreateRateResponse.prototype, "data", void 0);
/**
 * NATS Pattern: pricing.rates.delete
 */
class DeleteRateRequest {
    id;
    tenantId;
}
exports.DeleteRateRequest = DeleteRateRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Rate ID' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], DeleteRateRequest.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], DeleteRateRequest.prototype, "tenantId", void 0);
class DeleteRateResponse {
    success;
    message;
}
exports.DeleteRateResponse = DeleteRateResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Whether deletion was successful' }),
    __metadata("design:type", Boolean)
], DeleteRateResponse.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Response message' }),
    __metadata("design:type", String)
], DeleteRateResponse.prototype, "message", void 0);
//# sourceMappingURL=rates.nats.js.map