/**
 * Search Room Move NATS Contract
 *
 * NATS Pattern: room-move.search
 * Handler: booking-service
 * Called by: api-gateway
 * Types: search, dashboard-stats, mobile-staff, emergency-available-rooms
 */
import { NatsResponse } from '../../common/nats-response.interface';
import { RoomMoveSearchResult, AvailableRoom } from '../types';
import { RoomMoveStatus } from '../enums';
export declare class SearchRoomMoveRequest {
    tenantId: string;
    hotelId: string;
    searchType?: 'search' | 'dashboard-stats' | 'mobile-staff' | 'emergency-available-rooms';
    status?: RoomMoveStatus | RoomMoveStatus[];
    priority?: string;
    reason?: string;
    bookingId?: string;
    roomId?: string;
    page?: number;
    limit?: number;
    sortBy?: string;
    sortOrder?: 'ASC' | 'DESC';
    includeTimeline?: boolean;
    includeBookingDetails?: boolean;
    includeGuestDetails?: boolean;
    includeStaffDetails?: boolean;
    includeRoomDetails?: boolean;
    requestedFrom?: string;
    requestedTo?: string;
    requestedBy?: string;
    searchText?: string;
    emergencyOnly?: boolean;
    scheduledToday?: boolean;
}
/**
 * Search Room Move Response
 * Returns different types based on searchType:
 * - search/dashboard-stats/mobile-staff: RoomMoveSearchResult
 * - emergency-available-rooms: Array of AvailableRoom
 */
export type SearchRoomMoveNatsResponse = NatsResponse<RoomMoveSearchResult | AvailableRoom[]>;
//# sourceMappingURL=search-room-move.nats.d.ts.map