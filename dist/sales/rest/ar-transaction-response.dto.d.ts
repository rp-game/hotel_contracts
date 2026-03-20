export declare class ARTransactionResponseDto {
    id: string;
    hotelId: string;
    corporateAccountId: string;
    bookingId?: string;
    transactionType: string;
    amount: number;
    description?: string;
    referenceNumber?: string;
    dueDate?: string;
    transactionDate: string;
    currency: string;
    createdBy: string;
    createdByName?: string;
    createdAt: Date;
}
export declare class ARTransactionListResponseDto {
    transactions: ARTransactionResponseDto[];
    total: number;
    page: number;
    limit: number;
    totalPages: number;
}
export declare class AgingBreakdownDto {
    current: number;
    days30: number;
    days60: number;
    days90plus: number;
}
export declare class ARSummaryResponseDto {
    corporateAccountId: string;
    companyName: string;
    creditLimit: number;
    currentBalance: number;
    pendingBookingsTotal: number;
    totalExposure: number;
    availableCredit: number;
    utilizationPercent: number;
    aging: AgingBreakdownDto;
    lastPaymentDate?: string;
    lastPaymentAmount?: number;
}
export declare class CreditCheckResponseDto {
    creditLimit: number;
    currentBalance: number;
    pendingBookingsTotal: number;
    totalExposure: number;
    newAmount: number;
    projectedExposure: number;
    exceedsLimit: boolean;
    availableCredit: number;
}
//# sourceMappingURL=ar-transaction-response.dto.d.ts.map