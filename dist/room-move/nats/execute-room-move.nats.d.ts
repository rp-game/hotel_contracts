/**
 * Execute Room Move NATS Contract
 *
 * NATS Pattern: room-move.execute
 * Handler: booking-service
 * Called by: api-gateway
 * Modes: standard, mobile-start, mobile-complete, quick-transfer
 */
import { NatsResponse } from '../../common/nats-response.interface';
import { RoomMoveDetails } from '../types';
export declare class ExecuteRoomMoveRequest {
    moveRequestId: string;
    executedBy: string;
    mode?: 'standard' | 'mobile-start' | 'mobile-complete' | 'quick-transfer';
    actualDuration?: number;
    notes?: string;
    tenantId: string;
    hotelId: string;
}
/**
 * Type-safe NATS response wrapper
 */
export type ExecuteRoomMoveNatsResponse = NatsResponse<RoomMoveDetails>;
//# sourceMappingURL=execute-room-move.nats.d.ts.map