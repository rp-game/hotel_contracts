/**
 * Room Status NATS Contracts
 *
 * Patterns:
 * - rooms.status.overview
 *
 * Handler: inventory-service (RoomController)
 * Called by: api-gateway (RoomsController)
 */
import { NatsResponse } from '../../common';
/**
 * Room Status Enum (for room overview)
 */
export type RoomStatusEnum = 'AVAILABLE' | 'OCCUPIED' | 'CLEANING' | 'MAINTENANCE' | 'OUT_OF_ORDER';
/**
 * Cleaning Status Enum
 */
export type CleaningStatus = 'CLEAN' | 'DIRTY' | 'IN_PROGRESS';
/**
 * Booking Info (nested in room status)
 */
export interface BookingInfo {
    bookingId: string;
    guestName: string;
    checkIn: string;
    checkOut: string;
}
/**
 * Room Status Item
 */
export interface RoomStatusItem {
    roomId: string;
    roomNumber: string;
    floor: number;
    roomType: string;
    status: RoomStatusEnum;
    currentBooking?: BookingInfo;
    nextBooking?: BookingInfo;
    cleaningStatus?: CleaningStatus;
    maintenanceScheduled: boolean;
}
/**
 * Room Status Overview Summary
 */
export interface RoomStatusOverviewSummary {
    totalRooms: number;
    available: number;
    occupied: number;
    outOfOrder: number;
    cleaning: number;
    maintenance: number;
}
/**
 * Room Status Overview Response
 */
export interface RoomStatusOverview {
    date: string;
    hotelId: string;
    summary: RoomStatusOverviewSummary;
    roomsByStatus: RoomStatusItem[];
}
/**
 * Get Room Status Overview Request
 * Pattern: rooms.status.overview
 *
 * Get comprehensive room status overview for a hotel
 */
export interface GetRoomStatusOverviewNatsRequest {
    hotelId: string;
    date: string;
    roomNumber?: string;
    roomType?: string;
    status?: string;
}
export type GetRoomStatusOverviewNatsResponse = NatsResponse<RoomStatusOverview>;
//# sourceMappingURL=room-status.nats.d.ts.map