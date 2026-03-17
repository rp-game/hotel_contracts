/**
 * Group Block REST DTOs
 *
 * Classes with @ApiProperty + class-validator decorators.
 * Used by API Gateway controllers for request validation.
 * Note: tenantId/hotelId are NOT included — injected from JWT by controller.
 */

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsEmail,
  IsDateString,
  IsEnum,
  IsBoolean,
  IsNumber,
  IsUUID,
  IsArray,
  IsIn,
  ValidateNested,
  Min,
} from 'class-validator';
import { Type } from 'class-transformer';
import { GroupBlockStatus, GroupBillingMode, InventoryControlMode } from '../enums/group-block.enum';

/**
 * DTO for creating a block allocation (nested in CreateGroupBlockDto)
 */
export class CreateBlockAllocationDto {
  @ApiProperty({ description: 'Room type ID' })
  @IsUUID()
  roomTypeId: string;

  @ApiProperty({ description: 'Room type name' })
  @IsString()
  @IsNotEmpty()
  roomTypeName: string;

  @ApiProperty({ description: 'Number of rooms to allot', minimum: 1 })
  @IsNumber()
  @Min(1)
  allottedRooms: number;

  @ApiPropertyOptional({ description: 'Rate override for this allocation' })
  @IsOptional()
  @IsNumber()
  rateOverride?: number;

  @ApiProperty({ description: 'Allocation start date (YYYY-MM-DD)' })
  @IsDateString()
  startDate: string;

  @ApiProperty({ description: 'Allocation end date (YYYY-MM-DD)' })
  @IsDateString()
  endDate: string;
}

/**
 * DTO for creating a new group block
 */
export class CreateGroupBlockDto {
  @ApiPropertyOptional({ description: 'Hotel ID (required if not in JWT)' })
  @IsOptional()
  @IsUUID()
  hotelId?: string;

  @ApiProperty({ description: 'Group name' })
  @IsString()
  @IsNotEmpty()
  groupName: string;

  @ApiPropertyOptional({ description: 'Organizer name' })
  @IsOptional()
  @IsString()
  organizerName?: string;

  @ApiPropertyOptional({ description: 'Organizer email' })
  @IsOptional()
  @IsEmail()
  organizerEmail?: string;

  @ApiPropertyOptional({ description: 'Organizer phone' })
  @IsOptional()
  @IsString()
  organizerPhone?: string;

  @ApiPropertyOptional({ description: 'Associated company ID' })
  @IsOptional()
  @IsUUID()
  companyId?: string;

  @ApiProperty({ description: 'Check-in date (YYYY-MM-DD)' })
  @IsDateString()
  checkInDate: string;

  @ApiProperty({ description: 'Check-out date (YYYY-MM-DD)' })
  @IsDateString()
  checkOutDate: string;

  @ApiPropertyOptional({ description: 'Cutoff date for pickup (YYYY-MM-DD)' })
  @IsOptional()
  @IsDateString()
  cutoffDate?: string;

  @ApiPropertyOptional({ description: 'Billing mode', enum: GroupBillingMode })
  @IsOptional()
  @IsEnum(GroupBillingMode)
  billingMode?: GroupBillingMode;

  @ApiPropertyOptional({ description: 'Inventory control mode', enum: InventoryControlMode })
  @IsOptional()
  @IsEnum(InventoryControlMode)
  inventoryControl?: InventoryControlMode;

  @ApiPropertyOptional({ description: 'Whether deposit is required' })
  @IsOptional()
  @IsBoolean()
  depositRequired?: boolean;

  @ApiPropertyOptional({ description: 'Required deposit amount' })
  @IsOptional()
  @IsNumber()
  depositAmount?: number;

  @ApiPropertyOptional({ description: 'Commission percentage' })
  @IsOptional()
  @IsNumber()
  commissionPercentage?: number;

  @ApiPropertyOptional({ description: 'Complimentary room ratio (e.g., "1:20")' })
  @IsOptional()
  @IsString()
  compRoomRatio?: string;

  @ApiPropertyOptional({ description: 'Credit term in days' })
  @IsOptional()
  @IsNumber()
  creditTermDays?: number;

  @ApiPropertyOptional({ description: 'Contract number' })
  @IsOptional()
  @IsString()
  contractNumber?: string;

