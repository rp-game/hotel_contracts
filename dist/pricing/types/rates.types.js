"use strict";
/**
 * Rate DTOs - Centralized
 *
 * IMPORTANT: These are the SINGLE SOURCE OF TRUTH for rate-related types
 * - Used by pricing-service NATS handlers
 * - Used by API Gateway REST endpoints
 * - All classes have @ApiProperty for Swagger documentation
 *
 * @verified_date 2026-02-13
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
exports.BulkCreateRatesRequestDto = exports.SyncRatesRequestDto = exports.UpdateRateRequestDto = exports.CalculateRateRequestDto = exports.BulkUpdateRatesRequestDto = exports.RateUpdateItemDto = exports.UpdateRateByIdRequestDto = exports.CreateRateRequestDto = exports.PricingRequestBaseDto = exports.BulkRatesResponseDto = exports.BulkRatesResultDto = exports.BulkOperationErrorDto = exports.CreateRateResponseDto = exports.RateDetailsResponseDto = exports.SyncRatesResponseDto = exports.UpdateRateResponseDto = exports.GetRatesResponseDto = exports.RateDetailsDataDto = exports.RateModifierDto = exports.ChannelRateDto = exports.RateRestrictionsDto = exports.SyncRatesDataDto = exports.RateSyncErrorDto = exports.CalculatedRateDto = exports.RateBreakdownDto = exports.RoomRateDto = exports.RateDetailsDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
// ============================================================================
// Core Rate DTOs
// ============================================================================
/**
 * Detailed rate breakdown (weekday/weekend/extra person)
 */
class RateDetailsDto {
    weekdayRate;
    weekendRate;
    extraPersonCharge;
}
exports.RateDetailsDto = RateDetailsDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Weekday rate' }),
    __metadata("design:type", Number)
], RateDetailsDto.prototype, "weekdayRate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Weekend rate' }),
    __metadata("design:type", Number)
], RateDetailsDto.prototype, "weekendRate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Extra person charge' }),
    __metadata("design:type", Number)
], RateDetailsDto.prototype, "extraPersonCharge", void 0);
/**
 * Room rate with availability and pricing information
 */
class RoomRateDto {
    id;
    roomTypeId;
    roomTypeName;
    baseRate;
    currentRate;
    currency;
    availableRooms;
    rateDetails;
}
exports.RoomRateDto = RoomRateDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Rate ID (null if no base rate configured)', nullable: true }),
    __metadata("design:type", Object)
], RoomRateDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room type ID' }),
    __metadata("design:type", String)
], RoomRateDto.prototype, "roomTypeId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room type name from inventory service' }),
    __metadata("design:type", String)
], RoomRateDto.prototype, "roomTypeName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Base rate price' }),
    __metadata("design:type", Number)
], RoomRateDto.prototype, "baseRate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Current calculated rate' }),
    __metadata("design:type", Number)
], RoomRateDto.prototype, "currentRate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Currency code (e.g., VND, USD)' }),
    __metadata("design:type", String)
], RoomRateDto.prototype, "currency", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of available rooms' }),
    __metadata("design:type", Number)
], RoomRateDto.prototype, "availableRooms", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Detailed rate breakdown', type: RateDetailsDto }),
    __metadata("design:type", RateDetailsDto)
], RoomRateDto.prototype, "rateDetails", void 0);
// ============================================================================
// Rate Calculation DTOs
// ============================================================================
/**
 * Breakdown of rate calculation components
 */
class RateBreakdownDto {
    baseAmount;
    seasonalAdjustment;
    occupancyAdjustment;
    lengthOfStayDiscount;
    promotionDiscount;
    yieldAdjustment;
    advanceBookingDiscount;
    lastMinuteDiscount;
    taxes;
}
exports.RateBreakdownDto = RateBreakdownDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Base amount before adjustments', type: 'number' }),
    __metadata("design:type", Object)
], RateBreakdownDto.prototype, "baseAmount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Seasonal adjustment amount' }),
    __metadata("design:type", Number)
], RateBreakdownDto.prototype, "seasonalAdjustment", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Occupancy-based adjustment' }),
    __metadata("design:type", Number)
], RateBreakdownDto.prototype, "occupancyAdjustment", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Length of stay discount' }),
    __metadata("design:type", Number)
], RateBreakdownDto.prototype, "lengthOfStayDiscount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Promotion discount applied' }),
    __metadata("design:type", Number)
], RateBreakdownDto.prototype, "promotionDiscount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Yield management adjustment' }),
    __metadata("design:type", Number)
], RateBreakdownDto.prototype, "yieldAdjustment", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Advance booking discount' }),
    __metadata("design:type", Number)
], RateBreakdownDto.prototype, "advanceBookingDiscount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Last minute discount' }),
    __metadata("design:type", Number)
], RateBreakdownDto.prototype, "lastMinuteDiscount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tax amount' }),
    __metadata("design:type", Number)
], RateBreakdownDto.prototype, "taxes", void 0);
/**
 * Calculated rate response with full breakdown
 */
