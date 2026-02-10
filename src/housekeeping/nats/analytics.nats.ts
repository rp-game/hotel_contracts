/**
 * Analytics NATS Contracts
 * Patterns: housekeeping.analytics.*
 */

import { NatsResponse } from '../../common';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

// CALCULATE-METRIC
export interface CalculateMetricNatsRequest {
  calculateData: {
    metricType: string;
    metricPeriod: string;  // MetricPeriod enum value - REQUIRED
    metricDate: string;  // Date for metric calculation - REQUIRED
    staffId?: string;
    roomId?: string;
    roomType?: string;
    taskType?: string;
    options?: Record<string, any>;
  };
  tenantId: string;
  hotelId: string;
}
export interface MetricResult {
  metricType: string;
  value: number;
  unit?: string;
  breakdown?: Record<string, number>;
}
export type CalculateMetricNatsResponse = NatsResponse<MetricResult>;

// QUERY-METRICS
export interface QueryMetricsNatsRequest {
  queryData: {
    metricTypes: string[];
    metricPeriod: string;  // MetricPeriod enum value - REQUIRED
    startDate: string;  // Start date for metrics query - REQUIRED
    endDate: string;  // End date for metrics query - REQUIRED
    staffIds?: string[];
    roomTypes?: string[];
    includeTrends?: boolean;
    includeTargets?: boolean;
  };
  tenantId: string;
  hotelId: string;
}
export interface QueryMetricsResult {
  metrics: MetricResult[];
  groupedBy?: string;
}
export type QueryMetricsNatsResponse = NatsResponse<QueryMetricsResult>;

// DASHBOARD-SUMMARY
export interface GetDashboardSummaryNatsRequest {
  tenantId: string;
  hotelId: string;
  filters?: {
    dateRange?: {
      startDate: string;
      endDate: string;
    };
    departments?: string[];
    staffIds?: string[];
  };
}
export class StaffPerformerDto {
  @ApiProperty({ description: 'Staff member ID' })
  staffId: string;

  @ApiProperty({ description: 'Performance score' })
  score: number;
}

export class StaffPerformanceDto {
  @ApiPropertyOptional({ description: 'Top performing staff members', type: [StaffPerformerDto] })
  topPerformers?: StaffPerformerDto[];

  @ApiPropertyOptional({ description: 'Staff members needing improvement', type: [StaffPerformerDto] })
  needsImprovement?: StaffPerformerDto[];
}

export class DashboardSummary {
  @ApiProperty({ description: 'Total number of tasks' })
  totalTasks: number;

  @ApiProperty({ description: 'Number of completed tasks' })
  completedTasks: number;

  @ApiProperty({ description: 'Number of pending tasks' })
  pendingTasks: number;

  @ApiProperty({ description: 'Task completion rate (percentage)' })
  completionRate: number;

  @ApiPropertyOptional({ description: 'Average quality score' })
  averageQualityScore?: number;

  @ApiPropertyOptional({ description: 'Average task completion time (minutes)' })
  averageCompletionTime?: number;

  @ApiPropertyOptional({ description: 'Overall quality score' })
  qualityScore?: number;

  @ApiPropertyOptional({ description: 'Top performing staff members', type: [StaffPerformerDto] })
  topPerformers?: StaffPerformerDto[];

  @ApiPropertyOptional({ description: 'Staff performance breakdown', type: StaffPerformanceDto })
  staffPerformance?: StaffPerformanceDto;
}
export type GetDashboardSummaryNatsResponse = NatsResponse<DashboardSummary>;

// KPIS
export interface GetKPIsNatsRequest {
  tenantId: string;
  hotelId: string;
  filters?: {
    dateRange?: {
      startDate: string;
      endDate: string;
    };
  };
}
// KPIs returned as Record with MetricType enum keys
// Example: { "TASK_COMPLETION_RATE": 94.2, "QUALITY_SCORE": 85, "AVERAGE_TASK_DURATION": 15 }
export type KPIs = Record<string, number>;
export type GetKPIsNatsResponse = NatsResponse<KPIs>;

// PERFORMANCE-REPORT
export interface GeneratePerformanceReportNatsRequest {
  tenantId: string;
  hotelId: string;
  filters?: {
    dateRange?: {
      startDate: string;
      endDate: string;
    };
  };
}
// Comprehensive performance report with all analytics
export interface PerformanceReport {
  title: string;  // Report title with date range
  startDate: string;  // Start date in ISO format
  endDate: string;  // End date in ISO format
  kpis: Record<string, number>;  // KPIs with MetricType enum keys
  summary: Record<string, any>;  // Summary statistics
  trends: Array<{
    date: string;
    value: number;
  }>;  // Trend data points
  staffPerformance: Record<string, any>;  // Staff breakdown
  distribution: Array<{
    category: string;
    count: number;
    color?: string;
  }>;  // Performance distribution
  generatedAt: string;  // Generation timestamp in ISO format
  generatedBy: string;  // User or system that generated report
}
export type GeneratePerformanceReportNatsResponse = NatsResponse<PerformanceReport>;

// TRENDS
export interface GetTrendsNatsRequest {
  metricType: string;
  tenantId: string;
  hotelId: string;
  filters?: {
    dateRange?: {
      startDate: string;
      endDate: string;
    };
    groupBy?: string;
  };
}
export interface TrendAnalysis {
  slope: number;
  intercept: number;
  trend: 'INCREASING' | 'DECREASING' | 'STABLE';
  dataPoints: Array<{
    date: string;
    value: number;
  }>;
}
// Trends returned as Record with metricType as key and TrendAnalysis as value
// Example: { "TASK_COMPLETION_RATE": { slope: 0.5, intercept: 80, trend: 'INCREASING', dataPoints: [...] } }
export type TrendData = Record<string, TrendAnalysis>;
export type GetTrendsNatsResponse = NatsResponse<TrendData>;

// COMPARISON
export interface GetComparisonNatsRequest {
  tenantId: string;
  hotelId: string;
  filters?: {
    dateRange?: {
      startDate: string;
      endDate: string;
    };
    compareWith?: {
      startDate: string;
      endDate: string;
    };
  };
}
// Aggregate metrics summary comparing metrics across period
export interface ComparisonResult {
  totalMetrics: number;
  periodsCovered: number;
  metricTypes: Record<string, number>;  // {metricType: count}
  averageValues: Record<string, number>;  // {metricType: avgValue}
  trends: Record<string, {
    direction: 'UP' | 'DOWN' | 'STABLE';
    change: number;
    changePercentage: number;
  }>;
}
export type GetComparisonNatsResponse = NatsResponse<ComparisonResult>;