  @ApiPropertyOptional({ description: 'Internal notes' })
  @IsOptional()
  @IsString()
  internalNotes?: string;

  @ApiPropertyOptional({ description: 'Special requests' })
  @IsOptional()
  @IsString()
  specialRequests?: string;

  @ApiPropertyOptional({ description: 'Initial allocations', type: [CreateBlockAllocationDto] })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateBlockAllocationDto)
  allocations?: CreateBlockAllocationDto[];
}

/**
 * DTO for updating a group block (partial fields)
 */
export class UpdateGroupBlockDto {
  @ApiPropertyOptional({ description: 'Group name' })
  @IsOptional()
  @IsString()
  groupName?: string;

  @ApiPropertyOptional({ description: 'Organizer name' })
  @IsOptional()
  @IsString()
  organizerName?: string;

  @ApiPropertyOptional({ description: 'Organizer email' })
  @IsOptional()
  @IsEmail()
  organizerEmail?: string;

  @ApiPropertyOptional({ description: 'Organizer phone' })
  @IsOptional()
  @IsString()
  organizerPhone?: string;

  @ApiPropertyOptional({ description: 'Associated company ID' })
  @IsOptional()
  @IsUUID()
  companyId?: string;

  @ApiPropertyOptional({ description: 'Check-in date (YYYY-MM-DD)' })
  @IsOptional()
  @IsDateString()
  checkInDate?: string;

  @ApiPropertyOptional({ description: 'Check-out date (YYYY-MM-DD)' })
  @IsOptional()
  @IsDateString()
  checkOutDate?: string;

  @ApiPropertyOptional({ description: 'Cutoff date for pickup (YYYY-MM-DD)' })
  @IsOptional()
  @IsDateString()
  cutoffDate?: string;

  @ApiPropertyOptional({ description: 'Billing mode', enum: GroupBillingMode })
  @IsOptional()
  @IsEnum(GroupBillingMode)
  billingMode?: GroupBillingMode;

  @ApiPropertyOptional({ description: 'Inventory control mode', enum: InventoryControlMode })
  @IsOptional()
  @IsEnum(InventoryControlMode)
  inventoryControl?: InventoryControlMode;

  @ApiPropertyOptional({ description: 'Whether deposit is required' })
  @IsOptional()
  @IsBoolean()
  depositRequired?: boolean;

  @ApiPropertyOptional({ description: 'Required deposit amount' })
  @IsOptional()
  @IsNumber()
  depositAmount?: number;

  @ApiPropertyOptional({ description: 'Commission percentage' })
  @IsOptional()
  @IsNumber()
  commissionPercentage?: number;

  @ApiPropertyOptional({ description: 'Complimentary room ratio' })
  @IsOptional()
  @IsString()
  compRoomRatio?: string;

  @ApiPropertyOptional({ description: 'Credit term in days' })
  @IsOptional()
  @IsNumber()
  creditTermDays?: number;

  @ApiPropertyOptional({ description: 'Contract number' })
  @IsOptional()
  @IsString()
  contractNumber?: string;

  @ApiPropertyOptional({ description: 'Internal notes' })
  @IsOptional()
  @IsString()
  internalNotes?: string;

  @ApiPropertyOptional({ description: 'Special requests' })
  @IsOptional()
  @IsString()
  specialRequests?: string;
}

/**
 * DTO for updating group block status (state machine transition)
 */
export class UpdateGroupBlockStatusDto {
  @ApiProperty({ description: 'New status', enum: GroupBlockStatus })
  @IsEnum(GroupBlockStatus)
  newStatus: GroupBlockStatus;

  @ApiPropertyOptional({ description: 'Reason for status change' })
  @IsOptional()
  @IsString()
  reason?: string;
}

/**
 * DTO for updating an existing block allocation
 */
export class UpdateBlockAllocationDto {
  @ApiPropertyOptional({ description: 'Number of rooms to allot', minimum: 1 })
  @IsOptional()
  @IsNumber()
  @Min(1)
  allottedRooms?: number;

  @ApiPropertyOptional({ description: 'Rate override' })
  @IsOptional()
  @IsNumber()
  rateOverride?: number;
}

/**
 * Query DTO for listing group blocks
 */
