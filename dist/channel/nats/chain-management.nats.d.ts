/**
 * Chain Management NATS Contracts
 *
 * Patterns:
 * - channel.chains.config.get
 * - channel.chains.config.update
 * - channel.chains.apply
 * - channel.chains.hotels.list
 * - channel.chains.sync
 *
 * Handler: channel-service (ProvidersNatsController)
 * Called by: api-gateway
 */
import { NatsResponse } from '../../common';
import { GetChainConfigRequest, GetChainConfigResponse, UpdateChainConfigRequest, ListChainHotelsResponse } from '../types';
/**
 * Get Chain Configuration Request
 * Pattern: channel.chains.config.get
 */
export interface GetChainConfigNatsRequest extends GetChainConfigRequest {
    chainId: string;
    tenantId?: string;
}
export type GetChainConfigNatsResponse = NatsResponse<GetChainConfigResponse>;
/**
 * Update Chain Configuration Request
 * Pattern: channel.chains.config.update
 */
export interface UpdateChainConfigNatsRequest {
    chainId: string;
    configuration: UpdateChainConfigRequest;
    tenantId?: string;
}
export type UpdateChainConfigNatsResponse = NatsResponse<GetChainConfigResponse>;
/**
 * Apply Chain to Hotel Request
 * Pattern: channel.chains.apply
 * Now uses unified ApplyChainConfigDto structure
 */
export interface ApplyChainToHotelNatsRequest {
    chainId: string;
    tenantId: string;
    hotel_id: string;
    inherit_settings: string[];
    override_settings?: Record<string, any>;
    force_apply?: boolean;
}
export type ApplyChainToHotelNatsResponse = NatsResponse<import('../types').ChainHotelConfigurationDto>;
/**
 * List Chain Hotels Request
 * Pattern: channel.chains.hotels.list
 */
export interface ListChainHotelsNatsRequest {
    chainId: string;
    tenantId?: string;
    page?: number;
    limit?: number;
}
export type ListChainHotelsNatsResponse = NatsResponse<ListChainHotelsResponse>;
/**
 * Sync Chain to Hotels Request
 * Pattern: channel.chains.sync
 * Now uses unified SyncChainConfigDto structure
 */
export interface SyncChainNatsRequest {
    chainId: string;
    tenantId: string;
    hotel_ids?: string[];
    settings_to_sync?: string[];
    force_override?: boolean;
    only_unconfigured_hotels?: boolean;
}
export type SyncChainNatsResponse = NatsResponse<import('../types').ChainSyncResponseDto>;
//# sourceMappingURL=chain-management.nats.d.ts.map