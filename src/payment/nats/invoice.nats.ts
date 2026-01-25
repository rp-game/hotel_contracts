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
  page?: number;
  limit?: number;
}

export interface GetPaymentInvoicesData {
  invoices: PaymentInvoice[];
  total: number;
  page: number;
  limit: number;
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
