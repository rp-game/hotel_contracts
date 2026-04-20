/**
 * Booking Revenue Summary NATS Contract
 *
 * NATS Pattern: booking.revenue.summary
 * Handler: booking-service
 * Called by: report-service
 */

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { NatsResponse } from '../../common/nats-response.interface';

export class BookingRevenueSummaryRequest {
  @ApiProperty() tenantId: string;
  @ApiProperty() hotelId: string;
  @ApiProperty({ description: 'Start date inclusive (YYYY-MM-DD or ISO)' }) startDate: string;
  @ApiProperty({ description: 'End date inclusive (YYYY-MM-DD or ISO)' }) endDate: string;
}

export class BookingRevenueSummaryData {
  @ApiProperty({ description: 'Total room revenue (SUM of grossAmount from active bookings)' })
  roomRevenue: number;

  @ApiProperty({ description: 'Total number of active bookings in range' })
  totalBookings: number;

  @ApiProperty({ description: 'Total room nights' })
  totalRoomNights: number;
}

export type BookingRevenueSummaryResponse = NatsResponse<BookingRevenueSummaryData>;
