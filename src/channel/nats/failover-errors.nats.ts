/**
 * Failover & Error Handling NATS Contracts
 *
 * Patterns:
 * - channel.failover.execute
 * - channel.errors.sync
 * - channel.errors.mapping
 * - channel.errors.resolve
 * - channel.recovery.retry
 *
 * Handler: channel-service (ProvidersNatsController)
 * Called by: api-gateway
 */

import { NatsResponse } from '../../common';
import {
  ProviderFailoverDto,
  ErrorListResponseDto,
  MappingErrorDto,
  ResolveErrorDto,
  ErrorResolutionResponseDto,
  RetryFailedOperationsDto,
  RetryResponseDto,
  GetErrorsQueryDto
} from '../types';

/**
 * Execute Failover Request
 * Pattern: channel.failover.execute
 *
 * Matches API Gateway ExecuteFailoverDto structure
 *
 * Response: ProviderFailoverDto with full failover execution details
 */
export interface ExecuteFailoverNatsRequest {
  sourceProviderId: string;
  targetProviderIds: string[];  // Array to match API Gateway DTO (not singular)
  trigger?: string;  // FailoverTrigger enum
  reason?: string;
  targetChannels?: string[];
  performFullResync?: boolean;
  notifyOperations?: boolean;
}

export type ExecuteFailoverNatsResponse = NatsResponse<ProviderFailoverDto>;

/**
 * Get Sync Errors Request
 * Pattern: channel.errors.sync
 *
 * Retrieves paginated list of synchronization errors with filtering.
 * This mirrors GetErrorsQueryDto from api-response.types
 *
 * Response: ErrorListResponseDto with errors[], total, page, limit, unresolvedCount, statistics
 */
export interface GetSyncErrorsNatsRequest extends GetErrorsQueryDto {
  tenantId?: string;
  hotelId?: string;
}

export type GetSyncErrorsNatsResponse = NatsResponse<ErrorListResponseDto>;

/**
 * Get Mapping Errors Request
 * Pattern: channel.errors.mapping
 *
 * Retrieves list of room/rate mapping errors with filtering and pagination.
 *
 * Request fields:
 * - providerId?: string
 * - resolved?: boolean
 * - limit?: number
 * - offset?: number
 * - tenantId?: string (internal, set by API Gateway)
 * - hotelId?: string (internal, set by API Gateway)
 *
 * Response: Properly typed MappingErrorDto[] array
 */
export interface GetMappingErrorsNatsRequest {
  providerId?: string;
  resolved?: boolean;
  limit?: number;
  offset?: number;
  tenantId?: string;
  hotelId?: string;
}

export type GetMappingErrorsNatsResponse = NatsResponse<MappingErrorDto[]>;

/**
 * Resolve Error Request
 * Pattern: channel.errors.resolve
 *
 * Resolves a sync or mapping error with specified recovery action.
 * Mirrors ResolveErrorDto from api-response.types
 */
export interface ResolveErrorNatsRequest extends ResolveErrorDto {
  tenantId?: string;
  hotelId?: string;
}

export type ResolveErrorNatsResponse = NatsResponse<ErrorResolutionResponseDto>;

/**
 * Retry Failed Operations Request
 * Pattern: channel.recovery.retry
 *
 * Queues previously failed sync operations for retry.
 * Mirrors RetryFailedOperationsDto from api-response.types
 */
export interface RetryFailedOperationsNatsRequest extends RetryFailedOperationsDto {
  tenantId?: string;
  hotelId?: string;
}

export type RetryFailedOperationsNatsResponse = NatsResponse<RetryResponseDto>;
