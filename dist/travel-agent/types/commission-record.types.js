"use strict";
/**
 * Commission Record Types
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
exports.CommissionRecordSummary = void 0;
const swagger_1 = require("@nestjs/swagger");
class CommissionRecordSummary {
    id;
    travelAgentId;
    bookingId;
    bookingCode;
    guestName;
    checkOutDate;
    commissionableAmount;
    commissionRate;
    commissionAmount;
    commissionType;
    status;
    paidDate;
    createdAt;
}
exports.CommissionRecordSummary = CommissionRecordSummary;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Commission record ID' }),
    __metadata("design:type", String)
], CommissionRecordSummary.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Travel agent ID' }),
    __metadata("design:type", String)
], CommissionRecordSummary.prototype, "travelAgentId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Booking ID' }),
    __metadata("design:type", String)
], CommissionRecordSummary.prototype, "bookingId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Booking code' }),
    __metadata("design:type", String)
], CommissionRecordSummary.prototype, "bookingCode", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Guest name' }),
    __metadata("design:type", String)
], CommissionRecordSummary.prototype, "guestName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Check-out date' }),
    __metadata("design:type", String)
], CommissionRecordSummary.prototype, "checkOutDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Commissionable amount' }),
    __metadata("design:type", Number)
], CommissionRecordSummary.prototype, "commissionableAmount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Commission rate' }),
    __metadata("design:type", Number)
], CommissionRecordSummary.prototype, "commissionRate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Commission amount' }),
    __metadata("design:type", Number)
], CommissionRecordSummary.prototype, "commissionAmount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Commission type' }),
    __metadata("design:type", String)
], CommissionRecordSummary.prototype, "commissionType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Status' }),
    __metadata("design:type", String)
], CommissionRecordSummary.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Paid date' }),
    __metadata("design:type", Date)
], CommissionRecordSummary.prototype, "paidDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Created at' }),
    __metadata("design:type", Date)
], CommissionRecordSummary.prototype, "createdAt", void 0);
//# sourceMappingURL=commission-record.types.js.map