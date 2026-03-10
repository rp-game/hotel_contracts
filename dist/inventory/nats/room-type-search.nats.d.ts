/**
 * Room Type Search NATS Contract
 *
 * Pattern: inventory.room-types.search
 *
 * Returns room types with availability count + rate plans + pricing
 * for a given booking type and time range.
 *
 * Handler: inventory-service
 * Called by: api-gateway, frontend-facing services
 */
import { NatsResponse } from '../../common';
export declare enum SearchBookingType {
    OVERNIGHT = "OVERNIGHT",
    HOURLY = "HOURLY",
    DAY_USE = "DAY_USE"
}
export declare class SearchRoomTypesRequest {
    tenantId: string;
    hotelId?: string;
    hotelIds?: string[];
    bookingType: SearchBookingType;
    startDate?: string;
    endDate?: string;
    date?: string;
    startTime?: string;
    endTime?: string;
    capacity?: number;
    amenities?: string[];
    page?: number;
    limit?: number;
}
export declare class PriceBreakdownDto {
    baseAmount: number;
    seasonalAdjustment: number;
    occupancyAdjustment: number;
    lengthOfStayDiscount: number;
    promotionDiscount: number;
    taxes: number;
}
export declare class CancellationPolicySummaryDto {
    type: string;
    deadlineHours?: number;
    penaltyPercent?: number;
    description?: string;
}
export declare class RatePlanPricingDetail {
    ratePlanId: string;
    ratePlanName: string;
    mealPlan: string | null;
    paymentType: string | null;
    cancellationPolicy: CancellationPolicySummaryDto | null;
    pricePerUnit: number;
    totalPrice: number;
    numberOfUnits: number;
    breakdown: PriceBreakdownDto;
}
export declare class RoomTypeSearchResult {
    id: string;
    hotelId?: string;
    hotelName?: string;
    hotelCity?: string;
    name: string;
    description: string | null;
    capacity: number;
    numberOfBeds: number;
    amenities: string[];
    images: string[];
    basePrice: number;
    availableCount: number;
    ratePlans: RatePlanPricingDetail[];
}
export declare class SearchRoomTypesResponse {
    roomTypes: RoomTypeSearchResult[];
    total: number;
    page: number;
    limit: number;
}
export type SearchRoomTypesNatsResponse = NatsResponse<SearchRoomTypesResponse>;
//# sourceMappingURL=room-type-search.nats.d.ts.map