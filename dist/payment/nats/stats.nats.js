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
exports.PaymentStatsDataNatsResponse = exports.PaymentStatsPeriodData = exports.GetPaymentStatsNatsRequest = void 0;
const swagger_1 = require("@nestjs/swagger");
/**
 * Get Payment Statistics NATS Contract
 * Pattern: payment.stats
 * Retrieves aggregated payment statistics for a tenant/hotel/chain
 */
class GetPaymentStatsNatsRequest {
    tenantId;
    hotelId;
    chainId;
    startDate;
    endDate;
    groupBy;
}
exports.GetPaymentStatsNatsRequest = GetPaymentStatsNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], GetPaymentStatsNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Hotel ID (optional, for hotel-level filtering)' }),
    __metadata("design:type", String)
], GetPaymentStatsNatsRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Chain ID (optional, for chain-level filtering)' }),
    __metadata("design:type", String)
], GetPaymentStatsNatsRequest.prototype, "chainId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Start date for statistics (ISO format)' }),
    __metadata("design:type", String)
], GetPaymentStatsNatsRequest.prototype, "startDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'End date for statistics (ISO format)' }),
    __metadata("design:type", String)
], GetPaymentStatsNatsRequest.prototype, "endDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Group results by time period (e.g., daily, monthly)' }),
    __metadata("design:type", String)
], GetPaymentStatsNatsRequest.prototype, "groupBy", void 0);
class PaymentStatsPeriodData {
    startDate;
    endDate;
}
exports.PaymentStatsPeriodData = PaymentStatsPeriodData;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Period start date' }),
    __metadata("design:type", String)
], PaymentStatsPeriodData.prototype, "startDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Period end date' }),
    __metadata("design:type", String)
], PaymentStatsPeriodData.prototype, "endDate", void 0);
class PaymentStatsDataNatsResponse {
    totalRevenue;
    successfulTransactions;
    failedTransactions;
    pendingTransactions;
    refundedAmount;
    averageTransactionAmount;
    currencyCode;
    period;
}
exports.PaymentStatsDataNatsResponse = PaymentStatsDataNatsResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total revenue in the period' }),
    __metadata("design:type", Number)
], PaymentStatsDataNatsResponse.prototype, "totalRevenue", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of successful transactions' }),
    __metadata("design:type", Number)
], PaymentStatsDataNatsResponse.prototype, "successfulTransactions", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of failed transactions' }),
    __metadata("design:type", Number)
], PaymentStatsDataNatsResponse.prototype, "failedTransactions", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Number of pending transactions' }),
    __metadata("design:type", Number)
], PaymentStatsDataNatsResponse.prototype, "pendingTransactions", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total refunded amount' }),
    __metadata("design:type", Number)
], PaymentStatsDataNatsResponse.prototype, "refundedAmount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Average transaction amount' }),
    __metadata("design:type", Number)
], PaymentStatsDataNatsResponse.prototype, "averageTransactionAmount", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Currency code (e.g., VND)' }),
    __metadata("design:type", String)
], PaymentStatsDataNatsResponse.prototype, "currencyCode", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Period details', type: PaymentStatsPeriodData }),
    __metadata("design:type", PaymentStatsPeriodData)
], PaymentStatsDataNatsResponse.prototype, "period", void 0);
//# sourceMappingURL=stats.nats.js.map