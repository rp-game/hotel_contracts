/**
 * Sync History Type Definitions
 *
 * Matches the CMSSyncHistory entity structure
 */

import { SyncOperation, SyncDirection, SyncTrigger, SyncStatus } from '../enums';

/**
 * Sync error details (JSONB field)
 */
export interface SyncErrorDetails {
  last_error?: string;
  error_count?: number;
  last_error_at?: string;
  [key: string]: any;
}

/**
 * Sync metadata (JSONB field)
 */
export interface SyncMetadata {
  durationMs?: number;
  apiCallsMade?: number;
  rateLimitHits?: number;
  retryAttempts?: number;
  dataSizeBytes?: number;
  affectedRooms?: string[];
  affectedRates?: string[];
  dateRange?: {
    startDate: string;
    endDate: string;
  };
  [key: string]: any;
}

/**
 * Sync history entity
 */
export interface SyncHistory {
  id: string;
  providerId: string;
  tenantId: string;
  hotelId?: string; // Optional for chain-level syncs
  operation: SyncOperation;
  direction: SyncDirection;
  trigger: SyncTrigger;
  syncDate: string | Date;
  startedAt: string | Date;
  completedAt?: string | Date;
  status: SyncStatus | string; // Can be enum or string value
  recordsProcessed: number;
  recordsSuccessful: number;
  recordsFailed: number;
  externalSyncId?: string;
  requestPayload?: Record<string, any>;
  responseData?: Record<string, any>;
  errorMessage?: string;
  errorDetails?: SyncErrorDetails;
  metadata?: SyncMetadata;
  createdAt: string | Date;
  updatedAt: string | Date;
}

/**
 * Inventory restrictions (JSONB)
 */
export interface InventoryRestrictions {
  stopSell?: boolean;
  closedToArrival?: boolean;
  closedToDeparture?: boolean;
  minStay?: number;
  maxStay?: number;
}

/**
 * Trigger sync request - Single inventory update
 * Matches InventoryUpdateDto from channel-service DTOs
 */
export interface TriggerSyncRequest {
  tenantId: string;
  hotelId: string;
  roomId: string;
  date: string; // YYYY-MM-DD
  available: number;
  rate?: number;
  currency?: string;
  restrictions?: InventoryRestrictions;
}

/**
 * Get sync status request
 */
export interface GetSyncStatusRequest {
  syncId: string;
}

/**
 * Sync status response
 */
export interface SyncStatusResponse {
  syncId: string;
  status: SyncStatus;
  progress?: number; // 0-100
  startedAt: string;
  completedAt?: string;
  recordsProcessed: number;
  recordsSuccessful: number;
  recordsFailed: number;
  message?: string;
}

/**
 * Get sync history request
 */
export interface GetSyncHistoryRequest {
  providerId: string;
  tenantId?: string;
  hotelId?: string;
  limit?: number;
  offset?: number;
  operation?: SyncOperation;
  status?: SyncStatus;
}

/**
 * Sync history list response
 */
export interface SyncHistoryListResponse {
  history: SyncHistory[];
  total: number;
}

/**
 * Trigger sync response - returns message string
 */
export type TriggerSyncResponse = string;

/**
 * Sync from provider response - returns message string
 */
export type SyncFromProviderResponse = string;

/**
 * Bulk sync request
 */
export interface BulkSyncRequest {
  tenantId: string;
  hotelId: string;
  updates: Array<{
    tenantId: string;
    hotelId: string;
    roomId: string;
    date: string;
    available: number;
    rate?: number;
    currency?: string;
    restrictions?: InventoryRestrictions;
  }>;
  startDate: string;
  endDate: string;
}

/**
 * Bulk sync response - returns message string
 */
export type BulkSyncResponse = string;
