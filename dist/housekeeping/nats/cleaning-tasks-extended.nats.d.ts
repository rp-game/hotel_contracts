/**
 * Extended Cleaning Tasks NATS Contracts
 * Patterns: housekeeping.tasks.* (mobile and extended patterns)
 */
import { NatsResponse } from '../../common';
import { TaskStatus, TaskPriority } from '../enums';
import { CleaningTaskNatsResponse, CleaningTaskType } from './cleaning-tasks.nats';
export declare class FindTaskByIdNatsRequest {
    id: string;
    tenantId: string;
    hotelId: string;
}
export declare class GetRecentTasksNatsRequest {
    tenantId: string;
    hotelId: string;
    staffId: string;
    limit: number;
}
export declare class MobileTaskResponse {
    id: string;
    title: string;
    description: string;
    roomNumber: string;
    roomType: string;
    priority: string;
    status: string;
    estimatedDuration: number;
    actualDuration?: number;
    assignedAt?: Date;
    startedAt?: Date;
    completedAt?: Date;
    dueDate?: Date;
    assignedStaff?: {
        id: string;
        name: string;
        avatar?: string;
    };
    taskType: string;
    notes: string;
    photos: string[];
    location?: {
        floor: number;
        building: string;
        coordinates?: object;
    };
    requirements?: string[];
    isUrgent: boolean;
    canStart: boolean;
    canPause: boolean;
    canComplete: boolean;
}
export type GetRecentTasksNatsResponse = NatsResponse<CleaningTaskNatsResponse[]>;
export declare class SearchTasksFilters {
    assignedToId?: string;
    status?: string;
    type?: string;
}
export declare class SearchTasksNatsRequest {
    tenantId: string;
    hotelId: string;
    query: string;
    filters?: SearchTasksFilters;
}
export type SearchTasksNatsResponse = NatsResponse<CleaningTaskNatsResponse[]>;
export declare class GetRoomTasksNatsRequest {
    tenantId: string;
    hotelId: string;
    roomNumber: string;
    staffId?: string;
}
export type GetRoomTasksNatsResponse = NatsResponse<CleaningTaskNatsResponse[]>;
export declare class AddTaskNotesBodyDto {
    notes: string;
    photos?: string[];
}
export declare class AddTaskNotesNatsRequest {
    taskId: string;
    staffId: string;
    tenantId: string;
    hotelId: string;
    notes: string;
    photos?: string[];
}
export declare class AddNotesResult {
    taskId: string;
    notes: string;
    photos?: string[];
    addedAt: string;
    addedBy: string;
}
export type AddTaskNotesNatsResponse = NatsResponse<AddNotesResult>;
export declare class QuickCompleteTaskNatsRequest {
    taskId: string;
    staffId: string;
    tenantId: string;
    hotelId: string;
    notes?: string;
    qualityRating?: number;
    photos?: string[];
    completedAt?: string;
}
export declare class QuickCompleteResult {
    taskId: string;
    completedAt: string;
    data: CleaningTaskNatsResponse;
}
export type QuickCompleteTaskNatsResponse = NatsResponse<QuickCompleteResult>;
export { QuickCompleteTaskDto, QuickCompleteTaskResponseDto } from '../rest/quick-complete-task.rest';
export declare class ShiftData {
    id: string;
    staffId: string;
    date: string;
    startTime?: string;
    endTime?: string;
    clockInTime?: string;
    clockOutTime?: string;
    status: string;
    hoursWorked?: number;
    tenantId: string;
    hotelId: string;
}
export declare class GetCurrentShiftNatsRequest {
    staffId: string;
    tenantId: string;
    hotelId: string;
}
export type GetCurrentShiftNatsResponse = NatsResponse<ShiftData>;
export declare class ClockInNatsRequest {
    staffId: string;
    tenantId: string;
    hotelId: string;
}
export type ClockInNatsResponse = NatsResponse<ShiftData>;
export declare class ClockOutNatsRequest {
    staffId: string;
    tenantId: string;
    hotelId: string;
}
export type ClockOutNatsResponse = NatsResponse<ShiftData>;
/**
 * Enhanced Cleaning Task (from getHousekeepingTasks)
 * This is what the service ACTUALLY returns - enhanced with room and staff details
 */
