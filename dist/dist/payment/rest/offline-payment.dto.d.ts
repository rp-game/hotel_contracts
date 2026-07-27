import { OfflinePaymentStatus } from '../nats/offline-payment.nats';
export declare class OfflinePaymentDto {
    id: string;
    paymentId: string;
    bookingId: string;
    method: string;
    amount: number;
    currency: string;
    status: OfflinePaymentStatus;
    referenceNumber?: string;
    receiptNumber?: string;
    receivedAt?: string;
    receivedBy?: string;
    receivedByName?: string;
    confirmedAt?: string;
    confirmedBy?: string;
    notes?: string;
    createdAt: string;
    updatedAt: string;
}
export declare class OfflinePaymentResponseDto {
    status: string;
    message: string;
    data: OfflinePaymentDto;
}
export declare class OfflinePaymentListResponseDto {
    status: string;
    message: string;
    data: OfflinePaymentDto[];
}
/**
 * Request body for confirming a pending offline payment (bank transfer)
 * Used by accountant to confirm BANK_TRANSFER payments in VERIFIED mode
 */
export declare class ConfirmOfflinePaymentDto {
    confirmedBy: string;
    transactionId?: string;
    notes?: string;
}
/**
 * Request body for rejecting a pending offline payment (bank transfer)
 */
export declare class RejectOfflinePaymentDto {
    rejectedBy: string;
    notes?: string;
}
/**
 * Request body for refunding a confirmed offline payment (partial or full)
 */
export declare class RefundOfflinePaymentDto {
    amount: number;
    reason: string;
}
//# sourceMappingURL=offline-payment.dto.d.ts.map