"use strict";
/**
 * Payment Types
 *
 * Unified contracts for both NATS messages and REST API.
 * All types use class with @ApiProperty for single source of truth.
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
exports.CreatePlatformPaymentRequest = exports.PaymentListResponse = exports.PaymentListQuery = exports.PlatformPayment = void 0;
const swagger_1 = require("@nestjs/swagger");
const enums_1 = require("./enums");
/**
 * Platform Payment
 */
class PlatformPayment {
    id;
    tenantId;
    invoiceId;
    amount;
    currency;
    paymentMethod;
    status;
    paymentDate;
    gateway;
    gatewayTransactionId;
    gatewayResponse;
    paymentDetails;
    processingFee;
    netAmount;
    attemptCount;
    failureReason;
    nextRetryAt;
    refundedAmount;
    refundedAt;
    notes;
    createdAt;
    updatedAt;
}
exports.PlatformPayment = PlatformPayment;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Payment ID' }),
    __metadata("design:type", String)
], PlatformPayment.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], PlatformPayment.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Invoice ID' }),
    __metadata("design:type", String)
], PlatformPayment.prototype, "invoiceId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Payment amount' }),
    __metadata("design:type", Number)
], PlatformPayment.prototype, "amount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Currency code' }),
    __metadata("design:type", String)
], PlatformPayment.prototype, "currency", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: enums_1.PlatformPaymentMethod, description: 'Payment method' }),
    __metadata("design:type", String)
], PlatformPayment.prototype, "paymentMethod", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: enums_1.PaymentStatus, description: 'Payment status' }),
    __metadata("design:type", String)
], PlatformPayment.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Payment date' }),
    __metadata("design:type", Date)
], PlatformPayment.prototype, "paymentDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Payment gateway' }),
    __metadata("design:type", String)
], PlatformPayment.prototype, "gateway", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Gateway transaction ID' }),
    __metadata("design:type", String)
], PlatformPayment.prototype, "gatewayTransactionId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Raw gateway response' }),
    __metadata("design:type", Object)
], PlatformPayment.prototype, "gatewayResponse", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Payment details' }),
    __metadata("design:type", Object)
], PlatformPayment.prototype, "paymentDetails", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Processing fee' }),
    __metadata("design:type", Number)
], PlatformPayment.prototype, "processingFee", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Net amount after fees' }),
    __metadata("design:type", Number)
], PlatformPayment.prototype, "netAmount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of payment attempts' }),
    __metadata("design:type", Number)
], PlatformPayment.prototype, "attemptCount", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Failure reason if payment failed' }),
    __metadata("design:type", String)
], PlatformPayment.prototype, "failureReason", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Next retry time for failed payments' }),
    __metadata("design:type", Date)
], PlatformPayment.prototype, "nextRetryAt", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Refunded amount' }),
    __metadata("design:type", Number)
], PlatformPayment.prototype, "refundedAmount", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Refund date' }),
    __metadata("design:type", Date)
], PlatformPayment.prototype, "refundedAt", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Notes' }),
    __metadata("design:type", String)
], PlatformPayment.prototype, "notes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Created at' }),
    __metadata("design:type", Date)
], PlatformPayment.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Updated at' }),
    __metadata("design:type", Date)
], PlatformPayment.prototype, "updatedAt", void 0);
/**
 * Payment List Query
 * Used for NATS request and REST query params
 */
class PaymentListQuery {
    tenantId;
    invoiceId;
    status;
    paymentMethod;
    paymentStartDate;
    paymentEndDate;
    minAmount;
    maxAmount;
    gateway;
    page;
    limit;
    sortBy;
    sortOrder;
}
exports.PaymentListQuery = PaymentListQuery;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter by tenant ID' }),
    __metadata("design:type", String)
], PaymentListQuery.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter by invoice ID' }),
    __metadata("design:type", String)
], PaymentListQuery.prototype, "invoiceId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ enum: enums_1.PaymentStatus, description: 'Filter by status' }),
    __metadata("design:type", String)
], PaymentListQuery.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ enum: enums_1.PlatformPaymentMethod, description: 'Filter by payment method' }),
    __metadata("design:type", String)
], PaymentListQuery.prototype, "paymentMethod", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Payment start date' }),
    __metadata("design:type", Date)
], PaymentListQuery.prototype, "paymentStartDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Payment end date' }),
    __metadata("design:type", Date)
], PaymentListQuery.prototype, "paymentEndDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Minimum amount' }),
    __metadata("design:type", Number)
], PaymentListQuery.prototype, "minAmount", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Maximum amount' }),
    __metadata("design:type", Number)
], PaymentListQuery.prototype, "maxAmount", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter by gateway' }),
    __metadata("design:type", String)
], PaymentListQuery.prototype, "gateway", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Page number', default: 1 }),
    __metadata("design:type", Number)
], PaymentListQuery.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Items per page', default: 20 }),
    __metadata("design:type", Number)
], PaymentListQuery.prototype, "limit", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Sort by field' }),
    __metadata("design:type", String)
], PaymentListQuery.prototype, "sortBy", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Sort order', enum: ['ASC', 'DESC'] }),
    __metadata("design:type", String)
], PaymentListQuery.prototype, "sortOrder", void 0);
/**
 * Payment List Response
 * Used for both NATS response and REST API response
 */