class CalculatedRateDto {
    tenantId;
    hotelId;
    roomTypeId;
    checkIn;
    checkOut;
    guests;
    nights;
    units;
    baseRate;
    calculatedRate;
    currency;
    breakdown;
    adjustmentDetails;
}
exports.CalculatedRateDto = CalculatedRateDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], CalculatedRateDto.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    __metadata("design:type", String)
], CalculatedRateDto.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room type ID' }),
    __metadata("design:type", String)
], CalculatedRateDto.prototype, "roomTypeId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Check-in date' }),
    __metadata("design:type", String)
], CalculatedRateDto.prototype, "checkIn", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Check-out date' }),
    __metadata("design:type", String)
], CalculatedRateDto.prototype, "checkOut", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of guests' }),
    __metadata("design:type", Number)
], CalculatedRateDto.prototype, "guests", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of nights (for overnight bookings)' }),
    __metadata("design:type", Number)
], CalculatedRateDto.prototype, "nights", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of units (nights for overnight, hours for hourly)' }),
    __metadata("design:type", Number)
], CalculatedRateDto.prototype, "units", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Base rate per night/hour', type: 'number' }),
    __metadata("design:type", Object)
], CalculatedRateDto.prototype, "baseRate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Final calculated rate' }),
    __metadata("design:type", Number)
], CalculatedRateDto.prototype, "calculatedRate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Currency code' }),
    __metadata("design:type", String)
], CalculatedRateDto.prototype, "currency", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Rate breakdown details', type: RateBreakdownDto }),
    __metadata("design:type", RateBreakdownDto)
], CalculatedRateDto.prototype, "breakdown", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Adjustment details', type: [String] }),
    __metadata("design:type", Array)
], CalculatedRateDto.prototype, "adjustmentDetails", void 0);
// ============================================================================
// Rate Sync DTOs
// ============================================================================
/**
 * Rate sync error details
 */
class RateSyncErrorDto {
    channel;
    error;
}
exports.RateSyncErrorDto = RateSyncErrorDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Channel name' }),
    __metadata("design:type", String)
], RateSyncErrorDto.prototype, "channel", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Error message' }),
    __metadata("design:type", String)
], RateSyncErrorDto.prototype, "error", void 0);
/**
 * Rate synchronization result data
 */
class SyncRatesDataDto {
    success;
    syncedChannels;
    failedChannels;
    syncedRates;
    failedRates;
    errors;
    lastSyncDate;
}
exports.SyncRatesDataDto = SyncRatesDataDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Whether sync was successful' }),
    __metadata("design:type", Boolean)
], SyncRatesDataDto.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Successfully synced channels', type: [String] }),
    __metadata("design:type", Array)
], SyncRatesDataDto.prototype, "syncedChannels", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Failed channels', type: [String] }),
    __metadata("design:type", Array)
], SyncRatesDataDto.prototype, "failedChannels", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of rates synced' }),
    __metadata("design:type", Number)
], SyncRatesDataDto.prototype, "syncedRates", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of failed rates' }),
    __metadata("design:type", Number)
], SyncRatesDataDto.prototype, "failedRates", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Error details', type: [RateSyncErrorDto] }),
    __metadata("design:type", Array)
], SyncRatesDataDto.prototype, "errors", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Last sync timestamp (ISO 8601)' }),
    __metadata("design:type", String)
], SyncRatesDataDto.prototype, "lastSyncDate", void 0);
// ============================================================================
// Rate Details DTOs
// ============================================================================
/**
 * Rate restrictions (min/max stay, advance booking, etc.)
 */
class RateRestrictionsDto {
    minStay;
    maxStay;
    advanceBooking;
    closedDates;
}
exports.RateRestrictionsDto = RateRestrictionsDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Minimum stay in nights', minimum: 1 }),
    __metadata("design:type", Number)
], RateRestrictionsDto.prototype, "minStay", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Maximum stay in nights', minimum: 1 }),
    __metadata("design:type", Number)
], RateRestrictionsDto.prototype, "maxStay", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Advance booking requirement in days', minimum: 0 }),
    __metadata("design:type", Number)
], RateRestrictionsDto.prototype, "advanceBooking", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Closed dates (YYYY-MM-DD)', type: [String] }),
    __metadata("design:type", Array)
], RateRestrictionsDto.prototype, "closedDates", void 0);
/**
 * Channel-specific rate information
 */
