"use strict";
/**
 * Channel Mapping Type Definitions
 *
 * Handles room and rate mappings between internal system and external providers
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
exports.DeleteMappingResponse = exports.UpdateRateMappingRequest = exports.CreateRateMappingRequest = exports.UpdateRoomMappingRequest = exports.CreateRoomMappingRequest = exports.RateMapping = exports.RateMappingConfiguration = exports.RateMappingRestrictions = exports.RoomMapping = exports.RoomMappingConfiguration = void 0;
const swagger_1 = require("@nestjs/swagger");
/**
 * Room mapping configuration (JSONB field)
 * Matches database entity structure (CMSRoomMapping.mappingConfiguration)
 */
class RoomMappingConfiguration {
    roomType;
    maxOccupancy;
    amenities;
    bedConfiguration;
    roomSize;
    viewType;
    floor;
    smokingAllowed;
    accessibilityFeatures;
}
exports.RoomMappingConfiguration = RoomMappingConfiguration;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Room type classification', example: 'DELUXE' }),
    __metadata("design:type", String)
], RoomMappingConfiguration.prototype, "roomType", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Maximum occupancy', example: 2 }),
    __metadata("design:type", Number)
], RoomMappingConfiguration.prototype, "maxOccupancy", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Room amenities',
        type: [String],
        example: ['wifi', 'tv', 'minibar', 'air-conditioning']
    }),
    __metadata("design:type", Array)
], RoomMappingConfiguration.prototype, "amenities", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Bed configuration', example: '1 King Bed' }),
    __metadata("design:type", String)
], RoomMappingConfiguration.prototype, "bedConfiguration", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Room size in square meters', example: 35 }),
    __metadata("design:type", Number)
], RoomMappingConfiguration.prototype, "roomSize", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'View type', example: 'SEA_VIEW' }),
    __metadata("design:type", String)
], RoomMappingConfiguration.prototype, "viewType", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Floor number', example: 5 }),
    __metadata("design:type", Number)
], RoomMappingConfiguration.prototype, "floor", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Smoking allowed', example: false }),
    __metadata("design:type", Boolean)
], RoomMappingConfiguration.prototype, "smokingAllowed", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Accessibility features',
        type: [String],
        example: ['wheelchair-accessible', 'grab-rails']
    }),
    __metadata("design:type", Array)
], RoomMappingConfiguration.prototype, "accessibilityFeatures", void 0);
/**
 * Room mapping entity
 * Maps internal rooms to external provider room IDs
 */
class RoomMapping {
    id;
    providerId;
    tenantId;
    hotelId;
    internalRoomId;
    internalRoomName;
    externalRoomId;
    externalRoomName;
    mappingConfiguration;
    isActive;
    lastSyncedAt;
    createdAt;
    updatedAt;
}
exports.RoomMapping = RoomMapping;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Mapping ID', format: 'uuid' }),
    __metadata("design:type", String)
], RoomMapping.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Provider ID', format: 'uuid' }),
    __metadata("design:type", String)
], RoomMapping.prototype, "providerId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID', format: 'uuid' }),
    __metadata("design:type", String)
], RoomMapping.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID', format: 'uuid' }),
    __metadata("design:type", String)
], RoomMapping.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Internal room ID', format: 'uuid' }),
    __metadata("design:type", String)
], RoomMapping.prototype, "internalRoomId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Internal room name', example: 'Deluxe Room 101' }),
    __metadata("design:type", String)
], RoomMapping.prototype, "internalRoomName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'External room ID in provider system', example: 'EXT-ROOM-123' }),
    __metadata("design:type", String)
], RoomMapping.prototype, "externalRoomId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'External room name in provider system', example: 'Superior Double Room' }),
    __metadata("design:type", String)
], RoomMapping.prototype, "externalRoomName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Room mapping configuration (JSONB)',
        type: () => RoomMappingConfiguration
    }),
    __metadata("design:type", RoomMappingConfiguration)
], RoomMapping.prototype, "mappingConfiguration", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Whether the mapping is active', example: true }),
    __metadata("design:type", Boolean)
], RoomMapping.prototype, "isActive", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Last sync timestamp (ISO format)',
        example: '2026-02-14T10:30:00Z'
    }),
    __metadata("design:type", String)
], RoomMapping.prototype, "lastSyncedAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Mapping creation timestamp (ISO format)', example: '2026-02-14T10:00:00Z' }),
    __metadata("design:type", String)
], RoomMapping.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Mapping last update timestamp (ISO format)', example: '2026-02-14T10:30:00Z' }),
    __metadata("design:type", String)
], RoomMapping.prototype, "updatedAt", void 0);
/**
 * Rate mapping restrictions sub-object
 */
