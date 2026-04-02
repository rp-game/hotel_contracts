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
exports.PerformanceScorecardReport = exports.ScorecardItem = exports.PipelineForecastReport = exports.StuckDeal = exports.WinAnalysisReport = exports.SalesRepPerformance = exports.LossAnalysisReport = exports.LossReason = exports.WinLossSummaryReport = exports.TrendDataPoint = void 0;
const swagger_1 = require("@nestjs/swagger");
/**
 * Sales Report Response Types
 * Defines all response types for sales reporting features including win/loss analysis,
 * performance metrics, pipeline forecasting, and team scorecards.
 */
/**
 * Trend data point for time-series metrics
 * Phase 1: Empty in most reports, included in type for future Phase 2 implementation
 */
class TrendDataPoint {
    date;
    value;
}
exports.TrendDataPoint = TrendDataPoint;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ISO 8601 date string', example: '2026-04-01' }),
    __metadata("design:type", String)
], TrendDataPoint.prototype, "date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Trend value', example: 45.5 }),
    __metadata("design:type", Number)
], TrendDataPoint.prototype, "value", void 0);
/**
 * Win/Loss Summary Report
 * High-level overview of deal outcomes and performance metrics
 */
class WinLossSummaryReport {
    totalDeals;
    wonCount;
    lostCount;
    pendingCount;
    winRate;
    avgWonValue;
    avgLostValue;
    trendData;
}
exports.WinLossSummaryReport = WinLossSummaryReport;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total closed deals (won + lost)', example: 42 }),
    __metadata("design:type", Number)
], WinLossSummaryReport.prototype, "totalDeals", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of won deals', example: 25 }),
    __metadata("design:type", Number)
], WinLossSummaryReport.prototype, "wonCount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of lost deals', example: 17 }),
    __metadata("design:type", Number)
], WinLossSummaryReport.prototype, "lostCount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of pending deals', example: 8 }),
    __metadata("design:type", Number)
], WinLossSummaryReport.prototype, "pendingCount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Win rate percentage (0-100)', example: 59.52 }),
    __metadata("design:type", Number)
], WinLossSummaryReport.prototype, "winRate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Average value of won deals', example: 5000 }),
    __metadata("design:type", Number)
], WinLossSummaryReport.prototype, "avgWonValue", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Average value of lost deals', example: 3500 }),
    __metadata("design:type", Number)
], WinLossSummaryReport.prototype, "avgLostValue", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Trend data for time-series analysis', type: [Object], example: [] }),
    __metadata("design:type", Array)
], WinLossSummaryReport.prototype, "trendData", void 0);
/**
 * Loss Reason Type
 * Detailed breakdown of deal loss reasons with trend analysis
 */
class LossReason {
    reasonId;
    reasonCode;
    reasonLabel;
    count;
    percent;
    avgValue;
    trend;
}
exports.LossReason = LossReason;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Unique identifier for loss reason', example: 'lr-001' }),
    __metadata("design:type", String)
], LossReason.prototype, "reasonId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Loss reason code', example: 'PRICE_TOO_HIGH' }),
    __metadata("design:type", String)
], LossReason.prototype, "reasonCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Human-readable loss reason label', example: 'Price Too High' }),
    __metadata("design:type", String)
], LossReason.prototype, "reasonLabel", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of deals lost for this reason', example: 8 }),
    __metadata("design:type", Number)
], LossReason.prototype, "count", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Percentage of total losses', example: 47.06 }),
    __metadata("design:type", Number)
], LossReason.prototype, "percent", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Average deal value for losses with this reason', example: 3500 }),
    __metadata("design:type", Number)
], LossReason.prototype, "avgValue", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Trend data for this reason', type: [Object], example: [] }),
    __metadata("design:type", Array)
], LossReason.prototype, "trend", void 0);
/**
 * Loss Analysis Report
 * Comprehensive analysis of why deals are lost, by reason and by staff member
 */
class LossAnalysisReport {
    lossReasons;
    lossReasonByStaff;
}
exports.LossAnalysisReport = LossAnalysisReport;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Breakdown of losses by reason', type: [LossReason] }),
    __metadata("design:type", Array)
], LossAnalysisReport.prototype, "lossReasons", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Loss breakdown by staff member and reason',
        type: [Object],
        example: [
            { staffId: 'staff-001', staffName: 'John Doe', reason: 'Price Too High', count: 3 },
        ],
    }),
    __metadata("design:type", Array)
], LossAnalysisReport.prototype, "lossReasonByStaff", void 0);
/**
 * Sales Rep Performance Metrics
 * Individual sales representative performance and activity metrics
 */
class SalesRepPerformance {
    staffId;
    staffName;
    wonCount;
    lostCount;
    pendingCount;
    winRate;
    totalRevenue;
    avgDealValue;
    closeTime;
    trend;
}
exports.SalesRepPerformance = SalesRepPerformance;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Sales representative ID', example: 'staff-001' }),
    __metadata("design:type", String)
], SalesRepPerformance.prototype, "staffId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Sales representative name', example: 'John Doe' }),
    __metadata("design:type", String)
], SalesRepPerformance.prototype, "staffName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of won deals', example: 15 }),
    __metadata("design:type", Number)
], SalesRepPerformance.prototype, "wonCount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of lost deals', example: 8 }),
    __metadata("design:type", Number)
], SalesRepPerformance.prototype, "lostCount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of pending deals', example: 5 }),
    __metadata("design:type", Number)
], SalesRepPerformance.prototype, "pendingCount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Win rate percentage (0-100)', example: 65.22 }),
    __metadata("design:type", Number)
], SalesRepPerformance.prototype, "winRate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total revenue from won deals', example: 75000 }),
    __metadata("design:type", Number)
], SalesRepPerformance.prototype, "totalRevenue", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Average value per deal', example: 5000 }),
    __metadata("design:type", Number)
], SalesRepPerformance.prototype, "avgDealValue", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Average days to close a deal', example: 12.5 }),
    __metadata("design:type", Number)
], SalesRepPerformance.prototype, "closeTime", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Trend data for win rate', type: [Object], example: [] }),
    __metadata("design:type", Array)
], SalesRepPerformance.prototype, "trend", void 0);
/**
 * Win Analysis Report
 * Top performing sales representatives and team trends
 */
