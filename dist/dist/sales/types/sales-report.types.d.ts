/**
 * Sales Report Response Types
 * Defines all response types for sales reporting features including win/loss analysis,
 * performance metrics, pipeline forecasting, and team scorecards.
 */
/**
 * Trend data point for time-series metrics
 * Phase 1: Empty in most reports, included in type for future Phase 2 implementation
 */
export declare class TrendDataPoint {
    date: string;
    value: number;
}
/**
 * Win/Loss Summary Report
 * High-level overview of deal outcomes and performance metrics
 */
export declare class WinLossSummaryReport {
    totalDeals: number;
    wonCount: number;
    lostCount: number;
    pendingCount: number;
    winRate: number;
    avgWonValue: number;
    avgLostValue: number;
    trendData?: Array<{
        date: string;
        winRate: number;
    }>;
}
/**
 * Loss Reason Type
 * Detailed breakdown of deal loss reasons with trend analysis
 */
export declare class LossReason {
    reasonId: string;
    reasonCode: string;
    reasonLabel: string;
    count: number;
    percent: number;
    avgValue: number;
    trend?: Array<{
        period: string;
        count: number;
    }>;
}
/**
 * Loss Analysis Report
 * Comprehensive analysis of why deals are lost, by reason and by staff member
 */
export declare class LossAnalysisReport {
    lossReasons: LossReason[];
    lossReasonByStaff: Array<{
        staffId: string;
        staffName: string;
        reason: string;
        count: number;
    }>;
}
/**
 * Sales Rep Performance Metrics
 * Individual sales representative performance and activity metrics
 */
export declare class SalesRepPerformance {
    staffId: string;
    staffName: string;
    wonCount: number;
    lostCount: number;
    pendingCount: number;
    winRate: number;
    totalRevenue: number;
    avgDealValue: number;
    closeTime: number;
    trend?: Array<{
        period: string;
        winRate: number;
    }>;
}
/**
 * Win Analysis Report
 * Top performing sales representatives and team trends
 */
export declare class WinAnalysisReport {
    topPerformers: SalesRepPerformance[];
    trend?: Array<{
        date: string;
        teamWinRate: number;
    }>;
}
/**
 * Stuck Deal
 * Deal that has been open for an extended period
 */
export declare class StuckDeal {
    dealId: string;
    createdAt: string;
    daysOpen: number;
}
/**
 * Pipeline Forecast Report
 * Revenue pipeline analysis and deal velocity metrics
 */
export declare class PipelineForecastReport {
    pipelineValue: number;
    openDealCount: number;
    globalWinRate: number;
    forecastRevenue: number;
    pipelineVelocity: number;
    stuckDeals: StuckDeal[];
    trend?: Array<{
        date: string;
        pipelineValue: number;
    }>;
    forecastAccuracy?: number;
}
/**
 * Performance Scorecard Item
 * Comprehensive performance metrics for a single team member
 */
export declare class ScorecardItem {
    staffId: string;
    staffName: string;
    wonCount: number;
    lostCount: number;
    pendingCount: number;
    winRate: number;
    totalRevenue: number;
    pipelineValue: number;
    closeTime: number;
    responseTime: number;
    trend?: Array<{
        period: string;
        winRate: number;
    }>;
}
/**
 * Performance Scorecard Report
 * Team-wide performance scorecard with individual metrics
 */
export declare class PerformanceScorecardReport {
    scorecard: ScorecardItem[];
}
//# sourceMappingURL=sales-report.types.d.ts.map