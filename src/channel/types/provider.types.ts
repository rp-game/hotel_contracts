/**
 * Channel Provider Type Definitions
 *
 * Matches the ChannelProvider entity structure
 */

import { ProviderType, ProviderStatus, SyncStatus } from '../enums';
import { ProviderCredentials } from './credentials.types';
import { ProviderConfiguration } from './provider-configuration.types';
import { SyncErrorDetails } from './sync-history.types';
import { ChainConfigurationDto } from './chain-config.types';

/**
 * Main ChannelProvider type
 * Represents a provider configuration for channel/PMS integration
 */
export interface ChannelProvider {
  id: string;
  tenantId: string;
  hotelId: string;
  chainId?: string;
  providerType: ProviderType;
  name: string;
  description?: string;
  configuration: ProviderConfiguration;
  credentials?: ProviderCredentials;
  isActive: boolean;
  isSandbox: boolean;
  lastSyncAt?: string | Date;
  syncStatus: SyncStatus | string;
  syncErrors?: SyncErrorDetails;
  createdAt: string | Date;
  updatedAt: string | Date;
}

/**
 * Provider creation request
 * Matches API Gateway CreateProviderConfigDto structure (flat, not nested)
 */
export interface CreateProviderRequest {
  providerType: ProviderType;
  providerName: string;  // NOT "name" - matches API Gateway DTO
  tenantId?: string;  // Optional - added from auth context
  hotelId?: string;   // Optional - added from auth context
  credentials?: ProviderCredentials;
  enableInventorySync?: boolean;
  enableRateSync?: boolean;
  enableBookingSync?: boolean;
  settings?: any;  // ProviderSettingsDto
  endpoints?: any;  // ProviderEndpointsDto
  otaAccounts?: any;  // OTAAccountsConfigDto
  chainConfiguration?: ChainConfigurationDto;
}

/**
 * Provider update request
 * Matches API Gateway UpdateProviderConfigDto structure (flat, not nested)
 */
export interface UpdateProviderRequest {
  id: string;
  providerName?: string;  // NOT "name" - matches API Gateway DTO
  credentials?: ProviderCredentials;
  enableInventorySync?: boolean;
  enableRateSync?: boolean;
  enableBookingSync?: boolean;
  settings?: any;  // ProviderSettingsDto
  endpoints?: any;  // ProviderEndpointsDto
  otaAccounts?: any;  // OTAAccountsConfigDto
  chainConfiguration?: ChainConfigurationDto;
}

/**
 * Provider response
 */
export interface ProviderResponse {
  id: string;
  tenantId: string;
  hotelId: string;
  chainId?: string;
  providerType: ProviderType;
  name: string;
  description?: string;
  isActive: boolean;
  isSandbox: boolean;
  lastSyncAt?: string;
  syncStatus: SyncStatus | string;
  createdAt: string;
  updatedAt: string;
}

/**
 * Provider list response
 */
export interface ProvidersListResponse {
  data: ProviderResponse[];
  total: number;
  page: number;
  limit: number;
}
