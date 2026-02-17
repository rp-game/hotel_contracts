/**
 * Service Booking Stats NATS Contracts
 *
 * Patterns:
 * - guest_services.bookings.stats
 *
 * Handler: crm-service (GuestServicesController)
 * Called by: api-gateway (GuestServicesController)
 */

import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber } from 'class-validator';
import { NatsResponse } from '../../common';

/**
 * Booking status breakdown
 */
export class BookingStatusCount {
  @ApiProperty({ description: 'Booking status name', example: 'CONFIRMED' })
  @IsString()
  status: string;

  @ApiProperty({ description: 'Number of bookings with this status', example: 42 })
  @IsNumber()
  count: number;
}

/**
 * Service booking count
 */
export class ServiceBookingCount {
  @ApiProperty({ description: 'Service name', example: 'Spa' })
  @IsString()
  serviceName: string;

  @ApiProperty({ description: 'Number of bookings for this service', example: 15 })
  @IsNumber()
  count: number;
}

/**
 * Service booking statistics data
 */
export class ServiceBookingStatsData {
  @ApiProperty({ description: 'Total number of bookings', example: 100 })
  totalBookings: number;

  @ApiProperty({ description: 'Number of confirmed bookings', example: 60 })
  confirmedBookings: number;

  @ApiProperty({ description: 'Number of completed bookings', example: 30 })
  completedBookings: number;

  @ApiProperty({ description: 'Number of cancelled bookings', example: 10 })
  cancelledBookings: number;

  @ApiProperty({ description: 'Total revenue from completed bookings', example: 15000 })
  totalRevenue: number;

  @ApiProperty({ description: 'Average service rating (0-5)', example: 4.2 })
  averageRating: number;

  @ApiProperty({ description: 'Booking count grouped by status', type: () => [BookingStatusCount] })
  bookingsByStatus: BookingStatusCount[];

  @ApiProperty({ description: 'Booking count grouped by service name', type: () => [ServiceBookingCount] })
  bookingsByService: ServiceBookingCount[];
}

/**
 * Get Service Booking Stats Request
 * Pattern: guest_services.bookings.stats
 *
 * Retrieves service booking statistics for a tenant within optional date range
 */
export interface GetServiceBookingStatsNatsRequest {
  tenantId: string;
  hotelId?: string;
  startDate?: string; // YYYY-MM-DD format
  endDate?: string; // YYYY-MM-DD format
}

export type GetServiceBookingStatsNatsResponse = NatsResponse<ServiceBookingStatsData>;
