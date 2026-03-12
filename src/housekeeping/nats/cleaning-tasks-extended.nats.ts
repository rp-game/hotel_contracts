/**
 * Extended Cleaning Tasks NATS Contracts
 * Patterns: housekeeping.tasks.* (mobile and extended patterns)
 */

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsOptional, IsNumber, IsArray, IsDateString, IsBoolean, IsEnum } from 'class-validator';
import { NatsResponse } from '../../common';
import { TaskStatus, TaskType, TaskPriority } from '../enums';

// FIND TASK BY ID
export class FindTaskByIdNatsRequest {
  @ApiProperty({ description: 'Task ID' })
  @IsString()
  id: string;

  @ApiProperty({ description: 'Tenant ID' })
  @IsString()
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID' })
  @IsString()
  hotelId: string;
}

// RECENT TASKS (Mobile)
export class GetRecentTasksNatsRequest {
  @ApiProperty({ description: 'Tenant ID' })
  @IsString()
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID' })
  @IsString()
  hotelId: string;

  @ApiProperty({ description: 'Staff ID' })
  @IsString()
  staffId: string;

  @ApiProperty({ description: 'Limit' })
  @IsNumber()
  limit: number;
}
export class MobileTaskResponse {
  @ApiProperty({ description: 'Task ID' })
  id: string;

  @ApiProperty({ description: 'Task title' })
  title: string;

  @ApiProperty({ description: 'Task description' })
  description: string;

  @ApiProperty({ description: 'Room number' })
  roomNumber: string;

  @ApiProperty({ description: 'Room type' })
  roomType: string;

  @ApiProperty({ description: 'Task priority' })
  priority: string;

  @ApiProperty({ description: 'Task status' })
  status: string;

  @ApiProperty({ description: 'Estimated duration in minutes' })
  estimatedDuration: number;

  @ApiPropertyOptional({ description: 'Actual duration in minutes' })
  actualDuration?: number;

  @ApiPropertyOptional({ description: 'Assignment timestamp' })
  assignedAt?: Date;

  @ApiPropertyOptional({ description: 'Start timestamp' })
  startedAt?: Date;

  @ApiPropertyOptional({ description: 'Completion timestamp' })
  completedAt?: Date;

  @ApiPropertyOptional({ description: 'Due date' })
  dueDate?: Date;

  @ApiPropertyOptional({ description: 'Assigned staff info' })
  assignedStaff?: {
    id: string;
    name: string;
    avatar?: string;
  };

  @ApiProperty({ description: 'Task type' })
  taskType: string;

  @ApiProperty({ description: 'Task notes' })
  notes: string;

  @ApiProperty({ description: 'Task photos', type: [String] })
  photos: string[];

  @ApiPropertyOptional({ description: 'Location info' })
  location?: {
    floor: number;
    building: string;
    coordinates?: object;
  };

  @ApiPropertyOptional({ description: 'Task requirements', type: [String] })
  requirements?: string[];

  @ApiProperty({ description: 'Whether task is urgent' })
  isUrgent: boolean;

  @ApiProperty({ description: 'Whether task can be started' })
  canStart: boolean;

  @ApiProperty({ description: 'Whether task can be paused' })
  canPause: boolean;

  @ApiProperty({ description: 'Whether task can be completed' })
  canComplete: boolean;
}
export type GetRecentTasksNatsResponse = NatsResponse<MobileTaskResponse[]>;

// SEARCH TASKS (Mobile)
export class SearchTasksFilters {
  @ApiPropertyOptional({ description: 'Filter by assigned staff ID' })
  @IsOptional()
  @IsString()
  assignedToId?: string;

  @ApiPropertyOptional({ description: 'Filter by task status' })
  @IsOptional()
  @IsString()
  status?: string;

  @ApiPropertyOptional({ description: 'Filter by task type' })
  @IsOptional()
  @IsString()
  type?: string;
}

export class SearchTasksNatsRequest {
  @ApiProperty({ description: 'Tenant ID' })
  @IsString()
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID' })
  @IsString()
  hotelId: string;

