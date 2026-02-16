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

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
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

export class SendInvoiceNatsRequest {
  @ApiProperty({ description: 'Invoice ID', example: '123e4567-e89b-12d3-a456-426614174000' })
  id: string;

  @ApiProperty({ description: 'Tenant ID', example: '123e4567-e89b-12d3-a456-426614174001' })
  tenantId: string;

  @ApiPropertyOptional({ description: 'Hotel ID', example: '123e4567-e89b-12d3-a456-426614174002' })
  hotelId?: string;

  @ApiPropertyOptional({ description: 'Email address to send invoice to (optional, uses guest email if not provided)', example: 'customer@example.com' })
  sendToEmail?: string;
}

export class SendInvoiceData {
  @ApiProperty({ description: 'Operation success status', example: true })
  success: boolean;

  @ApiProperty({ description: 'Timestamp when invoice was sent', example: '2024-01-15T10:30:00.000Z' })
  sentAt: string;

  @ApiProperty({ description: 'Confirmation message', example: 'Invoice sent successfully' })
  message: string;

  @ApiProperty({ description: 'Invoice ID that was sent', example: '123e4567-e89b-12d3-a456-426614174000' })
  invoiceId: string;

  @ApiPropertyOptional({ description: 'Email address where invoice was sent', example: 'customer@example.com' })
  recipientEmail?: string;
}

export type SendInvoiceNatsResponse = NatsResponse<SendInvoiceData>;

// ============================================================================
// DOWNLOAD INVOICE PDF (GET /invoices/:id/pdf)
// ============================================================================

export class DownloadInvoicePdfNatsRequest {
  @ApiProperty({ description: 'Invoice ID', example: '123e4567-e89b-12d3-a456-426614174000' })
  id: string;

  @ApiProperty({ description: 'Tenant ID', example: '123e4567-e89b-12d3-a456-426614174001' })
  tenantId: string;

  @ApiPropertyOptional({ description: 'Hotel ID', example: '123e4567-e89b-12d3-a456-426614174002' })
  hotelId?: string;
}

export class DownloadInvoicePdfData {
  @ApiProperty({ description: 'PDF file URL or base64 data', example: 'https://storage.example.com/invoices/invoice-123.pdf' })
  pdfUrl: string;

  @ApiProperty({ description: 'Suggested filename for download', example: 'invoice-INV-2024-001.pdf' })
  filename: string;

  @ApiProperty({ description: 'Invoice ID', example: '123e4567-e89b-12d3-a456-426614174000' })
  invoiceId: string;

  @ApiProperty({ description: 'Timestamp when PDF was generated', example: '2024-01-15T10:30:00.000Z' })
  generatedAt: string;
}

export type DownloadInvoicePdfNatsResponse = NatsResponse<DownloadInvoicePdfData>;

// ============================================================================
// UPDATE INVOICE STATUS (PUT /invoices/:id/status)
// ============================================================================

export class UpdateInvoiceStatusNatsRequest {
  @ApiProperty({ description: 'Invoice ID', example: '123e4567-e89b-12d3-a456-426614174000' })
  id: string;

  @ApiProperty({ description: 'New invoice status', example: 'PAID' })
  status: PaymentInvoiceStatus | string;

  @ApiProperty({ description: 'Tenant ID', example: '123e4567-e89b-12d3-a456-426614174001' })
  tenantId: string;

  @ApiPropertyOptional({ description: 'Hotel ID', example: '123e4567-e89b-12d3-a456-426614174002' })
  hotelId?: string;
}

export class UpdateInvoiceStatusData {
  @ApiProperty({ description: 'Invoice ID', example: '123e4567-e89b-12d3-a456-426614174000' })
  id: string;

  @ApiProperty({ description: 'Invoice number', example: 'INV-2024-001' })
  invoiceNumber: string;

  @ApiProperty({ description: 'New invoice status', example: 'PAID' })
  status: string;

  @ApiProperty({ description: 'Previous invoice status', example: 'SENT' })
  previousStatus: string;

  @ApiProperty({ description: 'Update timestamp', example: '2024-01-15T10:30:00.000Z' })
  updatedAt: string;
}

export type UpdateInvoiceStatusNatsResponse = NatsResponse<UpdateInvoiceStatusData>;
