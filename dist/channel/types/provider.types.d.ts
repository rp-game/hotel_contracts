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
 * Main ChannelProvider class
 * Represents a provider configuration for channel/PMS integration
 * Used for both NATS messages and REST API responses
 */
export declare class ChannelProvider {
    id: string;
    tenantId: string;
    hotelId: string;
    chainId?: string;
    providerType: ProviderType;
    name: string;
    description?: string;
    configuration: ProviderConfiguration | Record<string, any>;
    credentials?: ProviderCredentials | Record<string, any>;
    isActive: boolean;
    isSandbox: boolean;
    lastSyncAt?: string;
    syncStatus: SyncStatus | string;
    syncErrors?: SyncErrorDetails | Record<string, any>;
    createdAt: string;
    updatedAt: string;
    otaAccounts?: Record<string, any>;
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