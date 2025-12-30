/**
 * Task Timers NATS Contracts
 * Patterns: housekeeping.timers.*
 */
import { NatsResponse } from '../../common';
export interface TaskTimer {
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
export interface StartTimerNatsRequest {
    taskId: string;
    staffId: string;
    tenantId: string;
    hotelId: string;
}
export type StartTimerNatsResponse = NatsResponse<any>;
export interface PauseTimerNatsRequest {
    taskId: string;
    staffId: string;
    tenantId: string;
    hotelId: string;
    notes?: string;
}
export type PauseTimerNatsResponse = NatsResponse<any>;
export interface ResumeTimerNatsRequest {
    taskId: string;
    staffId: string;
    tenantId: string;
    hotelId: string;
}
export type ResumeTimerNatsResponse = NatsResponse<any>;
export interface StopTimerNatsRequest {
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
export interface GetTimerStatsNatsRequest {
    taskId: string;
    staffId: string;
    tenantId: string;
    hotelId: string;
}
export interface TimerStats {
    elapsedSeconds: number;
    pausedSeconds: number;
    workingSeconds: number;
    elapsedTime: string;
    pausedTime: string;
    workingTime: string;
    efficiency: number;
}
export type GetTimerStatsNatsResponse = NatsResponse<TimerStats>;
export interface GetTaskTimersNatsRequest {
    taskId: string;
    tenantId: string;
    hotelId: string;
    filters?: any;
}
export type GetTaskTimersNatsResponse = NatsResponse<TaskTimer[]>;
export interface ReviewTimerNatsRequest {
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
export interface GetTimerReportNatsRequest {
    tenantId: string;
    hotelId: string;
    filters?: any;
}
export interface TimerReport {
    totalTasks: number;
    totalDuration: number;
    averageDuration?: number;
    byStaff?: Array<{
        staffId: string;
        tasks: number;
        duration: number;
    }>;
}
export type GetTimerReportNatsResponse = NatsResponse<TimerReport>;
export interface GetStaffTaskSummaryNatsRequest {
    staffId: string;
    tenantId: string;
    hotelId: string;
}
export interface StaffTaskSummary {
    total: number;
    completed: number;
    pending: number;
    inProgress: number;
    overdue?: number;
}
export type GetStaffTaskSummaryNatsResponse = NatsResponse<StaffTaskSummary>;
//# sourceMappingURL=timers.nats.d.ts.map