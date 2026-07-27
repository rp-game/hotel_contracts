/**
 * Search Room Move NATS Contract
 *
 * NATS Pattern: room-move.search
 * Handler: booking-service
 * Called by: api-gateway
 * Types: search, dashboard-stats, mobile-staff
 */
import { NatsResponse } from '../../common/nats-response.interface';
import { RoomMoveSearchResult } from '../types';
import { RoomMoveStatus } from '../enums';
export declare class SearchRoomMoveRequest {
    tenantId: string;
    hotelId: string;
    searchType?: 'search' | 'dashboard-stats' | 'mobile-staff';
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
 */
export type SearchRoomMoveNatsResponse = NatsResponse<RoomMoveSearchResult>;
//# sourceMappingURL=search-room-move.nats.d.ts.map