class PaymentListResponse {
    data;
    total;
    page;
    limit;
}
exports.PaymentListResponse = PaymentListResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'List of payments', type: [PlatformPayment] }),
    __metadata("design:type", Array)
], PaymentListResponse.prototype, "data", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total number of payments' }),
    __metadata("design:type", Number)
], PaymentListResponse.prototype, "total", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Current page' }),
    __metadata("design:type", Number)
], PaymentListResponse.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Items per page' }),
    __metadata("design:type", Number)
], PaymentListResponse.prototype, "limit", void 0);
/**
 * Create Platform Payment Request
 * Used for both NATS request and REST API request
 */
class CreatePlatformPaymentRequest {
    tenantId;
    invoiceId;
    amount;
    currency;
    paymentMethod;
    status;
    paymentDate;
    gateway;
    gatewayTransactionId;
    gatewayResponse;
    paymentDetails;
    processingFee;
    netAmount;
    attemptCount;
    failureReason;
    nextRetryAt;
    notes;
}
exports.CreatePlatformPaymentRequest = CreatePlatformPaymentRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], CreatePlatformPaymentRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Invoice ID' }),
    __metadata("design:type", String)
], CreatePlatformPaymentRequest.prototype, "invoiceId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Payment amount' }),
    __metadata("design:type", Number)
], CreatePlatformPaymentRequest.prototype, "amount", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Currency code', default: 'VND' }),
    __metadata("design:type", String)
], CreatePlatformPaymentRequest.prototype, "currency", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: enums_1.PlatformPaymentMethod, description: 'Payment method' }),
    __metadata("design:type", String)
], CreatePlatformPaymentRequest.prototype, "paymentMethod", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ enum: enums_1.PaymentStatus, description: 'Initial payment status', default: enums_1.PaymentStatus.PENDING }),
    __metadata("design:type", String)
], CreatePlatformPaymentRequest.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Payment date' }),
    __metadata("design:type", Date)
], CreatePlatformPaymentRequest.prototype, "paymentDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Payment gateway' }),
    __metadata("design:type", String)
], CreatePlatformPaymentRequest.prototype, "gateway", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Gateway transaction ID' }),
    __metadata("design:type", String)
], CreatePlatformPaymentRequest.prototype, "gatewayTransactionId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Raw gateway response' }),
    __metadata("design:type", Object)
], CreatePlatformPaymentRequest.prototype, "gatewayResponse", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Payment details' }),
    __metadata("design:type", Object)
], CreatePlatformPaymentRequest.prototype, "paymentDetails", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Processing fee', default: 0 }),
    __metadata("design:type", Number)
], CreatePlatformPaymentRequest.prototype, "processingFee", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Net amount after fees' }),
    __metadata("design:type", Number)
], CreatePlatformPaymentRequest.prototype, "netAmount", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Number of attempts', default: 1 }),
    __metadata("design:type", Number)
], CreatePlatformPaymentRequest.prototype, "attemptCount", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Failure reason' }),
    __metadata("design:type", String)
], CreatePlatformPaymentRequest.prototype, "failureReason", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Next retry time' }),
    __metadata("design:type", Date)
], CreatePlatformPaymentRequest.prototype, "nextRetryAt", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Notes' }),
    __metadata("design:type", String)
], CreatePlatformPaymentRequest.prototype, "notes", void 0);
//# sourceMappingURL=payment.types.js.map