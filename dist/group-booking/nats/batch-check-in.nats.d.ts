/**
 * Batch Check-In NATS Contracts for Group Bookings
 *
 * NATS Patterns:
 *   group-block.bookings       — list bookings linked to a group block
 *   group-block.batch_check_in — check in multiple bookings at once
 * Handler: booking-service
 * Called by: api-gateway
 */
import { NatsResponse } from '../../common/nats-response.interface';
/**
 * NATS request to get bookings linked to a group block
 */
export interface GetGroupBlockBookingsNatsRequest {
    groupBlockId: string;
    tenantId: string;
    hotelId: string;
    status?: string;
}
/**
 * Summary of a booking linked to a group block
 */
export interface GroupBlockBookingSummary {
    id: string;
    bookingCode: string;
    guestName: string;
    guestPhone: string;
    roomTypeName: string;
    roomNumber: string | null;
    checkInDate: string;
    checkOutDate: string;
    status: string;
    totalAmount: number;
    adultCount: number;
    childCount: number;
}
export type GetGroupBlockBookingsNatsResponse = NatsResponse<GroupBlockBookingSummary[]>;
/**
 * NATS request to batch check-in multiple bookings
 */
export interface BatchCheckInNatsRequest {
    tenantId: string;
    hotelId: string;
    bookingIds: string[];
    checkedInBy: string;
    checkedInByName: string;
    notes?: string;
}
export interface BatchCheckInResult {
    total: number;
    succeeded: number;
    failed: number;
    results: {
        bookingId: string;
        bookingCode: string;
        success: boolean;
        error?: string;
    }[];
}
export type BatchCheckInNatsResponse = NatsResponse<BatchCheckInResult>;
//# sourceMappingURL=batch-check-in.nats.d.ts.map