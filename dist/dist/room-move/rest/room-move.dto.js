"use strict";
/**
 * Room Move REST DTOs
 * REST request/response shapes for room-move endpoints.
 * Request DTOs: what the controller @Body() receives (no tenantId/hotelId — from headers/JWT)
 * Response DTOs: what Swagger shows
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
exports.RoomMoveDashboardStatsDto = exports.RoomMovePricingResponseDto = exports.AvailableRoomResponseDto = exports.RoomMoveSearchResponseDto = exports.RoomMoveResponseDto = exports.CalculateMovePricingDto = exports.QuickTransferRoomDto = exports.CancelRoomMoveDto = exports.ExecuteRoomMoveDto = exports.ScheduleRoomMoveDto = exports.RejectRoomMoveDto = exports.ApproveRoomMoveDto = exports.InitiateRoomMoveDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const enums_1 = require("../enums");
// ============= REQUEST DTOs =============
class InitiateRoomMoveDto {
    bookingId;
    currentRoomId;
    targetRoomId;
    reason;
    priority;
    description;
}
exports.InitiateRoomMoveDto = InitiateRoomMoveDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Booking ID' }),
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], InitiateRoomMoveDto.prototype, "bookingId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Current room ID' }),
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], InitiateRoomMoveDto.prototype, "currentRoomId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Target room ID' }),
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], InitiateRoomMoveDto.prototype, "targetRoomId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Reason for room move', enum: enums_1.RoomMoveReason }),
    (0, class_validator_1.IsEnum)(enums_1.RoomMoveReason),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], InitiateRoomMoveDto.prototype, "reason", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Move priority level', enum: enums_1.RoomMovePriority }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(enums_1.RoomMovePriority),
    __metadata("design:type", String)
], InitiateRoomMoveDto.prototype, "priority", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Description / additional details' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], InitiateRoomMoveDto.prototype, "description", void 0);
class ApproveRoomMoveDto {
    notes;
}
exports.ApproveRoomMoveDto = ApproveRoomMoveDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Approval notes' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ApproveRoomMoveDto.prototype, "notes", void 0);
class RejectRoomMoveDto {
    reason;
    notes;
}
exports.RejectRoomMoveDto = RejectRoomMoveDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Rejection reason' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], RejectRoomMoveDto.prototype, "reason", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Additional notes' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RejectRoomMoveDto.prototype, "notes", void 0);
class ScheduleRoomMoveDto {
    scheduledMoveTime;
    estimatedDurationMinutes;
    notes;
}
exports.ScheduleRoomMoveDto = ScheduleRoomMoveDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Scheduled move time (ISO 8601)' }),
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ScheduleRoomMoveDto.prototype, "scheduledMoveTime", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Estimated duration in minutes' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ScheduleRoomMoveDto.prototype, "estimatedDurationMinutes", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Scheduling notes' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ScheduleRoomMoveDto.prototype, "notes", void 0);
class ExecuteRoomMoveDto {
    notes;
}
exports.ExecuteRoomMoveDto = ExecuteRoomMoveDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Execution notes' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ExecuteRoomMoveDto.prototype, "notes", void 0);
class CancelRoomMoveDto {
    reason;
}
exports.CancelRoomMoveDto = CancelRoomMoveDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Cancellation reason' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CancelRoomMoveDto.prototype, "reason", void 0);
class QuickTransferRoomDto {
    newRoomId;
    notes;
}
exports.QuickTransferRoomDto = QuickTransferRoomDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'New room ID to transfer to' }),
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], QuickTransferRoomDto.prototype, "newRoomId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Transfer notes' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], QuickTransferRoomDto.prototype, "notes", void 0);
class CalculateMovePricingDto {
    bookingId;
    targetRoomId;
    checkInDate;
    checkOutDate;
}
exports.CalculateMovePricingDto = CalculateMovePricingDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Booking ID' }),
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CalculateMovePricingDto.prototype, "bookingId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Target room ID' }),
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CalculateMovePricingDto.prototype, "targetRoomId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Check-in date (ISO 8601)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], CalculateMovePricingDto.prototype, "checkInDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Check-out date (ISO 8601)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], CalculateMovePricingDto.prototype, "checkOutDate", void 0);
// ============= RESPONSE DTOs =============
class RoomMoveResponseDto {
    id;
    bookingId;
    currentRoomId;
    currentRoomNumber;
    targetRoomId;
    targetRoomNumber;
    reason;
    status;
    priority;
    moveType;
    rateDifference;
    additionalCharges;
    refundAmount;
    requestedBy;
    requestedByName;
    requestedAt;
    approvedBy;
    approvedAt;
    scheduledMoveTime;
    executedBy;
    executedAt;
    description;
}
exports.RoomMoveResponseDto = RoomMoveResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Move request ID' }),
    __metadata("design:type", String)
], RoomMoveResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Booking ID' }),
    __metadata("design:type", String)
], RoomMoveResponseDto.prototype, "bookingId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Current room ID' }),
    __metadata("design:type", String)
], RoomMoveResponseDto.prototype, "currentRoomId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Current room number' }),
    __metadata("design:type", String)
], RoomMoveResponseDto.prototype, "currentRoomNumber", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Target room ID' }),
    __metadata("design:type", String)
], RoomMoveResponseDto.prototype, "targetRoomId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Target room number' }),
    __metadata("design:type", String)
], RoomMoveResponseDto.prototype, "targetRoomNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Move reason' }),
    __metadata("design:type", String)
], RoomMoveResponseDto.prototype, "reason", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Move status', enum: enums_1.RoomMoveStatus }),
    __metadata("design:type", String)
], RoomMoveResponseDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Move priority', enum: enums_1.RoomMovePriority }),
    __metadata("design:type", String)
], RoomMoveResponseDto.prototype, "priority", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Move type' }),
    __metadata("design:type", String)
], RoomMoveResponseDto.prototype, "moveType", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Rate difference' }),
    __metadata("design:type", Number)
], RoomMoveResponseDto.prototype, "rateDifference", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Additional charges' }),
    __metadata("design:type", Number)
], RoomMoveResponseDto.prototype, "additionalCharges", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Refund amount' }),
    __metadata("design:type", Number)
], RoomMoveResponseDto.prototype, "refundAmount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Requested by user ID' }),
    __metadata("design:type", String)
], RoomMoveResponseDto.prototype, "requestedBy", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Requested by user name' }),
    __metadata("design:type", String)
], RoomMoveResponseDto.prototype, "requestedByName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Request timestamp' }),
    __metadata("design:type", String)
], RoomMoveResponseDto.prototype, "requestedAt", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Approved by user ID' }),
    __metadata("design:type", String)
], RoomMoveResponseDto.prototype, "approvedBy", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Approval timestamp' }),
    __metadata("design:type", String)
], RoomMoveResponseDto.prototype, "approvedAt", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Scheduled move time' }),
    __metadata("design:type", String)
], RoomMoveResponseDto.prototype, "scheduledMoveTime", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Executed by user ID' }),
    __metadata("design:type", String)
], RoomMoveResponseDto.prototype, "executedBy", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Execution timestamp' }),
    __metadata("design:type", String)
], RoomMoveResponseDto.prototype, "executedAt", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Description' }),
    __metadata("design:type", String)
], RoomMoveResponseDto.prototype, "description", void 0);
class RoomMoveSearchResponseDto {
    moves;
    total;
    page;
    limit;
}
exports.RoomMoveSearchResponseDto = RoomMoveSearchResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ type: [RoomMoveResponseDto] }),
    __metadata("design:type", Array)
], RoomMoveSearchResponseDto.prototype, "moves", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total count' }),
    __metadata("design:type", Number)
], RoomMoveSearchResponseDto.prototype, "total", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Current page' }),
    __metadata("design:type", Number)
], RoomMoveSearchResponseDto.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Items per page' }),
    __metadata("design:type", Number)
], RoomMoveSearchResponseDto.prototype, "limit", void 0);
class AvailableRoomResponseDto {
    roomId;
    roomNumber;
    roomTypeName;
    floor;
    baseRate;
    rateDifference;
    isUpgrade;
    currentStatus;
    amenities;
}
exports.AvailableRoomResponseDto = AvailableRoomResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room ID' }),
    __metadata("design:type", String)
], AvailableRoomResponseDto.prototype, "roomId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room number' }),
    __metadata("design:type", String)
], AvailableRoomResponseDto.prototype, "roomNumber", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Room type name' }),
    __metadata("design:type", String)
], AvailableRoomResponseDto.prototype, "roomTypeName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Floor' }),
    __metadata("design:type", Number)
], AvailableRoomResponseDto.prototype, "floor", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Base rate' }),
    __metadata("design:type", Number)
], AvailableRoomResponseDto.prototype, "baseRate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Rate difference from current' }),
    __metadata("design:type", Number)
], AvailableRoomResponseDto.prototype, "rateDifference", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Is upgrade' }),
    __metadata("design:type", Boolean)
], AvailableRoomResponseDto.prototype, "isUpgrade", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Room status' }),
    __metadata("design:type", String)
], AvailableRoomResponseDto.prototype, "currentStatus", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Amenities', type: [String] }),
    __metadata("design:type", Array)
], AvailableRoomResponseDto.prototype, "amenities", void 0);
class RoomMovePricingResponseDto {
    originalPrice;
    newRoomPrice;
    priceDifference;
    adjustmentType;
    refundAmount;
    additionalCharges;
    totalAmount;
    currency;
}
exports.RoomMovePricingResponseDto = RoomMovePricingResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Original room price' }),
    __metadata("design:type", Number)
], RoomMovePricingResponseDto.prototype, "originalPrice", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'New room price' }),
    __metadata("design:type", Number)
], RoomMovePricingResponseDto.prototype, "newRoomPrice", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Price difference' }),
    __metadata("design:type", Number)
], RoomMovePricingResponseDto.prototype, "priceDifference", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Adjustment type' }),
    __metadata("design:type", String)
], RoomMovePricingResponseDto.prototype, "adjustmentType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Refund amount' }),
    __metadata("design:type", Number)
], RoomMovePricingResponseDto.prototype, "refundAmount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Additional charges' }),
    __metadata("design:type", Number)
], RoomMovePricingResponseDto.prototype, "additionalCharges", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total amount' }),
    __metadata("design:type", Number)
], RoomMovePricingResponseDto.prototype, "totalAmount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Currency code' }),
    __metadata("design:type", String)
], RoomMovePricingResponseDto.prototype, "currency", void 0);
class RoomMoveDashboardStatsDto {
    totalMoves;
    pendingApproval;
    scheduled;
    inProgress;
    completedToday;
    averageDuration;
}
exports.RoomMoveDashboardStatsDto = RoomMoveDashboardStatsDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total room moves' }),
    __metadata("design:type", Number)
], RoomMoveDashboardStatsDto.prototype, "totalMoves", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Pending approval count' }),
    __metadata("design:type", Number)
], RoomMoveDashboardStatsDto.prototype, "pendingApproval", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Scheduled count' }),
    __metadata("design:type", Number)
], RoomMoveDashboardStatsDto.prototype, "scheduled", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'In progress count' }),
    __metadata("design:type", Number)
], RoomMoveDashboardStatsDto.prototype, "inProgress", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Completed today count' }),
    __metadata("design:type", Number)
], RoomMoveDashboardStatsDto.prototype, "completedToday", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Average duration in minutes' }),
    __metadata("design:type", Number)
], RoomMoveDashboardStatsDto.prototype, "averageDuration", void 0);
//# sourceMappingURL=room-move.dto.js.map