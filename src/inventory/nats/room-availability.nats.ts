/**
 * Room Availability NATS Contracts
 *
 * Patterns:
 * - room.check_availability
 * - room.book
 * - room.release
 * - room.get_status
 * - room_type.get_info
 * - inventory.room.get
 * - room.checkAvailabilityForReassignment
 * - inventory.availability.generate
 * - inventory.room.compare
 * - inventory.update
 *
 * Handler: inventory-service
 * Called by: booking-service, api-gateway, pricing-service
 */

import { NatsResponse } from '../../common';

/**
 * Check Room Availability Request
 * Pattern: room.check_availability
 */
export interface CheckRoomAvailabilityRequest {
  tenantId: string;
  hotelId: string;
  roomTypeId?: string;
  checkInDate: string; // YYYY-MM-DD
  checkOutDate: string; // YYYY-MM-DD
  startTime?: string; // HH:mm for hourly bookings
  endTime?: string; // HH:mm for hourly bookings
  roomCount?: number;
}

export interface RoomAvailabilityResponse {
  success: boolean;
  available: boolean;
  availableRooms: any[];
  totalAvailable: number;
}

export type CheckRoomAvailabilityNatsResponse = NatsResponse<RoomAvailabilityResponse>;

/**
 * Book Room Request
 * Pattern: room.book
 */
export interface BookRoomRequest {
  tenantId: string;
  hotelId: string;
  roomIds: string[];
  bookingId: string;
  checkInDate: string; // YYYY-MM-DD
  checkOutDate?: string; // YYYY-MM-DD
  startTime?: string; // HH:mm for hourly bookings
  endTime?: string; // HH:mm for hourly bookings
}

export interface BookRoomDetailedResponse {
  success: boolean;
  results: Array<{ roomId: string; success: boolean; message: string }>;
  bookingId: string;
}

export type BookRoomNatsResponse = NatsResponse<BookRoomDetailedResponse>;

/**
 * Release Room Request
 * Pattern: room.release
 */
export interface ReleaseRoomRequest {
  tenantId: string;
  hotelId: string;
  bookingId: string;
  roomIds?: string[];
}

export interface ReleaseRoomResponse {
  success: boolean;
  results: Array<{ roomId: string; success: boolean; message: string }>;
  bookingId: string;
}

export type ReleaseRoomNatsResponse = NatsResponse<ReleaseRoomResponse>;

/**
 * Get Room Status Request
 * Pattern: room.get_status
 */
export interface GetRoomStatusRequest {
  tenantId: string;
  hotelId: string;
  roomId: string;
  date?: string; // YYYY-MM-DD
}

export interface RoomStatusResponse {
  roomId: string;
  status: string;
  date: string;
}

export type GetRoomStatusNatsResponse = NatsResponse<RoomStatusResponse>;

/**
 * Get Room Type Info Request
 * Pattern: room_type.get_info
 */
export interface GetRoomTypeInfoRequest {
  tenantId: string;
  hotelId: string;
  roomTypeId: string;
}

export interface RoomTypeInfoResponse {
  roomTypeName: string;
  roomTypeId: string;
}

export type GetRoomTypeInfoNatsResponse = NatsResponse<RoomTypeInfoResponse>;

/**
 * Get Room Info Request
 * Pattern: inventory.room.get
 */
export interface GetRoomInfoRequest {
  roomId: string;
  tenantId?: string;
  hotelId?: string;
}

export interface RoomInfoResponse {
  roomId: string;
  roomNumber: string;
  roomType: { name: string };
  floor: number;
  status: string;
}

export type GetRoomInfoNatsResponse = NatsResponse<RoomInfoResponse>;

/**
 * Check Room Availability For Reassignment Request
 * Pattern: room.checkAvailabilityForReassignment
 */
export interface CheckRoomAvailabilityForReassignmentRequest {
  roomId: string;
  bookingId: string;
  checkIn: string; // YYYY-MM-DD
  checkOut: string; // YYYY-MM-DD
  tenantId: string;
  hotelId: string;
}

export interface RoomAvailabilityForReassignmentResponse {
  available: boolean;
  roomId: string;
  bookingId: string;
  message: string;
}

export type CheckRoomAvailabilityForReassignmentNatsResponse = NatsResponse<RoomAvailabilityForReassignmentResponse>;

/**
 * Generate Availability Records Request
 * Pattern: inventory.availability.generate
 */
export interface GenerateAvailabilityRecordsRequest {
  startDate: string; // YYYY-MM-DD
  endDate: string; // YYYY-MM-DD
  tenantId: string;
}

export interface GenerateAvailabilityRecordsResponse {
  success: boolean;
  message: string;
}

export type GenerateAvailabilityRecordsNatsResponse = NatsResponse<GenerateAvailabilityRecordsResponse>;

/**
 * Compare Rooms Request
 * Pattern: inventory.room.compare
 */
export interface CompareRoomsRequest {
  oldRoomId: string;
  newRoomId: string;
  tenantId: string;
  hotelId: string;
}

export interface RoomComparisonResponse {
  oldRoomId: string;
  newRoomId: string;
  isUpgrade: boolean;
  isDowngrade: boolean;
  rateDifference: number;
  comparison: {
    roomTypeChange: boolean;
    priceImpact: number;
    recommendedAction: string;
  };
}

export type CompareRoomsNatsResponse = NatsResponse<RoomComparisonResponse>;

/**
 * Inventory Update Request
 * Pattern: inventory.update
 */
export interface InventoryUpdateRequest {
  tenantId: string;
  hotelId: string;
  roomTypeId: string;
  date: string; // YYYY-MM-DD
  availableRooms: number;
  source: string;
  trackingId?: string;
}

export interface InventoryUpdateResponse {
  message: string;
  roomTypeId: string;
  date: string;
  availableRooms: number;
  source: string;
  warning?: string;
}

export type InventoryUpdateNatsResponse = NatsResponse<InventoryUpdateResponse>;
