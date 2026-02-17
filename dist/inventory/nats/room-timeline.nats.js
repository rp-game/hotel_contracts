"use strict";
/**
 * Room Timeline & Analytics NATS Contracts
 *
 * Patterns:
 * - rooms.timeline.get
 * - rooms.timeline.stats
 * - rooms.status.update
 * - rooms.status.history
 * - rooms.availability.check
 * - rooms.cleaning.config.get
 * - rooms.cleaning.config.update
 * - rooms.assignment.optimize
 * - rooms.maintenance.get
 * - rooms.maintenance.schedule
 * - rooms.analytics.occupancy
 * - rooms.analytics.turnover
 * - rooms.analytics.comprehensive
 * - rooms.analytics.comparison
 * - rooms.conflicts.detect
 * - rooms.conflicts.analysis
 * - rooms.assignment
 * - rooms.settings.get
 * - rooms.settings.update
 * - rooms.status.get
 *
 * Handler: inventory-service
 * Called by: api-gateway, pricing-service
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
exports.AnalyticsComparisonResponseDto = exports.ComprehensiveAnalyticsResponseDto = exports.RoomSuggestionDto = exports.RoomSuggestionNextBookingDto = exports.RoomSuggestionFeaturesDto = exports.GetOptimizedRoomAssignmentRequest = exports.RoomBookingAvailability = exports.ConflictInfo = exports.RoomTimelineItem = exports.TimelineEvent = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
/**
 * Timeline Event/Block DTO
 * Shared DTO for both NATS messages and REST API responses
 * Used in room timeline to represent bookings, maintenance, cleaning, and blocked periods
 */
class TimelineEvent {
    id;
    type;
    startTime;
    endTime;
    title;
    description;
    guestName;
    bookingId;
    status;
    guestCount;
    specialRequests;
    bookingType;
}
exports.TimelineEvent = TimelineEvent;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Block ID' }),
    __metadata("design:type", String)
], TimelineEvent.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Block type', enum: ['booking', 'maintenance', 'cleaning', 'block'] }),
    __metadata("design:type", String)
], TimelineEvent.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Start time (ISO datetime string)' }),
    __metadata("design:type", String)
], TimelineEvent.prototype, "startTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'End time (ISO datetime string)' }),
    __metadata("design:type", String)
], TimelineEvent.prototype, "endTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Block title' }),
    __metadata("design:type", String)
], TimelineEvent.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Block description' }),
    __metadata("design:type", String)
], TimelineEvent.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Guest name (for bookings)' }),
    __metadata("design:type", String)
], TimelineEvent.prototype, "guestName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Booking ID (for bookings)' }),
    __metadata("design:type", String)
], TimelineEvent.prototype, "bookingId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Booking status (for booking blocks)', example: 'CONFIRMED' }),
    __metadata("design:type", String)
], TimelineEvent.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Number of guests (for booking blocks)' }),
    __metadata("design:type", Number)
], TimelineEvent.prototype, "guestCount", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Special requests from guest (for booking blocks)', example: 'Late check-in, extra towels' }),
    __metadata("design:type", String)
], TimelineEvent.prototype, "specialRequests", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Booking type', enum: ['HOURLY', 'OVERNIGHT'] }),
    __metadata("design:type", String)
], TimelineEvent.prototype, "bookingType", void 0);
/**
 * Room Timeline Item DTO
 * Shared DTO for both NATS messages and REST API responses
 * Represents a room with its timeline blocks and current status
 */
