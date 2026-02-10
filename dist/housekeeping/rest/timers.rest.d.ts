/**
 * Housekeeping Timers REST API DTOs
 *
 * Shared classes used by both:
 * - Contracts (for type definitions)
 * - API Gateway REST endpoints (with @ApiProperty decorators)
 *
 * These are imported and used directly by API Gateway
 * to ensure consistency between NATS and REST contracts
 */
/**
 * Timer Report Summary Statistics
 * Shared between NATS contracts and REST API
 */
export declare class TimerReportSummaryDto {
    totalTimers: number;
    totalElapsedTime: number;
    totalPausedTime: number;
    avgTaskTime: number;
    totalElapsedFormatted: string;
    avgTaskTimeFormatted: string;
    averageEfficiency: number;
}
/**
 * Staff Statistics in Timer Report
 * Shared between NATS contracts and REST API
 */
export declare class TimerReportStaffStatsDto {
    staffId: string;
    totalTasks: number;
    totalTime: number;
    avgTime: number;
    efficiency: number;
}
/**
 * Task Details in Timer
 * Shared between NATS contracts and REST API
 */
export declare class TimerReportTaskDto {
    id: string;
    roomId: string;
    taskType: string;
    status: string;
}
/**
 * Individual Timer Item in Report
 * Shared between NATS contracts and REST API
 */
export declare class TimerReportTimerItemDto {
    id: string;
    taskId: string;
    staffId: string;
    status: string;
    startTime: string;
    endTime?: string;
    elapsedSeconds: number;
    elapsedFormatted: string;
    pausedSeconds: number;
    efficiency: number;
    isReviewed: boolean;
    reviewedBy?: string;
    reviewedAt?: string;
    notes?: string;
    cleaningTask?: TimerReportTaskDto;
}
/**
 * Complete Timer Report Response DTO
 * Shared between NATS contracts and REST API
 */
export declare class TimerReportDataDto {
    summary: TimerReportSummaryDto;
    staffStats: TimerReportStaffStatsDto[];
    statusBreakdown: Record<string, number>;
    timers: TimerReportTimerItemDto[];
}
//# sourceMappingURL=timers.rest.d.ts.map