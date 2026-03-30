/**
 * Cleaning Tasks NATS Contracts (Unified for NATS + REST)
 * Pattern: housekeeping.cleaning-tasks.*
 *
 * @unified These contracts are used by:
 * - NATS message handlers (housekeeping-service)
 * - API Gateway REST endpoints
 * - Frontend TypeScript client
 */
import { NatsResponse } from '../../common';
/**
 * Cleaning Task Status Enum
 */
export declare enum CleaningTaskStatus {
    PENDING = "PENDING",
    ASSIGNED = "ASSIGNED",
    IN_PROGRESS = "IN_PROGRESS",
    PAUSED = "PAUSED",
    COMPLETED = "COMPLETED",
    VERIFIED = "VERIFIED",
    REJECTED = "REJECTED",
    CANCELLED = "CANCELLED",
    OVERDUE = "OVERDUE"
}
/**
 * Cleaning Task Type Enum — canonical values, single source of truth
 */
export declare enum CleaningTaskType {
    REGULAR_CLEANING = "REGULAR_CLEANING",
    CHECKOUT_CLEANING = "CHECKOUT_CLEANING",
    DEEP_CLEANING = "DEEP_CLEANING",
    MAINTENANCE = "MAINTENANCE",
    MAINTENANCE_CLEAN = "MAINTENANCE_CLEAN",
    INSPECTION = "INSPECTION",
    TURNOVER = "TURNOVER"
}
/**
 * Cleaning Task Priority Enum
 */
export declare enum CleaningTaskPriority {
    LOW = "LOW",
    MEDIUM = "MEDIUM",
    HIGH = "HIGH",
    URGENT = "URGENT"
}
/**
 * Assigned Staff Details
 */
export declare class AssignedStaffNatsDto {
    id: string;
    fullName: string;
    avatar?: string;
}
/**
 * Task Photo DTO
 */
export declare class TaskPhotoDto {
    id: string;
    url: string;
    thumbnailUrl?: string;
    category: string;
    uploadedAt: string;
    uploadedBy: string;
    description?: string;
}
/**
 * Single Cleaning Task Response
 * @unified Used by both NATS responses and REST API responses
 */
export declare class CleaningTaskNatsResponse {
    id: string;
    tenantId: string;
    hotelId: string;
    roomId: string;
    roomNumber?: string;
    taskType: CleaningTaskType;
    status: CleaningTaskStatus;
    priority: CleaningTaskPriority;
    description: string;
    notes?: string;
    estimatedDuration: number;
    scheduledFor: string;
    assignedToId?: string;
    assignedStaff?: AssignedStaffNatsDto;
    createdAt: string;
    updatedAt: string;
    completedAt?: string;
    actualDuration?: number;
    isAutomated?: boolean;
    eventTriggered?: boolean;
    roomType?: string;
    roomTypeId?: string;
    floor?: number;
    building?: string;
    assignedAt?: string;
    startedAt?: string;
    photos?: TaskPhotoDto[];
}
/**
 * Create Cleaning Task Request
 * Pattern: housekeeping.cleaning-tasks.create
 */
export declare class CreateCleaningTaskNatsRequest {
    tenantId: string;
    hotelId: string;
    roomId: string;
    roomNumber?: string;
    taskType: CleaningTaskType;
    priority: CleaningTaskPriority;
    description: string;
    estimatedDuration: number;
    scheduledFor: string;
    assignedToId?: string;
}
/**
 * Update fields for Cleaning Task
 */
export declare class UpdateCleaningTaskFieldsDto {
    taskType?: CleaningTaskType;
    status?: CleaningTaskStatus;
    priority?: CleaningTaskPriority;
    description?: string;
    notes?: string;
    estimatedDuration?: number;
    scheduledFor?: string;
    assignedToId?: string;
    completedAt?: string;
    actualDuration?: number;
}
/**
 * Update Cleaning Task Request
 * Pattern: housekeeping.cleaning-tasks.update
 */
export declare class UpdateCleaningTaskNatsRequest {
    id: string;
    tenantId: string;
    hotelId: string;
    updates: UpdateCleaningTaskFieldsDto;
}
/**
 * Find All Cleaning Tasks Request (Query Parameters)
 * @unified Used by both NATS requests and REST API query params
 */
export declare class FindAllCleaningTasksNatsRequest {
    tenantId: string;
    hotelId: string;
    page?: number;
    limit?: number;
    status?: CleaningTaskStatus;
    type?: CleaningTaskType;
    priority?: CleaningTaskPriority;
    assignedToId?: string;
    roomId?: string;
    startDate?: string;
    endDate?: string;
}
/**
 * Cleaning Tasks List Response (with pagination)
 * @unified Used by both NATS responses and REST API responses
 */
export declare class CleaningTasksListNatsResponse {
    data: CleaningTaskNatsResponse[];
    total: number;
    page: number;
    limit: number;
}
/**
 * NATS Response Type for findAll
 */
export type FindAllCleaningTasksNatsResponseType = NatsResponse<CleaningTasksListNatsResponse>;
//# sourceMappingURL=cleaning-tasks.nats.d.ts.map