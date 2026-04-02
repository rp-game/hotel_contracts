import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

/**
 * Sales Report Response Types
 * Defines all response types for sales reporting features including win/loss analysis,
 * performance metrics, pipeline forecasting, and team scorecards.
 */

/**
 * Trend data point for time-series metrics
 * Phase 1: Empty in most reports, included in type for future Phase 2 implementation
 */
export class TrendDataPoint {
  @ApiProperty({ description: 'ISO 8601 date string', example: '2026-04-01' })
  date: string;

  @ApiProperty({ description: 'Trend value', example: 45.5 })
  value: number;
}

/**
 * Win/Loss Summary Report
 * High-level overview of deal outcomes and performance metrics
 */
export class WinLossSummaryReport {
  @ApiProperty({ description: 'Total closed deals (won + lost)', example: 42 })
  totalDeals: number;

  @ApiProperty({ description: 'Number of won deals', example: 25 })
  wonCount: number;

  @ApiProperty({ description: 'Number of lost deals', example: 17 })
  lostCount: number;

  @ApiProperty({ description: 'Number of pending deals', example: 8 })
  pendingCount: number;

  @ApiProperty({ description: 'Win rate percentage (0-100)', example: 59.52 })
  winRate: number;

  @ApiProperty({ description: 'Average value of won deals', example: 5000 })
  avgWonValue: number;

  @ApiProperty({ description: 'Average value of lost deals', example: 3500 })
  avgLostValue: number;

  @ApiPropertyOptional({ description: 'Trend data for time-series analysis', type: [Object], example: [] })
  trendData?: Array<{ date: string; winRate: number }>;
}

/**
 * Loss Reason Type
 * Detailed breakdown of deal loss reasons with trend analysis
 */
export class LossReason {
  @ApiProperty({ description: 'Unique identifier for loss reason', example: 'lr-001' })
  reasonId: string;

  @ApiProperty({ description: 'Loss reason code', example: 'PRICE_TOO_HIGH' })
  reasonCode: string;

  @ApiProperty({ description: 'Human-readable loss reason label', example: 'Price Too High' })
  reasonLabel: string;

  @ApiProperty({ description: 'Number of deals lost for this reason', example: 8 })
  count: number;

  @ApiProperty({ description: 'Percentage of total losses', example: 47.06 })
  percent: number;

  @ApiProperty({ description: 'Average deal value for losses with this reason', example: 3500 })
  avgValue: number;

  @ApiPropertyOptional({ description: 'Trend data for this reason', type: [Object], example: [] })
  trend?: Array<{ period: string; count: number }>;
}

/**
 * Loss Analysis Report
 * Comprehensive analysis of why deals are lost, by reason and by staff member
 */
export class LossAnalysisReport {
  @ApiProperty({ description: 'Breakdown of losses by reason', type: [LossReason] })
  lossReasons: LossReason[];

  @ApiProperty({
    description: 'Loss breakdown by staff member and reason',
    type: [Object],
    example: [
      { staffId: 'staff-001', staffName: 'John Doe', reason: 'Price Too High', count: 3 },
    ],
  })
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
export class SalesRepPerformance {
  @ApiProperty({ description: 'Sales representative ID', example: 'staff-001' })
  staffId: string;

  @ApiProperty({ description: 'Sales representative name', example: 'John Doe' })
  staffName: string;

  @ApiProperty({ description: 'Number of won deals', example: 15 })
  wonCount: number;

  @ApiProperty({ description: 'Number of lost deals', example: 8 })
  lostCount: number;

  @ApiProperty({ description: 'Number of pending deals', example: 5 })
  pendingCount: number;

  @ApiProperty({ description: 'Win rate percentage (0-100)', example: 65.22 })
  winRate: number;

  @ApiProperty({ description: 'Total revenue from won deals', example: 75000 })
  totalRevenue: number;

  @ApiProperty({ description: 'Average value per deal', example: 5000 })
  avgDealValue: number;

