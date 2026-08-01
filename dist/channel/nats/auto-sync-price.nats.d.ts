/**
 * Auto-sync GIÁ lên STAAH — bật/tắt theo hotel/chain, queue, sanity-check, force-sync.
 *
 * Patterns:
 * - pricing.rate-plan.price-affecting-change (event, không phải request/response — pricing-service/
 *   inventory-service emit, channel-service PriceSyncNatsController lắng nghe)
 * - channel.auto-sync-price.toggle.get
 * - channel.auto-sync-price.toggle.set
 * - channel.auto-sync-price.rate-limit-status
 * - channel.auto-sync-price.confirm
 * - channel.auto-sync-price.force-sync
 * - Danh sách job (QUEUED/PENDING_CONFIRMATION/...): tái dùng inventory.sync_history.get có sẵn
 *   (cùng bảng CMSSyncHistory), KHÔNG có pattern riêng.
 *
 * Handler: channel-service (PriceSyncNatsController → PriceSyncDebounceService)
 * Called by: api-gateway
 */
import { NatsResponse } from '../../common';
export interface GetAutoSyncPriceToggleNatsRequest {
    providerId: string;
    hotelId: string;
}
export interface AutoSyncPriceToggleStateDto {
    enabled: boolean;
    scope: 'hotel' | 'chain' | 'default';
    hasEverSyncedSuccessfully: boolean;
    consecutiveFailures: number;
}
export type GetAutoSyncPriceToggleNatsResponse = NatsResponse<AutoSyncPriceToggleStateDto>;
export interface SetAutoSyncPriceToggleNatsRequest {
    providerId: string;
    hotelId?: string;
    chainId?: string;
    enabled: boolean;
}
export type SetAutoSyncPriceToggleNatsResponse = NatsResponse<null>;
export interface GetRateLimitStatusNatsRequest {
    providerId: string;
}
export interface RateLimitStatusDto {
    used: number;
    limit: number;
    percentUsed: number;
}
export type GetRateLimitStatusNatsResponse = NatsResponse<RateLimitStatusDto>;
export interface ConfirmPendingSyncJobNatsRequest {
    syncHistoryId: string;
}
export type ConfirmPendingSyncJobNatsResponse = NatsResponse<null>;
export interface ForceSyncNowNatsRequest {
    tenantId: string;
    hotelId: string;
    providerId: string;
}
export type ForceSyncNowNatsResponse = NatsResponse<null>;
//# sourceMappingURL=auto-sync-price.nats.d.ts.map