  @ApiProperty({ description: 'Search query' })
  @IsString()
  query: string;

  @ApiPropertyOptional({ description: 'Search filters', type: SearchTasksFilters })
  @IsOptional()
  filters?: SearchTasksFilters;
}
export type SearchTasksNatsResponse = NatsResponse<MobileTaskResponse[]>;

// TASKS BY ROOM (Mobile)
export class GetRoomTasksNatsRequest {
  @ApiProperty({ description: 'Tenant ID' })
  @IsString()
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID' })
  @IsString()
  hotelId: string;

  @ApiProperty({ description: 'Room number' })
  @IsString()
  roomNumber: string;
}
export type GetRoomTasksNatsResponse = NatsResponse<MobileTaskResponse[]>;

// ADD NOTES
export class AddTaskNotesNatsRequest {
  @ApiProperty({ description: 'Task ID' })
  @IsString()
  taskId: string;

  @ApiProperty({ description: 'Staff ID' })
  @IsString()
  staffId: string;

  @ApiProperty({ description: 'Tenant ID' })
  @IsString()
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID' })
  @IsString()
  hotelId: string;

  @ApiProperty({ description: 'Notes content' })
  @IsString()
  notes: string;

  @ApiPropertyOptional({ description: 'Photo URLs', type: [String] })
  @IsOptional()
  @IsArray()
  photos?: string[];
}
export class AddNotesResult {
  @ApiProperty({ description: 'Task ID' })
  taskId: string;

  @ApiProperty({ description: 'Notes content' })
  notes: string;

  @ApiPropertyOptional({ description: 'Photo URLs', type: [String] })
  photos?: string[];

  @ApiProperty({ description: 'Timestamp when notes were added' })
  addedAt: string;

  @ApiProperty({ description: 'Staff ID who added notes' })
  addedBy: string;
}
export type AddTaskNotesNatsResponse = NatsResponse<AddNotesResult>;

// QUICK COMPLETE
export class QuickCompleteTaskNatsRequest {
  @ApiProperty({ description: 'Task ID' })
  @IsString()
  taskId: string;

  @ApiProperty({ description: 'Staff ID' })
  @IsString()
  staffId: string;

  @ApiProperty({ description: 'Tenant ID' })
  @IsString()
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID' })
  @IsString()
  hotelId: string;

  @ApiPropertyOptional({ description: 'Completion notes' })
  @IsOptional()
  @IsString()
  notes?: string;

  @ApiPropertyOptional({ description: 'Task quality rating 1-5' })
  @IsOptional()
  @IsNumber()
  qualityRating?: number;

  @ApiPropertyOptional({ description: 'Completion photos' })
  @IsOptional()
  @IsArray()
  photos?: string[];

  @ApiPropertyOptional({ description: 'Completion timestamp' })
  @IsOptional()
  @IsDateString()
  completedAt?: string;
}
export class QuickCompleteResult {
  @ApiProperty({ description: 'Completed task ID' })
  taskId: string;

  @ApiProperty({ description: 'Completion timestamp' })
  completedAt: string;

  @ApiProperty({ description: 'Task data' })
  data: MobileTaskResponse;
}
export type QuickCompleteTaskNatsResponse = NatsResponse<QuickCompleteResult>;

export { QuickCompleteTaskDto, QuickCompleteTaskResponseDto } from '../rest/quick-complete-task.rest';

// SHIFT MANAGEMENT
export class ShiftData {
  @ApiProperty({ description: 'Shift ID' })
  id: string;

  @ApiProperty({ description: 'Staff ID' })
  staffId: string;

  @ApiProperty({ description: 'Shift date' })
  date: string;

  @ApiPropertyOptional({ description: 'Scheduled start time' })
  startTime?: string;

  @ApiPropertyOptional({ description: 'Scheduled end time' })
  endTime?: string;

  @ApiPropertyOptional({ description: 'Actual clock-in time' })
  clockInTime?: string;

