/**
 * Housekeeping Automation REST API DTOs
 *
 * Shared classes used by both:
 * - Contracts (for type definitions)
 * - API Gateway REST endpoints (with @ApiProperty decorators)
 *
 * These are imported and used directly by API Gateway
 * to ensure consistency between NATS and REST contracts
 */

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

/**
 * Last Run Times for Automation Processes
 * Shared between NATS contracts and REST API
 */
export class LastRunTimesDto {
  @ApiProperty({
    description: 'Last auto-assignment run time (ISO datetime)',
    nullable: true,
    type: String,
  })
  autoAssignment: string | null;

  @ApiProperty({
    description: 'Last task creation run time (ISO datetime)',
    nullable: true,
    type: String,
  })
  taskCreation: string | null;

  @ApiProperty({
    description: 'Last overdue processing run time (ISO datetime)',
    nullable: true,
    type: String,
  })
  overdueProcessing: string | null;
}

/**
 * Active Automation Rules
 * Shared between NATS contracts and REST API
 */
export class ActiveRulesDto {
  @ApiProperty({
    description: 'Checkout automation enabled',
    type: Boolean,
  })
  checkoutAutomation: boolean;

  @ApiProperty({
    description: 'Checkin automation enabled',
    type: Boolean,
  })
  checkinAutomation: boolean;

  @ApiProperty({
    description: 'Auto-assignment enabled',
    type: Boolean,
  })
  autoAssignment: boolean;

  @ApiProperty({
    description: 'Overdue monitoring enabled',
    type: Boolean,
  })
  overdueMonitoring: boolean;
}

/**
 * Automation Statistics
 * Shared between NATS contracts and REST API
 */
export class AutomationStatsDto {
  @ApiProperty({
    description: 'Tasks auto-assigned today',
    type: Number,
  })
  tasksAutoAssigned: number;

  @ApiProperty({
    description: 'Tasks auto-created today',
    type: Number,
  })
  tasksAutoCreated: number;

  @ApiProperty({
    description: 'Overdue tasks processed today',
    type: Number,
  })
  overdueTasksProcessed: number;

  @ApiPropertyOptional({
    description: 'Automation success rate percentage',
    type: Number,
  })
  automationSuccessRate?: number;
}

/**
 * Automation Status Response DTO
 * Shared between NATS contracts and REST API
 * Maps to AutomationStatusData in NATS contracts
 */
export class AutomationStatusDto {
  @ApiProperty({
    description: 'Tenant ID',
    type: String,
  })
  tenantId: string;

  @ApiProperty({
    description: 'Hotel ID',
    type: String,
  })
  hotelId: string;

  @ApiProperty({
    description: 'Automation enabled status',
    type: Boolean,
  })
  automationEnabled: boolean;

  @ApiProperty({
    description: 'Last run times for different automation types',
    type: LastRunTimesDto,
  })
  lastRunTimes: LastRunTimesDto;

  @ApiProperty({
    description: 'Active automation rules and their enablement status',
    type: ActiveRulesDto,
  })
  activeRules: ActiveRulesDto;

  @ApiPropertyOptional({
    description: "Today's automation statistics",
    type: AutomationStatsDto,
  })
  stats?: AutomationStatsDto;
}
