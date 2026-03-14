/**
 * Member Revenue NATS Contract
 *
 * NATS Pattern: bookings.revenue.byCustomers
 * Handler: booking-service (BookingAnalyticsNatsController)
 * Called by: crm-service (LoyaltyAnalyticsService)
 */

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { NatsResponse } from '../../common/nats-response.interface';

/**
 * Request: get real booking revenue for a set of member customer IDs
 * Pattern: bookings.revenue.byCustomers
 */
export class BookingRevenueByCustomersRequest {
  @ApiProperty({ description: 'Tenant ID' })
  tenantId: string;

  @ApiProperty({ type: [String], description: 'CRM customer IDs of loyalty members (= booking.guestId)' })
  memberCustomerIds: string[];

  @ApiPropertyOptional({ description: 'Start date filter (ISO string)' })
  startDate?: string;

  @ApiPropertyOptional({ description: 'End date filter (ISO string)' })
  endDate?: string;
}

/**
 * Response data for member vs non-member revenue
 */
export class BookingRevenueByCustomersData {
  @ApiProperty({ description: 'Total revenue from member bookings (grossAmount sum)' })
  memberTotalRevenue: number;

  @ApiProperty({ description: 'Average revenue per member who has at least 1 booking' })
  memberAverageRevenue: number;

  @ApiProperty({ description: 'Number of members with at least 1 booking' })
  membersWithBookings: number;

  @ApiProperty({ description: 'Average revenue per non-member booking' })
  nonMemberAverageRevenue: number;

  @ApiProperty({ description: 'Uplift percentage: (memberAvg - nonMemberAvg) / nonMemberAvg * 100' })
  upliftPercentage: number;
}

export type BookingRevenueByCustomersResponse = NatsResponse<BookingRevenueByCustomersData>;
