/**
 * Channel Pricing Types
 *
 * Shared types for channel pricing synchronization patterns.
 * Handles mapping between internal rates and external channel rates.
 */

/**
 * Channel rate mapping - mapping between internal rate plan and channel rate
 */
export interface ChannelRateMapping {
  id: string;
  tenantId: string;
  hotelId: string;
  ratePlanId: string;
  channelProviderId: string;
  channelName: string;
  channelRateId?: string;
  markupType?: 'PERCENTAGE' | 'FIXED';
  markupValue?: number;
  minRate?: number;
  maxRate?: number;
  commissionIncluded?: boolean;
  pricingConfig?: {
    useMarkup: boolean;
    enforceMinMax: boolean;
  };
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

/**
 * Channel pricing configuration response
 */
export interface ChannelPricingConfig {
  id: string;
  hotelId: string;
  markupType?: 'PERCENTAGE' | 'FIXED';
  markupValue?: number;
  minRate?: number;
  maxRate?: number;
  commissionIncluded: boolean;
  lastSyncAt?: string;
}
