/**
 * Task Timers NATS Contracts
 * Patterns: housekeeping.timers.*
 */
import { NatsResponse } from '../../common';
import { CleaningTaskNatsResponse } from './cleaning-tasks.nats';
import { TimerReportSummaryDto, TimerReportStaffStatsDto, TimerReportTaskDto, TimerReportTimerItemDto, TimerReportDataDto } from '../rest/timers.rest';
export declare class TaskTimer {
    id: string;
    taskId: string;
    staffId: string;
    startTime: string;
    pauseTime?: string;
    resumeTime?: string;
    stopTime?: string;
    status: 'RUNNING' | 'PAUSED' | 'STOPPED';
    totalDuration?: number;
    notes?: string;
    qualityRating?: number;
    reviewedBy?: string;
    approved?: boolean;
    reviewNotes?: string;
    adjustedMinutes?: number;
    tenantId: string;
    hotelId: string;
    createdAt: string;
    updatedAt: string;
}
export declare class StartTimerNatsRequest {
    taskId: string;
    staffId: string;
    tenantId: string;
    hotelId: string;
}
export type StartTimerNatsResponse = NatsResponse<CleaningTaskNatsResponse>;
export declare class PauseTimerNatsRequest {
    taskId: string;
    staffId: string;
    tenantId: string;
    hotelId: string;
    notes?: string;
}
export type PauseTimerNatsResponse = NatsResponse<CleaningTaskNatsResponse>;
export declare class ResumeTimerNatsRequest {
    taskId: string;
    staffId: string;
    tenantId: string;
    hotelId: string;
}
export type ResumeTimerNatsResponse = NatsResponse<CleaningTaskNatsResponse>;
export declare class StopTimerNatsRequest {
    taskId: string;
    staffId: string;
    tenantId: string;
    hotelId: string;
    stopData: {
        stopTime?: string;
        notes?: string;
        qualityRating?: number;
    };
}
export type StopTimerNatsResponse = NatsResponse<any>;
export declare class GetTimerStatsNatsRequest {
    taskId: string;
    staffId: string;
    tenantId: string;
    hotelId: string;
}
export declare class TimerStats {
    elapsedSeconds: number;
    pausedSeconds: number;
    workingSeconds: number;
    elapsedTime: string;
    pausedTime: string;
    workingTime: string;
    efficiency: number;
}
export type GetTimerStatsNatsResponse = NatsResponse<TimerStats>;
export declare class GetTaskTimersNatsRequest {
    taskId: string;
    tenantId: string;
    hotelId: string;
    filters?: Record<string, unknown>;
}
export type GetTaskTimersNatsResponse = NatsResponse<TaskTimer[]>;
export declare class ReviewTimerNatsRequest {
    timerId: string;
    reviewData: {
        reviewedBy: string;
        approved: boolean;
        reviewNotes?: string;
        adjustedMinutes?: number;
    };
    tenantId: string;
    hotelId: string;
}
export type ReviewTimerNatsResponse = NatsResponse<TaskTimer>;
export declare class GetTimerReportNatsRequest {
    tenantId: string;
    hotelId: string;
    filters?: Record<string, unknown>;
}
/**
 * Timer Report DTOs
 * Re-exported from REST contracts for consistency
 */
export { TimerReportSummaryDto, TimerReportStaffStatsDto, TimerReportTaskDto, TimerReportTimerItemDto, TimerReportDataDto };
export type GetTimerReportNatsResponse = NatsResponse<TimerReportDataDto>;
export declare class GetStaffTaskSummaryNatsRequest {
    staffId: string;
    tenantId: string;
    hotelId: string;
}
export declare class StaffTaskSummary {
    total: number;
    completed: number;
    pending: number;
    inProgress: number;
    overdue?: number;
}
export type GetStaffTaskSummaryNatsResponse = NatsResponse<StaffTaskSummary>;
//# sourceMappingURL=timers.nats.d.ts.map