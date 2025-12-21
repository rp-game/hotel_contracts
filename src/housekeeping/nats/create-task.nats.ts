/**
 * Create Housekeeping Task NATS Contract
 *
 * NATS Pattern: housekeeping.task.create
 * Handler: housekeeping-service
 * Called by: api-gateway, inventory-service
 */

import { NatsResponse } from '../../common';
import { TaskType, TaskStatus } from '../enums';
import { HousekeepingTask } from '../types';

/**
 * NATS request to create a housekeeping task
 */
export interface CreateHousekeepingTaskRequest {
  tenantId: string;
  hotelId: string;
  roomId: string;
  roomNumber: string;
  taskType: TaskType;
  priority: 'LOW' | 'MEDIUM' | 'HIGH' | 'URGENT';
  dueDate: string; // YYYY-MM-DD
  description?: string;
  createdBy: string;
}

/**
 * NATS response after creating task
 */
export interface CreateHousekeepingTaskResponse {
  id: string;
  task: HousekeepingTask;
}

/**
 * Type-safe NATS response wrapper
 */
export type CreateHousekeepingTaskNatsResponse = NatsResponse<CreateHousekeepingTaskResponse>;

/**
 * NATS request to assign task to staff
 */
export interface AssignTaskRequest {
  tenantId: string;
  hotelId: string;
  taskId: string;
  staffId: string;
  assignedBy: string;
}

/**
 * NATS response after assigning task
 */
export interface AssignTaskResponse {
  taskId: string;
  staffId: string;
  assignedAt: string;
}

/**
 * Type-safe NATS response wrapper
 */
export type AssignTaskNatsResponse = NatsResponse<AssignTaskResponse>;

/**
 * NATS request to complete/update task status
 */
export interface UpdateTaskStatusRequest {
  tenantId: string;
  hotelId: string;
  taskId: string;
  status: TaskStatus;
  notes?: string;
  completedAt?: string;
  updatedBy: string;
}

/**
 * NATS response after updating task
 */
export interface UpdateTaskStatusResponse {
  id: string;
  task: HousekeepingTask;
}

/**
 * Type-safe NATS response wrapper
 */
export type UpdateTaskStatusNatsResponse = NatsResponse<UpdateTaskStatusResponse>;
