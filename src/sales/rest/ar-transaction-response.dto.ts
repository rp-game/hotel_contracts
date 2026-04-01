import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class ARTransactionResponseDto {
  @ApiProperty() id: string;
  @ApiProperty() hotelId: string;
  @ApiProperty() corporateAccountId: string;
  @ApiPropertyOptional() bookingId?: string;
  @ApiProperty() transactionType: string;
  @ApiProperty() amount: number;
  @ApiPropertyOptional() description?: string;
  @ApiPropertyOptional() referenceNumber?: string;
  @ApiPropertyOptional() dueDate?: string;
  @ApiProperty() transactionDate: string;
  @ApiProperty() currency: string;
  @ApiProperty() createdBy: string;
  @ApiPropertyOptional() createdByName?: string;
  @ApiProperty() createdAt: Date;
}

export class ARTransactionListResponseDto {
  @ApiProperty({ type: [ARTransactionResponseDto] })
  transactions: ARTransactionResponseDto[];

  @ApiProperty() total: number;
  @ApiProperty() page: number;
  @ApiProperty() limit: number;
  @ApiProperty() totalPages: number;
}

export class AgingBreakdownDto {
  @ApiProperty({ description: 'Current (0-30 days)' }) current: number;
  @ApiProperty({ description: '31-60 days' }) days30: number;
  @ApiProperty({ description: '61-90 days' }) days60: number;
  @ApiProperty({ description: '90+ days' }) days90plus: number;
}

export class ARSummaryResponseDto {
  @ApiProperty() corporateAccountId: string;
  @ApiProperty() companyName: string;
  @ApiProperty() creditLimit: number;
  @ApiProperty() currentBalance: number;
  @ApiProperty() pendingBookingsTotal: number;
  @ApiProperty() totalExposure: number;
  @ApiProperty() availableCredit: number;
  @ApiProperty() utilizationPercent: number;
  @ApiProperty({ type: AgingBreakdownDto }) aging: AgingBreakdownDto;
  @ApiPropertyOptional() lastPaymentDate?: string;
  @ApiPropertyOptional() lastPaymentAmount?: number;
}

export class CreditCheckResponseDto {
  @ApiProperty() creditLimit: number;
  @ApiProperty() currentBalance: number;
  @ApiProperty() pendingBookingsTotal: number;
  @ApiProperty() totalExposure: number;
  @ApiProperty() newAmount: number;
  @ApiProperty() projectedExposure: number;
  @ApiProperty() exceedsLimit: boolean;
  @ApiProperty() availableCredit: number;
}

export class AROverviewAgingDto {
  @ApiProperty({ description: 'Within NET 30 days — not yet overdue' }) current: number;
  @ApiProperty({ description: 'Overdue 1–30 days (31–60 days from charge)' }) days30: number;
  @ApiProperty({ description: 'Overdue 31–60 days (61–90 days from charge)' }) days60: number;
  @ApiProperty({ description: 'Overdue 61–90 days (91–120 days from charge)' }) days90: number;
  @ApiProperty({ description: 'Overdue >90 days (>120 days) — write-off risk' }) over120: number;
}

export class AROverviewItemDto {
  @ApiProperty() partnerId: string;
  @ApiProperty() partnerName: string;
  @ApiProperty({ enum: ['CORPORATE', 'TRAVEL_AGENT'] }) partnerType: string;
  @ApiProperty() balance: number;
  @ApiProperty({ description: 'Amount in days30+ buckets' }) overdueAmount: number;
  @ApiPropertyOptional() lastTransactionDate?: string;
  @ApiPropertyOptional() oldestUnpaidDate?: string;
  @ApiPropertyOptional() salesPersonId?: string;
  @ApiPropertyOptional() salesPersonName?: string;
  @ApiProperty({ type: AROverviewAgingDto }) agingBuckets: AROverviewAgingDto;
}

export class AROverviewSummaryDto {
  @ApiProperty() totalReceivable: number;
  @ApiProperty() totalOverdue: number;
  @ApiProperty() partnerCount: number;
  @ApiProperty({ type: AROverviewAgingDto }) aging: AROverviewAgingDto;
}

export class AROverviewResponseDto {
  @ApiProperty({ type: AROverviewSummaryDto }) summary: AROverviewSummaryDto;
  @ApiProperty({ type: [AROverviewItemDto] }) items: AROverviewItemDto[];
  @ApiProperty() total: number;
  @ApiProperty() page: number;
  @ApiProperty() limit: number;
}

export class ARBySalesItemDto {
  @ApiProperty() salesPersonId: string;
  @ApiProperty() salesPersonName: string;
  @ApiProperty() partnerCount: number;
  @ApiProperty() totalBalance: number;
  @ApiProperty() overdueAmount: number;
  @ApiProperty() overduePercent: number;
}

export class ARBySalesResponseDto {
  @ApiProperty({ type: [ARBySalesItemDto] }) items: ARBySalesItemDto[];
}
