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
exports.CashierShiftDetailDto = exports.CashierShiftDto = exports.CashierShiftPaymentSummaryDto = exports.CashierShiftCurrencyBreakdownDto = exports.ForceCloseCashierShiftDto = exports.CloseCashierShiftDto = exports.OpenCashierShiftDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
// ─── Request DTOs ───────────────────────────────────────────────────
class OpenCashierShiftDto {
    openingBalance;
}
exports.OpenCashierShiftDto = OpenCashierShiftDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Opening cash balance' }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], OpenCashierShiftDto.prototype, "openingBalance", void 0);
class CloseCashierShiftDto {
    closingBalance;
    notes;
}
exports.CloseCashierShiftDto = CloseCashierShiftDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Closing cash balance (counted by staff)' }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], CloseCashierShiftDto.prototype, "closingBalance", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Notes about the shift' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CloseCashierShiftDto.prototype, "notes", void 0);
class ForceCloseCashierShiftDto {
    closingBalance;
    reason;
}
exports.ForceCloseCashierShiftDto = ForceCloseCashierShiftDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Closing cash balance (optional for force-close)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], ForceCloseCashierShiftDto.prototype, "closingBalance", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Reason for force-closing' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ForceCloseCashierShiftDto.prototype, "reason", void 0);
// ─── Response DTOs ──────────────────────────────────────────────────
class CashierShiftCurrencyBreakdownDto {
    currency;
    totalOriginalAmount;
    totalVndAmount;
    count;
}
exports.CashierShiftCurrencyBreakdownDto = CashierShiftCurrencyBreakdownDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Original currency code (e.g. USD, EUR)' }),
    __metadata("design:type", String)
], CashierShiftCurrencyBreakdownDto.prototype, "currency", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total original amount received in this currency' }),
    __metadata("design:type", Number)
], CashierShiftCurrencyBreakdownDto.prototype, "totalOriginalAmount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Equivalent VND amount' }),
    __metadata("design:type", Number)
], CashierShiftCurrencyBreakdownDto.prototype, "totalVndAmount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of transactions' }),
    __metadata("design:type", Number)
], CashierShiftCurrencyBreakdownDto.prototype, "count", void 0);
class CashierShiftPaymentSummaryDto {
    method;
    count;
    total;
    currencyBreakdown;
}
exports.CashierShiftPaymentSummaryDto = CashierShiftPaymentSummaryDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Payment method' }),
    __metadata("design:type", String)
], CashierShiftPaymentSummaryDto.prototype, "method", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of payments' }),
    __metadata("design:type", Number)
], CashierShiftPaymentSummaryDto.prototype, "count", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total amount' }),
    __metadata("design:type", Number)
], CashierShiftPaymentSummaryDto.prototype, "total", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: [CashierShiftCurrencyBreakdownDto], description: 'Foreign currency breakdown' }),
    __metadata("design:type", Array)
], CashierShiftPaymentSummaryDto.prototype, "currencyBreakdown", void 0);
class CashierShiftDto {
    id;
    staffId;
    staffName;
    shiftDate;
    shiftType;
    openedAt;
    closedAt;
    openingBalance;
    closingBalance;
    expectedBalance;
    discrepancy;
    status;
    notes;
    closedBy;
    forceCloseReason;
    createdAt;
    updatedAt;
}
exports.CashierShiftDto = CashierShiftDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Shift ID' }),
    __metadata("design:type", String)
], CashierShiftDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Staff ID' }),
    __metadata("design:type", String)
], CashierShiftDto.prototype, "staffId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Staff name' }),
    __metadata("design:type", String)
], CashierShiftDto.prototype, "staffName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Shift date' }),
    __metadata("design:type", String)
], CashierShiftDto.prototype, "shiftDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Shift type', enum: ['MORNING', 'AFTERNOON', 'NIGHT'] }),
    __metadata("design:type", String)
], CashierShiftDto.prototype, "shiftType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'When the shift was opened' }),
    __metadata("design:type", String)
], CashierShiftDto.prototype, "openedAt", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'When the shift was closed' }),
    __metadata("design:type", String)
], CashierShiftDto.prototype, "closedAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Opening balance' }),
    __metadata("design:type", Number)
], CashierShiftDto.prototype, "openingBalance", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Closing balance' }),
    __metadata("design:type", Number)
], CashierShiftDto.prototype, "closingBalance", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Expected balance (opening + cash payments)' }),
    __metadata("design:type", Number)
], CashierShiftDto.prototype, "expectedBalance", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Discrepancy (closing - expected)' }),
    __metadata("design:type", Number)
], CashierShiftDto.prototype, "discrepancy", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Status', enum: ['OPEN', 'CLOSED', 'FORCE_CLOSED'] }),
    __metadata("design:type", String)
], CashierShiftDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Notes' }),
    __metadata("design:type", String)
], CashierShiftDto.prototype, "notes", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Closed by' }),
    __metadata("design:type", String)
], CashierShiftDto.prototype, "closedBy", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Force close reason' }),
    __metadata("design:type", String)
], CashierShiftDto.prototype, "forceCloseReason", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Created date' }),
    __metadata("design:type", String)
], CashierShiftDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Updated date' }),
    __metadata("design:type", String)
], CashierShiftDto.prototype, "updatedAt", void 0);
class CashierShiftDetailDto extends CashierShiftDto {
    paymentSummary;
    totalCashPayments;
    totalPaymentsCount;
}
exports.CashierShiftDetailDto = CashierShiftDetailDto;
__decorate([
    (0, swagger_1.ApiProperty)({ type: [CashierShiftPaymentSummaryDto], description: 'Payment summary by method' }),
    __metadata("design:type", Array)
], CashierShiftDetailDto.prototype, "paymentSummary", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total cash payments amount' }),
    __metadata("design:type", Number)
], CashierShiftDetailDto.prototype, "totalCashPayments", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total number of payments' }),
    __metadata("design:type", Number)
], CashierShiftDetailDto.prototype, "totalPaymentsCount", void 0);
//# sourceMappingURL=cashier-shift.dto.js.map