  @ApiPropertyOptional({ description: 'Actual clock-out time' })
  clockOutTime?: string;

  @ApiProperty({ description: 'Shift status' })
  status: string;

  @ApiPropertyOptional({ description: 'Hours worked' })
  hoursWorked?: number;

  @ApiProperty({ description: 'Tenant ID' })
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID' })
  hotelId: string;
}

export class GetCurrentShiftNatsRequest {
  @ApiProperty({ description: 'Staff ID' })
  @IsString()
  staffId: string;

  @ApiProperty({ description: 'Tenant ID' })
  @IsString()
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID' })
  @IsString()
  hotelId: string;
}
export type GetCurrentShiftNatsResponse = NatsResponse<ShiftData>;

export class ClockInNatsRequest {
  @ApiProperty({ description: 'Staff ID' })
  @IsString()
  staffId: string;

  @ApiProperty({ description: 'Tenant ID' })
  @IsString()
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID' })
  @IsString()
  hotelId: string;
}
export type ClockInNatsResponse = NatsResponse<ShiftData>;

export class ClockOutNatsRequest {
  @ApiProperty({ description: 'Staff ID' })
  @IsString()
  staffId: string;

  @ApiProperty({ description: 'Tenant ID' })
  @IsString()
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID' })
  @IsString()
  hotelId: string;
}
export type ClockOutNatsResponse = NatsResponse<ShiftData>;

/**
 * Enhanced Cleaning Task (from getHousekeepingTasks)
 * This is what the service ACTUALLY returns - enhanced with room and staff details
 */
export class EnhancedCleaningTask {
  @ApiProperty({ description: 'Task ID' })
  id: string;

  @ApiProperty({ description: 'Room ID' })
  roomId: string;

  @ApiProperty({ description: 'Room number' })
  roomNumber: string;

  @ApiProperty({ description: 'Room type' })
  roomType: string;

  @ApiProperty({ description: 'Floor number' })
  floor: number;

  @ApiProperty({ description: 'Task type' })
  taskType: string;

  @ApiProperty({ description: 'Task priority' })
  priority: string;

  @ApiProperty({ description: 'Task status' })
  status: string;

  @ApiProperty({ description: 'Assigned staff ID', nullable: true })
  assignedTo: string | null;

  @ApiProperty({ description: 'Staff name', nullable: true })
  staffName: string | null;

  @ApiProperty({ description: 'Estimated duration in minutes' })
  estimatedDuration: number;

  @ApiProperty({ description: 'Actual duration in minutes', nullable: true })
  actualDuration: number | null;

  @ApiProperty({ description: 'Scheduled start time (ISO)' })
  scheduledStart: string;

  @ApiProperty({ description: 'Actual start time (ISO)' })
  actualStart: string;

  @ApiProperty({ description: 'Actual end time (ISO)', nullable: true })
  actualEnd: string | null;

  @ApiProperty({ description: 'Task notes' })
  notes: string;

  @ApiProperty({ description: 'Task deadline (ISO)', nullable: true })
  deadline: string | null;

  @ApiPropertyOptional({ description: 'Verified by staff' })
  verifiedBy?: string;

  @ApiProperty({ description: 'Verification timestamp (ISO)', nullable: true })
  verifiedAt: string | null;

  @ApiProperty({ description: 'Guest checkout info', nullable: true })
  guestCheckout: any;

  @ApiProperty({ description: 'Next guest check-in info', nullable: true })
  nextGuestCheckin: any;

  @ApiProperty({ description: 'Special requirements', type: [Object] })
  specialRequirements: any[];

  @ApiProperty({ description: 'Completion photos', type: [Object] })
  completionPhotos: any[];

  @ApiProperty({ description: 'Inspection results', nullable: true })
  inspectionResults: any;
}

/**
 * Get Housekeeping Tasks Request
 * Pattern: housekeeping.tasks
 */
export class GetHousekeepingTasksPayload {
  @ApiProperty({ description: 'Tenant ID' })
  @IsString()
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID' })
  @IsString()
  hotelId: string;

