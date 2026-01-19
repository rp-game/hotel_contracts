/**
 * Channel Provider Type Definitions
 *
 * Matches the ChannelProvider entity structure
 */
import { ProviderType, SyncStatus } from '../enums';
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
    providerName: string;
    tenantId?: string;
    hotelId?: string;
    credentials?: ProviderCredentials;
    enableInventorySync?: boolean;
    enableRateSync?: boolean;
    enableBookingSync?: boolean;
    settings?: any;
    endpoints?: any;
    otaAccounts?: any;
    chainConfiguration?: ChainConfigurationDto;
}
/**
 * Provider update request
 * Matches API Gateway UpdateProviderConfigDto structure (flat, not nested)
 */
export interface UpdateProviderRequest {
    id: string;
    providerName?: string;
    credentials?: ProviderCredentials;
    enableInventorySync?: boolean;
    enableRateSync?: boolean;
    enableBookingSync?: boolean;
    settings?: any;
    endpoints?: any;
    otaAccounts?: any;
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
//# sourceMappingURL=provider.types.d.ts.map