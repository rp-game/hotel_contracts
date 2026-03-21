/**
 * E-Invoice Domain NATS Message Contracts
 *
 * Patterns:
 * - einvoice.create
 * - einvoice.create_from_invoice
 * - einvoice.update
 * - einvoice.issue
 * - einvoice.delete
 * - einvoice.find_all
 * - einvoice.find_one
 * - einvoice.get_pdf
 * - einvoice.get_html
 * - einvoice.provider_config.save
 * - einvoice.provider_config.get
 *
 * Handler: payment-service (einvoice module)
 */

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { NatsResponse, NatsPaginatedResponse } from '../../common/nats-response.interface';
import { EInvoiceStatus, CustomerType, InvoicePaymentMethod, ProviderType, EInvoiceAction } from '../enums';

// ============================================================================
// SHARED DATA TYPES
// ============================================================================

/**
 * Input item for create/update requests (computed fields optional — service calculates them)
 */
export class EInvoiceItemInput {
  @ApiProperty({ description: 'Item order' })
  orderBy: number;

  @ApiPropertyOptional({ description: 'Product/service code' })
  code?: string;

  @ApiProperty({ description: 'Product/service name' })
  name: string;

  @ApiPropertyOptional({ description: 'Unit of measurement (e.g., Đêm, Lần, Phần)' })
  unit?: string;

  @ApiProperty({ description: 'Quantity' })
  quantity: number;

  @ApiProperty({ description: 'Unit price' })
  unitPrice: number;

  @ApiProperty({ description: 'VAT rate (-3, -2, -1, 0, 5, 8, 10)' })
  vatRate: number;

  @ApiPropertyOptional({ description: 'Discount percentage' })
  discount?: number;
}

/**
 * Full item data with computed fields (for responses)
 */
export class EInvoiceItemData extends EInvoiceItemInput {
  @ApiProperty({ description: 'Subtotal (quantity * unitPrice)' })
  subtotal: number;

  @ApiProperty({ description: 'VAT amount' })
  vatAmount: number;

  @ApiProperty({ description: 'Total (subtotal + vatAmount)' })
  total: number;

  @ApiPropertyOptional({ description: 'Discount amount' })
  discountAmount?: number;
}

export class EInvoiceHistoryData {
  @ApiProperty({ description: 'History record ID' })
  id: string;

  @ApiProperty({ description: 'Action performed', enum: EInvoiceAction })
  action: EInvoiceAction;

  @ApiPropertyOptional({ description: 'Performed by user ID' })
  performedBy?: string;

  @ApiPropertyOptional({ description: 'Performed by user name' })
  performedByName?: string;

  @ApiPropertyOptional({ description: 'Action details (provider response, errors, etc.)' })
  details?: any;

  @ApiProperty({ description: 'Timestamp' })
  createdAt: string;
}

export class EInvoiceData {
  @ApiProperty({ description: 'E-Invoice ID' })
  id: string;

  @ApiProperty({ description: 'Tenant ID' })
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID' })
  hotelId: string;

  @ApiPropertyOptional({ description: 'Linked Invoice ID' })
  invoiceId?: string;

  @ApiProperty({ description: 'Internal invoice code' })
  invoiceCode: string;

  @ApiProperty({ description: 'Status', enum: EInvoiceStatus })
  status: EInvoiceStatus;

  @ApiProperty({ description: 'Provider type', enum: ProviderType })
  providerType: ProviderType;

  @ApiProperty({ description: 'System-generated fkey sent to provider' })
  providerFkey: string;

  @ApiPropertyOptional({ description: 'Provider internal key' })
  providerKey?: string;

  @ApiPropertyOptional({ description: 'Invoice number from provider' })
  invoiceNumber?: string;

  @ApiProperty({ description: 'Invoice pattern (mẫu số)' })
  pattern: string;

  @ApiProperty({ description: 'Invoice serial (ký hiệu)' })
  serial: string;

  @ApiProperty({ description: 'Customer type', enum: CustomerType })
  customerType: CustomerType;

  @ApiPropertyOptional({ description: 'Company name' })
  customerName?: string;

  @ApiPropertyOptional({ description: 'Customer tax code (MST)' })
  customerTaxCode?: string;

