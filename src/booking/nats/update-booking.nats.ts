/**
 * Update Booking NATS Contract
 *
 * NATS Pattern: booking.update
 * Handler: booking-service
 * Called by: api-gateway
 * Used by: calendar page to edit booking details
 */

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsOptional, IsEnum, IsNumber, IsUUID } from 'class-validator';
import { NatsResponse } from '../../common/nats-response.interface';

/**
 * Room details in booking (for update response)
 */
export interface UpdatedBookingRoom {
  /**
   * Room ID
   */
  id: string;

  /**
   * Room number
   */
  roomNumber: string;

  /**
   * Room type ID
   */
  roomTypeId: string;

  /**
   * Room type name
   */
  roomTypeName: string;

  /**
   * Check-in date
   */
  checkInDate: string;

  /**
   * Check-out date
   */
  checkOutDate: string;

  /**
   * Price per night
   */
  pricePerNight: number;

  /**
   * Total price
   */
  totalPrice: number;
}

/**
 * Unified UpdateBookingDto for both NATS and REST
 * Single source of truth for booking update operations
 * Used as request DTO for API Gateway and NATS request for booking-service
 *
 * All fields optional at contract level - let consumers (controller, handler) add validation
 *
 * @pattern booking.update
 * @handler booking-service
 * @caller api-gateway
 */
export class UpdateBookingDto {
  /**
   * Tenant ID (multi-tenant isolation)
   */
  @ApiPropertyOptional({
    description: 'Tenant ID (multi-tenant isolation)',
    example: '550e8400-e29b-41d4-a716-446655440001',
  })
  @IsOptional()
  @IsString()
  @IsUUID()
  tenantId?: string;

  /**
   * Hotel ID
   */
  @ApiPropertyOptional({
    description: 'Hotel ID',
    example: 'htl-001',
  })
  @IsOptional()
  @IsString()
  hotelId?: string;

  /**
   * Booking ID to update
   */
  @ApiPropertyOptional({
    description: 'Booking ID to update',
    example: 'bk-001',
  })
  @IsOptional()
  @IsString()
  bookingId?: string;

  /**
   * Guest first name
   */
  @ApiPropertyOptional({
    description: 'Guest first name',
    example: 'John',
  })
  @IsOptional()
  @IsString()
  guestName?: string;

  /**
   * Guest email
   */
  @ApiPropertyOptional({
    description: 'Guest email address',
    example: 'john@example.com',
  })
  @IsOptional()
  @IsString()
  guestEmail?: string;

  /**
   * Guest phone number
   */
  @ApiPropertyOptional({
    description: 'Guest phone number',
    example: '+1234567890',
  })
  @IsOptional()
  @IsString()
  phoneNumber?: string;

  /**
   * New check-in date (YYYY-MM-DD)
   */
  @ApiPropertyOptional({
    description: 'New check-in date (YYYY-MM-DD)',
    example: '2024-02-15',
  })
  @IsOptional()
  @IsString()
  checkInDate?: string;

  /**
   * New check-out date (YYYY-MM-DD)
   */
  @ApiPropertyOptional({
    description: 'New check-out date (YYYY-MM-DD)',
    example: '2024-02-17',
  })
  @IsOptional()
  @IsString()
  checkOutDate?: string;

  /**
   * Room ID to assign
   */
  @ApiPropertyOptional({
    description: 'Room ID to assign',
    example: 'room-001',
  })
  @IsOptional()
  @IsString()
  roomId?: string;

  /**
   * Number of adults
   */
  @ApiPropertyOptional({
    description: 'Number of adults',
    type: 'number',
    example: 2,
  })
  @IsOptional()
  @IsNumber()
  adultCount?: number;

  /**
   * Number of children
   */
  @ApiPropertyOptional({
    description: 'Number of children',
    type: 'number',
    example: 1,
  })
  @IsOptional()
  @IsNumber()
  childCount?: number;

  /**
   * Special requests from guest
   */
  @ApiPropertyOptional({
    description: 'Special requests from guest',
    example: 'Early check-in requested',
  })
  @IsOptional()
  @IsString()
  specialRequests?: string;

  /**
   * Internal notes about the booking
   */
  @ApiPropertyOptional({
    description: 'Internal notes about the booking',
    example: 'VIP guest - ensure room upgrade',
  })
  @IsOptional()
  @IsString()
  notes?: string;

  /**
   * New booking status
   */
  @ApiPropertyOptional({
    description: 'New booking status',
    enum: ['PENDING', 'CONFIRMED', 'CHECKED_IN', 'CHECKED_OUT', 'CANCELLED'],
    example: 'CONFIRMED',
  })
  @IsOptional()
  @IsEnum(['PENDING', 'CONFIRMED', 'CHECKED_IN', 'CHECKED_OUT', 'CANCELLED'])
  status?: 'PENDING' | 'CONFIRMED' | 'CHECKED_IN' | 'CHECKED_OUT' | 'CANCELLED';

  /**
   * User ID who made the update
   */
  @ApiPropertyOptional({
    description: 'User ID who made the update',
    example: '550e8400-e29b-41d4-a716-446655440002',
  })
  @IsOptional()
  @IsString()
  @IsUUID()
  updatedBy?: string;

  /**
   * Additional metadata
   */
  @ApiPropertyOptional({
    description: 'Additional metadata',
    type: 'object',
    additionalProperties: true,
  })
  @IsOptional()
  metadata?: Record<string, any>;
}

/**
 * NATS response containing updated booking
 */
export interface UpdateBookingResponse {
  /**
   * Booking ID
   */
  id: string;

  /**
   * Booking code
   */
  bookingCode: string;

  /**
   * Current booking status
   */
  status: 'PENDING' | 'CONFIRMED' | 'CHECKED_IN' | 'CHECKED_OUT' | 'CANCELLED';

  /**
   * Check-in date
   */
  checkInDate: string;

  /**
   * Check-out date
   */
  checkOutDate: string;

  /**
   * Guest name
   */
  guestName: string;

  /**
   * Guest email
   */
  guestEmail?: string;

  /**
   * Guest phone
   */
  phoneNumber?: string;

  /**
   * Total booking amount
   */
  totalAmount: number;

  /**
   * Amount paid
   */
  paidAmount: number;

  /**
   * Outstanding balance
   */
  balance: number;

  /**
   * Rooms in booking
   */
  rooms: UpdatedBookingRoom[];

  /**
   * Number of adults
   */
  adultCount: number;

  /**
   * Number of children
   */
  childCount: number;

  /**
   * Special requests
   */
  specialRequests?: string;

  /**
   * Internal notes about the booking
   */
  notes?: string;

  /**
   * Last updated date
   */
  updatedAt: string;

  /**
   * User who updated
   */
  updatedBy: string;
}

/**
 * Backward compatibility alias
 */
export type UpdateBookingRequest = UpdateBookingDto;

/**
 * Full NATS response type for update booking
 */
export type UpdateBookingNatsResponse = NatsResponse<UpdateBookingResponse>;
