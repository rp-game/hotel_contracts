import { NotificationChannel } from '../enums/notification.enum';
export declare class UpsertProviderConfigNatsRequest {
    tenantId?: string;
    hotelId?: string;
    channel: NotificationChannel;
    provider: string;
    credentials?: Record<string, any>;
    settings?: Record<string, any>;
    isEnabled?: boolean;
    isAvailable?: boolean;
    healthCheck?: boolean;
}
export declare class UpsertProviderConfigNatsResponse {
    id: string;
    message: string;
    healthCheck?: {
        healthy: boolean;
        message?: string;
    };
}
export declare class GetProviderConfigNatsRequest {
    tenantId?: string;
    hotelId?: string;
    channel: NotificationChannel;
}
export declare class GetProviderConfigNatsResponse {
    provider: string;
    settings: Record<string, any>;
    hasCredentials: boolean;
}
export declare class DeleteProviderConfigNatsRequest {
    tenantId?: string;
    hotelId?: string;
    channel: NotificationChannel;
}
export declare class DeleteProviderConfigNatsResponse {
    deleted: boolean;
    message: string;
}
export declare class ListNotificationProvidersNatsResponse {
    push: string[];
    email: string[];
    sms: string[];
    templates: string[];
}
export declare class UpsertChannelAddonNatsRequest {
    tenantId: string;
    channel: NotificationChannel;
    isAvailable: boolean;
    enabledBy?: string;
    metadata?: Record<string, any>;
}
export declare class UpsertChannelAddonNatsResponse {
    id: string;
    tenantId: string;
    channel: NotificationChannel;
    isAvailable: boolean;
    enabledAt?: Date;
    disabledAt?: Date;
    message: string;
}
export declare class GetChannelAddonsNatsRequest {
    tenantId: string;
}
export declare class ChannelStatusDto {
    available: boolean;
    addon: boolean;
    enabledAt?: Date;
}
export declare class GetChannelAddonsNatsResponse {
    channels: {
        in_app: ChannelStatusDto;
        push: ChannelStatusDto;
        email: ChannelStatusDto;
        sms: ChannelStatusDto;
        websocket: ChannelStatusDto;
    };
}
export declare class CheckChannelAvailabilityNatsRequest {
    tenantId: string;
    channel: NotificationChannel;
}
export declare class CheckChannelAvailabilityNatsResponse {
    available: boolean;
}
export declare class SyncTemplatesNatsRequest {
    tenantId: string;
    channel: NotificationChannel;
    hotelId?: string;
}
export declare class SyncedTemplateDto {
    id: string;
    name: string;
    providerTemplateId: string;
    variables: string[];
}
export declare class SyncTemplatesNatsResponse {
    synced: number;
    templates: SyncedTemplateDto[];
}
//# sourceMappingURL=provider-config.nats.d.ts.map