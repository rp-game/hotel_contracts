"use strict";
/**
 * Travel Agent Types
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
exports.TravelAgentDetails = exports.TravelAgentSummary = void 0;
const swagger_1 = require("@nestjs/swagger");
class TravelAgentSummary {
    id;
    agentCode;
    agentName;
    contactPerson;
    phone;
    email;
    commissionRate;
    commissionType;
    status;
}
exports.TravelAgentSummary = TravelAgentSummary;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Travel agent ID' }),
    __metadata("design:type", String)
], TravelAgentSummary.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Agent code' }),
    __metadata("design:type", String)
], TravelAgentSummary.prototype, "agentCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Agent name' }),
    __metadata("design:type", String)
], TravelAgentSummary.prototype, "agentName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Contact person' }),
    __metadata("design:type", String)
], TravelAgentSummary.prototype, "contactPerson", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Phone' }),
    __metadata("design:type", String)
], TravelAgentSummary.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Email' }),
    __metadata("design:type", String)
], TravelAgentSummary.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Commission rate' }),
    __metadata("design:type", Number)
], TravelAgentSummary.prototype, "commissionRate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Commission type' }),
    __metadata("design:type", String)
], TravelAgentSummary.prototype, "commissionType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Status' }),
    __metadata("design:type", String)
], TravelAgentSummary.prototype, "status", void 0);
class TravelAgentDetails extends TravelAgentSummary {
    iataNumber;
    taxCode;
    address;
    paymentTermDays;
    bankAccount;
    bankName;
    contractNumber;
    contractStartDate;
    contractEndDate;
    notes;
    createdByName;
    createdAt;
    updatedAt;
}
exports.TravelAgentDetails = TravelAgentDetails;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'IATA number' }),
    __metadata("design:type", String)
], TravelAgentDetails.prototype, "iataNumber", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Tax code' }),
    __metadata("design:type", String)
], TravelAgentDetails.prototype, "taxCode", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Address' }),
    __metadata("design:type", String)
], TravelAgentDetails.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Payment term in days' }),
    __metadata("design:type", Number)
], TravelAgentDetails.prototype, "paymentTermDays", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Bank account' }),
    __metadata("design:type", String)
], TravelAgentDetails.prototype, "bankAccount", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Bank name' }),
    __metadata("design:type", String)
], TravelAgentDetails.prototype, "bankName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Contract number' }),
    __metadata("design:type", String)
], TravelAgentDetails.prototype, "contractNumber", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Contract start date' }),
    __metadata("design:type", String)
], TravelAgentDetails.prototype, "contractStartDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Contract end date' }),
    __metadata("design:type", String)
], TravelAgentDetails.prototype, "contractEndDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Notes' }),
    __metadata("design:type", String)
], TravelAgentDetails.prototype, "notes", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Created by name' }),
    __metadata("design:type", String)
], TravelAgentDetails.prototype, "createdByName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Created at' }),
    __metadata("design:type", Date)
], TravelAgentDetails.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Updated at' }),
    __metadata("design:type", Date)
], TravelAgentDetails.prototype, "updatedAt", void 0);
//# sourceMappingURL=travel-agent.types.js.map