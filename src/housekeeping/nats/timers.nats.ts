/**
 * Task Timers NATS Contracts
 * Patterns: housekeeping.timers.*
 */

import { NatsResponse } from '../../common';
import {
  TimerReportSummaryDto,
  TimerReportStaffStatsDto,
  TimerReportTaskDto,
  TimerReportTimerItemDto,
  TimerReportDataDto
} from '../rest/timers.rest';

export interface TaskTimer {
  id: string;
  taskId: string;
  staffId: string;
  startTime: string;
  pauseTime?: string;
  resumeTime?: string;
  stopTime?: string;
  status: 'RUNNING' | 'PAUSED' | 'STOPPED';
  totalDuration?: number; // in minutes
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

// START
export interface StartTimerNatsRequest {
  taskId: string;
  staffId: string;
  tenantId: string;
  hotelId: string;
}
export type StartTimerNatsResponse = NatsResponse<any>;

// PAUSE
export interface PauseTimerNatsRequest {
  taskId: string;
  staffId: string;
  tenantId: string;
  hotelId: string;
  notes?: string;
}
export type PauseTimerNatsResponse = NatsResponse<any>;

// RESUME
export interface ResumeTimerNatsRequest {
  taskId: string;
  staffId: string;
  tenantId: string;
  hotelId: string;
}
export type ResumeTimerNatsResponse = NatsResponse<any>;

// STOP
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

// STATS
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

// HISTORY
export interface GetTaskTimersNatsRequest {
  taskId: string;
  tenantId: string;
  hotelId: string;
  filters?: any;
}
export type GetTaskTimersNatsResponse = NatsResponse<TaskTimer[]>;

// REVIEW
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

// REPORT
export interface GetTimerReportNatsRequest {
  tenantId: string;
  hotelId: string;
  filters?: any;
}

/**
 * Timer Report DTOs
 * Re-exported from REST contracts for consistency
 */
export {
  TimerReportSummaryDto,
  TimerReportStaffStatsDto,
  TimerReportTaskDto,
  TimerReportTimerItemDto,
  TimerReportDataDto
};

export type GetTimerReportNatsResponse = NatsResponse<TimerReportDataDto>;

// STAFF SUMMARY
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
