/**
 * Unassigned Bookings REST API DTOs
 *
 * Used by API Gateway for REST endpoints
 * These are class-based DTOs with @ApiProperty decorators for Swagger documentation
 *
 * Endpoints: GET /bookings/unassigned
 */

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsOptional, IsNumber } from 'class-validator';

/**
 * Unassigned Booking Item DTO
 * Response for unassigned bookings list
 */
export class UnassignedBookingItemDto {
  @ApiProperty({ description: 'Booking ID', format: 'uuid' })
  @IsString()
  bookingId: string;

  @ApiProperty({ description: 'Guest name' })
  @IsString()
  guestName: string;

  @ApiProperty({ description: 'Room type name' })
  @IsString()
  roomType: string;

  @ApiProperty({ description: 'Room type ID', format: 'uuid' })
  @IsString()
  roomTypeId: string;

  @ApiProperty({ description: 'Check-in date/time (ISO format)' })
  @IsString()
  checkIn: string;

  @ApiProperty({ description: 'Check-out date/time (ISO format)' })
  @IsString()
  checkOut: string;

  @ApiProperty({ description: 'Duration of stay in hours' })
  @IsNumber()
  duration: number;

  @ApiProperty({ description: 'Number of guests' })
  @IsNumber()
  guestCount: number;

  @ApiPropertyOptional({ description: 'Special requests from the guest' })
  @IsOptional()
  @IsString()
  specialRequests?: string;

  @ApiProperty({ description: 'Assignment status (e.g., UNASSIGNED, PENDING, CANCELLED)' })
  @IsString()
  assignmentStatus: string;

  @ApiProperty({ description: 'Type of booking (e.g., DIRECT, ONLINE, AGENCY, etc.)' })
  @IsString()
  bookingType: string;
}

/**
 * Get Unassigned Bookings Response DTO
 */
export class GetUnassignedBookingsResponseDto {
  @ApiProperty({ description: 'List of unassigned bookings', type: [UnassignedBookingItemDto] })
  data: UnassignedBookingItemDto[];

  @ApiProperty({ description: 'Total count of unassigned bookings' })
  total: number;

  @ApiProperty({ description: 'Current page number' })
  page: number;

  @ApiProperty({ description: 'Items per page' })
  limit: number;
}
