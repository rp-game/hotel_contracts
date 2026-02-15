/**
 * Tenant NATS Contracts
 *
 * Patterns:
 * - tenants.findById
 *
 * Handler: user-service (TenantsNatsController)
 * Called by: api-gateway (TenantGuard, HotelChainsService)
 */
import { NatsResponse } from '../../common';
import { TenantType } from '../types/tenant.types';
/**
 * Hotel Operation Settings
 */
export interface HotelOperationSettings {
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
 * Tenant Data
 */
export interface Tenant {
    id: string;
    name: string;
    slug: string;
    type: TenantType;
    parentId: string | null;
    isActive: boolean;
    description: string | null;
    hotels: string[] | null;
    chainId?: string;
    address: string | null;
    city: string | null;
    country: string | null;
    contactEmail: string | null;
    contactPhone: string | null;
    operationSettings: HotelOperationSettings | null;
    createdAt: Date;
    updatedAt: Date;
}
/**
 * Find Tenant By ID Request
 * Pattern: tenants.findById
 *
 * Find a single tenant by ID
 */
export interface FindTenantByIdNatsRequest {
    id: string;
}
export type FindTenantByIdNatsResponse = NatsResponse<Tenant>;
/**
 * Find Tenant Request (alias for FindTenantByIdNatsRequest)
 * Pattern: tenants.findById
 */
export interface FindTenantRequestDto {
    id: string;
}
/**
 * Get Tenant Settings Request
 * Pattern: tenants.settings.get
 */
export interface GetTenantSettingsRequestDto {
    tenantId?: string;
    hotelId: string;
}
/**
 * Update Tenant Settings Request
 * Pattern: tenants.settings.update
 */
export interface UpdateTenantSettingsRequestDto {
    hotelId: string;
    settings: Partial<HotelOperationSettings>;
}
/**
 * Update Hotel Settings Payload (Hotel-focused settings update)
 * Pattern: tenants.settings.update
 */
export interface UpdateHotelSettingsPayload {
    hotelId: string;
    settings: {
        checkInTime?: string;
        checkOutTime?: string;
        timezone?: string;
        currency?: string;
        defaultCleaningDuration?: number;
        gracePeriodMinutes?: number;
        autoAssignRooms?: boolean;
        businessHours?: {
            start: string;
            end: string;
        };
    };
}
/**
 * Update Settings Payload
 * Pattern: tenants.updateSettings
 */
export interface UpdateSettingsPayload {
    id: string;
    settings: object;
}
/**
 * Get Settings Payload
 * Pattern: tenants.getSettings
 */
export interface GetSettingsPayload {
    id: string;
}
/**
 * Find All Tenants Request
 * Pattern: tenants.findAll
 */
export interface FindAllTenantsRequestDto {
    filters?: {
        type?: string;
    };
}
/**
 * Find Tenant By Slug Request
 * Pattern: tenant.findBySlug
 */
export interface FindTenantBySlugNatsRequest {
    slug: string;
}
export type FindTenantBySlugNatsResponse = NatsResponse<Tenant>;
/**
 * Create Tenant Request (Class-based for both REST and NATS)
 * Pattern: tenants.create
 * Used by: REST API (@ApiBody) and NATS messages
 */
export declare class CreateTenantRequestDto {
    name: string;
    type: TenantType;
    slug?: string;
    description?: string;
    parentId?: string;
    hotels?: string[];
    chainId?: string;
    address?: string;
    city?: string;
    country?: string;
    contactEmail?: string;
    contactPhone?: string;
    operationSettings?: HotelOperationSettings;
}
/**
 * Update Tenant Request (Class-based for both REST and NATS)
 * Pattern: tenants.update
 * Used by: REST API (@ApiBody) and NATS messages
 */
export declare class UpdateTenantRequestDto {
    id: string;
    name?: string;
    description?: string;
    contactEmail?: string;
    contactPhone?: string;
    address?: string;
    city?: string;
    country?: string;
    operationSettings?: Partial<HotelOperationSettings>;
}
/**
 * Delete Tenant Request (Class-based for both REST and NATS)
 * Pattern: tenants.delete
 * Used by: REST API and NATS messages
 */
export declare class DeleteTenantRequestDto {
    id: string;
}
/**
 * Hotel Operation Settings DTO (Class-based for Swagger)
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
 * Tenant Response DTO (Class-based for Swagger and type safety)
 */
export declare class TenantResponseDto {
    id: string;
    name: string;
    slug: string;
    type: TenantType;
    parentId: string | null;
    isActive: boolean;
    description: string | null;
    hotels: string[] | null;
    chainId?: string;
    address: string | null;
    city: string | null;
    country: string | null;
    contactEmail: string | null;
    contactPhone: string | null;
    operationSettings: HotelOperationSettingsDto | null;
    createdAt: Date;
    updatedAt: Date;
}
//# sourceMappingURL=tenant.nats.d.ts.map