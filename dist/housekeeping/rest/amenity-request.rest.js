"use strict";
/**
 * Amenity Request REST API DTOs
 *
 * Shared classes used by both:
 * - API Gateway REST endpoints (with @ApiProperty decorators)
 * - Housekeeping Service REST endpoints
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
exports.HousekeepingAmenityRequestWithSLAStatusDto = exports.HousekeepingAmenityRequestResponseDto = exports.UpdateHousekeepingAmenityRequestDto = exports.CreateHousekeepingAmenityRequestDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const amenity_request_status_enum_1 = require("../enums/amenity-request-status.enum");
/**
 * Create Housekeeping Amenity Request DTO
 * Used by POST /amenity-requests (housekeeping-service)
 * Separate from booking domain's CreateAmenityRequestDto
 */
class CreateHousekeepingAmenityRequestDto {
    roomId;
    amenityId;
    quantity;
    status;
    notes;
    requestedById;
    tenantId;
    hotelId;
}
exports.CreateHousekeepingAmenityRequestDto = CreateHousekeepingAmenityRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'ID of the room for which the amenity is requested',
        example: 'room-uuid-101',
    }),
    __metadata("design:type", String)
], CreateHousekeepingAmenityRequestDto.prototype, "roomId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'ID of the amenity being requested',
        example: 'amenity-uuid-abc',
    }),
    __metadata("design:type", String)
], CreateHousekeepingAmenityRequestDto.prototype, "amenityId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Quantity of the amenity requested',
        type: Number,
        default: 1,
        example: 2,
    }),
    __metadata("design:type", Number)
], CreateHousekeepingAmenityRequestDto.prototype, "quantity", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Status of the amenity request',
        enum: Object.values(amenity_request_status_enum_1.AmenityRequestStatus),
        default: amenity_request_status_enum_1.AmenityRequestStatus.PENDING,
    }),
    __metadata("design:type", String)
], CreateHousekeepingAmenityRequestDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Optional notes for the request',
        type: String,
        example: 'Guest in room 101 needs 2 extra towels.',
    }),
    __metadata("design:type", String)
], CreateHousekeepingAmenityRequestDto.prototype, "notes", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'ID of the staff member who requested the amenity',
        type: String,
        example: 'staff-uuid-xyz',
    }),
    __metadata("design:type", String)
], CreateHousekeepingAmenityRequestDto.prototype, "requestedById", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Tenant ID',
        type: String,
        example: 'tenant-uuid-123',
    }),
    __metadata("design:type", String)
], CreateHousekeepingAmenityRequestDto.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Hotel ID',
        type: String,
        example: 'hotel-uuid-456',
    }),
    __metadata("design:type", String)
], CreateHousekeepingAmenityRequestDto.prototype, "hotelId", void 0);
/**
 * Update Housekeeping Amenity Request DTO
 * Used by PATCH /amenity-requests/:id (housekeeping-service)
 * Allows updating status, assigned staff, notes, and completion
 * Separate from booking domain's UpdateAmenityRequestDto
 */
class UpdateHousekeepingAmenityRequestDto {
    amenityId;
    requestedById;
    fulfilledById;
    status;
    assignedToId;
    fulfilledAt;
    notes;
    photos;
}
exports.UpdateHousekeepingAmenityRequestDto = UpdateHousekeepingAmenityRequestDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Amenity ID if changing the amenity',
        type: String,
    }),
    __metadata("design:type", String)
], UpdateHousekeepingAmenityRequestDto.prototype, "amenityId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Staff ID who requested (if changing)',
        type: String,
    }),
    __metadata("design:type", Object)
], UpdateHousekeepingAmenityRequestDto.prototype, "requestedById", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Staff ID who fulfilled the request',
        type: String,
    }),
    __metadata("design:type", Object)
], UpdateHousekeepingAmenityRequestDto.prototype, "fulfilledById", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Current status of the request',
        enum: Object.values(amenity_request_status_enum_1.AmenityRequestStatus),
    }),
    __metadata("design:type", String)
], UpdateHousekeepingAmenityRequestDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Assign request to a specific housekeeping staff member (triggers reassignment logic)',
        type: String,
    }),
    __metadata("design:type", Object)
], UpdateHousekeepingAmenityRequestDto.prototype, "assignedToId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Timestamp when the request was fulfilled (ISO string or null)',
        type: String,
        nullable: true,
    }),
    __metadata("design:type", Object)
], UpdateHousekeepingAmenityRequestDto.prototype, "fulfilledAt", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Additional notes about the request or fulfillment',
        type: String,
    }),
    __metadata("design:type", String)
], UpdateHousekeepingAmenityRequestDto.prototype, "notes", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Photos attached to the request/notes',
        type: [String],
    }),
    __metadata("design:type", Array)
], UpdateHousekeepingAmenityRequestDto.prototype, "photos", void 0);
/**
 * Housekeeping Amenity Request Response DTO
 * Returned by GET endpoints (housekeeping-service)
 */
