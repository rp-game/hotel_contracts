/**
 * Room Assignment NATS Contracts
 *
 * Patterns:
 * - rooms.assignment.assign
 * - rooms.assignment.auto
 * - rooms.assignment.available
 * - rooms.assignment.optimal
 * - rooms.assignment.unassign
 * - inventory.room.assign
 * - inventory.room.release
 *
 * Handler: inventory-service
 * Called by: booking-service, api-gateway
 */

import { NatsResponse } from '../../common';

/**
 * Assign Room Request
 * Pattern: rooms.assignment.assign
 */
export interface AssignRoomRequest {
  bookingId: string;
  roomId: string;
  assignedBy: string;
}

export interface AssignmentData {
  bookingId: string;
  roomId: string;
  assignedAt: string;
}

export interface AssignRoomResponse {
  success: boolean;
  message: string;
  assignment?: AssignmentData;
}

export type AssignRoomNatsResponse = NatsResponse<AssignRoomResponse>;

/**
 * Auto Assign Bookings Request
 * Pattern: rooms.assignment.auto
 */
export interface BookingForAssignment {
  bookingId: string;
  roomTypeId: string;
  checkInDate: string;
  checkOutDate: string;
}

export interface AutoAssignBookingsRequest {
  bookings: BookingForAssignment[];
  hotelId: string;
  assignedBy: string;
}

export interface AutoAssignBookingsResponse {
  assigned: AssignmentData[];
  unassigned: Array<{ bookingId: string; reason: string }>;
  summary: { total: number; assigned: number; failed: number };
}

export type AutoAssignBookingsNatsResponse = NatsResponse<AutoAssignBookingsResponse>;

/**
 * Get Available Rooms Request
 * Pattern: rooms.assignment.available
 */
export interface GetAvailableRoomsRequest {
  roomTypeId: string;
  hotelId: string;
  checkIn: string; // YYYY-MM-DD
  checkOut: string; // YYYY-MM-DD
}

export interface AvailableRoom {
  roomId: string;
  roomNumber: string;
  floor: number;
  status: string;
}

export type GetAvailableRoomsResponse = AvailableRoom[];
export type GetAvailableRoomsNatsResponse = NatsResponse<GetAvailableRoomsResponse>;

/**
 * Find Optimal Room Request
 * Pattern: rooms.assignment.optimal
 */
export interface BookingData {
  bookingId: string;
  roomTypeId: string;
  checkInDate: string;
  checkOutDate: string;
  guestPreferences?: any;
}

export interface FindOptimalRoomRequest {
  booking: BookingData;
  hotelId: string;
  constraints?: any;
}

export interface OptimalRoomResult {
  room?: { roomId: string; roomNumber: string };
  score?: number;
  reasons?: string[];
}

export type FindOptimalRoomResponse = OptimalRoomResult | null;
export type FindOptimalRoomNatsResponse = NatsResponse<FindOptimalRoomResponse>;

/**
 * Unassign Room Request
 * Pattern: rooms.assignment.unassign
 */
export interface UnassignRoomRequest {
  bookingId: string;
  unassignedBy: string;
}

export interface UnassignRoomResponse {
  success: boolean;
  bookingId: string;
  message?: string;
  error?: string;
}

export type UnassignRoomNatsResponse = NatsResponse<UnassignRoomResponse>;

/**
 * Mark Room As Assigned Request
 * Pattern: inventory.room.assign
 */
export interface MarkRoomAsAssignedRequest {
  roomId: string;
  bookingId: string;
  checkIn: string; // YYYY-MM-DD
  checkOut: string; // YYYY-MM-DD
  tenantId: string;
  hotelId: string;
  startTime?: string; // HH:mm for hourly bookings
  endTime?: string; // HH:mm for hourly bookings
}

export interface MarkRoomAsAssignedResponse {
  success: boolean;
  message: string;
}

export type MarkRoomAsAssignedNatsResponse = NatsResponse<MarkRoomAsAssignedResponse>;

/**
 * Mark Room As Released Request
 * Pattern: inventory.room.release
 */
export interface MarkRoomAsReleasedRequest {
  roomId: string;
  bookingId: string;
  checkIn: string; // YYYY-MM-DD
  checkOut: string; // YYYY-MM-DD
  tenantId: string;
  hotelId: string;
  startTime?: string; // HH:mm for hourly bookings
  endTime?: string; // HH:mm for hourly bookings
}

export interface MarkRoomAsReleasedResponse {
  success: boolean;
  message: string;
  error?: string;
}

export type MarkRoomAsReleasedNatsResponse = NatsResponse<MarkRoomAsReleasedResponse>;
