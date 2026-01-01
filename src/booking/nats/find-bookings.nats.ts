/**
 * Find Bookings NATS Contract
 *
 * NATS Pattern: booking.find_all
 * Handler: booking-service
 * Called by: api-gateway
 * Used by: dashboard bookings list with pagination and filtering
 */

import { NatsPaginatedResponse } from '../../common/nats-response.interface';

/**
 * Booking summary for list operations
 * Contains essential fields for display without full booking details
 */
export interface BookingSummary {
  /**
   * Unique booking ID
   */
  id: string;

  /**
   * Human-readable booking code (e.g., BK2024123456)
   */
  bookingCode: string;

  /**
   * Booking status (uppercase enum: PENDING, CONFIRMED, CHECKED_IN, CHECKED_OUT, CANCELLED, COMPLETED)
   */
  status: 'PENDING' | 'CONFIRMED' | 'CHECKED_IN' | 'CHECKED_OUT' | 'CANCELLED' | 'COMPLETED';

  /**
   * Booking source (WEB, OTA, PHONE, etc.)
   */
  source: string;

  /**
   * Payment status (enum)
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
   * Guest full name
   */
  guestName: string;

  /**
   * Guest email (optional)
   */
  guestEmail?: string;

  /**
   * Guest phone (optional)
   */
  guestPhone?: string;

  /**
   * Number of rooms in booking
   */
  roomCount: number;

  /**
   * Number of adults
   */
  adultCount: number;

  /**
   * Number of children
   */
  childCount: number;

  /**
   * Booking creation date
   */
  createdAt: string;

  /**
   * User ID who created booking
   */
  createdBy?: string;

  /**
   * Room assignments
   */
  rooms?: Array<{
    id: string;
    roomNumber: string;
    roomTypeName: string;
  }>;
}

/**
 * NATS request to find/list bookings with filters and pagination
 */
export interface FindBookingsNatsRequest {
  /**
   * Tenant ID (multi-tenant isolation)
   */
  tenantId: string;

  /**
   * Hotel ID (specific property)
   */
  hotelId: string;

  /**
   * Booking status filter (optional)
   */
  status?: 'PENDING' | 'CONFIRMED' | 'CHECKED_IN' | 'CHECKED_OUT' | 'CANCELLED' | 'COMPLETED';

  /**
   * Booking source filter (WEB, OTA, PHONE, etc.)
   */
  source?: string;

  /**
   * Payment status filter
   */
  paymentStatus?: 'PENDING' | 'PARTIAL' | 'COMPLETED' | 'FAILED' | 'CANCELLED' | 'REFUNDED';

  /**
   * Guest ID filter (optional)
   */
  guestId?: string;

  /**
   * Customer ID filter (optional)
   */
  customerId?: string;

  /**
   * Guest name search (substring match)
   */
  guestName?: string;

  /**
   * Booking reference/code search
   */
  bookingReference?: string;

  /**
   * Check-in date start filter (YYYY-MM-DD)
   */
  checkInDateStart?: string;

  /**
   * Check-in date end filter (YYYY-MM-DD)
   */
  checkInDateEnd?: string;

  /**
   * Check-out date start filter (YYYY-MM-DD)
   */
  checkOutDateStart?: string;

  /**
   * Check-out date end filter (YYYY-MM-DD)
   */
  checkOutDateEnd?: string;

  /**
   * Room type ID filter (optional)
   */
  roomTypeId?: string;

  /**
   * Pagination: page number (1-indexed, default: 1)
   */
  page?: number;

  /**
   * Pagination: items per page (default: 10, max: 100)
   */
  limit?: number;

  /**
   * Sort field (createdAt, checkInDate, checkOutDate, guestName, bookingCode, status)
   */
  sortBy?: string;

  /**
   * Sort order (ASC or DESC)
   */
  sortOrder?: 'ASC' | 'DESC';
}

/**
 * NATS response containing list of bookings with pagination
 */
export type FindBookingsNatsResponse = NatsPaginatedResponse<BookingSummary>;
