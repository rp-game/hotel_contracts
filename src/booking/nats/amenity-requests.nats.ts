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

import { NatsResponse } from '../../common';

/**
 * Amenity Priority Enum
 */
export enum AmenityPriority {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH',
  URGENT = 'URGENT',
}

/**
 * Amenity Status Enum
 */
export enum AmenityStatus {
  PENDING = 'PENDING',
  ASSIGNED = 'ASSIGNED',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED',
}

/**
 * Special Request Category Enum
 */
export enum SpecialRequestCategory {
  ROOM_PREFERENCE = 'ROOM_PREFERENCE',
  ACCESSIBILITY_NEEDS = 'ACCESSIBILITY_NEEDS',
  DIETARY_REQUIREMENTS = 'DIETARY_REQUIREMENTS',
  CELEBRATION_SERVICES = 'CELEBRATION_SERVICES',
  BUSINESS_NEEDS = 'BUSINESS_NEEDS',
  AMENITIES = 'AMENITIES',
  SERVICES = 'SERVICES',
}

/**
 * Feasibility Status Enum
 */
export enum FeasibilityStatus {
  PENDING = 'PENDING',
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED',
  NEEDS_ASSESSMENT = 'NEEDS_ASSESSMENT',
}

/**
 * Quality Check Status Enum
 */
export enum QualityCheckStatus {
  NOT_STARTED = 'NOT_STARTED',
  IN_PROGRESS = 'IN_PROGRESS',
  PASSED = 'PASSED',
  FAILED = 'FAILED',
  GUEST_CONFIRMATION_PENDING = 'GUEST_CONFIRMATION_PENDING',
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
  
  // Assignment & Timing
  assignedTo?: string;
  requestedAt: string | Date;
  assignedAt?: string | Date;
  completedAt?: string | Date;
  estimatedTime?: number; // minutes
  actualTime?: number; // minutes
  
  // Feedback & Notes
  guestRating?: number; // 1-5
  guestFeedback?: string;
  staffNotes?: string;
  
  // TH4.2 Enhancement Fields
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
 * Create Amenity Request Request
 * Pattern: amenity_requests.create
 */
export interface CreateAmenityRequestNatsRequest {
  tenantId: string;
  hotelId: string;
  roomId?: string;
  guestId?: string;
  guestName?: string;
  roomNumber?: string;
  amenityType: string;
  requestCategory?: SpecialRequestCategory;
  description: string;
  priority?: AmenityPriority;
  requestedTime?: string;
  specialInstructions?: string;
  estimatedCost?: number;
}

/**
 * Create Amenity Request Response
 */
export type CreateAmenityRequestNatsResponse = NatsResponse<AmenityRequestNatsResponse>;

/**
 * Find All Amenity Requests Request
 * Pattern: amenity_requests.find_all
 */
export interface FindAllAmenityRequestsNatsRequest {
  tenantId: string;
  hotelId?: string;
  status?: AmenityStatus;
  priority?: AmenityPriority;
  category?: string; // amenityType filter
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
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}>;

/**
 * Find One Amenity Request Request
 * Pattern: amenity_requests.find_one
 */
export interface FindOneAmenityRequestNatsRequest {
  id: string;
  tenantId: string;
  hotelId: string;
}

/**
 * Find One Amenity Request Response
 */
export type FindOneAmenityRequestNatsResponse = NatsResponse<AmenityRequestNatsResponse>;

/**
 * Update Amenity Request Request
 * Pattern: amenity_requests.update
 */
export interface UpdateAmenityRequestNatsRequest {
  id: string;
  tenantId: string;
  hotelId: string;
  updateDto: {
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
  };
}

/**
 * Update Amenity Request Response
 */
export type UpdateAmenityRequestNatsResponse = NatsResponse<AmenityRequestNatsResponse>;

/**
 * Assign Amenity Request Request
 * Pattern: amenity_requests.assign
 */
export interface AssignAmenityRequestNatsRequest {
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
export interface StartAmenityRequestNatsRequest {
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
export interface CompleteAmenityRequestNatsRequest {
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
export interface CancelAmenityRequestNatsRequest {
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
export interface AmenityRequestStatsNatsResponse {
  total: number;
  byStatus: Record<AmenityStatus, number>;
  byPriority: Record<AmenityPriority, number>;
  byAmenityType: Record<string, number>;
}

/**
 * Get Amenity Request Stats Request
 * Pattern: amenity_requests.stats
 */
export interface GetAmenityRequestStatsNatsRequest {
  tenantId: string;
  hotelId?: string;
}

/**
 * Get Amenity Request Stats Response
 */
export type GetAmenityRequestStatsNatsResponse = NatsResponse<AmenityRequestStatsNatsResponse>;

/**
 * Assess Feasibility Request
 * Pattern: amenity_requests.assess_feasibility
 */
export interface AssessFeasibilityNatsRequest {
  id: string;
  tenantId: string;
  hotelId: string;
  feasibilityStatus: FeasibilityStatus;
  estimatedCost?: number;
  departmentsInvolved?: string[];
  assessedBy: string;
}

/**
 * Assess Feasibility Response
 */
export type AssessFeasibilityNatsResponse = NatsResponse<AmenityRequestNatsResponse>;

/**
 * Perform Quality Check Request
 * Pattern: amenity_requests.quality_check
 */
export interface PerformQualityCheckNatsRequest {
  id: string;
  tenantId: string;
  hotelId: string;
  qualityCheckStatus: QualityCheckStatus;
  checkedBy: string;
}

/**
 * Perform Quality Check Response
 */
export type PerformQualityCheckNatsResponse = NatsResponse<AmenityRequestNatsResponse>;

/**
 * Request Guest Approval Request
 * Pattern: amenity_requests.request_guest_approval
 */
export interface RequestGuestApprovalNatsRequest {
  id: string;
  tenantId: string;
  hotelId: string;
  guestApprovalRequired: boolean;
}

/**
 * Request Guest Approval Response
 */
export type RequestGuestApprovalNatsResponse = NatsResponse<AmenityRequestNatsResponse>;

/**
 * Coordinate Departments Request
 * Pattern: amenity_requests.coordinate_departments
 */
export interface CoordinateDepartmentsNatsRequest {
  id: string;
  tenantId: string;
  hotelId: string;
  departmentsInvolved: string[];
}

/**
 * Coordinate Departments Response
 */
export type CoordinateDepartmentsNatsResponse = NatsResponse<AmenityRequestNatsResponse>;
