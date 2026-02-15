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

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { NatsResponse } from '../../common';
import { ProviderType, ProviderStatus } from '../enums';
import {
  ChannelProvider,
  ProviderResponse,
  ProvidersListResponse,
  CreateProviderRequest,
  UpdateProviderRequest,
  CredentialValidationResult,
  ProviderComparisonDto,
} from '../types';

/**
 * Create Provider Request
 * Pattern: channel.providers.create
 */
export interface CreateProviderNatsRequest extends CreateProviderRequest {
  tenantId?: string;  // Optional - API Gateway may not have access
  hotelId?: string;   // Optional - API Gateway may not have access
}

export type CreateProviderNatsResponse = NatsResponse<ChannelProvider>;

/**
 * Get Provider Request (Class-based for both REST and NATS)
 * Pattern: channel.providers.get
 * Used by: REST API (@ApiParam) and NATS messages
 */
export class GetProviderNatsRequest {
  @ApiProperty({
    description: 'Provider ID',
    example: '123e4567-e89b-12d3-a456-426614174000'
  })
  providerId: string;

  @ApiPropertyOptional({
    description: 'Tenant ID (optional for multi-tenant contexts)',
    example: '123e4567-e89b-12d3-a456-426614174001'
  })
  tenantId?: string;
}

export type GetProviderNatsResponse = NatsResponse<ChannelProvider | null>;

/**
 * List Providers Request
 * Pattern: channel.providers.list
 */
export interface ListProvidersNatsRequest {
  tenantId?: string;  // Optional - API Gateway may not have access
  hotelId?: string;
  filters?: {
    providerType?: ProviderType;
    isActive?: boolean;
    isSandbox?: boolean;
    status?: string;
  };
}

export type ListProvidersNatsResponse = NatsResponse<ChannelProvider[]>;

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
  tenantId?: string;  // Optional - API Gateway may not have access
}

/**
 * Delete Provider Response
 * Used for both NATS response and REST API response
 */
export class DeleteProviderResponse {
  @ApiProperty({ description: 'Success message' })
  message: string;

  @ApiPropertyOptional({ description: 'Deletion timestamp (ISO format)' })
  deletedAt?: string;
}

export type DeleteProviderNatsResponse = NatsResponse<DeleteProviderResponse>;

/**
 * Test Provider Connection Request
 * Pattern: channel.providers.test
 */
export interface TestProviderNatsRequest {
  providerId: string;
  tenantId?: string;  // Optional - API Gateway may not have access
}

export type TestProviderNatsResponse = NatsResponse<CredentialValidationResult>;

/**
 * Get Provider Status Request
 * Pattern: channel.providers.status
 */
export interface GetProviderStatusNatsRequest {
  providerId: string;
  tenantId?: string;  // Optional - API Gateway may not have access
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
 *
 * Response: ProviderComparisonDto with providers[], period, marketSummary, and optional trends
 */
export interface GetProviderPerformanceNatsRequest {
  providerId?: string;  // Optional - may query all providers
  tenantId?: string;    // Optional - API Gateway may not have access
  timeRange?: 'hour' | 'day' | 'week' | 'month';
}

export type GetProviderPerformanceNatsResponse = NatsResponse<ProviderComparisonDto>;
