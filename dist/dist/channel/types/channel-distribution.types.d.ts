/**
 * Channel Distribution Type Definitions
 *
 * Unified entity replacing the split between cms_rate_mapping (channel-service)
 * and channel_rate_mappings (pricing-service). One row per (ratePlanId, channelName)
 * holds both the external ID translation and pricing config for an OTA channel.
 *
 * Owned by channel-service. Pricing-service queries via NATS to apply markup.
 */
import { RateMappingConfiguration } from './mapping.types';
/**
 * Channel pricing configuration (nested in ChannelDistribution)
 */
export declare class ChannelPricingConfig {
    markupType?: 'PERCENTAGE' | 'FIXED';
    markupValue?: number;
    minRate?: number;
    maxRate?: number;
    commissionIncluded?: boolean;
}
/**
 * Channel distribution row — 1 per (ratePlanId, channelName).
 * Holds both ID translation and pricing for one OTA channel of one rate plan.
 */
export declare class ChannelDistribution {
    id: string;
    tenantId: string;
    hotelId: string;
    ratePlanId: string;
    channelName: string;
    providerId: string;
    externalCodes: Record<string, string>;
    isActive: boolean;
    lastSyncedAt?: string;
    pricingConfig?: ChannelPricingConfig;
    mappingConfiguration?: RateMappingConfiguration;
    createdAt: string;
    updatedAt: string;
}
/**
 * Upsert request — used for create or update by (ratePlanId, channelName).
 */
export declare class UpsertChannelDistributionRequest {
    tenantId: string;
    hotelId: string;
    ratePlanId: string;
    channelName: string;
    providerId: string;
    externalCodes: Record<string, string>;
    isActive?: boolean;
    pricingConfig?: ChannelPricingConfig;
    mappingConfiguration?: RateMappingConfiguration;
    performedBy?: string;
    performedByName?: string;
}
/**
 * Update request — partial update by ID.
 */
export declare class UpdateChannelDistributionRequest {
    providerId?: string;
    externalCodes?: Record<string, string>;
    isActive?: boolean;
    pricingConfig?: ChannelPricingConfig;
    mappingConfiguration?: RateMappingConfiguration;
    performedBy?: string;
    performedByName?: string;
}
/**
 * List filter query.
 */
export declare class ListChannelDistributionQuery {
    tenantId?: string;
    hotelId?: string;
    ratePlanId?: string;
    channelName?: string;
    providerId?: string;
    isActive?: boolean;
}
/**
 * Event payload — published when distribution changes (create/update/delete).
 * Pricing-service subscribes to invalidate its in-memory markup cache.
 */
export declare class ChannelDistributionUpdatedEvent {
    action: 'CREATED' | 'UPDATED' | 'DELETED';
    tenantId: string;
    hotelId: string;
    ratePlanId: string;
    channelName: string;
    distributionId: string;
}
//# sourceMappingURL=channel-distribution.types.d.ts.map