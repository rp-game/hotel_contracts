/**
 * AR Transaction NATS Contracts
 *
 * NATS Patterns:
 *   - ar-transaction.create
 *   - ar-transaction.find_all
 *   - ar-summary.get
 *   - ar-statement.generate
 */
export declare class CreateARTransactionNatsRequest {
    tenantId: string;
    hotelId: string;
    corporateAccountId: string;
    bookingId?: string;
    transactionType: string;
    amount: number;
    description?: string;
    referenceNumber?: string;
    transactionDate: string;
    dueDate?: string;
    createdBy: string;
    createdByName?: string;
}
export declare class FindARTransactionsNatsRequest {
    tenantId: string;
    corporateAccountId: string;
    hotelId?: string;
    transactionType?: string;
    dateFrom?: string;
    dateTo?: string;
    page?: number;
    limit?: number;
}
export declare class GetARSummaryNatsRequest {
    tenantId: string;
    corporateAccountId: string;
}
export declare class GenerateARStatementNatsRequest {
    tenantId: string;
    corporateAccountId: string;
    dateFrom: string;
    dateTo: string;
}
//# sourceMappingURL=ar-transaction.nats.d.ts.map