/**
 * Find One Booking NATS Contract
 *
 * NATS Pattern: booking.find_one
 * Handler: booking-service
 * Called by: api-gateway
 * Used by: booking detail page and calendar modal
 */

import { NatsResponse } from '../../common/nats-response.interface';

/**
 * Room details in a booking
 */
export interface BookingRoom {
  /**
   * Room ID
   */
  id: string;

  /**
   * Room number (e.g., "101")
   */
  roomNumber: string;

  /**
   * Room type ID
   */
  roomTypeId: string;

  /**
   * Room type name
   */
  roomTypeName: string;

  /**
   * Check-in date for this room
   */
  checkInDate: string;

  /**
   * Check-out date for this room
   */
  checkOutDate: string;

  /**
   * Price per night for this room
   */
  pricePerNight: number;

  /**
   * Total price for this room
   */
  totalPrice: number;
}

/**
 * Guest information in booking
 */
export interface BookingGuest {
  /**
   * Guest ID
   */
  id: string;

  /**
   * Guest first name
   */
  firstName: string;

  /**
   * Guest last name
   */
  lastName: string;

  /**
   * Guest full name
   */
  fullName: string;

  /**
   * Guest email
   */
  email: string;

  /**
   * Guest phone number
   */
  phone: string;

  /**
   * Guest nationality (optional)
   */
  nationality?: string;

  /**
   * Guest ID type (passport, driver's license, etc.)
   */
  idType?: string;

  /**
   * Guest ID number
   */
  idNumber?: string;
}

/**
 * Payment information in booking
 */
export interface BookingPayment {
  /**
   * Payment ID
   */
  id: string;

  /**
   * Payment method
   */
  method: string;

  /**
   * Payment status
   */
  status: 'PENDING' | 'PARTIAL' | 'COMPLETED' | 'FAILED' | 'CANCELLED' | 'REFUNDED';

  /**
   * Amount paid
   */
  amount: number;

  /**
   * Payment date
   */
  paidAt?: string;

  /**
   * Transaction reference (optional)
   */
  transactionRef?: string;
}

/**
 * NATS request to find a single booking
 */
export interface GetBookingByIdRequest {
  /**
   * Tenant ID (multi-tenant isolation)
   */
  tenantId: string;

  /**
   * Hotel ID
   */
  hotelId: string;

  /**
   * Booking ID
   */
  bookingId: string;
}

/**
 * NATS response containing full booking details
 */
export interface GetBookingByIdResponse {
  /**
   * Booking ID
   */
  id: string;

  /**
   * Booking code (e.g., BK2024123456)
   */
  bookingCode: string;

  /**
   * Booking status
   */
  status: 'PENDING' | 'CONFIRMED' | 'CHECKED_IN' | 'CHECKED_OUT' | 'CANCELLED';

  /**
   * Booking source (WEB, OTA, PHONE, WALK_IN, etc.)
   */
  source: string;

  /**
   * Payment status
   */
  paymentStatus: 'PENDING' | 'PARTIAL' | 'COMPLETED' | 'FAILED' | 'CANCELLED' | 'REFUNDED';

  /**
   * Check-in date (YYYY-MM-DD)
   */
  checkInDate: string;

  /**
   * Check-out date (YYYY-MM-DD)
   */
  checkOutDate: string;

  /**
   * Total booking amount
   */
  totalAmount: number;

  /**
   * Amount already paid
   */
  paidAmount: number;

  /**
   * Outstanding balance
   */
  balance: number;

  /**
   * Rooms in this booking
   */
  rooms: BookingRoom[];

  /**
   * Primary guest information
   */
  mainGuest: BookingGuest;

  /**
   * Additional guests (optional)
   */
  additionalGuests?: BookingGuest[];

  /**
   * Payment records
   */
  payments: BookingPayment[];

  /**
   * Special requests from guest
   */
  specialRequests?: string;

  /**
   * Booking creation date
   */
  createdAt: string;

  /**
   * Last update date
   */
  updatedAt: string;

  /**
   * User who created the booking
   */
  createdBy?: string;

  /**
   * User who last updated the booking
   */
  updatedBy?: string;

  /**
   * Actual check-in time (optional)
   */
  actualCheckInTime?: string;

  /**
   * Actual check-out time (optional)
   */
  actualCheckOutTime?: string;
}

/**
 * Full NATS response type for find one booking
 */
export type GetBookingByIdNatsResponse = NatsResponse<GetBookingByIdResponse>;
