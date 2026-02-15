/**
 * Chain Configuration Type Definitions
 *
 * Unified contracts for both NATS messaging and REST API
 * Uses snake_case to match database entities and REST API conventions
 * Converted to classes with @ApiProperty for Swagger documentation
 */

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsUUID, IsArray, IsString, IsObject, IsBoolean, IsOptional, IsNumber } from 'class-validator';

/**
 * Chain configuration settings (snake_case - for database entity)
 */
export interface ChainConfigSettings {
  inherit_from_chain: boolean;
  chain_id?: string;
  override_settings?: string[];
}

/**
 * Chain configuration DTO (camelCase - for NATS/API)
 * Matches API Gateway ChainConfigurationDto structure
 */
export interface ChainConfigurationDto {
  inheritFromChain: boolean;
  chainId?: string;
  overrideSettings?: string[];
  hotelSpecificOtaAccounts?: any;  // OTAAccountsConfigDto from API Gateway
}

/**
 * Apply chain configuration to hotel request DTO
 * Used for both REST API and NATS messaging
 */
export class ApplyChainConfigDto {
  @ApiProperty({ description: 'Hotel ID to apply configuration to' })
  @IsUUID()
  hotel_id: string;

  @ApiProperty({ description: 'Settings to inherit from chain', type: [String] })
  @IsArray()
  @IsString({ each: true })
  inherit_settings: string[];

  @ApiPropertyOptional({ description: 'Hotel-specific setting overrides' })
  @IsOptional()
  @IsObject()
  override_settings?: Record<string, any>;

  @ApiPropertyOptional({ description: 'Whether to force apply even if hotel has existing config' })
  @IsOptional()
  @IsBoolean()
  force_apply?: boolean;
}

/**
 * Chain hotel configuration response DTO
 * Used for both REST API and NATS messaging
 */
export class ChainHotelConfigurationDto {
  @ApiProperty({ description: 'Hotel ID' })
  @IsUUID()
  hotel_id: string;

  @ApiProperty({ description: 'Hotel name' })
  @IsString()
  hotel_name: string;

  @ApiProperty({ description: 'Whether hotel inherits from chain' })
  @IsBoolean()
  inherits_from_chain: boolean;

  @ApiProperty({ description: 'Inherited settings from chain', type: [String] })
  @IsArray()
  @IsString({ each: true })
  inherited_settings: string[];

  @ApiProperty({ description: 'Hotel-specific overrides' })
  @IsObject()
  hotel_overrides: Record<string, any>;

  @ApiProperty({ description: 'Active provider configurations for this hotel' })
  @IsArray()
  active_providers: string[];

  @ApiProperty({ description: 'Hotel configuration status' })
  @IsString()
  status: string;

  @ApiProperty({ description: 'Last sync timestamp with chain configuration' })
  @IsString()
  last_chain_sync: string;
}

/**
 * Sync chain configuration to hotels request DTO
 * Used for both REST API and NATS messaging
 */
export class SyncChainConfigDto {
  @ApiPropertyOptional({ description: 'Specific hotels to sync (if empty, sync all)', type: [String] })
  @IsOptional()
  @IsArray()
  @IsUUID('all', { each: true })
  hotel_ids?: string[];

  @ApiPropertyOptional({ description: 'Settings to sync (if empty, sync all allowed)', type: [String] })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  settings_to_sync?: string[];

  @ApiPropertyOptional({ description: 'Whether to override hotel-specific settings' })
  @IsOptional()
  @IsBoolean()
  force_override?: boolean;

  @ApiPropertyOptional({ description: 'Whether to only sync to hotels without existing config' })
  @IsOptional()
  @IsBoolean()
  only_unconfigured_hotels?: boolean;
}

/**
 * Chain sync result for individual hotel
 */
export class ChainSyncResultDto {
  @ApiProperty({ description: 'Hotel ID' })
  @IsUUID()
  hotel_id: string;

  @ApiProperty({ description: 'Hotel name' })
  @IsString()
  hotel_name: string;

  @ApiProperty({ description: 'Whether sync was successful' })
  @IsBoolean()
  success: boolean;