export declare class EnhancedCleaningTask {
    id: string;
    roomId: string;
    roomNumber: string;
    roomType: string;
    floor: number;
    taskType: string;
    priority: string;
    status: string;
    assignedTo: string | null;
    staffName: string | null;
    estimatedDuration: number;
    actualDuration: number | null;
    scheduledStart: string;
    actualStart: string;
    actualEnd: string | null;
    notes: string;
    deadline: string | null;
    verifiedBy?: string;
    verifiedAt: string | null;
    guestCheckout: any;
    nextGuestCheckin: any;
    specialRequirements: any[];
    completionPhotos: any[];
    inspectionResults: any;
}
/**
 * Get Housekeeping Tasks Request
 * Pattern: housekeeping.tasks
 */
export declare class GetHousekeepingTasksPayload {
    tenantId: string;
    hotelId: string;
    date?: string;
}
export type GetHousekeepingTasksNatsResponse = NatsResponse<EnhancedCleaningTask[]>;
/**
 * Staff Performance Metrics (from getPerformanceMetrics)
 * This is what the service ACTUALLY returns - NOT the PerformanceMetric entity
 * @unified Used by both NATS responses and REST API responses
 */
export declare class StaffPerformanceMetricsNatsResponse {
    staffId: string;
    staffName: string;
    tasksCompleted: number;
    averageTime: number;
    averageRating: number;
    onTimeRate: number;
    efficiencyScore: number;
    totalTasks: number;
    pendingTasks: number;
    inProgressTasks: number;
}
/**
 * Get Performance Metrics Request
 * Pattern: housekeeping.performance
 * @unified Used by both NATS requests and REST API query params
 */
export declare class GetPerformanceMetricsNatsRequest {
    tenantId: string;
    hotelId: string;
    startDate?: string;
}
export type GetPerformanceMetricsNatsResponse = NatsResponse<StaffPerformanceMetricsNatsResponse[]>;
/**
 * Mobile Task DTO — REST response shape (entity-like with relations)
 * Different from MobileTaskResponse which is the NATS mobile-UI flattened shape
 * @usage GET /api/staff/tasks, GET /api/staff/tasks/:id
 */
export declare class MobileTaskDto {
    id: string;
    tenantId: string;
    hotelId: string;
    createdAt: string;
    updatedAt: string;
    deletedAt?: string;
    roomId: string;
    assignedToId?: string;
    taskType: CleaningTaskType;
    status: TaskStatus;
    priority: TaskPriority;
    instructions?: string;
    scheduledDate: string;
    scheduledFor?: string;
    deadline?: string;
    completedAt?: string;
    verifiedBy?: string;
    verifiedAt?: string;
    isAutomated: boolean;
    eventTriggered: boolean;
    description?: string;
    notes?: string;
    estimatedDuration: number;
    assignedTo?: {
        id: string;
        fullName: string;
    } | null;
    roomNumber?: string;
    assignedToDetails?: Record<string, unknown>;
}
/**
 * Task Summary Statistics
 */
export declare class TaskSummaryStatsDto {
    pending: number;
    inProgress: number;
    completed: number;
    overdue: number;
}
/**
 * Mobile Task List Response DTO — paginated response
 * @usage GET /api/staff/tasks response
 */
export declare class MobileTaskListResponseDto {
    data: MobileTaskDto[];
    total: number;
    page: number;
    limit: number;
    hasNext: boolean;
    hasPrev: boolean;
    summary?: TaskSummaryStatsDto;
}
/**
 * Task Stats DTO — replaces local TaskStatsData in client
 */
export declare class TaskStatsDto {
    total: number;
    completed: number;
    pending: number;
    inProgress: number;
}
/**
 * Task Timer DTO — replaces local TimerData in client
 */
export declare class TaskTimerDto {
    taskId: string;
    staffId: string;
    startTime: string;
    endTime?: string;
    status: string;
}
//# sourceMappingURL=cleaning-tasks-extended.nats.d.ts.map