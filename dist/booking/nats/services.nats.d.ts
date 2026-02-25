/**
 * Booking Services NATS Contracts
 *
 * Patterns:
 * - services.find_all
 * - services.find_one
 * - services.create
 * - services.update
 * - services.remove
 * - services.stats
 * - services.check_availability
 *
 * Handler: booking-service (ServiceBookingController)
 * Called by: api-gateway (GuestServicesController)
 */
import { NatsResponse, TenantHotelQueryDto } from '../../common';
/**
 * Service Category Enum
 */
export declare enum ServiceCategory {
    SPA = "SPA",
    FITNESS = "FITNESS",
    DINING = "DINING",
    ENTERTAINMENT = "ENTERTAINMENT",
    TRANSPORT = "TRANSPORT",
    BUSINESS = "BUSINESS",
    WELLNESS = "WELLNESS",
    TOURS = "TOURS",
    OTHER = "OTHER"
}
/**
 * Booking Service Status Enum
 */
export declare enum BookingServiceStatus {
    ACTIVE = "ACTIVE",
    INACTIVE = "INACTIVE",
    ARCHIVED = "ARCHIVED"
}
/**
 * Booking Service Response (matches Service entity)
 */
export declare class BookingServiceNatsResponse {
    id: string;
    tenantId: string;
    hotelId: string;
    name: string;
    description?: string;
    category: ServiceCategory;
    status: BookingServiceStatus;
    basePrice: number;
    currency: string;
    durationMinutes: number;
    maxCapacity: number;
    advanceBookingHours: number;
    cancellationHours: number;
    requiresApproval: boolean;
    availableDays?: number[];
    operatingHours?: {
        start: string;
        end: string;
    };
    location?: string;
    staffRequired: number;
    equipmentNeeded?: string;
    specialInstructions?: string;
    createdAt: string | Date;
    updatedAt: string | Date;
}
/**
 * Create Service Request
 * Pattern: services.create
 */
export declare class CreateServiceNatsRequest {
    tenantId: string;
    hotelId: string;
    name: string;
    description?: string;
    category: ServiceCategory;
    basePrice: number;
    currency?: string;
    durationMinutes?: number;
    maxCapacity?: number;
    advanceBookingHours?: number;
    cancellationHours?: number;
    requiresApproval?: boolean;
    availableDays?: number[];
    operatingHours?: {
        start: string;
        end: string;
    };
    location?: string;
    staffRequired?: number;
    equipmentNeeded?: string;
    specialInstructions?: string;
    status?: BookingServiceStatus;
}
export type CreateServiceNatsResponse = NatsResponse<BookingServiceNatsResponse>;
/**
 * Find All Services Request
 * Pattern: services.find_all
 *
 * UNIFIED CONTRACT - Used by both NATS handlers and REST API (api-gateway @Query())
 * @standardized 2026-02-25
 */
export declare class FindAllServicesNatsRequest {
    tenantId: string;
    hotelId: string;
    category?: ServiceCategory;
    available?: boolean;
    status?: BookingServiceStatus;
    page?: number;
    limit?: number;
}
/**
 * Find All Services Response (paginated)
 */
export declare class FindAllServicesData {
    data: BookingServiceNatsResponse[];
    total: number;
    page: number;
    limit: number;
    totalPages: number;
}
export type FindAllServicesNatsResponse = NatsResponse<FindAllServicesData>;
/**
 * Find One Service Request
 * Pattern: services.find_one
 */
export declare class FindOneServiceNatsRequest {
    tenantId: string;
    hotelId: string;
    serviceId: string;
}
export type FindOneServiceNatsResponse = NatsResponse<BookingServiceNatsResponse>;
/**
 * Update Service Request
 * Pattern: services.update
 */
export declare class UpdateServiceNatsRequest {
    tenantId: string;
    hotelId: string;
    serviceId: string;
    updateData: Partial<CreateServiceNatsRequest>;
}
export type UpdateServiceNatsResponse = NatsResponse<BookingServiceNatsResponse>;
/**
 * Delete Service Request
 * Pattern: services.remove
 */
export declare class DeleteServiceNatsRequest {
    tenantId: string;
    hotelId: string;
    serviceId: string;
}
export declare class DeleteServiceData {
    success: boolean;
    message: string;
}
export type DeleteServiceNatsResponse = NatsResponse<DeleteServiceData>;
/**
 * Booking Service Statistics Response
 */
export declare class BookingServiceStatsData {
    totalServices: number;
    activeServices: number;
    inactiveServices: number;
    archivedServices: number;
    byCategory: Record<ServiceCategory, number>;
    totalBookings?: number;
    totalRevenue?: number;
    averageRating?: number;
}
/**
 * Get Booking Service Stats Request
 * Pattern: services.stats
 */
export declare class GetBookingServiceStatsNatsRequest extends TenantHotelQueryDto {
}
export type GetBookingServiceStatsNatsResponse = NatsResponse<BookingServiceStatsData>;
/**
 * Check Service Availability Request
 * Pattern: services.check_availability
 */
export declare class CheckServiceAvailabilityNatsRequest {
    tenantId: string;
    hotelId: string;
    serviceId: string;
    date: string;
    time?: string;
    numberOfGuests?: number;
}
/**
 * Service Availability Response
 */
export declare class ServiceAvailabilityData {
    available: boolean;
    reason?: string;
    nextAvailableSlot?: {
        date: string;
        time: string;
    };
    capacityRemaining?: number;
}
export type CheckServiceAvailabilityNatsResponse = NatsResponse<ServiceAvailabilityData>;
//# sourceMappingURL=services.nats.d.ts.map