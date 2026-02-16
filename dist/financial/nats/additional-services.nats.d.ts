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
 */
export declare enum FinancialServiceType {
    ONE_TIME = "ONE_TIME",
    RECURRING = "RECURRING",
    ON_DEMAND = "ON_DEMAND"
}
/**
 * Pricing Type Enum
 */
export declare enum PricingType {
    FIXED = "FIXED",
    HOURLY = "HOURLY",
    DAILY = "DAILY",
    PACKAGE = "PACKAGE"
}
/**
 * Financial Service Category Enum
 */
export declare enum FinancialServiceCategory {
    ROOM_SERVICE = "ROOM_SERVICE",
    SPA_WELLNESS = "SPA_WELLNESS",
    TRANSPORTATION = "TRANSPORTATION",
    FOOD_BEVERAGE = "FOOD_BEVERAGE",
    LAUNDRY_CLEANING = "LAUNDRY_CLEANING",
    BUSINESS_SERVICES = "BUSINESS_SERVICES",
    ENTERTAINMENT = "ENTERTAINMENT",
    CONCIERGE = "CONCIERGE",
    PET_SERVICES = "PET_SERVICES",
    OTHER = "OTHER"
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
 */
export declare class FindAllAdditionalServicesRequestDto {
    tenantId: string;
    hotelId?: string;
    category?: string;
    isActive?: boolean;
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
export type FindAllAdditionalServicesNatsResponse = NatsResponse<ServiceListResponseDto>;
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