  @ApiPropertyOptional({ description: 'Date filter' })
  @IsOptional()
  @IsString()
  date?: string;
}

export type GetHousekeepingTasksNatsResponse = NatsResponse<EnhancedCleaningTask[]>;

/**
 * Staff Performance Metrics (from getPerformanceMetrics)
 * This is what the service ACTUALLY returns - NOT the PerformanceMetric entity
 * @unified Used by both NATS responses and REST API responses
 */
export class StaffPerformanceMetricsNatsResponse {
  @ApiProperty({ description: 'Staff ID' })
  staffId: string;

  @ApiProperty({ description: 'Staff name' })
  staffName: string;

  @ApiProperty({ description: 'Number of tasks completed' })
  tasksCompleted: number;

  @ApiProperty({ description: 'Average completion time in minutes' })
  averageTime: number;

  @ApiProperty({ description: 'Average quality rating (0-5)' })
  averageRating: number;

  @ApiProperty({ description: 'On-time completion rate (0-100)' })
  onTimeRate: number;

  @ApiProperty({ description: 'Efficiency score (0-100)' })
  efficiencyScore: number;

  @ApiProperty({ description: 'Total tasks assigned' })
  totalTasks: number;

  @ApiProperty({ description: 'Pending tasks count' })
  pendingTasks: number;

  @ApiProperty({ description: 'In-progress tasks count' })
  inProgressTasks: number;
}

/**
 * Get Performance Metrics Request
 * Pattern: housekeeping.performance
 * @unified Used by both NATS requests and REST API query params
 */
export class GetPerformanceMetricsNatsRequest {
  @ApiProperty({ description: 'Tenant ID' })
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID' })
  hotelId: string;

  @ApiPropertyOptional({ description: 'Date filter (ISO format or YYYY-MM-DD)' })
  startDate?: string;
}

export type GetPerformanceMetricsNatsResponse = NatsResponse<StaffPerformanceMetricsNatsResponse[]>;

// ============= MOBILE TASK DTOs =============

/**
 * Mobile Task DTO — REST response shape (entity-like with relations)
 * Different from MobileTaskResponse which is the NATS mobile-UI flattened shape
 * @usage GET /api/staff/tasks, GET /api/staff/tasks/:id
 */
export class MobileTaskDto {
  @ApiProperty({ description: 'Task ID (UUID)' })
  id: string;

  @ApiProperty({ description: 'Tenant ID (UUID)' })
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID (UUID)' })
  hotelId: string;

  @ApiProperty({ description: 'Creation timestamp' })
  createdAt: string;

  @ApiProperty({ description: 'Last update timestamp' })
  updatedAt: string;

  @ApiPropertyOptional({ description: 'Deletion timestamp (soft delete)' })
  deletedAt?: string;

  @ApiProperty({ description: 'Room ID (UUID)' })
  roomId: string;

  @ApiPropertyOptional({ description: 'Assigned staff ID (UUID)' })
  assignedToId?: string;

  @ApiProperty({ description: 'Task type', enum: TaskType })
  taskType: TaskType;

  @ApiProperty({ description: 'Task status', enum: TaskStatus })
  status: TaskStatus;

  @ApiProperty({ description: 'Task priority', enum: TaskPriority })
  priority: TaskPriority;

  @ApiPropertyOptional({ description: 'Task instructions' })
  instructions?: string;

  @ApiProperty({ description: 'Scheduled date (YYYY-MM-DD)' })
  scheduledDate: string;

  @ApiPropertyOptional({ description: 'Scheduled start time' })
  scheduledFor?: string;

  @ApiPropertyOptional({ description: 'Task deadline' })
  deadline?: string;

  @ApiPropertyOptional({ description: 'Completion timestamp' })
  completedAt?: string;

  @ApiPropertyOptional({ description: 'Verified by staff ID/name' })
  verifiedBy?: string;

  @ApiPropertyOptional({ description: 'Verification timestamp' })
  verifiedAt?: string;