  @ApiPropertyOptional({ description: 'Customer address' })
  customerAddress?: string;

  @ApiPropertyOptional({ description: 'Customer email' })
  customerEmail?: string;

  @ApiPropertyOptional({ description: 'Customer phone' })
  customerPhone?: string;

  @ApiPropertyOptional({ description: 'Buyer name (individual)' })
  buyerName?: string;

  @ApiProperty({ description: 'Payment method', enum: InvoicePaymentMethod })
  paymentMethod: InvoicePaymentMethod;

  @ApiProperty({ description: 'Currency', default: 'VND' })
  currency: string;

  @ApiProperty({ description: 'Subtotal before tax' })
  subtotal: number;

  @ApiProperty({ description: 'VAT amount' })
  vatAmount: number;

  @ApiProperty({ description: 'Total amount' })
  totalAmount: number;

  @ApiPropertyOptional({ description: 'Amount in words' })
  amountInWords?: string;

  @ApiProperty({ description: 'Arising date (ISO format)' })
  arisingDate: string;

  @ApiPropertyOptional({ description: 'Issued at timestamp' })
  issuedAt?: string;

  @ApiPropertyOptional({ description: 'Notes' })
  notes?: string;

  @ApiPropertyOptional({ description: 'Created by user ID' })
  createdBy?: string;

  @ApiPropertyOptional({ description: 'Created by user name' })
  createdByName?: string;

  @ApiProperty({ description: 'Creation timestamp' })
  createdAt: string;

  @ApiProperty({ description: 'Last update timestamp' })
  updatedAt: string;

  @ApiPropertyOptional({ description: 'Line items', type: [EInvoiceItemData] })
  items?: EInvoiceItemData[];

  @ApiPropertyOptional({ description: 'History records', type: [EInvoiceHistoryData] })
  history?: EInvoiceHistoryData[];
}

export class EInvoiceSummary {
  @ApiProperty({ description: 'E-Invoice ID' })
  id: string;

  @ApiProperty({ description: 'Internal invoice code' })
  invoiceCode: string;

  @ApiProperty({ description: 'Status', enum: EInvoiceStatus })
  status: EInvoiceStatus;

  @ApiPropertyOptional({ description: 'Invoice number from provider' })
  invoiceNumber?: string;

  @ApiPropertyOptional({ description: 'Customer name' })
  customerName?: string;

  @ApiPropertyOptional({ description: 'Buyer name' })
  buyerName?: string;

  @ApiProperty({ description: 'Customer type', enum: CustomerType })
  customerType: CustomerType;

  @ApiProperty({ description: 'Total amount' })
  totalAmount: number;

  @ApiProperty({ description: 'Arising date' })
  arisingDate: string;

  @ApiProperty({ description: 'Payment method', enum: InvoicePaymentMethod })
  paymentMethod: InvoicePaymentMethod;

  @ApiProperty({ description: 'Creation timestamp' })
  createdAt: string;
}

export class ProviderConfigData {
  @ApiProperty({ description: 'Config ID' })
  id: string;

  @ApiProperty({ description: 'Tenant ID' })
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID' })
  hotelId: string;

  @ApiProperty({ description: 'Provider type', enum: ProviderType })
  providerType: ProviderType;

  @ApiProperty({ description: 'Is active' })
  isActive: boolean;

  @ApiProperty({ description: 'API URL' })
  apiUrl: string;

  @ApiProperty({ description: 'Username' })
  username: string;

  @ApiPropertyOptional({ description: 'HSM serial cert' })
  serialCert?: string;

  @ApiProperty({ description: 'Tax code (MST)' })
  taxCode: string;

  @ApiProperty({ description: 'Company name' })
  companyName: string;

  @ApiProperty({ description: 'Company address' })
  companyAddress: string;

  @ApiProperty({ description: 'Invoice pattern (mẫu số)' })
  pattern: string;

  @ApiProperty({ description: 'Invoice serial (ký hiệu)' })
  serial: string;

  @ApiPropertyOptional({ description: 'Default currency', default: 'VND' })
  defaultCurrency?: string;

  @ApiPropertyOptional({ description: 'Default VAT rate', default: 8 })
  defaultVatRate?: number;
}

