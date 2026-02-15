/**
 * Revenue Stats Types
 *
 * Types for revenue statistics and analytics
 */

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

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
export class RevenueDataPoint {
  @ApiProperty({ description: 'Period (e.g., "2024-01", "2024-Q1", "2024-12-01")', example: '2024-01' })
  period: string;

  @ApiProperty({ description: 'Total revenue for the period', example: 150000 })
  totalRevenue: number;

  @ApiProperty({ description: 'Number of invoices', example: 25 })
  invoiceCount: number;

  @ApiProperty({ description: 'Number of paid invoices', example: 20 })
  paidInvoices: number;

  @ApiProperty({ description: 'Number of overdue invoices', example: 3 })
  overdueInvoices: number;

  @ApiProperty({ description: 'Average invoice amount', example: 6000 })
  averageInvoiceAmount: number;

  @ApiProperty({ description: 'Number of payments', example: 22 })
  paymentCount: number;

  @ApiProperty({ description: 'Total refund amount', example: 5000 })
  refundAmount: number;
}

/**
 * Revenue Stats Summary
 */
export class RevenueStatsSummary {
  @ApiProperty({ description: 'Total revenue', example: 500000 })
  totalRevenue: number;

  @ApiProperty({ description: 'Total number of invoices', example: 150 })
  totalInvoices: number;

  @ApiProperty({ description: 'Total number of payments', example: 140 })
  totalPayments: number;

  @ApiProperty({ description: 'Total refunds amount', example: 15000 })
  totalRefunds: number;

  @ApiProperty({ description: 'Average revenue', example: 3333.33 })
  averageRevenue: number;

  @ApiProperty({ description: 'Revenue growth rate', example: 12.5 })
  growthRate: number;
}

/**
 * Top Tenant Item
 */
export class TopTenantItem {
  @ApiProperty({ description: 'Tenant ID', example: '123e4567-e89b-12d3-a456-426614174000' })
  tenantId: string;

  @ApiProperty({ description: 'Tenant name', example: 'Grand Hotel' })
  tenantName: string;

  @ApiProperty({ description: 'Revenue amount', example: 75000 })
  revenue: number;

  @ApiProperty({ description: 'Number of invoices', example: 12 })
  invoiceCount: number;
}

/**
 * Revenue Stats Response
 */
export class RevenueStatsResponse {
  @ApiProperty({ description: 'Currency code', example: 'VND' })
  currency: string;

  @ApiProperty({ description: 'Start date', example: '2024-01-01' })
  startDate: string;

  @ApiProperty({ description: 'End date', example: '2024-12-31' })
  endDate: string;

  @ApiProperty({ description: 'Grouping period', example: 'month' })
  groupBy: string;

  @ApiProperty({ description: 'Revenue summary', type: RevenueStatsSummary })
  summary: RevenueStatsSummary;

  @ApiProperty({ description: 'Revenue data points', type: [RevenueDataPoint] })
  data: RevenueDataPoint[];

  @ApiPropertyOptional({ description: 'Top tenants by revenue', type: [TopTenantItem] })
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
