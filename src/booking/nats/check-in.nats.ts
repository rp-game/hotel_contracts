/**
 * Check-In & Check-Out NATS Contracts
 * Patterns: booking.check_in, booking.check_out, booking.pending_checkins
 */

import { ApiProperty } from '@nestjs/swagger';
import { NatsResponse } from '../../common';
import { BookingResponseDto } from '../dto/booking-response.dto';

// ============= CHECK-IN =============

export interface PrimaryGuestData {
  fullName: string;
  email?: string;
  phone?: string;
  nationality?: string;
  address?: string;
  idType?: string;
  idNumber?: string;
  dateOfBirth?: string;
}

export interface CheckInBookingNatsRequest {
  id: string;  // bookingId
  tenantId: string;
  hotelId: string;
  actualCheckInTime?: string;
  primaryGuest?: PrimaryGuestData;
  additionalGuests?: any[];
  keyCardNumbers?: string;
  depositAmount?: number;
  notes?: string;
  checkedInBy: string;
}

export interface BookingData {
  id: string;
  bookingReference: string;
  tenantId: string;
  hotelId: string;
  guestName: string;
  guestEmail: string;
  guestPhone: string;
  checkInDate: string;
  checkOutDate: string;
  roomTypeId: string;
  roomTypeName: string;
  roomId?: string;
  roomNumber?: string;
  status: string;
  actualCheckInTime?: string;
  actualCheckOutTime?: string;
  adults: number;
  children: number;
  totalAmount: number;
  depositAmount?: number;
  createdAt: string;
  updatedAt: string;
}

// Backward compatibility alias (deprecated, use BookingData instead)
export type CheckInBookingData = BookingData;

export type CheckInBookingNatsResponse = NatsResponse<CheckInBookingData>;

// ============= CHECK-OUT =============

export interface CheckOutBookingNatsRequest {
  bookingId: string;
  tenantId: string;
  hotelId: string;
  actualCheckOutTime?: string;
  additionalCharges?: number;
  notes?: string;
  checkedOutBy: string;
  finalAmount?: number;
  finalBillAmount?: string | number;
  paymentMethod?: string;
  depositRefund?: number;
  billItems?: any[];
}

export type CheckOutBookingNatsResponse = NatsResponse<BookingResponseDto>;

// ============= PENDING CHECK-INS =============

export interface GetPendingCheckinsNatsRequest {
  tenantId: string;
  hotelId: string;
  date?: string;  // Check-in date (YYYY-MM-DD), defaults to today in hotel timezone
  page?: number;
  limit?: number;
  status?: string;
}

/**
 * Pending Check-in Booking Information
 * Used for both NATS response and REST API response
 * Single source of truth for check-in data structure
 */
export class PendingCheckinBooking {
  @ApiProperty({ description: 'Booking ID (UUID)' })
  id: string;

  @ApiProperty({ description: 'Booking reference code (unique, alphanumeric)' })
  bookingCode: string;

  @ApiProperty({ description: 'Guest full name' })
  guestName: string;

  @ApiProperty({ description: 'Guest email address' })
  guestEmail: string;

  @ApiProperty({ description: 'Guest phone number' })
  guestPhone: string;

  @ApiProperty({ description: 'Check-in date (YYYY-MM-DD format)' })
  checkInDate: string;

  @ApiProperty({ description: 'Check-out date (YYYY-MM-DD format)' })
  checkOutDate: string;

  @ApiProperty({ description: 'Estimated check-in time (ISO 8601 format)', required: false })
  estimatedCheckInTime?: string;

  @ApiProperty({ description: 'Room type name' })
  roomType: string;

  @ApiProperty({ description: 'Room number or "Unassigned"' })
  roomNumber: string;

  @ApiProperty({ description: 'Room type ID (UUID)' })
  roomTypeId: string;

  @ApiProperty({ description: 'Room ID (UUID), null if not yet assigned', required: false })
  roomId?: string;

  @ApiProperty({ description: 'Total guest count (adults + children)' })
  guestCount: number;

  @ApiProperty({ description: 'Booking status (CONFIRMED, PENDING, etc.)' })
  status: string;

  @ApiProperty({ description: 'Room assignment status (ASSIGNED, PENDING, UNASSIGNED)' })
  assignmentStatus: string;

  @ApiProperty({ description: 'Special requests from guest', required: false })
  specialRequests?: string;

  @ApiProperty({ description: 'Total booking amount (currency unit)' })
  totalAmount: number;

  @ApiProperty({ description: 'Amount already paid' })
  paidAmount: number;

  @ApiProperty({ description: 'Remaining amount to pay (totalAmount - paidAmount, calculated by backend)' })
  remainingAmount: number;

  @ApiProperty({ description: 'Customer loyalty points', required: false })
  loyaltyPoints?: number;

  @ApiProperty({ description: 'Customer loyalty tier (e.g., GOLD, SILVER, BRONZE)', required: false })
  loyaltyTier?: string;
}

/**
 * Pending Check-ins List Response Data
 */
export class PendingCheckinsListData {
  @ApiProperty({ description: 'List of bookings pending check-in', type: [PendingCheckinBooking] })
  bookings: PendingCheckinBooking[];

  @ApiProperty({ description: 'Total number of pending check-ins across all pages' })
  total: number;

  @ApiProperty({ description: 'Current page number' })
  page: number;

  @ApiProperty({ description: 'Number of items per page' })
  limit: number;
}

export type GetPendingCheckinsNatsResponse = NatsResponse<PendingCheckinsListData>;
