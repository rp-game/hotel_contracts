/**
 * Group Deposit NATS Contracts
 *
 * NATS Patterns:
 *   group-block.deposit_payment  — record a deposit payment
 *   group-block.deposit_void     — void a deposit payment
 *   group-block.deposit_list     — list deposit payments
 *
 * Handler: booking-service
 * Called by: api-gateway
 */
export interface RecordGroupDepositNatsRequest {
    tenantId: string;
    hotelId: string;
    groupBlockId: string;
    amount: number;
    paymentMethod: string;
    reference?: string;
    notes?: string;
    userId: string;
    userName: string;
}
export interface VoidGroupDepositNatsRequest {
    tenantId: string;
    hotelId: string;
    groupBlockId: string;
    depositPaymentId: string;
    reason?: string;
    userId: string;
    userName: string;
}
export interface ListGroupDepositsNatsRequest {
    tenantId: string;
    hotelId: string;
    groupBlockId: string;
}
export interface GroupDepositPaymentItem {
    id: string;
    groupBlockId: string;
    amount: number;
    paymentMethod: string;
    reference: string | null;
    notes: string | null;
    status: 'ACTIVE' | 'VOIDED';
    receivedBy: string;
    receivedByName: string | null;
    voidedAt: string | null;
    voidReason: string | null;
    createdAt: string;
}
export interface GroupDepositListResult {
    deposits: GroupDepositPaymentItem[];
    totalDeposited: number;
    totalVoided: number;
    netDeposited: number;
}
//# sourceMappingURL=group-deposit.nats.d.ts.map