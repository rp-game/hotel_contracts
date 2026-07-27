import { ChannelOtaMapping, CreateChannelOtaMappingDto, UpdateChannelOtaMappingDto, SyncOtaMappingsResult, StaahOtaChannel } from '../types/channel-ota-mapping.types';
export interface ListChannelOtaMappingsQuery {
    tenantId: string;
    hotelId: string;
    providerId?: string;
    isActive?: boolean;
}
export interface UpsertChannelOtaMappingRequest extends CreateChannelOtaMappingDto {
    id?: string;
}
export interface UpdateChannelOtaMappingRequest extends UpdateChannelOtaMappingDto {
    id: string;
    tenantId: string;
}
export interface DeleteChannelOtaMappingRequest {
    id: string;
    tenantId: string;
}
export interface SyncOtaMappingsRequest {
    providerId: string;
    tenantId: string;
    hotelId: string;
    mappingIds?: string[];
}
export type ListChannelOtaMappingsNatsResponse = {
    success: boolean;
    data: ChannelOtaMapping[];
};
export type UpsertChannelOtaMappingNatsResponse = {
    success: boolean;
    data?: ChannelOtaMapping;
    message?: string;
};
export type DeleteChannelOtaMappingNatsResponse = {
    success: boolean;
    message?: string;
};
export type SyncOtaMappingsNatsResponse = {
    success: boolean;
    data?: SyncOtaMappingsResult;
    message?: string;
};
export type ListStaahOtaChannelsNatsResponse = {
    success: boolean;
    data: StaahOtaChannel[];
};
//# sourceMappingURL=channel-ota-mapping.nats.d.ts.map