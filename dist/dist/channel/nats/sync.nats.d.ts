/**
 * Sync Operations Control NATS Contracts
 *
 * Patterns:
 * - inventory.sync.cancel
 * - inventory.sync.retry
 *
 * Handler: channel-service (InventorySyncNatsController)
 * Called by: api-gateway
 */
import { NatsResponse } from '../../common';
import { SyncResponseDto } from '../types';
/**
 * Cancel Sync Operation Request
 * Pattern: inventory.sync.cancel
 *
 * Cancels an in-progress or pending sync operation
 * Response: CancelSyncResponse with cancellation details
 */
export interface CancelSyncNatsRequest {
    syncId: string;
    tenantId: string;
    hotelId: string;
    reason?: string;
}
export interface CancelSyncResponse {
    syncId: string;
    status: string;
    message: string;
    messageVi?: string;
    cancelledAt: Date;
}
export type CancelSyncNatsResponse = NatsResponse<CancelSyncResponse>;
/**
 * Retry Sync Operation Request
 * Pattern: inventory.sync.retry
 *
 * Retries a previously failed sync operation with the same parameters
 * Response: SyncResponseDto with new sync details
 */
export interface RetrySyncNatsRequest {
    syncId: string;
    tenantId: string;
    hotelId: string;
}
export type RetrySyncNatsResponse = NatsResponse<SyncResponseDto>;
//# sourceMappingURL=sync.nats.d.ts.map