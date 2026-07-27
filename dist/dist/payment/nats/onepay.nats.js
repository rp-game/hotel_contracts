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
exports.GetOnePayPaymentStatusData = exports.GetOnePayPaymentStatusNatsRequest = exports.VerifyOnePayPaymentResponse = exports.VerifyOnePayPaymentRequest = exports.CreateOnePayPaymentResponse = exports.CreateOnePayPaymentRequest = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
/**
 * Customer information nested in payment requests
 */
class CustomerInfo {
    email;
    name;
    phone;
}
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Customer email', example: 'customer@example.com' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CustomerInfo.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Customer full name', example: 'John Doe' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CustomerInfo.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Customer phone number', example: '+84912345678' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CustomerInfo.prototype, "phone", void 0);
/**
 * Request payload for payment.onepay.create pattern
 * Used to initiate a OnePay payment and get payment URL
 */
class CreateOnePayPaymentRequest {
    tenantId;
    hotelId;
    chainId;
    bookingId;
    amount;
    currency;
    customerInfo;
    orderInfo;
    returnUrl;
    ipAddress;
    metadata;
}
exports.CreateOnePayPaymentRequest = CreateOnePayPaymentRequest;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Tenant ID (resolved from JWT if omitted)', example: 'tenant-uuid' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateOnePayPaymentRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Hotel ID (resolved from JWT if omitted)', example: 'hotel-uuid' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateOnePayPaymentRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Chain ID for multi-level gateway config', example: 'chain-uuid' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateOnePayPaymentRequest.prototype, "chainId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Booking ID reference', example: 'booking-uuid' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateOnePayPaymentRequest.prototype, "bookingId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Payment amount in VND', example: 5000000 }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateOnePayPaymentRequest.prototype, "amount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Currency code', example: 'VND' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateOnePayPaymentRequest.prototype, "currency", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Customer information',
        type: 'object',
        properties: {
            email: { type: 'string', example: 'customer@example.com' },
            name: { type: 'string', example: 'John Doe' },
            phone: { type: 'string', example: '+84912345678' },
        },
    }),
    (0, class_validator_1.IsObject)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => CustomerInfo),
    __metadata("design:type", CustomerInfo)
], CreateOnePayPaymentRequest.prototype, "customerInfo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Order/Invoice description', example: 'Thanh toán phòng khách sạn' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateOnePayPaymentRequest.prototype, "orderInfo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'URL to redirect customer after payment', example: 'https://app.example.com/callback' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateOnePayPaymentRequest.prototype, "returnUrl", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Client IP address for fraud detection', example: '192.168.1.1' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateOnePayPaymentRequest.prototype, "ipAddress", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Additional metadata to store with payment', type: 'object', additionalProperties: true }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", Object)
], CreateOnePayPaymentRequest.prototype, "metadata", void 0);
/**
 * Response payload for payment.onepay.create pattern
 * Contains payment URL and transaction details
 */
class CreateOnePayPaymentResponse {
    paymentId;
    transactionId;
    paymentUrl;
    amount;
    currency;
    expiresAt;
    createdAt;
}
exports.CreateOnePayPaymentResponse = CreateOnePayPaymentResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Internal payment ID for tracking', example: 'pay-uuid' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateOnePayPaymentResponse.prototype, "paymentId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'OnePay transaction reference', example: 'txn-123456' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateOnePayPaymentResponse.prototype, "transactionId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'OnePay payment gateway URL - redirect customer to this', example: 'https://onepay.vn/pay?...' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateOnePayPaymentResponse.prototype, "paymentUrl", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Payment amount', example: 5000000 }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateOnePayPaymentResponse.prototype, "amount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Currency code', example: 'VND' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateOnePayPaymentResponse.prototype, "currency", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'When this payment URL expires (ISO 8601)', example: '2026-02-17T10:15:00Z' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateOnePayPaymentResponse.prototype, "expiresAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'When payment record was created (ISO 8601)', example: '2026-02-17T10:00:00Z' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateOnePayPaymentResponse.prototype, "createdAt", void 0);
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
    (0, swagger_1.ApiPropertyOptional)({ description: 'Tenant ID (resolved from JWT if omitted)', example: 'tenant-uuid' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], VerifyOnePayPaymentRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Hotel ID (resolved from JWT if omitted)', example: 'hotel-uuid' }),
    (0, class_validator_1.IsOptional)(),
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
    (0, swagger_1.ApiPropertyOptional)({ description: 'Tenant ID (resolved from JWT if omitted)', example: 'tenant-uuid' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetOnePayPaymentStatusNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Hotel ID (resolved from JWT if omitted)', example: 'hotel-uuid' }),
    (0, class_validator_1.IsOptional)(),
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