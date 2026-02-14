/**
 * Channel Provider Type Definitions
 *
 * Matches the ChannelProvider entity structure
 */

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { ProviderType, ProviderStatus, SyncStatus } from '../enums';
import { ProviderCredentials } from './credentials.types';
import { ProviderConfiguration } from './provider-configuration.types';
import { SyncErrorDetails } from './sync-history.types';
import { ChainConfigurationDto } from './chain-config.types';

/**
 * Main ChannelProvider class
 * Represents a provider configuration for channel/PMS integration
 * Used for both NATS messages and REST API responses
 */
export class ChannelProvider {
  @ApiProperty({ description: 'Provider ID', format: 'uuid' })
  id: string;

  @ApiProperty({ description: 'Tenant ID', format: 'uuid' })
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID', format: 'uuid' })
  hotelId: string;

  @ApiPropertyOptional({ description: 'Chain ID for multi-hotel configurations', format: 'uuid' })
  chainId?: string;

  @ApiProperty({ description: 'Provider type', enum: ProviderType })
  providerType: ProviderType;

  @ApiProperty({ description: 'Provider name' })
  name: string;

  @ApiPropertyOptional({ description: 'Provider description' })
  description?: string;

  @ApiProperty({
    description: 'Provider configuration object containing all settings',
    type: 'object',
    additionalProperties: true
  })
  configuration: ProviderConfiguration | Record<string, any>;

  @ApiPropertyOptional({
    description: 'Provider credentials (encrypted)',
    type: 'object',
    additionalProperties: true
  })
  credentials?: ProviderCredentials | Record<string, any>;

  @ApiProperty({ description: 'Whether provider is active' })
  isActive: boolean;

  @ApiProperty({ description: 'Whether provider is in sandbox/test mode' })
  isSandbox: boolean;

  @ApiPropertyOptional({ description: 'Last sync timestamp (ISO format)' })
  lastSyncAt?: string;

  @ApiProperty({ description: 'Current sync status' })
  syncStatus: SyncStatus | string;

  @ApiPropertyOptional({
    description: 'Sync error details if any',
    type: 'object',
    additionalProperties: true
  })
  syncErrors?: SyncErrorDetails | Record<string, any>;

  @ApiProperty({ description: 'Creation timestamp (ISO format)' })
  createdAt: string;

  @ApiProperty({ description: 'Last update timestamp (ISO format)' })
  updatedAt: string;

  @ApiPropertyOptional({
    description: 'OTA accounts mapped from configuration.ota_accounts',
    type: 'object',
    additionalProperties: true
  })
  otaAccounts?: Record<string, any>;
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
