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
exports.GetARBySalesNatsRequest = exports.GetAROverviewNatsRequest = exports.GenerateARStatementNatsRequest = exports.GetARSummaryNatsRequest = exports.FindARTransactionsNatsRequest = exports.CreateARTransactionNatsRequest = void 0;
const swagger_1 = require("@nestjs/swagger");
/**
 * AR Transaction NATS Contracts
 *
 * NATS Patterns:
 *   - ar-transaction.create
 *   - ar-transaction.find_all
 *   - ar-summary.get
 *   - ar-statement.generate
 *   - ar-overview.get
 *   - ar-by-sales.get
 */
class CreateARTransactionNatsRequest {
    tenantId;
    hotelId;
    corporateAccountId;
    bookingId;
    transactionType;
    amount;
    description;
    referenceNumber;
    transactionDate;
    dueDate;
    createdBy;
    createdByName;
    partnerType;
    travelAgentId;
}
exports.CreateARTransactionNatsRequest = CreateARTransactionNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateARTransactionNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateARTransactionNatsRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateARTransactionNatsRequest.prototype, "corporateAccountId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], CreateARTransactionNatsRequest.prototype, "bookingId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateARTransactionNatsRequest.prototype, "transactionType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], CreateARTransactionNatsRequest.prototype, "amount", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], CreateARTransactionNatsRequest.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], CreateARTransactionNatsRequest.prototype, "referenceNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateARTransactionNatsRequest.prototype, "transactionDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], CreateARTransactionNatsRequest.prototype, "dueDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateARTransactionNatsRequest.prototype, "createdBy", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], CreateARTransactionNatsRequest.prototype, "createdByName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], CreateARTransactionNatsRequest.prototype, "partnerType", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], CreateARTransactionNatsRequest.prototype, "travelAgentId", void 0);
class FindARTransactionsNatsRequest {
    tenantId;
    corporateAccountId;
    hotelId;
    transactionType;
    dateFrom;
    dateTo;
    page;
    limit;
}
exports.FindARTransactionsNatsRequest = FindARTransactionsNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], FindARTransactionsNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], FindARTransactionsNatsRequest.prototype, "corporateAccountId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], FindARTransactionsNatsRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], FindARTransactionsNatsRequest.prototype, "transactionType", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], FindARTransactionsNatsRequest.prototype, "dateFrom", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], FindARTransactionsNatsRequest.prototype, "dateTo", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", Number)
], FindARTransactionsNatsRequest.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", Number)
], FindARTransactionsNatsRequest.prototype, "limit", void 0);
class GetARSummaryNatsRequest {
    tenantId;
    corporateAccountId;
}
exports.GetARSummaryNatsRequest = GetARSummaryNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], GetARSummaryNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], GetARSummaryNatsRequest.prototype, "corporateAccountId", void 0);
class GenerateARStatementNatsRequest {
    tenantId;
    corporateAccountId;
    dateFrom;
    dateTo;
}
exports.GenerateARStatementNatsRequest = GenerateARStatementNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], GenerateARStatementNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], GenerateARStatementNatsRequest.prototype, "corporateAccountId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], GenerateARStatementNatsRequest.prototype, "dateFrom", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], GenerateARStatementNatsRequest.prototype, "dateTo", void 0);
class GetAROverviewNatsRequest {
    tenantId;
    hotelId;
    partnerType;
    salesPersonId;
    agingBucket;
    search;
    page;
    limit;
}
exports.GetAROverviewNatsRequest = GetAROverviewNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], GetAROverviewNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], GetAROverviewNatsRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], GetAROverviewNatsRequest.prototype, "partnerType", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], GetAROverviewNatsRequest.prototype, "salesPersonId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], GetAROverviewNatsRequest.prototype, "agingBucket", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], GetAROverviewNatsRequest.prototype, "search", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", Number)
], GetAROverviewNatsRequest.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", Number)
], GetAROverviewNatsRequest.prototype, "limit", void 0);
class GetARBySalesNatsRequest {
    tenantId;
    hotelId;
}
exports.GetARBySalesNatsRequest = GetARBySalesNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], GetARBySalesNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], GetARBySalesNatsRequest.prototype, "hotelId", void 0);
//# sourceMappingURL=ar-transaction.nats.js.map