class WinAnalysisReport {
    topPerformers;
    trend;
}
exports.WinAnalysisReport = WinAnalysisReport;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Top performing sales representatives', type: [SalesRepPerformance] }),
    __metadata("design:type", Array)
], WinAnalysisReport.prototype, "topPerformers", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Team trend data', type: [Object], example: [] }),
    __metadata("design:type", Array)
], WinAnalysisReport.prototype, "trend", void 0);
/**
 * Stuck Deal
 * Deal that has been open for an extended period
 */
class StuckDeal {
    dealId;
    createdAt;
    daysOpen;
}
exports.StuckDeal = StuckDeal;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Deal ID', example: 'deal-001' }),
    __metadata("design:type", String)
], StuckDeal.prototype, "dealId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Deal creation date (ISO 8601)', example: '2026-03-15T10:30:00Z' }),
    __metadata("design:type", String)
], StuckDeal.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of days the deal has been open', example: 18 }),
    __metadata("design:type", Number)
], StuckDeal.prototype, "daysOpen", void 0);
/**
 * Pipeline Forecast Report
 * Revenue pipeline analysis and deal velocity metrics
 */
class PipelineForecastReport {
    pipelineValue;
    openDealCount;
    globalWinRate;
    forecastRevenue;
    pipelineVelocity;
    stuckDeals;
    trend;
    forecastAccuracy;
}
exports.PipelineForecastReport = PipelineForecastReport;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total pipeline value', example: 150000 }),
    __metadata("design:type", Number)
], PipelineForecastReport.prototype, "pipelineValue", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of open deals', example: 8 }),
    __metadata("design:type", Number)
], PipelineForecastReport.prototype, "openDealCount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Global win rate percentage (0-100)', example: 59.52 }),
    __metadata("design:type", Number)
], PipelineForecastReport.prototype, "globalWinRate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Forecasted revenue based on pipeline and win rate', example: 89280 }),
    __metadata("design:type", Number)
], PipelineForecastReport.prototype, "forecastRevenue", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Pipeline velocity (deals per week)', example: 2.5 }),
    __metadata("design:type", Number)
], PipelineForecastReport.prototype, "pipelineVelocity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'List of deals stuck in pipeline (> 14 days)', type: [StuckDeal] }),
    __metadata("design:type", Array)
], PipelineForecastReport.prototype, "stuckDeals", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Pipeline value trend data', type: [Object], example: [] }),
    __metadata("design:type", Array)
], PipelineForecastReport.prototype, "trend", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Forecast accuracy metric (Phase 2)', example: 85.5 }),
    __metadata("design:type", Number)
], PipelineForecastReport.prototype, "forecastAccuracy", void 0);
/**
 * Performance Scorecard Item
 * Comprehensive performance metrics for a single team member
 */
class ScorecardItem {
    staffId;
    staffName;
    wonCount;
    lostCount;
    pendingCount;
    winRate;
    totalRevenue;
    pipelineValue;
    closeTime;
    responseTime;
    trend;
}
exports.ScorecardItem = ScorecardItem;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Staff member ID', example: 'staff-001' }),
    __metadata("design:type", String)
], ScorecardItem.prototype, "staffId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Staff member name', example: 'John Doe' }),
    __metadata("design:type", String)
], ScorecardItem.prototype, "staffName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of won deals', example: 15 }),
    __metadata("design:type", Number)
], ScorecardItem.prototype, "wonCount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of lost deals', example: 8 }),
    __metadata("design:type", Number)
], ScorecardItem.prototype, "lostCount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of pending deals', example: 5 }),
    __metadata("design:type", Number)
], ScorecardItem.prototype, "pendingCount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Win rate percentage (0-100)', example: 65.22 }),
    __metadata("design:type", Number)
], ScorecardItem.prototype, "winRate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total revenue generated', example: 75000 }),
    __metadata("design:type", Number)
], ScorecardItem.prototype, "totalRevenue", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Pipeline value for this staff member', example: 35000 }),
    __metadata("design:type", Number)
], ScorecardItem.prototype, "pipelineValue", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Average days to close a deal', example: 12.5 }),
    __metadata("design:type", Number)
], ScorecardItem.prototype, "closeTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Average response time in hours', example: 4.2 }),
    __metadata("design:type", Number)
], ScorecardItem.prototype, "responseTime", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Win rate trend data', type: [Object], example: [] }),
    __metadata("design:type", Array)
], ScorecardItem.prototype, "trend", void 0);
/**
 * Performance Scorecard Report
 * Team-wide performance scorecard with individual metrics
 */
class PerformanceScorecardReport {
    scorecard;
}
exports.PerformanceScorecardReport = PerformanceScorecardReport;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Performance metrics for each team member', type: [ScorecardItem] }),
    __metadata("design:type", Array)
], PerformanceScorecardReport.prototype, "scorecard", void 0);
//# sourceMappingURL=sales-report.types.js.map