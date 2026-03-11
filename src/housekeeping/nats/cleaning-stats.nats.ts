/**
 * Housekeeping Cleaning Task Stats NATS Contracts
 *
 * Pattern: housekeeping.cleaning-tasks.stats
 *
 * Handler: housekeeping-service (CleaningTaskNatsController)
 * Called by: api-gateway (HousekeepingService)
 */

import { ApiProperty } from '@nestjs/swagger';
import { NatsResponse } from '../../common';

/**
 * Cleaning Task Statistics Response
 */
export class CleaningTaskStatsData {
  @ApiProperty({ description: 'Total tasks' })
  total: number;

  @ApiProperty({ description: 'Completed tasks' })
  completed: number;

  @ApiProperty({ description: 'In-progress tasks' })
  inProgress: number;

  @ApiProperty({ description: 'Pending tasks' })
  pending: number;

  @ApiProperty({ description: 'Overdue tasks' })
  overdue: number;

  @ApiProperty({ description: 'Completion rate (0-100)' })
  completionRate: number;

  @ApiProperty({ description: 'Average duration in minutes' })
  averageDuration: number;
}

/**
 * Get Cleaning Task Stats Request
 * Pattern: housekeeping.cleaning-tasks.stats
 */
export class TaskStatsPayload {
  @ApiProperty({ description: 'Tenant ID' })
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID' })
  hotelId: string;
}

export type CleaningTaskStatsNatsResponse = NatsResponse<CleaningTaskStatsData>;
