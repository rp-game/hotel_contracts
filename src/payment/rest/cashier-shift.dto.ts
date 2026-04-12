import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString, Min } from 'class-validator';

// ─── Request DTOs ───────────────────────────────────────────────────

export class OpenCashierShiftDto {
  @ApiProperty({ description: 'Opening cash balance' })
  @IsNumber()
  @Min(0)
  openingBalance: number;
}

export class CloseCashierShiftDto {
  @ApiProperty({ description: 'Closing cash balance (counted by staff)' })
  @IsNumber()
  @Min(0)
  closingBalance: number;

  @ApiPropertyOptional({ description: 'Notes about the shift' })
  @IsOptional()
  @IsString()
  notes?: string;
}

export class ForceCloseCashierShiftDto {
  @ApiPropertyOptional({ description: 'Closing cash balance (optional for force-close)' })
  @IsOptional()
  @IsNumber()
  @Min(0)
  closingBalance?: number;

  @ApiProperty({ description: 'Reason for force-closing' })
  @IsString()
  reason: string;
}

// ─── Response DTOs ──────────────────────────────────────────────────

export class CashierShiftCurrencyBreakdownDto {
  @ApiProperty({ description: 'Original currency code (e.g. USD, EUR)' })
  currency: string;

  @ApiProperty({ description: 'Total original amount received in this currency' })
  totalOriginalAmount: number;

  @ApiProperty({ description: 'Equivalent VND amount' })
  totalVndAmount: number;

  @ApiProperty({ description: 'Number of transactions' })
  count: number;
}

export class CashierShiftPaymentSummaryDto {
  @ApiProperty({ description: 'Payment method' })
  method: string;

  @ApiProperty({ description: 'Number of payments' })
  count: number;

  @ApiProperty({ description: 'Total amount' })
  total: number;

  @ApiPropertyOptional({ type: [CashierShiftCurrencyBreakdownDto], description: 'Foreign currency breakdown' })
  currencyBreakdown?: CashierShiftCurrencyBreakdownDto[];
}

export class CashierShiftDto {
  @ApiProperty({ description: 'Shift ID' })
  id: string;

  @ApiProperty({ description: 'Staff ID' })
  staffId: string;

  @ApiProperty({ description: 'Staff name' })
  staffName: string;

  @ApiProperty({ description: 'Shift date' })
  shiftDate: string;

  @ApiProperty({ description: 'Shift type', enum: ['MORNING', 'AFTERNOON', 'NIGHT'] })
  shiftType: string;

  @ApiProperty({ description: 'When the shift was opened' })
  openedAt: string;

  @ApiPropertyOptional({ description: 'When the shift was closed' })
  closedAt?: string;

  @ApiProperty({ description: 'Opening balance' })
  openingBalance: number;

  @ApiPropertyOptional({ description: 'Closing balance' })
  closingBalance?: number;

  @ApiPropertyOptional({ description: 'Expected balance (opening + cash payments)' })
  expectedBalance?: number;

  @ApiPropertyOptional({ description: 'Discrepancy (closing - expected)' })
  discrepancy?: number;

  @ApiProperty({ description: 'Status', enum: ['OPEN', 'CLOSED', 'FORCE_CLOSED'] })
  status: string;

  @ApiPropertyOptional({ description: 'Notes' })
  notes?: string;

  @ApiPropertyOptional({ description: 'Closed by' })
  closedBy?: string;

  @ApiPropertyOptional({ description: 'Force close reason' })
  forceCloseReason?: string;

  @ApiProperty({ description: 'Created date' })
  createdAt: string;

  @ApiProperty({ description: 'Updated date' })
  updatedAt: string;
}

export class CashierShiftDetailDto extends CashierShiftDto {
  @ApiProperty({ type: [CashierShiftPaymentSummaryDto], description: 'Payment summary by method' })
  paymentSummary: CashierShiftPaymentSummaryDto[];

  @ApiProperty({ description: 'Total cash payments amount' })
  totalCashPayments: number;

  @ApiProperty({ description: 'Total number of payments' })
  totalPaymentsCount: number;
}
