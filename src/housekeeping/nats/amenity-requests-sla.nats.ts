/**
 * Amenity Requests SLA NATS Contracts
 * Patterns: housekeeping.amenity-requests.*
 *
 * Handles SLA tracking, auto-assignment, and status updates for guest amenity requests
 */

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { NatsResponse } from '../../common';
import { AmenityRequestStatus, AmenityAlertType, AmenityAlertStatus, AmenitySLAStatus } from '../enums';

/**
 * Amenity Request with SLA tracking information
 */
export class AmenityRequestData {
  @ApiProperty({ description: 'Request ID' })
  id!: string;

  @ApiProperty({ description: 'Room ID' })
  roomId!: string;

  @ApiPropertyOptional({ description: 'Amenity ID' })
  amenityId?: string;

  @ApiPropertyOptional({ description: 'Quantity requested' })
  quantity?: number;

  @ApiProperty({ description: 'Current request status', enum: AmenityRequestStatus })
  status!: AmenityRequestStatus;

  @ApiPropertyOptional({ description: 'Additional notes' })
  notes?: string;

  @ApiPropertyOptional({ description: 'Staff ID who requested' })
  requestedById?: string;

  @ApiPropertyOptional({ description: 'Request timestamp', type: String })
  requestedAt?: string | Date;

  @ApiPropertyOptional({ description: 'Staff ID assigned to fulfill' })
  assignedToId?: string;

  @ApiPropertyOptional({ description: 'Assignment timestamp', type: String })
  assignedAt?: string | Date;

  @ApiPropertyOptional({ description: 'When staff accepted the request', type: String })
  acceptedAt?: string | Date;

  @ApiPropertyOptional({ description: 'Staff ID who fulfilled' })
  fulfilledById?: string;

  @ApiPropertyOptional({ description: 'Fulfillment timestamp', type: String })
  fulfilledAt?: string | Date;

  @ApiPropertyOptional({ description: 'SLA config ID applied to this request' })
  slaConfigId?: string;

  @ApiPropertyOptional({ description: 'First response deadline', type: String })
  slaDeadlineFirstResponse?: string | Date;

  @ApiPropertyOptional({ description: 'Resolution deadline', type: String })
  slaDeadlineResolution?: string | Date;

  @ApiProperty({ description: 'Whether SLA was breached', type: Boolean, default: false })
  slaBreach!: boolean;

  @ApiProperty({ description: 'Tenant ID' })
  tenantId!: string;

  @ApiProperty({ description: 'Hotel ID' })
  hotelId!: string;

  @ApiProperty({ description: 'Creation timestamp', type: String })
  createdAt!: string | Date;

  @ApiProperty({ description: 'Last update timestamp', type: String })
  updatedAt!: string | Date;
}

/**
 * Amenity Request with computed SLA status
 */
export class AmenityRequestWithSLAStatus extends AmenityRequestData {
  @ApiPropertyOptional({ description: 'Computed SLA status', enum: AmenitySLAStatus })
  slaStatus?: AmenitySLAStatus;

  @ApiPropertyOptional({ description: 'Minutes remaining until SLA breach' })
  minutesUntilBreach?: number;
}

/**
 * SLA Alert record
 */
export class AmenityAlertData {
  @ApiProperty({ description: 'Alert ID' })
  id!: string;

  @ApiProperty({ description: 'Amenity request ID' })
  amenityRequestId!: string;

  @ApiProperty({ description: 'Alert type', enum: AmenityAlertType })
  alertType!: AmenityAlertType;

  @ApiPropertyOptional({ description: 'Alert triggered timestamp', type: String })
  triggeredAt?: string | Date;

  @ApiPropertyOptional({ description: 'Alert sent timestamp', type: String })
  sentAt?: string | Date;

  @ApiProperty({ description: 'User IDs the alert was sent to', type: [String], default: [] })
  sentTo!: string[];

  @ApiProperty({ description: 'Alert status', enum: AmenityAlertStatus, default: AmenityAlertStatus.PENDING })
  status!: AmenityAlertStatus;

  @ApiPropertyOptional({ description: 'Alert acknowledged timestamp', type: String })
  acknowledgedAt?: string | Date;

  @ApiPropertyOptional({ description: 'User ID who acknowledged' })
  acknowledgedBy?: string;

  @ApiProperty({ description: 'Tenant ID' })
  tenantId!: string;

  @ApiProperty({ description: 'Hotel ID' })
  hotelId!: string;

  @ApiProperty({ description: 'Creation timestamp', type: String })
  createdAt!: string | Date;
}

// ============================================
// FIND MY ASSIGNED REQUESTS
// ============================================

export class FindMyAssignedAmenityRequestsNatsRequest {
  @ApiProperty({ description: 'Hotel ID' })
  hotelId!: string;

  @ApiProperty({ description: 'Tenant ID' })
  tenantId!: string;

  @ApiProperty({ description: 'Staff ID of the current user' })
  staffId!: string;

  @ApiPropertyOptional({
    description: 'Filter by request status',
    enum: AmenityRequestStatus,
    isArray: true,
  })
  status?: AmenityRequestStatus[];

  @ApiPropertyOptional({ description: 'Pagination: page number', type: Number })
  page?: number;

  @ApiPropertyOptional({ description: 'Pagination: items per page', type: Number })
  limit?: number;
}

export type FindMyAssignedAmenityRequestsNatsResponse = NatsResponse<AmenityRequestWithSLAStatus[]>;

// ============================================
// FIND SUPERVISOR VIEW
// ============================================

export class FindSupervisorAmenityRequestsNatsRequest {
  @ApiProperty({ description: 'Hotel ID' })
  hotelId!: string;

  @ApiProperty({ description: 'Tenant ID' })
  tenantId!: string;

  @ApiPropertyOptional({
    description: 'Filter by SLA status',
    enum: AmenitySLAStatus,
  })
  slaStatus?: AmenitySLAStatus;

  @ApiPropertyOptional({
    description: 'Filter by request status',
    enum: AmenityRequestStatus,
    isArray: true,
  })
  status?: AmenityRequestStatus[];

  @ApiPropertyOptional({ description: 'Pagination: page number', type: Number })
  page?: number;

  @ApiPropertyOptional({ description: 'Pagination: items per page', type: Number })
  limit?: number;
}

export type FindSupervisorAmenityRequestsNatsResponse = NatsResponse<AmenityRequestWithSLAStatus[]>;

// ============================================
// UPDATE AMENITY REQUEST
// ============================================

export class UpdateAmenityRequestStatusNatsRequest {
  @ApiProperty({ description: 'Request ID' })
  id!: string;

  @ApiProperty({ description: 'Tenant ID' })
  tenantId!: string;

  @ApiProperty({ description: 'Hotel ID' })
  hotelId!: string;

  @ApiPropertyOptional({
    description: 'New status',
    enum: AmenityRequestStatus,
  })
  status?: AmenityRequestStatus;

  @ApiPropertyOptional({ description: 'Reassign to different staff ID' })
  assignedToId?: string;

  @ApiPropertyOptional({ description: 'Additional notes' })
  notes?: string;

  @ApiPropertyOptional({ description: 'Staff ID who fulfilled (for FULFILLED status)' })
  fulfilledById?: string;
}

export type UpdateAmenityRequestStatusNatsResponse = NatsResponse<AmenityRequestWithSLAStatus>;
