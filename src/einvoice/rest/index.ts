/**
 * E-Invoice REST DTOs
 * Used by API Gateway for Swagger documentation and request validation
 */

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsOptional, IsEnum, IsArray, ValidateNested, IsNumber, Min, IsDateString } from 'class-validator';
import { Type } from 'class-transformer';
import { EInvoiceStatus, CustomerType, InvoicePaymentMethod, ProviderType } from '../enums';

// ============================================================================
// REQUEST DTOs
// ============================================================================

export class CreateEInvoiceItemDto {
  @ApiProperty({ description: 'Item order' })
  @IsNumber()
  @Min(1)
  orderBy: number;

  @ApiPropertyOptional({ description: 'Product/service code' })
  @IsOptional()
  @IsString()
  code?: string;

  @ApiProperty({ description: 'Product/service name' })
  @IsString()
  name: string;

  @ApiPropertyOptional({ description: 'Unit of measurement' })
  @IsOptional()
  @IsString()
  unit?: string;

  @ApiProperty({ description: 'Quantity' })
  @IsNumber()
  @Min(0)
  quantity: number;

  @ApiProperty({ description: 'Unit price' })
  @IsNumber()
  @Min(0)
  unitPrice: number;

  @ApiProperty({ description: 'VAT rate (-3, -2, -1, 0, 5, 8, 10)' })
  @IsNumber()
  vatRate: number;

  @ApiPropertyOptional({ description: 'Discount percentage', default: 0 })
  @IsOptional()
  @IsNumber()
  discount?: number;
}

export class CreateEInvoiceDto {
  @ApiProperty({ description: 'Customer type', enum: CustomerType })
  @IsEnum(CustomerType)
  customerType: CustomerType;

  @ApiPropertyOptional({ description: 'Company name (required for BUSINESS)' })
  @IsOptional()
  @IsString()
  customerName?: string;

  @ApiPropertyOptional({ description: 'Customer tax code (required for BUSINESS)' })
  @IsOptional()
  @IsString()
  customerTaxCode?: string;

  @ApiPropertyOptional({ description: 'Customer address (required for BUSINESS)' })
  @IsOptional()
  @IsString()
  customerAddress?: string;

  @ApiPropertyOptional({ description: 'Customer email' })
  @IsOptional()
  @IsString()
  customerEmail?: string;

  @ApiPropertyOptional({ description: 'Customer phone' })
  @IsOptional()
  @IsString()
  customerPhone?: string;

  @ApiPropertyOptional({ description: 'Buyer name (required for INDIVIDUAL)' })
  @IsOptional()
  @IsString()
  buyerName?: string;

  @ApiProperty({ description: 'Payment method', enum: InvoicePaymentMethod })
  @IsEnum(InvoicePaymentMethod)
  paymentMethod: InvoicePaymentMethod;

  @ApiProperty({ description: 'Arising date (ISO YYYY-MM-DD)' })
  @IsDateString()
  arisingDate: string;

  @ApiPropertyOptional({ description: 'Notes' })
  @IsOptional()
  @IsString()
  notes?: string;

  @ApiProperty({ description: 'Line items', type: [CreateEInvoiceItemDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateEInvoiceItemDto)
  items: CreateEInvoiceItemDto[];
}

export class CreateEInvoiceFromInvoiceDto {
  @ApiProperty({ description: 'Customer type', enum: CustomerType })
  @IsEnum(CustomerType)
  customerType: CustomerType;

  @ApiPropertyOptional({ description: 'Company name (override)' })
  @IsOptional()
  @IsString()
  customerName?: string;

  @ApiPropertyOptional({ description: 'Customer tax code (override)' })
  @IsOptional()
  @IsString()
  customerTaxCode?: string;

  @ApiPropertyOptional({ description: 'Customer address (override)' })
  @IsOptional()
  @IsString()
  customerAddress?: string;

  @ApiPropertyOptional({ description: 'Customer email' })
  @IsOptional()
  @IsString()
  customerEmail?: string;

  @ApiPropertyOptional({ description: 'Customer phone' })
  @IsOptional()
  @IsString()
  customerPhone?: string;

  @ApiPropertyOptional({ description: 'Buyer name' })
  @IsOptional()
  @IsString()
  buyerName?: string;

  @ApiProperty({ description: 'Payment method', enum: InvoicePaymentMethod })
  @IsEnum(InvoicePaymentMethod)
  paymentMethod: InvoicePaymentMethod;

  @ApiPropertyOptional({ description: 'Arising date (ISO YYYY-MM-DD). Defaults to today.' })
  @IsOptional()
  @IsDateString()
  arisingDate?: string;

  @ApiPropertyOptional({ description: 'Notes' })
  @IsOptional()
  @IsString()
  notes?: string;
}

export class UpdateEInvoiceDto {
  @ApiPropertyOptional({ description: 'Customer type', enum: CustomerType })
  @IsOptional()
  @IsEnum(CustomerType)
  customerType?: CustomerType;

  @ApiPropertyOptional({ description: 'Company name' })
  @IsOptional()
  @IsString()
  customerName?: string;

  @ApiPropertyOptional({ description: 'Customer tax code' })
  @IsOptional()
  @IsString()
  customerTaxCode?: string;

  @ApiPropertyOptional({ description: 'Customer address' })
  @IsOptional()
  @IsString()
  customerAddress?: string;

  @ApiPropertyOptional({ description: 'Customer email' })
  @IsOptional()
  @IsString()
  customerEmail?: string;

  @ApiPropertyOptional({ description: 'Customer phone' })
  @IsOptional()
  @IsString()
  customerPhone?: string;

  @ApiPropertyOptional({ description: 'Buyer name' })
  @IsOptional()
  @IsString()
  buyerName?: string;

  @ApiPropertyOptional({ description: 'Payment method', enum: InvoicePaymentMethod })
  @IsOptional()
  @IsEnum(InvoicePaymentMethod)
  paymentMethod?: InvoicePaymentMethod;

  @ApiPropertyOptional({ description: 'Arising date (ISO YYYY-MM-DD)' })
  @IsOptional()
  @IsDateString()
  arisingDate?: string;

  @ApiPropertyOptional({ description: 'Notes' })
  @IsOptional()
  @IsString()
  notes?: string;

  @ApiPropertyOptional({ description: 'Updated line items', type: [CreateEInvoiceItemDto] })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateEInvoiceItemDto)
  items?: CreateEInvoiceItemDto[];
}

export class FindEInvoicesQueryDto {
  @ApiPropertyOptional({ description: 'Filter by status', enum: EInvoiceStatus })
  @IsOptional()
  @IsEnum(EInvoiceStatus)
  status?: EInvoiceStatus;

