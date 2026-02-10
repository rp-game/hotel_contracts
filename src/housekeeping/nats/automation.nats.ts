/**
 * Housekeeping Automation NATS Contracts
 *
 * Patterns:
 * - housekeeping.automation.events.findAll
 *
 * Handler: housekeeping-service (AutomationController)
 * Called by: api-gateway (HousekeepingService)
 */

import { ApiProperty } from '@nestjs/swagger';
import { NatsResponse } from '../../common';
import {
  LastRunTimesDto,
  ActiveRulesDto,
  AutomationStatsDto,
  AutomationStatusDto as AutomationStatusDataDto
} from '../rest/automation.rest';

/**
 * Automation Event Item
 */
export interface AutomationEventItem {
  id: string;
  eventType: string;
  description: string;
  status: string;
  timestamp: string; // ISO format
  tenantId: string;
  hotelId: string;
  metadata?: any;
  ruleKey: string;
}

/**
 * Paginated Automation Events Response
 */
export interface AutomationEventsData {
  data: AutomationEventItem[];
  total: number;
  page: number;
  limit: number;
}

/**
 * Get Automation Events Request
 * Pattern: housekeeping.automation.events.findAll
 *
 * Retrieve automation events for a hotel with optional filtering.
 */
export interface GetAutomationEventsNatsRequest {
  tenantId: string;
  hotelId: string;
  limit?: number;
  page?: number;
  eventType?: string;
  status?: string;
}

export type GetAutomationEventsNatsResponse = NatsResponse<AutomationEventsData>;

/**
 * Automation Status Data
 * Re-exported from REST contracts for consistency
 */
export { LastRunTimesDto, ActiveRulesDto, AutomationStatsDto, AutomationStatusDataDto };

// Type aliases for backwards compatibility in NATS messages
export type LastRunTimes = LastRunTimesDto;
export type ActiveRules = ActiveRulesDto;
export type AutomationStats = AutomationStatsDto;
export type AutomationStatusData = AutomationStatusDataDto;

/**
 * Get Automation Status Request
 * Pattern: housekeeping.automation.status
 */
export interface AutomationStatusPayload {
  tenantId: string;
  hotelId: string;
}

/**
 * Trigger Auto Assignment Request
 * Pattern: housekeeping.automation.trigger-assignment
 */
export interface TriggerAutoAssignmentPayload {
  tenantId: string;
  hotelId: string;
}

export interface OperationResult {
  success: boolean;
  message: string;
  data?: unknown;
}

/**
 * Auto Schedule Tasks Request
 * Pattern: housekeeping.automation.schedule
 */
export interface AutoScheduleTasksPayload {
  tenantId: string;
  hotelId: string;
  date: string;
}

/**
 * Auto Schedule Task Assignment
 * Shared between NATS contracts and REST API
 */
export class TaskAssignmentDto {
  @ApiProperty({ description: 'Task ID', type: String })
  taskId: string;

  @ApiProperty({ description: 'Room number', type: String })
  roomNumber: string;

  @ApiProperty({ description: 'Estimated time in minutes', type: Number })
  estimatedTime: number;

  @ApiProperty({ description: 'Task type', type: String })
  taskType: string;

  @ApiProperty({ description: 'Task priority', type: String })
  priority: string;
}

/**
 * Staff Assignment in Auto Schedule
 * Shared between NATS contracts and REST API
 */
export class StaffAssignmentDto {
  @ApiProperty({ description: 'Staff member ID', type: String })
  staffId: string;

  @ApiProperty({ description: 'Staff member name', type: String })
  staffName: string;

  @ApiProperty({ description: 'Assigned tasks', type: [TaskAssignmentDto] })
  tasks: TaskAssignmentDto[];

  @ApiProperty({ description: 'Total time in minutes', type: Number })
  totalTime: number;

  @ApiProperty({ description: 'Workload percentage (0-100)', type: Number })
  workload: number;
}

/**
 * Optimized Schedule Details
 * Shared between NATS contracts and REST API
 */
export class OptimizedScheduleDto {
  @ApiProperty({ description: 'Total number of tasks', type: Number })
  totalTasks: number;

  @ApiProperty({ description: 'Number of assigned tasks', type: Number })
  assignedTasks: number;

  @ApiProperty({ description: 'Number of unassigned tasks', type: Number })
  unassignedTasks: number;

  @ApiProperty({ description: 'Staff utilization percentage', type: Number })
  staffUtilization: number;

  @ApiProperty({ description: 'Estimated completion time (HH:MM)', type: String })
  estimatedCompletionTime: string;

  @ApiProperty({ description: 'Staff assignments', type: [StaffAssignmentDto] })
  assignments: StaffAssignmentDto[];

  @ApiProperty({ description: 'Scheduling recommendations', type: [String] })
  recommendations: string[];
}

/**
 * Auto Schedule Tasks Response Data
 * Shared between NATS contracts and REST API
 */
export class AutoScheduleTasksDataDto {
  @ApiProperty({ description: 'Operation success status', type: Boolean })
  success: boolean;

  @ApiProperty({ description: 'Optimized schedule', type: () => OptimizedScheduleDto })
  schedule: OptimizedScheduleDto;

  @ApiProperty({ description: 'Schedule generation timestamp (ISO)', type: String })
  scheduledAt: string;
}

export type AutomationStatusNatsResponse = NatsResponse<AutomationStatusDataDto>;
export type TriggerAutoAssignmentNatsResponse = NatsResponse<OperationResult>;
export type AutoScheduleTasksNatsResponse = NatsResponse<AutoScheduleTasksDataDto>;
