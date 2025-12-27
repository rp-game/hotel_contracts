/**
 * Room Type NATS Contracts
 *
 * Patterns:
 * - inventory.roomTypes.findAll
 * - inventory.roomTypes.findOne
 * - inventory.roomTypes.create
 * - inventory.roomTypes.update
 * - inventory.roomTypes.delete
 * - inventory.room-types.get-by-ids
 *
 * Handler: inventory-service
 * Called by: api-gateway, pricing-service
 */

import { NatsResponse } from '../../common';
import { RoomType as RoomTypeEntity } from '../types';

/**
 * Find All Room Types Request
 * Pattern: inventory.roomTypes.findAll
 */
export interface FindAllRoomTypesRequest {
  tenantId: string;
  hotelId?: string;
  page?: number;
  limit?: number;
}

export interface FindAllRoomTypesResponse {
  data: RoomTypeEntity[];
  total: number;
  page: number;
  limit: number;
}

export type FindAllRoomTypesNatsResponse = NatsResponse<FindAllRoomTypesResponse>;

/**
 * Find One Room Type Request
 * Pattern: inventory.roomTypes.findOne
 */
export interface FindOneRoomTypeRequest {
  id: string;
  tenantId: string;
}

export type FindOneRoomTypeResponse = RoomTypeEntity | null;
export type FindOneRoomTypeNatsResponse = NatsResponse<FindOneRoomTypeResponse>;

/**
 * Create Room Type Request
 * Pattern: inventory.roomTypes.create
 */
export interface CreateRoomTypeRequest {
  tenantId: string;
  hotelId: string;
  name: string;
  description?: string;
  baseRate: number;
  capacity?: number;
  maxOccupancy?: number; // Alias for capacity
  amenities?: string[];
}

export type CreateRoomTypeResponse = RoomTypeEntity;
export type CreateRoomTypeNatsResponse = NatsResponse<CreateRoomTypeResponse>;

/**
 * Update Room Type Request
 * Pattern: inventory.roomTypes.update
 */
export interface UpdateRoomTypeRequest {
  id: string;
  tenantId: string;
  hotelId?: string;
  name?: string;
  description?: string;
  baseRate?: number;
  capacity?: number;
  maxOccupancy?: number; // Alias for capacity
  amenities?: string[];
}

export type UpdateRoomTypeResponse = RoomTypeEntity | null;
export type UpdateRoomTypeNatsResponse = NatsResponse<UpdateRoomTypeResponse>;

/**
 * Delete Room Type Request
 * Pattern: inventory.roomTypes.delete
 */
export interface DeleteRoomTypeRequest {
  id: string;
  tenantId: string;
}

export interface DeleteRoomTypeResponse {
  message: string;
}

export type DeleteRoomTypeNatsResponse = NatsResponse<DeleteRoomTypeResponse>;

/**
 * Get Room Types By IDs Request
 * Pattern: inventory.room-types.get-by-ids
 */
export interface GetRoomTypesByIdsRequest {
  tenantId: string;
  hotelId: string;
  roomTypeIds: string[];
}

export type GetRoomTypesByIdsResponse = RoomTypeEntity[];
export type GetRoomTypesByIdsNatsResponse = NatsResponse<GetRoomTypesByIdsResponse>;
