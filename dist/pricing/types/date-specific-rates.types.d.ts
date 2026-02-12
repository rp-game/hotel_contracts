/**
 * Date-Specific Rates Types
 *
 * Shared types for date-specific pricing patterns.
 * Handles special pricing for specific dates (holidays, events, etc.)
 */
/**
 * Date-specific rate entity
 */
export declare class SpecificDateRate {
    id: string;
    tenantId: string;
    hotelId: string;
    roomTypeId: string;
    date: string;
    rate: number;
    currency: string;
    notes?: string;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
}
/**
 * Single day in calendar view
 */
export declare class SpecificDateRateCalendarDay {
    date: string;
    rate?: number;
    currency?: string;
    notes?: string;
    isActive: boolean;
    hasSpecialRate: boolean;
}
/**
 * Calendar view of date rates for a room type
 */
export declare class SpecificDateRateCalendar {
    roomTypeId: string;
    startDate: string;
    endDate: string;
    dates: SpecificDateRateCalendarDay[];
}
/**
 * Bulk create result
 */
export declare class BulkCreateDateRatesResult {
    created: number;
    dates: string[];
    skipped?: number;
    errors?: string[];
}
//# sourceMappingURL=date-specific-rates.types.d.ts.map