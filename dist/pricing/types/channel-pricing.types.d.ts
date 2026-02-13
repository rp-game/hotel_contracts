/**
 * Channel Pricing Types
 *
 * Shared types for channel pricing synchronization patterns.
 * Handles mapping between internal rates and external channel rates.
 * All classes have @ApiProperty decorators for Swagger generation.
 */
/**
 * Channel pricing configuration (nested in ChannelRateMapping)
 */
export declare class ChannelPricingConfigDto {
    markupType?: 'PERCENTAGE' | 'FIXED';
    markupValue?: number;
    minRate?: number;
    maxRate?: number;
    commissionIncluded?: boolean;
}
/**
 * Channel rate mapping - mapping between internal rate plan and external channel rate
 * Matches database entity structure with nested pricingConfig
 */
export declare class ChannelRateMapping {
    id: string;
    tenantId: string;
    hotelId: string;
    ratePlanId: string;
    channelProvider: string;
    channelName: string;
    externalRateId?: string;
    isActive: boolean;
    pricingConfig?: ChannelPricingConfigDto;
    createdAt: string;
    updatedAt: string;
}
//# sourceMappingURL=channel-pricing.types.d.ts.map