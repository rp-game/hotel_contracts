/**
 * Additional Services NATS Contracts
 *
 * Unified contracts for both NATS messages and REST DTOs
 * Matches database entity structure (camelCase)
 *
 * Pattern: additional-services.service.*
 * Handler: financial-service
 * Database Entity: AdditionalService (additional_services table)
 */
import { NatsResponse } from '../../common';
import { FinancialServiceStatsResponseDto, ServiceBookingResponseDto } from './service-bookings.nats';
/**
 * Financial Service Type Enum
 * Represents actual hotel service types
 */
export declare enum FinancialServiceType {
    SPA = "SPA",
    RESTAURANT = "RESTAURANT",
    LAUNDRY = "LAUNDRY",
    PARKING = "PARKING",
    TRANSPORT = "TRANSPORT",
    CONFERENCE = "CONFERENCE",
    ENTERTAINMENT = "ENTERTAINMENT",
    INTERNET = "INTERNET",
    PHONE = "PHONE",
    MINIBAR = "MINIBAR",
    OTHER = "OTHER"
}
/**
 * Pricing Type Enum
 */
export declare enum PricingType {
    FIXED = "FIXED",
    HOURLY = "HOURLY",
    DAILY = "DAILY",
    PER_PERSON = "PER_PERSON",
    VARIABLE = "VARIABLE"
}
/**
 * Financial Service Category Enum
 * Represents hotel service categories
 */
export declare enum FinancialServiceCategory {
    ROOM_SERVICE = "ROOM_SERVICE",
    FACILITY = "FACILITY",
    AMENITY = "AMENITY",
    EXTERNAL = "EXTERNAL"
}
/**
 * Additional Service Response DTO
 * Used in both NATS responses and REST API responses
 * Matches AdditionalService entity structure
 */
export declare class AdditionalServiceResponseDto {
    id: string;
    tenantId: string;
    hotelId: string;
    name: string;
    description?: string;
    serviceType: string;
    category: string;
    basePrice: number;
    taxRate: number;
    finalPrice: number;
    pricingType: string;
    requiresBooking: boolean;
    isActive: boolean;
    isAvailable: boolean;
    maxQuantity?: number | null;
    availableFrom?: string | null;
    availableTo?: string | null;
    createdAt: string;
    updatedAt: string;
}
/**
 * Create Additional Service DTO
 */
export declare class CreateAdditionalServiceDto {
    tenantId: string;
    hotelId: string;
    name: string;
    description?: string;
    serviceType: string;
    category: string;
    basePrice: number;
    taxRate?: number;
    pricingType: string;
    requiresBooking?: boolean;
    isActive?: boolean;
    isAvailable?: boolean;
    maxQuantity?: number;
    availableFrom?: string;
    availableTo?: string;
}
/**
 * Update Additional Service DTO
 */
export declare class UpdateAdditionalServiceDto {
    name?: string;
    description?: string;
    serviceType?: string;
    category?: string;
    basePrice?: number;
    taxRate?: number;
    pricingType?: string;
    requiresBooking?: boolean;
    isActive?: boolean;
    isAvailable?: boolean;
    maxQuantity?: number;
    availableFrom?: string;
    availableTo?: string;
}
/**
 * Service List Response DTO
 */
export declare class ServiceListResponseDto {
    data: AdditionalServiceResponseDto[];
    total: number;
    page: number;
    limit: number;
}
/**
 * Find All Additional Services Request DTO
 * Used for findAll, findByType, findByCategory queries
 */
export declare class FindAllAdditionalServicesRequestDto {
    tenantId?: string;
    hotelId?: string;
    serviceType?: string;
    category?: string;
    isActive?: boolean;
    isAvailable?: boolean;
    page?: number;
    limit?: number;
}
/**
 * Find One Additional Service Request DTO
 */
export declare class FindOneAdditionalServiceRequestDto {
    id: string;
    tenantId: string;
    hotelId?: string;
}
/**
 * Update Additional Service Request DTO (for NATS)
 * Combines routing info (id, tenantId, hotelId) with update fields
 */
export declare class UpdateAdditionalServiceRequestDto extends UpdateAdditionalServiceDto {
    id: string;
    tenantId: string;
    hotelId?: string;
}
/**
 * Delete Additional Service Request DTO
 */
export declare class DeleteAdditionalServiceRequestDto {
    id: string;
    tenantId: string;
    hotelId?: string;
}
/**
 * Get Service Categories Request DTO
 */
export declare class GetServiceCategoriesRequestDto {
    tenantId: string;
    hotelId?: string;
}
/**
 * Service Categories Response DTO
 */
export declare class ServiceCategoriesResponseDto {
    categories: string[];
}
/**
 * Get Service Stats Request DTO
 */
export declare class GetServiceStatsRequestDto {
    tenantId: string;
    hotelId?: string;
}
/**
 * Get Service Dashboard Request DTO
 */
export declare class GetServiceDashboardRequestDto {
    tenantId: string;
    hotelId?: string;
}
/**
 * Service Dashboard Response DTO
 */
export declare class ServiceDashboardResponseDto {
    stats: FinancialServiceStatsResponseDto;
    recentBookings?: ServiceBookingResponseDto[];
    topServices?: Array<{
        serviceId: string;
        serviceName: string;
        revenue: number;
        bookingCount: number;
    }>;
}
/**
 * NATS Response Types
 */
export type FindAllAdditionalServicesNatsResponse = NatsResponse<AdditionalServiceResponseDto[]>;
export type FindOneAdditionalServiceNatsResponse = NatsResponse<AdditionalServiceResponseDto>;
export type CreateAdditionalServiceNatsResponse = NatsResponse<AdditionalServiceResponseDto>;
export type UpdateAdditionalServiceNatsResponse = NatsResponse<AdditionalServiceResponseDto>;
export type DeleteAdditionalServiceNatsResponse = NatsResponse<{
    message: string;
    serviceId: string;
}>;
export type GetServiceCategoriesNatsResponse = NatsResponse<ServiceCategoriesResponseDto>;
export type GetServiceStatsNatsResponse = NatsResponse<FinancialServiceStatsResponseDto>;
export type GetServiceDashboardNatsResponse = NatsResponse<ServiceDashboardResponseDto>;
//# sourceMappingURL=additional-services.nats.d.ts.map