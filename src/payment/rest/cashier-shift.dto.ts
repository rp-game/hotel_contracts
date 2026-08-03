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

export class CashierShiftCashTransactionSummaryDto {
  @ApiProperty({ description: 'Direction: IN or OUT' })
  direction: string;

  @ApiProperty({ description: 'Category' })
  category: string;

  @ApiProperty({ description: 'Number of transactions' })
  count: number;

  @ApiProperty({ description: 'Total amount' })
  total: number;
}

export class CashierShiftLedgerEntryDto {
  @ApiProperty({ description: 'Entry type', enum: ['PAYMENT', 'CASH_TRANSACTION'] })
  type: 'PAYMENT' | 'CASH_TRANSACTION';

  @ApiProperty({ description: 'Entry ID' })
  id: string;

  @ApiProperty({ description: 'Timestamp' })
  time: string;

  @ApiPropertyOptional({ description: 'Payment method (PAYMENT entries)' })
  method?: string;

  @ApiPropertyOptional({ description: 'Direction (CASH_TRANSACTION entries)' })
  direction?: string;

  @ApiPropertyOptional({ description: 'Category (CASH_TRANSACTION entries)' })
  category?: string;

  @ApiProperty({ description: 'Amount' })
  amount: number;

  @ApiProperty({ description: 'Description' })
  description: string;

  @ApiPropertyOptional({ description: 'Staff who performed this transaction' })
  performedByName?: string;
}

export class CashierShiftReportDto extends CashierShiftDetailDto {
  @ApiProperty({ type: [CashierShiftCashTransactionSummaryDto], description: 'Cash transaction summary by direction/category' })
  cashTransactionSummary: CashierShiftCashTransactionSummaryDto[];

  @ApiProperty({ description: 'Total cash IN (thu ngoài)' })
  totalCashIn: number;

  @ApiProperty({ description: 'Total cash OUT (chi ngoài)' })
  totalCashOut: number;

  @ApiProperty({ type: [CashierShiftLedgerEntryDto], description: 'Combined transaction ledger (payments + cash transactions), sorted by time' })
  ledger: CashierShiftLedgerEntryDto[];
}
