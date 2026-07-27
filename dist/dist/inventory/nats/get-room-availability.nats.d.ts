/**
 * Get Room Availability NATS Contract
 *
 * NATS Pattern: inventory.room.availability
 * Handler: inventory-service
 * Called by: api-gateway, booking-service
 */
import { NatsResponse } from '../../common';
import { RoomAvailability, RoomInventoryStatus } from '../types';
/**
 * NATS request to get room availability for a date range
 */
export interface GetRoomAvailabilityRequest {
    tenantId: string;
    hotelId: string;
    roomTypeId?: string;
    startDate: string;
    endDate: string;
    capacity?: number;
    amenities?: string[];
}
/**
 * NATS response with room availability
 */
export interface GetRoomAvailabilityResponse {
    availability: RoomAvailability[];
    inventoryStatus: RoomInventoryStatus[];
}
/**
 * Type-safe NATS response wrapper
 */
export type GetRoomAvailabilityNatsResponse = NatsResponse<GetRoomAvailabilityResponse>;
/**
 * NATS request to get inventory status for a date
 */
export interface GetInventoryStatusRequest {
    tenantId: string;
    hotelId: string;
    date: string;
}
/**
 * NATS response with inventory status
 */
export interface GetInventoryStatusResponse {
    date: string;
    status: RoomInventoryStatus[];
    totalRooms: number;
    availableRooms: number;
    occupiedRooms: number;
}
/**
 * Type-safe NATS response wrapper
 */
export type GetInventoryStatusNatsResponse = NatsResponse<GetInventoryStatusResponse>;
//# sourceMappingURL=get-room-availability.nats.d.ts.map