class RoomTimelineItem {
    roomId;
    roomNumber;
    floor;
    roomType;
    roomTypeId;
    status;
    timeBlocks;
    cleaningTime;
    lastCleaned;
    nextMaintenance;
    notes;
}
exports.RoomTimelineItem = RoomTimelineItem;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room ID' }),
    __metadata("design:type", String)
], RoomTimelineItem.prototype, "roomId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room number' }),
    __metadata("design:type", String)
], RoomTimelineItem.prototype, "roomNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Floor number' }),
    __metadata("design:type", Number)
], RoomTimelineItem.prototype, "floor", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room type (string or object)' }),
    __metadata("design:type", String)
], RoomTimelineItem.prototype, "roomType", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Room type ID' }),
    __metadata("design:type", String)
], RoomTimelineItem.prototype, "roomTypeId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Room status',
        enum: ['AVAILABLE', 'OCCUPIED', 'CLEANING', 'MAINTENANCE', 'OUT_OF_ORDER']
    }),
    __metadata("design:type", String)
], RoomTimelineItem.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Time blocks for this room', type: [TimelineEvent] }),
    __metadata("design:type", Array)
], RoomTimelineItem.prototype, "timeBlocks", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Cleaning time in minutes' }),
    __metadata("design:type", Number)
], RoomTimelineItem.prototype, "cleaningTime", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Last cleaned timestamp (ISO datetime or null)', type: String, nullable: true }),
    __metadata("design:type", Object)
], RoomTimelineItem.prototype, "lastCleaned", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Next maintenance timestamp (ISO datetime or null)', type: String, nullable: true }),
    __metadata("design:type", Object)
], RoomTimelineItem.prototype, "nextMaintenance", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Additional notes', type: String, nullable: true }),
    __metadata("design:type", Object)
], RoomTimelineItem.prototype, "notes", void 0);
class ConflictInfo {
    type;
    startDate;
    endDate;
    description;
    bookingId;
}
exports.ConflictInfo = ConflictInfo;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Conflict type (booking, maintenance, cleaning, block)', example: 'booking' }),
    __metadata("design:type", String)
], ConflictInfo.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Conflict start date (ISO datetime)', example: '2026-02-20T15:00:00.000Z' }),
    __metadata("design:type", String)
], ConflictInfo.prototype, "startDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Conflict end date (ISO datetime)', example: '2026-02-22T11:00:00.000Z' }),
    __metadata("design:type", String)
], ConflictInfo.prototype, "endDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Human-readable conflict description', example: 'Room already booked' }),
    __metadata("design:type", String)
], ConflictInfo.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Booking ID causing the conflict', example: 'uuid-booking-456' }),
    __metadata("design:type", String)
], ConflictInfo.prototype, "bookingId", void 0);
class RoomBookingAvailability {
    roomId;
    available;
    conflicts;
}
exports.RoomBookingAvailability = RoomBookingAvailability;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room ID', example: 'uuid-room-123' }),
    __metadata("design:type", String)
], RoomBookingAvailability.prototype, "roomId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Whether the room is available for the requested period', example: true }),
    __metadata("design:type", Boolean)
], RoomBookingAvailability.prototype, "available", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'List of conflicts preventing availability', type: [ConflictInfo] }),
    __metadata("design:type", Array)
], RoomBookingAvailability.prototype, "conflicts", void 0);
/**
 * Get Optimized Room Assignment Request
 * Pattern: rooms.assignment.optimize
 * Used for optimizing room assignments during new booking creation
 */
class GetOptimizedRoomAssignmentRequest {
    hotelId;
    checkIn;
    checkOut;
    guestCount;
    guestPreferences;
    roomType;
}
exports.GetOptimizedRoomAssignmentRequest = GetOptimizedRoomAssignmentRequest;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Hotel ID',
        example: 'hotel-123',
    }),
    __metadata("design:type", String)
], GetOptimizedRoomAssignmentRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Check-in date (ISO 8601 format)',
        example: '2026-02-20',
    }),
    __metadata("design:type", String)
], GetOptimizedRoomAssignmentRequest.prototype, "checkIn", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Check-out date (ISO 8601 format)',
        example: '2026-02-25',
    }),
    __metadata("design:type", String)
], GetOptimizedRoomAssignmentRequest.prototype, "checkOut", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Number of guests',
        example: 2,
    }),
    __metadata("design:type", Number)
], GetOptimizedRoomAssignmentRequest.prototype, "guestCount", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Guest preferences for room assignment',
        example: ['high_floor', 'view'],
        type: [String],
    }),
    __metadata("design:type", Array)
], GetOptimizedRoomAssignmentRequest.prototype, "guestPreferences", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Preferred room type',
        example: 'DELUXE',
    }),
    __metadata("design:type", String)
], GetOptimizedRoomAssignmentRequest.prototype, "roomType", void 0);
/**
 * Room physical features - typed object (replaces loose Record<string, any>)
 * Used inside RoomSuggestionDto
 */
