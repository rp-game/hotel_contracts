"use strict";
/**
 * Cancel Room Move NATS Contract
 *
 * NATS Pattern: room-move.cancel
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
exports.CancelRoomMoveRequest = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CancelRoomMoveRequest {
    moveRequestId;
    cancelledBy;
    reason;
    refundApplicable;
    tenantId;
    hotelId;
}
exports.CancelRoomMoveRequest = CancelRoomMoveRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Move request ID' }),
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CancelRoomMoveRequest.prototype, "moveRequestId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'User cancelling the move' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CancelRoomMoveRequest.prototype, "cancelledBy", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Cancellation reason' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CancelRoomMoveRequest.prototype, "reason", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Whether refund is applicable' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CancelRoomMoveRequest.prototype, "refundApplicable", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CancelRoomMoveRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CancelRoomMoveRequest.prototype, "hotelId", void 0);
//# sourceMappingURL=cancel-room-move.nats.js.map