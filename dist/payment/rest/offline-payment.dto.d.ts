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
//# sourceMappingURL=offline-payment.dto.d.ts.map