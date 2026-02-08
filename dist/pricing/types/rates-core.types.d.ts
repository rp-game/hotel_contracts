/**
 * Rates Core Types
 *
 * Shared types for core rate management patterns.
 * Handles base rates, restrictions, and dynamic calculations.
 */
/**
 * Rate restriction (min stay, closed to arrival, etc.)
 */
export declare class RateRestrictionDto {
    minStay?: number;
    maxStay?: number;
    closedToArrival?: boolean;
    closedToDeparture?: boolean;
    stopSell?: boolean;
}
/**
 * Base rate entity
 */
export declare class Rate {
    id: string;
    tenantId: string;
    hotelId: string;
    roomTypeId: string;
    ratePlanId?: string;
    basePrice: number;
    startDate: string;
    endDate: string;
    currency: string;
    status: RateStatus;
    lengthOfStayRules?: RateRestrictionDto;
    extraAdultCharge?: number;
    extraChildCharge?: number;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
}
/**
 * Rate status
 */
export type RateStatus = 'ACTIVE' | 'INACTIVE' | 'ARCHIVED';
/**
 * For backward compatibility, alias RateRestrictionDto to RateRestriction
 */
export type RateRestriction = RateRestrictionDto;
/**
 * Rate history entry
 */
export interface RateHistory {
    id: string;
    rateId: string;
    previousPrice: number;
    newPrice: number;
    changedBy: string;
    changeReason?: string;
    changedAt: string;
}
/**
 * Rate breakdown details
 */
export declare class RateBreakdown {
    baseAmount: number | string;
    seasonalAdjustment: number;
    occupancyAdjustment: number;
    lengthOfStayDiscount: number;
    promotionDiscount: number;
    yieldAdjustment: number;
    advanceBookingDiscount: number;
    lastMinuteDiscount: number;
    taxes: number;
}
/**
 * Dynamic rate calculation result
 */
export declare class DynamicRateCalculation {
    tenantId: string;
    hotelId: string;
    roomTypeId: string;
    checkIn: string;
    checkOut: string;
    guests: number;
    nights: number;
    units: number;
    baseRate: number | string;
    calculatedRate: number;
    currency: string;
    breakdown: RateBreakdown;
    adjustmentDetails: string[];
}
/**
 * Tax breakdown
 */
export interface TaxBreakdown {
    taxName: string;
    taxRate: number;
    taxAmount: number;
}
/**
 * Daily rate breakdown
 */
export interface DailyRateBreakdown {
    date: string;
    rate: number;
    adjustments: RateAdjustment[];
    total: number;
}
/**
 * Rate adjustment
 */
export interface RateAdjustment {
    type: 'OCCUPANCY' | 'SEASONAL' | 'LOS' | 'PROMOTION' | 'EXTRA_PERSON' | 'MEAL_PLAN';
    value: number;
    description: string;
}
/**
 * Bulk create rates result
 */
export interface BulkCreateRatesResult {
    created: number;
    updated: number;
    failed: number;
    errors: string[];
}
/**
 * Bulk update rates result
 */
export interface BulkUpdateRatesResult {
    updated: number;
    failed: number;
    errors: string[];
}
//# sourceMappingURL=rates-core.types.d.ts.map