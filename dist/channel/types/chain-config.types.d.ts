/**
 * Chain Configuration Type Definitions
 *
 * Handles multi-property configuration and settings inheritance from chain level
 */
/**
 * Chain configuration settings
 */
export interface ChainConfigSettings {
    inherit_from_chain: boolean;
    chain_id?: string;
    override_settings?: string[];
}
/**
 * Get chain configuration request
 */
export interface GetChainConfigRequest {
    chainId: string;
    tenantId?: string;
}
/**
 * Get chain configuration response
 */
export interface GetChainConfigResponse {
    chainId: string;
    tenantId: string;
    providerConfigurations: ChainProviderConfig[];
    inheritedSettings?: string[];
    createdAt: string;
    updatedAt: string;
    chain_id?: string;
    tenant_id?: string;
    provider_templates?: ChainProviderConfig[];
    inheritance_rules?: string[];
    created_at?: string;
    updated_at?: string;
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
 * Chain application response
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
 * Chain hotel configuration
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
 * List chain hotels response
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
 * Chain sync result
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
//# sourceMappingURL=chain-config.types.d.ts.map