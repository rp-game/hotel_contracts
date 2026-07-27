/**
 * Room Type Base Rates Types
 *
 * Shared types for room type base rate patterns.
 * Foundation layer - simple base pricing per room type.
 */
/**
 * Room type base rate entity
 */
export declare class RoomTypeBaseRate {
    id: string;
    tenantId: string;
    hotelId: string;
    roomTypeId: string;
    baseRate: number;
    weekdayRate?: number;
    weekendRate?: number;
    hourlyRate?: number;
    useWeekdayWeekend: boolean;
    currency: string;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
}
/**
 * Rate by day of week
 */
export interface RateByDay {
    monday: number;
    tuesday: number;
    wednesday: number;
    thursday: number;
    friday: number;
    saturday: number;
    sunday: number;
}
/**
 * Bulk upsert result
 */
export interface BulkUpsertBaseRatesResult {
    upserted: number;
    failed: number;
    errors: string[];
    rates: RoomTypeBaseRate[];
}
/**
 * Get room type base rates response
 */
export declare class GetRoomTypeBaseRatesResponseDto {
    data: RoomTypeBaseRate[];
}
/**
 * Upsert room type base rate response
 */
export declare class UpsertRoomTypeBaseRateResponseDto {
    data: RoomTypeBaseRate;
}
/**
 * Bulk upsert room type base rates response
 */
export declare class BulkUpsertRoomTypeBaseRatesResponseDto {
    data: RoomTypeBaseRate[];
}
/**
 * Upsert room type base rate request
 */
export declare class UpsertRoomTypeBaseRateRequestDto {
    baseRate?: number;
    weekdayRate?: number;
    weekendRate?: number;
    useWeekdayWeekend?: boolean;
    hourlyRate?: number;
    currency?: string;
    isActive?: boolean;
}
/**
 * Room type base rate item for bulk operations
 */
export declare class RoomTypeBaseRateItemDto {
    roomTypeId: string;
    baseRate: number;
    currency?: string;
}
/**
 * Bulk upsert room type base rates request
 */
export declare class BulkUpsertRoomTypeBaseRatesRequestDto {
    rates: RoomTypeBaseRateItemDto[];
}
//# sourceMappingURL=room-type-base-rates.types.d.ts.map