import { NatsResponse } from '../../common';
export interface PricingCalculateRequest {
    tenantId: string;
    hotelId: string;
    roomTypeId: string;
    checkInDate: string;
    checkOutDate: string;
    adultCount?: number;
    childCount?: number;
    seasonType?: string;
    includeBreakfast?: boolean;
    discountCode?: string;
    loyaltyTier?: string;
}
export interface PricingCalculateResponse extends NatsResponse {
    data?: {
        baseRate?: number;
        seasonalRate?: number;
        totalNights?: number;
        baseTotal?: number;
        discount?: number;
        tax?: number;
        finalTotal?: number;
        breakdown?: {
            date: string;
            rate: number;
            surcharges?: number;
        }[];
    };
}
export interface PricingCalculationRequest extends PricingCalculateRequest {
    metadata?: Record<string, any>;
}
export interface MovePricingCalculation {
    originalRoomRate: number;
    newRoomRate: number;
    priceDifference: number;
    remainingNights: number;
    refundAmount?: number;
    additionalChargeAmount?: number;
    currency: string;
    reason?: string;
}
//# sourceMappingURL=pricing.types.d.ts.map