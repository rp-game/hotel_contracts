/**
 * Length of Stay (LOS) Discounts Types
 *
 * Shared types for LOS discount patterns.
 * Handles discounts based on number of nights booked.
 */
export declare class LosDiscount {
    id: string;
    tenantId: string;
    hotelId: string;
    roomTypeId?: string;
    minNights: number;
    maxNights?: number;
    discountType: 'PERCENTAGE' | 'FIXED';
    discountValue: number;
    description?: string;
    currency: string;
    validFrom?: string;
    validTo?: string;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
}
/**
 * Discount breakdown for a booking
 */
export interface DiscountBreakdown {
    originalTotal: number;
    discountType: 'PERCENTAGE' | 'FIXED';
    discountValue: number;
    discountAmount: number;
    finalTotal: number;
    nightsQualified: number;
    currency: string;
}
//# sourceMappingURL=los-discounts.types.d.ts.map