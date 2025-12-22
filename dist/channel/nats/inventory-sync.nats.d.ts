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
import { SyncHistory, TriggerSyncRequest, TriggerSyncResponse, GetSyncStatusRequest, SyncStatusResponse, GetSyncHistoryRequest, SyncHistoryListResponse, BulkSyncRequest, BulkSyncResponse, SyncFromProviderResponse } from '../types';
/**
 * Trigger Sync Request
 * Pattern: inventory.sync.trigger
 */
export type TriggerSyncNatsRequest = TriggerSyncRequest;
export type TriggerSyncNatsResponse = NatsResponse<TriggerSyncResponse>;
/**
 * Bulk Sync Request
 * Pattern: inventory.sync.bulk
 */
export type BulkSyncNatsRequest = BulkSyncRequest;
export type BulkSyncNatsResponse = NatsResponse<BulkSyncResponse>;
/**
 * Get Sync Status Request
 * Pattern: inventory.sync.status
 */
export interface GetSyncStatusNatsRequest extends GetSyncStatusRequest {
    syncId: string;
}
export type GetSyncStatusNatsResponse = NatsResponse<SyncStatusResponse>;
/**
 * Sync From Provider Request
 * Pattern: inventory.sync.from_provider
 * Matches API Gateway SyncFromProviderDto structure
 */
export interface SyncFromProviderNatsRequest {
    providerId: string;
    startDate: string;
    endDate: string;
    tenantId?: string;
    hotelId?: string;
    operation?: string;
}
export type SyncFromProviderNatsResponse = NatsResponse<SyncFromProviderResponse>;
/**
 * Get Sync History Request
 * Pattern: inventory.sync_history.get
 */
export interface GetSyncHistoryNatsRequest extends GetSyncHistoryRequest {
    providerId: string;
    tenantId?: string;
    hotelId?: string;
}
export type GetSyncHistoryNatsResponse = NatsResponse<SyncHistoryListResponse>;
/**
 * Sync history entity (for reference in responses)
 * Can be used directly when returning full history records
 */
export interface SyncHistoryRecord extends SyncHistory {
}
//# sourceMappingURL=inventory-sync.nats.d.ts.map