class HousekeepingAmenityRequestResponseDto {
    id;
    amenityId;
    roomId;
    tenantId;
    hotelId;
    status;
    requestedById;
    assignedToId;
    assignedAt;
    fulfilledById;
    requestedAt;
    fulfilledAt;
    notes;
    photos;
    slaDeadlineFirstResponse;
    slaDeadlineResolution;
    slaBreach;
    createdAt;
    updatedAt;
}
exports.HousekeepingAmenityRequestResponseDto = HousekeepingAmenityRequestResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Request ID' }),
    __metadata("design:type", String)
], HousekeepingAmenityRequestResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Amenity ID' }),
    __metadata("design:type", String)
], HousekeepingAmenityRequestResponseDto.prototype, "amenityId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room ID' }),
    __metadata("design:type", String)
], HousekeepingAmenityRequestResponseDto.prototype, "roomId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], HousekeepingAmenityRequestResponseDto.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    __metadata("design:type", String)
], HousekeepingAmenityRequestResponseDto.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Status of the request',
        enum: Object.values(amenity_request_status_enum_1.AmenityRequestStatus),
    }),
    __metadata("design:type", String)
], HousekeepingAmenityRequestResponseDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Staff ID who requested', type: String }),
    __metadata("design:type", String)
], HousekeepingAmenityRequestResponseDto.prototype, "requestedById", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Staff ID assigned to fulfill' }),
    __metadata("design:type", String)
], HousekeepingAmenityRequestResponseDto.prototype, "assignedToId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'When assigned to staff' }),
    __metadata("design:type", Date)
], HousekeepingAmenityRequestResponseDto.prototype, "assignedAt", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Staff ID who fulfilled' }),
    __metadata("design:type", String)
], HousekeepingAmenityRequestResponseDto.prototype, "fulfilledById", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Timestamp when requested',
        type: String,
    }),
    __metadata("design:type", Date)
], HousekeepingAmenityRequestResponseDto.prototype, "requestedAt", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Timestamp when fulfilled',
        type: String,
    }),
    __metadata("design:type", Date)
], HousekeepingAmenityRequestResponseDto.prototype, "fulfilledAt", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Additional notes' }),
    __metadata("design:type", String)
], HousekeepingAmenityRequestResponseDto.prototype, "notes", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Attached photos' }),
    __metadata("design:type", Array)
], HousekeepingAmenityRequestResponseDto.prototype, "photos", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'SLA Deadline for first response',
        type: String,
    }),
    __metadata("design:type", Date)
], HousekeepingAmenityRequestResponseDto.prototype, "slaDeadlineFirstResponse", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'SLA Deadline for resolution',
        type: String,
    }),
    __metadata("design:type", Date)
], HousekeepingAmenityRequestResponseDto.prototype, "slaDeadlineResolution", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Whether SLA was breached' }),
    __metadata("design:type", Boolean)
], HousekeepingAmenityRequestResponseDto.prototype, "slaBreach", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Creation timestamp' }),
    __metadata("design:type", Date)
], HousekeepingAmenityRequestResponseDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Last update timestamp' }),
    __metadata("design:type", Date)
], HousekeepingAmenityRequestResponseDto.prototype, "updatedAt", void 0);
/**
 * Housekeeping Amenity Request with SLA Status DTO
 * Extended response that includes computed SLA status
 * Used by supervisor and staff views
 */
class HousekeepingAmenityRequestWithSLAStatusDto extends HousekeepingAmenityRequestResponseDto {
    slaStatus;
    minutesUntilBreach;
}
exports.HousekeepingAmenityRequestWithSLAStatusDto = HousekeepingAmenityRequestWithSLAStatusDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Current SLA status: ON_TRACK, WARNING, BREACHED',
        enum: ['ON_TRACK', 'WARNING', 'BREACHED'],
    }),
    __metadata("design:type", String)
], HousekeepingAmenityRequestWithSLAStatusDto.prototype, "slaStatus", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Minutes remaining until SLA breach (null if no SLA)',
        type: Number,
    }),
    __metadata("design:type", Object)
], HousekeepingAmenityRequestWithSLAStatusDto.prototype, "minutesUntilBreach", void 0);
//# sourceMappingURL=amenity-request.rest.js.map