/**
 * Room NATS Contracts
 *
 * Patterns:
 * - inventory.rooms.findAll
 * - inventory.rooms.findOne
 * - inventory.rooms.create
 * - inventory.rooms.update
 * - inventory.rooms.delete
 * - inventory.rooms.status
 * - rooms.alternatives.get
 * - inventory.room.get
 * - inventory.rooms.get
 * - automation.room.status.changed (Event)
 *
 * Handler: inventory-service
 * Called by: api-gateway, booking-service
 */

import { NatsResponse } from '../../common';
import { Room as RoomEntity } from '../types';

/**
 * Find All Rooms Request
 * Pattern: inventory.rooms.findAll
 */
export interface FindAllRoomsRequest {
  tenantId: string;
  hotelId: string;
  page?: number;
  limit?: number;
  filters?: any;
  pagination?: { page?: number; limit?: number };
}

export interface PaginatedRoomsResponse {
  data: RoomEntity[];
  total: number;
  page: number;
  limit: number;
}

export interface FindAllRoomsResponse extends PaginatedRoomsResponse {}

export type FindAllRoomsNatsResponse = NatsResponse<FindAllRoomsResponse>;

/**
 * Find One Room Request
 * Pattern: inventory.rooms.findOne
 */
export interface FindOneRoomRequest {
  id: string;
  tenantId: string;
}

export type FindOneRoomResponse = RoomDetailResponse | null;
export type FindOneRoomNatsResponse = NatsResponse<FindOneRoomResponse>;

/**
 * Create Room Request
 * Pattern: inventory.rooms.create
 */
export interface CreateRoomRequest {
  tenantId: string;
  hotelId: string;
  roomNumber: string;
  roomTypeId: string;
  floor: number;
}

export type CreateRoomResponse = RoomDetailResponse;
export type CreateRoomNatsResponse = NatsResponse<CreateRoomResponse>;

/**
 * Update Room Request
 * Pattern: inventory.rooms.update
 */
export interface UpdateRoomRequest {
  id: string;
  tenantId: string;
  roomNumber?: string;
  roomTypeId?: string;
  floor?: number;
  status?: string;
  isActive?: boolean;
}

export type UpdateRoomResponse = RoomDetailResponse | null;
export type UpdateRoomNatsResponse = NatsResponse<UpdateRoomResponse>;

/**
 * Delete Room Request
 * Pattern: inventory.rooms.delete
 */
export interface DeleteRoomRequest {
  id: string;
  tenantId: string;
}

export interface DeleteRoomResponse {
  message: string;
}

export type DeleteRoomNatsResponse = NatsResponse<DeleteRoomResponse>;

/**
 * Get Room Status By Date Request
 * Pattern: inventory.rooms.status
 */
export interface GetRoomStatusByDateRequest {
  tenantId: string;
  hotelId: string;
  date?: string; // YYYY-MM-DD
  pagination?: { page?: number; limit?: number };
}

export interface RoomStatusDetail {
  roomId: string;
  roomNumber: string;
  status: string;
  floor: number;
}

export interface RoomStatusByDateResponse {
  date: string;
  totalRooms: number;
  statusBreakdown: {
    available: number;
    occupied: number;
    maintenance: number;
    cleaning: number;
  };
  rooms: {
    id: string;
    roomNumber: string;
    status: string;
    roomType: string;
  }[];
}

export type GetRoomStatusByDateResponse = RoomStatusByDateResponse;
export type GetRoomStatusByDateNatsResponse = NatsResponse<GetRoomStatusByDateResponse>;

/**
 * Get Alternative Rooms Request
 * Pattern: rooms.alternatives.get
 */
export interface GetAlternativeRoomsRequest {
  roomId: string;
  tenantId: string;
  hotelId: string;
  criteria: any;
}

export interface RoomDetailResponse {
  id: string;
  roomNumber: string;
  floor: number;
  status: string;
  roomType: {
    id: string;
    name: string;
    maxGuests: number;
  };
  hotelId: string;
  tenantId: string;
  createdAt: string;
  updatedAt: string;
}

export type GetAlternativeRoomsResponse = RoomDetailResponse[];
export type GetAlternativeRoomsNatsResponse = NatsResponse<GetAlternativeRoomsResponse>;

/**
 * Get Room By ID Request
 * Pattern: inventory.room.get
 */
export interface GetRoomByIdRequest {
  roomId: string;
  tenantId: string;
  hotelId: string;
}

export interface RoomSummaryResponse {
  id: string;
  roomNumber: string;
  roomType: string;
  floor: number;
  status: string;
}

export type GetRoomByIdResponse = RoomSummaryResponse;
export type GetRoomByIdNatsResponse = NatsResponse<GetRoomByIdResponse>;

/**
 * Get Multiple Rooms Request
 * Pattern: inventory.rooms.get
 */
export interface GetRoomsRequest {
  roomIds: string[];
  tenantId: string;
  hotelId: string;
}

export type GetRoomsResponse = RoomDetailResponse[];
export type GetRoomsNatsResponse = NatsResponse<GetRoomsResponse>;

/**
 * Room Status Changed Event
 * Pattern: automation.room.status.changed
 * Type: EventPattern (Fire & Forget)
 */
export interface RoomStatusChangedEvent {
  roomId: string;
  status: string;
  newStatus?: string; // Alias for status, for compatibility
  oldStatus?: string;
  tenantId: string;
  hotelId: string;
  changedAt: string;
  changedBy?: string;
  reason?: string;
}
