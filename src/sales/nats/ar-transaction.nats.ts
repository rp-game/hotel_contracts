import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

/**
 * AR Transaction NATS Contracts
 *
 * NATS Patterns:
 *   - ar-transaction.create
 *   - ar-transaction.find_all
 *   - ar-summary.get
 *   - ar-statement.generate
 */

export class CreateARTransactionNatsRequest {
  @ApiProperty() tenantId: string;
  @ApiProperty() hotelId: string;
  @ApiProperty() corporateAccountId: string;
  @ApiPropertyOptional() bookingId?: string;
  @ApiProperty() transactionType: string;
  @ApiProperty() amount: number;
  @ApiPropertyOptional() description?: string;
  @ApiPropertyOptional() referenceNumber?: string;
  @ApiProperty() transactionDate: string;
  @ApiPropertyOptional() dueDate?: string;
  @ApiProperty() createdBy: string;
  @ApiPropertyOptional() createdByName?: string;
}

export class FindARTransactionsNatsRequest {
  @ApiProperty() tenantId: string;
  @ApiProperty() corporateAccountId: string;
  @ApiPropertyOptional() hotelId?: string;
  @ApiPropertyOptional() transactionType?: string;
  @ApiPropertyOptional() dateFrom?: string;
  @ApiPropertyOptional() dateTo?: string;
  @ApiPropertyOptional() page?: number;
  @ApiPropertyOptional() limit?: number;
}

export class GetARSummaryNatsRequest {
  @ApiProperty() tenantId: string;
  @ApiProperty() corporateAccountId: string;
}

export class GenerateARStatementNatsRequest {
  @ApiProperty() tenantId: string;
  @ApiProperty() corporateAccountId: string;
  @ApiProperty() dateFrom: string;
  @ApiProperty() dateTo: string;
}
