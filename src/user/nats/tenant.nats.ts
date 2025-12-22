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
