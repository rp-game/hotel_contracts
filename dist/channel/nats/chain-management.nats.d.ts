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
import { GetChainConfigRequest, GetChainConfigResponse, ApplyChainToHotelRequest, ApplyChainResponse, SyncChainRequest, ChainSyncResult } from '../types';
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
    configuration: any;
    tenantId?: string;
}
export type UpdateChainConfigNatsResponse = NatsResponse<GetChainConfigResponse>;
/**
 * Apply Chain to Hotel Request
 * Pattern: channel.chains.apply
 */
export interface ApplyChainToHotelNatsRequest extends ApplyChainToHotelRequest {
    chainId: string;
    hotelId: string;
    tenantId: string;
    inheritSettings: boolean;
}
export type ApplyChainToHotelNatsResponse = NatsResponse<ApplyChainResponse>;
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
export type ListChainHotelsNatsResponse = NatsResponse<any[]>;
/**
 * Sync Chain to Hotels Request
 * Pattern: channel.chains.sync
 */
export interface SyncChainNatsRequest extends SyncChainRequest {
    chainId: string;
    tenantId: string;
    hotelIds?: string[];
    dryRun?: boolean;
}
export type SyncChainNatsResponse = NatsResponse<ChainSyncResult>;
//# sourceMappingURL=chain-management.nats.d.ts.map