  @ApiProperty({ description: 'Average days to close a deal', example: 12.5 })
  closeTime: number;

  @ApiPropertyOptional({ description: 'Trend data for win rate', type: [Object], example: [] })
  trend?: Array<{ period: string; winRate: number }>;
}

/**
 * Win Analysis Report
 * Top performing sales representatives and team trends
 */
export class WinAnalysisReport {
  @ApiProperty({ description: 'Top performing sales representatives', type: [SalesRepPerformance] })
  topPerformers: SalesRepPerformance[];

  @ApiPropertyOptional({ description: 'Team trend data', type: [Object], example: [] })
  trend?: Array<{ date: string; teamWinRate: number }>;
}

/**
 * Stuck Deal
 * Deal that has been open for an extended period
 */
export class StuckDeal {
  @ApiProperty({ description: 'Deal ID', example: 'deal-001' })
  dealId: string;

  @ApiProperty({ description: 'Deal creation date (ISO 8601)', example: '2026-03-15T10:30:00Z' })
  createdAt: string;

  @ApiProperty({ description: 'Number of days the deal has been open', example: 18 })
  daysOpen: number;
}

/**
 * Pipeline Forecast Report
 * Revenue pipeline analysis and deal velocity metrics
 */
export class PipelineForecastReport {
  @ApiProperty({ description: 'Total pipeline value', example: 150000 })
  pipelineValue: number;

  @ApiProperty({ description: 'Number of open deals', example: 8 })
  openDealCount: number;

  @ApiProperty({ description: 'Global win rate percentage (0-100)', example: 59.52 })
  globalWinRate: number;

  @ApiProperty({ description: 'Forecasted revenue based on pipeline and win rate', example: 89280 })
  forecastRevenue: number;

  @ApiProperty({ description: 'Pipeline velocity (deals per week)', example: 2.5 })
  pipelineVelocity: number;

  @ApiProperty({ description: 'List of deals stuck in pipeline (> 14 days)', type: [StuckDeal] })
  stuckDeals: StuckDeal[];

  @ApiPropertyOptional({ description: 'Pipeline value trend data', type: [Object], example: [] })
  trend?: Array<{ date: string; pipelineValue: number }>;

  @ApiPropertyOptional({ description: 'Forecast accuracy metric (Phase 2)', example: 85.5 })
  forecastAccuracy?: number;
}

/**
 * Performance Scorecard Item
 * Comprehensive performance metrics for a single team member
 */
export class ScorecardItem {
  @ApiProperty({ description: 'Staff member ID', example: 'staff-001' })
  staffId: string;

  @ApiProperty({ description: 'Staff member name', example: 'John Doe' })
  staffName: string;

  @ApiProperty({ description: 'Number of won deals', example: 15 })
  wonCount: number;

  @ApiProperty({ description: 'Number of lost deals', example: 8 })
  lostCount: number;

  @ApiProperty({ description: 'Number of pending deals', example: 5 })
  pendingCount: number;

  @ApiProperty({ description: 'Win rate percentage (0-100)', example: 65.22 })
  winRate: number;

  @ApiProperty({ description: 'Total revenue generated', example: 75000 })
  totalRevenue: number;

  @ApiProperty({ description: 'Pipeline value for this staff member', example: 35000 })
  pipelineValue: number;

  @ApiProperty({ description: 'Average days to close a deal', example: 12.5 })
  closeTime: number;

  @ApiProperty({ description: 'Average response time in hours', example: 4.2 })
  responseTime: number;

  @ApiPropertyOptional({ description: 'Win rate trend data', type: [Object], example: [] })
  trend?: Array<{ period: string; winRate: number }>;
}

/**
 * Performance Scorecard Report
 * Team-wide performance scorecard with individual metrics
 */
export class PerformanceScorecardReport {
  @ApiProperty({ description: 'Performance metrics for each team member', type: [ScorecardItem] })
  scorecard: ScorecardItem[];
}
