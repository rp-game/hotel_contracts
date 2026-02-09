/**
 * Unified DTO for FindStaffByHotel operations
 * Used for both REST API requests and NATS message payloads
 * Ensures consistency between frontend requests and backend NATS contracts
 *
 * @pattern: Single source of truth for request structure
 */

import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsEnum } from 'class-validator';
import { StaffStatus } from '../enums';

/**
 * Request DTO for finding staff by hotel
 *
 * Used in:
 * 1. REST API: GET /housekeeping/staff
 * 2. NATS Message: 'users.staff.findByHotel'
 *
 * All fields are optional to allow flexible filtering
 */
export class FindStaffByHotelQueryDto {
  @ApiPropertyOptional({ description: 'Hotel ID (required for operation)' })
  @IsOptional()
  @IsString()
  hotelId?: string;

  @ApiPropertyOptional({
    description: 'Comma-separated list of roles to filter by',
    example: 'HOUSEKEEPING_STAFF,HOUSEKEEPING_MANAGER'
  })
  @IsOptional()
  @IsString()
  roles?: string;

  @ApiPropertyOptional({
    description: 'Filter by staff status',
    enum: StaffStatus
  })
  @IsOptional()
  @IsEnum(StaffStatus)
  status?: StaffStatus;

  @ApiPropertyOptional({ description: 'Filter by staff role' })
  @IsOptional()
  @IsString()
  role?: string;

  @ApiPropertyOptional({ description: 'Filter by department' })
  @IsOptional()
  @IsString()
  department?: string;

  /**
   * NATS payload conversion
   * Extracts only fields needed for NATS message
   */
  toNatsPayload(): { hotelId: string; roles?: string[]; status?: StaffStatus } {
    return {
      hotelId: this.hotelId || '',
      ...(this.roles && { roles: this.roles.split(',').map(r => r.trim()) }),
      ...(this.status && { status: this.status }),
    };
  }
}
