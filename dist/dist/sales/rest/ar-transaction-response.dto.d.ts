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
export declare class AROverviewAgingDto {
    current: number;
    days30: number;
    days60: number;
    days90: number;
    over120: number;
}
export declare class AROverviewItemDto {
    partnerId: string;
    partnerName: string;
    partnerType: string;
    balance: number;
    overdueAmount: number;
    lastTransactionDate?: string;
    oldestUnpaidDate?: string;
    salesPersonId?: string;
    salesPersonName?: string;
    agingBuckets: AROverviewAgingDto;
}
export declare class AROverviewSummaryDto {
    totalReceivable: number;
    totalOverdue: number;
    partnerCount: number;
    aging: AROverviewAgingDto;
}
export declare class AROverviewResponseDto {
    summary: AROverviewSummaryDto;
    items: AROverviewItemDto[];
    total: number;
    page: number;
    limit: number;
}
export declare class ARBySalesItemDto {
    salesPersonId: string;
    salesPersonName: string;
    partnerCount: number;
    totalBalance: number;
    overdueAmount: number;
    overduePercent: number;
}
export declare class ARBySalesResponseDto {
    items: ARBySalesItemDto[];
}
//# sourceMappingURL=ar-transaction-response.dto.d.ts.map