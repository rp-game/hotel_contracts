/**
 * Provider-Channel Routing Type Definitions
 *
 * Records which OTA channels each CMS provider serves.
 * One CMS aggregator (STAAH, eviivo, SiteMinder) typically dispatches
 * to many channels (Booking, Agoda, Expedia, Trip, Traveloka).
 *
 * Owned by channel-service. Drives the channel dropdown in distribution UI:
 * after a user picks a provider, the channel dropdown is filtered to those
 * channels the provider has enabled.
 */
export declare class ProviderChannelRouting {
    id: string;
    providerId: string;
    channelName: string;
    isEnabled: boolean;
    createdAt: string;
    updatedAt: string;
}
export declare class UpsertProviderChannelRoutingRequest {
    providerId: string;
    channelName: string;
    isEnabled?: boolean;
}
export declare class ListProviderChannelRoutingQuery {
    providerId?: string;
    channelName?: string;
    isEnabled?: boolean;
}
//# sourceMappingURL=provider-channel-routing.types.d.ts.map