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
import { RoomType } from '../types';
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
    data: RoomType[];
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
export type FindOneRoomTypeResponse = RoomType | null;
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
    numberOfBeds?: number;
    maxOccupancy?: number;
    amenities?: string[];
    features?: string[];
    size?: number;
    category?: string;
    images?: string[];
}
export type CreateRoomTypeResponse = RoomType;
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
    numberOfBeds?: number;
    maxOccupancy?: number;
    amenities?: string[];
    features?: string[];
    size?: number;
    category?: string;
    images?: string[];
    isActive?: boolean;
}
export type UpdateRoomTypeResponse = RoomType | null;
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
export type GetRoomTypesByIdsResponse = RoomType[];
export type GetRoomTypesByIdsNatsResponse = NatsResponse<GetRoomTypesByIdsResponse>;
//# sourceMappingURL=room-type.nats.d.ts.map