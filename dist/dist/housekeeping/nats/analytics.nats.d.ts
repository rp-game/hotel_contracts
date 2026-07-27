/**
 * Analytics NATS Contracts
 * Patterns: housekeeping.analytics.*
 */
import { NatsResponse } from '../../common';
export interface CalculateMetricNatsRequest {
    calculateData: {
        metricType: string;
        metricPeriod: string;
        metricDate: string;
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
export interface QueryMetricsNatsRequest {
    queryData: {
        metricTypes: string[];
        metricPeriod: string;
        startDate: string;
        endDate: string;
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
export declare class StaffPerformerDto {
    staffId: string;
    score: number;
}
export declare class StaffPerformanceDto {
    topPerformers?: StaffPerformerDto[];
    needsImprovement?: StaffPerformerDto[];
}
export declare class DashboardSummary {
    totalTasks: number;
    completedTasks: number;
    pendingTasks: number;
    completionRate: number;
    averageQualityScore?: number;
    averageCompletionTime?: number;
    qualityScore?: number;
    topPerformers?: StaffPerformerDto[];
    staffPerformance?: StaffPerformanceDto;
}
export type GetDashboardSummaryNatsResponse = NatsResponse<DashboardSummary>;
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
export type KPIs = Record<string, number>;
export type GetKPIsNatsResponse = NatsResponse<KPIs>;
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
    title: string;
    startDate: string;
    endDate: string;
    kpis: Record<string, number>;
    summary: Record<string, any>;
    trends: Array<{
        date: string;
        value: number;
    }>;
    staffPerformance: Record<string, any>;
    distribution: Array<{
        category: string;
        count: number;
        color?: string;
    }>;
    generatedAt: string;
    generatedBy: string;
}
export type GeneratePerformanceReportNatsResponse = NatsResponse<PerformanceReport>;
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
export type TrendData = Record<string, TrendAnalysis>;
export type GetTrendsNatsResponse = NatsResponse<TrendData>;
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
    totalMetrics: number;
    periodsCovered: number;
    metricTypes: Record<string, number>;
    averageValues: Record<string, number>;
    trends: Record<string, {
        direction: 'UP' | 'DOWN' | 'STABLE';
        change: number;
        changePercentage: number;
    }>;
}
export type GetComparisonNatsResponse = NatsResponse<ComparisonResult>;
//# sourceMappingURL=analytics.nats.d.ts.map