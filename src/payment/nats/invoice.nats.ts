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

import { ApiProperty } from '@nestjs/swagger';
import { NatsResponse } from '../../common/nats-response.interface';

// ============================================================================
// SHARED TYPES
// ============================================================================

export interface PaymentInvoiceItem {
  description: string;
  quantity: number;
  unitPrice: number;
  amount: number;
}

export enum PaymentInvoiceStatus {
  DRAFT = 'draft',
  SENT = 'sent',
  PAID = 'paid',
  OVERDUE = 'overdue',
  CANCELLED = 'cancelled',
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

// ============================================================================
// ENRICHED INVOICE TYPES (from NATS handler - matches actual response)
// ============================================================================

/**
 * Invoice item data with full details including tax, discount calculations
 * This matches what the handler actually returns
 */
export class InvoiceItemData {
  @ApiProperty({ description: 'Item ID' })
  id: string;

  @ApiProperty({ description: 'Item description' })
  description: string;

  @ApiProperty({ description: 'Quantity' })
  quantity: number;

  @ApiProperty({ description: 'Unit price' })
  unitPrice: number;

  @ApiProperty({ description: 'Total amount' })
  amount: number;

  @ApiProperty({ description: 'Subtotal before tax and discount' })
  subtotal: number;

  @ApiProperty({ description: 'Tax amount' })
  tax: number;

  @ApiProperty({ description: 'Tax amount (alias)' })
  taxAmount: number;

  @ApiProperty({ description: 'Tax rate percentage' })
  taxRate: number;

  @ApiProperty({ description: 'Discount amount' })
  discount: number;

  @ApiProperty({ description: 'Total amount after tax and discount' })
  total: number;
}

/**
 * Enriched invoice data with customer, booking details and calculated fields
 * This matches what the NATS handler actually returns in invoice list responses
 * Replaces the simpler PaymentInvoice type for list responses
 */
export class InvoiceDataItem {
  @ApiProperty({ description: 'Invoice ID' })
  id: string;

  @ApiProperty({ description: 'Invoice number' })
  invoiceNumber: string;

  @ApiProperty({ description: 'Booking ID', required: false })
  bookingId?: string;

  @ApiProperty({ description: 'Booking code', required: false })
  bookingCode?: string;

  @ApiProperty({ description: 'Customer ID', required: false })
  customerId?: string;

  @ApiProperty({ description: 'Guest name', required: false })
  guestName?: string;

  @ApiProperty({ description: 'Guest email', required: false })
  guestEmail?: string;

  @ApiProperty({ description: 'Customer name', required: false })
  customerName?: string;

  @ApiProperty({ description: 'Customer address', required: false })
  customerAddress?: string;

  @ApiProperty({ description: 'Customer tax code', required: false })
  customerTaxCode?: string;

  @ApiProperty({ description: 'Invoice amount' })
  amount: number;

  @ApiProperty({ description: 'Subtotal before tax and discount' })
  subtotal: number;

  @ApiProperty({ description: 'Tax amount' })
  tax: number;

  @ApiProperty({ description: 'Tax amount (alias)' })
  taxAmount: number;

  @ApiProperty({ description: 'Tax rate percentage' })
  taxRate: number;

  @ApiProperty({ description: 'Discount amount' })
  discount: number;

  @ApiProperty({ description: 'Total amount' })
  totalAmount: number;

  @ApiProperty({ description: 'Total (alias)' })
  total: number;

  @ApiProperty({ description: 'Paid amount', required: false })
  paidAmount?: number;

  @ApiProperty({ description: 'Remaining amount', required: false })
  remainingAmount?: number;

  @ApiProperty({ description: 'Currency code' })
  currency: string;

  @ApiProperty({ description: 'Invoice status' })
  status: string;

  @ApiProperty({ description: 'Payment status' })
  paymentStatus: string;

  @ApiProperty({ description: 'Due date', required: false })
  dueDate?: string;

  @ApiProperty({ description: 'Issued date', required: false })
  issuedDate?: string;

  @ApiProperty({ description: 'Issued at timestamp', required: false })
  issuedAt?: string;

  @ApiProperty({ description: 'Paid at timestamp', required: false })
  paidAt?: string;

  @ApiProperty({ description: 'Notes', required: false })
  notes?: string;

  @ApiProperty({ description: 'Tenant ID' })
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID', required: false })
  hotelId?: string;

  @ApiProperty({ description: 'Created at timestamp' })
  createdAt: string;

  @ApiProperty({ description: 'Updated at timestamp' })
  updatedAt: string;

  @ApiProperty({ description: 'Invoice items', type: [InvoiceItemData], required: false })
  items?: InvoiceItemData[];
}

// ============================================================================
// CREATE INVOICE (POST /invoices)
// ============================================================================

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

// ============================================================================
// CREATE MANUAL INVOICE (POST /invoices/manual)
// ============================================================================

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

// ============================================================================
// GET INVOICES (GET /invoices)
// ============================================================================

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

export class GetPaymentInvoicesData {
  @ApiProperty({ description: 'List of invoices', type: [InvoiceDataItem] })
  data: InvoiceDataItem[];

  @ApiProperty({ description: 'Total number of invoices' })
  total: number;

  @ApiProperty({ description: 'Current page number' })
  page: number;

  @ApiProperty({ description: 'Number of items per page' })
  limit: number;

  @ApiProperty({ description: 'Total number of pages', required: false })
  totalPages?: number;
}

export type GetInvoicesNatsResponse = NatsResponse<GetPaymentInvoicesData>;

// ============================================================================
// GET INVOICE (GET /invoices/:id)
// ============================================================================

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

// ============================================================================
// SEND INVOICE (POST /invoices/:id/send)
// ============================================================================

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

// ============================================================================
// DOWNLOAD INVOICE PDF (GET /invoices/:id/pdf)
// ============================================================================

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

// ============================================================================
// UPDATE INVOICE STATUS (PUT /invoices/:id/status)
// ============================================================================

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
