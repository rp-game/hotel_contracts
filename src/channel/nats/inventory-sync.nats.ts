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
import { SyncOperation } from '../enums';
import {
  SyncHistory,
  TriggerSyncRequest,
  TriggerSyncResponse,
  GetSyncStatusRequest,
  SyncStatusResponse,
  GetSyncHistoryRequest,
  SyncHistoryListResponse,
  BulkSyncRequest,
  BulkSyncResponse,
  SyncFromProviderResponse,
  GetRoomMappingsResponse,
  GetRateMappingsResponse,
  DeleteMappingResponse,
  RoomMapping,
  RateMapping,
} from '../types';

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
 */
export interface SyncFromProviderNatsRequest {
  providerId: string;
  tenantId: string;
  hotelId?: string;
  startDate: string; // YYYY-MM-DD
  endDate: string; // YYYY-MM-DD
  syncType?: 'AVAILABILITY' | 'RATES' | 'BOOKINGS' | 'ALL';
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
  // All fields inherited from SyncHistory
}
