"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=auto-sync-price.nats.js.map