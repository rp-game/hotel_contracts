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
//# sourceMappingURL=cashier-shift.dto.d.ts.map