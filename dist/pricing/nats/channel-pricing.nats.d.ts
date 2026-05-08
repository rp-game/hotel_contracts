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
 * Get channel markup configs for a rate plan (optionally filtered by channel name)
 */
export declare class GetChannelMappingsByRatePlanRequest {
    ratePlanId: string;
    tenantId: string;
    channelName?: string;
}
export type GetChannelMappingsByRatePlanNatsResponse = NatsResponse<ChannelRateMapping[]>;
/**
 * NATS Pattern: pricing.channel-pricing.upsertMarkup
 *
 * Create or update markup config for (ratePlanId, channelName)
 */
export declare class UpsertChannelMarkupRequest {
    ratePlanId: string;
    channelName: string;
    tenantId: string;
    hotelId: string;
    pricingConfig?: UpdateChannelPricingConfigDto;
}
export interface UpsertChannelMarkupResponse {
    data: ChannelRateMapping;
    message: string;
}
export type UpsertChannelMarkupNatsResponse = NatsResponse<UpsertChannelMarkupResponse>;
/**
 * NATS Pattern: pricing.channel-pricing.deleteMarkup
 *
 * Delete markup config by ID
 */
export declare class DeleteChannelMarkupRequest {
    id: string;
    tenantId: string;
}
export interface DeleteChannelMarkupResponse {
    message: string;
}
export type DeleteChannelMarkupNatsResponse = NatsResponse<DeleteChannelMarkupResponse>;
/**
 * NATS Pattern: pricing.rates.calculateForOTA
 *
 * Calculate final price for a (ratePlan × roomType × channel) combination
 * Returns basePrice + markup = finalPrice
 */
export declare class CalculateForOtaRequest {
    ratePlanId: string;
    roomTypeId: string;
    hotelId: string;
    tenantId: string;
    channelName: string;
    checkInDate?: string;
    checkOutDate?: string;
}
export interface CalculateForOtaResponse {
    basePrice: number;
    markup: number;
    finalPrice: number;
    markupApplied: {
        type: 'PERCENTAGE' | 'FIXED';
        value: number;
    } | null;
}
export type CalculateForOtaNatsResponse = NatsResponse<CalculateForOtaResponse>;
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
    performedBy?: string;
    performedByName?: string;
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
    performedBy?: string;
    performedByName?: string;
}
export interface ClearChannelPricingConfigResponse {
    data: ChannelRateMapping;
    message: string;
}
export type ClearChannelPricingConfigNatsResponse = NatsResponse<ClearChannelPricingConfigResponse>;
//# sourceMappingURL=channel-pricing.nats.d.ts.map