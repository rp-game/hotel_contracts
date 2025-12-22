/**
 * Invoice Types
 *
 * Types for platform invoices and invoice items
 */

import { BillingCycle, PlatformInvoiceStatus, InvoiceItemType } from './enums';

/**
 * Invoice Item
 */
export interface InvoiceItem {
  id?: string;
  itemType: InvoiceItemType;
  description: string;
  unitPrice: number;
  quantity: number;
  totalAmount: number;
  usagePeriodStart?: Date;
  usagePeriodEnd?: Date;
  usageDetails?: {
    metricName: string;
    unit: string;
    includedQuantity: number;
    overageRate: number;
    totalUsage: number;
    overageQuantity: number;
  };
  taxRate?: number;
  taxAmount?: number;
  isTaxable?: boolean;
}

/**
 * Platform Invoice
 */
export interface PlatformInvoice {
  id: string;
  invoiceNumber: string;
  tenantId: string;
  subscriptionId: string;
  billingCycle: BillingCycle;
  status: PlatformInvoiceStatus;
  billingPeriodStart: Date;
  billingPeriodEnd: Date;
  issueDate: Date;
  dueDate: Date;
  paidDate?: Date;
  baseAmount: number;
  usageAmount: number;
  taxAmount: number;
  discountAmount: number;
  totalAmount: number;
  amountPaid: number;
  balanceDue: number;
  currency: string;
  tenantName: string;
  tenantEmail: string;
  billingAddress?: {
    street: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  };
  usageMetrics?: {
    activeUsers: number;
    totalBookings: number;
    totalRevenue: number;
    storageUsedGB: number;
    apiCallsCount: number;
    additionalServices: Record<string, any>;
  };
  items: InvoiceItem[];
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * Invoice List Query
 */
export interface InvoiceListQuery {
  tenantId?: string;
  status?: PlatformInvoiceStatus;
  billingCycle?: BillingCycle;
  issueStartDate?: Date;
  issueEndDate?: Date;
  dueStartDate?: Date;
  dueEndDate?: Date;
  minAmount?: number;
  maxAmount?: number;
  tenantName?: string;
  page?: number;
  limit?: number;
  sortBy?: string;
  sortOrder?: 'ASC' | 'DESC';
}

/**
 * Invoice List Response
 */
export interface InvoiceListResponse {
  invoices: PlatformInvoice[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

/**
 * Create Invoice Request
 */
export interface CreateInvoiceRequest {
  tenantId: string;
  subscriptionId: string;
  billingCycle: BillingCycle;
  billingPeriodStart: Date;
  billingPeriodEnd: Date;
  issueDate: Date;
  dueDate: Date;
  baseAmount: number;
  usageAmount?: number;
  taxAmount?: number;
  discountAmount?: number;
  totalAmount: number;
  tenantName: string;
  tenantEmail: string;
  billingAddress?: {
    street: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  };
  usageMetrics?: {
    activeUsers: number;
    totalBookings: number;
    totalRevenue: number;
    storageUsedGB: number;
    apiCallsCount: number;
    additionalServices: Record<string, any>;
  };
  notes?: string;
  items: Array<{
    itemType: InvoiceItemType;
    description: string;
    unitPrice: number;
    quantity: number;
    totalAmount: number;
    usagePeriodStart?: Date;
    usagePeriodEnd?: Date;
    usageDetails?: {
      metricName: string;
      unit: string;
      includedQuantity: number;
      overageRate: number;
      totalUsage: number;
      overageQuantity: number;
    };
    taxRate?: number;
    taxAmount?: number;
    isTaxable?: boolean;
  }>;
}
