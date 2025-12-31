/**
 * Check-In & Check-Out NATS Contracts
 * Patterns: booking.check_in, booking.check_out, booking.pending_checkins
 */

import { NatsResponse } from '../../common';

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

export type CheckOutBookingNatsResponse = NatsResponse<BookingData>;

// ============= PENDING CHECK-INS =============

export interface GetPendingCheckinsNatsRequest {
  tenantId: string;
  hotelId: string;
  page?: number;
  limit?: number;
  status?: string;
}

export interface PendingCheckinsListData {
  bookings: BookingData[];
  total: number;
  page: number;
  limit: number;
}

export type GetPendingCheckinsNatsResponse = NatsResponse<PendingCheckinsListData>;
