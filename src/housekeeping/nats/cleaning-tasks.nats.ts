/**
 * Cleaning Tasks NATS Contracts (Unified for NATS + REST)
 * Pattern: housekeeping.cleaning-tasks.*
 *
 * @unified These contracts are used by:
 * - NATS message handlers (housekeeping-service)
 * - API Gateway REST endpoints
 * - Frontend TypeScript client
 */

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { NatsResponse } from '../../common';

/**
 * Cleaning Task Status Enum
 */
export enum CleaningTaskStatus {
  PENDING = 'PENDING',
  ASSIGNED = 'ASSIGNED',
  IN_PROGRESS = 'IN_PROGRESS',
  PAUSED = 'PAUSED',
  COMPLETED = 'COMPLETED',
  VERIFIED = 'VERIFIED',
  REJECTED = 'REJECTED',
  CANCELLED = 'CANCELLED',
  OVERDUE = 'OVERDUE',
}

/**
 * Cleaning Task Type Enum
 */
export enum CleaningTaskType {
  CLEANING = 'CLEANING',
  MAINTENANCE = 'MAINTENANCE',
  INSPECTION = 'INSPECTION',
  DEEP_CLEAN = 'DEEP_CLEAN',
}

/**
 * Cleaning Task Priority Enum
 */
export enum CleaningTaskPriority {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH',
  URGENT = 'URGENT',
}

/**
 * Assigned Staff Details
 */
export class AssignedStaffNatsDto {
  @ApiProperty({ description: 'Staff ID' })
  id: string;

  @ApiProperty({ description: 'Full name of assigned staff' })
  fullName: string;

  @ApiPropertyOptional({ description: 'Staff avatar URL' })
  avatar?: string;
}

/**
 * Single Cleaning Task Response
 * @unified Used by both NATS responses and REST API responses
 */
export class CleaningTaskNatsResponse {
  @ApiProperty({ description: 'Task ID', example: '550e8400-e29b-41d4-a716-446655440000' })
  id: string;

  @ApiProperty({ description: 'Tenant ID' })
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID' })
  hotelId: string;

  @ApiProperty({ description: 'Room ID' })
  roomId: string;

  @ApiPropertyOptional({ description: 'Room number' })
  roomNumber?: string;

  @ApiProperty({
    description: 'Task type',
    enum: CleaningTaskType,
    example: CleaningTaskType.CLEANING
  })
  taskType: CleaningTaskType;

  @ApiProperty({
    description: 'Task status',
    enum: CleaningTaskStatus,
    example: CleaningTaskStatus.PENDING
  })
  status: CleaningTaskStatus;

  @ApiProperty({
    description: 'Task priority',
    enum: CleaningTaskPriority,
    example: CleaningTaskPriority.MEDIUM
  })
  priority: CleaningTaskPriority;

  @ApiProperty({ description: 'Task description' })
  description: string;

  @ApiPropertyOptional({ description: 'Task completion notes' })
  notes?: string;

  @ApiProperty({ description: 'Estimated duration in minutes' })
  estimatedDuration: number;

  @ApiProperty({ description: 'Scheduled start time (ISO datetime)' })
  scheduledFor: string;

  @ApiPropertyOptional({ description: 'Assigned staff ID' })
  assignedToId?: string;

  @ApiPropertyOptional({ description: 'Assigned staff details', type: AssignedStaffNatsDto })
  assignedStaff?: AssignedStaffNatsDto;

  @ApiProperty({ description: 'Creation timestamp (ISO datetime)' })
  createdAt: string;

  @ApiProperty({ description: 'Last update timestamp (ISO datetime)' })
  updatedAt: string;

  @ApiPropertyOptional({ description: 'Completion timestamp (ISO datetime)' })
  completedAt?: string;

  @ApiPropertyOptional({ description: 'Actual duration in minutes' })
  actualDuration?: number;

  @ApiPropertyOptional({ description: 'Whether this task was auto-created by automation' })
  isAutomated?: boolean;

  @ApiPropertyOptional({ description: 'Whether this task was triggered by an event' })
  eventTriggered?: boolean;
}

/**
 * Create Cleaning Task Request
 * Pattern: housekeeping.cleaning-tasks.create
 */
export class CreateCleaningTaskNatsRequest {
  @ApiProperty({ description: 'Tenant ID' })
  tenantId!: string;

  @ApiProperty({ description: 'Hotel ID' })
  hotelId!: string;

  @ApiProperty({ description: 'Room ID' })
  roomId!: string;

  @ApiPropertyOptional({ description: 'Room number' })
  roomNumber?: string;

