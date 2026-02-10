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

import { ApiProperty } from '@nestjs/swagger';

/**
 * Timer Report Summary Statistics
 * Shared between NATS contracts and REST API
 */
export class TimerReportSummaryDto {
  @ApiProperty({
    description: 'Total number of timers',
    type: Number,
  })
  totalTimers: number;

  @ApiProperty({
    description: 'Total elapsed time in seconds',
    type: Number,
  })
  totalElapsedTime: number;

  @ApiProperty({
    description: 'Total paused time in seconds',
    type: Number,
  })
  totalPausedTime: number;

  @ApiProperty({
    description: 'Average task time in seconds',
    type: Number,
  })
  avgTaskTime: number;

  @ApiProperty({
    description: 'Total elapsed time formatted (HH:MM:SS)',
    type: String,
  })
  totalElapsedFormatted: string;

  @ApiProperty({
    description: 'Average task time formatted (HH:MM:SS)',
    type: String,
  })
  avgTaskTimeFormatted: string;

  @ApiProperty({
    description: 'Average efficiency percentage across all timers',
    type: Number,
  })
  averageEfficiency: number;
}

/**
 * Staff Statistics in Timer Report
 * Shared between NATS contracts and REST API
 */
export class TimerReportStaffStatsDto {
  @ApiProperty({
    description: 'Staff member ID',
    type: String,
  })
  staffId: string;

  @ApiProperty({
    description: 'Total tasks completed by this staff member',
    type: Number,
  })
  totalTasks: number;

  @ApiProperty({
    description: 'Total time in seconds',
    type: Number,
  })
  totalTime: number;

  @ApiProperty({
    description: 'Average time per task in seconds',
    type: Number,
  })
  avgTime: number;

  @ApiProperty({
    description: 'Efficiency percentage',
    type: Number,
  })
  efficiency: number;
}

/**
 * Task Details in Timer
 * Shared between NATS contracts and REST API
 */
export class TimerReportTaskDto {
  @ApiProperty({
    description: 'Task ID',
    type: String,
  })
  id: string;

  @ApiProperty({
    description: 'Room ID',
    type: String,
  })
  roomId: string;

  @ApiProperty({
    description: 'Task type',
    type: String,
  })
  taskType: string;

  @ApiProperty({
    description: 'Task status',
    type: String,
  })
  status: string;
}

/**
 * Individual Timer Item in Report
 * Shared between NATS contracts and REST API
 */
export class TimerReportTimerItemDto {
  @ApiProperty({
    description: 'Timer ID',
    type: String,
  })
  id: string;

  @ApiProperty({
    description: 'Task ID',
    type: String,
  })
  taskId: string;

  @ApiProperty({
    description: 'Staff ID',
    type: String,
  })
  staffId: string;

  @ApiProperty({
    description: 'Timer status',
    type: String,
  })
  status: string;

  @ApiProperty({
    description: 'Start time (ISO datetime)',
    type: String,
  })
  startTime: string;

  @ApiProperty({
    description: 'End time (ISO datetime)',
    type: String,
    required: false,
    nullable: true,
  })
  endTime?: string;

  @ApiProperty({
    description: 'Elapsed seconds',
    type: Number,
  })
  elapsedSeconds: number;

  @ApiProperty({
    description: 'Elapsed time formatted (HH:MM:SS)',
    type: String,
  })
  elapsedFormatted: string;

  @ApiProperty({
    description: 'Paused seconds',
    type: Number,
  })
  pausedSeconds: number;

  @ApiProperty({
    description: 'Efficiency percentage (working time / total time)',
    type: Number,
  })
  efficiency: number;

  @ApiProperty({
    description: 'Whether timer has been reviewed',
    type: Boolean,
  })
  isReviewed: boolean;

  @ApiProperty({
    description: 'ID of user who reviewed the timer',
    type: String,
    required: false,
    nullable: true,
  })
  reviewedBy?: string;

  @ApiProperty({
    description: 'Review timestamp (ISO datetime)',
    type: String,
    required: false,
    nullable: true,
  })
  reviewedAt?: string;

  @ApiProperty({
    description: 'Timer notes',
    type: String,
    required: false,
    nullable: true,
  })
  notes?: string;

  @ApiProperty({
    description: 'Associated cleaning task details',
    type: () => TimerReportTaskDto,
    required: false,
    nullable: true,
  })
  cleaningTask?: TimerReportTaskDto;
}

/**
 * Complete Timer Report Response DTO
 * Shared between NATS contracts and REST API
 */
export class TimerReportDataDto {
  @ApiProperty({
    description: 'Summary statistics for all timers',
    type: () => TimerReportSummaryDto,
  })
  summary: TimerReportSummaryDto;

  @ApiProperty({
    description: 'Statistics broken down by staff member',
    type: [TimerReportStaffStatsDto],
  })
  staffStats: TimerReportStaffStatsDto[];

  @ApiProperty({
    description: 'Timer count breakdown by status',
    type: 'object',
    additionalProperties: { type: 'number' },
  })
  statusBreakdown: Record<string, number>;

  @ApiProperty({
    description: 'Individual timer details',
    type: [TimerReportTimerItemDto],
  })
  timers: TimerReportTimerItemDto[];
}
