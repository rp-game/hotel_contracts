/**
 * Add Payment REST DTO
 * Body shape for POST /bookings/:id/payment (ghi nhận thanh toán bổ sung giữa kỳ).
 * bookingId lấy từ @Param; tenantId/hotelId/addedBy auto-inject từ JWT ở gateway.
 */

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional, IsNumber, IsEnum, IsUUID } from 'class-validator';
import { PaymentMethod } from '../../payment/enums/payment.enum';

export class AddPaymentDto {
  @ApiProperty({ description: 'Payment amount' })
  @IsNumber()
  @IsNotEmpty()
  amount: number;

  @ApiProperty({ description: 'Payment method', enum: PaymentMethod })
  @IsEnum(PaymentMethod)
  @IsNotEmpty()
  paymentMethod: PaymentMethod;

  @ApiPropertyOptional({ description: 'Corporate account ID (required when paymentMethod = COMPANY_ACCOUNT)' })
  @IsOptional()
  @IsUUID()
  corporateAccountId?: string;

  @ApiPropertyOptional({ description: 'Payment reference or transaction ID' })
  @IsOptional()
  @IsString()
  transactionId?: string;

  @ApiPropertyOptional({ description: 'Payment notes' })
  @IsOptional()
  @IsString()
  notes?: string;

  @ApiPropertyOptional({ description: 'Payer display name (auto-injected from JWT)' })
  @IsOptional()
  @IsString()
  payerName?: string;

  @ApiPropertyOptional({ description: 'Tenant ID (auto-injected)' })
  @IsOptional()
  @IsUUID()
  tenantId?: string;

  @ApiPropertyOptional({ description: 'Hotel ID (auto-injected)' })
  @IsOptional()
  @IsUUID()
  hotelId?: string;

  @ApiPropertyOptional({ description: 'User ID who processed the payment (auto-injected)' })
  @IsOptional()
  @IsUUID()
  addedBy?: string;
}
