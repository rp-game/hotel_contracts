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
    IN_PROGRESS = "IN_PROGRESS",
    COMPLETED = "COMPLETED",
    CANCELLED = "CANCELLED"
}
/**
 * Cleaning Task Type Enum
 */
export declare enum CleaningTaskType {
    CLEANING = "CLEANING",
    MAINTENANCE = "MAINTENANCE",
    INSPECTION = "INSPECTION",
    DEEP_CLEAN = "DEEP_CLEAN"
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