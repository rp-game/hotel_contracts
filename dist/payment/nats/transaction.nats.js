"use strict";
/**
 * Transaction Domain NATS Message Contracts
 *
 * These contracts are used for:
 * - NATS message payloads in payment-service
 * - REST API responses in api-gateway
 * - TypeScript client types in frontend
 *
 * Patterns:
 * - transaction.findAll
 * - transaction.retry
 * - transaction.refund
 *
 * Handler: payment-service (transactions module)
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
exports.RefundTransactionDataNatsResponse = exports.RefundTransactionNatsRequest = exports.RetryTransactionDataNatsResponse = exports.RetryTransactionNatsRequest = exports.GetTransactionsDataNatsResponse = exports.GetTransactionsNatsRequest = exports.PaymentTransactionNatsResponse = exports.TransactionType = exports.TransactionStatus = void 0;
const swagger_1 = require("@nestjs/swagger");
// ============================================================================
// SHARED TYPES
// ============================================================================
var TransactionStatus;
(function (TransactionStatus) {
    TransactionStatus["PENDING"] = "pending";
    TransactionStatus["SUCCESS"] = "success";
    TransactionStatus["FAILED"] = "failed";
    TransactionStatus["CANCELLED"] = "cancelled";
    TransactionStatus["REFUNDED"] = "refunded";
})(TransactionStatus || (exports.TransactionStatus = TransactionStatus = {}));
var TransactionType;
(function (TransactionType) {
    TransactionType["PAYMENT"] = "PAYMENT";
    TransactionType["REFUND"] = "REFUND";
    TransactionType["ADJUSTMENT"] = "ADJUSTMENT";
})(TransactionType || (exports.TransactionType = TransactionType = {}));
/**
 * Payment Transaction entity - used in both NATS and REST responses
 * Fields match the payment_transactions database table schema
 */
