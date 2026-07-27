"use strict";
/**
 * Approve Room Move NATS Contract
 *
 * NATS Pattern: room-move.approve
 * Handler: booking-service
 * Called by: api-gateway
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
exports.ApproveRoomMoveRequest = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class ApproveRoomMoveRequest {
    moveRequestId;
    approved;
    approvedBy;
    approvedByName;
    notes;
    approvalNotes;
    rejectionReason;
    targetRoomId;
    targetRoomNumber;
    targetRoomTypeId;
    rateDifference;
    additionalCharges;
    refundAmount;
    isChargeRequired;
    guestApprovalRequired;
    scheduledMoveTime;
    estimatedDurationMinutes;
    porterRequired;
    assignedPorterId;
    assignedPorterName;
    // Notification settings
    notifyGuest;
    notifyHousekeeping;
    generateKeyCards;
    guestApprovalMessage;
    tenantId;
    hotelId;
}
exports.ApproveRoomMoveRequest = ApproveRoomMoveRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Move request ID' }),
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ApproveRoomMoveRequest.prototype, "moveRequestId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Whether the move is approved (true) or rejected (false)' }),
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Boolean)
], ApproveRoomMoveRequest.prototype, "approved", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'User approving the move' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ApproveRoomMoveRequest.prototype, "approvedBy", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Name of user approving the move' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ApproveRoomMoveRequest.prototype, "approvedByName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Approval notes' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ApproveRoomMoveRequest.prototype, "notes", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Approval notes (alias)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ApproveRoomMoveRequest.prototype, "approvalNotes", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Rejection reason (when approved=false)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ApproveRoomMoveRequest.prototype, "rejectionReason", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Target room ID (override)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ApproveRoomMoveRequest.prototype, "targetRoomId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Target room number' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ApproveRoomMoveRequest.prototype, "targetRoomNumber", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Target room type ID' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ApproveRoomMoveRequest.prototype, "targetRoomTypeId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Rate difference' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ApproveRoomMoveRequest.prototype, "rateDifference", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Additional charges' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ApproveRoomMoveRequest.prototype, "additionalCharges", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Refund amount' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ApproveRoomMoveRequest.prototype, "refundAmount", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Whether charges are required' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], ApproveRoomMoveRequest.prototype, "isChargeRequired", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Whether guest approval is required' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], ApproveRoomMoveRequest.prototype, "guestApprovalRequired", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Scheduled move time (ISO datetime)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ApproveRoomMoveRequest.prototype, "scheduledMoveTime", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Estimated duration in minutes' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ApproveRoomMoveRequest.prototype, "estimatedDurationMinutes", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Whether porter is required' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], ApproveRoomMoveRequest.prototype, "porterRequired", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Assigned porter ID' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ApproveRoomMoveRequest.prototype, "assignedPorterId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Assigned porter name' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ApproveRoomMoveRequest.prototype, "assignedPorterName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Whether to notify guest' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], ApproveRoomMoveRequest.prototype, "notifyGuest", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Whether to notify housekeeping' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], ApproveRoomMoveRequest.prototype, "notifyHousekeeping", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Whether to generate key cards' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], ApproveRoomMoveRequest.prototype, "generateKeyCards", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Guest approval message' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ApproveRoomMoveRequest.prototype, "guestApprovalMessage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ApproveRoomMoveRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ApproveRoomMoveRequest.prototype, "hotelId", void 0);
//# sourceMappingURL=approve-room-move.nats.js.map