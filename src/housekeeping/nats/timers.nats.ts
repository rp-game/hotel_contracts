/**
 * Task Timers NATS Contracts
 * Patterns: housekeeping.timers.*
 */

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { NatsResponse } from '../../common';
import { CleaningTaskNatsResponse } from './cleaning-tasks.nats';
import {
  TimerReportSummaryDto,
  TimerReportStaffStatsDto,
  TimerReportTaskDto,
  TimerReportTimerItemDto,
  TimerReportDataDto
} from '../rest/timers.rest';

export class TaskTimer {
  @ApiProperty({ description: 'Timer ID' })
  id: string;

  @ApiProperty({ description: 'Task ID' })
  taskId: string;

  @ApiProperty({ description: 'Staff ID' })
  staffId: string;

  @ApiProperty({ description: 'Start time (ISO)' })
  startTime: string;

  @ApiPropertyOptional({ description: 'Pause time (ISO)' })
  pauseTime?: string;

  @ApiPropertyOptional({ description: 'Resume time (ISO)' })
  resumeTime?: string;

  @ApiPropertyOptional({ description: 'Stop time (ISO)' })
  stopTime?: string;

  @ApiProperty({ description: 'Timer status', enum: ['RUNNING', 'PAUSED', 'STOPPED'] })
  status: 'RUNNING' | 'PAUSED' | 'STOPPED';

  @ApiPropertyOptional({ description: 'Total duration in minutes' })
  totalDuration?: number;

  @ApiPropertyOptional({ description: 'Notes' })
  notes?: string;

  @ApiPropertyOptional({ description: 'Quality rating' })
  qualityRating?: number;

  @ApiPropertyOptional({ description: 'Reviewed by staff ID' })
  reviewedBy?: string;

  @ApiPropertyOptional({ description: 'Whether timer was approved' })
  approved?: boolean;

  @ApiPropertyOptional({ description: 'Review notes' })
  reviewNotes?: string;

  @ApiPropertyOptional({ description: 'Adjusted minutes' })
  adjustedMinutes?: number;

  @ApiProperty({ description: 'Tenant ID' })
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID' })
  hotelId: string;

  @ApiProperty({ description: 'Created at (ISO)' })
  createdAt: string;

  @ApiProperty({ description: 'Updated at (ISO)' })
  updatedAt: string;
}

// START
export class StartTimerNatsRequest {
  @ApiProperty({ description: 'Task ID' })
  taskId: string;

  @ApiProperty({ description: 'Staff ID' })
  staffId: string;

  @ApiProperty({ description: 'Tenant ID' })
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID' })
  hotelId: string;
}
export type StartTimerNatsResponse = NatsResponse<CleaningTaskNatsResponse>;

// PAUSE
export class PauseTimerNatsRequest {
  @ApiProperty({ description: 'Task ID' })
  taskId: string;

  @ApiProperty({ description: 'Staff ID' })
  staffId: string;

  @ApiProperty({ description: 'Tenant ID' })
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID' })
  hotelId: string;

  @ApiPropertyOptional({ description: 'Pause notes' })
  notes?: string;
}
export type PauseTimerNatsResponse = NatsResponse<CleaningTaskNatsResponse>;

// RESUME
export class ResumeTimerNatsRequest {
  @ApiProperty({ description: 'Task ID' })
  taskId: string;

  @ApiProperty({ description: 'Staff ID' })
  staffId: string;

  @ApiProperty({ description: 'Tenant ID' })
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID' })
  hotelId: string;
}
export type ResumeTimerNatsResponse = NatsResponse<CleaningTaskNatsResponse>;

// STOP
export class StopTimerNatsRequest {
  @ApiProperty({ description: 'Task ID' })
  taskId: string;

  @ApiProperty({ description: 'Staff ID' })
  staffId: string;

  @ApiProperty({ description: 'Tenant ID' })
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID' })
  hotelId: string;

  @ApiProperty({ description: 'Stop data' })
  stopData: {
    stopTime?: string;
    notes?: string;
    qualityRating?: number;
  };
}
export type StopTimerNatsResponse = NatsResponse<any>;

// STATS
export class GetTimerStatsNatsRequest {
  @ApiProperty({ description: 'Task ID' })
  taskId: string;

  @ApiProperty({ description: 'Staff ID' })
  staffId: string;

  @ApiProperty({ description: 'Tenant ID' })
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID' })
  hotelId: string;
}
export class TimerStats {
  @ApiProperty({ description: 'Elapsed seconds' })
  elapsedSeconds: number;

  @ApiProperty({ description: 'Paused seconds' })
  pausedSeconds: number;

  @ApiProperty({ description: 'Working seconds' })
  workingSeconds: number;

  @ApiProperty({ description: 'Elapsed time (formatted)' })
  elapsedTime: string;

  @ApiProperty({ description: 'Paused time (formatted)' })
  pausedTime: string;

  @ApiProperty({ description: 'Working time (formatted)' })
  workingTime: string;

  @ApiProperty({ description: 'Efficiency percentage' })
  efficiency: number;
}
export type GetTimerStatsNatsResponse = NatsResponse<TimerStats>;

// HISTORY
export class GetTaskTimersNatsRequest {
  @ApiProperty({ description: 'Task ID' })
  taskId: string;

  @ApiProperty({ description: 'Tenant ID' })
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID' })
  hotelId: string;

  @ApiPropertyOptional({ description: 'Filters' })
  filters?: Record<string, unknown>;
}
export type GetTaskTimersNatsResponse = NatsResponse<TaskTimer[]>;

// REVIEW
export class ReviewTimerNatsRequest {
  @ApiProperty({ description: 'Timer ID' })
  timerId: string;

  @ApiProperty({ description: 'Review data' })
  reviewData: {
    reviewedBy: string;
    approved: boolean;
    reviewNotes?: string;
    adjustedMinutes?: number;
  };

  @ApiProperty({ description: 'Tenant ID' })
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID' })
  hotelId: string;
}
export type ReviewTimerNatsResponse = NatsResponse<TaskTimer>;

// REPORT
export class GetTimerReportNatsRequest {
  @ApiProperty({ description: 'Tenant ID' })
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID' })
  hotelId: string;

  @ApiPropertyOptional({ description: 'Filters' })
  filters?: Record<string, unknown>;
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
export class GetStaffTaskSummaryNatsRequest {
  @ApiProperty({ description: 'Staff ID' })
  staffId: string;

  @ApiProperty({ description: 'Tenant ID' })
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID' })
  hotelId: string;
}
export class StaffTaskSummary {
  @ApiProperty({ description: 'Total tasks' })
  total: number;

  @ApiProperty({ description: 'Completed tasks' })
  completed: number;

  @ApiProperty({ description: 'Pending tasks' })
  pending: number;

  @ApiProperty({ description: 'In-progress tasks' })
  inProgress: number;

  @ApiPropertyOptional({ description: 'Overdue tasks' })
  overdue?: number;
}
export type GetStaffTaskSummaryNatsResponse = NatsResponse<StaffTaskSummary>;