class PaymentTransactionNatsResponse {
    id;
    tenantId;
    hotelId;
    paymentId;
    invoiceId;
    amount;
    currency;
    type;
    method;
    status;
    gatewayTransactionId;
    gatewayResponse;
    transactionReference;
    processedBy;
    notes;
    metadata;
    createdAt;
    completedAt;
    updatedAt;
}
exports.PaymentTransactionNatsResponse = PaymentTransactionNatsResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Transaction ID' }),
    __metadata("design:type", String)
], PaymentTransactionNatsResponse.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID for multi-tenancy' }),
    __metadata("design:type", String)
], PaymentTransactionNatsResponse.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID within the tenant' }),
    __metadata("design:type", String)
], PaymentTransactionNatsResponse.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Associated payment ID' }),
    __metadata("design:type", String)
], PaymentTransactionNatsResponse.prototype, "paymentId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Associated invoice ID' }),
    __metadata("design:type", String)
], PaymentTransactionNatsResponse.prototype, "invoiceId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Transaction amount' }),
    __metadata("design:type", Number)
], PaymentTransactionNatsResponse.prototype, "amount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Currency code (e.g., VND)' }),
    __metadata("design:type", String)
], PaymentTransactionNatsResponse.prototype, "currency", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Transaction type (PAYMENT, REFUND, ADJUSTMENT)', enum: TransactionType }),
    __metadata("design:type", String)
], PaymentTransactionNatsResponse.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Payment method used', enum: ['CREDIT_CARD', 'DEBIT_CARD', 'BANK_TRANSFER', 'CASH', 'EWALLET'] }),
    __metadata("design:type", String)
], PaymentTransactionNatsResponse.prototype, "method", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Transaction status', enum: TransactionStatus }),
    __metadata("design:type", String)
], PaymentTransactionNatsResponse.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Gateway transaction ID for reconciliation' }),
    __metadata("design:type", String)
], PaymentTransactionNatsResponse.prototype, "gatewayTransactionId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Response from payment gateway' }),
    __metadata("design:type", Object)
], PaymentTransactionNatsResponse.prototype, "gatewayResponse", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Transaction reference number' }),
    __metadata("design:type", String)
], PaymentTransactionNatsResponse.prototype, "transactionReference", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'User ID who processed the transaction' }),
    __metadata("design:type", String)
], PaymentTransactionNatsResponse.prototype, "processedBy", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Notes about the transaction' }),
    __metadata("design:type", String)
], PaymentTransactionNatsResponse.prototype, "notes", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Additional metadata for the transaction' }),
    __metadata("design:type", Object)
], PaymentTransactionNatsResponse.prototype, "metadata", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Transaction creation timestamp' }),
    __metadata("design:type", String)
], PaymentTransactionNatsResponse.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Transaction completion timestamp' }),
    __metadata("design:type", String)
], PaymentTransactionNatsResponse.prototype, "completedAt", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Last update timestamp' }),
    __metadata("design:type", String)
], PaymentTransactionNatsResponse.prototype, "updatedAt", void 0);
// ============================================================================
// GET TRANSACTIONS (GET /transactions)
// ============================================================================
class GetTransactionsNatsRequest {
    tenantId;
    hotelId;
    status;
    type;
    paymentMethod;
    startDate;
    endDate;
    bookingId;
    page;
    limit;
}
exports.GetTransactionsNatsRequest = GetTransactionsNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], GetTransactionsNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Hotel ID (optional, for hotel-level filtering)' }),
    __metadata("design:type", String)
], GetTransactionsNatsRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter by transaction status' }),
    __metadata("design:type", String)
], GetTransactionsNatsRequest.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter by transaction type' }),
    __metadata("design:type", String)
], GetTransactionsNatsRequest.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter by payment method' }),
    __metadata("design:type", String)
], GetTransactionsNatsRequest.prototype, "paymentMethod", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Start date for filtering (ISO format)' }),
    __metadata("design:type", String)
], GetTransactionsNatsRequest.prototype, "startDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'End date for filtering (ISO format)' }),
    __metadata("design:type", String)
], GetTransactionsNatsRequest.prototype, "endDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter by booking ID' }),
    __metadata("design:type", String)
], GetTransactionsNatsRequest.prototype, "bookingId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Page number for pagination', example: 1 }),
    __metadata("design:type", Number)
], GetTransactionsNatsRequest.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Items per page', example: 10 }),
    __metadata("design:type", Number)
], GetTransactionsNatsRequest.prototype, "limit", void 0);
class GetTransactionsDataNatsResponse {
    transactions;
    total;
    page;
    limit;
}
exports.GetTransactionsDataNatsResponse = GetTransactionsDataNatsResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'List of transactions', type: [PaymentTransactionNatsResponse] }),
    __metadata("design:type", Array)
], GetTransactionsDataNatsResponse.prototype, "transactions", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total number of transactions' }),
    __metadata("design:type", Number)
], GetTransactionsDataNatsResponse.prototype, "total", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Current page number' }),
    __metadata("design:type", Number)
], GetTransactionsDataNatsResponse.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Items per page' }),
    __metadata("design:type", Number)
], GetTransactionsDataNatsResponse.prototype, "limit", void 0);
// ============================================================================
// RETRY TRANSACTION (POST /transactions/:id/retry)
// ============================================================================
class RetryTransactionNatsRequest {
    id;
    tenantId;
    hotelId;
}
exports.RetryTransactionNatsRequest = RetryTransactionNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Transaction ID to retry' }),
    __metadata("design:type", String)
], RetryTransactionNatsRequest.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], RetryTransactionNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Hotel ID' }),
    __metadata("design:type", String)
], RetryTransactionNatsRequest.prototype, "hotelId", void 0);
class RetryTransactionDataNatsResponse {
    id;
    status;
    previousStatus;
    retryAttempt;
    nextRetryAt;
    message;
}
exports.RetryTransactionDataNatsResponse = RetryTransactionDataNatsResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Transaction ID' }),
    __metadata("design:type", String)
], RetryTransactionDataNatsResponse.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'New transaction status' }),
    __metadata("design:type", String)
], RetryTransactionDataNatsResponse.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Previous transaction status' }),
    __metadata("design:type", String)
], RetryTransactionDataNatsResponse.prototype, "previousStatus", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Retry attempt number' }),
    __metadata("design:type", Number)
], RetryTransactionDataNatsResponse.prototype, "retryAttempt", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Next retry timestamp' }),
    __metadata("design:type", String)
], RetryTransactionDataNatsResponse.prototype, "nextRetryAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Success message' }),
    __metadata("design:type", String)
], RetryTransactionDataNatsResponse.prototype, "message", void 0);
// ============================================================================
// REFUND TRANSACTION (POST /transactions/:id/refund)
// ============================================================================
class RefundTransactionNatsRequest {
    id;
    amount;
    reason;
    tenantId;
    hotelId;
}
exports.RefundTransactionNatsRequest = RefundTransactionNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Transaction ID to refund' }),
    __metadata("design:type", String)
], RefundTransactionNatsRequest.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Refund amount (partial refund). If not specified, full refund is performed.' }),
    __metadata("design:type", Number)
], RefundTransactionNatsRequest.prototype, "amount", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Reason for refund' }),
    __metadata("design:type", String)
], RefundTransactionNatsRequest.prototype, "reason", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], RefundTransactionNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Hotel ID' }),
    __metadata("design:type", String)
], RefundTransactionNatsRequest.prototype, "hotelId", void 0);
class RefundTransactionDataNatsResponse {
    refundTransaction;
    originalTransaction;
    message;
}
exports.RefundTransactionDataNatsResponse = RefundTransactionDataNatsResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Refund transaction details', type: PaymentTransactionNatsResponse }),
    __metadata("design:type", PaymentTransactionNatsResponse)
], RefundTransactionDataNatsResponse.prototype, "refundTransaction", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Original transaction details', type: PaymentTransactionNatsResponse }),
    __metadata("design:type", PaymentTransactionNatsResponse)
], RefundTransactionDataNatsResponse.prototype, "originalTransaction", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Status message' }),
    __metadata("design:type", String)
], RefundTransactionDataNatsResponse.prototype, "message", void 0);
//# sourceMappingURL=transaction.nats.js.map