import { ARTransactionType } from '../enums/sales.enum';
export declare class CreateARTransactionDto {
    hotelId: string;
    transactionType: ARTransactionType;
    amount: number;
    referenceNumber?: string;
    description?: string;
    transactionDate: string;
}
export declare class FindARTransactionsQueryDto {
    hotelId?: string;
    transactionType?: ARTransactionType;
    dateFrom?: string;
    dateTo?: string;
    page?: number;
    limit?: number;
}
export declare class GenerateStatementQueryDto {
    dateFrom: string;
    dateTo: string;
}
//# sourceMappingURL=ar-transaction.dto.d.ts.map