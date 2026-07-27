"use strict";
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
exports.RoomMovePricingDetails = exports.AvailableRoom = exports.RoomMoveSearchResult = exports.RoomMoveListItem = exports.RoomMoveDetails = void 0;
const swagger_1 = require("@nestjs/swagger");
const enums_1 = require("../enums");
/**
 * Complete room move details record
 * Contains all metadata and history of a room move request
 */
class RoomMoveDetails {
    moveRequestId;
    tenantId;
    hotelId;
    bookingId;
    currentRoomId;
    targetRoomId;
    reason;
    status;
    priority;
    requestedBy;
    requestedAt;
    approvedBy;
    approvedAt;
    scheduledFor;
    completedAt;
    cancelledAt;
    notes;
    estimatedDuration;
    actualDuration;
}
exports.RoomMoveDetails = RoomMoveDetails;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Move request ID' }),
    __metadata("design:type", String)
], RoomMoveDetails.prototype, "moveRequestId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], RoomMoveDetails.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    __metadata("design:type", String)
], RoomMoveDetails.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Booking ID' }),
    __metadata("design:type", String)
], RoomMoveDetails.prototype, "bookingId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Current room ID' }),
    __metadata("design:type", String)
], RoomMoveDetails.prototype, "currentRoomId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Target room ID' }),
    __metadata("design:type", String)
], RoomMoveDetails.prototype, "targetRoomId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Move reason' }),
    __metadata("design:type", String)
], RoomMoveDetails.prototype, "reason", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Move status', enum: enums_1.RoomMoveStatus }),
    __metadata("design:type", String)
], RoomMoveDetails.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Move priority', enum: enums_1.RoomMovePriority }),
    __metadata("design:type", String)
], RoomMoveDetails.prototype, "priority", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Requested by user ID' }),
    __metadata("design:type", String)
], RoomMoveDetails.prototype, "requestedBy", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Request timestamp (ISO datetime)' }),
    __metadata("design:type", String)
], RoomMoveDetails.prototype, "requestedAt", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Approved by user ID' }),
    __metadata("design:type", String)
], RoomMoveDetails.prototype, "approvedBy", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Approval timestamp (ISO datetime)' }),
    __metadata("design:type", String)
], RoomMoveDetails.prototype, "approvedAt", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Scheduled move time (ISO datetime)' }),
    __metadata("design:type", String)
], RoomMoveDetails.prototype, "scheduledFor", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Completion timestamp (ISO datetime)' }),
    __metadata("design:type", String)
], RoomMoveDetails.prototype, "completedAt", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Cancellation timestamp (ISO datetime)' }),
    __metadata("design:type", String)
], RoomMoveDetails.prototype, "cancelledAt", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Notes' }),
    __metadata("design:type", String)
], RoomMoveDetails.prototype, "notes", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Estimated duration in minutes' }),
    __metadata("design:type", Number)
], RoomMoveDetails.prototype, "estimatedDuration", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Actual duration in minutes' }),
    __metadata("design:type", Number)
], RoomMoveDetails.prototype, "actualDuration", void 0);
/**
 * Minimal room move item for list views
 * Used in search results and dashboards
 */
class RoomMoveListItem {
    moveRequestId;
    bookingId;
    currentRoomId;
    targetRoomId;
    status;
    priority;
    requestedAt;
    requestedBy;
}
exports.RoomMoveListItem = RoomMoveListItem;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Move request ID' }),
    __metadata("design:type", String)
], RoomMoveListItem.prototype, "moveRequestId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Booking ID' }),
    __metadata("design:type", String)
], RoomMoveListItem.prototype, "bookingId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Current room ID' }),
    __metadata("design:type", String)
], RoomMoveListItem.prototype, "currentRoomId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Target room ID' }),
    __metadata("design:type", String)
], RoomMoveListItem.prototype, "targetRoomId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Move status', enum: enums_1.RoomMoveStatus }),
    __metadata("design:type", String)
], RoomMoveListItem.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Move priority', enum: enums_1.RoomMovePriority }),
    __metadata("design:type", String)
], RoomMoveListItem.prototype, "priority", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Request timestamp (ISO datetime)' }),
    __metadata("design:type", String)
], RoomMoveListItem.prototype, "requestedAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Requested by user ID' }),
    __metadata("design:type", String)
], RoomMoveListItem.prototype, "requestedBy", void 0);
/**
 * Paginated search results for room moves
 */
