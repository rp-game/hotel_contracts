/**
 * Rate Plan Pricing Detail Types (Phase B)
 *
 * Manage rate_plan_pricing rows per (ratePlan × roomType × dateRange).
 * Extends pricing.rates.* namespace with split-on-conflict semantics.
 */
export declare enum RatePlanPricingSource {
    CRON = "cron",
    MANUAL = "manual"
}
export declare class RatePlanPricingItem {
    id: string;
    tenantId: string;
    hotelId: string;
    ratePlanId: string;
    roomTypeId: string;
    startDate: string;
    endDate: string;
    basePrice: number;
    mondayPrice?: number | null;
    tuesdayPrice?: number | null;
    wednesdayPrice?: number | null;
    thursdayPrice?: number | null;
    fridayPrice?: number | null;
    saturdayPrice?: number | null;
    sundayPrice?: number | null;
    occupancyRules?: any;
    lengthOfStayRules?: any;
    isActive: boolean;
    source: RatePlanPricingSource;
    createdAt: string;
    updatedAt: string;
}
export declare class ListRatePlanPricingRequest {
    tenantId: string;
    hotelId: string;
    ratePlanId: string;
    roomTypeId?: string;
    dateFrom?: string;
    dateTo?: string;
    activeOnly?: boolean;
    source?: RatePlanPricingSource;
}
export declare class ListRatePlanPricingResponse {
    items: RatePlanPricingItem[];
    total: number;
}
export declare class RatePlanPricingRangeInput {
    roomTypeId: string;
    startDate: string;
    endDate: string;
    basePrice: number;
    mondayPrice?: number | null;
    tuesdayPrice?: number | null;
    wednesdayPrice?: number | null;
    thursdayPrice?: number | null;
    fridayPrice?: number | null;
    saturdayPrice?: number | null;
    sundayPrice?: number | null;
    occupancyRules?: any;
    lengthOfStayRules?: any;
}
export declare class BulkCreateWithSplitRequest {
    tenantId: string;
    hotelId: string;
    ratePlanId: string;
    ranges: RatePlanPricingRangeInput[];
    performedBy?: string;
}
export declare class ConflictPlanRow {
    id: string;
    roomTypeId: string;
    startDate: string;
    endDate: string;
    basePrice?: number;
    newStartDate?: string;
    newEndDate?: string;
}
export declare class ConflictPlan {
    kept: ConflictPlanRow[];
    replaced: ConflictPlanRow[];
    trimmed: ConflictPlanRow[];
    created: ConflictPlanRow[];
}
export declare class BulkCreateWithSplitResponse {
    plan: ConflictPlan;
    createdItems: RatePlanPricingItem[];
}
export declare class DetectConflictsRequest {
    tenantId: string;
    ratePlanId: string;
    ranges: RatePlanPricingRangeInput[];
    excludeRowId?: string;
}
export declare class DetectConflictsResponse {
    plan: ConflictPlan;
}
export declare class UpdateRangeRequest {
    tenantId: string;
    id: string;
    expectedUpdatedAt: string;
    startDate?: string;
    endDate?: string;
    basePrice?: number;
    mondayPrice?: number | null;
    tuesdayPrice?: number | null;
    wednesdayPrice?: number | null;
    thursdayPrice?: number | null;
    fridayPrice?: number | null;
    saturdayPrice?: number | null;
    sundayPrice?: number | null;
    occupancyRules?: any;
    lengthOfStayRules?: any;
    performedBy?: string;
}
export declare class UpdateRangeResponse {
    item: RatePlanPricingItem;
    plan?: ConflictPlan;
}
export declare class SoftDeleteRangeRequest {
    tenantId: string;
    id: string;
    expectedUpdatedAt: string;
    performedBy?: string;
}
export declare class SoftDeleteRangeResponse {
    success: boolean;
}
export declare class BootstrapFromBaseRateRequest {
    tenantId: string;
    hotelId: string;
    ratePlanId: string;
    dateFrom: string;
    dateTo: string;
    skipRoomsWithPricing?: boolean;
    performedBy?: string;
}
export declare class BootstrapFromBaseRateResponse {
    rowsCreated: number;
    items: RatePlanPricingItem[];
    skippedRoomTypeIds: string[];
}
//# sourceMappingURL=rate-plan-pricing-detail.types.d.ts.map