import { NatsResponse } from '../../common/nats-response.interface';
import { RoomMoveDetails } from '../types';
/**
 * Execute Room Move Request
 * Pattern: room-move.execute
 * Handler: booking-service
 * Modes: standard, mobile-start, mobile-complete, quick-transfer
 */
export interface ExecuteRoomMoveRequest {
    moveRequestId: string;
    executedBy: string;
    mode?: 'standard' | 'mobile-start' | 'mobile-complete' | 'quick-transfer';
    actualDuration?: number;
    notes?: string;
    tenantId: string;
    hotelId: string;
}
/**
 * Execute Room Move Response
 */
export interface ExecuteRoomMoveNatsResponse extends NatsResponse<RoomMoveDetails> {
}
//# sourceMappingURL=execute-room-move.nats.d.ts.map