  @ApiPropertyOptional({ description: 'Error message if sync failed' })
  @IsOptional()
  @IsString()
  error?: string;

  @ApiProperty({ description: 'Settings that were synced', type: [String] })
  @IsArray()
  @IsString({ each: true })
  synced_settings: string[];

  @ApiProperty({ description: 'Settings that were skipped due to conflicts', type: [String] })
  @IsArray()
  @IsString({ each: true })
  skipped_settings: string[];
}

/**
 * Chain sync response DTO
 * Used for both REST API and NATS messaging
 */
export class ChainSyncResponseDto {
  @ApiProperty({ description: 'Chain ID' })
  @IsUUID()
  chain_id: string;

  @ApiProperty({ description: 'Sync operation ID' })
  @IsString()
  sync_id: string;

  @ApiProperty({ description: 'Overall sync success status' })
  @IsBoolean()
  success: boolean;

  @ApiProperty({ description: 'Total number of hotels processed' })
  @IsNumber()
  total_hotels: number;

  @ApiProperty({ description: 'Number of successfully synced hotels' })
  @IsNumber()
  successful_syncs: number;

  @ApiProperty({ description: 'Number of failed syncs' })
  @IsNumber()
  failed_syncs: number;

  @ApiProperty({ description: 'Detailed results for each hotel', type: [ChainSyncResultDto] })
  @IsArray()
  results: ChainSyncResultDto[];

  @ApiProperty({ description: 'Sync operation timestamp' })
  @IsString()
  timestamp: string;
}

/**
 * Get chain configuration request
 */
export interface GetChainConfigRequest {
  chainId: string;
  tenantId?: string;  // Optional - API Gateway may not have access
}

/**
 * Get chain configuration response (NATS format - camelCase only)
 */
export interface GetChainConfigResponse {
  chainId: string;
  tenantId: string;
  providerConfigurations: ChainProviderConfig[];
  inheritedSettings?: string[];
  createdAt: string;
  updatedAt: string;
}

/**
 * Provider configuration within a chain
 */
export interface ChainProviderConfig {
  providerId: string;
  providerType: string;
  name: string;
  isActive: boolean;
  isSandbox: boolean;
  overrideSettings?: string[];
}

/**
 * Update chain configuration request
 */
export interface UpdateChainConfigRequest {
  chainId: string;
  providerConfigurations?: ChainProviderConfig[];
  inheritedSettings?: string[];
}

/**
 * Apply chain to hotel request
 */
export interface ApplyChainToHotelRequest {
  chainId: string;
  hotelId: string;
  tenantId: string;
  overrideSettings?: Record<string, any>;
}

/**
 * Chain application response (NATS format - camelCase only)
 */
export interface ApplyChainResponse {
  hotelId: string;
  chainId: string;
  appliedAt: string;
  providersActivated: number;
  settingsApplied: string[];
}

/**
 * List chain hotels request
 */
export interface ListChainHotelsRequest {
  chainId: string;
  tenantId: string;
  page?: number;
  limit?: number;
}

/**
 * Chain hotel configuration (NATS format - camelCase only)
 */
export interface ChainHotelConfig {
  hotelId: string;
  hotelName: string;
  tenantId: string;
  providerCount: number;
  appliedAt: string;
  overrideSettings?: Record<string, any>;
}

/**
 * List chain hotels response (NATS format - camelCase only)
 */
export interface ListChainHotelsResponse {
  data: ChainHotelConfig[];
  total: number;
  page: number;
  limit: number;
  chainId: string;
}

/**
 * Sync chain to all hotels request
 */
export interface SyncChainRequest {
  chainId: string;
  tenantId: string;
  hotelIds?: string[]; // If not provided, sync to all hotels in chain
  dryRun?: boolean;
}

/**
 * Chain sync result (NATS format - camelCase only)
 */
export interface ChainSyncResult {
  chainId: string;
  startedAt: string;
  completedAt?: string;
  status: 'PENDING' | 'IN_PROGRESS' | 'SUCCESS' | 'FAILED' | 'PARTIAL';
  hotelsProcessed: number;
  hotelsSuccessful: number;
  hotelsFailed: number;
  errors?: Array<{
    hotelId: string;
    error: string;
  }>;
}
