import { NatsResponse } from '../../common';
/**
 * Payment Method NATS Contracts
 * Handler: payment-service
 */
export declare const PAYMENT_METHOD_PATTERNS: {
    readonly CREATE: "payment.payment-methods.create";
    readonly FIND_ALL: "payment.payment-methods.findAll";
};
export declare class CreatePaymentMethodNatsRequest {
    tenantId: string;
    hotelId: string;
    name: string;
    description?: string;
    isActive?: boolean;
}
export declare class PaymentMethodResponse {
    id: string;
    tenantId: string;
    hotelId: string;
    name: string;
    description?: string;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
}
export type CreatePaymentMethodNatsResponse = NatsResponse<PaymentMethodResponse>;
//# sourceMappingURL=payment-methods.nats.d.ts.map