/**
 * Amenity Requests NATS Contracts
 *
 * Patterns:
 * - amenity_requests.find_all
 * - amenity_requests.find_one
 * - amenity_requests.create
 * - amenity_requests.update
 * - amenity_requests.assign
 * - amenity_requests.start
 * - amenity_requests.complete
 * - amenity_requests.cancel
 * - amenity_requests.stats
 * - amenity_requests.assess_feasibility
 * - amenity_requests.quality_check
 * - amenity_requests.request_guest_approval
 * - amenity_requests.coordinate_departments
 * - amenity_requests.get_special_request_categories
 *
 * Handler: booking-service (AmenityNatsController)
 * Called by: api-gateway (GuestServicesController)
 */
import { NatsResponse, TenantHotelQueryDto } from '../../common';
/**
 * Amenity Priority Enum
 */
export declare enum AmenityPriority {
    LOW = "LOW",
    MEDIUM = "MEDIUM",
    HIGH = "HIGH",
    URGENT = "URGENT"
}
/**
 * Amenity Status Enum
 */
export declare enum AmenityStatus {
    PENDING = "PENDING",
    ASSIGNED = "ASSIGNED",
    IN_PROGRESS = "IN_PROGRESS",
    COMPLETED = "COMPLETED",
    CANCELLED = "CANCELLED"
}
/**
 * Special Request Category Enum
 */
export declare enum SpecialRequestCategory {
    ROOM_PREFERENCE = "ROOM_PREFERENCE",
    ACCESSIBILITY_NEEDS = "ACCESSIBILITY_NEEDS",
    DIETARY_REQUIREMENTS = "DIETARY_REQUIREMENTS",
    CELEBRATION_SERVICES = "CELEBRATION_SERVICES",
    BUSINESS_NEEDS = "BUSINESS_NEEDS",
    AMENITIES = "AMENITIES",
    SERVICES = "SERVICES"
}
/**
 * Feasibility Status Enum
 */
export declare enum FeasibilityStatus {
    PENDING = "PENDING",
    APPROVED = "APPROVED",
    REJECTED = "REJECTED",
    NEEDS_ASSESSMENT = "NEEDS_ASSESSMENT"
}
/**
 * Quality Check Status Enum
 */
export declare enum QualityCheckStatus {
    NOT_STARTED = "NOT_STARTED",
    IN_PROGRESS = "IN_PROGRESS",
    PASSED = "PASSED",
    FAILED = "FAILED",
    GUEST_CONFIRMATION_PENDING = "GUEST_CONFIRMATION_PENDING"
}
/**
 * Amenity Request Response (matches database entity)
 */
export interface AmenityRequestNatsResponse {
    id: string;
    tenantId: string;
    hotelId: string;
    guestId?: string;
    guestName: string;
    roomNumber: string;
    amenityType: string;
    requestCategory: SpecialRequestCategory;
    description: string;
    priority: AmenityPriority;
    status: AmenityStatus;
    assignedTo?: string;
    requestedAt: string | Date;
    assignedAt?: string | Date;
    completedAt?: string | Date;
    estimatedTime?: number;
    actualTime?: number;
    guestRating?: number;
    guestFeedback?: string;
    staffNotes?: string;
    feasibilityStatus: FeasibilityStatus;
    estimatedCost?: number;
    departmentsInvolved?: string[];
    qualityCheckStatus: QualityCheckStatus;
    guestApprovalRequired: boolean;
    guestApprovedAt?: string | Date;
    feasibilityAssessedAt?: string | Date;
    feasibilityAssessedBy?: string;
    qualityCheckedAt?: string | Date;
    qualityCheckedBy?: string;
    customerPreferencesApplied?: string[];
    createdAt: string | Date;
    updatedAt: string | Date;
}
/**
 * Create Amenity Request DTO
 * Pattern: amenity_requests.create
 * Used for both NATS messaging and REST API
 */
export declare class CreateAmenityRequestDto {
    tenantId: string;
    hotelId: string;
    guestId?: string;
    guestName: string;
    roomNumber: string;
    amenityType: string;
    requestCategory?: SpecialRequestCategory;
    description: string;
    priority?: AmenityPriority;
    assignedTo?: string;
    estimatedTime?: number;
    staffNotes?: string;
    estimatedCost?: number;
    departmentsInvolved?: string[];
    guestApprovalRequired?: boolean;
    customerPreferencesApplied?: string[];
}
/**
 * @deprecated Use CreateAmenityRequestDto instead
 * Kept for backward compatibility during migration
 */
export type CreateAmenityRequestNatsRequest = CreateAmenityRequestDto;
/**
 * Create Amenity Request Response
 */
export type CreateAmenityRequestNatsResponse = NatsResponse<AmenityRequestNatsResponse>;
/**
 * Find All Amenity Requests Request
 * Pattern: amenity_requests.find_all
 *
 * UNIFIED CONTRACT - Used by both NATS handlers and REST API (api-gateway @Query())
 * @standardized 2026-02-25
 */
export declare class FindAllAmenityRequestsNatsRequest {
    tenantId: string;
    hotelId: string;
    status?: AmenityStatus;
    priority?: AmenityPriority;
    amenityType?: string;
    requestCategory?: SpecialRequestCategory;
    startDate?: string;
    endDate?: string;
    page?: number;
    limit?: number;
    sortBy?: string;
    sortOrder?: 'ASC' | 'DESC';
}
/**
 * Find All Amenity Requests Response
 */
export type FindAllAmenityRequestsNatsResponse = NatsResponse<{
    data: AmenityRequestNatsResponse[];
    total: number;
    page: number;
    limit: number;
    totalPages: number;
}>;
/**
 * Find One Amenity Request Request
 * Pattern: amenity_requests.find_one
 */
