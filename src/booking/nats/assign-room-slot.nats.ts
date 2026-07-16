import { NatsResponse } from '../../common/nats-response.interface';

/**
 * NATS Pattern: booking.assign_room_slot
 * Assigns a room to one specific booking_rooms row (by bookingRoomId), for
 * multi-room bookings where booking.assign_room's implicit "oldest NULL slot"
 * guessing isn't precise enough.
 */
export interface AssignRoomToSlotRequest {
  tenantId: string;
  hotelId: string;
  bookingId: string;
  bookingRoomId: string;
  roomId: string;
  assignedBy: string;
  assignedByName?: string;
}

export interface AssignRoomToSlotResponseData {
  bookingId: string;
  bookingRoomId: string;
  roomId: string;
  roomNumber: string;
  assignmentStatus: string;
}

export type AssignRoomToSlotNatsResponse = NatsResponse<AssignRoomToSlotResponseData>;
