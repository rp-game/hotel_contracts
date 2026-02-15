"use strict";
/**
 * Revenue Stats Types
 *
 * Types for revenue statistics and analytics
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
exports.RevenueStatsResponse = exports.TopTenantItem = exports.RevenueStatsSummary = exports.RevenueDataPoint = void 0;
const swagger_1 = require("@nestjs/swagger");
/**
 * Revenue Data Point
 */
class RevenueDataPoint {
    period;
    totalRevenue;
    invoiceCount;
    paidInvoices;
    overdueInvoices;
    averageInvoiceAmount;
    paymentCount;
    refundAmount;
}
exports.RevenueDataPoint = RevenueDataPoint;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Period (e.g., "2024-01", "2024-Q1", "2024-12-01")', example: '2024-01' }),
    __metadata("design:type", String)
], RevenueDataPoint.prototype, "period", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total revenue for the period', example: 150000 }),
    __metadata("design:type", Number)
], RevenueDataPoint.prototype, "totalRevenue", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of invoices', example: 25 }),
    __metadata("design:type", Number)
], RevenueDataPoint.prototype, "invoiceCount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of paid invoices', example: 20 }),
    __metadata("design:type", Number)
], RevenueDataPoint.prototype, "paidInvoices", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of overdue invoices', example: 3 }),
    __metadata("design:type", Number)
], RevenueDataPoint.prototype, "overdueInvoices", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Average invoice amount', example: 6000 }),
    __metadata("design:type", Number)
], RevenueDataPoint.prototype, "averageInvoiceAmount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of payments', example: 22 }),
    __metadata("design:type", Number)
], RevenueDataPoint.prototype, "paymentCount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total refund amount', example: 5000 }),
    __metadata("design:type", Number)
], RevenueDataPoint.prototype, "refundAmount", void 0);
/**
 * Revenue Stats Summary
 */
class RevenueStatsSummary {
    totalRevenue;
    totalInvoices;
    totalPayments;
    totalRefunds;
    averageRevenue;
    growthRate;
}
exports.RevenueStatsSummary = RevenueStatsSummary;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total revenue', example: 500000 }),
    __metadata("design:type", Number)
], RevenueStatsSummary.prototype, "totalRevenue", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total number of invoices', example: 150 }),
    __metadata("design:type", Number)
], RevenueStatsSummary.prototype, "totalInvoices", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total number of payments', example: 140 }),
    __metadata("design:type", Number)
], RevenueStatsSummary.prototype, "totalPayments", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total refunds amount', example: 15000 }),
    __metadata("design:type", Number)
], RevenueStatsSummary.prototype, "totalRefunds", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Average revenue', example: 3333.33 }),
    __metadata("design:type", Number)
], RevenueStatsSummary.prototype, "averageRevenue", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Revenue growth rate', example: 12.5 }),
    __metadata("design:type", Number)
], RevenueStatsSummary.prototype, "growthRate", void 0);
/**
 * Top Tenant Item
 */
class TopTenantItem {
    tenantId;
    tenantName;
    revenue;
    invoiceCount;
}
exports.TopTenantItem = TopTenantItem;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID', example: '123e4567-e89b-12d3-a456-426614174000' }),
    __metadata("design:type", String)
], TopTenantItem.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant name', example: 'Grand Hotel' }),
    __metadata("design:type", String)
], TopTenantItem.prototype, "tenantName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Revenue amount', example: 75000 }),
    __metadata("design:type", Number)
], TopTenantItem.prototype, "revenue", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of invoices', example: 12 }),
    __metadata("design:type", Number)
], TopTenantItem.prototype, "invoiceCount", void 0);
/**
 * Revenue Stats Response
 */
class RevenueStatsResponse {
    currency;
    startDate;
    endDate;
    groupBy;
    summary;
    data;
    topTenants;
}
exports.RevenueStatsResponse = RevenueStatsResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Currency code', example: 'VND' }),
    __metadata("design:type", String)
], RevenueStatsResponse.prototype, "currency", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Start date', example: '2024-01-01' }),
    __metadata("design:type", String)
], RevenueStatsResponse.prototype, "startDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'End date', example: '2024-12-31' }),
    __metadata("design:type", String)
], RevenueStatsResponse.prototype, "endDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Grouping period', example: 'month' }),
    __metadata("design:type", String)
], RevenueStatsResponse.prototype, "groupBy", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Revenue summary', type: RevenueStatsSummary }),
    __metadata("design:type", RevenueStatsSummary)
], RevenueStatsResponse.prototype, "summary", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Revenue data points', type: [RevenueDataPoint] }),
    __metadata("design:type", Array)
], RevenueStatsResponse.prototype, "data", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Top tenants by revenue', type: [TopTenantItem] }),
    __metadata("design:type", Array)
], RevenueStatsResponse.prototype, "topTenants", void 0);
//# sourceMappingURL=revenue.types.js.map