// ============================================================================
// NATS PATTERNS
// ============================================================================

export const EINVOICE_PATTERNS = {
  CREATE: 'einvoice.create',
  CREATE_FROM_INVOICE: 'einvoice.create_from_invoice',
  UPDATE: 'einvoice.update',
  ISSUE: 'einvoice.issue',
  DELETE: 'einvoice.delete',
  FIND_ALL: 'einvoice.find_all',
  FIND_ONE: 'einvoice.find_one',
  GET_PDF: 'einvoice.get_pdf',
  GET_HTML: 'einvoice.get_html',
  PROVIDER_CONFIG_SAVE: 'einvoice.provider_config.save',
  PROVIDER_CONFIG_GET: 'einvoice.provider_config.get',
  CANCEL: 'einvoice.cancel',
  ADJUST: 'einvoice.adjust',
  REPLACE: 'einvoice.replace',
} as const;

// ============================================================================
// REQUEST TYPES
// ============================================================================

export class CreateEInvoiceNatsRequest {
  @ApiProperty({ description: 'Tenant ID' })
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID' })
  hotelId: string;

  @ApiPropertyOptional({ description: 'User ID' })
  userId?: string;

  @ApiPropertyOptional({ description: 'User name' })
  userName?: string;

  @ApiProperty({ description: 'Customer type', enum: CustomerType })
  customerType: CustomerType;

  @ApiPropertyOptional({ description: 'Company name (required for BUSINESS)' })
  customerName?: string;

  @ApiPropertyOptional({ description: 'Customer tax code (required for BUSINESS)' })
  customerTaxCode?: string;

  @ApiPropertyOptional({ description: 'Customer address (required for BUSINESS)' })
  customerAddress?: string;

  @ApiPropertyOptional({ description: 'Customer email' })
  customerEmail?: string;

  @ApiPropertyOptional({ description: 'Customer phone' })
  customerPhone?: string;

  @ApiPropertyOptional({ description: 'Buyer name (required for INDIVIDUAL)' })
  buyerName?: string;

  @ApiProperty({ description: 'Payment method', enum: InvoicePaymentMethod })
  paymentMethod: InvoicePaymentMethod;

  @ApiProperty({ description: 'Arising date (ISO YYYY-MM-DD)' })
  arisingDate: string;

  @ApiPropertyOptional({ description: 'Notes' })
  notes?: string;

  @ApiProperty({ description: 'Line items', type: [EInvoiceItemInput] })
  items: EInvoiceItemInput[];
}

export class CreateEInvoiceFromInvoiceNatsRequest {
  @ApiProperty({ description: 'Tenant ID' })
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID' })
  hotelId: string;

  @ApiPropertyOptional({ description: 'User ID' })
  userId?: string;

  @ApiPropertyOptional({ description: 'User name' })
  userName?: string;

  @ApiProperty({ description: 'Source Invoice ID' })
  invoiceId: string;

  @ApiProperty({ description: 'Customer type', enum: CustomerType })
  customerType: CustomerType;

  @ApiPropertyOptional({ description: 'Company name (override)' })
  customerName?: string;

  @ApiPropertyOptional({ description: 'Customer tax code (override)' })
  customerTaxCode?: string;

  @ApiPropertyOptional({ description: 'Customer address (override)' })
  customerAddress?: string;

  @ApiPropertyOptional({ description: 'Customer email' })
  customerEmail?: string;

  @ApiPropertyOptional({ description: 'Customer phone' })
  customerPhone?: string;

  @ApiPropertyOptional({ description: 'Buyer name' })
  buyerName?: string;

  @ApiProperty({ description: 'Payment method', enum: InvoicePaymentMethod })
  paymentMethod: InvoicePaymentMethod;

  @ApiPropertyOptional({ description: 'Arising date (ISO YYYY-MM-DD). Defaults to today.' })
  arisingDate?: string;

  @ApiPropertyOptional({ description: 'Notes' })
  notes?: string;
}

export class UpdateEInvoiceNatsRequest {
  @ApiProperty({ description: 'Tenant ID' })
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID' })
  hotelId: string;

  @ApiProperty({ description: 'E-Invoice ID' })
  id: string;

  @ApiPropertyOptional({ description: 'User ID' })
  userId?: string;

