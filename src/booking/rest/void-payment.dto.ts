/**
 * Void Booking Payment REST DTO
 * Body cho POST /bookings/:id/payments/:paymentId/void (huỷ 1 thanh toán công nợ — đảo AR).
 * bookingId/paymentId lấy từ @Param; tenantId/hotelId/voidedBy auto-inject từ JWT ở gateway.
 */

import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsOptional, IsUUID } from 'class-validator';

export class VoidBookingPaymentDto {
  @ApiPropertyOptional({ description: 'Lý do huỷ thanh toán' })
  @IsOptional()
  @IsString()
  reason?: string;

  @ApiPropertyOptional({ description: 'Tenant ID (auto-injected)' })
  @IsOptional()
  @IsUUID()
  tenantId?: string;

  @ApiPropertyOptional({ description: 'Hotel ID (auto-injected)' })
  @IsOptional()
  @IsUUID()
  hotelId?: string;

  @ApiPropertyOptional({ description: 'User ID huỷ (auto-injected)' })
  @IsOptional()
  @IsUUID()
  voidedBy?: string;
}