class RoomSuggestionFeaturesDto {
    view;
    smoking;
    accessibility;
    wifi;
    minibar;
    balcony;
}
exports.RoomSuggestionFeaturesDto = RoomSuggestionFeaturesDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room view type (e.g. sea, city, garden)', example: 'sea' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RoomSuggestionFeaturesDto.prototype, "view", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Whether room allows smoking', example: false }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], RoomSuggestionFeaturesDto.prototype, "smoking", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Whether room has accessibility features', example: false }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], RoomSuggestionFeaturesDto.prototype, "accessibility", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Whether room has WiFi', example: true }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], RoomSuggestionFeaturesDto.prototype, "wifi", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Whether room has minibar', example: true }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], RoomSuggestionFeaturesDto.prototype, "minibar", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Whether room has balcony', example: false }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], RoomSuggestionFeaturesDto.prototype, "balcony", void 0);
/**
 * Next booking info on the room - helps assess scheduling pressure
 */
class RoomSuggestionNextBookingDto {
    checkIn;
    checkOut;
    guestName;
}
exports.RoomSuggestionNextBookingDto = RoomSuggestionNextBookingDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Next booking check-in (ISO datetime)', example: '2026-02-25T15:00:00.000Z' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RoomSuggestionNextBookingDto.prototype, "checkIn", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Next booking check-out (ISO datetime)', example: '2026-02-27T11:00:00.000Z' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RoomSuggestionNextBookingDto.prototype, "checkOut", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Guest name for next booking', example: 'Nguyen Van A' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RoomSuggestionNextBookingDto.prototype, "guestName", void 0);
/**
 * Room suggestion item - response for rooms.assignment.optimize pattern
 *
 * Single source of truth for:
 * - NATS handler (inventory-service) response
 * - API Gateway REST @ApiResponse type → Swagger doc
 * - OpenAPI generated TypeScript client (frontend)
 *
 * DO NOT define local RoomSuggestion in frontend — use generated type.
 */
class RoomSuggestionDto {
    roomId;
    roomNumber;
    roomTypeId;
    roomType;
    floor;
    features;
    basePrice;
    discountedPrice;
    availabilityScore;
    preferenceMatch;
    revenueScore;
    conflictRisk;
    reasons;
    nextBooking;
}
exports.RoomSuggestionDto = RoomSuggestionDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room ID (UUID)', example: 'uuid-room-123' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RoomSuggestionDto.prototype, "roomId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room number displayed to user', example: '101' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RoomSuggestionDto.prototype, "roomNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room type ID (UUID) — required for booking creation', example: 'uuid-roomtype-456' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RoomSuggestionDto.prototype, "roomTypeId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room type name', example: 'Deluxe Ocean View' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RoomSuggestionDto.prototype, "roomType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Floor number', example: 3 }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], RoomSuggestionDto.prototype, "floor", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room physical features and amenities', type: RoomSuggestionFeaturesDto }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => RoomSuggestionFeaturesDto),
    __metadata("design:type", RoomSuggestionFeaturesDto)
], RoomSuggestionDto.prototype, "features", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Base price per night (VND)', example: 1500000 }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], RoomSuggestionDto.prototype, "basePrice", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Discounted price per night when promotion applies (VND)', example: 1200000 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], RoomSuggestionDto.prototype, "discountedPrice", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Availability score 0–100 (100 = no conflicts)', example: 95 }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], RoomSuggestionDto.prototype, "availabilityScore", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Guest preference match score 0–100 (100 = perfect match)', example: 80 }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], RoomSuggestionDto.prototype, "preferenceMatch", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Revenue optimization score 0–100 (100 = maximizes hotel revenue)', example: 70 }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], RoomSuggestionDto.prototype, "revenueScore", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Conflict risk level for this room in the requested period',
        enum: ['NONE', 'LOW', 'MEDIUM', 'HIGH'],
        example: 'NONE',
    }),
    (0, class_validator_1.IsEnum)(['NONE', 'LOW', 'MEDIUM', 'HIGH']),
    __metadata("design:type", String)
], RoomSuggestionDto.prototype, "conflictRisk", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Reasons explaining why this room is suggested',
        type: [String],
        example: ['Matches sea view preference', 'High availability', 'Competitive price'],
    }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], RoomSuggestionDto.prototype, "reasons", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Next booking after requested checkout (to assess scheduling pressure)',
        type: RoomSuggestionNextBookingDto,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => RoomSuggestionNextBookingDto),
    __metadata("design:type", RoomSuggestionNextBookingDto)
], RoomSuggestionDto.prototype, "nextBooking", void 0);
/**
 * Comprehensive Analytics Response DTO
 * REST API response for GET /api/rooms/analytics/comprehensive
 * Used for both REST API responses and NATS messaging
 */
