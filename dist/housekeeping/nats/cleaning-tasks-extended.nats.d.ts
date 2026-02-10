/**
 * Extended Cleaning Tasks NATS Contracts
 * Patterns: housekeeping.tasks.* (mobile and extended patterns)
 */
import { NatsResponse } from '../../common';
export interface GetRecentTasksNatsRequest {
    tenantId: string;
    hotelId: string;
    staffId: string;
    limit: number;
}
export interface MobileTaskResponse {
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
export type GetRecentTasksNatsResponse = NatsResponse<MobileTaskResponse[]>;
export interface SearchTasksNatsRequest {
    tenantId: string;
    hotelId: string;
    query: string;
    filters?: object;
}
export type SearchTasksNatsResponse = NatsResponse<MobileTaskResponse[]>;
export interface GetRoomTasksNatsRequest {
    tenantId: string;
    hotelId: string;
    roomNumber: string;
}
export type GetRoomTasksNatsResponse = NatsResponse<MobileTaskResponse[]>;
export interface AddTaskNotesNatsRequest {
    taskId: string;
    staffId: string;
    tenantId: string;
    hotelId: string;
    notes: string;
    photos?: string[];
}
export interface AddNotesResult {
    taskId: string;
    notes: string;
    photos?: string[];
    addedAt: string;
    addedBy: string;
}
export type AddTaskNotesNatsResponse = NatsResponse<AddNotesResult>;
export interface QuickCompleteTaskNatsRequest {
    taskId: string;
    staffId: string;
    tenantId: string;
    hotelId: string;
    notes?: string;
    qualityRating?: number;
    photos?: string[];
    completedAt?: string;
}
export interface QuickCompleteResult {
    taskId: string;
    completedAt: string;
    data: MobileTaskResponse;
}
export type QuickCompleteTaskNatsResponse = NatsResponse<QuickCompleteResult>;
export interface ShiftData {
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
export interface GetCurrentShiftNatsRequest {
    staffId: string;
    tenantId: string;
    hotelId: string;
}
export type GetCurrentShiftNatsResponse = NatsResponse<ShiftData>;
export interface ClockInNatsRequest {
    staffId: string;
    tenantId: string;
    hotelId: string;
}
export type ClockInNatsResponse = NatsResponse<ShiftData>;
export interface ClockOutNatsRequest {
    staffId: string;
    tenantId: string;
    hotelId: string;
}
export type ClockOutNatsResponse = NatsResponse<ShiftData>;
/**
 * Enhanced Cleaning Task (from getHousekeepingTasks)
 * This is what the service ACTUALLY returns - enhanced with room and staff details
 */
export interface EnhancedCleaningTask {
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
export interface GetHousekeepingTasksPayload {
    tenantId: string;
    hotelId: string;
    date?: string;
}
export type GetHousekeepingTasksNatsResponse = NatsResponse<EnhancedCleaningTask[]>;
/**
 * Staff Performance Metrics (from getPerformanceMetrics)
 * This is what the service ACTUALLY returns - NOT the PerformanceMetric entity
 */
export interface StaffPerformanceMetrics {
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
 */
export interface GetPerformanceMetricsPayload {
    tenantId: string;
    hotelId: string;
    date?: string;
}
export type GetPerformanceMetricsNatsResponse = NatsResponse<StaffPerformanceMetrics[]>;
//# sourceMappingURL=cleaning-tasks-extended.nats.d.ts.map