/**
 * Staff NATS Message Types
 * All staff-related NATS message payloads and responses
 * Exported from user-service
 */
import { StaffStatus } from '../enums';
export interface FindStaffByIdPayload {
    id: string;
}
export interface FindStaffByHotelPayload {
    hotelId: string;
    roles?: string[];
    status?: StaffStatus;
}
export { CreateStaffDto, UpdateStaffStatusDto } from '../rest/staff.dto';
export interface DeactivateStaffPayload {
    id: string;
    tenantId: string;
    hotelId: string;
}
export interface GetStaffPermissionsPayload {
    staffId: string;
    tenantId: string;
    hotelId: string;
}
export interface CheckStaffPermissionPayload {
    staffId: string;
    permission: string;
    tenantId: string;
    hotelId: string;
}
export interface LogStaffActivityPayload {
    staffId: string;
    action: string;
    details: StaffActivityDetails;
    tenantId: string;
    hotelId: string;
    timestamp: Date;
}
export interface GetStaffActivityLogPayload {
    staffId: string;
    tenantId: string;
    hotelId: string;
    startDate?: string;
    endDate?: string;
    limit?: number;
    offset?: number;
}
export interface GetStaffPerformancePayload {
    staffId: string;
    tenantId: string;
    hotelId: string;
    period: string;
}
export interface GetStaffTaskStatsPayload {
    staffId: string;
    tenantId: string;
    hotelId: string;
    startDate?: string;
    endDate?: string;
}
/**
 * Staff DTO - Re-exported from rest/staff.dto.ts
 * Single unified DTO used by BOTH NATS messages and REST API
 * This ensures consistency across all layers
 */
export { StaffDto } from '../rest/staff.dto';
export declare class StaffPermissionsDto {
    staffId: string;
    permissions: string[];
    roles: string[];
    tenantId: string;
    hotelId: string;
}
export declare class StaffActivityDetails {
    taskId?: string;
    roomNumber?: string;
    shiftType?: string;
    duration?: number;
    location?: string;
    notes?: string;
    [key: string]: any;
}
export declare class StaffActivityDto {
    id: string;
    action: string;
    details: StaffActivityDetails;
    timestamp: string;
}
export declare class StaffActivityLogDto {
    staffId: string;
    activities: StaffActivityDto[];
    pagination: {
        total: number;
        limit: number;
        offset: number;
    };
    tenantId: string;
    hotelId: string;
}
export declare class LogActivityResponseDto {
    success: boolean;
    activityId: string;
    staffId: string;
    action: string;
    details: StaffActivityDetails;
    timestamp: Date;
    tenantId: string;
    hotelId: string;
}
export declare class StaffPerformanceMetrics {
    tasksCompletedToday: number;
    averageTaskTime: number;
    qualityScore: number;
    productivity: number;
    onTimeCompletionRate: number;
    customerRating: number;
}
export declare class StaffPerformanceTrends {
    weeklyTasks: number[];
    weeklyQuality: number[];
}
export declare class StaffPerformanceDto {
    staffId: string;
    period: string;
    metrics: StaffPerformanceMetrics;
    trends: StaffPerformanceTrends;
    tenantId: string;
    hotelId: string;
    calculatedAt: string;
}
export declare class TaskStatsRoomTypes {
    Standard: number;
    Deluxe: number;
    Suite: number;
    [key: string]: number;
}
export declare class TaskStatsTaskTypes {
    Cleaning: number;
    Maintenance: number;
    Inspection: number;
    [key: string]: number;
}
export declare class StaffTaskStatsMetrics {
    totalTasks: number;
    completedTasks: number;
    pendingTasks: number;
    cancelledTasks: number;
    averageCompletionTime: number;
    fastestCompletion: number;
    slowestCompletion: number;
    roomTypes: TaskStatsRoomTypes;
    taskTypes: TaskStatsTaskTypes;
}
export declare class StaffTaskStatsDto {
    staffId: string;
    period: {
        startDate: string;
        endDate: string;
    };
    stats: StaffTaskStatsMetrics;
    tenantId: string;
    hotelId: string;
}
export declare class StaffPermissionCheckDto {
    staffId: string;
    permission: string;
    allowed: boolean;
    tenantId: string;
    hotelId: string;
}
//# sourceMappingURL=staff.nats.d.ts.map