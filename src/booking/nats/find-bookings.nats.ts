/**
 * Find Bookings NATS Contract
 *
 * NATS Pattern: booking.find_all
 * Handler: booking-service
 * Called by: api-gateway
 * Used by: dashboard bookings list with pagination and filtering
 */

import { ApiProperty } from '@nestjs/swagger';
import { NatsResponse } from '../../common/nats-response.interface';

/**
 * Booking summary for list operations
 * Contains essential fields for display without full booking details
 */
/**
 * Booking summary for list operations
 * Contains essential fields for display without full booking details
 */
export class BookingSummary {
  /**
   * Unique booking ID
   */
  @ApiProperty({ description: 'Unique booking ID' })
  id: string;

  /**
   * Human-readable booking code (e.g., BK2024123456)
   */
  @ApiProperty({ description: 'Human-readable booking code (e.g., BK2024123456)' })
  bookingCode: string;

  /**
   * Booking status (uppercase enum: PENDING, CONFIRMED, CHECKED_IN, CHECKED_OUT, CANCELLED, COMPLETED)
   */
  @ApiProperty({ 
    description: 'Booking status',
    enum: ['PENDING', 'CONFIRMED', 'CHECKED_IN', 'CHECKED_OUT', 'CANCELLED', 'COMPLETED']
  })
  status: 'PENDING' | 'CONFIRMED' | 'CHECKED_IN' | 'CHECKED_OUT' | 'CANCELLED' | 'COMPLETED';

  /**
   * Booking source (WEB, OTA, PHONE, etc.)
   */
  @ApiProperty({ description: 'Booking source (WEB, OTA, PHONE, etc.)' })
  source: string;

  /**
   * Payment status (enum)
   */
  @ApiProperty({ 
    description: 'Payment status',
    enum: ['PENDING', 'PARTIAL', 'COMPLETED', 'FAILED', 'CANCELLED', 'REFUNDED']
  })
  paymentStatus: 'PENDING' | 'PARTIAL' | 'COMPLETED' | 'FAILED' | 'CANCELLED' | 'REFUNDED';

  /**
   * Check-in date (YYYY-MM-DD)
   */
  @ApiProperty({ description: 'Check-in date (YYYY-MM-DD)' })
  checkInDate: string;

  /**
   * Check-out date (YYYY-MM-DD)
   */
  @ApiProperty({ description: 'Check-out date (YYYY-MM-DD)' })
  checkOutDate: string;

  /**
   * Total booking amount
   */
  @ApiProperty({ description: 'Total booking amount' })
  totalAmount: number;

  /**
   * Amount already paid
   */
  @ApiProperty({ description: 'Amount already paid' })
  paidAmount: number;

  /**
   * Guest full name
   */
  @ApiProperty({ description: 'Guest full name' })
  guestName: string;

  /**
   * Guest email (optional)
   */
  @ApiProperty({ description: 'Guest email (optional)', required: false })
  guestEmail?: string;

  /**
   * Guest phone (optional)
   */
  @ApiProperty({ description: 'Guest phone (optional)', required: false })
  guestPhone?: string;

  /**
   * Number of rooms in booking
   */
  @ApiProperty({ description: 'Number of rooms in booking' })
  roomCount: number;

  /**
   * Number of adults
   */
  @ApiProperty({ description: 'Number of adults' })
  adultCount: number;

  /**
   * Number of children
   */
  @ApiProperty({ description: 'Number of children' })
  childCount: number;

  /**
   * Booking creation date
   */
  @ApiProperty({ description: 'Booking creation date' })
  createdAt: string;

  /**
   * User ID who created booking
   */
  @ApiProperty({ description: 'User ID who created booking', required: false })
  createdBy?: string;

  /**
   * Room assignments
   */
  @ApiProperty({ 
    description: 'Room assignments',
    type: 'array',
    items: {
      type: 'object',
      properties: {
        id: { type: 'string', description: 'Room ID' },
        roomNumber: { type: 'string', description: 'Room number' },
        roomTypeName: { type: 'string', description: 'Room type name' }
      }
    },
    required: false
  })
  rooms?: Array<{
    id: string;
    roomNumber: string;
    roomTypeName: string;
  }>;

  /**
   * Tenant ID (multi-tenant isolation)
   */
  @ApiProperty({ description: 'Tenant ID (multi-tenant isolation)' })
  tenantId: string;

  /**
   * Hotel ID (property reference)
   */
  @ApiProperty({ description: 'Hotel ID (property reference)' })
  hotelId: string;

  /**
   * Guest ID reference
   */
  @ApiProperty({ description: 'Guest ID reference' })
  guestId: string;

  /**
   * Room type ID for this booking
   */
  @ApiProperty({ description: 'Room type ID for this booking' })
  roomTypeId: string;

  /**
   * Assigned room ID (null if unassigned)
   */
  @ApiProperty({ description: 'Assigned room ID (null if unassigned)', required: false })
  roomId: string | null;

  /**
   * Assigned room number (null if unassigned)
   */
  @ApiProperty({ description: 'Assigned room number (null if unassigned)', required: false })
  roomNumber: string | null;

  /**
   * Room assignment status (ASSIGNED, PENDING, UNASSIGNED)
   * CRITICAL: Indicates if room has been assigned or is pending
   */
  @ApiProperty({ description: 'Room assignment status (ASSIGNED, PENDING, UNASSIGNED)' })
  assignmentStatus: string;

