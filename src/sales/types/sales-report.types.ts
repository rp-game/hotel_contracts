/**
 * Sales Report Response Types
 * Defines all response types for sales reporting features including win/loss analysis,
 * performance metrics, pipeline forecasting, and team scorecards.
 */

/**
 * Trend data point for time-series metrics
 * Phase 1: Empty in most reports, included in type for future Phase 2 implementation
 */
export interface TrendDataPoint {
  date: string;
  value: number;
}

/**
 * Win/Loss Summary Report
 * High-level overview of deal outcomes and performance metrics
 */
export interface WinLossSummaryReport {
  totalDeals: number;
  wonCount: number;
  lostCount: number;
  pendingCount: number;
  winRate: number; // percentage 0-100
  avgWonValue: number;
  avgLostValue: number;
  trendData: Array<{ date: string; winRate: number }>; // empty in Phase 1
}

/**
 * Loss Reason Type
 * Detailed breakdown of deal loss reasons with trend analysis
 */
export interface LossReason {
  reasonId: string;
  reasonCode: string;
  reasonLabel: string;
  count: number;
  percent: number;
  avgValue: number;
  trend?: Array<{ period: string; count: number }>; // empty in Phase 1
}

/**
 * Loss Analysis Report
 * Comprehensive analysis of why deals are lost, by reason and by staff member
 */
export interface LossAnalysisReport {
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
export interface SalesRepPerformance {
  staffId: string;
  staffName: string;
  wonCount: number;
  lostCount: number;
  pendingCount: number;
  winRate: number;
  totalRevenue: number;
  avgDealValue: number;
  closeTime: number; // days
  trend: Array<{ period: string; winRate: number }>; // empty in Phase 1
}

/**
 * Win Analysis Report
 * Top performing sales representatives and team trends
 */
export interface WinAnalysisReport {
  topPerformers: SalesRepPerformance[];
  trend: Array<{ date: string; teamWinRate: number }>; // empty in Phase 1
}

/**
 * Stuck Deal
 * Deal that has been open for an extended period
 */
export interface StuckDeal {
  dealId: string;
  createdAt: string; // ISO 8601
  daysOpen: number;
}

/**
 * Pipeline Forecast Report
 * Revenue pipeline analysis and deal velocity metrics
 */
export interface PipelineForecastReport {
  pipelineValue: number;
  openDealCount: number;
  globalWinRate: number; // percentage
  forecastRevenue: number;
  pipelineVelocity: number; // deals/week
  stuckDeals: StuckDeal[];
  trend: Array<{ date: string; pipelineValue: number }>; // empty in Phase 1
  forecastAccuracy?: number; // Phase 2, optional
}

/**
 * Performance Scorecard Item
 * Comprehensive performance metrics for a single team member
 */
export interface ScorecardItem {
  staffId: string;
  staffName: string;
  wonCount: number;
  lostCount: number;
  pendingCount: number;
  winRate: number;
  totalRevenue: number;
  pipelineValue: number;
  closeTime: number; // days
  responseTime: number; // hours
  trend: Array<{ period: string; winRate: number }>; // empty in Phase 1
}

/**
 * Performance Scorecard Report
 * Team-wide performance scorecard with individual metrics
 */
export interface PerformanceScorecardReport {
  scorecard: ScorecardItem[];
}
