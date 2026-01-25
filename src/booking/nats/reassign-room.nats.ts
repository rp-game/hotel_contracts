/**
 * Reassign Room NATS Contracts
 * Pattern: booking.room.reassign
 */

import { NatsResponse } from '../../common';

export interface ReassignRoomNatsRequest {
  bookingId: string;
  newRoomId: string;
  assignedBy: string;
  reason?: string;
  tenantId: string;
  hotelId: string;
}

export interface RoomAssignmentData {
  bookingId: string;
  roomId: string;
  roomNumber?: string;
}

export type ReassignRoomNatsResponse = NatsResponse<RoomAssignmentData>;
