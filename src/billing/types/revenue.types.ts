/**
 * Revenue Stats Types
 *
 * Types for revenue statistics and analytics
 */

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

/**
 * Revenue Stats Query
 * Used for NATS request and REST query params
 */
export class RevenueStatsQuery {
  @ApiPropertyOptional({ description: 'Filter by tenant ID' })
  tenantId?: string;

  @ApiPropertyOptional({ description: 'Start date' })
  startDate?: Date;

  @ApiPropertyOptional({ description: 'End date' })
  endDate?: Date;

  @ApiPropertyOptional({ description: 'Grouping period', enum: ['day', 'week', 'month', 'quarter', 'year'], default: 'month' })
  groupBy?: 'day' | 'week' | 'month' | 'quarter' | 'year';

  @ApiPropertyOptional({ description: 'Currency code' })
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
 * Used for both NATS response and REST API response
 */
export class TenantBillingSummary {
  @ApiProperty({ description: 'Tenant ID' })
  tenantId: string;

  @ApiProperty({ description: 'Tenant name' })
  tenantName: string;

  @ApiProperty({ description: 'Current outstanding balance' })
  currentBalance: number;

  @ApiProperty({ description: 'Total overdue amount' })
  overdueAmount: number;

  @ApiProperty({ description: 'Total amount invoiced' })
  totalInvoiced: number;

  @ApiProperty({ description: 'Total amount paid' })
  totalPaid: number;

  @ApiProperty({ description: 'Number of active invoices' })
  activeInvoices: number;

  @ApiProperty({ description: 'Number of overdue invoices' })
  overdueInvoices: number;

  @ApiPropertyOptional({ description: 'Date of last payment' })
  lastPaymentDate?: Date;

  @ApiPropertyOptional({ description: 'Date of last invoice' })
  lastInvoiceDate?: Date;

  @ApiPropertyOptional({ description: 'Next billing date' })
  nextBillingDate?: Date;

  @ApiProperty({ description: 'Currency code' })
  currency: string;
}
