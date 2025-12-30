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

// ============= Additional Request DTOs =============

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
 * Find All Tenants Request
 * Pattern: tenants.findAll
 */
export interface FindAllTenantsRequestDto {
  filters?: {
    type?: string;
  };
}

/**
 * Create Tenant Request
 * Pattern: tenants.create
 */
export interface CreateTenantRequestDto {
  name: string;
  type: TenantType;
  description?: string;
  parentId?: string;
  operationSettings?: HotelOperationSettings;
}

/**
 * Update Tenant Request
 * Pattern: tenants.update
 */
export interface UpdateTenantRequestDto {
  id: string;
  name?: string;
  description?: string;
  operationSettings?: Partial<HotelOperationSettings>;
}

/**
 * Delete Tenant Request
 * Pattern: tenants.delete
 */
export interface DeleteTenantRequestDto {
  id: string;
}

// ============= Response DTOs =============

/**
 * Hotel Operation Settings DTO
 */
export interface HotelOperationSettingsDto {
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
}

/**
 * Tenant Response DTO
 */
export interface TenantResponseDto {
  id: string;
  name: string;
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