  @ApiPropertyOptional({ description: 'Search query' })
  @IsOptional()
  @IsString()
  search?: string;

  @ApiPropertyOptional({ description: 'Date from (ISO)' })
  @IsOptional()
  @IsDateString()
  dateFrom?: string;

  @ApiPropertyOptional({ description: 'Date to (ISO)' })
  @IsOptional()
  @IsDateString()
  dateTo?: string;

  @ApiPropertyOptional({ description: 'Page number', default: 1 })
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(1)
  page?: number;

  @ApiPropertyOptional({ description: 'Items per page', default: 20 })
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(1)
  limit?: number;
}

export class SaveProviderConfigDto {
  @ApiProperty({ description: 'Provider type', enum: ProviderType })
  @IsEnum(ProviderType)
  providerType: ProviderType;

  @ApiProperty({ description: 'API URL' })
  @IsString()
  apiUrl: string;

  @ApiProperty({ description: 'Username' })
  @IsString()
  username: string;

  @ApiProperty({ description: 'Password' })
  @IsString()
  password: string;

  @ApiPropertyOptional({ description: 'HSM serial cert' })
  @IsOptional()
  @IsString()
  serialCert?: string;

  @ApiProperty({ description: 'Tax code (MST)' })
  @IsString()
  taxCode: string;

  @ApiProperty({ description: 'Company name' })
  @IsString()
  companyName: string;

  @ApiProperty({ description: 'Company address' })
  @IsString()
  companyAddress: string;

  @ApiProperty({ description: 'Invoice pattern (mẫu số)' })
  @IsString()
  pattern: string;

  @ApiProperty({ description: 'Invoice serial (ký hiệu)' })
  @IsString()
  serial: string;

  @ApiPropertyOptional({ description: 'Default currency', default: 'VND' })
  @IsOptional()
  @IsString()
  defaultCurrency?: string;

  @ApiPropertyOptional({ description: 'Default VAT rate', default: 8 })
  @IsOptional()
  @IsNumber()
  defaultVatRate?: number;
}

export class CancelEInvoiceBodyDto {
  @ApiProperty({ description: 'Reason for cancellation' })
  @IsString()
  reason: string;
}

export class AdjustEInvoiceBodyDto {
  @ApiProperty({ description: 'Reason for adjustment' })
  @IsString()
  reason: string;

  @ApiPropertyOptional({ description: 'Adjusted items (uses original items if not provided)', type: [CreateEInvoiceItemDto] })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateEInvoiceItemDto)
  items?: CreateEInvoiceItemDto[];
}

export class ReplaceEInvoiceBodyDto {
  @ApiProperty({ description: 'Reason for replacement' })
  @IsString()
  reason: string;

  @ApiPropertyOptional({ description: 'Replacement items (uses original items if not provided)', type: [CreateEInvoiceItemDto] })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateEInvoiceItemDto)
  items?: CreateEInvoiceItemDto[];

  @ApiPropertyOptional({ description: 'Override customer name' })
  @IsOptional()
  @IsString()
  customerName?: string;

  @ApiPropertyOptional({ description: 'Override customer tax code' })
  @IsOptional()
  @IsString()
  customerTaxCode?: string;

  @ApiPropertyOptional({ description: 'Override customer address' })
  @IsOptional()
  @IsString()
  customerAddress?: string;
}

// ============================================================================
// RESPONSE DTOs
// ============================================================================

export { EInvoiceData as EInvoiceResponseDto } from '../nats';
export { EInvoiceSummary as EInvoiceSummaryDto } from '../nats';
export { ProviderConfigData as ProviderConfigResponseDto } from '../nats';
export { ProviderConfigStatusData as ProviderConfigStatusDto } from '../nats';
