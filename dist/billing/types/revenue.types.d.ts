/**
 * Revenue Stats Types
 *
 * Types for revenue statistics and analytics
 */
/**
 * Revenue Stats Query
 */
export interface RevenueStatsQuery {
    tenantId?: string;
    startDate?: Date;
    endDate?: Date;
    groupBy?: 'day' | 'week' | 'month' | 'quarter' | 'year';
    currency?: string;
}
/**
 * Revenue Data Point
 */
export declare class RevenueDataPoint {
    period: string;
    totalRevenue: number;
    invoiceCount: number;
    paidInvoices: number;
    overdueInvoices: number;
    averageInvoiceAmount: number;
    paymentCount: number;
    refundAmount: number;
}
/**
 * Revenue Stats Summary
 */
export declare class RevenueStatsSummary {
    totalRevenue: number;
    totalInvoices: number;
    totalPayments: number;
    totalRefunds: number;
    averageRevenue: number;
    growthRate: number;
}
/**
 * Top Tenant Item
 */
export declare class TopTenantItem {
    tenantId: string;
    tenantName: string;
    revenue: number;
    invoiceCount: number;
}
/**
 * Revenue Stats Response
 */
export declare class RevenueStatsResponse {
    currency: string;
    startDate: string;
    endDate: string;
    groupBy: string;
    summary: RevenueStatsSummary;
    data: RevenueDataPoint[];
    topTenants?: TopTenantItem[];
}
/**
 * Tenant Billing Summary
 */
export interface TenantBillingSummary {
    tenantId: string;
    tenantName: string;
    currentBalance: number;
    overdueAmount: number;
    totalInvoiced: number;
    totalPaid: number;
    activeInvoices: number;
    overdueInvoices: number;
    lastPaymentDate?: Date;
    lastInvoiceDate?: Date;
    nextBillingDate?: Date;
    currency: string;
}
//# sourceMappingURL=revenue.types.d.ts.map