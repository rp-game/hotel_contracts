/**
 * Amenity Request REST API DTOs
 *
 * Shared classes used by both:
 * - API Gateway REST endpoints (with @ApiProperty decorators)
 * - Housekeeping Service REST endpoints
 */

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { AmenityRequestStatus } from '../enums/amenity-request-status.enum';

/**
 * Create Housekeeping Amenity Request DTO
 * Used by POST /amenity-requests (housekeeping-service)
 * Separate from booking domain's CreateAmenityRequestDto
 */
export class CreateHousekeepingAmenityRequestDto {
  @ApiProperty({ 
    description: 'ID of the room for which the amenity is requested',
    example: 'room-uuid-101',
  })
  roomId!: string;

  @ApiProperty({ 
    description: 'ID of the amenity being requested',
    example: 'amenity-uuid-abc',
  })
  amenityId!: string;

  @ApiPropertyOptional({ 
    description: 'Quantity of the amenity requested',
    type: Number,
    default: 1,
    example: 2,
  })
  quantity?: number;

  @ApiPropertyOptional({
    description: 'Status of the amenity request',
    enum: Object.values(AmenityRequestStatus),
    default: AmenityRequestStatus.PENDING,
  })
  status?: AmenityRequestStatus;

  @ApiPropertyOptional({ 
    description: 'Optional notes for the request',
    type: String,
    example: 'Guest in room 101 needs 2 extra towels.',
  })
  notes?: string;

  @ApiPropertyOptional({ 
    description: 'ID of the staff member who requested the amenity',
    type: String,
    example: 'staff-uuid-xyz',
  })
  requestedById?: string;

  @ApiProperty({ 
    description: 'Tenant ID',
    type: String,
    example: 'tenant-uuid-123',
  })
  tenantId!: string;

  @ApiProperty({ 
    description: 'Hotel ID',
    type: String,
    example: 'hotel-uuid-456',
  })
  hotelId!: string;
}

/**
 * Update Housekeeping Amenity Request DTO
 * Used by PATCH /amenity-requests/:id (housekeeping-service)
 * Allows updating status, assigned staff, notes, and completion
 * Separate from booking domain's UpdateAmenityRequestDto
 */
export class UpdateHousekeepingAmenityRequestDto {
  @ApiPropertyOptional({
    description: 'Amenity ID if changing the amenity',
    type: String,
  })
  amenityId?: string;

  @ApiPropertyOptional({
    description: 'Staff ID who requested (if changing)',
    type: String,
  })
  requestedById?: string | null;

  @ApiPropertyOptional({
    description: 'Staff ID who fulfilled the request',
    type: String,
  })
  fulfilledById?: string | null;

  @ApiPropertyOptional({
    description: 'Current status of the request',
    enum: Object.values(AmenityRequestStatus),
  })
  status?: AmenityRequestStatus;

  @ApiPropertyOptional({
    description: 'Assign request to a specific housekeeping staff member (triggers reassignment logic)',
    type: String,
  })
  assignedToId?: string | null;

  @ApiPropertyOptional({
    description: 'Timestamp when the request was fulfilled (ISO string or null)',
    type: String,
    nullable: true,
  })
  fulfilledAt?: string | null;

  @ApiPropertyOptional({
    description: 'Additional notes about the request or fulfillment',
    type: String,
  })
  notes?: string;

  @ApiPropertyOptional({
    description: 'Photos attached to the request/notes',
    type: [String],
  })
  photos?: string[];
}

/**
 * Housekeeping Amenity Request Response DTO
 * Returned by GET endpoints (housekeeping-service)
 */
export class HousekeepingAmenityRequestResponseDto {
  @ApiProperty({ description: 'Request ID' })
  id!: string;

  @ApiProperty({ description: 'Amenity ID' })
  amenityId!: string;

  @ApiProperty({ description: 'Room ID' })
  roomId!: string;

  @ApiProperty({ description: 'Tenant ID' })
  tenantId!: string;

  @ApiProperty({ description: 'Hotel ID' })
  hotelId!: string;

  @ApiProperty({
    description: 'Status of the request',
    enum: Object.values(AmenityRequestStatus),
  })
  status!: AmenityRequestStatus;

  @ApiProperty({ description: 'Staff ID who requested', type: String })
  requestedById?: string;

  @ApiPropertyOptional({ description: 'Staff ID assigned to fulfill' })
  assignedToId?: string;

  @ApiPropertyOptional({ description: 'When assigned to staff' })
  assignedAt?: Date;

  @ApiPropertyOptional({ description: 'Staff ID who fulfilled' })
  fulfilledById?: string;

  @ApiProperty({
    description: 'Timestamp when requested',
    type: String,
  })
  requestedAt!: Date;

  @ApiPropertyOptional({
    description: 'Timestamp when fulfilled',
    type: String,
  })
  fulfilledAt?: Date;

  @ApiPropertyOptional({ description: 'Additional notes' })
  notes?: string;

  @ApiPropertyOptional({ description: 'Attached photos' })
  photos?: string[];

  @ApiPropertyOptional({
    description: 'SLA Deadline for first response',
    type: String,
  })
  slaDeadlineFirstResponse?: Date;

  @ApiPropertyOptional({
    description: 'SLA Deadline for resolution',
    type: String,
  })
  slaDeadlineResolution?: Date;

  @ApiPropertyOptional({ description: 'Whether SLA was breached' })
  slaBreach?: boolean;

  @ApiProperty({ description: 'Creation timestamp' })
  createdAt!: Date;

  @ApiProperty({ description: 'Last update timestamp' })
  updatedAt!: Date;
}

/**
 * Housekeeping Amenity Request with SLA Status DTO
 * Extended response that includes computed SLA status
 * Used by supervisor and staff views
 */
export class HousekeepingAmenityRequestWithSLAStatusDto extends HousekeepingAmenityRequestResponseDto {
  @ApiPropertyOptional({
    description: 'Current SLA status: ON_TRACK, WARNING, BREACHED',
    enum: ['ON_TRACK', 'WARNING', 'BREACHED'],
  })
  slaStatus?: string;

  @ApiPropertyOptional({
    description: 'Minutes remaining until SLA breach (null if no SLA)',
    type: Number,
  })
  minutesUntilBreach?: number | null;
}
