/**
 * Voucher NATS Message Contracts
 *
 * Patterns:
 * - pricing.vouchers.create
 * - pricing.vouchers.create_batch
 * - pricing.vouchers.find_all
 * - pricing.vouchers.find_one
 * - pricing.vouchers.update
 * - pricing.vouchers.delete
 * - pricing.vouchers.validate
 * - pricing.vouchers.use
 * - pricing.vouchers.unuse
 *
 * Handler: pricing-service (vouchers module)
 */

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsOptional, IsUUID, IsNumber, IsEnum, IsArray, IsDateString, Min, Max } from 'class-validator';
import { NatsResponse } from '../../common/nats-response.interface';
import { VoucherDto, VouchersPaginatedResponseDto, VoucherType, VoucherStatus } from '../types/voucher.types';

// ============================================================================
// REQUEST TYPES
// ============================================================================

export class CreateVoucherNatsRequest {
  @ApiProperty({ description: 'Tenant ID' })
  @IsUUID()
  tenantId: string;

  @ApiPropertyOptional({ description: 'Hotel ID (null = chain voucher)' })
  @IsOptional()
  @IsUUID()
  hotelId?: string;

  @ApiProperty({ description: 'Voucher code (unique per tenant)' })
  @IsString()
  code: string;

  @ApiProperty({ description: 'Voucher type', enum: ['VALUE', 'DISCOUNT_PERCENT', 'DISCOUNT_FIXED'] })
  @IsEnum(['VALUE', 'DISCOUNT_PERCENT', 'DISCOUNT_FIXED'])
  type: VoucherType;

  @ApiProperty({ description: 'Value (amount, percentage, or fixed discount)' })
  @IsNumber()
  @Min(0)
  value: number;

  @ApiPropertyOptional({ description: 'Minimum booking amount' })
  @IsOptional()
  @IsNumber()
  @Min(0)
  minBookingAmount?: number;

  @ApiPropertyOptional({ description: 'Applicable room type IDs' })
  @IsOptional()
  @IsArray()
  applicableRoomTypes?: string[];

  @ApiProperty({ description: 'Valid from (YYYY-MM-DD)' })
  @IsDateString()
  validFrom: string;

  @ApiProperty({ description: 'Valid to (YYYY-MM-DD)' })
  @IsDateString()
  validTo: string;

  @ApiPropertyOptional({ description: 'Issue to specific customer' })
  @IsOptional()
  @IsUUID()
  issuedToCustomerId?: string;

  @ApiPropertyOptional({ description: 'Source (SHOPEE, LAZADA, GOTIT, MANUAL, LOYALTY)' })
  @IsOptional()
  @IsString()
  source?: string;

  @ApiPropertyOptional({ description: 'Notes' })
  @IsOptional()
  @IsString()
  notes?: string;

  @ApiProperty({ description: 'Created by user ID' })
  @IsUUID()
  createdBy: string;
}

export class CreateVoucherBatchNatsRequest {
  @ApiProperty({ description: 'Tenant ID' })
  @IsUUID()
  tenantId: string;

  @ApiPropertyOptional({ description: 'Hotel ID' })
  @IsOptional()
  @IsUUID()
  hotelId?: string;

  @ApiProperty({ description: 'Code prefix (e.g., VCH)', example: 'VCH' })
  @IsString()
  prefix: string;

  @ApiProperty({ description: 'Number of vouchers to create', minimum: 1, maximum: 1000 })
  @IsNumber()
  @Min(1)
  @Max(1000)
  count: number;

  @ApiProperty({ description: 'Voucher type', enum: ['VALUE', 'DISCOUNT_PERCENT', 'DISCOUNT_FIXED'] })
  @IsEnum(['VALUE', 'DISCOUNT_PERCENT', 'DISCOUNT_FIXED'])
  type: VoucherType;

  @ApiProperty({ description: 'Value' })
  @IsNumber()
  @Min(0)
  value: number;

  @ApiPropertyOptional({ description: 'Minimum booking amount' })
  @IsOptional()
  @IsNumber()
  minBookingAmount?: number;

  @ApiPropertyOptional({ description: 'Applicable room type IDs' })
  @IsOptional()
  @IsArray()
  applicableRoomTypes?: string[];

  @ApiProperty({ description: 'Valid from (YYYY-MM-DD)' })
  @IsDateString()
  validFrom: string;

  @ApiProperty({ description: 'Valid to (YYYY-MM-DD)' })
  @IsDateString()
  validTo: string;

  @ApiPropertyOptional({ description: 'Source' })
  @IsOptional()
  @IsString()
  source?: string;

  @ApiProperty({ description: 'Created by user ID' })
  @IsUUID()
  createdBy: string;
}

export class GetVouchersNatsRequest {
  @ApiProperty({ description: 'Tenant ID' })
  @IsUUID()
  tenantId: string;

  @ApiPropertyOptional({ description: 'Hotel ID' })
  @IsOptional()
  @IsUUID()
  hotelId?: string;

  @ApiPropertyOptional({ description: 'Filter by status' })
  @IsOptional()
  @IsEnum(['ACTIVE', 'USED', 'EXPIRED', 'CANCELLED'])
  status?: VoucherStatus;

  @ApiPropertyOptional({ description: 'Filter by batch ID' })
  @IsOptional()
  @IsUUID()
  batchId?: string;

  @ApiPropertyOptional({ description: 'Filter by source' })
  @IsOptional()
  @IsString()
  source?: string;

