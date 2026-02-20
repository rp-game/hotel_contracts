/**
 * Invoice Types
 *
 * Unified contracts for both NATS messages and REST API.
 * All types use class with @ApiProperty for single source of truth.
 */

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { BillingCycle, PlatformInvoiceStatus, InvoiceItemType } from './enums';

/**
 * Invoice Item
 */
export class InvoiceItem {
  @ApiPropertyOptional({ description: 'Invoice item ID' })
  id?: string;

  @ApiProperty({ enum: InvoiceItemType, description: 'Item type' })
  itemType: InvoiceItemType;

  @ApiProperty({ description: 'Item description' })
  description: string;

  @ApiProperty({ description: 'Unit price' })
  unitPrice: number;

  @ApiProperty({ description: 'Quantity' })
  quantity: number;

  @ApiProperty({ description: 'Total amount' })
  totalAmount: number;

  @ApiPropertyOptional({ description: 'Usage period start date' })
  usagePeriodStart?: Date;

  @ApiPropertyOptional({ description: 'Usage period end date' })
  usagePeriodEnd?: Date;

  @ApiPropertyOptional({ description: 'Usage details' })
  usageDetails?: {
    metricName: string;
    unit: string;
    includedQuantity: number;
    overageRate: number;
    totalUsage: number;
    overageQuantity: number;
  };

  @ApiPropertyOptional({ description: 'Tax rate (decimal)' })
  taxRate?: number;

  @ApiPropertyOptional({ description: 'Tax amount' })
  taxAmount?: number;

  @ApiPropertyOptional({ description: 'Whether item is taxable' })
  isTaxable?: boolean;
}

/**
 * Platform Invoice
 */
export class PlatformInvoice {
  @ApiProperty({ description: 'Invoice ID' })
  id: string;

  @ApiProperty({ description: 'Invoice number' })
  invoiceNumber: string;

  @ApiProperty({ description: 'Tenant ID' })
  tenantId: string;

  @ApiProperty({ description: 'Subscription ID' })
  subscriptionId: string;

  @ApiProperty({ enum: BillingCycle, description: 'Billing cycle' })
  billingCycle: BillingCycle;

  @ApiProperty({ enum: PlatformInvoiceStatus, description: 'Invoice status' })
  status: PlatformInvoiceStatus;

  @ApiProperty({ description: 'Billing period start date' })
  billingPeriodStart: Date;

  @ApiProperty({ description: 'Billing period end date' })
  billingPeriodEnd: Date;

  @ApiProperty({ description: 'Issue date' })
  issueDate: Date;

  @ApiProperty({ description: 'Due date' })
  dueDate: Date;

  @ApiPropertyOptional({ description: 'Paid date' })
  paidDate?: Date;

  @ApiProperty({ description: 'Base amount' })
  baseAmount: number;

  @ApiProperty({ description: 'Usage amount' })
  usageAmount: number;

  @ApiProperty({ description: 'Tax amount' })
  taxAmount: number;

  @ApiProperty({ description: 'Discount amount' })
  discountAmount: number;

  @ApiProperty({ description: 'Total amount' })
  totalAmount: number;

  @ApiProperty({ description: 'Amount paid' })
  amountPaid: number;

  @ApiProperty({ description: 'Balance due' })
  balanceDue: number;

  @ApiProperty({ description: 'Currency code' })
  currency: string;

  @ApiProperty({ description: 'Tenant name' })
  tenantName: string;

  @ApiProperty({ description: 'Tenant email' })
  tenantEmail: string;

  @ApiPropertyOptional({ description: 'Billing address' })
  billingAddress?: {
    street: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  };

  @ApiPropertyOptional({ description: 'Usage metrics' })
  usageMetrics?: {
    activeUsers: number;
    totalBookings: number;
    totalRevenue: number;
    storageUsedGB: number;
    apiCallsCount: number;
    additionalServices: Record<string, any>;
  };

  @ApiProperty({ description: 'Invoice line items', type: [InvoiceItem] })
  items: InvoiceItem[];

  @ApiPropertyOptional({ description: 'Notes' })
  notes?: string;

  @ApiProperty({ description: 'Created at' })
  createdAt: Date;

