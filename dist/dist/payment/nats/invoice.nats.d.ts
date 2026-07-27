/**
 * Invoice Domain NATS Message Contracts
 *
 * These interfaces define the request/response shapes for invoice operations
 * via NATS messaging between API Gateway and Payment Service
 *
 * Patterns:
 * - invoice.create
 * - invoice.createManual
 * - invoice.findAll
 * - invoice.findOne
 * - invoice.send
 * - invoice.pdf
 * - invoice.updateStatus
 *
 * Handler: payment-service (invoices module)
 */
import { NatsResponse } from '../../common/nats-response.interface';
export declare class PaymentInvoiceItem {
    id: string;
    description: string;
    quantity: number;
    unitPrice: number;
    discount?: number;
    taxRate?: number;
    taxAmount?: number;
    subtotal?: number;
    total: number;
    unit?: string;
    type?: string;
    referenceId?: string;
}
/**
 * Invoice item for create/update requests
 * Matches payment service CreateInvoiceItemDto
 */
export declare class CreateInvoiceItemRequest {
    description: string;
    quantity: number;
    unitPrice: number;
    discount?: number;
    taxRate?: number;
    type?: string;
    referenceId?: string;
}
export declare enum PaymentInvoiceStatus {
    DRAFT = "DRAFT",
    ISSUED = "ISSUED",
    PAID = "PAID",
    PARTIALLY_PAID = "PARTIALLY_PAID",
    OVERDUE = "OVERDUE",
    CANCELLED = "CANCELLED",
    VOIDED = "VOIDED"
}
export declare class PaymentInvoice {
    id: string;
    tenantId: string;
    hotelId: string;
    bookingId?: string;
    customerId?: string;
    invoiceNumber: string;
    amount: number;
    currency: string;
    status: PaymentInvoiceStatus | string;
    dueDate: string;
    paidAt?: string;
    items: PaymentInvoiceItem[];
    createdAt?: string;
    updatedAt?: string;
}
/**
 * Invoice item data with full details including tax, discount calculations
 * This matches what the handler actually returns
 */
export declare class InvoiceItemData {
    id: string;
    description: string;
    quantity: number;
    unitPrice: number;
    amount: number;
    subtotal: number;
    tax: number;
    taxAmount: number;
    taxRate: number;
    discount: number;
    total: number;
}
/**
 * Enriched invoice data with customer, booking details and calculated fields
 * This matches what the NATS handler actually returns in invoice list responses
 * Replaces the simpler PaymentInvoice type for list responses
 */
