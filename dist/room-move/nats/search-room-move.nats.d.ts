import { NatsResponse } from '../../common/nats-response.interface';
import { RoomMoveSearchResult, AvailableRoom } from '../types';
import { RoomMoveStatus } from '../enums';
/**
 * Search Room Move Request
 * Pattern: room-move.search
 * Handler: booking-service
 * Types: search, dashboard-stats, mobile-staff, emergency-available-rooms
 */
export interface SearchRoomMoveRequest {
    tenantId: string;
    hotelId: string;
    searchType?: 'search' | 'dashboard-stats' | 'mobile-staff' | 'emergency-available-rooms';
    status?: RoomMoveStatus | RoomMoveStatus[];
    bookingId?: string;
    roomId?: string;
    page?: number;
    limit?: number;
    sortBy?: string;
    sortOrder?: 'asc' | 'desc';
}
/**
 * Search Room Move Response
 * Returns different types based on searchType:
 * - search/dashboard-stats/mobile-staff: RoomMoveSearchResult
 * - emergency-available-rooms: Array of AvailableRoom
 */
export interface SearchRoomMoveNatsResponse extends NatsResponse<RoomMoveSearchResult | AvailableRoom[]> {
}
//# sourceMappingURL=search-room-move.nats.d.ts.map