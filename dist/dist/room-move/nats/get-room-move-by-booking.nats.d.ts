/**
 * Get Room Move By Booking NATS Contract
 *
 * NATS Pattern: room-move.get-by-booking
 * Handler: booking-service
 * Called by: api-gateway
 */
import { NatsResponse } from '../../common/nats-response.interface';
import { RoomMoveDetails } from '../types';
export declare class GetRoomMoveByBookingRequest {
    bookingId: string;
    tenantId: string;
    hotelId: string;
}
/**
 * Type-safe NATS response wrapper
 * Returns array of room moves associated with a booking
 */
export type GetRoomMoveByBookingNatsResponse = NatsResponse<RoomMoveDetails[]>;
//# sourceMappingURL=get-room-move-by-booking.nats.d.ts.map