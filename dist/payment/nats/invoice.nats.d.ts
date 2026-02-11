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
export interface PaymentInvoiceItem {
    description: string;
    quantity: number;
    unitPrice: number;
    amount: number;
}
export declare enum PaymentInvoiceStatus {
    DRAFT = "draft",
    SENT = "sent",
    PAID = "paid",
    OVERDUE = "overdue",
    CANCELLED = "cancelled"
}
export interface PaymentInvoice {
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
    items?: InvoiceItemData[];
}
export interface PaymentCreateInvoiceNatsRequest {
    tenantId: string;
    hotelId: string;
    bookingId?: string;
    customerId?: string;
    invoiceNumber: string;
    amount: number;
    currency: string;
    dueDate: string;
    items: PaymentInvoiceItem[];
}
export interface CreateInvoiceData {
    id: string;
    tenantId: string;
    hotelId: string;
    invoiceNumber: string;
    amount: number;
    currency: string;
    status: string;
    dueDate: string;
    items: PaymentInvoiceItem[];
    createdAt: string;
}
export type PaymentCreateInvoiceNatsResponse = NatsResponse<CreateInvoiceData>;
export interface PaymentCreateManualInvoiceNatsRequest {
    tenantId: string;
    hotelId: string;
    invoiceNumber: string;
    amount: number;
    currency: string;
    dueDate: string;
    items: PaymentInvoiceItem[];
}
export type PaymentCreateManualInvoiceNatsResponse = NatsResponse<CreateInvoiceData>;
export interface GetInvoicesNatsRequest {
    tenantId: string;
    hotelId?: string;
    status?: string;
    customerId?: string;
    guestName?: string;
    dateFrom?: string;
    dateTo?: string;
    page?: number;
    limit?: number;
}
export declare class GetPaymentInvoicesData {
    data: InvoiceDataItem[];
    total: number;
    page: number;
    limit: number;
    totalPages?: number;
}
export type GetInvoicesNatsResponse = NatsResponse<GetPaymentInvoicesData>;
export interface GetInvoiceNatsRequest {
    id: string;
    tenantId: string;
    hotelId?: string;
}
export interface GetInvoiceData {
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
export interface SendInvoiceNatsRequest {
    id: string;
    tenantId: string;
    hotelId?: string;
    sendToEmail?: string;
}
export interface SendInvoiceData {
    success: boolean;
    sentAt: string;
    message: string;
    invoiceId: string;
    recipientEmail?: string;
}
export type SendInvoiceNatsResponse = NatsResponse<SendInvoiceData>;
export interface DownloadInvoicePdfNatsRequest {
    id: string;
    tenantId: string;
    hotelId?: string;
}
export interface DownloadInvoicePdfData {
    pdfUrl: string;
    filename: string;
    invoiceId: string;
    generatedAt: string;
}
export type DownloadInvoicePdfNatsResponse = NatsResponse<DownloadInvoicePdfData>;
export interface UpdateInvoiceStatusNatsRequest {
    id: string;
    status: PaymentInvoiceStatus | string;
    tenantId: string;
    hotelId?: string;
}
export interface UpdateInvoiceStatusData {
    id: string;
    invoiceNumber: string;
    status: string;
    previousStatus: string;
    updatedAt: string;
}
export type UpdateInvoiceStatusNatsResponse = NatsResponse<UpdateInvoiceStatusData>;
//# sourceMappingURL=invoice.nats.d.ts.map