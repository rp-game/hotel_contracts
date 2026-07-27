"use strict";
/**
 * Marketing Stats NATS Contracts
 *
 * Pattern: crm.marketing.stats
 * Handler: crm-service (AutomationController)
 * Called by: api-gateway (CrmController)
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
exports.MarketingStatsNatsResponse = exports.TopPerformingCampaignDto = exports.MarketingPerformanceMonthDto = exports.GetMarketingStatsNatsRequest = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
/**
 * Marketing Stats Request
 * Pattern: crm.marketing.stats
 *
 * UNIFIED CONTRACT - Used by both NATS and REST layers
 * @standardized 2026-02-15
 */
class GetMarketingStatsNatsRequest {
    tenantId;
    startDate;
    endDate;
    campaignType;
    includeHistorical;
    includeTopCampaigns;
}
exports.GetMarketingStatsNatsRequest = GetMarketingStatsNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID', example: '550e8400-e29b-41d4-a716-446655440000' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetMarketingStatsNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Start date for filtering (ISO string)', example: '2026-01-01' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetMarketingStatsNatsRequest.prototype, "startDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'End date for filtering (ISO string)', example: '2026-12-31' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetMarketingStatsNatsRequest.prototype, "endDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Filter by campaign type',
        enum: ['email', 'sms', 'all'],
        example: 'all'
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(['email', 'sms', 'all']),
    __metadata("design:type", String)
], GetMarketingStatsNatsRequest.prototype, "campaignType", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Include historical performance data', example: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], GetMarketingStatsNatsRequest.prototype, "includeHistorical", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Include top performing campaigns', example: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], GetMarketingStatsNatsRequest.prototype, "includeTopCampaigns", void 0);
/**
 * Marketing Performance by Month
 */
class MarketingPerformanceMonthDto {
    month;
    emailCampaigns;
    smsCampaigns;
    totalRevenue;
    avgOpenRate;
    customersReached;
}
exports.MarketingPerformanceMonthDto = MarketingPerformanceMonthDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Month identifier', example: '2026-01' }),
    __metadata("design:type", String)
], MarketingPerformanceMonthDto.prototype, "month", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Email campaigns in month', example: 15 }),
    __metadata("design:type", Number)
], MarketingPerformanceMonthDto.prototype, "emailCampaigns", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'SMS campaigns in month', example: 8 }),
    __metadata("design:type", Number)
], MarketingPerformanceMonthDto.prototype, "smsCampaigns", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total revenue in month', example: '125000.50' }),
    __metadata("design:type", String)
], MarketingPerformanceMonthDto.prototype, "totalRevenue", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Average open rate in month', example: '24.5' }),
    __metadata("design:type", String)
], MarketingPerformanceMonthDto.prototype, "avgOpenRate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Customers reached in month', example: 5420 }),
    __metadata("design:type", Number)
], MarketingPerformanceMonthDto.prototype, "customersReached", void 0);
/**
 * Top Performing Campaign
 */
class TopPerformingCampaignDto {
    id;
    name;
    type;
    openRate;
    clickRate;
    revenueGenerated;
    recipients;
    sentAt;
}
exports.TopPerformingCampaignDto = TopPerformingCampaignDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Campaign ID' }),
    __metadata("design:type", String)
], TopPerformingCampaignDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Campaign name' }),
    __metadata("design:type", String)
], TopPerformingCampaignDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Campaign type', example: 'email' }),
    __metadata("design:type", String)
], TopPerformingCampaignDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Open rate percentage', example: '45.2' }),
    __metadata("design:type", String)
], TopPerformingCampaignDto.prototype, "openRate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Click rate percentage', example: '12.8' }),
    __metadata("design:type", String)
], TopPerformingCampaignDto.prototype, "clickRate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Revenue generated', example: '25000.00' }),
    __metadata("design:type", String)
], TopPerformingCampaignDto.prototype, "revenueGenerated", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of recipients', example: 3500 }),
    __metadata("design:type", Number)
], TopPerformingCampaignDto.prototype, "recipients", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Sent timestamp', example: '2026-02-01T10:00:00Z' }),
    __metadata("design:type", String)
], TopPerformingCampaignDto.prototype, "sentAt", void 0);
/**
 * Marketing Stats Response
 *
 * UNIFIED CONTRACT - Used by both NATS and REST layers
 * @standardized 2026-02-15
 * @contract_accuracy PERFECT (Matches both NATS handler and API Gateway)
 */
class MarketingStatsNatsResponse {
    totalEmailCampaigns;
    totalSmsCampaigns;
    totalAutomationRules;
    activeAutomationRules;
    avgEmailOpenRate;
    avgEmailClickRate;
    avgSmsDeliveryRate;
    totalRevenue;
    totalCustomersReached;
    emailsSentThisMonth;
    smseSentThisMonth;
    performanceByMonth;
    topPerformingCampaigns;
}
exports.MarketingStatsNatsResponse = MarketingStatsNatsResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total email campaigns sent', example: 125 }),
    __metadata("design:type", Number)
], MarketingStatsNatsResponse.prototype, "totalEmailCampaigns", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total SMS campaigns sent', example: 87 }),
    __metadata("design:type", Number)
], MarketingStatsNatsResponse.prototype, "totalSmsCampaigns", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total automation rules configured', example: 45 }),
    __metadata("design:type", Number)
], MarketingStatsNatsResponse.prototype, "totalAutomationRules", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of active automation rules', example: 32 }),
    __metadata("design:type", Number)
], MarketingStatsNatsResponse.prototype, "activeAutomationRules", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Average email open rate (decimal string for precision)',
        example: '23.45',
        type: 'string',
        pattern: '^\\d+(\\.\\d{1,2})?$'
    }),
    __metadata("design:type", String)
], MarketingStatsNatsResponse.prototype, "avgEmailOpenRate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Average email click rate (decimal string for precision)',
        example: '8.75',
        type: 'string',
        pattern: '^\\d+(\\.\\d{1,2})?$'
    }),
    __metadata("design:type", String)
], MarketingStatsNatsResponse.prototype, "avgEmailClickRate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Average SMS delivery rate (decimal string for precision)',
        example: '97.80',
        type: 'string',
        pattern: '^\\d+(\\.\\d{1,2})?$'
    }),
    __metadata("design:type", String)
], MarketingStatsNatsResponse.prototype, "avgSmsDeliveryRate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Total revenue generated from marketing campaigns (decimal string for precision)',
        example: '1250000.75',
        type: 'string',
        pattern: '^\\d+(\\.\\d{1,2})?$'
    }),
    __metadata("design:type", String)
], MarketingStatsNatsResponse.prototype, "totalRevenue", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total customers reached across all campaigns', example: 15420 }),
    __metadata("design:type", Number)
], MarketingStatsNatsResponse.prototype, "totalCustomersReached", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Emails sent in current month', example: 2340 }),
    __metadata("design:type", Number)
], MarketingStatsNatsResponse.prototype, "emailsSentThisMonth", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'SMS sent in current month', example: 1250 }),
    __metadata("design:type", Number)
], MarketingStatsNatsResponse.prototype, "smseSentThisMonth", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Campaign performance breakdown by month',
        type: [MarketingPerformanceMonthDto]
    }),
    __metadata("design:type", Array)
], MarketingStatsNatsResponse.prototype, "performanceByMonth", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Top performing campaigns with metrics',
        type: [TopPerformingCampaignDto]
    }),
    __metadata("design:type", Array)
], MarketingStatsNatsResponse.prototype, "topPerformingCampaigns", void 0);
//# sourceMappingURL=marketing-stats.nats.js.map