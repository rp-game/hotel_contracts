"use strict";
/**
 * Corporate Account Response DTOs
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
exports.CorporateAccountListResponseDto = exports.CorporateAccountResponseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class CorporateAccountResponseDto {
    id;
    accountCode;
    companyName;
    industry;
    taxCode;
    address;
    contactPerson;
    contactEmail;
    contactPhone;
    salesPersonId;
    salesPersonName;
    paymentMethod;
    paymentTermDays;
    creditLimit;
    contractNumber;
    contractStartDate;
    contractEndDate;
    projectedRoomNights;
    status;
    notes;
    contractStatus;
    contractFileUrl;
    contractNotes;
    renewalReminderDays;
    createdByName;
    createdAt;
    updatedAt;
}
exports.CorporateAccountResponseDto = CorporateAccountResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Corporate account ID' }),
    __metadata("design:type", String)
], CorporateAccountResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Auto-generated account code (e.g. CA-001)' }),
    __metadata("design:type", String)
], CorporateAccountResponseDto.prototype, "accountCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Company name' }),
    __metadata("design:type", String)
], CorporateAccountResponseDto.prototype, "companyName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Industry' }),
    __metadata("design:type", String)
], CorporateAccountResponseDto.prototype, "industry", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Tax code' }),
    __metadata("design:type", String)
], CorporateAccountResponseDto.prototype, "taxCode", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Address' }),
    __metadata("design:type", String)
], CorporateAccountResponseDto.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Contact person name' }),
    __metadata("design:type", String)
], CorporateAccountResponseDto.prototype, "contactPerson", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Contact email' }),
    __metadata("design:type", String)
], CorporateAccountResponseDto.prototype, "contactEmail", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Contact phone' }),
    __metadata("design:type", String)
], CorporateAccountResponseDto.prototype, "contactPhone", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Sales person ID' }),
    __metadata("design:type", String)
], CorporateAccountResponseDto.prototype, "salesPersonId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Sales person name' }),
    __metadata("design:type", String)
], CorporateAccountResponseDto.prototype, "salesPersonName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Payment method' }),
    __metadata("design:type", String)
], CorporateAccountResponseDto.prototype, "paymentMethod", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Payment term in days' }),
    __metadata("design:type", Number)
], CorporateAccountResponseDto.prototype, "paymentTermDays", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Credit limit' }),
    __metadata("design:type", Number)
], CorporateAccountResponseDto.prototype, "creditLimit", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Contract number' }),
    __metadata("design:type", String)
], CorporateAccountResponseDto.prototype, "contractNumber", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Contract start date' }),
    __metadata("design:type", String)
], CorporateAccountResponseDto.prototype, "contractStartDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Contract end date' }),
    __metadata("design:type", String)
], CorporateAccountResponseDto.prototype, "contractEndDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Projected room nights per year' }),
    __metadata("design:type", Number)
], CorporateAccountResponseDto.prototype, "projectedRoomNights", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Status (ACTIVE, INACTIVE, SUSPENDED)' }),
    __metadata("design:type", String)
], CorporateAccountResponseDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Notes' }),
    __metadata("design:type", String)
], CorporateAccountResponseDto.prototype, "notes", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Contract status (DRAFT, ACTIVE, EXPIRED, RENEWED)' }),
    __metadata("design:type", String)
], CorporateAccountResponseDto.prototype, "contractStatus", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Contract file URL' }),
    __metadata("design:type", String)
], CorporateAccountResponseDto.prototype, "contractFileUrl", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Contract notes' }),
    __metadata("design:type", String)
], CorporateAccountResponseDto.prototype, "contractNotes", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Days before contract end to send renewal reminder' }),
    __metadata("design:type", Number)
], CorporateAccountResponseDto.prototype, "renewalReminderDays", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Created by user name' }),
    __metadata("design:type", String)
], CorporateAccountResponseDto.prototype, "createdByName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Created at' }),
    __metadata("design:type", Date)
], CorporateAccountResponseDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Updated at' }),
    __metadata("design:type", Date)
], CorporateAccountResponseDto.prototype, "updatedAt", void 0);
class CorporateAccountListResponseDto {
    corporateAccounts;
    total;
    page;
    limit;
    totalPages;
}
exports.CorporateAccountListResponseDto = CorporateAccountListResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Corporate accounts', type: [CorporateAccountResponseDto] }),
    __metadata("design:type", Array)
], CorporateAccountListResponseDto.prototype, "corporateAccounts", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total count' }),
    __metadata("design:type", Number)
], CorporateAccountListResponseDto.prototype, "total", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Page number' }),
    __metadata("design:type", Number)
], CorporateAccountListResponseDto.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Items per page' }),
    __metadata("design:type", Number)
], CorporateAccountListResponseDto.prototype, "limit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total pages' }),
    __metadata("design:type", Number)
], CorporateAccountListResponseDto.prototype, "totalPages", void 0);
//# sourceMappingURL=corporate-account-response.dto.js.map