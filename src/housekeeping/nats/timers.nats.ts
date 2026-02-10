/**
 * Task Timers NATS Contracts
 * Patterns: housekeeping.timers.*
 */

import { ApiProperty } from '@nestjs/swagger';
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
 * Timer Report Summary Statistics
 */
export class TimerReportSummaryDto {
  @ApiProperty({ description: 'Total number of timers' })
  totalTimers: number;

  @ApiProperty({ description: 'Total elapsed time in seconds' })
  totalElapsedTime: number;

  @ApiProperty({ description: 'Total paused time in seconds' })
  totalPausedTime: number;

  @ApiProperty({ description: 'Average task time in seconds' })
  avgTaskTime: number;

  @ApiProperty({ description: 'Total elapsed time formatted' })
  totalElapsedFormatted: string;

  @ApiProperty({ description: 'Average task time formatted' })
  avgTaskTimeFormatted: string;

  @ApiProperty({ description: 'Average efficiency percentage' })
  averageEfficiency: number;
}

/**
 * Staff Statistics in Timer Report
 */
export class TimerReportStaffStatsDto {
  @ApiProperty({ description: 'Staff member ID' })
  staffId: string;

  @ApiProperty({ description: 'Total tasks completed' })
  totalTasks: number;

  @ApiProperty({ description: 'Total time in seconds' })
  totalTime: number;

  @ApiProperty({ description: 'Average time per task in seconds' })
  avgTime: number;

  @ApiProperty({ description: 'Efficiency percentage' })
  efficiency: number;
}

/**
 * Task Details in Timer
 */
export class TimerReportTaskDto {
  @ApiProperty({ description: 'Task ID' })
  id: string;

  @ApiProperty({ description: 'Room ID' })
  roomId: string;

  @ApiProperty({ description: 'Task type' })
  taskType: string;

  @ApiProperty({ description: 'Task status' })
  status: string;
}

/**
 * Individual Timer Item in Report
 */
export class TimerReportTimerItemDto {
  @ApiProperty({ description: 'Timer ID' })
  id: string;

  @ApiProperty({ description: 'Task ID' })
  taskId: string;

  @ApiProperty({ description: 'Staff ID' })
  staffId: string;

  @ApiProperty({ description: 'Timer status' })
  status: string;

  @ApiProperty({ description: 'Start time' })
  startTime: string;

  @ApiProperty({ description: 'End time', required: false })
  endTime?: string;

  @ApiProperty({ description: 'Elapsed seconds' })
  elapsedSeconds: number;

  @ApiProperty({ description: 'Elapsed time formatted' })
  elapsedFormatted: string;

  @ApiProperty({ description: 'Paused seconds' })
  pausedSeconds: number;

  @ApiProperty({ description: 'Efficiency percentage' })
  efficiency: number;

  @ApiProperty({ description: 'Is reviewed' })
  isReviewed: boolean;

  @ApiProperty({ description: 'Reviewed by', required: false })
  reviewedBy?: string;

  @ApiProperty({ description: 'Reviewed at', required: false })
  reviewedAt?: string;

  @ApiProperty({ description: 'Notes', required: false })
  notes?: string;

  @ApiProperty({ description: 'Cleaning task details', type: () => TimerReportTaskDto, required: false })
  cleaningTask?: TimerReportTaskDto;
}

/**
 * Complete Timer Report Data
 */
export class TimerReportDataDto {
  @ApiProperty({ description: 'Summary statistics', type: () => TimerReportSummaryDto })
  summary: TimerReportSummaryDto;

  @ApiProperty({ description: 'Staff statistics', type: [TimerReportStaffStatsDto] })
  staffStats: TimerReportStaffStatsDto[];

  @ApiProperty({ description: 'Status breakdown', type: 'object', additionalProperties: { type: 'number' } })
  statusBreakdown: Record<string, number>;

  @ApiProperty({ description: 'Timer details', type: [TimerReportTimerItemDto] })
  timers: TimerReportTimerItemDto[];
}

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