class ChannelRateDto {
    channelName;
    rate;
    commission;
    isActive;
}
exports.ChannelRateDto = ChannelRateDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Channel name' }),
    __metadata("design:type", String)
], ChannelRateDto.prototype, "channelName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Rate for this channel' }),
    __metadata("design:type", Number)
], ChannelRateDto.prototype, "rate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Commission percentage' }),
    __metadata("design:type", Number)
], ChannelRateDto.prototype, "commission", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Whether channel is active' }),
    __metadata("design:type", Boolean)
], ChannelRateDto.prototype, "isActive", void 0);
/**
 * Rate modifier/adjustment rule
 */
class RateModifierDto {
    type;
    value;
    conditions;
}
exports.RateModifierDto = RateModifierDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Modifier type' }),
    __metadata("design:type", String)
], RateModifierDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Modifier value' }),
    __metadata("design:type", Number)
], RateModifierDto.prototype, "value", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Modifier conditions', type: 'object', additionalProperties: true }),
    __metadata("design:type", Object)
], RateModifierDto.prototype, "conditions", void 0);
/**
 * Complete rate details with restrictions, channels, and modifiers
 */
class RateDetailsDataDto {
    id;
    roomTypeId;
    roomTypeName;
    rateName;
    rateCode;
    baseRate;
    currency;
    rateType;
    validFrom;
    validTo;
    restrictions;
    channels;
    modifiers;
}
exports.RateDetailsDataDto = RateDetailsDataDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Rate ID' }),
    __metadata("design:type", String)
], RateDetailsDataDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room type ID' }),
    __metadata("design:type", String)
], RateDetailsDataDto.prototype, "roomTypeId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room type name' }),
    __metadata("design:type", String)
], RateDetailsDataDto.prototype, "roomTypeName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Rate name' }),
    __metadata("design:type", String)
], RateDetailsDataDto.prototype, "rateName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Rate code' }),
    __metadata("design:type", String)
], RateDetailsDataDto.prototype, "rateCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Base rate amount' }),
    __metadata("design:type", Number)
], RateDetailsDataDto.prototype, "baseRate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Currency code' }),
    __metadata("design:type", String)
], RateDetailsDataDto.prototype, "currency", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Rate type' }),
    __metadata("design:type", String)
], RateDetailsDataDto.prototype, "rateType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Valid from date' }),
    __metadata("design:type", String)
], RateDetailsDataDto.prototype, "validFrom", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Valid to date' }),
    __metadata("design:type", String)
], RateDetailsDataDto.prototype, "validTo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Rate restrictions', type: RateRestrictionsDto }),
    __metadata("design:type", RateRestrictionsDto)
], RateDetailsDataDto.prototype, "restrictions", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Channel-specific rates', type: [ChannelRateDto] }),
    __metadata("design:type", Array)
], RateDetailsDataDto.prototype, "channels", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Rate modifiers', type: [RateModifierDto] }),
    __metadata("design:type", Array)
], RateDetailsDataDto.prototype, "modifiers", void 0);
// ============================================================================
// Response Wrapper DTOs
// ============================================================================
/**
 * Get rates list response
 */
class GetRatesResponseDto {
    tenantId;
    hotelId;
    roomTypes;
}
exports.GetRatesResponseDto = GetRatesResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], GetRatesResponseDto.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    __metadata("design:type", String)
], GetRatesResponseDto.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [RoomRateDto], description: 'List of room types with their rates' }),
    __metadata("design:type", Array)
], GetRatesResponseDto.prototype, "roomTypes", void 0);
/**
 * Update rate response
 */
class UpdateRateResponseDto {
    data;
}
exports.UpdateRateResponseDto = UpdateRateResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ type: RoomRateDto, description: 'Updated rate data' }),
    __metadata("design:type", RoomRateDto)
], UpdateRateResponseDto.prototype, "data", void 0);
/**
 * Sync rates response
 */
class SyncRatesResponseDto {
    data;
}
exports.SyncRatesResponseDto = SyncRatesResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Sync status data', type: SyncRatesDataDto }),
    __metadata("design:type", SyncRatesDataDto)
], SyncRatesResponseDto.prototype, "data", void 0);
/**
 * Rate details response
 */
