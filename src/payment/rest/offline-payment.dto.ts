import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString, IsUUID, Min } from 'class-validator';
import { OfflinePaymentStatus } from '../nats/offline-payment.nats';

export class OfflinePaymentDto {
  @ApiProperty() id: string;
  @ApiProperty() paymentId: string;
  @ApiProperty() bookingId: string;
  @ApiProperty({ enum: ['CASH', 'BANK_TRANSFER'] }) method: string;
  @ApiProperty() amount: number;
  @ApiProperty() currency: string;
  @ApiProperty({ enum: OfflinePaymentStatus }) status: OfflinePaymentStatus;
  @ApiPropertyOptional() referenceNumber?: string;
  @ApiPropertyOptional() receiptNumber?: string;
  @ApiPropertyOptional() receivedAt?: string;
  @ApiPropertyOptional() receivedBy?: string;
  @ApiPropertyOptional() receivedByName?: string;
  @ApiPropertyOptional() confirmedAt?: string;
  @ApiPropertyOptional() confirmedBy?: string;
  @ApiPropertyOptional() notes?: string;
  @ApiProperty() createdAt: string;
  @ApiProperty() updatedAt: string;
}

export class OfflinePaymentResponseDto {
  @ApiProperty() status: string;
  @ApiProperty() message: string;
  @ApiProperty({ type: OfflinePaymentDto }) data: OfflinePaymentDto;
}

export class OfflinePaymentListResponseDto {
  @ApiProperty() status: string;
  @ApiProperty() message: string;
  @ApiProperty({ type: [OfflinePaymentDto] }) data: OfflinePaymentDto[];
}


/**
 * Request body for confirming a pending offline payment (bank transfer)
 * Used by accountant to confirm BANK_TRANSFER payments in VERIFIED mode
 */
export class ConfirmOfflinePaymentDto {
  @ApiProperty({ description: 'User ID who confirmed the payment', format: 'uuid' })
  @IsUUID()
  @IsNotEmpty()
  confirmedBy: string;

  @ApiPropertyOptional({ description: 'Bank transaction ID (reference from bank statement)' })
  @IsString()
  @IsOptional()
  transactionId?: string;

  @ApiPropertyOptional({ description: 'Notes for this confirmation' })
  @IsString()
  @IsOptional()
  notes?: string;
}

/**
 * Request body for rejecting a pending offline payment (bank transfer)
 */
export class RejectOfflinePaymentDto {
  @ApiProperty({ description: 'User ID who rejected the payment', format: 'uuid' })
  @IsUUID()
  @IsNotEmpty()
  rejectedBy: string;

  @ApiPropertyOptional({ description: 'Reason for rejection' })
  @IsString()
  @IsOptional()
  notes?: string;
}

/**
 * Request body for refunding a confirmed offline payment (partial or full)
 */
export class RefundOfflinePaymentDto {
  @ApiProperty({ description: 'Refund amount (partial or full)', minimum: 1 })
  @IsNumber()
  @Min(1)
  amount: number;

  @ApiProperty({ description: 'Reason for the refund' })
  @IsString()
  @IsNotEmpty()
  reason: string;
}
