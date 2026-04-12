import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsOptional, IsUUID, IsNumber, IsEnum, IsArray, IsDateString, Min, Max } from 'class-validator';
import { VoucherType } from '../types/voucher.types';

/**
 * REST body for POST /pricing/vouchers
 * tenantId, hotelId, createdBy are injected by the gateway from auth context
 */
export class CreateVoucherDto {
  @ApiProperty({ description: 'Unique voucher code (will be uppercased)' })
  @IsString()
  code: string;

  @ApiProperty({ description: 'Voucher type', enum: ['VALUE', 'DISCOUNT_PERCENT', 'DISCOUNT_FIXED'] })
  @IsEnum(['VALUE', 'DISCOUNT_PERCENT', 'DISCOUNT_FIXED'])
  type: VoucherType;

  @ApiProperty({ description: 'Value (monetary amount, percentage, or fixed discount)', minimum: 0 })
  @IsNumber()
  @Min(0)
  value: number;

  @ApiPropertyOptional({ description: 'Minimum booking amount required', minimum: 0 })
  @IsOptional()
  @IsNumber()
  @Min(0)
  minBookingAmount?: number;

  @ApiPropertyOptional({ description: 'Applicable room type IDs' })
  @IsOptional()
  @IsArray()
  applicableRoomTypes?: string[];

  @ApiProperty({ description: 'Valid from date (YYYY-MM-DD)' })
  @IsDateString()
  validFrom: string;

  @ApiProperty({ description: 'Valid to date (YYYY-MM-DD)' })
  @IsDateString()
  validTo: string;

  @ApiPropertyOptional({ description: 'Source (SHOPEE, LAZADA, GOTIT, MANUAL, LOYALTY)' })
  @IsOptional()
  @IsString()
  source?: string;

  @ApiPropertyOptional({ description: 'Issue to specific customer ID' })
  @IsOptional()
  @IsUUID()
  issuedToCustomerId?: string;

  @ApiPropertyOptional({ description: 'Notes' })
  @IsOptional()
  @IsString()
  notes?: string;
}

/**
 * REST body for POST /pricing/vouchers/batch
 */
export class CreateVoucherBatchDto {
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

  @ApiProperty({ description: 'Value', minimum: 0 })
  @IsNumber()
  @Min(0)
  value: number;

  @ApiPropertyOptional({ description: 'Minimum booking amount', minimum: 0 })
  @IsOptional()
  @IsNumber()
  @Min(0)
  minBookingAmount?: number;

  @ApiPropertyOptional({ description: 'Applicable room type IDs' })
  @IsOptional()
  @IsArray()
  applicableRoomTypes?: string[];

  @ApiProperty({ description: 'Valid from date (YYYY-MM-DD)' })
  @IsDateString()
  validFrom: string;

  @ApiProperty({ description: 'Valid to date (YYYY-MM-DD)' })
  @IsDateString()
  validTo: string;

  @ApiPropertyOptional({ description: 'Source' })
  @IsOptional()
  @IsString()
  source?: string;
}

/**
 * REST body for PUT /pricing/vouchers/:id
 */
export class UpdateVoucherDto {
  @ApiPropertyOptional({ description: 'Updated value', minimum: 0 })
  @IsOptional()
  @IsNumber()
  @Min(0)
  value?: number;

  @ApiPropertyOptional({ description: 'Updated minimum booking amount', minimum: 0 })
  @IsOptional()
  @IsNumber()
  @Min(0)
  minBookingAmount?: number;

  @ApiPropertyOptional({ description: 'Updated applicable room types' })
  @IsOptional()
  @IsArray()
  applicableRoomTypes?: string[];

  @ApiPropertyOptional({ description: 'Updated valid from date (YYYY-MM-DD)' })
  @IsOptional()
  @IsDateString()
  validFrom?: string;

  @ApiPropertyOptional({ description: 'Updated valid to date (YYYY-MM-DD)' })
  @IsOptional()
  @IsDateString()
  validTo?: string;

  @ApiPropertyOptional({ description: 'Updated issued to customer ID' })
  @IsOptional()
  @IsUUID()
  issuedToCustomerId?: string;

  @ApiPropertyOptional({ description: 'Updated notes' })
  @IsOptional()
  @IsString()
  notes?: string;
}

/**
 * REST body for POST /pricing/vouchers/validate
 */
export class ValidateVoucherDto {
  @ApiProperty({ description: 'Voucher code to validate' })
  @IsString()
  voucherCode: string;

  @ApiPropertyOptional({ description: 'Booking amount for minimum check' })
  @IsOptional()
  @IsNumber()
  @Min(0)
  bookingAmount?: number;

  @ApiPropertyOptional({ description: 'Customer ID for ownership check' })
  @IsOptional()
  @IsUUID()
  customerId?: string;

  @ApiPropertyOptional({ description: 'Room type ID for applicable check' })
  @IsOptional()
  @IsUUID()
  roomTypeId?: string;
}
