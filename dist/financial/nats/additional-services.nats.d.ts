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
 * Delete Additional Service Request DTO
 */
export declare class DeleteAdditionalServiceRequestDto {
    id: string;
    tenantId: string;
    hotelId?: string;
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
//# sourceMappingURL=additional-services.nats.d.ts.map