class RateDetailsResponseDto {
    data;
}
exports.RateDetailsResponseDto = RateDetailsResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Rate details data', type: RateDetailsDataDto }),
    __metadata("design:type", RateDetailsDataDto)
], RateDetailsResponseDto.prototype, "data", void 0);
/**
 * Create rate response
 */
class CreateRateResponseDto {
    data;
}
exports.CreateRateResponseDto = CreateRateResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ type: RoomRateDto, description: 'Created rate data' }),
    __metadata("design:type", RoomRateDto)
], CreateRateResponseDto.prototype, "data", void 0);
// ============================================================================
// Bulk Operations DTOs
// ============================================================================
/**
 * Bulk operation error details
 */
class BulkOperationErrorDto {
    index;
    error;
}
exports.BulkOperationErrorDto = BulkOperationErrorDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Item index in the array' }),
    __metadata("design:type", Number)
], BulkOperationErrorDto.prototype, "index", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Error message' }),
    __metadata("design:type", String)
], BulkOperationErrorDto.prototype, "error", void 0);
/**
 * Bulk rates operation result
 */
class BulkRatesResultDto {
    successful;
    failed;
    errors;
    createdRates;
}
exports.BulkRatesResultDto = BulkRatesResultDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of successful operations' }),
    __metadata("design:type", Number)
], BulkRatesResultDto.prototype, "successful", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of failed operations' }),
    __metadata("design:type", Number)
], BulkRatesResultDto.prototype, "failed", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Error details', type: [BulkOperationErrorDto] }),
    __metadata("design:type", Array)
], BulkRatesResultDto.prototype, "errors", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Created rates', type: [RoomRateDto] }),
    __metadata("design:type", Array)
], BulkRatesResultDto.prototype, "createdRates", void 0);
/**
 * Bulk rates response
 */
class BulkRatesResponseDto {
    data;
}
exports.BulkRatesResponseDto = BulkRatesResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Bulk operation results', type: BulkRatesResultDto }),
    __metadata("design:type", BulkRatesResultDto)
], BulkRatesResponseDto.prototype, "data", void 0);
// ============================================================================
// Request DTOs
// ============================================================================
/**
 * Base pricing request DTO
 */
class PricingRequestBaseDto {
    tenantId;
    hotelId;
}
exports.PricingRequestBaseDto = PricingRequestBaseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], PricingRequestBaseDto.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], PricingRequestBaseDto.prototype, "hotelId", void 0);
/**
 * Create rate request
 */
class CreateRateRequestDto extends PricingRequestBaseDto {
    roomTypeId;
    rateName;
    baseRate;
    startDate;
    endDate;
    minRate;
    maxRate;
    description;
    category;
}
exports.CreateRateRequestDto = CreateRateRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room type ID' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateRateRequestDto.prototype, "roomTypeId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Rate name' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateRateRequestDto.prototype, "rateName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Base rate amount', minimum: 0 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], CreateRateRequestDto.prototype, "baseRate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Start date for rate validity (YYYY-MM-DD)' }),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], CreateRateRequestDto.prototype, "startDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'End date for rate validity (YYYY-MM-DD)' }),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], CreateRateRequestDto.prototype, "endDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Minimum rate allowed', minimum: 0 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], CreateRateRequestDto.prototype, "minRate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Maximum rate allowed', minimum: 0 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], CreateRateRequestDto.prototype, "maxRate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Rate description' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateRateRequestDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Rate category/type' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateRateRequestDto.prototype, "category", void 0);
/**
 * Update rate by ID request
 */
class UpdateRateByIdRequestDto extends PricingRequestBaseDto {
    rateName;
    baseRate;
    currency;
    minRate;
    maxRate;
    startDate;
    endDate;
    description;
    isActive;
}
exports.UpdateRateByIdRequestDto = UpdateRateByIdRequestDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Updated rate name' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateRateByIdRequestDto.prototype, "rateName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Updated base rate', minimum: 0 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], UpdateRateByIdRequestDto.prototype, "baseRate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Currency code' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateRateByIdRequestDto.prototype, "currency", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Updated minimum rate', minimum: 0 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], UpdateRateByIdRequestDto.prototype, "minRate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Updated maximum rate', minimum: 0 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], UpdateRateByIdRequestDto.prototype, "maxRate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Updated start date (YYYY-MM-DD)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], UpdateRateByIdRequestDto.prototype, "startDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Updated end date (YYYY-MM-DD)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], UpdateRateByIdRequestDto.prototype, "endDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Updated description' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateRateByIdRequestDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Updated rate status' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], UpdateRateByIdRequestDto.prototype, "isActive", void 0);
/**
 * Rate update item for bulk operations
 */
