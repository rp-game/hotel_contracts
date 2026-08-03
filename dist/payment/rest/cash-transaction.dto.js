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
exports.CashTransactionDto = exports.CreateCashTransactionDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const cash_transaction_nats_1 = require("../nats/cash-transaction.nats");
// ─── Request DTOs ───────────────────────────────────────────────────
class CreateCashTransactionDto {
    cashierShiftId;
    direction;
    category;
    amount;
    currency;
    reason;
    referenceNumber;
}
exports.CreateCashTransactionDto = CreateCashTransactionDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Cashier shift ID (must be OPEN)' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateCashTransactionDto.prototype, "cashierShiftId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Direction of the cash movement', enum: cash_transaction_nats_1.CashTransactionDirection }),
    (0, class_validator_1.IsEnum)(cash_transaction_nats_1.CashTransactionDirection),
    __metadata("design:type", String)
], CreateCashTransactionDto.prototype, "direction", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Category of the cash movement', enum: cash_transaction_nats_1.CashTransactionCategory }),
    (0, class_validator_1.IsEnum)(cash_transaction_nats_1.CashTransactionCategory),
    __metadata("design:type", String)
], CreateCashTransactionDto.prototype, "category", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Amount (must be > 0)' }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0.01),
    __metadata("design:type", Number)
], CreateCashTransactionDto.prototype, "amount", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Currency code', default: 'VND' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCashTransactionDto.prototype, "currency", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Reason for the transaction (required)' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateCashTransactionDto.prototype, "reason", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Reference number (e.g. receipt/voucher number)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCashTransactionDto.prototype, "referenceNumber", void 0);
// ─── Response DTOs ──────────────────────────────────────────────────
class CashTransactionDto {
    id;
    cashierShiftId;
    direction;
    category;
    amount;
    currency;
    reason;
    referenceNumber;
    performedBy;
    performedByName;
    createdAt;
}
exports.CashTransactionDto = CashTransactionDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Transaction ID' }),
    __metadata("design:type", String)
], CashTransactionDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Cashier shift ID' }),
    __metadata("design:type", String)
], CashTransactionDto.prototype, "cashierShiftId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Direction', enum: cash_transaction_nats_1.CashTransactionDirection }),
    __metadata("design:type", String)
], CashTransactionDto.prototype, "direction", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Category', enum: cash_transaction_nats_1.CashTransactionCategory }),
    __metadata("design:type", String)
], CashTransactionDto.prototype, "category", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Amount' }),
    __metadata("design:type", Number)
], CashTransactionDto.prototype, "amount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Currency code' }),
    __metadata("design:type", String)
], CashTransactionDto.prototype, "currency", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Reason' }),
    __metadata("design:type", String)
], CashTransactionDto.prototype, "reason", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Reference number' }),
    __metadata("design:type", String)
], CashTransactionDto.prototype, "referenceNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Performed by (staff user ID)' }),
    __metadata("design:type", String)
], CashTransactionDto.prototype, "performedBy", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Performed by (staff display name)' }),
    __metadata("design:type", String)
], CashTransactionDto.prototype, "performedByName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Created date' }),
    __metadata("design:type", String)
], CashTransactionDto.prototype, "createdAt", void 0);
//# sourceMappingURL=cash-transaction.dto.js.map