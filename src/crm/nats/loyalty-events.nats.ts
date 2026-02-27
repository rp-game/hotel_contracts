/**
 * Loyalty Events NATS Contracts
 *
 * Patterns:
 * - booking.completed
 * - loyalty.points.adjust
 * - crm.member.enrolled
 *
 * Handler: crm-service (LoyaltyEventsController)
 * Called by: Multiple services (booking-service, loyalty-service, etc)
 */

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { NatsResponse } from '../../common';

/**
 * Booking Completed Event
 * Pattern: booking.completed
 */
export class BookingCompletedEventNatsRequest {
  @ApiProperty({ description: 'Booking UUID' })
  bookingId: string;

  @ApiProperty({ description: 'Tenant UUID' })
  tenantId: string;

  @ApiProperty({ description: 'CRM customer UUID' })
  customerId: string;

  @ApiProperty({ description: 'Hotel UUID' })
  hotelId: string;

  @ApiPropertyOptional({ description: 'Room UUID' })
  roomId?: string;

  @ApiProperty({ description: 'Check-in date ISO string' })
  checkInDate: string;

  @ApiProperty({ description: 'Check-out date ISO string' })
  checkOutDate: string;

  @ApiProperty({ description: 'Total booking amount as string' })
  totalAmount: string;

  @ApiProperty({ description: 'Number of nights stayed' })
  numberOfNights: number;

  @ApiProperty({ description: 'Number of guests' })
  numberOfGuests: number;

  @ApiProperty({ description: 'Booking status' })
  status: string;

  @ApiPropertyOptional({ description: 'Company UUID' })
  companyId?: string;

  @ApiProperty({ description: 'Event created at ISO string' })
  createdAt: string;
}

/**
 * Booking Completed Event Response
 */
export type BookingCompletedEventNatsResponse = NatsResponse<{ message: string }>;

/**
 * Points Adjustment Request
 * Pattern: loyalty.points.adjust
 */
export class PointsAdjustmentNatsRequest {
  @ApiProperty({ description: 'Loyalty member UUID' })
  memberId: string;

  @ApiProperty({ description: 'Tenant UUID' })
  tenantId: string;

  @ApiProperty({ description: 'Points to adjust (positive or negative)' })
  points: number;

  @ApiProperty({ description: 'Reason for adjustment' })
  reason: string;

  @ApiProperty({ description: 'Staff UUID who made the adjustment' })
  adjustedBy: string;

  @ApiPropertyOptional({ description: 'Additional notes' })
  note?: string;
}

/**
 * Points Adjustment Response
 */
export type PointsAdjustmentNatsResponse = NatsResponse<{ message: string }>;

/**
 * Member Enrollment Event
 * Pattern: crm.member.enrolled
 */
export class MemberEnrollmentNatsRequest {
  @ApiProperty({ description: 'Loyalty member UUID' })
  memberId: string;

  @ApiProperty({ description: 'Tenant UUID' })
  tenantId: string;

  @ApiProperty({ description: 'Customer email' })
  email: string;

  @ApiProperty({ description: 'Enrollment source (e.g. BOOKING, MANUAL)' })
  enrollmentSource: string;

  @ApiPropertyOptional({ description: 'Loyalty program UUID' })
  programId?: string;

  @ApiPropertyOptional({ description: 'CRM customer UUID' })
  customerId?: string;
}

/**
 * Member Enrollment Response
 */
export type MemberEnrollmentNatsResponse = NatsResponse<{ message: string }>;
