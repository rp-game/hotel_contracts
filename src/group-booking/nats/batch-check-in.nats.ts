/**
 * Batch Check-In NATS Contracts for Group Bookings
 *
 * NATS Patterns:
 *   group-block.bookings       — list bookings linked to a group block
 *   group-block.batch_check_in — check in multiple bookings at once
 * Handler: booking-service
 * Called by: api-gateway
 */

import { NatsResponse } from '../../common/nats-response.interface';

/**
 * NATS request to get bookings linked to a group block
 */
export interface GetGroupBlockBookingsNatsRequest {
  groupBlockId: string;
  tenantId: string;
  hotelId: string;
  status?: string; // filter by booking status
}

/**
 * Summary of a booking linked to a group block
 */
export interface GroupBlockBookingSummary {
  id: string;
  bookingCode: string;
  guestName: string;
  guestPhone: string;
  roomTypeName: string;
  roomNumber: string | null;
  roomId: string | null;
  roomTypeId: string | null;
  checkInDate: string;
  checkOutDate: string;
  status: string;
  totalAmount: number;
  adultCount: number;
  childCount: number;
  preRegistrationStatus: string | null;
}

export type GetGroupBlockBookingsNatsResponse = NatsResponse<GroupBlockBookingSummary[]>;

/**
 * NATS request to batch check-in multiple bookings
 */
export interface BatchCheckInNatsRequest {
  tenantId: string;
  hotelId: string;
  groupBlockId?: string;
  bookingIds: string[];
  checkedInBy: string;
  checkedInByName: string;
  notes?: string;
  /** Check-in mode: EXPRESS skips guest processing for pre-registered guests, FULL is standard. Default: EXPRESS */
  mode?: 'EXPRESS' | 'FULL';
}

export interface BatchCheckInResult {
  total: number;
  succeeded: number;
  failed: number;
  results: {
    bookingId: string;
    bookingCode: string;
    success: boolean;
    error?: string;
  }[];
}

export type BatchCheckInNatsResponse = NatsResponse<BatchCheckInResult>;
