"use strict";
/**
 * Corporate Account Types
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
exports.CorporateAccountDetails = exports.CorporateAccountSummary = void 0;
const swagger_1 = require("@nestjs/swagger");
class CorporateAccountSummary {
    id;
    accountCode;
    companyName;
    contactPerson;
    contactPhone;
    contactEmail;
    salesPersonName;
    status;
}
exports.CorporateAccountSummary = CorporateAccountSummary;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Corporate account ID' }),
    __metadata("design:type", String)
], CorporateAccountSummary.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Account code' }),
    __metadata("design:type", String)
], CorporateAccountSummary.prototype, "accountCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Company name' }),
    __metadata("design:type", String)
], CorporateAccountSummary.prototype, "companyName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Contact person' }),
    __metadata("design:type", String)
], CorporateAccountSummary.prototype, "contactPerson", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Contact phone' }),
    __metadata("design:type", String)
], CorporateAccountSummary.prototype, "contactPhone", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Contact email' }),
    __metadata("design:type", String)
], CorporateAccountSummary.prototype, "contactEmail", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Sales person name' }),
    __metadata("design:type", String)
], CorporateAccountSummary.prototype, "salesPersonName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Status' }),
    __metadata("design:type", String)
], CorporateAccountSummary.prototype, "status", void 0);
class CorporateAccountDetails extends CorporateAccountSummary {
    industry;
    taxCode;
    address;
    salesPersonId;
    paymentMethod;
    paymentTermDays;
    creditLimit;
    contractNumber;
    contractStartDate;
    contractEndDate;
    projectedRoomNights;
    notes;
    createdByName;
    createdAt;
    updatedAt;
}
exports.CorporateAccountDetails = CorporateAccountDetails;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Industry' }),
    __metadata("design:type", String)
], CorporateAccountDetails.prototype, "industry", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Tax code' }),
    __metadata("design:type", String)
], CorporateAccountDetails.prototype, "taxCode", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Address' }),
    __metadata("design:type", String)
], CorporateAccountDetails.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Sales person ID' }),
    __metadata("design:type", String)
], CorporateAccountDetails.prototype, "salesPersonId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Payment method' }),
    __metadata("design:type", String)
], CorporateAccountDetails.prototype, "paymentMethod", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Payment term in days' }),
    __metadata("design:type", Number)
], CorporateAccountDetails.prototype, "paymentTermDays", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Credit limit' }),
    __metadata("design:type", Number)
], CorporateAccountDetails.prototype, "creditLimit", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Contract number' }),
    __metadata("design:type", String)
], CorporateAccountDetails.prototype, "contractNumber", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Contract start date' }),
    __metadata("design:type", String)
], CorporateAccountDetails.prototype, "contractStartDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Contract end date' }),
    __metadata("design:type", String)
], CorporateAccountDetails.prototype, "contractEndDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Projected room nights' }),
    __metadata("design:type", Number)
], CorporateAccountDetails.prototype, "projectedRoomNights", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Notes' }),
    __metadata("design:type", String)
], CorporateAccountDetails.prototype, "notes", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Created by name' }),
    __metadata("design:type", String)
], CorporateAccountDetails.prototype, "createdByName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Created at' }),
    __metadata("design:type", Date)
], CorporateAccountDetails.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Updated at' }),
    __metadata("design:type", Date)
], CorporateAccountDetails.prototype, "updatedAt", void 0);
//# sourceMappingURL=corporate-account.types.js.map