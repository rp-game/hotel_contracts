/**
 * Analytics NATS Contracts
 * Patterns: housekeeping.analytics.*
 */

import { NatsResponse } from '../../common';

// CALCULATE-METRIC
export interface CalculateMetricNatsRequest {
  calculateData: {
    metricType: 'TASK_COMPLETION_RATE' | 'QUALITY_SCORE' | 'EFFICIENCY' | 'STAFF_PERFORMANCE';
    dateRange: {
      startDate: string;
      endDate: string;
    };
    filters?: Record<string, unknown>;
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
    dateRange: {
      startDate: string;
      endDate: string;
    };
    groupBy?: string;
    filters?: Record<string, unknown>;
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
export interface DashboardSummary {
  totalTasks: number;
  completedTasks: number;
  completionRate: number;
  averageQualityScore: number;
  staffPerformance?: {
    topPerformers?: Array<{ staffId: string; score: number }>;
    needsImprovement?: Array<{ staffId: string; score: number }>;
  };
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
export interface KPIs {
  taskCompletionRate: number;
  averageTaskDuration: number;
  qualityScore: number;
  customerSatisfaction?: number;
  staffEfficiency: number;
}
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
export interface PerformanceReport {
  period: {
    startDate: string;
    endDate: string;
  };
  summary: DashboardSummary;
  kpis: KPIs;
  trends?: any[];
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
export interface TrendData {
  metricType: string;
  dataPoints: Array<{
    date: string;
    value: number;
  }>;
  trend: 'UP' | 'DOWN' | 'STABLE';
  changePercentage: number;
}
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
export interface ComparisonResult {
  current: DashboardSummary;
  previous?: DashboardSummary;
  changes?: Record<string, {
    value: number;
    percentage: number;
    trend: 'UP' | 'DOWN' | 'STABLE';
  }>;
}
export type GetComparisonNatsResponse = NatsResponse<ComparisonResult>;
