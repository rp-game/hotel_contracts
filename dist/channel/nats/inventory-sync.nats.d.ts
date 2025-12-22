/**
 * Inventory Synchronization NATS Contracts
 *
 * Patterns:
 * - inventory.sync.trigger
 * - inventory.sync.bulk
 * - inventory.sync.status
 * - inventory.sync.from_provider
 * - inventory.sync_history.get
 *
 * Handler: channel-service (InventorySyncNatsController)
 * Called by: api-gateway
 */
import { NatsResponse } from '../../common';
import { SyncHistory, TriggerSyncRequest, GetSyncStatusRequest, GetSyncHistoryRequest, BulkSyncRequest, SyncResponseDto, SyncStatusDto, SyncHistoryListResponseDto } from '../types';
/**
 * Trigger Sync Request
 * Pattern: inventory.sync.trigger
 *
 * Response: SyncResponseDto with syncId, status, timestamps, record counts
 */
export type TriggerSyncNatsRequest = TriggerSyncRequest;
export type TriggerSyncNatsResponse = NatsResponse<SyncResponseDto>;
/**
 * Bulk Sync Request
 * Pattern: inventory.sync.bulk
 *
 * Response: SyncResponseDto with syncId, status, timestamps, record counts
 */
export type BulkSyncNatsRequest = BulkSyncRequest;
export type BulkSyncNatsResponse = NatsResponse<SyncResponseDto>;
/**
 * Get Sync Status Request
 * Pattern: inventory.sync.status
 *
 * Response: SyncStatusDto with full sync status details including operation, direction
 */
export interface GetSyncStatusNatsRequest extends GetSyncStatusRequest {
    syncId: string;
}
export type GetSyncStatusNatsResponse = NatsResponse<SyncStatusDto>;
/**
 * Sync From Provider Request
 * Pattern: inventory.sync.from_provider
 * Matches API Gateway SyncFromProviderDto structure
 *
 * Response: SyncResponseDto with syncId, status, timestamps, record counts
 */
export interface SyncFromProviderNatsRequest {
    providerId: string;
    startDate: string;
    endDate: string;
    tenantId?: string;
    hotelId?: string;
    operation?: string;
}
export type SyncFromProviderNatsResponse = NatsResponse<SyncResponseDto>;
/**
 * Get Sync History Request
 * Pattern: inventory.sync_history.get
 *
 * Response: SyncHistoryListResponseDto with history[], total, page, limit, totalPages
 */
export interface GetSyncHistoryNatsRequest extends GetSyncHistoryRequest {
    providerId?: string;
    tenantId?: string;
    hotelId?: string;
}
export type GetSyncHistoryNatsResponse = NatsResponse<SyncHistoryListResponseDto>;
/**
 * Sync history entity (for reference in responses)
 * Can be used directly when returning full history records
 */
export interface SyncHistoryRecord extends SyncHistory {
}
//# sourceMappingURL=inventory-sync.nats.d.ts.map