class RoomMoveSearchResult {
    items;
    total;
    page;
    limit;
    hasMore;
}
exports.RoomMoveSearchResult = RoomMoveSearchResult;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room move items', type: [RoomMoveListItem] }),
    __metadata("design:type", Array)
], RoomMoveSearchResult.prototype, "items", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total count' }),
    __metadata("design:type", Number)
], RoomMoveSearchResult.prototype, "total", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Current page' }),
    __metadata("design:type", Number)
], RoomMoveSearchResult.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Items per page' }),
    __metadata("design:type", Number)
], RoomMoveSearchResult.prototype, "limit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Whether more results exist' }),
    __metadata("design:type", Boolean)
], RoomMoveSearchResult.prototype, "hasMore", void 0);
/**
 * Available room details for assignment
 * Returned when searching for available rooms for room move
 */
class AvailableRoom {
    roomId;
    roomNumber;
    roomType;
    floor;
    currentStatus;
    features;
    price;
    currency;
}
exports.AvailableRoom = AvailableRoom;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room ID' }),
    __metadata("design:type", String)
], AvailableRoom.prototype, "roomId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room number' }),
    __metadata("design:type", String)
], AvailableRoom.prototype, "roomNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room type' }),
    __metadata("design:type", String)
], AvailableRoom.prototype, "roomType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Floor number' }),
    __metadata("design:type", Number)
], AvailableRoom.prototype, "floor", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Current room status', enum: ['available', 'occupied', 'dirty', 'maintenance', 'blocked'] }),
    __metadata("design:type", String)
], AvailableRoom.prototype, "currentStatus", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Room features', type: [String] }),
    __metadata("design:type", Array)
], AvailableRoom.prototype, "features", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Room price' }),
    __metadata("design:type", Number)
], AvailableRoom.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Currency code' }),
    __metadata("design:type", String)
], AvailableRoom.prototype, "currency", void 0);
/**
 * Pricing calculation results for room moves
 * Contains pricing breakdown and additional charges
 */
class RoomMovePricingDetails {
    originalPrice;
    newRoomPrice;
    priceDifference;
    adjustmentType;
    refundAmount;
    additionalCharges;
    totalAmount;
    currency;
    calculatedAt;
    validUntil;
}
exports.RoomMovePricingDetails = RoomMovePricingDetails;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Original room price' }),
    __metadata("design:type", Number)
], RoomMovePricingDetails.prototype, "originalPrice", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'New room price' }),
    __metadata("design:type", Number)
], RoomMovePricingDetails.prototype, "newRoomPrice", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Price difference' }),
    __metadata("design:type", Number)
], RoomMovePricingDetails.prototype, "priceDifference", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Adjustment type', enum: ['upgrade', 'downgrade', 'no-change'] }),
    __metadata("design:type", String)
], RoomMovePricingDetails.prototype, "adjustmentType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Refund amount' }),
    __metadata("design:type", Number)
], RoomMovePricingDetails.prototype, "refundAmount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Additional charges' }),
    __metadata("design:type", Number)
], RoomMovePricingDetails.prototype, "additionalCharges", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total amount' }),
    __metadata("design:type", Number)
], RoomMovePricingDetails.prototype, "totalAmount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Currency code' }),
    __metadata("design:type", String)
], RoomMovePricingDetails.prototype, "currency", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Calculation timestamp (ISO datetime)' }),
    __metadata("design:type", String)
], RoomMovePricingDetails.prototype, "calculatedAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Valid until timestamp (ISO datetime)' }),
    __metadata("design:type", String)
], RoomMovePricingDetails.prototype, "validUntil", void 0);
//# sourceMappingURL=room-move.types.js.map