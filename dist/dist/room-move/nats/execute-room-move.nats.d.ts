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
    executedByName?: string;
    mode?: 'standard' | 'mobile-start' | 'mobile-complete' | 'quick-transfer';
    moveCompleted?: boolean;
    actualMoveStartTime?: string;
    actualMoveEndTime?: string;
    actualDuration?: number;
    guestSatisfied?: boolean;
    satisfactionRating?: number;
    guestFeedback?: string;
    keyCardsGenerated?: boolean;
    housekeepingNotified?: boolean;
    notes?: string;
    porterId?: string;
    porterName?: string;
    luggageTransferred?: boolean;
    luggageTransferNotes?: string;
    transferredItems?: string[];
    roomInspectionCompleted?: boolean;
    roomInspectionNotes?: string;
    roomIssues?: string[];
    completionNotes?: string;
    issuesEncountered?: string[];
    followUpRequired?: boolean;
    chargesApplied?: boolean;
    appliedCharges?: number;
    refundProcessed?: boolean;
    refundAmount?: number;
    tenantId: string;
    hotelId: string;
}
/**
 * Type-safe NATS response wrapper
 */
export type ExecuteRoomMoveNatsResponse = NatsResponse<RoomMoveDetails>;
//# sourceMappingURL=execute-room-move.nats.d.ts.map