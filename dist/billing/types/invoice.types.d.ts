/**
 * Invoice Types
 *
 * Unified contracts for both NATS messages and REST API.
 * All types use class with @ApiProperty for single source of truth.
 */
import { BillingCycle, PlatformInvoiceStatus, InvoiceItemType } from './enums';
/**
 * Invoice Item
 */
export declare class InvoiceItem {
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
export declare class PlatformInvoice {
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
 * Used for NATS request and REST query params
 */
export declare class InvoiceListQuery {
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
 * Used for both NATS response and REST API response
 */
export declare class InvoiceListResponse {
    data: PlatformInvoice[];
    total: number;
    page: number;
    limit: number;
}
/**
 * Create Invoice Request
 * Used for both NATS request and REST API request
 */
export declare class CreateInvoiceRequest {
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
    items: InvoiceItem[];
}
//# sourceMappingURL=invoice.types.d.ts.map