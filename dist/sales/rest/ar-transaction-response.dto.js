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
exports.CreditCheckResponseDto = exports.ARSummaryResponseDto = exports.AgingBreakdownDto = exports.ARTransactionListResponseDto = exports.ARTransactionResponseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class ARTransactionResponseDto {
    id;
    hotelId;
    corporateAccountId;
    bookingId;
    transactionType;
    amount;
    description;
    referenceNumber;
    dueDate;
    transactionDate;
    currency;
    createdBy;
    createdByName;
    createdAt;
}
exports.ARTransactionResponseDto = ARTransactionResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ARTransactionResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ARTransactionResponseDto.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ARTransactionResponseDto.prototype, "corporateAccountId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], ARTransactionResponseDto.prototype, "bookingId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ARTransactionResponseDto.prototype, "transactionType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], ARTransactionResponseDto.prototype, "amount", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], ARTransactionResponseDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], ARTransactionResponseDto.prototype, "referenceNumber", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], ARTransactionResponseDto.prototype, "dueDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ARTransactionResponseDto.prototype, "transactionDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ARTransactionResponseDto.prototype, "currency", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ARTransactionResponseDto.prototype, "createdBy", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], ARTransactionResponseDto.prototype, "createdByName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], ARTransactionResponseDto.prototype, "createdAt", void 0);
class ARTransactionListResponseDto {
    transactions;
    total;
    page;
    limit;
    totalPages;
}
exports.ARTransactionListResponseDto = ARTransactionListResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ type: [ARTransactionResponseDto] }),
    __metadata("design:type", Array)
], ARTransactionListResponseDto.prototype, "transactions", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], ARTransactionListResponseDto.prototype, "total", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], ARTransactionListResponseDto.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], ARTransactionListResponseDto.prototype, "limit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], ARTransactionListResponseDto.prototype, "totalPages", void 0);
class AgingBreakdownDto {
    current;
    days30;
    days60;
    days90plus;
}
exports.AgingBreakdownDto = AgingBreakdownDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Current (0-30 days)' }),
    __metadata("design:type", Number)
], AgingBreakdownDto.prototype, "current", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '31-60 days' }),
    __metadata("design:type", Number)
], AgingBreakdownDto.prototype, "days30", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '61-90 days' }),
    __metadata("design:type", Number)
], AgingBreakdownDto.prototype, "days60", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '90+ days' }),
    __metadata("design:type", Number)
], AgingBreakdownDto.prototype, "days90plus", void 0);
class ARSummaryResponseDto {
    corporateAccountId;
    companyName;
    creditLimit;
    currentBalance;
    pendingBookingsTotal;
    totalExposure;
    availableCredit;
    utilizationPercent;
    aging;
    lastPaymentDate;
    lastPaymentAmount;
}
exports.ARSummaryResponseDto = ARSummaryResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ARSummaryResponseDto.prototype, "corporateAccountId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ARSummaryResponseDto.prototype, "companyName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], ARSummaryResponseDto.prototype, "creditLimit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], ARSummaryResponseDto.prototype, "currentBalance", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], ARSummaryResponseDto.prototype, "pendingBookingsTotal", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], ARSummaryResponseDto.prototype, "totalExposure", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], ARSummaryResponseDto.prototype, "availableCredit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], ARSummaryResponseDto.prototype, "utilizationPercent", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: AgingBreakdownDto }),
    __metadata("design:type", AgingBreakdownDto)
], ARSummaryResponseDto.prototype, "aging", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], ARSummaryResponseDto.prototype, "lastPaymentDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", Number)
], ARSummaryResponseDto.prototype, "lastPaymentAmount", void 0);
class CreditCheckResponseDto {
    creditLimit;
    currentBalance;
    pendingBookingsTotal;
    totalExposure;
    newAmount;
    projectedExposure;
    exceedsLimit;
    availableCredit;
}
exports.CreditCheckResponseDto = CreditCheckResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], CreditCheckResponseDto.prototype, "creditLimit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], CreditCheckResponseDto.prototype, "currentBalance", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], CreditCheckResponseDto.prototype, "pendingBookingsTotal", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], CreditCheckResponseDto.prototype, "totalExposure", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], CreditCheckResponseDto.prototype, "newAmount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], CreditCheckResponseDto.prototype, "projectedExposure", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], CreditCheckResponseDto.prototype, "exceedsLimit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], CreditCheckResponseDto.prototype, "availableCredit", void 0);
//# sourceMappingURL=ar-transaction-response.dto.js.map