/**
 * Channel Distribution NATS Contracts
 *
 * Patterns:
 * - channel.distribution.list
 * - channel.distribution.listByHotel  (batch pre-warm for pricing-service)
 * - channel.distribution.getByRatePlan
 * - channel.distribution.getById
 * - channel.distribution.upsert
 * - channel.distribution.update
 * - channel.distribution.delete
 *
 * Event:
 * - channel.distribution.updated  (emitted on upsert/update/delete; pricing-service subscribes for cache invalidation)
 *
 * Handler: channel-service (ChannelDistributionNatsController)
 */

import { NatsResponse } from '../../common';
import {
  ChannelDistribution,
  UpsertChannelDistributionRequest,
  UpdateChannelDistributionRequest,
  ListChannelDistributionQuery,
  ChannelDistributionUpdatedEvent,
} from '../types/channel-distribution.types';

export interface ListChannelDistributionNatsRequest extends ListChannelDistributionQuery {}
export type ListChannelDistributionNatsResponse = NatsResponse<ChannelDistribution[]>;

export interface ListByHotelNatsRequest {
  tenantId: string;
  hotelId: string;
  isActive?: boolean;
}
export type ListByHotelNatsResponse = NatsResponse<ChannelDistribution[]>;

export interface GetByRatePlanNatsRequest {
  ratePlanId: string;
  tenantId?: string;
  channelName?: string;
}
export type GetByRatePlanNatsResponse = NatsResponse<ChannelDistribution[]>;

export interface GetByIdNatsRequest {
  id: string;
  tenantId?: string;
}
export type GetByIdNatsResponse = NatsResponse<ChannelDistribution | null>;

export interface UpsertChannelDistributionNatsRequest extends UpsertChannelDistributionRequest {}
export type UpsertChannelDistributionNatsResponse = NatsResponse<ChannelDistribution>;

export interface UpdateChannelDistributionNatsRequest extends UpdateChannelDistributionRequest {
  id: string;
  tenantId?: string;
}
export type UpdateChannelDistributionNatsResponse = NatsResponse<ChannelDistribution>;

export interface DeleteChannelDistributionNatsRequest {
  id: string;
  tenantId?: string;
  performedBy?: string;
  performedByName?: string;
}
export type DeleteChannelDistributionNatsResponse = NatsResponse<{ deleted: boolean }>;

export type ChannelDistributionUpdatedEventPayload = ChannelDistributionUpdatedEvent;
