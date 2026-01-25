/**
 * Room Assignment History NATS Contracts
 * Pattern: booking.room_assignment_history.get
 */

import { NatsResponse } from '../../common';

export interface GetRoomAssignmentHistoryNatsRequest {
  bookingId: string;
  tenantId: string;
  hotelId: string;
}

export interface RoomAssignmentHistoryItem {
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
  effectiveFrom: string;
  isActive: boolean;
}

export interface RoomAssignmentHistoryData {
  assignments: RoomAssignmentHistoryItem[];
  total: number;
  page: number;
  limit: number;
}

export type GetRoomAssignmentHistoryNatsResponse = NatsResponse<RoomAssignmentHistoryData>;
