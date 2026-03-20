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