class RateMappingRestrictions {
    minStay;
    maxStay;
    advanceBookingDays;
    closedToArrival;
    closedToDeparture;
}
exports.RateMappingRestrictions = RateMappingRestrictions;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Minimum stay nights', example: 2 }),
    __metadata("design:type", Number)
], RateMappingRestrictions.prototype, "minStay", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Maximum stay nights', example: 14 }),
    __metadata("design:type", Number)
], RateMappingRestrictions.prototype, "maxStay", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Advance booking days required', example: 7 }),
    __metadata("design:type", Number)
], RateMappingRestrictions.prototype, "advanceBookingDays", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Closed to arrival', example: false }),
    __metadata("design:type", Boolean)
], RateMappingRestrictions.prototype, "closedToArrival", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Closed to departure', example: false }),
    __metadata("design:type", Boolean)
], RateMappingRestrictions.prototype, "closedToDeparture", void 0);
/**
 * Rate mapping configuration (JSONB field)
 */
class RateMappingConfiguration {
    rateBasis;
    mealPlan;
    cancellationPolicy;
    rateType;
    inclusions;
    restrictions;
}
exports.RateMappingConfiguration = RateMappingConfiguration;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Rate basis',
        enum: ['PER_NIGHT', 'PER_PERSON', 'PER_ROOM'],
        example: 'PER_NIGHT'
    }),
    __metadata("design:type", String)
], RateMappingConfiguration.prototype, "rateBasis", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Meal plan', example: 'ROOM_ONLY' }),
    __metadata("design:type", String)
], RateMappingConfiguration.prototype, "mealPlan", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Cancellation policy', example: 'NON_REFUNDABLE' }),
    __metadata("design:type", String)
], RateMappingConfiguration.prototype, "cancellationPolicy", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Rate type',
        enum: ['BAR', 'CORPORATE', 'PROMOTIONAL', 'PACKAGE'],
        example: 'BAR'
    }),
    __metadata("design:type", String)
], RateMappingConfiguration.prototype, "rateType", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Rate inclusions',
        type: [String],
        example: ['breakfast', 'wifi']
    }),
    __metadata("design:type", Array)
], RateMappingConfiguration.prototype, "inclusions", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Rate restrictions',
        type: () => RateMappingRestrictions
    }),
    __metadata("design:type", RateMappingRestrictions)
], RateMappingConfiguration.prototype, "restrictions", void 0);
/**
 * Rate mapping entity
 * Maps internal rate plans to external provider rate IDs
 */
class RateMapping {
    id;
    providerId;
    tenantId;
    hotelId;
    internalRoomId;
    internalRateId;
    internalRateName;
    externalRateId;
    externalRateName;
    mappingConfiguration;
    isActive;
    lastSyncedAt;
    createdAt;
    updatedAt;
}
exports.RateMapping = RateMapping;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Mapping ID', format: 'uuid' }),
    __metadata("design:type", String)
], RateMapping.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Provider ID', format: 'uuid' }),
    __metadata("design:type", String)
], RateMapping.prototype, "providerId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID', format: 'uuid' }),
    __metadata("design:type", String)
], RateMapping.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID', format: 'uuid' }),
    __metadata("design:type", String)
], RateMapping.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Internal room ID', format: 'uuid' }),
    __metadata("design:type", String)
], RateMapping.prototype, "internalRoomId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Internal rate ID', format: 'uuid' }),
    __metadata("design:type", String)
], RateMapping.prototype, "internalRateId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Internal rate name', example: 'Best Available Rate' }),
    __metadata("design:type", String)
], RateMapping.prototype, "internalRateName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'External rate ID in provider system', example: 'EXT-RATE-456' }),
    __metadata("design:type", String)
], RateMapping.prototype, "externalRateId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'External rate name in provider system', example: 'Standard Rate' }),
    __metadata("design:type", String)
], RateMapping.prototype, "externalRateName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Rate mapping configuration (JSONB)',
        type: () => RateMappingConfiguration
    }),
    __metadata("design:type", RateMappingConfiguration)
], RateMapping.prototype, "mappingConfiguration", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Whether the mapping is active', example: true }),
    __metadata("design:type", Boolean)
], RateMapping.prototype, "isActive", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Last sync timestamp (ISO format)',
        example: '2026-02-14T10:30:00Z'
    }),
    __metadata("design:type", String)
], RateMapping.prototype, "lastSyncedAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Mapping creation timestamp (ISO format)', example: '2026-02-14T10:00:00Z' }),
    __metadata("design:type", String)
], RateMapping.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Mapping last update timestamp (ISO format)', example: '2026-02-14T10:30:00Z' }),
    __metadata("design:type", String)
], RateMapping.prototype, "updatedAt", void 0);
/**
 * Create room mapping request
 */