class ComprehensiveAnalyticsResponseDto {
    overview;
    trends;
    roomTypePerformance;
    hourlyOccupancy;
    revenueBreakdown;
    topPerformingRooms;
    cleaningMetrics;
    forecast;
}
exports.ComprehensiveAnalyticsResponseDto = ComprehensiveAnalyticsResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Overview metrics with room counts and KPIs',
        type: 'object',
        properties: {
            totalRooms: { type: 'number' },
            availableRooms: { type: 'number' },
            occupiedRooms: { type: 'number' },
            outOfOrderRooms: { type: 'number' },
            occupancyRate: { type: 'number' },
            adr: { type: 'number', description: 'Average Daily Rate' },
            revpar: { type: 'number', description: 'Revenue Per Available Room' },
            totalRevenue: { type: 'number' },
            avgLengthOfStay: { type: 'number' },
            checkoutOnTime: { type: 'number' },
            cleaningEfficiency: { type: 'number' }
        }
    }),
    __metadata("design:type", Object)
], ComprehensiveAnalyticsResponseDto.prototype, "overview", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Daily trends data',
        type: 'array',
        items: {
            type: 'object',
            properties: {
                date: { type: 'string' },
                occupancyRate: { type: 'number' },
                adr: { type: 'number' },
                revpar: { type: 'number' },
                revenue: { type: 'number' },
                availableRooms: { type: 'number' },
                occupiedRooms: { type: 'number' }
            }
        }
    }),
    __metadata("design:type", Array)
], ComprehensiveAnalyticsResponseDto.prototype, "trends", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Room type performance metrics',
        type: 'array',
        items: {
            type: 'object',
            properties: {
                roomType: { type: 'object' },
                totalRooms: { type: 'number' },
                occupancyRate: { type: 'number' },
                adr: { type: 'number' },
                revpar: { type: 'number' },
                revenue: { type: 'number' },
                avgBookingValue: { type: 'number' }
            }
        }
    }),
    __metadata("design:type", Array)
], ComprehensiveAnalyticsResponseDto.prototype, "roomTypePerformance", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Hourly occupancy data',
        type: 'array'
    }),
    __metadata("design:type", Array)
], ComprehensiveAnalyticsResponseDto.prototype, "hourlyOccupancy", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Revenue breakdown by source',
        type: 'array'
    }),
    __metadata("design:type", Array)
], ComprehensiveAnalyticsResponseDto.prototype, "revenueBreakdown", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Top performing rooms',
        type: 'array'
    }),
    __metadata("design:type", Array)
], ComprehensiveAnalyticsResponseDto.prototype, "topPerformingRooms", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Cleaning metrics and efficiency',
        type: 'object',
        additionalProperties: true
    }),
    __metadata("design:type", Object)
], ComprehensiveAnalyticsResponseDto.prototype, "cleaningMetrics", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Occupancy forecast',
        type: 'array'
    }),
    __metadata("design:type", Array)
], ComprehensiveAnalyticsResponseDto.prototype, "forecast", void 0);
/**
 * Analytics Comparison Response DTO
 * REST API response for GET /api/rooms/analytics/comparison
 * Used for both REST API responses and NATS messaging
 */
class AnalyticsComparisonResponseDto {
    current;
    previous;
    growth;
}
exports.AnalyticsComparisonResponseDto = AnalyticsComparisonResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Current period analytics',
        type: 'object',
        properties: {
            occupancyRate: { type: 'number' },
            adr: { type: 'number', description: 'Average Daily Rate' },
            revpar: { type: 'number', description: 'Revenue Per Available Room' },
            revenue: { type: 'number' }
        }
    }),
    __metadata("design:type", Object)
], AnalyticsComparisonResponseDto.prototype, "current", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Previous period analytics',
        type: 'object',
        properties: {
            occupancyRate: { type: 'number' },
            adr: { type: 'number', description: 'Average Daily Rate' },
            revpar: { type: 'number', description: 'Revenue Per Available Room' },
            revenue: { type: 'number' }
        }
    }),
    __metadata("design:type", Object)
], AnalyticsComparisonResponseDto.prototype, "previous", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Growth percentage between periods',
        type: 'object',
        properties: {
            occupancyRate: { type: 'number' },
            adr: { type: 'number' },
            revpar: { type: 'number' },
            revenue: { type: 'number' }
        }
    }),
    __metadata("design:type", Object)
], AnalyticsComparisonResponseDto.prototype, "growth", void 0);
//# sourceMappingURL=room-timeline.nats.js.map