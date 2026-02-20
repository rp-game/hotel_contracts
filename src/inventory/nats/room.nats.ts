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

import { ApiProperty } from '@nestjs/swagger';
import { NatsResponse } from '../../common';
import { Room as RoomEntity } from '../types';
import { RoomStatus } from '../enums';

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

export class PaginatedRoomsResponse {
  @ApiProperty({ 
    description: 'Array of room entities', 
    type: [RoomEntity]
  })
  data: RoomEntity[];

  @ApiProperty({ description: 'Total number of rooms' })
  total: number;

  @ApiProperty({ description: 'Current page number' })
  page: number;

  @ApiProperty({ description: 'Items per page' })
  limit: number;
}

export class FindAllRoomsResponse extends PaginatedRoomsResponse {}

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
  status?: RoomStatus;
  currentStatus?: RoomStatus; // String representation of status
  features?: Record<string, any>; // Room-specific features
  notes?: string; // Operational notes
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
  success: boolean;
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

export class RoomStatusBreakdown {
  @ApiProperty({ description: 'Number of available rooms', example: 10 })
  available: number;

  @ApiProperty({ description: 'Number of occupied rooms', example: 5 })
  occupied: number;

  @ApiProperty({ description: 'Number of rooms under maintenance', example: 2 })
  maintenance: number;

  @ApiProperty({ description: 'Number of rooms being cleaned', example: 3 })
  cleaning: number;
}

export class RoomStatusRoomItem {
  @ApiProperty({ description: 'Room ID (UUID)', example: 'uuid-room-123' })
  id: string;

  @ApiProperty({ description: 'Room number', example: '101' })
  roomNumber: string;

  @ApiProperty({ description: 'Room status', example: 'AVAILABLE' })
  status: string;

  @ApiProperty({ description: 'Room type name', example: 'Deluxe' })
  roomType: string;
}

export class RoomStatusByDateResponse {
  @ApiProperty({ description: 'Date for status report (YYYY-MM-DD)', example: '2026-02-17' })
  date: string;

  @ApiProperty({ description: 'Total number of rooms', example: 20 })
  totalRooms: number;

  @ApiProperty({ description: 'Status breakdown by category', type: () => RoomStatusBreakdown })
  statusBreakdown: RoomStatusBreakdown;

  @ApiProperty({ description: 'List of rooms with their current status', type: () => [RoomStatusRoomItem] })
  rooms: RoomStatusRoomItem[];
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
  roomTypeId: string; // Added - room type ID reference
  status: string;
  currentStatus?: string; // Added - string representation of status
  roomType: {
    id: string;
    name: string;
    maxGuests: number;
    numberOfBeds?: number; // Added - number of beds in room type
  };
  lastCleanedAt?: string; // Added - last cleaning timestamp
  features?: Record<string, any>; // Added - room-specific features
  notes?: string; // Added - operational notes
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
