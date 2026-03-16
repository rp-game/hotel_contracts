/**
 * Batch Room Assignment NATS Contract
 *
 * NATS Pattern: group-block.batch_room_assign
 * Handler: booking-service
 * Called by: api-gateway
 *
 * Assigns rooms to multiple bookings within a group block at once.
 */

import { NatsResponse } from '../../common/nats-response.interface';

/**
 * Single room assignment item
 */
export interface BatchRoomAssignItem {
  bookingId: string;
  roomId: string;
  roomNumber: string;
}

/**
 * NATS request to batch assign rooms to group bookings
 */
export interface BatchRoomAssignNatsRequest {
  tenantId: string;
  hotelId: string;
  groupBlockId: string;
  assignments: BatchRoomAssignItem[];
  userId: string;
  userName: string;
}

/**
 * Result for a single room assignment
 */
export interface BatchRoomAssignResultItem {
  bookingId: string;
  roomId: string;
  roomNumber: string;
  success: boolean;
  error?: string;
}

/**
 * Aggregated result of batch room assignment
 */
export interface BatchRoomAssignResult {
  total: number;
  succeeded: number;
  failed: number;
  results: BatchRoomAssignResultItem[];
}

export type BatchRoomAssignNatsResponse = NatsResponse<BatchRoomAssignResult>;
