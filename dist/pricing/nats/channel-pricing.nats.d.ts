/**
 * Channel Pricing NATS Contracts
 *
 * Handles channel pricing synchronization and configuration patterns.
 * Manages mapping between internal rates and external channel rates.
 */
import { NatsResponse } from '../../common/nats-response.interface';
import { ChannelRateMapping } from '../types';
/**
 * NATS Pattern: pricing.channel-pricing.getMapping
 *
 * Get channel rate mapping by ID
 */
export interface GetChannelRateMappingRequest {
    /**
     * Channel rate mapping ID
     */
    id: string;
    /**
     * Tenant ID (multi-tenant isolation)
     */
    tenantId: string;
}
export interface GetChannelRateMappingResponse {
    /**
     * Channel rate mapping data
     */
    data: ChannelRateMapping;
}
export type GetChannelRateMappingNatsResponse = NatsResponse<GetChannelRateMappingResponse>;
/**
 * NATS Pattern: pricing.channel-pricing.getByRatePlan
 *
 * Get all channel mappings for a specific rate plan
 */
export interface GetChannelMappingsByRatePlanRequest {
    /**
     * Rate plan ID to find mappings for
     */
    ratePlanId: string;
    /**
     * Tenant ID (multi-tenant isolation)
     */
    tenantId: string;
}
export interface GetChannelMappingsByRatePlanResponse {
    /**
     * List of channel rate mappings
     */
    data: ChannelRateMapping[];
}
export type GetChannelMappingsByRatePlanNatsResponse = NatsResponse<GetChannelMappingsByRatePlanResponse>;
/**
 * NATS Pattern: pricing.channel-pricing.updateConfig
 *
 * Update pricing configuration for a channel mapping
 */
export interface UpdateChannelPricingConfigRequest {
    /**
     * Channel rate mapping ID
     */
    id: string;
    /**
     * Tenant ID (multi-tenant isolation)
     */
    tenantId: string;
    /**
     * Markup type (PERCENTAGE or FIXED)
     */
    markupType?: 'PERCENTAGE' | 'FIXED';
    /**
     * Markup value to apply
     */
    markupValue?: number;
    /**
     * Minimum rate threshold
     */
    minRate?: number;
    /**
     * Maximum rate threshold
     */
    maxRate?: number;
    /**
     * Whether commission is included in the rate
     */
    commissionIncluded?: boolean;
}
export interface UpdateChannelPricingConfigResponse {
    /**
     * Updated channel rate mapping
     */
    data: ChannelRateMapping;
    /**
     * Success message
     */
    message: string;
}
export type UpdateChannelPricingConfigNatsResponse = NatsResponse<UpdateChannelPricingConfigResponse>;
/**
 * NATS Pattern: pricing.channel-pricing.clearConfig
 *
 * Clear pricing configuration for a channel mapping (reset to defaults)
 */
export interface ClearChannelPricingConfigRequest {
    /**
     * Channel rate mapping ID
     */
    id: string;
    /**
     * Tenant ID (multi-tenant isolation)
     */
    tenantId: string;
}
export interface ClearChannelPricingConfigResponse {
    /**
     * Updated channel rate mapping with cleared config
     */
    data: ChannelRateMapping;
    /**
     * Success message
     */
    message: string;
}
export type ClearChannelPricingConfigNatsResponse = NatsResponse<ClearChannelPricingConfigResponse>;
//# sourceMappingURL=channel-pricing.nats.d.ts.map