export class FindGroupBlocksQueryDto {
  @ApiPropertyOptional({ description: 'Hotel ID (required if not in JWT)' })
  @IsOptional()
  @IsUUID()
  hotelId?: string;

  @ApiPropertyOptional({ description: 'Filter by status', enum: GroupBlockStatus })
  @IsOptional()
  @IsEnum(GroupBlockStatus)
  status?: GroupBlockStatus;

  @ApiPropertyOptional({ description: 'Search by group name or block code' })
  @IsOptional()
  @IsString()
  search?: string;

  @ApiPropertyOptional({ description: 'Check-in date start filter (YYYY-MM-DD)' })
  @IsOptional()
  @IsDateString()
  checkInDateStart?: string;

  @ApiPropertyOptional({ description: 'Check-in date end filter (YYYY-MM-DD)' })
  @IsOptional()
  @IsDateString()
  checkInDateEnd?: string;

  @ApiPropertyOptional({ description: 'Check-out date start filter (YYYY-MM-DD)' })
  @IsOptional()
  @IsDateString()
  checkOutDateStart?: string;

  @ApiPropertyOptional({ description: 'Check-out date end filter (YYYY-MM-DD)' })
  @IsOptional()
  @IsDateString()
  checkOutDateEnd?: string;

  @ApiPropertyOptional({ description: 'Page number (1-indexed)', default: 1 })
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  page?: number;

  @ApiPropertyOptional({ description: 'Items per page', default: 10 })
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  limit?: number;

  @ApiPropertyOptional({ description: 'Sort field' })
  @IsOptional()
  @IsString()
  sortBy?: string;

  @ApiPropertyOptional({ description: 'Sort order', enum: ['ASC', 'DESC'] })
  @IsOptional()
  @IsString()
  sortOrder?: 'ASC' | 'DESC';
}

/**
 * Guest item for batch pickup
 */
export class BatchPickupGuestItemDto {
  @ApiPropertyOptional({ description: 'Guest name (defaults to "Guest N" if empty)' })
  @IsOptional()
  @IsString()
  guestName?: string;

  @ApiPropertyOptional({ description: 'Guest phone number' })
  @IsOptional()
  @IsString()
  guestPhone?: string;
}

/**
 * Batch pickup DTO — create multiple bookings from a group block allocation
 */
export class BatchPickupDto {
  @ApiProperty({ description: 'Block allocation ID to pick up from' })
  @IsUUID()
  blockAllocationId: string;

  @ApiProperty({ description: 'Number of rooms to pick up', minimum: 1 })
  @IsNumber()
  @Min(1)
  numberOfRooms: number;

  @ApiPropertyOptional({ description: 'Guest details for each room', type: [BatchPickupGuestItemDto] })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => BatchPickupGuestItemDto)
  guests?: BatchPickupGuestItemDto[];
}

/**
 * Batch check-in DTO — check in multiple group bookings at once
 */
export class BatchCheckInDto {
  @ApiProperty({ description: 'List of booking IDs to check in', type: [String] })
  @IsArray()
  @IsUUID('4', { each: true })
  bookingIds: string[];

  @ApiPropertyOptional({ description: 'Check-in notes' })
  @IsOptional()
  @IsString()
  notes?: string;

  @ApiPropertyOptional({ description: 'Check-in mode: EXPRESS skips guest processing, FULL is standard', enum: ['EXPRESS', 'FULL'], default: 'EXPRESS' })
  @IsOptional()
  @IsIn(['EXPRESS', 'FULL'])
  mode?: 'EXPRESS' | 'FULL';
}

/**
 * Single room assignment item for batch room assignment
 */
export class BatchRoomAssignItemDto {
  @ApiProperty({ description: 'Booking ID to assign room to' })
  @IsUUID()
  bookingId: string;

  @ApiProperty({ description: 'Room ID to assign' })
  @IsUUID()
  roomId: string;

  @ApiProperty({ description: 'Room number' })
  @IsString()
  @IsNotEmpty()
  roomNumber: string;
}

/**
 * Batch room assignment DTO — assign rooms to multiple group bookings at once
 */
export class BatchRoomAssignDto {
  @ApiProperty({ description: 'List of room assignments', type: [BatchRoomAssignItemDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => BatchRoomAssignItemDto)
  assignments: BatchRoomAssignItemDto[];
}
