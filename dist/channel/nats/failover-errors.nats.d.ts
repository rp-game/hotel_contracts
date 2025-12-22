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
/**
 * Execute Failover Request
 * Pattern: channel.failover.execute
 *
 * Executes failover from one provider to another (e.g., when primary provider fails).
 *
 * Request fields:
 * - sourceProviderId: string (required)
 * - targetProviderId: string (required)
 * - reason?: string (optional)
 *
 * Response: FailoverResult with 6 fields:
 * - success, sourceProviderId, targetProviderId
 * - timestamp, reason, error
 */
export interface ExecuteFailoverNatsRequest {
    sourceProviderId: string;
    targetProviderId: string;
    reason?: string;
}
export interface FailoverResult {
    success: boolean;
    sourceProviderId: string;
    targetProviderId: string;
    timestamp?: string;
    reason?: string;
    error?: string;
}
export type ExecuteFailoverNatsResponse = NatsResponse<FailoverResult>;
/**
 * Get Sync Errors Request
 * Pattern: channel.errors.sync
 *
 * Retrieves paginated list of synchronization errors.
 * NOTE: Currently returns empty array (not implemented).
 *
 * Request fields:
 * - limit?: number (optional)
 * - offset?: number (optional)
 *
 * Response: SyncErrorsResult with 4 fields:
 * - data: any[] (empty array in current implementation)
 * - total: number
 * - limit: number
 * - offset: number
 */
export interface GetSyncErrorsNatsRequest {
    limit?: number;
    offset?: number;
}
export interface SyncErrorsResult {
    data: any[];
    total: number;
    limit: number;
    offset: number;
}
export type GetSyncErrorsNatsResponse = NatsResponse<SyncErrorsResult>;
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