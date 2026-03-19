"use strict";
/**
 * Travel Agent Response DTOs
 * Used for Swagger documentation and API responses
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
exports.CommissionRecordListResponseDto = exports.CommissionRecordResponseDto = exports.TravelAgentListResponseDto = exports.TravelAgentResponseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class TravelAgentResponseDto {
    id;
    agentCode;
    agentName;
    iataNumber;
    taxCode;
    address;
    contactPerson;
    email;
    phone;
    commissionRate;
    commissionType;
    paymentTermDays;
    bankAccount;
    bankName;
    contractNumber;
    contractStartDate;
    contractEndDate;
    status;
    salesPersonId;
    salesPersonName;
    notes;
    createdByName;
    createdAt;
    updatedAt;
}
exports.TravelAgentResponseDto = TravelAgentResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Travel agent ID' }),
    __metadata("design:type", String)
], TravelAgentResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Auto-generated agent code (e.g. TA-001)' }),
    __metadata("design:type", String)
], TravelAgentResponseDto.prototype, "agentCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Agent name' }),
    __metadata("design:type", String)
], TravelAgentResponseDto.prototype, "agentName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'IATA number' }),
    __metadata("design:type", String)
], TravelAgentResponseDto.prototype, "iataNumber", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Tax code' }),
    __metadata("design:type", String)
], TravelAgentResponseDto.prototype, "taxCode", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Address' }),
    __metadata("design:type", String)
], TravelAgentResponseDto.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Contact person name' }),
    __metadata("design:type", String)
], TravelAgentResponseDto.prototype, "contactPerson", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Email' }),
    __metadata("design:type", String)
], TravelAgentResponseDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Phone' }),
    __metadata("design:type", String)
], TravelAgentResponseDto.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Commission rate' }),
    __metadata("design:type", Number)
], TravelAgentResponseDto.prototype, "commissionRate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Commission type' }),
    __metadata("design:type", String)
], TravelAgentResponseDto.prototype, "commissionType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Payment term in days' }),
    __metadata("design:type", Number)
], TravelAgentResponseDto.prototype, "paymentTermDays", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Bank account number' }),
    __metadata("design:type", String)
], TravelAgentResponseDto.prototype, "bankAccount", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Bank name' }),
    __metadata("design:type", String)
], TravelAgentResponseDto.prototype, "bankName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Contract number' }),
    __metadata("design:type", String)
], TravelAgentResponseDto.prototype, "contractNumber", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Contract start date' }),
    __metadata("design:type", String)
], TravelAgentResponseDto.prototype, "contractStartDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Contract end date' }),
    __metadata("design:type", String)
], TravelAgentResponseDto.prototype, "contractEndDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Status (ACTIVE, INACTIVE, SUSPENDED)' }),
    __metadata("design:type", String)
], TravelAgentResponseDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Sales person ID' }),
    __metadata("design:type", String)
], TravelAgentResponseDto.prototype, "salesPersonId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Sales person name' }),
    __metadata("design:type", String)
], TravelAgentResponseDto.prototype, "salesPersonName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Notes' }),
    __metadata("design:type", String)
], TravelAgentResponseDto.prototype, "notes", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Created by user name' }),
    __metadata("design:type", String)
], TravelAgentResponseDto.prototype, "createdByName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Created at' }),
    __metadata("design:type", Date)
], TravelAgentResponseDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Updated at' }),
    __metadata("design:type", Date)
], TravelAgentResponseDto.prototype, "updatedAt", void 0);
class TravelAgentListResponseDto {
    travelAgents;
    total;
    page;
    limit;
    totalPages;
}
exports.TravelAgentListResponseDto = TravelAgentListResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Travel agents', type: [TravelAgentResponseDto] }),
    __metadata("design:type", Array)
], TravelAgentListResponseDto.prototype, "travelAgents", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total count' }),
    __metadata("design:type", Number)
], TravelAgentListResponseDto.prototype, "total", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Page number' }),
    __metadata("design:type", Number)
], TravelAgentListResponseDto.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Items per page' }),
    __metadata("design:type", Number)
], TravelAgentListResponseDto.prototype, "limit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total pages' }),
    __metadata("design:type", Number)
], TravelAgentListResponseDto.prototype, "totalPages", void 0);
class CommissionRecordResponseDto {
    id;
    travelAgentId;
    travelAgentName;
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
    paymentReference;
    createdAt;
}
exports.CommissionRecordResponseDto = CommissionRecordResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Commission record ID' }),
    __metadata("design:type", String)
], CommissionRecordResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Travel agent ID' }),
    __metadata("design:type", String)
], CommissionRecordResponseDto.prototype, "travelAgentId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Travel agent name' }),
    __metadata("design:type", String)
], CommissionRecordResponseDto.prototype, "travelAgentName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Booking ID' }),
    __metadata("design:type", String)
], CommissionRecordResponseDto.prototype, "bookingId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Booking code' }),
    __metadata("design:type", String)
], CommissionRecordResponseDto.prototype, "bookingCode", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Guest name' }),
    __metadata("design:type", String)
], CommissionRecordResponseDto.prototype, "guestName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Check-out date' }),
    __metadata("design:type", String)
], CommissionRecordResponseDto.prototype, "checkOutDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Commissionable amount (booking final amount)' }),
    __metadata("design:type", Number)
], CommissionRecordResponseDto.prototype, "commissionableAmount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Commission rate applied' }),
    __metadata("design:type", Number)
], CommissionRecordResponseDto.prototype, "commissionRate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Calculated commission amount' }),
    __metadata("design:type", Number)
], CommissionRecordResponseDto.prototype, "commissionAmount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Commission type used' }),
    __metadata("design:type", String)
], CommissionRecordResponseDto.prototype, "commissionType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Status (PENDING, APPROVED, PAID, ON_HOLD, CANCELLED)' }),
    __metadata("design:type", String)
], CommissionRecordResponseDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Paid date' }),
    __metadata("design:type", Date)
], CommissionRecordResponseDto.prototype, "paidDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Payment reference' }),
    __metadata("design:type", String)
], CommissionRecordResponseDto.prototype, "paymentReference", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Created at' }),
    __metadata("design:type", Date)
], CommissionRecordResponseDto.prototype, "createdAt", void 0);
class CommissionRecordListResponseDto {
    commissionRecords;
    total;
    page;
    limit;
    totalPages;
}
exports.CommissionRecordListResponseDto = CommissionRecordListResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Commission records', type: [CommissionRecordResponseDto] }),
    __metadata("design:type", Array)
], CommissionRecordListResponseDto.prototype, "commissionRecords", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total count' }),
    __metadata("design:type", Number)
], CommissionRecordListResponseDto.prototype, "total", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Page number' }),
    __metadata("design:type", Number)
], CommissionRecordListResponseDto.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Items per page' }),
    __metadata("design:type", Number)
], CommissionRecordListResponseDto.prototype, "limit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total pages' }),
    __metadata("design:type", Number)
], CommissionRecordListResponseDto.prototype, "totalPages", void 0);
//# sourceMappingURL=travel-agent-response.dto.js.map