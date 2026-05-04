/**
 * Get Booking History NATS Contract
 *
 * NATS Pattern: booking.history.get
 * Handler: booking-service
 * Called by: api-gateway
 */

import { NatsResponse } from '../../common/nats-response.interface';

export interface GetBookingHistoryRequest {
  bookingId: string;
  tenantId: string;
  hotelId: string;
}

export interface BookingHistoryDto {
  id: string;
  bookingId: string;
  action: string;
  description: string;
  previousStatus?: string | null;
  newStatus?: string | null;
  previousData?: Record<string, any> | null;
  newData?: Record<string, any> | null;
  createdBy?: string | null;
  createdAt: string;
  notes?: string | null;
  isSystemGenerated: boolean;
}

export type GetBookingHistoryResponse = NatsResponse<BookingHistoryDto[]>;
