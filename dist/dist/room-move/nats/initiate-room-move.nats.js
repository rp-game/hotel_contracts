"use strict";
/**
 * Initiate Room Move NATS Contract
 *
 * NATS Pattern: room-move.initiate
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
exports.InitiateRoomMoveRequest = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const enums_1 = require("../enums");
class InitiateRoomMoveRequest {
    bookingId;
    currentRoomId;
    targetRoomId;
    targetRoomTypeId;
    reason;
    description;
    internalNotes;
    requestedBy;
    requestedByName;
    priority;
    porterRequired;
    assignedPorterId;
    assignedPorterName;
    guestApprovalRequired;
    preferredMoveTime;
    isEmergency;
    tenantId;
    hotelId;
}
exports.InitiateRoomMoveRequest = InitiateRoomMoveRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Booking ID' }),
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], InitiateRoomMoveRequest.prototype, "bookingId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Current room ID' }),
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], InitiateRoomMoveRequest.prototype, "currentRoomId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Target room ID' }),
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], InitiateRoomMoveRequest.prototype, "targetRoomId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Target room type ID' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], InitiateRoomMoveRequest.prototype, "targetRoomTypeId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Reason for room move' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], InitiateRoomMoveRequest.prototype, "reason", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Description / additional details' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], InitiateRoomMoveRequest.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Internal notes' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], InitiateRoomMoveRequest.prototype, "internalNotes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'User requesting the move' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], InitiateRoomMoveRequest.prototype, "requestedBy", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Name of user requesting the move' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], InitiateRoomMoveRequest.prototype, "requestedByName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Move priority', enum: enums_1.RoomMovePriority }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(enums_1.RoomMovePriority),
    __metadata("design:type", String)
], InitiateRoomMoveRequest.prototype, "priority", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Whether porter is required' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], InitiateRoomMoveRequest.prototype, "porterRequired", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Assigned porter ID' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], InitiateRoomMoveRequest.prototype, "assignedPorterId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Assigned porter name' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], InitiateRoomMoveRequest.prototype, "assignedPorterName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Whether guest approval is required' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], InitiateRoomMoveRequest.prototype, "guestApprovalRequired", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Preferred move time (ISO datetime)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], InitiateRoomMoveRequest.prototype, "preferredMoveTime", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Whether this is an emergency move' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], InitiateRoomMoveRequest.prototype, "isEmergency", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], InitiateRoomMoveRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], InitiateRoomMoveRequest.prototype, "hotelId", void 0);
//# sourceMappingURL=initiate-room-move.nats.js.map