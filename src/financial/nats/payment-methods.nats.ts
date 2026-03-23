import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsOptional, IsBoolean, IsUUID } from 'class-validator';
import { NatsResponse } from '../../common';

/**
 * Payment Method NATS Contracts
 * Handler: payment-service
 */

export const PAYMENT_METHOD_PATTERNS = {
  CREATE: 'payment.payment-methods.create',
  FIND_ALL: 'payment.payment-methods.findAll',
} as const;

// ─── Create Payment Method ───

export class CreatePaymentMethodNatsRequest {
  @ApiProperty({ description: 'Tenant ID' })
  @IsUUID()
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID' })
  @IsUUID()
  hotelId: string;

  @ApiProperty({ description: 'Payment method name', maxLength: 100 })
  @IsString()
  name: string;

  @ApiPropertyOptional({ description: 'Description' })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional({ description: 'Active status', default: true })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}

export class PaymentMethodResponse {
  @ApiProperty()
  id: string;

  @ApiProperty()
  tenantId: string;

  @ApiProperty()
  hotelId: string;

  @ApiProperty()
  name: string;

  @ApiPropertyOptional()
  description?: string;

  @ApiProperty()
  isActive: boolean;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}

export type CreatePaymentMethodNatsResponse = NatsResponse<PaymentMethodResponse>;
