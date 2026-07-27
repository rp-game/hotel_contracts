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
exports.GenerateStatementQueryDto = exports.FindARTransactionsQueryDto = exports.CreateARTransactionDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const sales_enum_1 = require("../enums/sales.enum");
class CreateARTransactionDto {
    hotelId;
    transactionType;
    amount;
    referenceNumber;
    description;
    transactionDate;
}
exports.CreateARTransactionDto = CreateARTransactionDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID where this transaction applies' }),
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateARTransactionDto.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Transaction type (PAYMENT, ADJUSTMENT, or WRITE_OFF only — CHARGE is auto-generated)',
        enum: [sales_enum_1.ARTransactionType.PAYMENT, sales_enum_1.ARTransactionType.ADJUSTMENT, sales_enum_1.ARTransactionType.WRITE_OFF],
    }),
    (0, class_validator_1.IsEnum)([sales_enum_1.ARTransactionType.PAYMENT, sales_enum_1.ARTransactionType.ADJUSTMENT, sales_enum_1.ARTransactionType.WRITE_OFF], {
        message: 'transactionType must be PAYMENT, ADJUSTMENT, or WRITE_OFF. CHARGE is auto-generated on checkout.',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateARTransactionDto.prototype, "transactionType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Transaction amount (positive value)', minimum: 0 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], CreateARTransactionDto.prototype, "amount", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Reference number (receipt, check number, etc.)' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateARTransactionDto.prototype, "referenceNumber", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Description / notes' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateARTransactionDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Transaction date (YYYY-MM-DD)' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateARTransactionDto.prototype, "transactionDate", void 0);
class FindARTransactionsQueryDto {
    hotelId;
    transactionType;
    dateFrom;
    dateTo;
    page;
    limit;
}
exports.FindARTransactionsQueryDto = FindARTransactionsQueryDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter by hotel' }),
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], FindARTransactionsQueryDto.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter by transaction type', enum: sales_enum_1.ARTransactionType }),
    (0, class_validator_1.IsEnum)(sales_enum_1.ARTransactionType),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], FindARTransactionsQueryDto.prototype, "transactionType", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Date from (YYYY-MM-DD)' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], FindARTransactionsQueryDto.prototype, "dateFrom", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Date to (YYYY-MM-DD)' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], FindARTransactionsQueryDto.prototype, "dateTo", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Page number', default: 1 }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], FindARTransactionsQueryDto.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Items per page', default: 20 }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], FindARTransactionsQueryDto.prototype, "limit", void 0);
class GenerateStatementQueryDto {
    dateFrom;
    dateTo;
}
exports.GenerateStatementQueryDto = GenerateStatementQueryDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Statement start date (YYYY-MM-DD)' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], GenerateStatementQueryDto.prototype, "dateFrom", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Statement end date (YYYY-MM-DD)' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], GenerateStatementQueryDto.prototype, "dateTo", void 0);
//# sourceMappingURL=ar-transaction.dto.js.map