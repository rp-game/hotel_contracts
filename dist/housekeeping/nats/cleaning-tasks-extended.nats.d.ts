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
//# sourceMappingURL=cleaning-tasks-extended.nats.d.ts.map