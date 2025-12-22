/**
 * Analytics Types
 *
 * Complex nested types for channel analytics dashboard,
 * real-time metrics, and monitoring.
 *
 * Total: 8 interfaces, 50+ fields
 */
/**
 * Real-time metrics for dashboard (4 fields)
 */
export interface RealtimeMetrics {
    totalBookingsToday: number;
    totalRevenueToday: number;
    averageResponseTime: number;
    overallSyncSuccessRate: number;
}
/**
 * Provider performance metrics (13 fields)
 */
export interface ProviderPerformance {
    providerId: string;
    providerName: string;
    syncSuccessRate: number;
    errorRate: number;
    bookingVolume: number;
    revenue: number;
    averageDailyRate: number;
    responseTime: number;
    topChannels: string[];
    additionalMetrics: {
        totalSyncs: number;
        successfulSyncs: number;
        failedSyncs: number;
    };
}
/**
 * Recent sync record (14 fields)
 */
export interface RecentSync {
    id: string;
    providerId: string;
    providerName: string;
    operation: string;
    direction: string;
    status: string;
    startedAt: string | Date;
    completedAt: string | Date;
    durationMs: number | null;
    recordsProcessed: number;
    recordsSuccessful: number;
    recordsFailed: number;
    errorMessage?: string;
    metadata?: any;
}
/**
 * Alert (8 fields)
 */
export interface Alert {
    id: string;
    severity: string;
    message: string;
    details?: string;
    timestamp: Date | string;
    providerId: string;
    syncType: string;
    resolved: boolean;
}
/**
 * Analytics dashboard response (4 nested objects)
 */
export interface AnalyticsDashboard {
    realtimeMetrics: RealtimeMetrics;
    providerPerformance: ProviderPerformance[];
    recentSyncs: RecentSync[];
    activeAlerts: Alert[];
}
/**
 * Real-time metrics (7 fields)
 */
export interface RealTimeMetrics {
    activeSyncs: number;
    todayBookings: number;
    todayRevenue: number;
    averageResponseTime: number;
    systemHealthScore: number;
    providerStatuses: ChannelProviderStatus[];
    unresolvedAlerts: number;
}
/**
 * Channel provider status (4 fields)
 * Note: Different from ProviderStatus enum - this is for analytics only
 */
export interface ChannelProviderStatus {
    providerId: string;
    providerName: string;
    status: 'HEALTHY' | 'WARNING' | 'ERROR';
    lastSyncAt: Date | string | null;
}
//# sourceMappingURL=analytics.types.d.ts.map