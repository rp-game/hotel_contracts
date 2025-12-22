/**
 * Advanced Rate Synchronization NATS Contracts
 *
 * Patterns:
 * - rates.sync.trigger
 * - rates.promotions.sync
 * - rates.dynamic.sync
 *
 * Handler: channel-service (ProvidersNatsController)
 * Called by: pricing-service, api-gateway
 */

import { NatsResponse } from '../../common';

/**
 * Trigger Rate Sync Request
 * Pattern: rates.sync.trigger
 *
 * Manually triggers rate synchronization to external channels
 * for a specific hotel, room, and date.
 *
 * Request fields:
 * - hotelId: string (required)
 * - roomId: string (required)
 * - date: string (required)
 * - rates?: {rate?: number, currency?: string} (optional)
 *
 * Response: {message: string} ("Rates synced successfully")
 */
export interface TriggerRateSyncNatsRequest {
  hotelId: string;
  roomId: string;
  date: string;
  rates?: {
    rate?: number;
    currency?: string;
  };
}

export interface RateSyncResult {
  message: string;
}

export type TriggerRateSyncNatsResponse = NatsResponse<RateSyncResult>;

/**
 * Sync Promotion Request
 * Pattern: rates.promotions.sync
 *
 * Syncs promotional rates/offers to external channels.
 *
 * Request fields:
 * - promotionCode: string (required)
 * - hotelId: string (required)
 * - [key: string]: any (additional promotion fields allowed)
 *
 * Response: {message: string} ("Promotion synced successfully")
 */
export interface SyncPromotionNatsRequest {
  promotionCode: string;
  hotelId: string;
  [key: string]: any;
}

export interface PromotionSyncResult {
  message: string;
}

export type SyncPromotionNatsResponse = NatsResponse<PromotionSyncResult>;

/**
 * Sync Dynamic Rates Request
 * Pattern: rates.dynamic.sync
 *
 * Syncs dynamically calculated rates to external channels.
 *
 * Request fields:
 * - hotelId: string (required)
 * - [key: string]: any (additional dynamic rate fields allowed)
 *
 * Response: {message: string} ("Dynamic rates synced successfully")
 */
export interface SyncDynamicRatesNatsRequest {
  hotelId: string;
  [key: string]: any;
}

export interface DynamicRateSyncResult {
  message: string;
}

export type SyncDynamicRatesNatsResponse = NatsResponse<DynamicRateSyncResult>;
