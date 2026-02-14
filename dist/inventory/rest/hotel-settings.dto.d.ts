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