export declare class InvoiceDataItem {
    id: string;
    invoiceNumber: string;
    bookingId?: string;
    bookingCode?: string;
    customerId?: string;
    guestName?: string;
    guestEmail?: string;
    customerName?: string;
    customerAddress?: string;
    customerTaxCode?: string;
    amount: number;
    subtotal: number;
    tax: number;
    taxAmount: number;
    taxRate: number;
    discount: number;
    totalAmount: number;
    total: number;
    paidAmount?: number;
    remainingAmount?: number;
    currency: string;
    status: string;
    paymentStatus: string;
    dueDate?: string;
    issuedDate?: string;
    issuedAt?: string;
    paidAt?: string;
    notes?: string;
    tenantId: string;
    hotelId?: string;
    createdAt: string;
    updatedAt: string;
    createdBy?: string;
    createdByName?: string;
    items?: InvoiceItemData[];
}
export declare class PaymentCreateInvoiceNatsRequest {
    tenantId: string;
    hotelId: string;
    bookingId?: string;
    customerId?: string;
    invoiceNumber: string;
    amount: number;
    currency: string;
    dueDate: string;
    items: CreateInvoiceItemRequest[];
    createdBy?: string;
    createdByName?: string;
}
export declare class CreateInvoiceData {
    id: string;
    tenantId: string;
    hotelId: string;
    invoiceNumber: string;
    bookingId?: string;
    customerId?: string;
    customerName?: string;
    customerAddress?: string;
    customerTaxCode?: string;
    subtotal: number;
    taxAmount: number;
    taxRate: number;
    discount: number;
    total: number;
    currency: string;
    status: string;
    paymentStatus?: string;
    dueDate?: string;
    issuedAt?: string;
    paidAt?: string;
    notes?: string;
    voidReason?: string;
    createdBy?: string;
    createdByName?: string;
    createdAt: string;
    updatedAt?: string;
    items: PaymentInvoiceItem[];
}
export type PaymentCreateInvoiceNatsResponse = NatsResponse<CreateInvoiceData>;
export declare class PaymentCreateManualInvoiceNatsRequest {
    tenantId: string;
    hotelId: string;
    bookingId?: string;
    customerId?: string;
    customerName?: string;
    customerEmail?: string;
    customerPhone?: string;
    customerAddress?: string;
    customerTaxCode?: string;
    invoiceNumber?: string;
    amount?: number;
    taxRate?: number;
    discount?: number;
    currency?: string;
    dueDate?: string;
    notes?: string;
    items: CreateInvoiceItemRequest[];
    createdBy?: string;
    createdByName?: string;
}
export type PaymentCreateManualInvoiceNatsResponse = NatsResponse<CreateInvoiceData>;
export declare class GetInvoicesNatsRequest {
    tenantId: string;
    hotelId?: string;
    status?: string;
    customerId?: string;
    guestName?: string;
    dateFrom?: string;
    dateTo?: string;
    page?: number;
    limit?: number;
    createdBy?: string;
}
export declare class GetPaymentInvoicesData {
    data: InvoiceDataItem[];
    total: number;
    page: number;
    limit: number;
    totalPages?: number;
}
export type GetInvoicesNatsResponse = NatsResponse<GetPaymentInvoicesData>;
export declare class GetInvoiceNatsRequest {
    id: string;
    tenantId: string;
    hotelId?: string;
}
export declare class GetInvoiceData {
    id: string;
    tenantId: string;
    hotelId: string;
    bookingId?: string;
    customerId?: string;
    invoiceNumber: string;
    amount: number;
    currency: string;
    status: string;
    dueDate: string;
    paidAt?: string;
    items: PaymentInvoiceItem[];
    createdAt: string;
    updatedAt: string;
}
export type GetInvoiceNatsResponse = NatsResponse<GetInvoiceData>;
export declare class SendInvoiceNatsRequest {
    id: string;
    tenantId: string;
    hotelId?: string;
    sendToEmail?: string;
}
export declare class SendInvoiceData {
    success: boolean;
    sentAt: string;
    message: string;
    invoiceId: string;
    recipientEmail?: string;
}
export type SendInvoiceNatsResponse = NatsResponse<SendInvoiceData>;
export declare class DownloadInvoicePdfNatsRequest {
    id: string;
    tenantId: string;
    hotelId?: string;
}
export declare class DownloadInvoicePdfData {
    pdfUrl: string;
    filename: string;
    invoiceId: string;
    generatedAt: string;
}
export type DownloadInvoicePdfNatsResponse = NatsResponse<DownloadInvoicePdfData>;
export declare class UpdateInvoiceStatusNatsRequest {
    id: string;
    status: PaymentInvoiceStatus | string;
    tenantId: string;
    hotelId?: string;
}
export declare class UpdateInvoiceStatusData {
    id: string;
    invoiceNumber: string;
    status: string;
    previousStatus: string;
    updatedAt: string;
}
export type UpdateInvoiceStatusNatsResponse = NatsResponse<UpdateInvoiceStatusData>;
export declare class VoidInvoiceNatsRequest {
    id: string;
    tenantId: string;
    hotelId?: string;
    reason: string;
    performedBy?: string;
    performedByName?: string;
}
export type VoidInvoiceNatsResponse = NatsResponse<PaymentInvoice>;
/** REST body DTO for POST /financial/invoices/:id/void */
export declare class VoidInvoiceBodyDto {
    reason: string;
}
//# sourceMappingURL=invoice.nats.d.ts.map