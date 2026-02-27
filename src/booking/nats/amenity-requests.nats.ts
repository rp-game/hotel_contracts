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
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsNotEmpty, IsUUID, IsString, IsEnum, IsNumber, IsDateString, Min, Max } from 'class-validator';
import { Type, Transform } from 'class-transformer';

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
 * Create Amenity Request DTO
 * Pattern: amenity_requests.create
 * Used for both NATS messaging and REST API
 */
export class CreateAmenityRequestDto {
  @ApiProperty({ description: 'Tenant ID', example: '550e8400-e29b-41d4-a716-446655440000' })
  @IsUUID()
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID', example: '550e8400-e29b-41d4-a716-446655440001' })
  @IsUUID()
  hotelId: string;

  @ApiPropertyOptional({ description: 'Guest ID', example: '550e8400-e29b-41d4-a716-446655440002' })
  @IsOptional()
  @IsUUID()
  guestId?: string;

  @ApiProperty({ description: 'Guest name', example: 'John Doe' })
  @IsString()
  @IsNotEmpty()
  guestName: string;

  @ApiProperty({ description: 'Room number', example: '101' })
  @IsString()
  @IsNotEmpty()
  roomNumber: string;

  @ApiProperty({ description: 'Amenity type requested', example: 'Extra Towels' })
  @IsString()
  @IsNotEmpty()
  amenityType: string;

  @ApiPropertyOptional({ description: 'Request category', enum: SpecialRequestCategory })
  @IsOptional()
  @IsEnum(SpecialRequestCategory)
  requestCategory?: SpecialRequestCategory;

  @ApiProperty({ description: 'Request description', example: 'Need 2 extra towels for guests' })
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiPropertyOptional({ description: 'Priority level', enum: AmenityPriority, default: AmenityPriority.MEDIUM })
  @IsOptional()
  @IsEnum(AmenityPriority)
  priority?: AmenityPriority;

  @ApiPropertyOptional({ description: 'Assigned to staff ID' })
  @IsOptional()
  @IsString()
  assignedTo?: string;

  @ApiPropertyOptional({ description: 'Estimated time in minutes', example: 15 })
  @IsOptional()
  @IsNumber()
  estimatedTime?: number;

  @ApiPropertyOptional({ description: 'Staff notes' })
  @IsOptional()
  @IsString()
  staffNotes?: string;

  @ApiPropertyOptional({ description: 'Estimated cost', example: 0 })
  @IsOptional()
  @IsNumber()
  estimatedCost?: number;

  @ApiPropertyOptional({ description: 'Departments involved', type: [String] })
  @IsOptional()
  departmentsInvolved?: string[];

  @ApiPropertyOptional({ description: 'Guest approval required', default: false })
  @IsOptional()
  guestApprovalRequired?: boolean;

  @ApiPropertyOptional({ description: 'Customer preferences applied', type: [String] })
  @IsOptional()
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
export class FindAllAmenityRequestsNatsRequest {
  @ApiProperty({ description: 'Tenant ID' })
  @IsNotEmpty()
  @IsUUID()
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID' })
  @IsNotEmpty()
  @IsUUID()
  hotelId: string;

  @ApiPropertyOptional({ description: 'Filter by request status', enum: AmenityStatus })
  @IsOptional()
  @Transform(({ value }) => (value === '' ? undefined : value))
  @IsEnum(AmenityStatus)
  status?: AmenityStatus;

  @ApiPropertyOptional({ description: 'Filter by priority', enum: AmenityPriority })
  @IsOptional()
  @Transform(({ value }) => (value === '' ? undefined : value))
  @IsEnum(AmenityPriority)
  priority?: AmenityPriority;

  @ApiPropertyOptional({ description: 'Search by guest name, room number, or description' })
  @IsOptional()
  @IsString()
  search?: string;

  @ApiPropertyOptional({ description: 'Filter by amenity type' })
  @IsOptional()
  @IsString()
  amenityType?: string;

  @ApiPropertyOptional({ description: 'Filter by assigned staff' })
  @IsOptional()
  @IsString()
  assignedTo?: string;

  @ApiPropertyOptional({ description: 'Filter by request category', enum: SpecialRequestCategory })
  @IsOptional()
  @Transform(({ value }) => (value === '' ? undefined : value))
  @IsEnum(SpecialRequestCategory)
  requestCategory?: SpecialRequestCategory;

  @ApiPropertyOptional({ description: 'Filter by start date (ISO 8601 format)' })
  @IsOptional()
  @IsDateString()
  startDate?: string;

  @ApiPropertyOptional({ description: 'Filter by end date (ISO 8601 format)' })
  @IsOptional()
  @IsDateString()
  endDate?: string;

  @ApiPropertyOptional({ description: 'Page number', minimum: 1, default: 1 })
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(1)
  page?: number;

  @ApiPropertyOptional({ description: 'Items per page', minimum: 1, maximum: 100, default: 10 })
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(1)
  @Max(100)
  limit?: number;

