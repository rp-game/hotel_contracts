import { CashTransactionCategory, CashTransactionDirection } from '../nats/cash-transaction.nats';
export declare class CreateCashTransactionDto {
    cashierShiftId: string;
    direction: CashTransactionDirection;
    category: CashTransactionCategory;
    amount: number;
    currency?: string;
    reason: string;
    referenceNumber?: string;
}
export declare class CashTransactionDto {
    id: string;
    cashierShiftId: string;
    direction: string;
    category: string;
    amount: number;
    currency: string;
    reason: string;
    referenceNumber?: string;
    performedBy: string;
    performedByName: string;
    createdAt: string;
}
//# sourceMappingURL=cash-transaction.dto.d.ts.map