class CreateRoomMappingRequest {
    providerId;
    tenantId;
    hotelId;
    internalRoomId;
    internalRoomName;
    externalRoomId;
    externalRoomName;
    mappingConfiguration;
    isActive;
}
exports.CreateRoomMappingRequest = CreateRoomMappingRequest;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Provider ID', format: 'uuid' }),
    __metadata("design:type", String)
], CreateRoomMappingRequest.prototype, "providerId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Tenant ID', format: 'uuid' }),
    __metadata("design:type", String)
], CreateRoomMappingRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Hotel ID', format: 'uuid' }),
    __metadata("design:type", String)
], CreateRoomMappingRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Internal room ID', format: 'uuid' }),
    __metadata("design:type", String)
], CreateRoomMappingRequest.prototype, "internalRoomId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Internal room name', example: 'Deluxe Room 101' }),
    __metadata("design:type", String)
], CreateRoomMappingRequest.prototype, "internalRoomName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'External room ID in provider system', example: 'EXT-ROOM-123' }),
    __metadata("design:type", String)
], CreateRoomMappingRequest.prototype, "externalRoomId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'External room name in provider system', example: 'Superior Double Room' }),
    __metadata("design:type", String)
], CreateRoomMappingRequest.prototype, "externalRoomName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Room mapping configuration',
        type: () => RoomMappingConfiguration
    }),
    __metadata("design:type", RoomMappingConfiguration)
], CreateRoomMappingRequest.prototype, "mappingConfiguration", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Whether the mapping is active', default: true }),
    __metadata("design:type", Boolean)
], CreateRoomMappingRequest.prototype, "isActive", void 0);
/**
 * Update room mapping request
 */
class UpdateRoomMappingRequest {
    internalRoomName;
    externalRoomId;
    externalRoomName;
    mappingConfiguration;
    isActive;
}
exports.UpdateRoomMappingRequest = UpdateRoomMappingRequest;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Internal room name' }),
    __metadata("design:type", String)
], UpdateRoomMappingRequest.prototype, "internalRoomName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'External room ID in provider system' }),
    __metadata("design:type", String)
], UpdateRoomMappingRequest.prototype, "externalRoomId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'External room name in provider system' }),
    __metadata("design:type", String)
], UpdateRoomMappingRequest.prototype, "externalRoomName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Room mapping configuration',
        type: () => RoomMappingConfiguration
    }),
    __metadata("design:type", RoomMappingConfiguration)
], UpdateRoomMappingRequest.prototype, "mappingConfiguration", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Whether the mapping is active' }),
    __metadata("design:type", Boolean)
], UpdateRoomMappingRequest.prototype, "isActive", void 0);
/**
 * Create rate mapping request
 */
class CreateRateMappingRequest {
    providerId;
    tenantId;
    hotelId;
    internalRoomId;
    internalRateId;
    internalRateName;
    externalRateId;
    externalRateName;
    mappingConfiguration;
    isActive;
}
exports.CreateRateMappingRequest = CreateRateMappingRequest;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Provider ID', format: 'uuid' }),
    __metadata("design:type", String)
], CreateRateMappingRequest.prototype, "providerId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Tenant ID', format: 'uuid' }),
    __metadata("design:type", String)
], CreateRateMappingRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Hotel ID', format: 'uuid' }),
    __metadata("design:type", String)
], CreateRateMappingRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Internal room ID', format: 'uuid' }),
    __metadata("design:type", String)
], CreateRateMappingRequest.prototype, "internalRoomId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Internal rate ID', format: 'uuid' }),
    __metadata("design:type", String)
], CreateRateMappingRequest.prototype, "internalRateId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Internal rate name', example: 'Best Available Rate' }),
    __metadata("design:type", String)
], CreateRateMappingRequest.prototype, "internalRateName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'External rate ID in provider system', example: 'EXT-RATE-456' }),
    __metadata("design:type", String)
], CreateRateMappingRequest.prototype, "externalRateId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'External rate name in provider system', example: 'Standard Rate' }),
    __metadata("design:type", String)
], CreateRateMappingRequest.prototype, "externalRateName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Rate mapping configuration',
        type: () => RateMappingConfiguration
    }),
    __metadata("design:type", RateMappingConfiguration)
], CreateRateMappingRequest.prototype, "mappingConfiguration", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Whether the mapping is active', default: true }),
    __metadata("design:type", Boolean)
], CreateRateMappingRequest.prototype, "isActive", void 0);
/**
 * Update rate mapping request
 */
class UpdateRateMappingRequest {
    internalRateName;
    externalRateId;
    externalRateName;
    mappingConfiguration;
    isActive;
}
exports.UpdateRateMappingRequest = UpdateRateMappingRequest;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Internal rate name' }),
    __metadata("design:type", String)
], UpdateRateMappingRequest.prototype, "internalRateName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'External rate ID in provider system' }),
    __metadata("design:type", String)
], UpdateRateMappingRequest.prototype, "externalRateId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'External rate name in provider system' }),
    __metadata("design:type", String)
], UpdateRateMappingRequest.prototype, "externalRateName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Rate mapping configuration',
        type: () => RateMappingConfiguration
    }),
    __metadata("design:type", RateMappingConfiguration)
], UpdateRateMappingRequest.prototype, "mappingConfiguration", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Whether the mapping is active' }),
    __metadata("design:type", Boolean)
], UpdateRateMappingRequest.prototype, "isActive", void 0);
/**
 * Delete mapping response
 */
class DeleteMappingResponse {
    message;
    deletedAt;
}
exports.DeleteMappingResponse = DeleteMappingResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Success message', example: 'Room mapping deleted successfully' }),
    __metadata("design:type", String)
], DeleteMappingResponse.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Deletion timestamp (ISO format)',
        example: '2026-02-14T10:30:00Z'
    }),
    __metadata("design:type", String)
], DeleteMappingResponse.prototype, "deletedAt", void 0);
//# sourceMappingURL=mapping.types.js.map