  @ApiPropertyOptional({ description: 'Sort field', enum: ['requestedAt', 'status', 'amenityType', 'roomNumber', 'createdAt'] })
  @IsOptional()
  @IsString()
  sortBy?: string;

  @ApiPropertyOptional({ description: 'Sort order', enum: ['ASC', 'DESC'] })
  @IsOptional()
  @Transform(({ value }) => (value === '' ? undefined : value))
  @IsEnum(['ASC', 'DESC'])
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
export class FindOneAmenityRequestNatsRequest {
  @ApiProperty({ description: 'Amenity request ID' })
  @IsNotEmpty()
  @IsUUID()
  id: string;

  @ApiProperty({ description: 'Tenant ID' })
  @IsNotEmpty()
  @IsUUID()
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID' })
  @IsNotEmpty()
  @IsUUID()
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
export class UpdateAmenityRequestDto {
  @ApiPropertyOptional({ description: 'Amenity type requested', example: 'Extra Pillows' })
  amenityType?: string;

  @ApiPropertyOptional({ description: 'Request description', example: 'Need 2 extra pillows' })
  description?: string;

  @ApiPropertyOptional({ description: 'Priority level', enum: AmenityPriority })
  priority?: AmenityPriority;

  @ApiPropertyOptional({ description: 'Request status', enum: AmenityStatus })
  status?: AmenityStatus;

  @ApiPropertyOptional({ description: 'Assigned to staff ID' })
  assignedTo?: string;

  @ApiPropertyOptional({ description: 'Estimated time in minutes', example: 15 })
  estimatedTime?: number;

  @ApiPropertyOptional({ description: 'Staff notes' })
  staffNotes?: string;

  @ApiPropertyOptional({ description: 'Guest rating (1-5)', minimum: 1, maximum: 5 })
  guestRating?: number;

  @ApiPropertyOptional({ description: 'Guest feedback' })
  guestFeedback?: string;

  @ApiPropertyOptional({ description: 'Estimated cost', example: 0 })
  estimatedCost?: number;

  @ApiPropertyOptional({ description: 'Actual time taken in minutes' })
  actualTime?: number;

  @ApiPropertyOptional({ description: 'Timestamp when request was assigned (ISO 8601)' })
  @IsOptional()
  @IsDateString()
  assignedAt?: string;

  @ApiPropertyOptional({ description: 'Timestamp when request was completed (ISO 8601)' })
  @IsOptional()
  @IsDateString()
  completedAt?: string;
}

/**
 * Update Amenity Request NATS Request
 * Pattern: amenity_requests.update
 */
export class UpdateAmenityRequestNatsRequest {
  @ApiProperty({ description: 'Amenity request ID' })
  @IsNotEmpty()
  @IsUUID()
  id: string;

  @ApiProperty({ description: 'Tenant ID' })
  @IsNotEmpty()
  @IsUUID()
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID' })
  @IsNotEmpty()
  @IsUUID()
  hotelId: string;

