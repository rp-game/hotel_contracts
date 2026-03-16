"use strict";
/**
 * Execute Room Move NATS Contract
 *
 * NATS Pattern: room-move.execute
 * Handler: booking-service
 * Called by: api-gateway
 * Modes: standard, mobile-start, mobile-complete, quick-transfer
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
exports.ExecuteRoomMoveRequest = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class ExecuteRoomMoveRequest {
    moveRequestId;
    executedBy;
    mode;
    actualDuration;
    notes;
    tenantId;
    hotelId;
}
exports.ExecuteRoomMoveRequest = ExecuteRoomMoveRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Move request ID' }),
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ExecuteRoomMoveRequest.prototype, "moveRequestId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'User executing the move' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ExecuteRoomMoveRequest.prototype, "executedBy", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Execution mode', enum: ['standard', 'mobile-start', 'mobile-complete', 'quick-transfer'] }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ExecuteRoomMoveRequest.prototype, "mode", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Actual duration in minutes' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ExecuteRoomMoveRequest.prototype, "actualDuration", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Execution notes' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ExecuteRoomMoveRequest.prototype, "notes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ExecuteRoomMoveRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ExecuteRoomMoveRequest.prototype, "hotelId", void 0);
//# sourceMappingURL=execute-room-move.nats.js.map