import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { NatsResponse } from '../../common';

/**
 * Request to get booking statistics
 *
 * @example
 * // Using period shortcut
 * { tenantId: '...', hotelId: '...', period: 'month' }
 *
 * // Using specific date range
 * { tenantId: '...', hotelId: '...', startDate: '2025-01-01', endDate: '2025-01-31' }
 */
export interface GetBookingStatsNatsRequest {
  /** Tenant ID (required) */
  tenantId: string;

  /** Hotel ID (required) */
  hotelId: string;

  /**
   * Period shortcut for convenient date range selection.
   * - 'week': Last 7 days
   * - 'month': Current month (1st to today)
   * - 'year': Current year (Jan 1 to today)
   *
   * Overridden by startDate/endDate if provided.
   */
  period?: 'week' | 'month' | 'year';

  /**
   * Start date for statistics (YYYY-MM-DD format).
   * If not provided, calculated from period or defaults to 30 days ago.
   */
  startDate?: string;

  /**
   * End date for statistics (YYYY-MM-DD format).
   * If not provided, defaults to today.
   */
  endDate?: string;
}

export class BookingStatusCountDto {
  @ApiProperty({ description: 'Booking status (e.g. CONFIRMED, CANCELLED)', example: 'CONFIRMED' })
  status: string;

  @ApiProperty({ description: 'Number of bookings with this status', example: 12 })
  count: number;
}

export class BookingStatsResponseDto {
  @ApiProperty({ description: 'Total number of bookings', example: 35 })
  totalBookings: number;

  @ApiProperty({ description: 'Number of confirmed bookings', example: 28 })
  confirmedBookings: number;

  @ApiProperty({ description: 'Number of cancelled bookings', example: 2 })
  cancelledBookings: number;

  @ApiProperty({ description: 'Occupancy rate as percentage (0-100)', example: 85.5 })
  occupancyRate: number;

  @ApiProperty({ description: 'Average stay duration in nights', example: 3.2 })
  averageStay: number;

  @ApiProperty({ description: 'Total revenue', example: 15000000 })
  revenue: number;

  @ApiPropertyOptional({ description: 'Booking count grouped by status', type: () => [BookingStatusCountDto] })
  bookingsByStatus?: BookingStatusCountDto[];
}


/**
 * Response with booking statistics
 */
export interface GetBookingStatsNatsResponse {
  /** Total number of bookings in the period */
  totalBookings: number;

  /** Number of confirmed bookings */
  confirmedBookings: number;

  /** Number of cancelled bookings */
  cancelledBookings: number;

  /** Occupancy rate as percentage (0-100) */
  occupancyRate: number;

  /** Average stay duration in nights */
  averageStay: number;

  /** Total revenue from all bookings in the period */
  revenue: number;

  /** Booking count grouped by status */
  bookingsByStatus?: BookingStatusCountDto[];
}

/**
 * NATS response type for booking statistics
 */
export type GetBookingStatsResponse = NatsResponse<GetBookingStatsNatsResponse>;
