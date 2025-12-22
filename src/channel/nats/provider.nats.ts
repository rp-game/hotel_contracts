/**
 * Channel Provider NATS Contracts
 *
 * Patterns:
 * - channel.providers.create
 * - channel.providers.get
 * - channel.providers.list
 * - channel.providers.findAll
 * - channel.providers.update
 * - channel.providers.delete
 * - channel.providers.test
 * - channel.providers.status
 * - channel.providers.performance
 *
 * Handler: channel-service (ProvidersNatsController)
 * Called by: api-gateway
 */

import { NatsResponse } from '../../common';
import { ProviderType, ProviderStatus } from '../enums';
import {
  ChannelProvider,
  ProviderResponse,
  ProvidersListResponse,
  CreateProviderRequest,
  UpdateProviderRequest,
  CredentialValidationResult,
} from '../types';

/**
 * Create Provider Request
 * Pattern: channel.providers.create
 */
export interface CreateProviderNatsRequest extends CreateProviderRequest {
  tenantId: string;
  hotelId: string;
}

export type CreateProviderNatsResponse = NatsResponse<ChannelProvider>;

/**
 * Get Provider Request
 * Pattern: channel.providers.get
 */
export interface GetProviderNatsRequest {
  providerId: string;
  tenantId?: string;
}

export type GetProviderNatsResponse = NatsResponse<ChannelProvider | null>;

/**
 * List Providers Request
 * Pattern: channel.providers.list
 */
export interface ListProvidersNatsRequest {
  tenantId: string;
  hotelId?: string;
  page?: number;
  limit?: number;
  filters?: {
    providerType?: ProviderType;
    isActive?: boolean;
    isSandbox?: boolean;
  };
}

export type ListProvidersNatsResponse = NatsResponse<ProvidersListResponse>;

/**
 * Find All Providers Request
 * Pattern: channel.providers.findAll
 */
export interface FindAllProvidersNatsRequest {
  tenantId: string;
  hotelId?: string;
  chainId?: string;
}

export type FindAllProvidersNatsResponse = NatsResponse<ProviderResponse[]>;

/**
 * Update Provider Request
 * Pattern: channel.providers.update
 */
export interface UpdateProviderNatsRequest extends UpdateProviderRequest {
  id: string;
}

export type UpdateProviderNatsResponse = NatsResponse<ChannelProvider | null>;

/**
 * Delete Provider Request
 * Pattern: channel.providers.delete
 */
export interface DeleteProviderNatsRequest {
  providerId: string;
  tenantId: string;
}

export interface DeleteProviderResponse {
  message: string;
  deletedAt: string;
}

export type DeleteProviderNatsResponse = NatsResponse<DeleteProviderResponse>;

/**
 * Test Provider Connection Request
 * Pattern: channel.providers.test
 */
export interface TestProviderNatsRequest {
  providerId: string;
  tenantId: string;
}

export type TestProviderNatsResponse = NatsResponse<CredentialValidationResult>;

/**
 * Get Provider Status Request
 * Pattern: channel.providers.status
 */
export interface GetProviderStatusNatsRequest {
  providerId: string;
  tenantId: string;
}

export interface ProviderStatusResponse {
  providerId: string;
  status: ProviderStatus;
  isActive: boolean;
  isSandbox: boolean;
  lastSyncAt?: string;
  syncStatus: string;
  errorCount?: number;
  testedAt?: string;
}

export type GetProviderStatusNatsResponse = NatsResponse<ProviderStatusResponse>;

/**
 * Get Provider Performance Metrics Request
 * Pattern: channel.providers.performance
 */
export interface GetProviderPerformanceNatsRequest {
  providerId: string;
  tenantId: string;
  timeRange?: 'hour' | 'day' | 'week' | 'month';
}

export interface ProviderPerformanceMetrics {
  providerId: string;
  timeRange: string;
  totalSyncs: number;
  successfulSyncs: number;
  failedSyncs: number;
  successRate: number;
  averageSyncDurationMs: number;
  lastSyncAt: string;
  recordsProcessed: number;
  recordsSuccessful: number;
  recordsFailed: number;
}

export type GetProviderPerformanceNatsResponse = NatsResponse<ProviderPerformanceMetrics>;