  @ApiPropertyOptional({ description: 'Search by code' })
  @IsOptional()
  @IsString()
  search?: string;

  @ApiPropertyOptional({ description: 'Page', default: 1 })
  @IsOptional()
  @IsNumber()
  page?: number;

  @ApiPropertyOptional({ description: 'Limit', default: 20 })
  @IsOptional()
  @IsNumber()
  limit?: number;
}

export class GetVoucherByIdNatsRequest {
  @ApiProperty({ description: 'Voucher ID' })
  @IsUUID()
  id: string;

  @ApiProperty({ description: 'Tenant ID' })
  @IsUUID()
  tenantId: string;
}

export class UpdateVoucherNatsRequest {
  @ApiProperty({ description: 'Voucher ID' })
  @IsUUID()
  id: string;

  @ApiProperty({ description: 'Tenant ID' })
  @IsUUID()
  tenantId: string;

  @ApiPropertyOptional({ description: 'Updated value' })
  @IsOptional()
  @IsNumber()
  value?: number;

  @ApiPropertyOptional({ description: 'Updated min booking amount' })
  @IsOptional()
  @IsNumber()
  minBookingAmount?: number;

  @ApiPropertyOptional({ description: 'Updated applicable room types' })
  @IsOptional()
  @IsArray()
  applicableRoomTypes?: string[];

  @ApiPropertyOptional({ description: 'Updated valid from' })
  @IsOptional()
  @IsDateString()
  validFrom?: string;

  @ApiPropertyOptional({ description: 'Updated valid to' })
  @IsOptional()
  @IsDateString()
  validTo?: string;

  @ApiPropertyOptional({ description: 'Updated issued to customer' })
  @IsOptional()
  @IsUUID()
  issuedToCustomerId?: string;

  @ApiPropertyOptional({ description: 'Updated notes' })
  @IsOptional()
  @IsString()
  notes?: string;
}

export class DeleteVoucherNatsRequest {
  @ApiProperty({ description: 'Voucher ID' })
  @IsUUID()
  id: string;

  @ApiProperty({ description: 'Tenant ID' })
  @IsUUID()
  tenantId: string;
}

export class ValidateVoucherNatsRequest {
  @ApiProperty({ description: 'Tenant ID' })
  @IsUUID()
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID' })
  @IsUUID()
  hotelId: string;

  @ApiProperty({ description: 'Voucher code to validate' })
  @IsString()
  voucherCode: string;

  @ApiPropertyOptional({ description: 'Booking amount' })
  @IsOptional()
  @IsNumber()
  bookingAmount?: number;

  @ApiPropertyOptional({ description: 'Customer ID (for ownership check)' })
  @IsOptional()
  @IsUUID()
  customerId?: string;

  @ApiPropertyOptional({ description: 'Room type ID' })
  @IsOptional()
  @IsUUID()
  roomTypeId?: string;
}

export class ValidateVoucherResponse {
  @ApiProperty({ description: 'Whether voucher is valid' })
  isValid: boolean;

  @ApiPropertyOptional({ description: 'Voucher ID if valid' })
  voucherId?: string;

  @ApiProperty({ description: 'Voucher code' })
  voucherCode: string;

  @ApiPropertyOptional({ description: 'Voucher type', enum: ['VALUE', 'DISCOUNT_PERCENT', 'DISCOUNT_FIXED'] })
  type?: VoucherType;

  @ApiPropertyOptional({ description: 'Voucher value' })
  value?: number;

  @ApiPropertyOptional({ description: 'Applicable discount amount' })
  applicableAmount?: number;

  @ApiPropertyOptional({ description: 'Final amount after discount' })
  finalAmount?: number;

  @ApiPropertyOptional({ description: 'Validation message' })
  message?: string;
}

export class UseVoucherNatsRequest {
  @ApiProperty({ description: 'Tenant ID' })
  @IsUUID()
  tenantId: string;

  @ApiProperty({ description: 'Voucher ID' })
  @IsUUID()
  voucherId: string;

  @ApiProperty({ description: 'Booking ID' })
  @IsUUID()
  bookingId: string;

  @ApiPropertyOptional({ description: 'Customer ID' })
  @IsOptional()
  @IsUUID()
  customerId?: string;
}

export class UnuseVoucherNatsRequest {
  @ApiProperty({ description: 'Tenant ID' })
  @IsUUID()
  tenantId: string;

  @ApiProperty({ description: 'Voucher ID' })
  @IsUUID()
  voucherId: string;

  @ApiProperty({ description: 'Booking ID' })
  @IsUUID()
  bookingId: string;
}

// ============================================================================
// RESPONSE TYPES
// ============================================================================

export type CreateVoucherNatsResponse = NatsResponse<VoucherDto>;
export type CreateVoucherBatchNatsResponse = NatsResponse<{ created: number; batchId: string; vouchers: VoucherDto[] }>;
export type GetVouchersNatsResponse = NatsResponse<VouchersPaginatedResponseDto>;
export type GetVoucherByIdNatsResponse = NatsResponse<VoucherDto>;
export type UpdateVoucherNatsResponse = NatsResponse<VoucherDto>;
export type DeleteVoucherNatsResponse = NatsResponse<{ id: string; status: string }>;
export type ValidateVoucherNatsResponse = NatsResponse<ValidateVoucherResponse>;
export type UseVoucherNatsResponse = NatsResponse<{ voucherId: string; status: string }>;
export type UnuseVoucherNatsResponse = NatsResponse<{ voucherId: string; status: string }>;