  @ApiPropertyOptional({ description: 'User name' })
  userName?: string;

  @ApiPropertyOptional({ description: 'Customer type', enum: CustomerType })
  customerType?: CustomerType;

  @ApiPropertyOptional({ description: 'Company name' })
  customerName?: string;

  @ApiPropertyOptional({ description: 'Customer tax code' })
  customerTaxCode?: string;

  @ApiPropertyOptional({ description: 'Customer address' })
  customerAddress?: string;

  @ApiPropertyOptional({ description: 'Customer email' })
  customerEmail?: string;

  @ApiPropertyOptional({ description: 'Customer phone' })
  customerPhone?: string;

  @ApiPropertyOptional({ description: 'Buyer name' })
  buyerName?: string;

  @ApiPropertyOptional({ description: 'Payment method', enum: InvoicePaymentMethod })
  paymentMethod?: InvoicePaymentMethod;

  @ApiPropertyOptional({ description: 'Arising date (ISO YYYY-MM-DD)' })
  arisingDate?: string;

  @ApiPropertyOptional({ description: 'Notes' })
  notes?: string;

  @ApiPropertyOptional({ description: 'Updated line items', type: [EInvoiceItemInput] })
  items?: EInvoiceItemInput[];
}

export class IssueEInvoiceNatsRequest {
  @ApiProperty({ description: 'Tenant ID' })
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID' })
  hotelId: string;

  @ApiProperty({ description: 'E-Invoice ID' })
  id: string;

  @ApiPropertyOptional({ description: 'User ID' })
  userId?: string;

  @ApiPropertyOptional({ description: 'User name' })
  userName?: string;
}

export class DeleteEInvoiceNatsRequest {
  @ApiProperty({ description: 'Tenant ID' })
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID' })
  hotelId: string;

  @ApiProperty({ description: 'E-Invoice ID' })
  id: string;

  @ApiPropertyOptional({ description: 'User ID' })
  userId?: string;

  @ApiPropertyOptional({ description: 'User name' })
  userName?: string;
}

export class FindEInvoicesNatsRequest {
  @ApiProperty({ description: 'Tenant ID' })
  tenantId: string;

  @ApiPropertyOptional({ description: 'Hotel ID' })
  hotelId?: string;

  @ApiPropertyOptional({ description: 'Filter by status', enum: EInvoiceStatus })
  status?: EInvoiceStatus;

  @ApiPropertyOptional({ description: 'Search query (invoice code, customer name)' })
  search?: string;

  @ApiPropertyOptional({ description: 'Filter by date from (ISO)' })
  dateFrom?: string;

  @ApiPropertyOptional({ description: 'Filter by date to (ISO)' })
  dateTo?: string;

  @ApiPropertyOptional({ description: 'Page number', default: 1 })
  page?: number;

  @ApiPropertyOptional({ description: 'Items per page', default: 20 })
  limit?: number;
}

export class FindEInvoiceNatsRequest {
  @ApiProperty({ description: 'Tenant ID' })
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID' })
  hotelId: string;

  @ApiProperty({ description: 'E-Invoice ID' })
  id: string;
}

export class GetEInvoicePdfNatsRequest {
  @ApiProperty({ description: 'Tenant ID' })
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID' })
  hotelId: string;

  @ApiProperty({ description: 'E-Invoice ID' })
  id: string;
}

export class GetEInvoiceHtmlNatsRequest {
  @ApiProperty({ description: 'Tenant ID' })
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID' })
  hotelId: string;

  @ApiProperty({ description: 'E-Invoice ID' })
  id: string;
}

export class SaveProviderConfigNatsRequest {
  @ApiProperty({ description: 'Tenant ID' })
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID' })
  hotelId: string;

  @ApiProperty({ description: 'Provider type', enum: ProviderType })
  providerType: ProviderType;

  @ApiProperty({ description: 'API URL' })
  apiUrl: string;

  @ApiProperty({ description: 'Username' })
  username: string;

  @ApiProperty({ description: 'Password' })
  password: string;

  @ApiPropertyOptional({ description: 'HSM serial cert' })
  serialCert?: string;

  @ApiProperty({ description: 'Tax code (MST)' })
  taxCode: string;

