"use strict";
/**
 * Emergency Room Move NATS Contract
 *
 * NATS Pattern: room-move.emergency
 * Handler: booking-service
 * Called by: api-gateway
 * Priority: Always URGENT for emergency moves
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
exports.EmergencyRoomMoveRequest = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class EmergencyRoomMoveRequest {
    bookingId;
    currentRoomId;
    reason;
    requestedBy;
    emergencyType;
    notes;
    tenantId;
    hotelId;
}
exports.EmergencyRoomMoveRequest = EmergencyRoomMoveRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Booking ID' }),
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], EmergencyRoomMoveRequest.prototype, "bookingId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Current room ID' }),
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], EmergencyRoomMoveRequest.prototype, "currentRoomId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Emergency reason' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], EmergencyRoomMoveRequest.prototype, "reason", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'User requesting the emergency move' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], EmergencyRoomMoveRequest.prototype, "requestedBy", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Emergency type', enum: ['guest-complaint', 'maintenance-issue', 'safety-hazard', 'other'] }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], EmergencyRoomMoveRequest.prototype, "emergencyType", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Additional notes' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], EmergencyRoomMoveRequest.prototype, "notes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], EmergencyRoomMoveRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], EmergencyRoomMoveRequest.prototype, "hotelId", void 0);
//# sourceMappingURL=emergency-room-move.nats.js.map