/**
 * Failover & Error Handling NATS Contracts
 *
 * Patterns:
 * - channel.failover.execute
 * - channel.errors.sync
 * - channel.errors.mapping
 *
 * Handler: channel-service (ProvidersNatsController)
 * Called by: api-gateway
 */
import { NatsResponse } from '../../common';
import { ProviderFailoverDto, ErrorListResponseDto } from '../types';
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
    targetProviderIds: string[];
    trigger?: string;
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
 * Retrieves paginated list of synchronization errors.
 *
 * Request fields:
 * - limit?: number (optional)
 * - offset?: number (optional)
 *
 * Response: ErrorListResponseDto with errors[], total, page, limit, unresolvedCount, statistics
 */
export interface GetSyncErrorsNatsRequest {
    limit?: number;
    offset?: number;
}
export type GetSyncErrorsNatsResponse = NatsResponse<ErrorListResponseDto>;
/**
 * Get Mapping Errors Request
 * Pattern: channel.errors.mapping
 *
 * Retrieves list of room/rate mapping errors.
 * NOTE: Currently returns empty array (not implemented).
 *
 * Request fields:
 * - [key: string]: any (accepts any payload)
 *
 * Response: any[] (empty array in current implementation)
 */
export interface GetMappingErrorsNatsRequest {
    [key: string]: any;
}
export type GetMappingErrorsNatsResponse = NatsResponse<any[]>;
//# sourceMappingURL=failover-errors.nats.d.ts.map