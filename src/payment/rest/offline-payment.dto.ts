import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';

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
