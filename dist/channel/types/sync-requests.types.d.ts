/**
 * Sync Request DTOs
 * Used for triggering sync operations from API Gateway
 */
import { SyncOperation } from '../enums';
/**
 * Inventory Update DTO
 * For updating single room inventory
 */
export declare class InventoryUpdateDto {
    tenantId: string;
    hotelId: string;
    roomId: string;
    date: string;
    available: number;
    restrictions?: {
        stopSell?: boolean;
        closedToArrival?: boolean;
        closedToDeparture?: boolean;
        minStay?: number;
        maxStay?: number;
    };
}
/**
 * Bulk Inventory Update DTO
 * For batch inventory updates across multiple dates
 */
export declare class BulkInventoryUpdateDto {
    tenantId: string;
    hotelId: string;
    startDate: string;
    endDate: string;
    inventoryUpdates: InventoryUpdateDto[];
    targetProviders?: string[];
}
/**
 * Rate Update DTO
 * For updating room rates
 */
export declare class RateUpdateDto {
    tenantId: string;
    hotelId: string;
    roomId: string;
    ratePlanId: string;
    date: string;
    rate: number;
    currency: string;
    rateConfig?: {
        rateBasis?: string;
        mealPlan?: string;
        cancellationPolicy?: string;
        inclusions?: string[];
    };
}
/**
 * Sync Request DTO
 * For triggering sync operations
 */
export declare class SyncRequestDto {
    operation: SyncOperation;
    tenantId: string;
    hotelId: string;
    targetProviders?: string[];
    startDate?: string;
    endDate?: string;
    parameters?: Record<string, any>;
}
/**
 * Sync From Provider DTO
 * For pulling data from external providers
 */
export declare class SyncFromProviderDto {
    providerId: string;
    startDate: string;
    endDate: string;
    tenantId?: string;
    hotelId?: string;
    operation?: SyncOperation;
}
/**
 * Promotion Sync DTO
 * For syncing promotional rates and packages
 */
export declare class PromotionSyncDto {
    tenantId: string;
    hotelId: string;
    promotionCode: string;
    bookingStartDate: string;
    bookingEndDate: string;
    stayStartDate: string;
    stayEndDate: string;
    discountPercentage: number;
    targetRoomTypes?: string[];
    targetProviders?: string[];
}
//# sourceMappingURL=sync-requests.types.d.ts.map