  /**
   * Booking type (OVERNIGHT, HOURLY)
   */
  @ApiProperty({ description: 'Booking type (OVERNIGHT, HOURLY)' })
  bookingType: string;

  /**
   * Start time for hourly bookings (HH:mm format)
   */
  @ApiProperty({ description: 'Start time for hourly bookings (HH:mm format)', required: false })
  startTime?: string;

  /**
   * End time for hourly bookings (HH:mm format)
   */
  @ApiProperty({ description: 'End time for hourly bookings (HH:mm format)', required: false })
  endTime?: string;

  /**
   * Last update timestamp
   */
  @ApiProperty({ description: 'Last update timestamp' })
  updatedAt: string;

  /**
   * User ID who last updated booking
   */
  @ApiProperty({ description: 'User ID who last updated booking', required: false })
  updatedBy?: string;

  /**
   * Guest special requests
   */
  @ApiProperty({ description: 'Guest special requests', required: false })
  specialRequests?: string;
}

/**
 * NATS request to find/list bookings with filters and pagination
 */
export interface FindBookingsNatsRequest {
  /**
   * Tenant ID (multi-tenant isolation)
   */
  tenantId: string;

  /**
   * Hotel ID (specific property)
   */
  hotelId: string;

  /**
   * Booking status filter (optional)
   */
  status?: 'PENDING' | 'CONFIRMED' | 'CHECKED_IN' | 'CHECKED_OUT' | 'CANCELLED' | 'COMPLETED';

  /**
   * Booking source filter (WEB, OTA, PHONE, etc.)
   */
  source?: string;

  /**
   * Payment status filter
   */
  paymentStatus?: 'PENDING' | 'PARTIAL' | 'COMPLETED' | 'FAILED' | 'CANCELLED' | 'REFUNDED';

  /**
   * Guest ID filter (optional)
   */
  guestId?: string;

  /**
   * Customer ID filter (optional)
   */
  customerId?: string;

  /**
   * Guest name search (substring match)
   */
  guestName?: string;

  /**
   * Booking reference/code search
   */
  bookingReference?: string;

  /**
   * Check-in date start filter (YYYY-MM-DD)
   */
  checkInDateStart?: string;

  /**
   * Check-in date end filter (YYYY-MM-DD)
   */
  checkInDateEnd?: string;

  /**
   * Check-out date start filter (YYYY-MM-DD)
   */
  checkOutDateStart?: string;

  /**
   * Check-out date end filter (YYYY-MM-DD)
   */
  checkOutDateEnd?: string;

  /**
   * Room type ID filter (optional)
   */
  roomTypeId?: string;

  /**
   * Room ID filter (optional) - filter by assigned room
   */
  roomId?: string;

  /**
   * Room assignment status filter (ASSIGNED, PENDING, UNASSIGNED)
   * CRITICAL: Enables filtering for unassigned bookings
   */
  assignmentStatus?: 'ASSIGNED' | 'PENDING' | 'UNASSIGNED';

  /**
   * Booking type filter (OVERNIGHT, HOURLY)
   */
  bookingType?: 'OVERNIGHT' | 'HOURLY';

  /**
   * Pagination: page number (1-indexed, default: 1)
   */
  page?: number;

  /**
   * Pagination: items per page (default: 10, max: 100)
   */
  limit?: number;

  /**
   * Sort field (createdAt, checkInDate, checkOutDate, guestName, bookingCode, status)
   */
  sortBy?: string;

  /**
   * Sort order (ASC or DESC)
   */
  sortOrder?: 'ASC' | 'DESC';
}

/**
 * Bookings list response - shared between NATS and REST API
 * Used by:
 * - NATS pattern: booking.find_all (booking-service handler response)
 * - REST API: GET /bookings (api-gateway controller response)
 */
export class BookingListResponseDto {
  /**
   * Array of booking summaries
   */
  @ApiProperty({
    description: 'Array of booking summaries',
    type: [BookingSummary]
  })
  bookings: BookingSummary[];

  /**
   * Total number of bookings matching filters
   */
  @ApiProperty({
    description: 'Total number of bookings matching filters',
    example: 100
  })
  total: number;

  /**
   * Current page number (1-indexed)
   */
  @ApiProperty({
    description: 'Current page number (1-indexed)',
    example: 1
  })
  page: number;

  /**
   * Number of items per page
   */
  @ApiProperty({
    description: 'Number of items per page',
    example: 10
  })
  limit: number;

  /**
   * Total number of pages
   */
  @ApiProperty({
    description: 'Total number of pages',
    example: 10
  })
  totalPages: number;
}

/**
 * Type alias for backward compatibility
 * FindBookingsData is now BookingListResponseDto
 */
export type FindBookingsData = BookingListResponseDto;

/**
 * NATS response containing list of bookings with pagination
 *
 * Response structure:
 * ```
 * {
 *   success: true,
 *   data: {
 *     bookings: BookingSummary[],
 *     total: number,
 *     page: number,
 *     limit: number,
 *     totalPages: number
 *   }
 * }
 * ```
 */
export type FindBookingsNatsResponse = NatsResponse<FindBookingsData>;