  @ApiProperty({ description: 'Updated at' })
  updatedAt: Date;
}

/**
 * Invoice List Query
 * Used for NATS request and REST query params
 */
export class InvoiceListQuery {
  @ApiPropertyOptional({ description: 'Filter by tenant ID' })
  tenantId?: string;

  @ApiPropertyOptional({ enum: PlatformInvoiceStatus, description: 'Filter by status' })
  status?: PlatformInvoiceStatus;

  @ApiPropertyOptional({ enum: BillingCycle, description: 'Filter by billing cycle' })
  billingCycle?: BillingCycle;

  @ApiPropertyOptional({ description: 'Issue start date' })
  issueStartDate?: Date;

  @ApiPropertyOptional({ description: 'Issue end date' })
  issueEndDate?: Date;

  @ApiPropertyOptional({ description: 'Due start date' })
  dueStartDate?: Date;

  @ApiPropertyOptional({ description: 'Due end date' })
  dueEndDate?: Date;

  @ApiPropertyOptional({ description: 'Minimum amount' })
  minAmount?: number;

  @ApiPropertyOptional({ description: 'Maximum amount' })
  maxAmount?: number;

  @ApiPropertyOptional({ description: 'Filter by tenant name' })
  tenantName?: string;

  @ApiPropertyOptional({ description: 'Page number', default: 1 })
  page?: number;

  @ApiPropertyOptional({ description: 'Items per page', default: 20 })
  limit?: number;

  @ApiPropertyOptional({ description: 'Sort by field' })
  sortBy?: string;

  @ApiPropertyOptional({ description: 'Sort order', enum: ['ASC', 'DESC'] })
  sortOrder?: 'ASC' | 'DESC';
}

/**
 * Invoice List Response
 * Used for both NATS response and REST API response
 */
export class InvoiceListResponse {
  @ApiProperty({ description: 'List of invoices', type: [PlatformInvoice] })
  data: PlatformInvoice[];

  @ApiProperty({ description: 'Total number of invoices' })
  total: number;

  @ApiProperty({ description: 'Current page' })
  page: number;

  @ApiProperty({ description: 'Items per page' })
  limit: number;
}

/**
 * Create Invoice Request
 * Used for both NATS request and REST API request
 */
export class CreateInvoiceRequest {
  @ApiProperty({ description: 'Tenant ID' })
  tenantId: string;

  @ApiProperty({ description: 'Subscription ID' })
  subscriptionId: string;

  @ApiProperty({ enum: BillingCycle, description: 'Billing cycle' })
  billingCycle: BillingCycle;

  @ApiProperty({ description: 'Billing period start date' })
  billingPeriodStart: Date;

  @ApiProperty({ description: 'Billing period end date' })
  billingPeriodEnd: Date;

  @ApiProperty({ description: 'Issue date' })
  issueDate: Date;

  @ApiProperty({ description: 'Due date' })
  dueDate: Date;

  @ApiProperty({ description: 'Base amount' })
  baseAmount: number;

  @ApiPropertyOptional({ description: 'Usage amount', default: 0 })
  usageAmount?: number;

  @ApiPropertyOptional({ description: 'Tax amount', default: 0 })
  taxAmount?: number;

  @ApiPropertyOptional({ description: 'Discount amount', default: 0 })
  discountAmount?: number;

  @ApiProperty({ description: 'Total amount' })
  totalAmount: number;

  @ApiProperty({ description: 'Tenant name' })
  tenantName: string;

  @ApiProperty({ description: 'Tenant email' })
  tenantEmail: string;

  @ApiPropertyOptional({ description: 'Billing address' })
  billingAddress?: {
    street: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  };

  @ApiPropertyOptional({ description: 'Usage metrics' })
  usageMetrics?: {
    activeUsers: number;
    totalBookings: number;
    totalRevenue: number;
    storageUsedGB: number;
    apiCallsCount: number;
    additionalServices: Record<string, any>;
  };

  @ApiPropertyOptional({ description: 'Notes' })
  notes?: string;

  @ApiProperty({ description: 'Invoice line items', type: [InvoiceItem] })
  items: InvoiceItem[];
}
