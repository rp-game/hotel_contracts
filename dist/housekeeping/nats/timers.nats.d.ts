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
/**
 * Timer Report Summary Statistics
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
 */
export declare class TimerReportTaskDto {
    id: string;
    roomId: string;
    taskType: string;
    status: string;
}
/**
 * Individual Timer Item in Report
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
 * Complete Timer Report Data
 */
export declare class TimerReportDataDto {
    summary: TimerReportSummaryDto;
    staffStats: TimerReportStaffStatsDto[];
    statusBreakdown: Record<string, number>;
    timers: TimerReportTimerItemDto[];
}
export type GetTimerReportNatsResponse = NatsResponse<TimerReportDataDto>;
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