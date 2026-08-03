export declare class OpenCashierShiftDto {
    openingBalance: number;
}
export declare class CloseCashierShiftDto {
    closingBalance: number;
    notes?: string;
}
export declare class ForceCloseCashierShiftDto {
    closingBalance?: number;
    reason: string;
}
export declare class CashierShiftCurrencyBreakdownDto {
    currency: string;
    totalOriginalAmount: number;
    totalVndAmount: number;
    count: number;
}
export declare class CashierShiftPaymentSummaryDto {
    method: string;
    count: number;
    total: number;
    currencyBreakdown?: CashierShiftCurrencyBreakdownDto[];
}
export declare class CashierShiftDto {
    id: string;
    staffId: string;
    staffName: string;
    shiftDate: string;
    shiftType: string;
    openedAt: string;
    closedAt?: string;
    openingBalance: number;
    closingBalance?: number;
    expectedBalance?: number;
    discrepancy?: number;
    status: string;
    notes?: string;
    closedBy?: string;
    forceCloseReason?: string;
    createdAt: string;
    updatedAt: string;
}
export declare class CashierShiftDetailDto extends CashierShiftDto {
    paymentSummary: CashierShiftPaymentSummaryDto[];
    totalCashPayments: number;
    totalPaymentsCount: number;
}
export declare class CashierShiftCashTransactionSummaryDto {
    direction: string;
    category: string;
    count: number;
    total: number;
}
export declare class CashierShiftLedgerEntryDto {
    type: 'PAYMENT' | 'CASH_TRANSACTION';
    id: string;
    time: string;
    method?: string;
    direction?: string;
    category?: string;
    amount: number;
    description: string;
    performedByName?: string;
}
export declare class CashierShiftReportDto extends CashierShiftDetailDto {
    cashTransactionSummary: CashierShiftCashTransactionSummaryDto[];
    totalCashIn: number;
    totalCashOut: number;
    ledger: CashierShiftLedgerEntryDto[];
}
//# sourceMappingURL=cashier-shift.dto.d.ts.map