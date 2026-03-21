/**
 * Voucher Types — Centralized Contracts
 *
 * Single-use unique codes (sold via Shopee/Lazada/Gotit or given to guests).
 * Different from promotions: per-instance lifecycle, not shared codes.
 */

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export type VoucherType = 'VALUE' | 'DISCOUNT_PERCENT' | 'DISCOUNT_FIXED';
export type VoucherStatus = 'ACTIVE' | 'USED' | 'EXPIRED' | 'CANCELLED';

export class VoucherDto {
  @ApiProperty({ description: 'Voucher ID' })
  id: string;

  @ApiProperty({ description: 'Tenant ID' })
  tenantId: string;

  @ApiPropertyOptional({ description: 'Hotel ID (null = chain voucher)' })
  hotelId?: string;

  @ApiProperty({ description: 'Unique voucher code' })
  code: string;

  @ApiPropertyOptional({ description: 'Batch ID (group of vouchers created together)' })
  batchId?: string;

  @ApiProperty({ description: 'Voucher type', enum: ['VALUE', 'DISCOUNT_PERCENT', 'DISCOUNT_FIXED'] })
  type: VoucherType;

  @ApiProperty({ description: 'Value (monetary amount, percentage, or fixed discount)' })
  value: number;

  @ApiPropertyOptional({ description: 'Minimum booking amount required' })
  minBookingAmount?: number;

  @ApiPropertyOptional({ description: 'Applicable room type IDs' })
  applicableRoomTypes?: string[];

  @ApiProperty({ description: 'Valid from date (YYYY-MM-DD)' })
  validFrom: string;

  @ApiProperty({ description: 'Valid to date (YYYY-MM-DD)' })
  validTo: string;

  @ApiProperty({ description: 'Voucher status', enum: ['ACTIVE', 'USED', 'EXPIRED', 'CANCELLED'] })
  status: VoucherStatus;

  @ApiPropertyOptional({ description: 'Customer ID this voucher was issued to' })
  issuedToCustomerId?: string;

  @ApiPropertyOptional({ description: 'Customer ID who used this voucher' })
  usedByCustomerId?: string;

  @ApiPropertyOptional({ description: 'Booking ID where voucher was used' })
  usedInBookingId?: string;

  @ApiPropertyOptional({ description: 'When voucher was used' })
  usedAt?: string;

  @ApiPropertyOptional({ description: 'Source (SHOPEE, LAZADA, GOTIT, MANUAL, LOYALTY)' })
  source?: string;

  @ApiPropertyOptional({ description: 'Notes' })
  notes?: string;

  @ApiProperty({ description: 'Created by user ID' })
  createdBy: string;

  @ApiProperty({ description: 'Created at' })
  createdAt: string;

  @ApiProperty({ description: 'Updated at' })
  updatedAt: string;
}

export class VouchersPaginatedResponseDto {
  @ApiProperty({ type: [VoucherDto] })
  data: VoucherDto[];

  @ApiProperty()
  total: number;

  @ApiProperty()
  page: number;

  @ApiProperty()
  limit: number;

  @ApiProperty()
  totalPages: number;
}