  @ApiProperty({ description: 'Whether created by automation' })
  isAutomated: boolean;

  @ApiProperty({ description: 'Whether triggered by events' })
  eventTriggered: boolean;

  @ApiPropertyOptional({ description: 'Task description' })
  description?: string;

  @ApiPropertyOptional({ description: 'Task notes' })
  notes?: string;

  @ApiProperty({ description: 'Estimated duration in minutes' })
  estimatedDuration: number;

  @ApiPropertyOptional({ description: 'Assigned staff info' })
  assignedTo?: {
    id: string;
    fullName: string;
  } | null;

  @ApiPropertyOptional({ description: 'Room number (extracted from roomId)' })
  roomNumber?: string;

  @ApiPropertyOptional({ description: 'Full staff details for backward compatibility', type: Object })
  assignedToDetails?: Record<string, unknown>;
}

/**
 * Mobile Task Update DTO — REST @Body() for task updates
 * @usage PUT /api/staff/tasks/:id
 */
export class MobileTaskUpdateDto {
  @ApiPropertyOptional({ description: 'Task status', enum: TaskStatus })
  @IsOptional()
  @IsEnum(TaskStatus)
  status?: TaskStatus;

  @ApiPropertyOptional({ description: 'Progress percentage (0-100)' })
  @IsOptional()
  @IsNumber()
  progress?: number;

  @ApiPropertyOptional({ description: 'Update notes' })
  @IsOptional()
  @IsString()
  notes?: string;

  @ApiPropertyOptional({ description: 'Photos for this update', type: [String] })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  photos?: string[];

  @ApiPropertyOptional({ description: 'Request help flag' })
  @IsOptional()
  @IsBoolean()
  requestHelp?: boolean;

  @ApiPropertyOptional({ description: 'Time spent on task in minutes' })
  @IsOptional()
  @IsNumber()
  timeSpent?: number;
}

/**
 * Task Summary Statistics
 */
export class TaskSummaryStatsDto {
  @ApiProperty({ description: 'Pending tasks count' })
  pending: number;

  @ApiProperty({ description: 'In-progress tasks count' })
  inProgress: number;

  @ApiProperty({ description: 'Completed tasks count' })
  completed: number;

  @ApiProperty({ description: 'Overdue tasks count' })
  overdue: number;
}

/**
 * Mobile Task List Response DTO — paginated response
 * @usage GET /api/staff/tasks response
 */
export class MobileTaskListResponseDto {
  @ApiProperty({ description: 'List of tasks', type: [MobileTaskDto] })
  data: MobileTaskDto[];

  @ApiProperty({ description: 'Total count of tasks' })
  total: number;

  @ApiProperty({ description: 'Current page' })
  page: number;

  @ApiProperty({ description: 'Items per page' })
  limit: number;

  @ApiProperty({ description: 'Has next page' })
  hasNext: boolean;

  @ApiProperty({ description: 'Has previous page' })
  hasPrev: boolean;

  @ApiPropertyOptional({ description: 'Task summary statistics', type: TaskSummaryStatsDto })
  summary?: TaskSummaryStatsDto;
}

/**
 * Task Stats DTO — replaces local TaskStatsData in client
 */
export class TaskStatsDto {
  @ApiProperty({ description: 'Total tasks count' })
  total: number;

  @ApiProperty({ description: 'Completed tasks count' })
  completed: number;

  @ApiProperty({ description: 'Pending tasks count' })
  pending: number;

  @ApiProperty({ description: 'In-progress tasks count' })
  inProgress: number;
}

/**
 * Task Timer DTO — replaces local TimerData in client
 */
export class TaskTimerDto {
  @ApiProperty({ description: 'Task ID' })
  taskId: string;

  @ApiProperty({ description: 'Staff ID' })
  staffId: string;

  @ApiProperty({ description: 'Timer start time' })
  startTime: string;

  @ApiPropertyOptional({ description: 'Timer end time' })
  endTime?: string;

  @ApiProperty({ description: 'Timer status' })
  status: string;
}