export declare class FindOneAmenityRequestNatsRequest {
    id: string;
    tenantId: string;
    hotelId: string;
}
/**
 * Find One Amenity Request Response
 */
export type FindOneAmenityRequestNatsResponse = NatsResponse<AmenityRequestNatsResponse>;
/**
 * Update Amenity Request DTO
 * Used for both NATS messaging and REST API
 */
export declare class UpdateAmenityRequestDto {
    amenityType?: string;
    description?: string;
    priority?: AmenityPriority;
    status?: AmenityStatus;
    assignedTo?: string;
    estimatedTime?: number;
    staffNotes?: string;
    guestRating?: number;
    guestFeedback?: string;
    estimatedCost?: number;
}
/**
 * Update Amenity Request NATS Request
 * Pattern: amenity_requests.update
 */
export declare class UpdateAmenityRequestNatsRequest {
    id: string;
    tenantId: string;
    hotelId: string;
    updateDto: UpdateAmenityRequestDto;
}
/**
 * Update Amenity Request Response
 */
export type UpdateAmenityRequestNatsResponse = NatsResponse<AmenityRequestNatsResponse>;
/**
 * Assign Amenity Request Request
 * Pattern: amenity_requests.assign
 */
export declare class AssignAmenityRequestNatsRequest {
    id: string;
    tenantId: string;
    hotelId: string;
    assignedTo: string;
    estimatedTime?: number;
}
/**
 * Assign Amenity Request Response
 */
export type AssignAmenityRequestNatsResponse = NatsResponse<AmenityRequestNatsResponse>;
/**
 * Start Amenity Request Request
 * Pattern: amenity_requests.start
 */
export declare class StartAmenityRequestNatsRequest {
    id: string;
    tenantId: string;
    hotelId: string;
}
/**
 * Start Amenity Request Response
 */
export type StartAmenityRequestNatsResponse = NatsResponse<AmenityRequestNatsResponse>;
/**
 * Complete Amenity Request Request
 * Pattern: amenity_requests.complete
 */
export declare class CompleteAmenityRequestNatsRequest {
    id: string;
    tenantId: string;
    hotelId: string;
    actualTime?: number;
    guestRating?: number;
    guestFeedback?: string;
}
/**
 * Complete Amenity Request Response
 */
export type CompleteAmenityRequestNatsResponse = NatsResponse<AmenityRequestNatsResponse>;
/**
 * Cancel Amenity Request Request
 * Pattern: amenity_requests.cancel
 */
export declare class CancelAmenityRequestNatsRequest {
    id: string;
    tenantId: string;
    hotelId: string;
    reason?: string;
}
/**
 * Cancel Amenity Request Response
 */
export type CancelAmenityRequestNatsResponse = NatsResponse<AmenityRequestNatsResponse>;
/**
 * Amenity Request Stats Response
 */
export declare class AmenityRequestStatsNatsResponse {
    total: number;
    byStatus: {
        PENDING: number;
        ASSIGNED: number;
        IN_PROGRESS: number;
        COMPLETED: number;
        CANCELLED: number;
    };
    byPriority: {
        LOW: number;
        MEDIUM: number;
        HIGH: number;
        URGENT: number;
    };
    byAmenityType: Record<string, number>;
    averageCompletionTime?: number;
    averageRating?: number;
    totalEstimatedCost?: number;
    totalActualCost?: number;
}
/**
 * Get Amenity Request Stats Request
 * Pattern: amenity_requests.stats
 */
export declare class GetAmenityRequestStatsNatsRequest extends TenantHotelQueryDto {
}
/**
 * Get Amenity Request Stats Response
 */
export type GetAmenityRequestStatsNatsResponse = NatsResponse<AmenityRequestStatsNatsResponse>;
/**
 * Assess Feasibility Request
 * Pattern: amenity_requests.assess_feasibility
 */
export declare class AssessFeasibilityNatsRequest {
    id: string;
    tenantId: string;
    hotelId: string;
    feasibilityStatus: string;
    estimatedCost?: number;
    feasibilityNotes?: string;
    assessedBy?: string;
}
/**
 * Assess Feasibility Response
 */
export type AssessFeasibilityNatsResponse = NatsResponse<AmenityRequestNatsResponse>;
/**
 * Perform Quality Check Request
 * Pattern: amenity_requests.quality_check
 */
export declare class PerformQualityCheckNatsRequest {
    id: string;
    tenantId: string;
    hotelId: string;
    qualityCheckStatus: string;
    qualityNotes?: string;
    checkedBy?: string;
}
/**
 * Perform Quality Check Response
 */
export type PerformQualityCheckNatsResponse = NatsResponse<AmenityRequestNatsResponse>;
/**
 * Request Guest Approval Request
 * Pattern: amenity_requests.request_guest_approval
 */
export declare class RequestGuestApprovalNatsRequest {
    id: string;
    tenantId: string;
    hotelId: string;
    approvalMessage?: string;
}
/**
 * Request Guest Approval Response
 */
export type RequestGuestApprovalNatsResponse = NatsResponse<AmenityRequestNatsResponse>;
/**
 * Coordinate Departments Request
 * Pattern: amenity_requests.coordinate_departments
 */
export declare class CoordinateDepartmentsNatsRequest {
    id: string;
    tenantId: string;
    hotelId: string;
    departments: string[];
    coordinationNotes?: string;
}
/**
 * Coordinate Departments Response
 */
export type CoordinateDepartmentsNatsResponse = NatsResponse<AmenityRequestNatsResponse>;
//# sourceMappingURL=amenity-requests.nats.d.ts.map