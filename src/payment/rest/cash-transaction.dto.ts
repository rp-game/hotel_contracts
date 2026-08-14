import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString, IsUUID, Min } from 'class-validator';
import { CashTransactionCategory, CashTransactionDirection, CashTransactionStatus } from '../nats/cash-transaction.nats';

// ─── Request DTOs ───────────────────────────────────────────────────

export class CreateCashTransactionDto {
  @ApiProperty({ description: 'Cashier shift ID (must be OPEN)' })
  @IsUUID()
  cashierShiftId: string;

  @ApiProperty({ description: 'Direction of the cash movement', enum: CashTransactionDirection })
  @IsEnum(CashTransactionDirection)
  direction: CashTransactionDirection;

  @ApiProperty({ description: 'Category of the cash movement', enum: CashTransactionCategory })
  @IsEnum(CashTransactionCategory)
  category: CashTransactionCategory;

  @ApiProperty({ description: 'Amount (must be > 0)' })
  @IsNumber()
  @Min(0.01)
  amount: number;

  @ApiPropertyOptional({ description: 'Currency code', default: 'VND' })
  @IsOptional()
  @IsString()
  currency?: string;

  @ApiProperty({ description: 'Reason for the transaction (required)' })
  @IsString()
  @IsNotEmpty()
  reason: string;

  @ApiPropertyOptional({ description: 'Reference number (e.g. receipt/voucher number)' })
  @IsOptional()
  @IsString()
  referenceNumber?: string;
}

export class CancelCashTransactionDto {
  @ApiProperty({ description: 'Lý do huỷ giao dịch (bắt buộc)' })
  @IsString()
  @IsNotEmpty()
  reason: string;
}

// ─── Response DTOs ──────────────────────────────────────────────────

export class CashTransactionDto {
  @ApiProperty({ description: 'Transaction ID' })
  id: string;

  @ApiPropertyOptional({ description: 'Mã phiếu thu/chi (PT-/PC-YYYYMMDD-NNN)' })
  voucherNo?: string | null;

  @ApiProperty({ description: 'Cashier shift ID' })
  cashierShiftId: string;

  @ApiProperty({ description: 'Direction', enum: CashTransactionDirection })
  direction: string;

  @ApiProperty({ description: 'Category', enum: CashTransactionCategory })
  category: string;

  @ApiProperty({ description: 'Amount' })
  amount: number;

  @ApiProperty({ description: 'Currency code' })
  currency: string;

  @ApiProperty({ description: 'Reason' })
  reason: string;

  @ApiPropertyOptional({ description: 'Reference number' })
  referenceNumber?: string;

  @ApiProperty({ description: 'Performed by (staff user ID)' })
  performedBy: string;

  @ApiProperty({ description: 'Performed by (staff display name)' })
  performedByName: string;

  @ApiProperty({ description: 'Created date' })
  createdAt: string;

  @ApiProperty({ description: 'Trạng thái giao dịch', enum: CashTransactionStatus })
  status: string;

  @ApiPropertyOptional({ description: 'Người huỷ (staff user ID)' })
  cancelledBy?: string | null;

  @ApiPropertyOptional({ description: 'Người huỷ (tên hiển thị)' })
  cancelledByName?: string | null;

  @ApiPropertyOptional({ description: 'Thời điểm huỷ' })
  cancelledAt?: string | null;

  @ApiPropertyOptional({ description: 'Lý do huỷ' })
  cancelReason?: string | null;
}
