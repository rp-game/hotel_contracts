import { NotificationChannel } from '../enums/notification.enum';
export interface ProviderSendResult {
    sent: number;
    failed: number;
    errors: Array<{
        recipient: string;
        error: string;
    }>;
    providerMessageIds: string[];
}
export interface ResolvedProviderConfig {
    provider: string;
    credentials: Record<string, any>;
    settings: Record<string, any>;
}
export interface BaseProvider {
    readonly name: string;
    validateConfig(config: ResolvedProviderConfig): {
        valid: boolean;
        errors?: string[];
    };
    healthCheck(config: ResolvedProviderConfig): Promise<{
        healthy: boolean;
        message?: string;
    }>;
}
export interface PushProvider extends BaseProvider {
    send(params: {
        tokens: string[];
        title: string;
        body: string;
        data?: Record<string, any>;
        priority?: 'default' | 'normal' | 'high';
    }, config: ResolvedProviderConfig): Promise<ProviderSendResult>;
}
export interface EmailProvider extends BaseProvider {
    send(params: {
        to: string[];
        subject: string;
        body: string;
        templateId?: string;
        templateData?: Record<string, any>;
    }, config: ResolvedProviderConfig): Promise<ProviderSendResult>;
}
export interface SmsProvider extends BaseProvider {
    send(params: {
        phoneNumbers: string[];
        message: string;
        templateId?: string;
        templateData?: Record<string, any>;
    }, config: ResolvedProviderConfig): Promise<ProviderSendResult>;
}
export interface TemplateProvider {
    readonly name: string;
    syncTemplates(config: ResolvedProviderConfig, tenantId: string): Promise<NotificationTemplate[]>;
}
export interface NotificationTemplate {
    id: string;
    providerTemplateId: string;
    name: string;
    channel: NotificationChannel;
    provider: string;
    description?: string;
    variables: string[];
    tenantId: string;
    isActive: boolean;
}
//# sourceMappingURL=provider.interfaces.d.ts.map