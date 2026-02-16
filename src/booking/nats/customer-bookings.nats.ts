/**
 * Customer Bookings NATS Contract
 *
 * NATS Pattern: booking.customer.bookings
 * Handler: booking-service
 * Called by: api-gateway (CrmController)
 * Used by: Customer profile page - bookings list
 */

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { NatsResponse } from '../../common/nats-response.interface';
import { BookingStatus } from '../enums/booking-status.enum';

/**
 * Customer Booking Response
 * Compatible with API Gateway BookingDto
 */
export class CustomerBookingNatsResponse {
  @ApiProperty({ description: 'Booking ID' })
  id!: string;

  @ApiProperty({ description: 'Booking code/reference number' })
  bookingCode!: string;

  @ApiProperty({ description: 'Tenant ID' })
  tenantId!: string;

  @ApiProperty({ description: 'Hotel ID' })
  hotelId!: string;

  @ApiProperty({ description: 'Guest name' })
  guestName!: string;

  @ApiProperty({ description: 'Guest email' })
  guestEmail!: string;

  @ApiProperty({ description: 'Guest phone number' })
  guestPhone!: string;

  @ApiProperty({ description: 'Check-in date' })
  checkInDate!: string;

  @ApiProperty({ description: 'Check-out date' })
  checkOutDate!: string;

  @ApiProperty({ description: 'Room type ID' })
  roomTypeId!: string;

  @ApiProperty({ description: 'Room type name' })
  roomTypeName!: string;

  @ApiPropertyOptional({ description: 'Assigned room ID' })
  roomId?: string;

  @ApiPropertyOptional({ description: 'Assigned room number' })
  roomNumber?: string;

  @ApiProperty({ description: 'Number of guests' })
  guestCount!: number;

  @ApiProperty({ description: 'Number of nights' })
  numberOfNights!: number;

  @ApiProperty({ description: 'Total amount for booking' })
  totalAmount!: number;

  @ApiProperty({ description: 'Paid amount' })
  paidAmount!: number;

  @ApiProperty({ description: 'Outstanding balance' })
  balance!: number;

  @ApiProperty({
    description: 'Booking status',
    enum: BookingStatus
  })
  status!: BookingStatus;

  @ApiPropertyOptional({ description: 'Special requests from guest' })
  specialRequests?: string;

  @ApiPropertyOptional({ description: 'Internal notes about the booking' })
  notes?: string;

  @ApiProperty({ description: 'Booking creation date' })
  createdAt!: string;

  @ApiProperty({ description: 'Last updated date' })
  updatedAt!: string;

  @ApiPropertyOptional({ description: 'User who created the booking' })
  createdBy?: string;

  @ApiPropertyOptional({ description: 'User who last updated the booking' })
  updatedBy?: string;

  @ApiPropertyOptional({ description: 'Actual check-in time' })
  actualCheckInTime?: string;

  @ApiPropertyOptional({ description: 'Actual check-out time' })
  actualCheckOutTime?: string;
}

/**
 * Customer Bookings List Request
 * Pattern: booking.customer.bookings
 */
export interface CustomerBookingsNatsRequest {
  tenantId: string;
  customerId: string;
  page?: number;
  limit?: number;
}

/**
 * Customer Bookings List Response
 */
export class CustomerBookingsListNatsResponse {
  @ApiProperty({ description: 'List of customer bookings', type: [CustomerBookingNatsResponse] })
  data!: CustomerBookingNatsResponse[];

  @ApiProperty({ description: 'Total number of bookings' })
  total!: number;

  @ApiProperty({ description: 'Current page number' })
  page!: number;

  @ApiProperty({ description: 'Number of items per page' })
  limit!: number;
}

/**
 * Full NATS response for customer bookings
 */
export type CustomerBookingsNatsResponseType = NatsResponse<CustomerBookingsListNatsResponse>;
