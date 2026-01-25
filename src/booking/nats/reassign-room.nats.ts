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
  id: string;
  bookingId: string;
  oldRoomId?: string;
  oldRoomNumber?: string;
  newRoomId: string;
  newRoomNumber: string;
  assignedBy: string;
  assignedAt: string;
  reason?: string;
  assignmentType: string;
  rateDifference?: number;
}

export type ReassignRoomNatsResponse = NatsResponse<RoomAssignmentData>;
