/**
 * Extra Person Charges Types
 *
 * Shared types for extra person pricing patterns.
 * Handles additional charges when occupancy exceeds standard capacity.
 */
/**
 * Extra person charge configuration
 */
export declare class ExtraPersonCharge {
    id: string;
    tenantId: string;
    hotelId: string;
    roomTypeId: string;
    standardOccupancy: number;
    maxOccupancy: number;
    extraAdultCharge: number;
    extraChildCharge?: number;
    childMaxAge: number;
    currency: string;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
}
/**
 * Breakdown of charges for a specific booking
 */
export declare class ChargeBreakdown {
    baseRate: number;
    extraAdults: number;
    extraChildren: number;
    extraAdultCharge: number;
    extraChildCharge: number;
    totalExtraCharges: number;
    totalRate: number;
    currency: string;
}
/**
 * Create extra person charge request
 */
export declare class CreateExtraPersonChargeDto {
    tenantId: string;
    hotelId: string;
    roomTypeId: string;
    standardOccupancy: number;
    maxOccupancy: number;
    extraAdultCharge: number;
    extraChildCharge?: number;
    childMaxAge?: number;
    currency?: string;
    isActive?: boolean;
}
/**
 * Update extra person charge request
 */
export declare class UpdateExtraPersonChargeDto {
    standardOccupancy?: number;
    maxOccupancy?: number;
    extraAdultCharge?: number;
    extraChildCharge?: number;
    childMaxAge?: number;
    currency?: string;
    isActive?: boolean;
}
/**
 * Get extra person charges response
 */
export declare class GetExtraPersonChargesResponseDto {
    data: ExtraPersonCharge[];
}
//# sourceMappingURL=extra-person-charges.types.d.ts.map