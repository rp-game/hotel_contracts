import { NatsResponse } from '../../common/nats-response.interface';

/**
 * NATS Pattern: booking.assign_room
 */
export interface AssignRoomNatsRequest {
  bookingId: string;
  roomId: string;
  roomNumber: string;
  assignedBy: string;
  assignmentStatus: string;
}

export interface BookingAssignRoomNatsResponseData {
  bookingId: string;
  roomId: string;
  roomNumber: string;
  assignmentStatus: string;
}

export type BookingAssignRoomNatsResponse = NatsResponse<BookingAssignRoomNatsResponseData>;
