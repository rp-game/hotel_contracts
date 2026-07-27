"use strict";
/**
 * Room Move Pricing NATS Contracts
 *
 * NATS Patterns:
 * - room-move.pricing.calculate
 * - room-move.pricing.quick-estimate
 * Handler: pricing-service
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
exports.QuickRoomMovePricingEstimateRequest = exports.CalculateRoomMovePricingRequest = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
/**
 * Calculate Room Move Pricing Request
 * Pattern: room-move.pricing.calculate
 */
class CalculateRoomMovePricingRequest {
    bookingId;
    currentRoomId;
    targetRoomId;
    checkInDate;
    checkOutDate;
    tenantId;
    hotelId;
}
exports.CalculateRoomMovePricingRequest = CalculateRoomMovePricingRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Booking ID' }),
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CalculateRoomMovePricingRequest.prototype, "bookingId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Current room ID' }),
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CalculateRoomMovePricingRequest.prototype, "currentRoomId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Target room ID' }),
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CalculateRoomMovePricingRequest.prototype, "targetRoomId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Check-in date (ISO date)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], CalculateRoomMovePricingRequest.prototype, "checkInDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Check-out date (ISO date)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], CalculateRoomMovePricingRequest.prototype, "checkOutDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CalculateRoomMovePricingRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CalculateRoomMovePricingRequest.prototype, "hotelId", void 0);
/**
 * Quick Room Move Pricing Estimate Request
 * Pattern: room-move.pricing.quick-estimate
 * Faster calculation with fewer details
 */
class QuickRoomMovePricingEstimateRequest {
    currentRoomId;
    targetRoomId;
    tenantId;
    hotelId;
}
exports.QuickRoomMovePricingEstimateRequest = QuickRoomMovePricingEstimateRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Current room ID' }),
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], QuickRoomMovePricingEstimateRequest.prototype, "currentRoomId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Target room ID' }),
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], QuickRoomMovePricingEstimateRequest.prototype, "targetRoomId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], QuickRoomMovePricingEstimateRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], QuickRoomMovePricingEstimateRequest.prototype, "hotelId", void 0);
//# sourceMappingURL=room-move-pricing.nats.js.map