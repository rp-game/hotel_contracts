/**
 * Provider-Channel Routing NATS Contracts
 *
 * Patterns:
 * - channel.routing.list
 * - channel.routing.upsert
 * - channel.routing.delete
 *
 * Handler: channel-service (ProviderChannelRoutingNatsController)
 */
import { NatsResponse } from '../../common';
import { ProviderChannelRouting, UpsertProviderChannelRoutingRequest, ListProviderChannelRoutingQuery } from '../types/provider-channel-routing.types';
export interface ListRoutingNatsRequest extends ListProviderChannelRoutingQuery {
}
export type ListRoutingNatsResponse = NatsResponse<ProviderChannelRouting[]>;
export interface UpsertRoutingNatsRequest extends UpsertProviderChannelRoutingRequest {
}
export type UpsertRoutingNatsResponse = NatsResponse<ProviderChannelRouting>;
export interface DeleteRoutingNatsRequest {
    id: string;
}
export type DeleteRoutingNatsResponse = NatsResponse<{
    deleted: boolean;
}>;
//# sourceMappingURL=provider-channel-routing.nats.d.ts.map