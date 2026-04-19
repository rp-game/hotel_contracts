"use strict";
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
exports.RefundOfflinePaymentDto = exports.RejectOfflinePaymentDto = exports.ConfirmOfflinePaymentDto = exports.OfflinePaymentListResponseDto = exports.OfflinePaymentResponseDto = exports.OfflinePaymentDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const offline_payment_nats_1 = require("../nats/offline-payment.nats");
class OfflinePaymentDto {
    id;
    paymentId;
    bookingId;
    method;
    amount;
    currency;
    status;
    referenceNumber;
    receiptNumber;
    receivedAt;
    receivedBy;
    receivedByName;
    confirmedAt;
    confirmedBy;
    notes;
    createdAt;
    updatedAt;
}
exports.OfflinePaymentDto = OfflinePaymentDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], OfflinePaymentDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], OfflinePaymentDto.prototype, "paymentId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], OfflinePaymentDto.prototype, "bookingId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: ['CASH', 'BANK_TRANSFER'] }),
    __metadata("design:type", String)
], OfflinePaymentDto.prototype, "method", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], OfflinePaymentDto.prototype, "amount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], OfflinePaymentDto.prototype, "currency", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: offline_payment_nats_1.OfflinePaymentStatus }),
    __metadata("design:type", String)
], OfflinePaymentDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], OfflinePaymentDto.prototype, "referenceNumber", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], OfflinePaymentDto.prototype, "receiptNumber", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], OfflinePaymentDto.prototype, "receivedAt", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], OfflinePaymentDto.prototype, "receivedBy", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], OfflinePaymentDto.prototype, "receivedByName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], OfflinePaymentDto.prototype, "confirmedAt", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], OfflinePaymentDto.prototype, "confirmedBy", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], OfflinePaymentDto.prototype, "notes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], OfflinePaymentDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], OfflinePaymentDto.prototype, "updatedAt", void 0);
class OfflinePaymentResponseDto {
    status;
    message;
    data;
}
exports.OfflinePaymentResponseDto = OfflinePaymentResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], OfflinePaymentResponseDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], OfflinePaymentResponseDto.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: OfflinePaymentDto }),
    __metadata("design:type", OfflinePaymentDto)
], OfflinePaymentResponseDto.prototype, "data", void 0);
class OfflinePaymentListResponseDto {
    status;
    message;
    data;
}
exports.OfflinePaymentListResponseDto = OfflinePaymentListResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], OfflinePaymentListResponseDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], OfflinePaymentListResponseDto.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [OfflinePaymentDto] }),
    __metadata("design:type", Array)
], OfflinePaymentListResponseDto.prototype, "data", void 0);
/**
 * Request body for confirming a pending offline payment (bank transfer)
 * Used by accountant to confirm BANK_TRANSFER payments in VERIFIED mode
 */
class ConfirmOfflinePaymentDto {
    confirmedBy;
    transactionId;
    notes;
}
exports.ConfirmOfflinePaymentDto = ConfirmOfflinePaymentDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'User ID who confirmed the payment', format: 'uuid' }),
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ConfirmOfflinePaymentDto.prototype, "confirmedBy", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Bank transaction ID (reference from bank statement)' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ConfirmOfflinePaymentDto.prototype, "transactionId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Notes for this confirmation' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ConfirmOfflinePaymentDto.prototype, "notes", void 0);
/**
 * Request body for rejecting a pending offline payment (bank transfer)
 */
class RejectOfflinePaymentDto {
    rejectedBy;
    notes;
}
exports.RejectOfflinePaymentDto = RejectOfflinePaymentDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'User ID who rejected the payment', format: 'uuid' }),
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], RejectOfflinePaymentDto.prototype, "rejectedBy", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Reason for rejection' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], RejectOfflinePaymentDto.prototype, "notes", void 0);
/**
 * Request body for refunding a confirmed offline payment (partial or full)
 */
class RefundOfflinePaymentDto {
    amount;
    reason;
}
exports.RefundOfflinePaymentDto = RefundOfflinePaymentDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Refund amount (partial or full)', minimum: 1 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], RefundOfflinePaymentDto.prototype, "amount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Reason for the refund' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], RefundOfflinePaymentDto.prototype, "reason", void 0);
//# sourceMappingURL=offline-payment.dto.js.map