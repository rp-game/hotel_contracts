/**
 * Chain Configuration Type Definitions
 *
 * Unified contracts for both NATS messaging and REST API
 * Uses snake_case to match database entities and REST API conventions
 * Converted to classes with @ApiProperty for Swagger documentation
 */
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
    hotelSpecificOtaAccounts?: any;
}
/**
 * Apply chain configuration to hotel request DTO
 * Used for both REST API and NATS messaging
 */
export declare class ApplyChainConfigDto {
    hotel_id: string;
    inherit_settings: string[];
    override_settings?: Record<string, any>;
    force_apply?: boolean;
}
/**
 * Chain hotel configuration response DTO
 * Used for both REST API and NATS messaging
 */
export declare class ChainHotelConfigurationDto {
    hotel_id: string;
    hotel_name: string;
    inherits_from_chain: boolean;
    inherited_settings: string[];
    hotel_overrides: Record<string, any>;
    active_providers: string[];
    status: string;
    last_chain_sync: string;
}
/**
 * Sync chain configuration to hotels request DTO
 * Used for both REST API and NATS messaging
 */
export declare class SyncChainConfigDto {
    hotel_ids?: string[];
    settings_to_sync?: string[];
    force_override?: boolean;
    only_unconfigured_hotels?: boolean;
}
/**
 * Chain sync result for individual hotel
 */
export declare class ChainSyncResultDto {
    hotel_id: string;
    hotel_name: string;
    success: boolean;
    error?: string;
    synced_settings: string[];
    skipped_settings: string[];
}
/**
 * Chain sync response DTO
 * Used for both REST API and NATS messaging
 */
export declare class ChainSyncResponseDto {
    chain_id: string;
    sync_id: string;
    success: boolean;
    total_hotels: number;
    successful_syncs: number;
    failed_syncs: number;
    results: ChainSyncResultDto[];
    timestamp: string;
}
/**
 * Get chain configuration request
 */
export interface GetChainConfigRequest {
    chainId: string;
    tenantId?: string;
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
    hotelIds?: string[];
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
export declare class ChainProviderTemplateDto {
    provider_type: string;
    provider_name: string;
    api_credentials_template: Record<string, any>;
    endpoints: Record<string, any>;
    default_settings: Record<string, any>;
    ota_account_templates: Record<string, any>;
    active: boolean;
}
/**
 * Chain inheritance rules configuration
 */
export declare class ChainInheritanceRulesDto {
    required_settings: string[];
    optional_settings: string[];
    hotel_overrides_allowed: string[];
    force_inheritance: boolean;
}
/**
 * Complete chain channel configuration
 */
export declare class ChainChannelConfigurationDto {
    chain_id: string;
    chain_name: string;
    provider_templates: ChainProviderTemplateDto[];
    inheritance_rules: ChainInheritanceRulesDto;
    global_settings?: Record<string, any>;
    created_at: string;
    updated_at: string;
}
/**
 * Update chain configuration request DTO
 */
export declare class UpdateChainConfigurationDto {
    provider_templates?: ChainProviderTemplateDto[];
    inheritance_rules?: ChainInheritanceRulesDto;
    global_settings?: Record<string, any>;
}
//# sourceMappingURL=chain-config.types.d.ts.map