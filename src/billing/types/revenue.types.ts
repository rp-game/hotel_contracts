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
export interface RevenueDataPoint {
  period: string; // e.g., "2024-01", "2024-Q1", "2024-12-01"
  totalRevenue: number;
  invoiceCount: number;
  paidInvoices: number;
  overdueInvoices: number;
  averageInvoiceAmount: number;
  paymentCount: number;
  refundAmount: number;
}

/**
 * Revenue Stats Response
 */
export interface RevenueStatsResponse {
  currency: string;
  startDate: string;
  endDate: string;
  groupBy: string;
  summary: {
    totalRevenue: number;
    totalInvoices: number;
    totalPayments: number;
    totalRefunds: number;
    averageRevenue: number;
    growthRate: number;
  };
  data: RevenueDataPoint[];
  topTenants?: Array<{
    tenantId: string;
    tenantName: string;
    revenue: number;
    invoiceCount: number;
  }>;
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
