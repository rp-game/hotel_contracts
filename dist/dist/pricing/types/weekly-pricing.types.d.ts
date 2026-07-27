/**
 * Room Type Weekly Pricing Types (Layer 1a)
 *
 * Manage room_type_weekly_pricing rows per (hotel × room × weekStartDate).
 * Each row = 1 ISO week (Mon→Sun). DOW override stored as JSONB { "1".."7": price }.
 *
 * NATS namespace: pricing.weekly.*
 * REST base path: /pricing/weekly
 */
export declare enum WeeklyPricingSource {
    CRON = "cron",
    MANUAL = "manual"
}
export type DowOverrides = Record<'1' | '2' | '3' | '4' | '5' | '6' | '7', number>;
export declare class WeeklyPricingItem {
    id: string;
    tenantId: string;
    hotelId: string;
    roomTypeId: string;
    startDate: string;
    price: number;
    overrides?: Partial<DowOverrides> | null;
    currency: string;
    source: WeeklyPricingSource;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
    createdBy?: string | null;
    updatedBy?: string | null;
}
export declare class ListWeeklyRequest {
    tenantId: string;
    hotelId: string;
    roomTypeId: string;
    dateFrom: string;
    dateTo: string;
    ratePlanId?: string;
}
export declare class ListWeeklyResponse {
    items: WeeklyPricingItem[];
}
export declare class UpsertWeekRequest {
    tenantId: string;
    hotelId: string;
    roomTypeId: string;
    startDate: string;
    price: number;
    overrides?: Partial<DowOverrides> | null;
    expectedUpdatedAt?: string;
    updatedBy?: string;
    ratePlanId?: string;
}
export declare class UpsertWeekResponse {
    item: WeeklyPricingItem;
}
export declare class PreviewRepeatTarget {
    weekStart: string;
    exists: boolean;
    hasOverrides: boolean;
    currentPrice?: number | null;
}
export declare class PreviewRepeatRequest {
    tenantId: string;
    hotelId: string;
    roomTypeId: string;
    sourceWeekStart: string;
    weeksToCopy: number;
}
export declare class PreviewRepeatResponse {
    source: WeeklyPricingItem;
    targets: PreviewRepeatTarget[];
}
export declare class ExecuteRepeatRequest {
    tenantId: string;
    hotelId: string;
    roomTypeId: string;
    sourceWeekStart: string;
    weeksToCopy: number;
    decisions: Record<string, 'overwrite' | 'skip'>;
    updatedBy?: string;
}
export declare class ExecuteRepeatResponse {
    created: number;
    overwritten: number;
    skipped: number;
}
export declare class SoftDeleteWeekRequest {
    id: string;
    tenantId: string;
    expectedUpdatedAt: string;
}
export declare class SoftDeleteWeekResponse {
    success: boolean;
}
export declare class BulkSetWeekRoom {
    roomTypeId: string;
    price: number;
    overrides?: Partial<DowOverrides> | null;
}
export declare class BulkSetWeekRequest {
    tenantId: string;
    hotelId: string;
    startDate: string;
    rooms: BulkSetWeekRoom[];
    updatedBy?: string;
}
export declare class BulkSetWeekResponse {
    upserted: number;
}
export declare class BootstrapFromBaseRateRequest {
    tenantId: string;
    hotelId: string;
    weeksForward?: number;
    skipExistingWeeks?: boolean;
    updatedBy?: string;
}
export declare class BootstrapFromBaseRateResponse {
    created: number;
    skippedRooms: string[];
}
//# sourceMappingURL=weekly-pricing.types.d.ts.map