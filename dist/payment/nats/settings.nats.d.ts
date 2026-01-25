import { NatsResponse } from '../../common/nats-response.interface';
/**
 * Get Payment Settings NATS Contract
 * Pattern: settings.find
 * Retrieves payment settings for a tenant/hotel/chain
 */
export interface GetPaymentSettingsNatsRequest {
    tenantId: string;
    hotelId?: string;
    chainId?: string;
}
export interface PaymentSettingsData {
    id: string;
    tenantId: string;
    hotelId?: string;
    chainId?: string;
    defaultCurrency: string;
    autoProcessPayments?: boolean;
    retrySettings?: {
        maxRetries: number;
        retryIntervalHours: number;
        exponentialBackoff: boolean;
    };
    notificationSettings?: {
        sendPaymentConfirmation: boolean;
        sendPaymentFailure: boolean;
        sendInvoiceReminders: boolean;
        reminderDaysBefore: number[];
    };
    paymentTermsDays?: number;
    latePaymentFeePercentage?: number;
    minimumPaymentAmount?: number;
    allowPartialPayments?: boolean;
    createdAt: string;
    updatedAt: string;
}
export type GetPaymentSettingsNatsResponse = NatsResponse<PaymentSettingsData>;
/**
 * Update Payment Settings NATS Contract
 * Pattern: settings.update
 * Updates payment settings for a tenant/hotel
 */
export interface UpdatePaymentSettingsNatsRequest {
    tenantId: string;
    hotelId?: string;
    chainId?: string;
    defaultCurrency?: string;
    autoProcessPayments?: boolean;
    retrySettings?: {
        maxRetries: number;
        retryIntervalHours: number;
        exponentialBackoff: boolean;
    };
    notificationSettings?: {
        sendPaymentConfirmation: boolean;
        sendPaymentFailure: boolean;
        sendInvoiceReminders: boolean;
        reminderDaysBefore: number[];
    };
    paymentTermsDays?: number;
    latePaymentFeePercentage?: number;
    minimumPaymentAmount?: number;
    allowPartialPayments?: boolean;
}
export type UpdatePaymentSettingsNatsResponse = NatsResponse<PaymentSettingsData>;
//# sourceMappingURL=settings.nats.d.ts.map