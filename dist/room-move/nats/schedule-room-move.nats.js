"use strict";
/**
 * Schedule Room Move NATS Contract
 *
 * NATS Pattern: room-move.schedule
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
exports.ScheduleRoomMoveRequest = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class ScheduleRoomMoveRequest {
    moveRequestId;
    scheduledFor;
    estimatedDuration;
    notes;
    tenantId;
    hotelId;
}
exports.ScheduleRoomMoveRequest = ScheduleRoomMoveRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Move request ID' }),
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ScheduleRoomMoveRequest.prototype, "moveRequestId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Scheduled move time (ISO datetime)' }),
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ScheduleRoomMoveRequest.prototype, "scheduledFor", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Estimated duration in minutes' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ScheduleRoomMoveRequest.prototype, "estimatedDuration", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Scheduling notes' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ScheduleRoomMoveRequest.prototype, "notes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ScheduleRoomMoveRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ScheduleRoomMoveRequest.prototype, "hotelId", void 0);
//# sourceMappingURL=schedule-room-move.nats.js.map