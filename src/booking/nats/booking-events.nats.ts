import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

/**
 * Booking Events - NATS Event Contracts
 *
 * These classes define the event payload shapes for booking lifecycle events
 * emitted via NATS EventPattern for cross-service communication.
 *
 * Events:
 *   - booking.checked_in   → CRM updates totalBookings + lastBookingDate
 *   - booking.checked_out  → CRM updates totalSpent
 *   - booking.cancelled    → CRM reverses stats
 */

export class BookingCheckedInEvent {
  @ApiProperty({ description: 'Booking ID' })
  bookingId: string;

  @ApiProperty({ description: 'CRM Customer ID' })
  customerId: string;

  @ApiProperty({ description: 'Tenant ID' })
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID' })
  hotelId: string;

  @ApiProperty({ description: 'Booking total amount (estimated)' })
  totalAmount: number;

  @ApiProperty({ description: 'Actual check-in date/time (ISO string)' })
  checkInDate: string;

  @ApiProperty({ description: 'Expected check-out date (ISO string)' })
  checkOutDate: string;

  @ApiPropertyOptional({ description: 'Room ID (from room assignment)' })
  roomId?: string;

  @ApiPropertyOptional({ description: 'Room Type ID (from room assignment)' })
  roomTypeId?: string;

  @ApiPropertyOptional({ description: 'Number of guests in this room' })
  guestCount?: number;

  @ApiPropertyOptional({ description: 'Room number (denormalized)' })
  roomNumber?: string;
}

export class BookingCheckedOutEvent {
  @ApiProperty({ description: 'Booking ID' })
  bookingId: string;

  @ApiProperty({ description: 'CRM Customer ID' })
  customerId: string;

  @ApiProperty({ description: 'Tenant ID' })
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID' })
  hotelId: string;

  @ApiProperty({ description: 'Final amount after all charges (post-tax)' })
  finalAmount: number;

  @ApiPropertyOptional({ description: 'Net amount before taxes (used for totalSpent tracking)' })
  netAmount?: number;

  @ApiProperty({ description: 'Check-in date (ISO string)' })
  checkInDate: string;

  @ApiProperty({ description: 'Check-out date (ISO string)' })
  checkOutDate: string;

  @ApiProperty({ description: 'Actual check-out timestamp' })
  checkedOutAt: Date;

  @ApiPropertyOptional({ description: 'Travel Agent ID (if booking linked to TA)' })
  travelAgentId?: string;

  @ApiPropertyOptional({ description: 'Sales person ID (if booking attributed to sales)' })
  salesPersonId?: string;

  @ApiPropertyOptional({ description: 'Corporate Account ID (if corporate booking)' })
  corporateId?: string;

  @ApiPropertyOptional({ description: 'Amount already paid at checkout time' })
  paidAmount?: number;

  @ApiPropertyOptional({ description: 'Human-readable booking code' })
  bookingCode?: string;
}

export class BookingCancelledEvent {
  @ApiProperty({ description: 'Booking ID' })
  bookingId: string;

  @ApiProperty({ description: 'CRM Customer ID' })
  customerId: string;

  @ApiProperty({ description: 'Tenant ID' })
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID' })
  hotelId: string;

  @ApiProperty({ description: 'Amount already paid' })
  paidAmount: number;

  @ApiProperty({ description: 'Refund amount' })
  refundAmount: number;

  @ApiProperty({ description: 'Cancellation timestamp' })
  cancelledAt: Date;

  @ApiPropertyOptional({ description: 'Corporate Account ID (if corporate booking)' })
  corporateId?: string;

  @ApiPropertyOptional({ description: 'Human-readable booking code' })
  bookingCode?: string;
}
