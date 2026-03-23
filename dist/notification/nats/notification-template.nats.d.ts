import { NatsResponse } from '../../common';
/**
 * Notification Template NATS Contracts
 * Handler: notification-service
 */
export declare const NOTIFICATION_TEMPLATE_PATTERNS: {
    readonly CREATE: "notification.template.create";
};
export declare class CreateNotificationTemplateNatsRequest {
    tenantId: string;
    name: string;
    channel: string;
    provider: string;
    providerTemplateId: string;
    description?: string;
    variables?: string[];
    isActive?: boolean;
}
export declare class NotificationTemplateResponse {
    id: string;
    tenantId: string;
    name: string;
    channel: string;
    provider: string;
    providerTemplateId: string;
    description?: string;
    variables: string[];
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
}
export type CreateNotificationTemplateNatsResponse = NatsResponse<NotificationTemplateResponse>;
//# sourceMappingURL=notification-template.nats.d.ts.map