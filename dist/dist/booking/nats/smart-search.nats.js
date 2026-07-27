"use strict";
/**
 * Smart Booking Search NATS Contract
 *
 * NATS Pattern: booking.search_smart
 * Handler: booking-service (smartBookingSearch handler)
 * Called by: api-gateway
 * Used by: SmartBooking page (/dashboard/bookings/create)
 *
 * Purpose: Search and rank available rooms/bookings with AI-powered recommendations
 * Returns: Ranked list of recommendations with confidence scores and alternative suggestions
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
exports.SmartSearchResponseDto = exports.SmartRecommendation = exports.PromotionSummaryDto = exports.AvailabilityInfoDto = exports.AlternativeDateDto = void 0;
const swagger_1 = require("@nestjs/swagger");
/**
 * Smart Recommendation - individual room recommendation with scoring
 * Used by: SmartSearchResponseDto (recommendations[] + suggestions[])
 */
class AlternativeDateDto {
    checkIn;
    checkOut;
    reason;
}
exports.AlternativeDateDto = AlternativeDateDto;
__decorate([
    (0, swagger_1.ApiProperty)({ type: String }),
    __metadata("design:type", String)
], AlternativeDateDto.prototype, "checkIn", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String }),
    __metadata("design:type", String)
], AlternativeDateDto.prototype, "checkOut", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String }),
    __metadata("design:type", String)
], AlternativeDateDto.prototype, "reason", void 0);
class AvailabilityInfoDto {
    isAvailable;
    alternativeDates;
}
exports.AvailabilityInfoDto = AvailabilityInfoDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], AvailabilityInfoDto.prototype, "isAvailable", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: [AlternativeDateDto] }),
    __metadata("design:type", Array)
], AvailabilityInfoDto.prototype, "alternativeDates", void 0);
class PromotionSummaryDto {
    id;
    name;
    description;
    discount;
    applicable;
}
exports.PromotionSummaryDto = PromotionSummaryDto;
__decorate([
    (0, swagger_1.ApiProperty)({ type: String }),
    __metadata("design:type", String)
], PromotionSummaryDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String }),
    __metadata("design:type", String)
], PromotionSummaryDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String }),
    __metadata("design:type", String)
], PromotionSummaryDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String }),
    __metadata("design:type", String)
], PromotionSummaryDto.prototype, "discount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], PromotionSummaryDto.prototype, "applicable", void 0);
class SmartRecommendation {
    /**
     * Unique recommendation ID
     */
    id;
    /**
     * Room ID
     */
    roomId;
    /**
     * Room number (e.g., '101', '205')
     */
    roomNumber;
    /**
     * Room type (e.g., 'DOUBLE', 'SUITE')
     */
    roomType;
    /**
     * Confidence score (0-100)
     * Calculated based on match between room and guest requirements
     * 80+: Top match, 60-79: Good match, <60: Alternative option
     */
    confidence;
    /**
     * Why this room is recommended (e.g., ['Price within budget', 'Preferred amenities'])
     */
    reasons;
    /**
     * Pricing information
     */
    pricing;
    /**
     * Room availability status
     */
    availability;
    /**
     * Room features (e.g., ['King bed', 'Work desk', 'Mini bar'])
     */
    features;
    /**
     * Room amenities (e.g., ['WiFi', 'Air Conditioning', 'Hot water'])
     */
    amenities;
    /**
     * Guest match score (0-10)
     * Based on how well room matches guest preferences
     */
    guestMatchScore;
    /**
     * Room upgrade information (if this is an upgrade offer)
     */
    upgrade;
    /**
     * Available promotions for this room
     */
    promotions;
}
exports.SmartRecommendation = SmartRecommendation;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Unique recommendation ID' }),
    __metadata("design:type", String)
], SmartRecommendation.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room ID' }),
    __metadata("design:type", String)
], SmartRecommendation.prototype, "roomId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room number' }),
    __metadata("design:type", String)
], SmartRecommendation.prototype, "roomNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room type' }),
    __metadata("design:type", String)
], SmartRecommendation.prototype, "roomType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Confidence score 0-100', example: 85 }),
    __metadata("design:type", Number)
], SmartRecommendation.prototype, "confidence", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Reasons for recommendation', type: [String] }),
    __metadata("design:type", Array)
], SmartRecommendation.prototype, "reasons", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Pricing information',
        type: 'object',
        properties: {
            basePrice: { type: 'string', description: 'Base price per night' },
            dynamicPrice: { type: 'string', description: 'Dynamic adjusted price' },
            discountAmount: { type: 'string', description: 'Discount if applicable' },
            totalPrice: { type: 'string', description: 'Total price for stay' },
            pricePerNight: { type: 'string', description: 'Price per night' }
        }
    }),
    __metadata("design:type", Object)
], SmartRecommendation.prototype, "pricing", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Availability information', type: AvailabilityInfoDto }),
    __metadata("design:type", AvailabilityInfoDto)
], SmartRecommendation.prototype, "availability", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room features', type: [String] }),
    __metadata("design:type", Array)
], SmartRecommendation.prototype, "features", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room amenities', type: [String] }),
    __metadata("design:type", Array)
], SmartRecommendation.prototype, "amenities", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Guest match score 0-10', example: 8.5 }),
    __metadata("design:type", Number)
], SmartRecommendation.prototype, "guestMatchScore", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Room upgrade information',
        type: 'object',
        properties: {
            isUpgrade: { type: 'boolean', description: 'Is this an upgrade offer' },
            upgradeType: { type: 'string', enum: ['COMPLIMENTARY', 'PAID', 'LOYALTY'], description: 'Type of upgrade' },
            originalRoomType: { type: 'string', description: 'Original booked room type' }
        }
    }),
    __metadata("design:type", Object)
], SmartRecommendation.prototype, "upgrade", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Available promotions', type: [PromotionSummaryDto] }),
    __metadata("design:type", Array)
], SmartRecommendation.prototype, "promotions", void 0);
/**
 * Smart search response - ranked recommendations with suggestions
 * Used by: api-gateway smartBookingSearch endpoint
 */
class SmartSearchResponseDto {
    /**
     * Top recommendations ranked by confidence score
     * Typically 3-5 best matches
     */
    recommendations;
    /**
     * Alternative suggestions if top recommendations not suitable
     * Can be alternative date options, similar rooms, etc.
     */
    suggestions;
    /**
     * Overall match score for the search request (0-100)
     */
    matchScore;
    /**
     * Total number of available options considered
     */
    total;
    /**
     * When search was performed
     */
    searchedAt;
}
exports.SmartSearchResponseDto = SmartSearchResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Top recommendations ranked by confidence',
        type: [SmartRecommendation]
    }),
    __metadata("design:type", Array)
], SmartSearchResponseDto.prototype, "recommendations", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Alternative recommendation suggestions',
        type: [SmartRecommendation]
    }),
    __metadata("design:type", Array)
], SmartSearchResponseDto.prototype, "suggestions", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Overall match score 0-100', example: 78 }),
    __metadata("design:type", Number)
], SmartSearchResponseDto.prototype, "matchScore", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total available options', example: 15 }),
    __metadata("design:type", Number)
], SmartSearchResponseDto.prototype, "total", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Timestamp of search', example: '2024-02-07T10:30:00Z' }),
    __metadata("design:type", String)
], SmartSearchResponseDto.prototype, "searchedAt", void 0);
//# sourceMappingURL=smart-search.nats.js.map