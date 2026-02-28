/**
 * Channel Pricing NATS Contracts
 *
 * Handles channel pricing synchronization and configuration patterns.
 * Manages mapping between internal rates and external channel rates.
 * All classes have @ApiProperty decorators for Swagger generation.
 */
import { NatsResponse } from '../../common/nats-response.interface';
import { ChannelRateMapping } from '../types';
/**
 * NATS Pattern: pricing.channel-pricing.getMapping
 *
 * Get channel rate mapping by ID
 */
export declare class GetChannelRateMappingRequest {
    id: string;
    tenantId: string;
}
export interface GetChannelRateMappingResponse {
    data: ChannelRateMapping;
}
export type GetChannelRateMappingNatsResponse = NatsResponse<GetChannelRateMappingResponse>;
/**
 * NATS Pattern: pricing.channel-pricing.getByRatePlan
 *
 * Get all channel mappings for a specific rate plan
 */
export declare class GetChannelMappingsByRatePlanRequest {
    ratePlanId: string;
    tenantId: string;
}
export type GetChannelMappingsByRatePlanNatsResponse = NatsResponse<ChannelRateMapping[]>;
/**
 * Update channel pricing configuration DTO
 */
export declare class UpdateChannelPricingConfigDto {
    markupType?: 'PERCENTAGE' | 'FIXED';
    markupValue?: number;
    minRate?: number;
    maxRate?: number;
    commissionIncluded?: boolean;
}
/**
 * NATS Pattern: pricing.channel-pricing.updateConfig
 *
 * Update pricing configuration for a channel mapping
 */
export declare class UpdateChannelPricingConfigRequest extends UpdateChannelPricingConfigDto {
    id: string;
    tenantId: string;
}
export interface UpdateChannelPricingConfigResponse {
    data: ChannelRateMapping;
    message: string;
}
export type UpdateChannelPricingConfigNatsResponse = NatsResponse<UpdateChannelPricingConfigResponse>;
/**
 * NATS Pattern: pricing.channel-pricing.clearConfig
 *
 * Clear pricing configuration for a channel mapping (reset to defaults)
 */
export declare class ClearChannelPricingConfigRequest {
    id: string;
    tenantId: string;
}
export interface ClearChannelPricingConfigResponse {
    data: ChannelRateMapping;
    message: string;
}
export type ClearChannelPricingConfigNatsResponse = NatsResponse<ClearChannelPricingConfigResponse>;
//# sourceMappingURL=channel-pricing.nats.d.ts.map