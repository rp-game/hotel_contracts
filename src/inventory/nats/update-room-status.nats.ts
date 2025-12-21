/**
 * Update Room Status NATS Contract
 *
 * NATS Pattern: inventory.room.status.update
 * Handler: inventory-service
 * Called by: housekeeping-service, api-gateway, housekeeping-mobile
 */

import { NatsResponse } from '../../common';
import { RoomStatus } from '../enums';
import { Room } from '../types';

/**
 * NATS request to update room status
 */
export interface UpdateRoomStatusRequest {
  tenantId: string;
  hotelId: string;
  roomId: string;
  status: RoomStatus;
  blockedReason?: string;
  lastCleanedAt?: string;
  updatedBy: string;
}

/**
 * NATS response after updating room status
 */
export interface UpdateRoomStatusResponse {
  room: Room;
}

/**
 * Type-safe NATS response wrapper
 */
export type UpdateRoomStatusNatsResponse = NatsResponse<UpdateRoomStatusResponse>;

/**
 * NATS request to block/unblock rooms for a date range
 */
export interface BlockRoomsRequest {
  tenantId: string;
  hotelId: string;
  roomIds: string[];
  startDate: string; // YYYY-MM-DD
  endDate: string; // YYYY-MM-DD
  reason: string;
  blockedBy: string;
}

/**
 * NATS response after blocking rooms
 */
export interface BlockRoomsResponse {
  totalBlocked: number;
  blockedRoomIds: string[];
}

/**
 * Type-safe NATS response wrapper
 */
export type BlockRoomsNatsResponse = NatsResponse<BlockRoomsResponse>;
