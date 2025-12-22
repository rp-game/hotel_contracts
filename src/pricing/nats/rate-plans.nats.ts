/**
 * Rate Plans NATS Contracts
 *
 * Handles rate plan management including creation, updates, channel mappings,
 * and price calculations.
 */

import { NatsResponse } from '../../common/nats-response.interface';
import { RatePlan } from '../types';

/**
 * NATS Pattern: pricing.rate-plan.create
 * Already exists in create-rate-plan.nats.ts
 */
export * from './create-rate-plan.nats';

/**
 * NATS Pattern: pricing.rate-plan.update
 */
export interface UpdateRatePlanRequest {
  id: string;
  dto: {
    name?: string;
    description?: string;
    basePrice?: number;
    validFrom?: string;
    validTo?: string;
    status?: string;
  };
}

export interface UpdateRatePlanResponse {
  data: RatePlan;
}

export type UpdateRatePlanNatsResponse = NatsResponse<UpdateRatePlanResponse>;

/**
 * NATS Pattern: pricing.rate-plan.get
 */
export interface GetRatePlanRequest {
  id: string;
}

export interface GetRatePlanResponse {
  data: RatePlan;
}

export type GetRatePlanNatsResponse = NatsResponse<GetRatePlanResponse>;

/**
 * NATS Pattern: pricing.rate-plan.list
 */
export interface ListRatePlansRequest {
  tenantId: string;
  hotelId: string;
}

export interface ListRatePlansResponse {
  data: RatePlan[];
}

export type ListRatePlansNatsResponse = NatsResponse<ListRatePlansResponse>;

/**
 * NATS Pattern: pricing.rate-plan.calculate-price
 */
export interface CalculateRatePlanPriceRequest {
  ratePlanId: string;
  basePrice: number;
}

export interface CalculateRatePlanPriceResponse {
  data: {
    finalPrice: number;
    basePrice: number;
    adjustments: Array<{
      type: string;
      amount: number;
      description: string;
    }>;
  };
}

export type CalculateRatePlanPriceNatsResponse = NatsResponse<CalculateRatePlanPriceResponse>;

/**
 * NATS Pattern: pricing.rate-plan.get-channel-mappings
 */
export interface GetChannelMappingsRequest {
  ratePlanId: string;
}

export interface ChannelMapping {
  id: string;
  ratePlanId: string;
  channelProvider: string;
  channelRatePlanId: string;
  channelRatePlanName: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface GetChannelMappingsResponse {
  data: ChannelMapping[];
}

export type GetChannelMappingsNatsResponse = NatsResponse<GetChannelMappingsResponse>;

/**
 * NATS Pattern: pricing.rate-plan.add-channel-mapping
 */
export interface AddChannelMappingRequest {
  ratePlanId: string;
  dto: {
    channelProvider: string;
    channelRatePlanId: string;
    channelRatePlanName: string;
    isActive?: boolean;
  };
}

export interface AddChannelMappingResponse {
  data: ChannelMapping;
}

export type AddChannelMappingNatsResponse = NatsResponse<AddChannelMappingResponse>;

/**
 * NATS Pattern: pricing.rate-plan.remove-channel-mapping
 */
export interface RemoveChannelMappingRequest {
  mappingId: string;
}

export interface RemoveChannelMappingResponse {
  message: string;
}

export type RemoveChannelMappingNatsResponse = NatsResponse<RemoveChannelMappingResponse>;

/**
 * NATS Pattern: pricing.rate-plan.find-by-channel
 */
export interface FindRatePlansByChannelRequest {
  tenantId: string;
  hotelId: string;
  channelProvider: string;
  channelName: string;
}

export interface FindRatePlansByChannelResponse {
  data: RatePlan[];
}

export type FindRatePlansByChannelNatsResponse = NatsResponse<FindRatePlansByChannelResponse>;

/**
 * NATS Pattern: pricing.rate-plan.delete
 */
export interface DeleteRatePlanRequest {
  id: string;
}

export interface DeleteRatePlanResponse {
  message: string;
}

export type DeleteRatePlanNatsResponse = NatsResponse<DeleteRatePlanResponse>;
