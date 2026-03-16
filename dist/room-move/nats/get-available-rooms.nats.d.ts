/**
 * Get Available Rooms NATS Contract
 *
 * NATS Pattern: room-move.get-available-rooms
 * Handler: booking-service
 * Called by: api-gateway
 */
import { NatsResponse } from '../../common/nats-response.interface';
import { AvailableRoom } from '../types';
export declare class GetAvailableRoomsRequest {
    bookingId: string;
    tenantId: string;
    hotelId: string;
    moveType?: string;
    maxRateDifference?: number;
    limit?: number;
    emergency?: boolean;
}
/**
 * Type-safe NATS response wrapper
 */
export type GetAvailableRoomsNatsResponse = NatsResponse<AvailableRoom[]>;
//# sourceMappingURL=get-available-rooms.nats.d.ts.map