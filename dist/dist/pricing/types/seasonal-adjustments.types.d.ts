/**
 * Seasonal Adjustments Types
 *
 * Shared types for seasonal pricing adjustment patterns.
 * Handles rate adjustments for different seasons/periods.
 */
/**
 * Seasonal adjustment entity
 */
export declare class SeasonalAdjustment {
    id: string;
    tenantId: string;
    hotelId: string;
    roomTypeId: string;
    seasonName: string;
    startDate: string;
    endDate: string;
    adjustmentType: 'PERCENTAGE' | 'FIXED';
    adjustmentValue: number;
    description?: string;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
}
/**
 * Seasonal period definition
 */
export interface SeasonalPeriod {
    name: string;
    startDate: string;
    endDate: string;
    adjustmentType: 'PERCENTAGE' | 'FIXED';
    adjustmentValue: number;
    isActive: boolean;
}
/**
 * Common seasonal periods
 */
export declare const CommonSeasonalPeriods: Record<string, Omit<SeasonalPeriod, 'isActive'>>;
//# sourceMappingURL=seasonal-adjustments.types.d.ts.map