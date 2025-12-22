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
 * Matches API Gateway RateUpdateDto structure (flat, not nested)
 *
 * Response: {message: string} ("Rates synced successfully")
 */
export interface TriggerRateSyncNatsRequest {
  tenantId: string;       // Added to match API Gateway DTO
  hotelId: string;
  roomId: string;
  ratePlanId: string;     // Added to match API Gateway DTO
  date: string;
  rate: number;           // Flattened from nested rates object
  currency: string;       // Flattened from nested rates object
  rateConfig?: {          // Added to match API Gateway DTO
    rateBasis?: string;
    mealPlan?: string;
    cancellationPolicy?: string;
    inclusions?: string[];
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
 * Matches API Gateway PromotionSyncDto structure
 *
 * Response: {message: string} ("Promotion synced successfully")
 */
export interface SyncPromotionNatsRequest {
  tenantId: string;
  hotelId: string;
  promotionCode: string;
  bookingStartDate: string;  // YYYY-MM-DD
  bookingEndDate: string;    // YYYY-MM-DD
  stayStartDate: string;     // YYYY-MM-DD
  stayEndDate: string;       // YYYY-MM-DD
  discountPercent: number;   // 0-100
  restrictions?: {
    minStay?: number;
    advanceBooking?: number;
    nonRefundable?: boolean;
    applicableRoomTypes?: string[];
  };
  targetProviders?: string[];
}

export interface PromotionSyncResult {
  message: string;
}

export type SyncPromotionNatsResponse = NatsResponse<PromotionSyncResult>;

/**
 * Sync Dynamic Rates Request
 * Pattern: rates.dynamic.sync
 *
 * Matches API Gateway SyncRequestDto structure
 *
 * Response: {message: string} ("Dynamic rates synced successfully")
 */
export interface SyncDynamicRatesNatsRequest {
  operation: string;  // SyncOperation enum from API Gateway
  tenantId: string;
  hotelId: string;
  targetProviders?: string[];
  startDate?: string;  // YYYY-MM-DD
  endDate?: string;    // YYYY-MM-DD
  parameters?: Record<string, any>;
}

export interface DynamicRateSyncResult {
  message: string;
}

export type SyncDynamicRatesNatsResponse = NatsResponse<DynamicRateSyncResult>;
