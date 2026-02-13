/**
 * Rate DTOs - Centralized
 *
 * IMPORTANT: These are the SINGLE SOURCE OF TRUTH for rate-related types
 * - Used by pricing-service NATS handlers
 * - Used by API Gateway REST endpoints
 * - All classes have @ApiProperty for Swagger documentation
 *
 * @verified_date 2026-02-13
 */
/**
 * Detailed rate breakdown (weekday/weekend/extra person)
 */
export declare class RateDetailsDto {
    weekdayRate: number;
    weekendRate: number;
    extraPersonCharge: number;
}
/**
 * Room rate with availability and pricing information
 */
export declare class RoomRateDto {
    id: string | null;
    roomTypeId: string;
    roomTypeName: string;
    baseRate: number;
    currentRate: number;
    currency: string;
    availableRooms: number;
    rateDetails: RateDetailsDto;
}
/**
 * Breakdown of rate calculation components
 */
export declare class RateBreakdownDto {
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
 * Calculated rate response with full breakdown
 */
export declare class CalculatedRateDto {
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
    breakdown: RateBreakdownDto;
    adjustmentDetails: string[];
}
/**
 * Rate sync error details
 */
export declare class RateSyncErrorDto {
    channel: string;
    error: string;
}
/**
 * Rate synchronization result data
 */
export declare class SyncRatesDataDto {
    success: boolean;
    syncedChannels: string[];
    failedChannels: string[];
    syncedRates: number;
    failedRates: number;
    errors: RateSyncErrorDto[];
    lastSyncDate: string;
}
/**
 * Rate restrictions (min/max stay, advance booking, etc.)
 */
export declare class RateRestrictionsDto {
    minStay?: number;
    maxStay?: number;
    advanceBooking?: number;
    closedDates?: string[];
}
/**
 * Channel-specific rate information
 */
export declare class ChannelRateDto {
    channelName: string;
    rate: number;
    commission: number;
    isActive: boolean;
}
/**
 * Rate modifier/adjustment rule
 */
export declare class RateModifierDto {
    type: string;
    value: number;
    conditions: Record<string, any>;
}
/**
 * Complete rate details with restrictions, channels, and modifiers
 */
export declare class RateDetailsDataDto {
    id: string;
    roomTypeId: string;
    roomTypeName: string;
    rateName: string;
    rateCode: string;
    baseRate: number;
    currency: string;
    rateType: string;
    validFrom: string;
    validTo: string;
    restrictions: RateRestrictionsDto;
    channels: ChannelRateDto[];
    modifiers: RateModifierDto[];
}
/**
 * Get rates list response
 */
export declare class GetRatesResponseDto {
    tenantId: string;
    hotelId: string;
    roomTypes: RoomRateDto[];
}
/**
 * Update rate response
 */
export declare class UpdateRateResponseDto {
    data: RoomRateDto;
}
/**
 * Sync rates response
 */
export declare class SyncRatesResponseDto {
    data: SyncRatesDataDto;
}
/**
 * Rate details response
 */
export declare class RateDetailsResponseDto {
    data: RateDetailsDataDto;
}
/**
 * Create rate response
 */
export declare class CreateRateResponseDto {
    data: RoomRateDto;
}
/**
 * Bulk operation error details
 */
export declare class BulkOperationErrorDto {
    index: number;
    error: string;
}
/**
 * Bulk rates operation result
 */
export declare class BulkRatesResultDto {
    successful: number;
    failed: number;
    errors: BulkOperationErrorDto[];
    createdRates: RoomRateDto[];
}
/**
 * Bulk rates response
 */
export declare class BulkRatesResponseDto {
    data: BulkRatesResultDto;
}
/**
 * Base pricing request DTO
 */
export declare class PricingRequestBaseDto {
    tenantId: string;
    hotelId: string;
}
/**
 * Create rate request
 */
export declare class CreateRateRequestDto extends PricingRequestBaseDto {
    roomTypeId: string;
    rateName: string;
    baseRate: number;
    startDate: string;
    endDate: string;
    minRate?: number;
    maxRate?: number;
    description?: string;
    category?: string;
}
/**
 * Update rate by ID request
 */
export declare class UpdateRateByIdRequestDto extends PricingRequestBaseDto {
    rateName?: string;
    baseRate?: number;
    currency?: string;
    minRate?: number;
    maxRate?: number;
    startDate?: string;
    endDate?: string;
    description?: string;
    isActive?: boolean;
}
/**
 * Rate update item for bulk operations
 */
export declare class RateUpdateItemDto {
    rateId: string;
    changes: Partial<UpdateRateByIdRequestDto>;
}
/**
 * Bulk update rates request
 */
export declare class BulkUpdateRatesRequestDto extends PricingRequestBaseDto {
    updates: RateUpdateItemDto[];
    skipErrors?: boolean;
}
/**
 * Calculate rate request
 */
export declare class CalculateRateRequestDto extends PricingRequestBaseDto {
    roomTypeId: string;
    checkIn: string;
    checkOut: string;
    guests?: number;
    channel?: string;
    promotionCodes?: string[];
    bookingType?: 'OVERNIGHT' | 'HOURLY';
    startTime?: string;
    endTime?: string;
}
/**
 * Update rate request (for specific date)
 */
export declare class UpdateRateRequestDto extends PricingRequestBaseDto {
    roomTypeId: string;
    date: string;
    baseRate?: number;
    minRate?: number;
    maxRate?: number;
    isAvailable?: boolean;
    modifiers?: any;
}
/**
 * Sync rates with external channels request
 */
export declare class SyncRatesRequestDto extends PricingRequestBaseDto {
    roomTypeIds: string[];
    startDate: string;
    endDate: string;
    channel?: string;
    forceSync?: boolean;
}
/**
 * Bulk create rates request
 */
export declare class BulkCreateRatesRequestDto extends PricingRequestBaseDto {
    rates: Omit<CreateRateRequestDto, 'tenantId' | 'hotelId'>[];
    skipErrors?: boolean;
}
//# sourceMappingURL=rates.types.d.ts.map