/**
 * Housekeeping Domain Types
 */

import { TaskStatus, TaskType } from '../enums';

/**
 * Housekeeping Task entity
 */
export interface HousekeepingTask {
  id: string;
  tenantId: string;
  hotelId: string;
  roomId: string;
  roomNumber: string;
  taskType: TaskType;
  status: TaskStatus;
  assignedTo?: string;
  priority: 'LOW' | 'MEDIUM' | 'HIGH' | 'URGENT';
  dueDate: string; // YYYY-MM-DD
  description?: string;
  notes?: string;
  completedAt?: string;
  createdAt: string;
  updatedAt: string;
}

/**
 * Task assignment record
 */
export interface TaskAssignment {
  id: string;
  taskId: string;
  staffId: string;
  staffName: string;
  assignedAt: string;
  acceptedAt?: string;
  completedAt?: string;
  status: TaskStatus;
}

/**
 * Staff daily task list
 */
export interface StaffDailySchedule {
  id: string;
  staffId: string;
  staffName: string;
  date: string; // YYYY-MM-DD
  assignedTasks: HousekeepingTask[];
  completedTasks: number;
  totalTasks: number;
  completionPercentage: number;
}
