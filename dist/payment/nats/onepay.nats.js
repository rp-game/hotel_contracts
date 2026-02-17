"use strict";
/**
 * OnePay Payment Gateway NATS Contract Definitions
 *
 * Defines request/response interfaces for all OnePay payment operations
 * including payment creation, verification, refunds, and status queries.
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
exports.GetOnePayPaymentStatusData = exports.GetOnePayPaymentStatusNatsRequest = exports.VerifyOnePayPaymentResponse = exports.VerifyOnePayPaymentRequest = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
/**
 * Request payload for payment.onepay.verify pattern
 * Used to verify OnePay callback parameters and update payment status
 */
class VerifyOnePayPaymentRequest {
    tenantId;
    hotelId;
    paymentId;
    gatewayParams;
}
exports.VerifyOnePayPaymentRequest = VerifyOnePayPaymentRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID', example: 'tenant-uuid' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], VerifyOnePayPaymentRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID', example: 'hotel-uuid' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], VerifyOnePayPaymentRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Payment ID to verify', example: 'pay-uuid' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], VerifyOnePayPaymentRequest.prototype, "paymentId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'VPC parameters from OnePay callback', type: 'object', additionalProperties: { type: 'string' } }),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", Object)
], VerifyOnePayPaymentRequest.prototype, "gatewayParams", void 0);
/**
 * Response payload for payment.onepay.verify pattern
 * Confirms payment status after verification
 */
class VerifyOnePayPaymentResponse {
    paymentId;
    status;
    transactionId;
    amount;
    gatewayTransactionId;
    card;
    authCode;
    verifiedAt;
}
exports.VerifyOnePayPaymentResponse = VerifyOnePayPaymentResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Payment ID', example: 'pay-uuid' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], VerifyOnePayPaymentResponse.prototype, "paymentId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Payment status', enum: ['COMPLETED', 'FAILED', 'PENDING'], example: 'COMPLETED' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], VerifyOnePayPaymentResponse.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Internal transaction ID', example: 'txn-uuid' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], VerifyOnePayPaymentResponse.prototype, "transactionId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Payment amount', example: 500000 }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], VerifyOnePayPaymentResponse.prototype, "amount", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'OnePay gateway transaction number', example: '123456' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], VerifyOnePayPaymentResponse.prototype, "gatewayTransactionId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Card information (last 4 digits, card type)', example: '4111' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], VerifyOnePayPaymentResponse.prototype, "card", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Bank authorization code', example: 'AUTH123' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], VerifyOnePayPaymentResponse.prototype, "authCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'When payment was verified (ISO 8601)', example: '2026-02-17T10:00:00Z' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], VerifyOnePayPaymentResponse.prototype, "verifiedAt", void 0);
// ============================================================================
// GET PAYMENT STATUS (by Payment ID)
// ============================================================================
/**
 * Request payload for payment.onepay.paymentStatus pattern
 * Used to retrieve payment status by internal payment ID (for polling)
 */
class GetOnePayPaymentStatusNatsRequest {
    tenantId;
    hotelId;
    paymentId;
}
exports.GetOnePayPaymentStatusNatsRequest = GetOnePayPaymentStatusNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID', example: 'tenant-uuid' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetOnePayPaymentStatusNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID', example: 'hotel-uuid' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetOnePayPaymentStatusNatsRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Payment ID to look up', example: 'pay-uuid' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetOnePayPaymentStatusNatsRequest.prototype, "paymentId", void 0);
/**
 * Response payload for payment.onepay.paymentStatus pattern
 * Contains complete payment details for polling use case
 */
class GetOnePayPaymentStatusData {
    paymentId;
    status;
    amount;
    currency;
    bookingId;
    paidAt;
    transactionId;
    card;
    createdAt;
    updatedAt;
}
exports.GetOnePayPaymentStatusData = GetOnePayPaymentStatusData;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Payment ID', example: 'pay-uuid' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetOnePayPaymentStatusData.prototype, "paymentId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Current payment status', enum: ['PENDING', 'COMPLETED', 'FAILED'], example: 'PENDING' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetOnePayPaymentStatusData.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Payment amount', example: 500000 }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], GetOnePayPaymentStatusData.prototype, "amount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Currency code', example: 'VND' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetOnePayPaymentStatusData.prototype, "currency", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Associated booking ID', example: 'booking-uuid' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetOnePayPaymentStatusData.prototype, "bookingId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'When payment was completed (ISO 8601)', example: '2026-02-17T10:00:00Z' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetOnePayPaymentStatusData.prototype, "paidAt", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'OnePay transaction ID', example: 'txn-uuid' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetOnePayPaymentStatusData.prototype, "transactionId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Card information', example: '4111' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetOnePayPaymentStatusData.prototype, "card", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'When payment record was created (ISO 8601)', example: '2026-02-17T09:00:00Z' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetOnePayPaymentStatusData.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'When payment was last updated (ISO 8601)', example: '2026-02-17T09:30:00Z' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetOnePayPaymentStatusData.prototype, "updatedAt", void 0);
//# sourceMappingURL=onepay.nats.js.map