  @ApiProperty({ description: 'Company name' })
  companyName: string;

  @ApiProperty({ description: 'Company address' })
  companyAddress: string;

  @ApiProperty({ description: 'Invoice pattern (mẫu số)' })
  pattern: string;

  @ApiProperty({ description: 'Invoice serial (ký hiệu)' })
  serial: string;

  @ApiPropertyOptional({ description: 'Default currency', default: 'VND' })
  defaultCurrency?: string;

  @ApiPropertyOptional({ description: 'Default VAT rate', default: 8 })
  defaultVatRate?: number;
}

export class GetProviderConfigNatsRequest {
  @ApiProperty({ description: 'Tenant ID' })
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID' })
  hotelId: string;
}

// ============================================================================
// CANCEL / ADJUST / REPLACE REQUEST TYPES
// ============================================================================

export class CancelEInvoiceNatsRequest {
  @ApiProperty({ description: 'E-Invoice ID' })
  id: string;

  @ApiProperty({ description: 'Tenant ID' })
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID' })
  hotelId: string;

  @ApiProperty({ description: 'Reason for cancellation' })
  reason: string;

  @ApiPropertyOptional({ description: 'User ID' })
  userId?: string;

  @ApiPropertyOptional({ description: 'User name' })
  userName?: string;
}

export class AdjustEInvoiceNatsRequest {
  @ApiProperty({ description: 'Original E-Invoice ID to adjust' })
  originalEInvoiceId: string;

  @ApiProperty({ description: 'Tenant ID' })
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID' })
  hotelId: string;

  @ApiProperty({ description: 'Reason for adjustment' })
  reason: string;

  @ApiPropertyOptional({ description: 'Adjusted items (if changing line items)', type: [EInvoiceItemInput] })
  items?: EInvoiceItemInput[];

  @ApiPropertyOptional({ description: 'User ID' })
  userId?: string;

  @ApiPropertyOptional({ description: 'User name' })
  userName?: string;
}

export class ReplaceEInvoiceNatsRequest {
  @ApiProperty({ description: 'Original E-Invoice ID to replace' })
  originalEInvoiceId: string;

  @ApiProperty({ description: 'Tenant ID' })
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID' })
  hotelId: string;

  @ApiProperty({ description: 'Reason for replacement' })
  reason: string;

  @ApiPropertyOptional({ description: 'Replacement items (if changing line items)', type: [EInvoiceItemInput] })
  items?: EInvoiceItemInput[];

  @ApiPropertyOptional({ description: 'Override customer info' })
  customerName?: string;

  @ApiPropertyOptional()
  customerTaxCode?: string;

  @ApiPropertyOptional()
  customerAddress?: string;

  @ApiPropertyOptional({ description: 'User ID' })
  userId?: string;

  @ApiPropertyOptional({ description: 'User name' })
  userName?: string;
}

// ============================================================================
// RESPONSE TYPES
// ============================================================================

export type CreateEInvoiceNatsResponse = NatsResponse<EInvoiceData>;
export type CreateEInvoiceFromInvoiceNatsResponse = NatsResponse<EInvoiceData>;
export type UpdateEInvoiceNatsResponse = NatsResponse<EInvoiceData>;
export type IssueEInvoiceNatsResponse = NatsResponse<EInvoiceData>;
export type DeleteEInvoiceNatsResponse = NatsResponse<{ id: string }>;
export type FindEInvoicesNatsResponse = NatsPaginatedResponse<EInvoiceSummary>;
export type FindEInvoiceNatsResponse = NatsResponse<EInvoiceData>;
export type GetEInvoicePdfNatsResponse = NatsResponse<{ pdf: string }>; // base64
export type GetEInvoiceHtmlNatsResponse = NatsResponse<{ html: string }>;
export type SaveProviderConfigNatsResponse = NatsResponse<ProviderConfigData>;
export type GetProviderConfigNatsResponse = NatsResponse<ProviderConfigData>;
export type CancelEInvoiceNatsResponse = NatsResponse<EInvoiceData>;
export type AdjustEInvoiceNatsResponse = NatsResponse<EInvoiceData>;
export type ReplaceEInvoiceNatsResponse = NatsResponse<EInvoiceData>;
