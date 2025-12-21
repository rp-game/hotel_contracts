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
export interface Room {
    id: string;
    tenantId: string;
    hotelId: string;
    roomNumber: string;
    roomTypeId: string;
    floor: number;
    status: string;
    isActive: boolean;
    createdAt?: string;
    updatedAt?: string;
}
/**
 * Find All Rooms Request
 * Pattern: inventory.rooms.findAll
 */
export interface FindAllRoomsRequest {
    tenantId: string;
    filters?: any;
    pagination?: {
        page?: number;
        limit?: number;
    };
}
export interface FindAllRoomsResponse {
    data: Room[];
    total?: number;
    page?: number;
    limit?: number;
}
export type FindAllRoomsNatsResponse = NatsResponse<FindAllRoomsResponse>;
/**
 * Find One Room Request
 * Pattern: inventory.rooms.findOne
 */
export interface FindOneRoomRequest {
    id: string;
    tenantId: string;
}
export type FindOneRoomResponse = Room | null;
export type FindOneRoomNatsResponse = NatsResponse<FindOneRoomResponse>;
/**
 * Create Room Request
 * Pattern: inventory.rooms.create
 */
export interface CreateRoomRequest {
    tenantId: string;
    hotelId?: string;
    roomNumber: string;
    roomTypeId: string;
    floor: number;
}
export type CreateRoomResponse = Room;
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
export type UpdateRoomResponse = Room | null;
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
    date?: string;
    pagination?: {
        page?: number;
        limit?: number;
    };
}
export interface RoomStatusInfo {
    roomId: string;
    roomNumber: string;
    status: string;
    floor: number;
}
export type GetRoomStatusByDateResponse = RoomStatusInfo[];
export type GetRoomStatusByDateNatsResponse = NatsResponse<GetRoomStatusByDateResponse>;
/**
 * Get Alternative Rooms Request
 * Pattern: rooms.alternatives.get
 */
export interface GetAlternativeRoomsRequest {
    roomId: string;
    criteria: any;
}
export type GetAlternativeRoomsResponse = Room[];
export type GetAlternativeRoomsNatsResponse = NatsResponse<GetAlternativeRoomsResponse>;
/**
 * Get Room By ID Request
 * Pattern: inventory.room.get
 */
export interface GetRoomByIdRequest {
    roomId: string;
    tenantId?: string;
    hotelId?: string;
}
export type GetRoomByIdResponse = Room;
export type GetRoomByIdNatsResponse = NatsResponse<GetRoomByIdResponse>;
/**
 * Get Multiple Rooms Request
 * Pattern: inventory.rooms.get
 */
export interface GetRoomsRequest {
    roomIds: string[];
    tenantId?: string;
    hotelId?: string;
}
export type GetRoomsResponse = Room[];
export type GetRoomsNatsResponse = NatsResponse<GetRoomsResponse>;
/**
 * Room Status Changed Event
 * Pattern: automation.room.status.changed
 * Type: EventPattern (Fire & Forget)
 */
export interface RoomStatusChangedEvent {
    roomId: string;
    status: string;
    changedAt: string;
    changedBy?: string;
}
//# sourceMappingURL=room.nats.d.ts.map