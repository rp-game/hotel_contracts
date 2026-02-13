/**
 * Pricing Domain Types
 */
import { RatePlanType, RatePlanStatus } from '../enums';
/**
 * Rate Plan entity
 */
export interface RatePlan {
    id: string;
    tenantId: string;
    hotelId: string;
    name: string;
    description?: string;
    type: RatePlanType;
    status: RatePlanStatus;
    basePrice: number;
    currency: string;
    roomTypeId: string;
    roomTypeName: string;
    validFrom: string;
    validTo: string;
    createdAt: string;
    updatedAt: string;
}
/**
 * Hourly pricing tier
 */
export interface HourlyPricingTier {
    id: string;
    tenantId: string;
    hotelId: string;
    roomTypeId: string;
    name: string;
    pricePerHour: number;
    currency: string;
    checkInTime: string;
    checkOutTime: string;
    maxStayHours: number;
    minStayHours: number;
    status: RatePlanStatus;
    validFrom: string;
    validTo: string;
    createdAt: string;
    updatedAt: string;
}
/**
 * Date-based rate definition
 */
export interface DateRate {
    id: string;
    tenantId: string;
    hotelId: string;
    ratePlanId: string;
    roomTypeId: string;
    date: string;
    pricePerNight: number;
    minStay?: number;
    maxStay?: number;
    status: 'ACTIVE' | 'BLOCKED' | 'CLOSED';
    createdAt: string;
    updatedAt: string;
}
/**
 * Price modifier (discount, surcharge)
 */
export interface PriceModifier {
    id: string;
    tenantId: string;
    hotelId: string;
    name: string;
    type: 'DISCOUNT' | 'SURCHARGE';
    value: number;
    unit: 'PERCENTAGE' | 'FIXED';
    applicableTo: 'NIGHTLY' | 'HOURLY' | 'BOTH';
    validFrom: string;
    validTo: string;
    createdAt: string;
    updatedAt: string;
}
/**
 * Create rate plan request
 */
export declare class CreateRatePlanDto {
    tenantId: string;
    hotelId: string;
    name: string;
    type: 'BASE' | 'DERIVED';
    parentRatePlanId?: string;
    derivationType?: 'PERCENTAGE' | 'AMOUNT';
    derivationValue?: number;
    description?: string;
}
/**
 * Rate plan response
 */
export declare class RatePlanResponseDto {
    id: string;
    tenantId: string;
    hotelId: string;
    name: string;
    type: 'BASE' | 'DERIVED';
    parentRatePlanId?: string;
    derivationType?: 'PERCENTAGE' | 'AMOUNT';
    derivationValue?: number;
    description?: string;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
    parentRatePlan?: RatePlanResponseDto;
    channelMappings?: ChannelRateMappingResponseDto[];
}
/**
 * Channel rate mapping response
 */
export declare class ChannelRateMappingResponseDto {
    id: string;
    ratePlanId: string;
    channelProvider: string;
    channelName: string;
    externalRateId?: string;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
}
/**
 * Calculate price response
 */
export declare class CalculatePriceResponseDto {
    ratePlanId: string;
    ratePlanName: string;
    type: 'BASE' | 'DERIVED';
    basePrice: number;
    derivationType?: 'PERCENTAGE' | 'AMOUNT';
    derivationValue?: number;
    calculatedPrice: number;
}
/**
 * Get rate plans response
 */
export declare class GetRatePlansResponseDto {
    data: RatePlanResponseDto[];
}
//# sourceMappingURL=rate-plan.types.d.ts.map