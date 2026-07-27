/**
 * Emergency Room Move NATS Contract
 *
 * NATS Pattern: room-move.emergency
 * Handler: booking-service
 * Called by: api-gateway
 * Priority: Always URGENT for emergency moves
 */
import { NatsResponse } from '../../common/nats-response.interface';
import { RoomMoveDetails } from '../types';
export declare class EmergencyRoomMoveRequest {
    bookingId: string;
    currentRoomId: string;
    reason: string;
    requestedBy: string;
    emergencyType?: 'guest-complaint' | 'maintenance-issue' | 'safety-hazard' | 'other';
    notes?: string;
    tenantId: string;
    hotelId: string;
}
/**
 * Type-safe NATS response wrapper
 */
export type EmergencyRoomMoveNatsResponse = NatsResponse<RoomMoveDetails>;
//# sourceMappingURL=emergency-room-move.nats.d.ts.map