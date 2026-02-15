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

/**
 * Chain provider template for multi-hotel configuration
 */
export class ChainProviderTemplateDto {
  @ApiProperty({ description: 'Provider type' })
  @IsString()
  provider_type: string;

  @ApiProperty({ description: 'Provider name' })
  @IsString()
  provider_name: string;

  @ApiProperty({ description: 'API credentials template' })
  @IsObject()
  api_credentials_template: Record<string, any>;

  @ApiProperty({ description: 'Endpoints configuration' })
  @IsObject()
  endpoints: Record<string, any>;

  @ApiProperty({ description: 'Default settings for chain hotels' })
  @IsObject()
  default_settings: Record<string, any>;

  @ApiProperty({ description: 'OTA account templates' })
  @IsObject()
  ota_account_templates: Record<string, any>;

  @ApiProperty({ description: 'Whether this template is active' })
  @IsBoolean()
  active: boolean;
}

/**
 * Chain inheritance rules configuration
 */
export class ChainInheritanceRulesDto {
  @ApiProperty({ description: 'Settings that must be inherited from chain', type: [String] })
  @IsArray()
  @IsString({ each: true })
  required_settings: string[];

  @ApiProperty({ description: 'Optional settings that can be inherited', type: [String] })
  @IsArray()
  @IsString({ each: true })
  optional_settings: string[];

  @ApiProperty({ description: 'Settings that hotels can override', type: [String] })
  @IsArray()
  @IsString({ each: true })
  hotel_overrides_allowed: string[];

  @ApiProperty({ description: 'Whether to force inheritance for all hotels' })
  @IsBoolean()
  force_inheritance: boolean;
}

/**
 * Complete chain channel configuration
 */
export class ChainChannelConfigurationDto {
  @ApiProperty({ description: 'Chain ID' })
  @IsUUID()
  chain_id: string;

  @ApiProperty({ description: 'Chain name' })
  @IsString()
  chain_name: string;

  @ApiProperty({ description: 'Provider configuration templates', type: [ChainProviderTemplateDto] })
  @IsArray()
  provider_templates: ChainProviderTemplateDto[];

  @ApiProperty({ description: 'Inheritance rules', type: ChainInheritanceRulesDto })
  inheritance_rules: ChainInheritanceRulesDto;

  @ApiPropertyOptional({ description: 'Global chain settings for channel management' })
  @IsOptional()
  @IsObject()
  global_settings?: Record<string, any>;

  @ApiProperty({ description: 'Configuration created timestamp' })
  @IsString()
  created_at: string;

  @ApiProperty({ description: 'Configuration last updated timestamp' })
  @IsString()
  updated_at: string;
}

/**
 * Update chain configuration request DTO
 */
export class UpdateChainConfigurationDto {
  @ApiPropertyOptional({ description: 'Provider configuration templates', type: [ChainProviderTemplateDto] })
  @IsOptional()
  @IsArray()
  provider_templates?: ChainProviderTemplateDto[];

  @ApiPropertyOptional({ description: 'Inheritance rules', type: ChainInheritanceRulesDto })
  @IsOptional()
  inheritance_rules?: ChainInheritanceRulesDto;

  @ApiPropertyOptional({ description: 'Global chain settings for channel management' })
  @IsOptional()
  @IsObject()
  global_settings?: Record<string, any>;
}
