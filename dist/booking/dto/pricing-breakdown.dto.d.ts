export declare class PricingBreakdownDetailDto {
    baseAmount: number;
    seasonalAdjustment: number;
    seasonalAdjustmentPercent: number;
    advanceBookingDiscount: number;
    advanceBookingDiscountPercent: number;
    lengthOfStayDiscount: number;
    lengthOfStayDiscountPercent: number;
    promotionDiscount?: number;
    promotionDiscountPercent?: number;
    occupancyAdjustment?: number;
    yieldAdjustment?: number;
}
export declare class PricingBreakdownDto {
    baseRate: number;
    nights: number;
    appliedRules: string[];
    breakdown: PricingBreakdownDetailDto;
    finalPrice: number;
    calculatedAt: Date;
}
export declare class BookingPricingBreakdownResponseDto {
    bookingId: string;
    roomTypeId: string;
    checkInDate: string;
    checkOutDate: string;
    nights: number;
    rules: {
        seasonal: {
            applied: boolean;
            adjustmentAmount: number;
            adjustmentPercent: number;
        };
        advanceBooking: {
            applied: boolean;
            daysAdvance: number;
            discountAmount: number;
            discountPercent: number;
        };
        lengthOfStay: {
            applied: boolean;
            nights: number;
            discountAmount: number;
            discountPercent: number;
        };
    };
    calculation: {
        step1_baseRate: number;
        step2_afterSeasonal: number;
        step3_afterAdvance: number;
        step4_afterLOS: number;
        step5_total: number;
    };
    finalPrice: number;
    priceValidatedAt: Date;
}
//# sourceMappingURL=pricing-breakdown.dto.d.ts.map