class RateUpdateItemDto {
    rateId;
    changes;
}
exports.RateUpdateItemDto = RateUpdateItemDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Rate ID to update' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], RateUpdateItemDto.prototype, "rateId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Changes to apply', type: 'object', additionalProperties: true }),
    __metadata("design:type", Object)
], RateUpdateItemDto.prototype, "changes", void 0);
/**
 * Bulk update rates request
 */
class BulkUpdateRatesRequestDto extends PricingRequestBaseDto {
    updates;
    skipErrors;
}
exports.BulkUpdateRatesRequestDto = BulkUpdateRatesRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Array of rate updates', type: [RateUpdateItemDto] }),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], BulkUpdateRatesRequestDto.prototype, "updates", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Skip validation errors', default: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], BulkUpdateRatesRequestDto.prototype, "skipErrors", void 0);
/**
 * Calculate rate request
 */
class CalculateRateRequestDto extends PricingRequestBaseDto {
    roomTypeId;
    checkIn;
    checkOut;
    guests;
    channel;
    promotionCodes;
    bookingType;
    startTime;
    endTime;
}
exports.CalculateRateRequestDto = CalculateRateRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room type ID' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CalculateRateRequestDto.prototype, "roomTypeId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Check-in date (YYYY-MM-DD)' }),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], CalculateRateRequestDto.prototype, "checkIn", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Check-out date (YYYY-MM-DD)' }),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], CalculateRateRequestDto.prototype, "checkOut", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Number of guests', minimum: 1 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CalculateRateRequestDto.prototype, "guests", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Distribution channel' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CalculateRateRequestDto.prototype, "channel", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Promotion codes to apply', type: [String] }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], CalculateRateRequestDto.prototype, "promotionCodes", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Booking type (OVERNIGHT or HOURLY)', enum: ['OVERNIGHT', 'HOURLY'] }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(['OVERNIGHT', 'HOURLY']),
    __metadata("design:type", String)
], CalculateRateRequestDto.prototype, "bookingType", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Start time for hourly bookings (HH:00 format)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CalculateRateRequestDto.prototype, "startTime", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'End time for hourly bookings (HH:00 format)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CalculateRateRequestDto.prototype, "endTime", void 0);
/**
 * Update rate request (for specific date)
 */
class UpdateRateRequestDto extends PricingRequestBaseDto {
    roomTypeId;
    date;
    baseRate;
    minRate;
    maxRate;
    isAvailable;
    modifiers;
}
exports.UpdateRateRequestDto = UpdateRateRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room type ID' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], UpdateRateRequestDto.prototype, "roomTypeId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Date to update rate for (YYYY-MM-DD)' }),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], UpdateRateRequestDto.prototype, "date", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'New base rate', minimum: 0 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], UpdateRateRequestDto.prototype, "baseRate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Minimum rate', minimum: 0 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], UpdateRateRequestDto.prototype, "minRate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Maximum rate', minimum: 0 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], UpdateRateRequestDto.prototype, "maxRate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Rate availability status' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], UpdateRateRequestDto.prototype, "isAvailable", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Additional pricing modifiers', type: 'object', additionalProperties: true }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], UpdateRateRequestDto.prototype, "modifiers", void 0);
/**
 * Sync rates with external channels request
 */
class SyncRatesRequestDto extends PricingRequestBaseDto {
    roomTypeIds;
    startDate;
    endDate;
    channel;
    forceSync;
}
exports.SyncRatesRequestDto = SyncRatesRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room type IDs to sync', type: [String] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsUUID)(undefined, { each: true }),
    __metadata("design:type", Array)
], SyncRatesRequestDto.prototype, "roomTypeIds", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Start date for sync period (YYYY-MM-DD)' }),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], SyncRatesRequestDto.prototype, "startDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'End date for sync period (YYYY-MM-DD)' }),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], SyncRatesRequestDto.prototype, "endDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'External channel to sync with' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SyncRatesRequestDto.prototype, "channel", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Force sync override', default: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], SyncRatesRequestDto.prototype, "forceSync", void 0);
/**
 * Bulk create rates request
 */
class BulkCreateRatesRequestDto extends PricingRequestBaseDto {
    rates;
    skipErrors;
}
exports.BulkCreateRatesRequestDto = BulkCreateRatesRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Array of rates to create', type: [CreateRateRequestDto] }),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], BulkCreateRatesRequestDto.prototype, "rates", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Skip validation errors', default: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], BulkCreateRatesRequestDto.prototype, "skipErrors", void 0);
//# sourceMappingURL=rates.types.js.map