  @ApiProperty({
    description: 'Task type',
    enum: CleaningTaskType
  })
  taskType!: CleaningTaskType;

  @ApiProperty({
    description: 'Task priority',
    enum: CleaningTaskPriority
  })
  priority!: CleaningTaskPriority;

  @ApiProperty({ description: 'Task description' })
  description!: string;

  @ApiProperty({ description: 'Estimated duration in minutes' })
  estimatedDuration!: number;

  @ApiProperty({ description: 'Scheduled start time (ISO datetime)' })
  scheduledFor!: string;

  @ApiPropertyOptional({ description: 'Assigned staff ID' })
  assignedToId?: string;
}

/**
 * Update fields for Cleaning Task
 */
export class UpdateCleaningTaskFieldsDto {
  @ApiPropertyOptional({
    description: 'Task type',
    enum: CleaningTaskType
  })
  taskType?: CleaningTaskType;

  @ApiPropertyOptional({
    description: 'Task status',
    enum: CleaningTaskStatus
  })
  status?: CleaningTaskStatus;

  @ApiPropertyOptional({
    description: 'Task priority',
    enum: CleaningTaskPriority
  })
  priority?: CleaningTaskPriority;

  @ApiPropertyOptional({ description: 'Task description' })
  description?: string;

  @ApiPropertyOptional({ description: 'Task completion notes' })
  notes?: string;

  @ApiPropertyOptional({ description: 'Estimated duration in minutes' })
  estimatedDuration?: number;

  @ApiPropertyOptional({ description: 'Scheduled start time (ISO datetime)' })
  scheduledFor?: string;

  @ApiPropertyOptional({ description: 'Assigned staff ID' })
  assignedToId?: string;

  @ApiPropertyOptional({ description: 'Completion timestamp (ISO datetime)' })
  completedAt?: string;

  @ApiPropertyOptional({ description: 'Actual duration in minutes' })
  actualDuration?: number;
}

/**
 * Update Cleaning Task Request
 * Pattern: housekeeping.cleaning-tasks.update
 */
export class UpdateCleaningTaskNatsRequest {
  @ApiProperty({ description: 'Task ID' })
  id!: string;

  @ApiProperty({ description: 'Tenant ID' })
  tenantId!: string;

  @ApiProperty({ description: 'Hotel ID' })
  hotelId!: string;

  @ApiProperty({ description: 'Update fields', type: UpdateCleaningTaskFieldsDto })
  updates!: UpdateCleaningTaskFieldsDto;
}

/**
 * Find All Cleaning Tasks Request (Query Parameters)
 * @unified Used by both NATS requests and REST API query params
 */
export class FindAllCleaningTasksNatsRequest {
  @ApiProperty({ description: 'Tenant ID' })
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID' })
  hotelId: string;

  @ApiPropertyOptional({ description: 'Page number for pagination', minimum: 1, default: 1 })
  page?: number;

  @ApiPropertyOptional({ description: 'Items per page', minimum: 1, maximum: 100, default: 10 })
  limit?: number;

  @ApiPropertyOptional({
    description: 'Filter by task status',
    enum: CleaningTaskStatus
  })
  status?: CleaningTaskStatus;

  @ApiPropertyOptional({
    description: 'Filter by task type',
    enum: CleaningTaskType
  })
  type?: CleaningTaskType;

  @ApiPropertyOptional({
    description: 'Filter by priority',
    enum: CleaningTaskPriority
  })
  priority?: CleaningTaskPriority;

  @ApiPropertyOptional({ description: 'Filter by assigned staff ID' })
  assignedToId?: string;

  @ApiPropertyOptional({ description: 'Filter by room ID' })
  roomId?: string;

  @ApiPropertyOptional({ description: 'Filter by start date (ISO format)' })
  startDate?: string;

  @ApiPropertyOptional({ description: 'Filter by end date (ISO format)' })
  endDate?: string;
}

/**
 * Cleaning Tasks List Response (with pagination)
 * @unified Used by both NATS responses and REST API responses
 */
export class CleaningTasksListNatsResponse {
  @ApiProperty({ description: 'List of cleaning tasks', type: [CleaningTaskNatsResponse] })
  data: CleaningTaskNatsResponse[];

  @ApiProperty({ description: 'Total number of tasks' })
  total: number;

  @ApiProperty({ description: 'Current page number' })
  page: number;

  @ApiProperty({ description: 'Number of items per page' })
  limit: number;
}

/**
 * NATS Response Type for findAll
 */
export type FindAllCleaningTasksNatsResponseType = NatsResponse<CleaningTasksListNatsResponse>;
