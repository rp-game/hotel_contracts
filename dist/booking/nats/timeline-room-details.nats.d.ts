/**
 * Room Timeline Details NATS Contracts
 *
 * Patterns:
 * - booking.timeline.room-details
 *
 * Handler: booking-service
 * Called by: api-gateway
 */
import { NatsResponse } from '../../common';
/**
 * Get Room Details for Timeline Request
 * Pattern: booking.timeline.room-details
 *
 * Retrieve detailed timeline information for a specific room on a given date
 */
export interface GetRoomDetailsTimelineRequest {
    roomId: string;
    date: string;
}
/**
 * Timeline Block within a room
 * Represents a time period with a specific event type (booking, maintenance, cleaning, etc)
 */
export interface TimelineBlock {
    id: string;
    startTime: string;
    endTime: string;
    type: 'available' | 'pending' | 'confirmed' | 'occupied' | 'maintenance' | 'checkout_ready' | 'cleaning';
    bookingId?: string;
    guestName?: string;
    status?: string;
    actions: string[];
    bookingData?: {
        bookingCode?: string;
        guestEmail?: string;
        guestPhone?: string;
        adultCount?: number;
        childCount?: number;
        specialRequests?: string;
        totalAmount?: number;
    };
}
/**
 * Room Timeline Data
 * Contains all timeline information for a specific room
 */
export interface RoomTimelineDetails {
    roomId: string;
    roomNumber: string;
    roomType: string;
    floor: number;
    capacity: number;
    currentStatus: string;
    blocks: TimelineBlock[];
    metadata: {
        lastCleaned?: string;
        nextMaintenance?: string;
        cleaningTime?: number;
        notes?: string;
    };
}
export type GetRoomDetailsTimelineResponse = RoomTimelineDetails;
export type GetRoomDetailsTimelineNatsResponse = NatsResponse<GetRoomDetailsTimelineResponse>;
//# sourceMappingURL=timeline-room-details.nats.d.ts.map