  @ApiProperty({ description: 'Update data' })
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
export class AssignAmenityRequestNatsRequest {
  @ApiProperty({ description: 'Amenity request ID' })
  id: string;
  @ApiProperty({ description: 'Tenant ID' })
  tenantId: string;
  @ApiProperty({ description: 'Hotel ID' })
  hotelId: string;
  @ApiProperty({ description: 'Assigned staff ID' })
  assignedTo: string;
  @ApiPropertyOptional({ description: 'Estimated time in minutes' })
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
export class StartAmenityRequestNatsRequest {
  @ApiProperty({ description: 'Amenity request ID' })
  id: string;
  @ApiProperty({ description: 'Tenant ID' })
  tenantId: string;
  @ApiProperty({ description: 'Hotel ID' })
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
export class CompleteAmenityRequestNatsRequest {
  @ApiProperty({ description: 'Amenity request ID' })
  id: string;
  @ApiProperty({ description: 'Tenant ID' })
  tenantId: string;
  @ApiProperty({ description: 'Hotel ID' })
  hotelId: string;
  @ApiPropertyOptional({ description: 'Actual time spent in minutes' })
  actualTime?: number;
  @ApiPropertyOptional({ description: 'Guest rating (1-5)' })
  guestRating?: number;
  @ApiPropertyOptional({ description: 'Guest feedback' })
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
export class CancelAmenityRequestNatsRequest {
  @ApiProperty({ description: 'Amenity request ID' })
  id: string;
  @ApiProperty({ description: 'Tenant ID' })
  tenantId: string;
  @ApiProperty({ description: 'Hotel ID' })
  hotelId: string;
  @ApiPropertyOptional({ description: 'Cancellation reason' })
  reason?: string;
}

/**
 * Cancel Amenity Request Response
 */
export type CancelAmenityRequestNatsResponse = NatsResponse<AmenityRequestNatsResponse>;

/**
 * Amenity Request Stats Response
 */
export class AmenityRequestStatsNatsResponse {
  @ApiProperty({ description: 'Total requests' })
  total: number;
  @ApiProperty({ description: 'Breakdown by status' })
  byStatus: {
    PENDING: number;
    ASSIGNED: number;
    IN_PROGRESS: number;
    COMPLETED: number;
    CANCELLED: number;
  };
  @ApiProperty({ description: 'Breakdown by priority' })
  byPriority: {
    LOW: number;
    MEDIUM: number;
    HIGH: number;
    URGENT: number;
  };
  @ApiProperty({ description: 'Breakdown by amenity type' })
  byAmenityType: Record<string, number>;
  @ApiPropertyOptional({ description: 'Average completion time in minutes' })
  averageCompletionTime?: number;
  @ApiPropertyOptional({ description: 'Average guest rating' })
  averageRating?: number;
  @ApiPropertyOptional({ description: 'Total estimated cost' })
  totalEstimatedCost?: number;
  @ApiPropertyOptional({ description: 'Total actual cost' })
  totalActualCost?: number;
}

/**
 * Get Amenity Request Stats Request
 * Pattern: amenity_requests.stats
 */
export class GetAmenityRequestStatsNatsRequest extends TenantHotelQueryDto {}

/**
 * Get Amenity Request Stats Response
 */
export type GetAmenityRequestStatsNatsResponse = NatsResponse<AmenityRequestStatsNatsResponse>;

/**
 * Assess Feasibility Request
 * Pattern: amenity_requests.assess_feasibility
 */
export class AssessFeasibilityNatsRequest {
  @ApiProperty({ description: 'Amenity request ID' })
  id: string;
  @ApiProperty({ description: 'Tenant ID' })
  tenantId: string;
  @ApiProperty({ description: 'Hotel ID' })
  hotelId: string;
  @ApiProperty({ description: 'Feasibility status' })
  feasibilityStatus: string;
  @ApiPropertyOptional({ description: 'Estimated cost' })
  estimatedCost?: number;
  @ApiPropertyOptional({ description: 'Feasibility notes' })
  feasibilityNotes?: string;
  @ApiPropertyOptional({ description: 'Assessed by staff ID' })
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
export class PerformQualityCheckNatsRequest {
  @ApiProperty({ description: 'Amenity request ID' })
  id: string;
  @ApiProperty({ description: 'Tenant ID' })
  tenantId: string;
  @ApiProperty({ description: 'Hotel ID' })
  hotelId: string;
  @ApiProperty({ description: 'Quality check status' })
  qualityCheckStatus: string;
  @ApiPropertyOptional({ description: 'Quality notes' })
  qualityNotes?: string;
  @ApiPropertyOptional({ description: 'Checked by staff ID' })
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
export class RequestGuestApprovalNatsRequest {
  @ApiProperty({ description: 'Amenity request ID' })
  id: string;
  @ApiProperty({ description: 'Tenant ID' })
  tenantId: string;
  @ApiProperty({ description: 'Hotel ID' })
  hotelId: string;
  @ApiPropertyOptional({ description: 'Approval message' })
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
export class CoordinateDepartmentsNatsRequest {
  @ApiProperty({ description: 'Amenity request ID' })
  id: string;
  @ApiProperty({ description: 'Tenant ID' })
  tenantId: string;
  @ApiProperty({ description: 'Hotel ID' })
  hotelId: string;
  @ApiProperty({ description: 'Department names to coordinate with', type: [String] })
  departments: string[];
  @ApiPropertyOptional({ description: 'Coordination notes' })
  coordinationNotes?: string;
}

/**
 * Coordinate Departments Response
 */
export type CoordinateDepartmentsNatsResponse = NatsResponse<AmenityRequestNatsResponse>;

/**
 * Get Special Request Categories Request
 * Pattern: amenity_requests.special_categories
 */
export class GetSpecialRequestCategoriesNatsDto {
  @ApiProperty({ description: 'Tenant ID' })
  @IsUUID()
  tenantId: string;

  @ApiPropertyOptional({ description: 'Hotel ID' })
  @IsOptional()
  @IsUUID()
  hotelId?: string;
}

export class SpecialRequestCategoryInfoDto {
  @ApiProperty()
  displayName: string;

  @ApiProperty()
  description: string;

  @ApiProperty({ type: [String] })
  subTypes: string[];

  @ApiProperty({ type: [String] })
  requiredDepartments: string[];

  @ApiProperty()
  guestApprovalRequired: boolean;
}

export class GetSpecialRequestCategoriesResponseDto {
  @ApiProperty({ type: 'object', additionalProperties: { $ref: '#/components/schemas/SpecialRequestCategoryInfoDto' } })
  categories: Record<string, SpecialRequestCategoryInfoDto>;
}

export type GetSpecialRequestCategoriesNatsResponse = NatsResponse<GetSpecialRequestCategoriesResponseDto>;
