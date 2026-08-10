"use strict";
/**
 * Void Booking Payment REST DTO
 * Body cho POST /bookings/:id/payments/:paymentId/void (huỷ 1 thanh toán công nợ — đảo AR).
 * bookingId/paymentId lấy từ @Param; tenantId/hotelId/voidedBy auto-inject từ JWT ở gateway.
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
exports.VoidBookingPaymentDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class VoidBookingPaymentDto {
    reason;
    tenantId;
    hotelId;
    voidedBy;
}
exports.VoidBookingPaymentDto = VoidBookingPaymentDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Lý do huỷ thanh toán' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], VoidBookingPaymentDto.prototype, "reason", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Tenant ID (auto-injected)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], VoidBookingPaymentDto.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Hotel ID (auto-injected)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], VoidBookingPaymentDto.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'User ID huỷ (auto-injected)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], VoidBookingPaymentDto.prototype, "voidedBy", void 0);
//# sourceMappingURL=void-payment.dto.js.map