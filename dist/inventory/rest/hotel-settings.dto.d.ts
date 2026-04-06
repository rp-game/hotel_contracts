/**
 * Tax Configuration DTO
 * Stores hotel-level tax settings (VAT, service charge, display mode)
 * Compounding order is always: SERVICE_CHARGE first, then VAT (Vietnam standard)
 */
export declare class TaxConfigurationDto {
    vatRate?: number;
    serviceChargeRate?: number;
    taxDisplayMode?: 'inclusive' | 'exclusive';
    priceInputMode?: 'pre_tax' | 'post_tax';
}
/**
 * Single shift time range definition
 */
export declare class ShiftTimeRangeDto {
    start: string;
    end: string;
    label?: string;
}
/**
 * Cashier Shift Configuration DTO
 * Defines shift time ranges for the hotel
 */
export declare class ShiftConfigDto {
    morning?: ShiftTimeRangeDto;
    afternoon?: ShiftTimeRangeDto;
    night?: ShiftTimeRangeDto;
}
/**
 * Hotel Operation Settings - Unified DTO for REST and NATS
 * Single source of truth for operation settings across all layers
 */
export declare class HotelOperationSettingsDto {
    checkInTime?: string;
    checkOutTime?: string;
    timezone?: string;
    currency?: string;
    defaultCleaningDuration?: number;
    gracePeriodMinutes?: number;
    autoAssignRooms?: boolean;
    hourlyBooking?: boolean;
    preferBookingMode?: 'hourly' | 'daily';
    businessHours?: {
        start: string;
        end: string;
    };
    taxConfiguration?: TaxConfigurationDto;
    shiftConfig?: ShiftConfigDto;
    isMultiWarehouse?: boolean;
    procurementMode?: string;
}
/**
 * Update Hotel Settings Request DTO
 * Used for POST /hotels/:id/settings endpoint
 * Includes both basic hotel info and operation settings
 */
export declare class UpdateHotelSettingsRequestDto {
    name?: string;
    address?: string;
    city?: string;
    country?: string;
    contactEmail?: string;
    contactPhone?: string;
    operationSettings?: HotelOperationSettingsDto;
}
/**
 * Hotel Settings Response DTO
 * Used for GET /hotels/:id/settings and POST /hotels/:id/settings responses
 * Returns complete hotel information including operation settings
 */
export declare class HotelSettingsResponseDto {
    id: string;
    name: string;
    address?: string;
    city?: string;
    country?: string;
    contactEmail?: string;
    contactPhone?: string;
    tenantId?: string;
    operationSettings?: HotelOperationSettingsDto;
    createdAt?: string;
    updatedAt?: string;
}
//# sourceMappingURL=hotel-settings.dto.d.ts.map